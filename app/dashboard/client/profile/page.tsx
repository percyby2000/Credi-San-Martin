"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import {
  User,
  ArrowLeft,
  Edit,
  Save,
  Camera,
  Shield,
  Bell,
  CreditCard,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Building,
  Eye,
  EyeOff,
} from "lucide-react"
import Link from "next/link"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const [profileData, setProfileData] = useState({
    // Datos Personales
    firstName: "Pilar Dana",
    lastName: "Mitma Arango",
    dni: "72345678",
    fecha_nacimiento: "966458200",
    genero: "Femenino",
    estado : "Soltera",

    // Contacto
    email: "pilardana@gmail.com",
    telefono: "966458200",
    direccion: "Av. Los Olivos 123, San Juan",
    distrito: "San Juan",
    provincia: "Ayacucho",
    departamento: "Ayacucho",

    // Información Laboral
    occupacion: "Ingeniera de Sistemas",
    company: "Tech Solutions SAC",
    workAddress: "Av. Javier Prado 456, San juan",
    monthlyIncome: "5500",
    workPhone: "014567890",

    // Configuraciones
    notifications: {
      email: true,
      sms: true,
      push: true,
      marketing: false,
    },
  })

  const [securityData, setSecurityData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
    twoFactorEnabled: false,
    securityQuestions: {
      question1: "¿Cuál es el nombre de tu primera mascota?",
      answer1: "",
      question2: "¿En qué ciudad naciste?",
      answer2: "",
    },
  })

  const handleSaveProfile = () => {
    // Aquí iría la lógica para guardar el perfil
    setIsEditing(false)
    alert("Perfil actualizado exitosamente")
  }

  const handlePasswordChange = () => {
    if (securityData.newPassword !== securityData.confirmPassword) {
      alert("Las contraseñas no coinciden")
      return
    }
    alert("Contraseña actualizada exitosamente")
    setSecurityData({
      ...securityData,
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/dashboard/client" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5" />
              <span>Volver al Dashboard</span>
            </Link>
          </div>
          <h1 className="text-xl font-semibold">Mi Perfil</h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar con foto de perfil */}
          <div className="lg:col-span-1">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="relative mb-4">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                    <User className="w-12 h-12 text-blue-600" />
                  </div>
                  <Button size="sm" className="absolute bottom-0 right-1/2 transform translate-x-1/2 translate-y-1/2">
                    <Camera className="w-4 h-4" />
                  </Button>
                </div>
                <h3 className="font-semibold text-lg">
                  {profileData.firstName} {profileData.lastName}
                </h3>
                <p className="text-gray-600 text-sm">Socio desde 2020</p>
                <Badge className="mt-2 bg-green-100 text-green-700">Cuenta Activa</Badge>

                <div className="mt-6 space-y-3 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <CreditCard className="w-4 h-4 text-gray-500" />
                    <span>Socio N° 12345</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Calendar className="w-4 h-4 text-gray-500" />
                    <span>Miembro desde 2020</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Accesos Rápidos */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Accesos Rápidos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <CreditCard className="w-4 h-4 mr-2" />
                    Mis Productos
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Shield className="w-4 h-4 mr-2" />
                    Seguridad
                  </Button>
                  <Button variant="outline" className="w-full justify-start" size="sm">
                    <Bell className="w-4 h-4 mr-2" />
                    Notificaciones
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contenido Principal */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="personal" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="personal">Datos Personales</TabsTrigger>
                <TabsTrigger value="contact">Contacto</TabsTrigger>
                <TabsTrigger value="work">Información Laboral</TabsTrigger>
                <TabsTrigger value="security">Seguridad</TabsTrigger>
              </TabsList>

              <TabsContent value="personal" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Información Personal</CardTitle>
                        <CardDescription>Gestiona tu información personal básica</CardDescription>
                      </div>
                      <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? "default" : "outline"}>
                        {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                        {isEditing ? "Guardar" : "Editar"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName">Nombres</Label>
                        <Input
                          id="firstName"
                          value={profileData.firstName}
                          onChange={(e) => setProfileData({ ...profileData, firstName: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Apellidos</Label>
                        <Input
                          id="lastName"
                          value={profileData.lastName}
                          onChange={(e) => setProfileData({ ...profileData, lastName: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="dni">DNI</Label>
                        <Input id="dni" value={profileData.dni} disabled className="bg-gray-100" />
                        <p className="text-xs text-gray-500 mt-1">El DNI no se puede modificar</p>
                      </div>
                      <div>
                        <Label htmlFor="birthDate">Fecha de Nacimiento</Label>
                        <Input
                          id="birthDate"
                          type="date"
                          value={profileData.fecha_nacimiento}
                          onChange={(e) => setProfileData({ ...profileData, fecha_nacimiento: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="gender">Género</Label>
                        <Select
                          value={profileData.genero}
                          onValueChange={(value) => setProfileData({ ...profileData, genero: value })}
                          disabled={!isEditing}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Masculino</SelectItem>
                            <SelectItem value="female">Femenino</SelectItem>
                            <SelectItem value="other">Otro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <Label htmlFor="maritalStatus">Estado Civil</Label>
                        <Select
                          value={profileData.estado}
                          onValueChange={(value) => setProfileData({ ...profileData, estado: value })}
                          disabled={!isEditing}
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="single">Soltero(a)</SelectItem>
                            <SelectItem value="married">Casado(a)</SelectItem>
                            <SelectItem value="divorced">Divorciado(a)</SelectItem>
                            <SelectItem value="widowed">Viudo(a)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    {isEditing && (
                      <div className="mt-6 flex space-x-4">
                        <Button onClick={handleSaveProfile} className="bg-lime-500 hover:bg-lime-600">
                          <Save className="w-4 h-4 mr-2" />
                          Guardar Cambios
                        </Button>
                        <Button variant="outline" onClick={() => setIsEditing(false)}>
                          Cancelar
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="contact" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Información de Contacto</CardTitle>
                        <CardDescription>Mantén actualizada tu información de contacto</CardDescription>
                      </div>
                      <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? "default" : "outline"}>
                        {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                        {isEditing ? "Guardar" : "Editar"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="email">Correo Electrónico</Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="email"
                            type="email"
                            value={profileData.email}
                            onChange={(e) => setProfileData({ ...profileData, email: e.target.value })}
                            disabled={!isEditing}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="phone">Teléfono</Label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="phone"
                            value={profileData.telefono}
                            onChange={(e) => setProfileData({ ...profileData, telefono: e.target.value })}
                            disabled={!isEditing}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="address">Dirección</Label>
                        <div className="relative">
                          <MapPin className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
                          <Textarea
                            id="address"
                            value={profileData.direccion}
                            onChange={(e) => setProfileData({ ...profileData, direccion: e.target.value })}
                            disabled={!isEditing}
                            className="pl-10"
                            rows={2}
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="district">Distrito</Label>
                        <Input
                          id="district"
                          value={profileData.distrito}
                          onChange={(e) => setProfileData({ ...profileData, distrito: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="province">Provincia</Label>
                        <Input
                          id="province"
                          value={profileData.provincia}
                          onChange={(e) => setProfileData({ ...profileData, provincia: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="work" className="space-y-6">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <div>
                        <CardTitle>Información Laboral</CardTitle>
                        <CardDescription>Datos sobre tu situación laboral e ingresos</CardDescription>
                      </div>
                      <Button onClick={() => setIsEditing(!isEditing)} variant={isEditing ? "default" : "outline"}>
                        {isEditing ? <Save className="w-4 h-4 mr-2" /> : <Edit className="w-4 h-4 mr-2" />}
                        {isEditing ? "Guardar" : "Editar"}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="occupation">Ocupación</Label>
                        <Input
                          id="occupation"
                          value={profileData.occupacion}
                          onChange={(e) => setProfileData({ ...profileData, occupacion: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Empresa</Label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input
                            id="company"
                            value={profileData.company}
                            onChange={(e) => setProfileData({ ...profileData, company: e.target.value })}
                            disabled={!isEditing}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div className="md:col-span-2">
                        <Label htmlFor="workAddress">Dirección de Trabajo</Label>
                        <Input
                          id="workAddress"
                          value={profileData.workAddress}
                          onChange={(e) => setProfileData({ ...profileData, workAddress: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                      <div>
                        <Label htmlFor="monthlyIncome">Ingresos Mensuales</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">S/</span>
                          <Input
                            id="monthlyIncome"
                            type="number"
                            value={profileData.monthlyIncome}
                            onChange={(e) => setProfileData({ ...profileData, monthlyIncome: e.target.value })}
                            disabled={!isEditing}
                            className="pl-8"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="workPhone">Teléfono de Trabajo</Label>
                        <Input
                          id="workPhone"
                          value={profileData.workPhone}
                          onChange={(e) => setProfileData({ ...profileData, workPhone: e.target.value })}
                          disabled={!isEditing}
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="security" className="space-y-6">
                {/* Cambio de Contraseña */}
                <Card>
                  <CardHeader>
                    <CardTitle>Cambiar Contraseña</CardTitle>
                    <CardDescription>Actualiza tu contraseña para mantener tu cuenta segura</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="currentPassword">Contraseña Actual</Label>
                        <div className="relative">
                          <Input
                            id="currentPassword"
                            type={showPassword ? "text" : "password"}
                            value={securityData.currentPassword}
                            onChange={(e) => setSecurityData({ ...securityData, currentPassword: e.target.value })}
                            placeholder="Ingresa tu contraseña actual"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-0 top-0 h-full px-3"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </Button>
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="newPassword">Nueva Contraseña</Label>
                        <Input
                          id="newPassword"
                          type="password"
                          value={securityData.newPassword}
                          onChange={(e) => setSecurityData({ ...securityData, newPassword: e.target.value })}
                          placeholder="Ingresa tu nueva contraseña"
                        />
                      </div>
                      <div>
                        <Label htmlFor="confirmPassword">Confirmar Nueva Contraseña</Label>
                        <Input
                          id="confirmPassword"
                          type="password"
                          value={securityData.confirmPassword}
                          onChange={(e) => setSecurityData({ ...securityData, confirmPassword: e.target.value })}
                          placeholder="Confirma tu nueva contraseña"
                        />
                      </div>
                      <Button onClick={handlePasswordChange} className="bg-blue-500 hover:bg-blue-600">
                        <Shield className="w-4 h-4 mr-2" />
                        Actualizar Contraseña
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Autenticación de Dos Factores */}
                <Card>
                  <CardHeader>
                    <CardTitle>Autenticación de Dos Factores</CardTitle>
                    <CardDescription>Añade una capa extra de seguridad a tu cuenta</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Activar 2FA</h4>
                        <p className="text-sm text-gray-600">Recibe códigos de verificación por SMS</p>
                      </div>
                      <Switch
                        checked={securityData.twoFactorEnabled}
                        onCheckedChange={(checked) => setSecurityData({ ...securityData, twoFactorEnabled: checked })}
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Preguntas de Seguridad */}
                <Card>
                  <CardHeader>
                    <CardTitle>Preguntas de Seguridad</CardTitle>
                    <CardDescription>Configura preguntas de seguridad para recuperar tu cuenta</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <Label>Pregunta 1: {securityData.securityQuestions.question1}</Label>
                        <Input
                          value={securityData.securityQuestions.answer1}
                          onChange={(e) =>
                            setSecurityData({
                              ...securityData,
                              securityQuestions: {
                                ...securityData.securityQuestions,
                                answer1: e.target.value,
                              },
                            })
                          }
                          placeholder="Tu respuesta"
                        />
                      </div>
                      <div>
                        <Label>Pregunta 2: {securityData.securityQuestions.question2}</Label>
                        <Input
                          value={securityData.securityQuestions.answer2}
                          onChange={(e) =>
                            setSecurityData({
                              ...securityData,
                              securityQuestions: {
                                ...securityData.securityQuestions,
                                answer2: e.target.value,
                              },
                            })
                          }
                          placeholder="Tu respuesta"
                        />
                      </div>
                      <Button variant="outline">Guardar Respuestas</Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Configuración de Notificaciones */}
                <Card>
                  <CardHeader>
                    <CardTitle>Preferencias de Notificaciones</CardTitle>
                    <CardDescription>Controla cómo y cuándo recibes notificaciones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Notificaciones por Email</h4>
                          <p className="text-sm text-gray-600">Recibe actualizaciones por correo</p>
                        </div>
                        <Switch
                          checked={profileData.notifications.email}
                          onCheckedChange={(checked) =>
                            setProfileData({
                              ...profileData,
                              notifications: { ...profileData.notifications, email: checked },
                            })
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Notificaciones por SMS</h4>
                          <p className="text-sm text-gray-600">Recibe alertas por mensaje de texto</p>
                        </div>
                        <Switch
                          checked={profileData.notifications.sms}
                          onCheckedChange={(checked) =>
                            setProfileData({
                              ...profileData,
                              notifications: { ...profileData.notifications, sms: checked },
                            })
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Notificaciones Push</h4>
                          <p className="text-sm text-gray-600">Recibe notificaciones en la app</p>
                        </div>
                        <Switch
                          checked={profileData.notifications.push}
                          onCheckedChange={(checked) =>
                            setProfileData({
                              ...profileData,
                              notifications: { ...profileData.notifications, push: checked },
                            })
                          }
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-medium">Marketing y Promociones</h4>
                          <p className="text-sm text-gray-600">Recibe ofertas especiales</p>
                        </div>
                        <Switch
                          checked={profileData.notifications.marketing}
                          onCheckedChange={(checked) =>
                            setProfileData({
                              ...profileData,
                              notifications: { ...profileData.notifications, marketing: checked },
                            })
                          }
                        />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
