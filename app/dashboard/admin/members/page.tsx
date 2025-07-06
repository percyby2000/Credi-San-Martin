"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Users,
  Building,
  Bell,
  LogOut,
  Search,
  Plus,
  Edit,
  Phone,
  Mail,
  MapPin,
  Calendar,
  CreditCard,
  FileText,
  ArrowLeft,
  Filter,
  Download,
  Eye,
  Trash2,
  UserCheck,
  UserX,
  Settings,
} from "lucide-react"
import Link from "next/link"

export default function MembersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [showNewMemberForm, setShowNewMemberForm] = useState(false)
  const [newMember, setNewMember] = useState({
    name: "",
    dni: "",
    phone: "",
    email: "",
    address: "",
    occupation: "",
    income: "",
    notes: "",
  })

  const [members, setMembers] = useState([
    {
      id: 1,
      name: "Juan Pérez Rodríguez",
      dni: "12345678",
      phone: "(01) 234-5678",
      email: "juan.perez@email.com",
      address: "Av. Lima 123, San Martín de Porres",
      status: "active",
      joinDate: "2023-06-15",
      balance: 12500.0,
      creditScore: 750,
      occupation: "Ingeniero",
      income: 4500,
      products: ["Cuenta de Ahorros", "Préstamo Personal"],
      lastActivity: "2024-01-15",
    },
    {
      id: 2,
      name: "María López García",
      dni: "87654321",
      phone: "(01) 234-5679",
      email: "maria.lopez@email.com",
      address: "Jr. Los Olivos 456, Los Olivos",
      status: "pending",
      joinDate: "2023-08-20",
      balance: 8750.5,
      creditScore: 680,
      occupation: "Profesora",
      income: 3200,
      products: ["Cuenta de Ahorros"],
      lastActivity: "2024-01-14",
    },
    {
      id: 3,
      name: "Carlos Silva Mendoza",
      dni: "11223344",
      phone: "(01) 234-5680",
      email: "carlos.silva@email.com",
      address: "Calle Las Flores 789, Comas",
      status: "active",
      joinDate: "2023-04-10",
      balance: 15200.75,
      creditScore: 720,
      occupation: "Comerciante",
      income: 5800,
      products: ["Cuenta de Ahorros", "Tarjeta de Crédito", "Préstamo Vehicular"],
      lastActivity: "2024-01-13",
    },
    {
      id: 4,
      name: "Ana Torres Vega",
      dni: "55667788",
      phone: "(01) 234-5681",
      email: "ana.torres@email.com",
      address: "Av. Túpac Amaru 321, Independencia",
      status: "inactive",
      joinDate: "2022-12-05",
      balance: 22100.0,
      creditScore: 800,
      occupation: "Médica",
      income: 7500,
      products: ["Cuenta de Ahorros", "Cuenta Corriente", "Préstamo Hipotecario"],
      lastActivity: "2023-12-20",
    },
  ])

  const filteredMembers = members.filter((member) => {
    const matchesSearch =
      member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      member.dni.includes(searchTerm) ||
      member.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = selectedFilter === "all" || member.status === selectedFilter

    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "inactive":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "active":
        return "Activo"
      case "pending":
        return "Pendiente"
      case "inactive":
        return "Inactivo"
      default:
        return "Desconocido"
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setNewMember((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmitNewMember = () => {
    if (!newMember.name || !newMember.dni || !newMember.phone || !newMember.email) {
      alert("Por favor completa todos los campos obligatorios")
      return
    }

    const newMemberData = {
      id: members.length + 1,
      name: newMember.name,
      dni: newMember.dni,
      phone: newMember.phone,
      email: newMember.email,
      address: newMember.address,
      status: "pending",
      joinDate: new Date().toISOString().split("T")[0],
      balance: 0,
      creditScore: 650,
      occupation: newMember.occupation,
      income: Number.parseFloat(newMember.income) || 0,
      products: ["Cuenta de Ahorros"],
      lastActivity: new Date().toISOString().split("T")[0],
    }

    setMembers((prev) => [...prev, newMemberData])
    setNewMember({
      name: "",
      dni: "",
      phone: "",
      email: "",
      address: "",
      occupation: "",
      income: "",
      notes: "",
    })
    setShowNewMemberForm(false)
    alert("Socio registrado exitosamente")
  }

  const approveMember = (memberId: number) => {
    setMembers((prev) => prev.map((member) => (member.id === memberId ? { ...member, status: "active" } : member)))
    alert("Socio aprobado exitosamente")
  }

  const suspendMember = (memberId: number) => {
    setMembers((prev) => prev.map((member) => (member.id === memberId ? { ...member, status: "inactive" } : member)))
    alert("Socio suspendido")
  }

  const deleteMember = (memberId: number) => {
    if (confirm("¿Estás seguro de que deseas eliminar este socio?")) {
      setMembers((prev) => prev.filter((member) => member.id !== memberId))
      alert("Socio eliminado")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-lime-400 to-green-500 rounded-full flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-gray-900">COOPSMP Admin</span>
            </Link>
            <Badge className="bg-red-100 text-red-700">Administrador</Badge>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
            </Button>
            <Button variant="ghost" size="sm">
              <Settings className="w-5 h-5" />
            </Button>
            <Link href="/login">
              <Button variant="outline" size="sm">
                <LogOut className="w-4 h-4 mr-2" />
                Salir
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="p-6">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 mb-6">
          <Link href="/dashboard/admin" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Dashboard
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-900 font-medium">Gestión de Socios</span>
        </div>

        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Gestión de Socios</h1>
            <p className="text-gray-600">Administra todos los socios de la cooperativa</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button onClick={() => setShowNewMemberForm(true)} className="bg-lime-500 hover:bg-lime-600">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Socio
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Socios</p>
                  <p className="text-2xl font-bold text-blue-600">{members.length}</p>
                </div>
                <Users className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Activos</p>
                  <p className="text-2xl font-bold text-green-600">
                    {members.filter((m) => m.status === "active").length}
                  </p>
                </div>
                <UserCheck className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pendientes</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {members.filter((m) => m.status === "pending").length}
                  </p>
                </div>
                <UserX className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Balance Total</p>
                  <p className="text-2xl font-bold text-lime-600">
                    S/{members.reduce((sum, m) => sum + m.balance, 0).toLocaleString()}
                  </p>
                </div>
                <CreditCard className="w-8 h-8 text-lime-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardContent className="p-4">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <Input
                    placeholder="Buscar por nombre, DNI o email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              <div className="flex space-x-2">
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value)}
                  className="px-3 py-2 border rounded-md"
                >
                  <option value="all">Todos los estados</option>
                  <option value="active">Activos</option>
                  <option value="pending">Pendientes</option>
                  <option value="inactive">Inactivos</option>
                </select>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Más filtros
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New Member Form */}
        {showNewMemberForm && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Registrar Nuevo Socio</CardTitle>
              <CardDescription>Completa la información del nuevo socio</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nombre Completo *</Label>
                  <Input
                    id="name"
                    placeholder="Nombre completo del socio"
                    value={newMember.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="dni">DNI *</Label>
                  <Input
                    id="dni"
                    placeholder="Número de DNI"
                    value={newMember.dni}
                    onChange={(e) => handleInputChange("dni", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono *</Label>
                  <Input
                    id="phone"
                    placeholder="Número de teléfono"
                    value={newMember.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Correo electrónico"
                    value={newMember.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="occupation">Ocupación</Label>
                  <Input
                    id="occupation"
                    placeholder="Ocupación o profesión"
                    value={newMember.occupation}
                    onChange={(e) => handleInputChange("occupation", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="income">Ingresos Mensuales (S/)</Label>
                  <Input
                    id="income"
                    type="number"
                    placeholder="Ingresos mensuales"
                    value={newMember.income}
                    onChange={(e) => handleInputChange("income", e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Dirección</Label>
                  <Input
                    id="address"
                    placeholder="Dirección completa"
                    value={newMember.address}
                    onChange={(e) => handleInputChange("address", e.target.value)}
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="notes">Notas</Label>
                  <Textarea
                    id="notes"
                    placeholder="Notas adicionales sobre el socio"
                    rows={3}
                    value={newMember.notes}
                    onChange={(e) => handleInputChange("notes", e.target.value)}
                  />
                </div>
              </div>
              <div className="flex space-x-2 mt-6">
                <Button onClick={handleSubmitNewMember} className="bg-green-500 hover:bg-green-600">
                  Registrar Socio
                </Button>
                <Button variant="outline" onClick={() => setShowNewMemberForm(false)}>
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Members List */}
        <div className="grid gap-6">
          {filteredMembers.map((member) => (
            <Card key={member.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                        <Badge className={getStatusColor(member.status)}>{getStatusText(member.status)}</Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4" />
                          <span>DNI: {member.dni}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>{member.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>{member.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{member.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>Socio desde: {member.joinDate}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CreditCard className="w-4 h-4" />
                          <span className="font-medium text-green-600">S/{member.balance.toLocaleString()}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600 mb-3">
                        <span>
                          Ocupación: <strong>{member.occupation}</strong>
                        </span>
                        <span>
                          Ingresos: <strong>S/{member.income.toLocaleString()}</strong>
                        </span>
                        <span>
                          Score: <strong className="text-blue-600">{member.creditScore}</strong>
                        </span>
                      </div>

                      <div className="mb-3">
                        <p className="text-sm text-gray-600 mb-1">Productos:</p>
                        <div className="flex flex-wrap gap-1">
                          {member.products.map((product, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="text-sm text-gray-600">
                        <span>
                          Última actividad: <span className="font-medium">{member.lastActivity}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="w-4 h-4" />
                      </Button>
                    </div>
                    <div className="flex space-x-2">
                      {member.status === "pending" && (
                        <Button
                          size="sm"
                          className="bg-green-500 hover:bg-green-600"
                          onClick={() => approveMember(member.id)}
                        >
                          <UserCheck className="w-4 h-4 mr-1" />
                          Aprobar
                        </Button>
                      )}
                      {member.status === "active" && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-yellow-600 border-yellow-600 hover:bg-yellow-50 bg-transparent"
                          onClick={() => suspendMember(member.id)}
                        >
                          <UserX className="w-4 h-4 mr-1" />
                          Suspender
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
                        onClick={() => deleteMember(member.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredMembers.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron socios</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || selectedFilter !== "all"
                  ? "Intenta ajustar los filtros de búsqueda"
                  : "Aún no hay socios registrados"}
              </p>
              {!searchTerm && selectedFilter === "all" && (
                <Button onClick={() => setShowNewMemberForm(true)} className="bg-lime-500 hover:bg-lime-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Registrar Primer Socio
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
