"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Imagenlogo from "@/public/logo.png";
import Image from "next/image";
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
  MoreHorizontal,
  ArrowLeft,
  Filter,
  Download,
} from "lucide-react"
import Link from "next/link"

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [showNewClientForm, setShowNewClientForm] = useState(false)

  const clients = [
    {
      id: 1,
      name: "Juan Pérez Rodríguez",
      dni: "12345678",
      phone: "(01) 234-5678",
      email: "juan.perez@email.com",
      address: "Av. Lima 123, San Martín de Porres",
      status: "active",
      lastContact: "2024-01-15",
      balance: "S/12,500.00",
      creditScore: 750,
      joinDate: "2023-06-15",
      products: ["Cuenta de Ahorros", "Préstamo Personal"],
    },
    {
      id: 2,
      name: "María López García",
      dni: "87654321",
      phone: "(01) 234-5679",
      email: "maria.lopez@email.com",
      address: "Jr. Los Olivos 456, Los Olivos",
      status: "pending",
      lastContact: "2024-01-14",
      balance: "S/8,750.50",
      creditScore: 680,
      joinDate: "2023-08-20",
      products: ["Cuenta de Ahorros"],
    },
    {
      id: 3,
      name: "Carlos Silva Mendoza",
      dni: "11223344",
      phone: "(01) 234-5680",
      email: "carlos.silva@email.com",
      address: "Calle Las Flores 789, Comas",
      status: "follow-up",
      lastContact: "2024-01-13",
      balance: "S/15,200.75",
      creditScore: 720,
      joinDate: "2023-04-10",
      products: ["Cuenta de Ahorros", "Tarjeta de Crédito", "Préstamo Vehicular"],
    },
    {
      id: 4,
      name: "Ana Torres Vega",
      dni: "55667788",
      phone: "(01) 234-5681",
      email: "ana.torres@email.com",
      address: "Av. Túpac Amaru 321, Independencia",
      status: "active",
      lastContact: "2024-01-15",
      balance: "S/22,100.00",
      creditScore: 800,
      joinDate: "2022-12-05",
      products: ["Cuenta de Ahorros", "Cuenta Corriente", "Préstamo Hipotecario"],
    },
  ]

  const filteredClients = clients.filter((client) => {
    const matchesSearch =
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.dni.includes(searchTerm) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = selectedFilter === "all" || client.status === selectedFilter

    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "follow-up":
        return "bg-orange-100 text-orange-700"
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
      case "follow-up":
        return "Seguimiento"
      default:
        return "Inactivo"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image src={Imagenlogo} alt="Logo" width={40} height={40} />
              </div>
              <span className="font-semibold text-gray-900">Credi SMP</span>
            </Link>
            <Badge className="bg-green-100 text-green-700">Empleada</Badge>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Bienvenido, Mavel Trejo</span>
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
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
          <Link href="/dashboard/employee" className="flex items-center text-blue-600 hover:text-blue-800">
            <ArrowLeft className="w-4 h-4 mr-1" />
            Dashboard
          </Link>
          <span className="text-gray-500">/</span>
          <span className="text-gray-900 font-medium">Mis Clientes</span>
        </div>

        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Mis Clientes</h1>
            <p className="text-gray-600">Gestiona tu cartera de clientes asignados</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button onClick={() => setShowNewClientForm(true)} className="bg-blue-500 hover:bg-blue-600">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Cliente
            </Button>
          </div>
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
                  <option value="follow-up">Seguimiento</option>
                </select>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Más filtros
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New Client Form */}
        {showNewClientForm && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Registrar Nuevo Cliente</CardTitle>
              <CardDescription>Completa la información básica del cliente</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Nombre Completo</Label>
                  <Input id="name" placeholder="Nombre completo del cliente" />
                </div>
                <div>
                  <Label htmlFor="dni">DNI</Label>
                  <Input id="dni" placeholder="Número de DNI" />
                </div>
                <div>
                  <Label htmlFor="phone">Teléfono</Label>
                  <Input id="phone" placeholder="Número de teléfono" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Correo electrónico" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="address">Dirección</Label>
                  <Input id="address" placeholder="Dirección completa" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="notes">Notas</Label>
                  <Textarea id="notes" placeholder="Notas adicionales sobre el cliente" rows={3} />
                </div>
              </div>
              <div className="flex space-x-2 mt-6">
                <Button className="bg-green-500 hover:bg-green-600">Registrar Cliente</Button>
                <Button variant="outline" onClick={() => setShowNewClientForm(false)}>
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Clients List */}
        <div className="grid gap-6">
          {filteredClients.map((client) => (
            <Card key={client.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start">
                  <div className="flex space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{client.name}</h3>
                        <Badge className={getStatusColor(client.status)}>{getStatusText(client.status)}</Badge>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <FileText className="w-4 h-4" />
                          <span>DNI: {client.dni}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4" />
                          <span>{client.phone}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4" />
                          <span>{client.email}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{client.address}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>Último contacto: {client.lastContact}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <CreditCard className="w-4 h-4" />
                          <span className="font-medium text-green-600">{client.balance}</span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <p className="text-sm text-gray-600 mb-1">Productos:</p>
                        <div className="flex flex-wrap gap-1">
                          {client.products.map((product, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {product}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="mt-3 flex items-center space-x-4 text-sm">
                        <span className="text-gray-600">
                          Score crediticio: <span className="font-medium text-blue-600">{client.creditScore}</span>
                        </span>
                        <span className="text-gray-600">
                          Cliente desde: <span className="font-medium">{client.joinDate}</span>
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Mail className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <MoreHorizontal className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                      Ver Perfil Completo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredClients.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <Users className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron clientes</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || selectedFilter !== "all"
                  ? "Intenta ajustar los filtros de búsqueda"
                  : "Aún no tienes clientes asignados"}
              </p>
              {!searchTerm && selectedFilter === "all" && (
                <Button onClick={() => setShowNewClientForm(true)} className="bg-blue-500 hover:bg-blue-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Registrar Primer Cliente
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
