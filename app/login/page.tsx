"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building, User, Shield, Users, Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import Imagenlogo from "@/public/logo.png"

export default function LoginPage() {
  const [userType, setUserType] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  })
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()

    // Simulación de autenticación
    if (credentials.username && credentials.password && userType) {
      // Redirigir según el tipo de usuario
      switch (userType) {
        case "admin":
          router.push("/dashboard/admin")
          break
        case "client":
          router.push("/dashboard/client")
          break
        case "employee":
          router.push("/dashboard/employee")
          break
        default:
          break
      }
    }
  }

  const userTypes = [
    {
      value: "admin",
      label: "Administrador",
      icon: Shield,
      description: "Acceso completo al sistema",
    },
    {
      value: "client",
      label: "Cliente",
      icon: User,
      description: "Consultas y servicios personales",
    },
    {
      value: "employee",
      label: "Trabajador",
      icon: Users,
      description: "Gestión de trámites y operaciones",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-lime-50 via-white to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center space-x-2 mb-6">
            {Imagenlogo && (
            <img
              src={Imagenlogo.src}
              alt="Logo de la Cooperativa"
              width={40}
              height={40}
              className="object-cover"
            />
            )}
          
            <div className="text-left">
              <h1 className="text-xl font-bold text-gray-900">CREDI</h1>
              <p className="text-sm text-gray-600">San Martín de Porres</p>
            </div>
          </Link>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Acceso a Intranet</h2>
          <p className="text-gray-600">Ingresa a tu área personal</p>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-center">Iniciar Sesión</CardTitle>
            <CardDescription className="text-center">
              Selecciona tu tipo de usuario e ingresa tus credenciales
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              {/* User Type Selection */}
              <div className="space-y-2">
                <Label htmlFor="userType">Tipo de Usuario</Label>
                <Select value={userType} onValueChange={setUserType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona tu tipo de usuario" />
                  </SelectTrigger>
                  <SelectContent>
                    {userTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        <div className="flex items-center space-x-2">
                          <type.icon className="w-4 h-4" />
                          <div>
                            <div className="font-medium">{type.label}</div>
                            <div className="text-xs text-gray-500">{type.description}</div>
                          </div>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Username */}
              <div className="space-y-2">
                <Label htmlFor="username">Usuario</Label>
                <Input
                  id="username"
                  type="text"
                  placeholder="Ingresa tu usuario"
                  value={credentials.username}
                  onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
                  required
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingresa tu contraseña"
                    value={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full bg-lime-700 hover:bg-lime-600 text-white"
                disabled={!userType || !credentials.username || !credentials.password}
              >
                Ingresar
              </Button>

              {/* Links */}
              <div className="text-center space-y-2">
                <Link href="#" className="text-sm text-lime-600 hover:text-lime-700">
                  ¿Olvidaste tu contraseña?
                </Link>
                <div className="text-sm text-gray-600">
                  ¿No tienes cuenta?{" "}
                  <Link href="#" className="text-lime-600 hover:text-lime-700 font-medium">
                    Regístrate aquí
                  </Link>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Demo Credentials */}
        <Card className="mt-6 bg-blue-50 border-blue-200">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-blue-800">Credenciales para probar</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="text-xs text-blue-700 space-y-1">
              <div>
                <strong>Admin:</strong> admin / admin123
              </div>
              <div>
                <strong>Cliente:</strong> cliente / cliente123
              </div>
              <div>
                <strong>Trabajador:</strong> empleado / empleado123
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Back to Home */}
        <div className="text-center mt-6">
          <Link href="/" className="text-sm text-gray-600 hover:text-gray-800">
            ← Volver al sitio web
          </Link>
        </div>
      </div>
    </div>
  )
}
