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
  FileText,
  Building,
  Bell,
  LogOut,
  Search,
  Plus,
  Clock,
  CheckCircle,
  AlertTriangle,
  ArrowLeft,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  User,
  Calendar,
} from "lucide-react"
import Link from "next/link"

export default function ProceduresPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [showNewProcedureForm, setShowNewProcedureForm] = useState(false)

  const procedures = [
    {
      id: 1,
      code: "TR-2024-001",
      type: "Apertura de Cuenta",
      client: "Juan Pérez Rodríguez",
      status: "pending",
      priority: "medium",
      createdDate: "2024-01-15",
      dueDate: "2024-01-20",
      description: "Apertura de cuenta de ahorros con depósito inicial",
      documents: ["DNI", "Recibo de servicios", "Declaración jurada"],
      assignedTo: "Ana Martínez",
      progress: 60,
    },
    {
      id: 2,
      code: "TR-2024-002",
      type: "Actualización de Datos",
      client: "María López García",
      status: "in-progress",
      priority: "low",
      createdDate: "2024-01-14",
      dueDate: "2024-01-18",
      description: "Actualización de información de contacto y laboral",
      documents: ["DNI actualizado", "Constancia de trabajo"],
      assignedTo: "Ana Martínez",
      progress: 80,
    },
    {
      id: 3,
      code: "TR-2024-003",
      type: "Solicitud de Tarjeta",
      client: "Carlos Silva Mendoza",
      status: "completed",
      priority: "high",
      createdDate: "2024-01-10",
      dueDate: "2024-01-15",
      description: "Solicitud de tarjeta de débito adicional",
      documents: ["Solicitud firmada", "DNI"],
      assignedTo: "Ana Martínez",
      progress: 100,
    },
    {
      id: 4,
      code: "TR-2024-004",
      type: "Cierre de Cuenta",
      client: "Ana Torres Vega",
      status: "review",
      priority: "high",
      createdDate: "2024-01-12",
      dueDate: "2024-01-17",
      description: "Cierre de cuenta corriente por solicitud del cliente",
      documents: ["Solicitud de cierre", "Estado de cuenta", "DNI"],
      assignedTo: "Ana Martínez",
      progress: 90,
    },
  ]

  const filteredProcedures = procedures.filter((procedure) => {
    const matchesSearch =
      procedure.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      procedure.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      procedure.type.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = selectedFilter === "all" || procedure.status === selectedFilter

    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "in-progress":
        return "bg-blue-100 text-blue-700"
      case "review":
        return "bg-orange-100 text-orange-700"
      case "completed":
        return "bg-green-100 text-green-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Pendiente"
      case "in-progress":
        return "En Proceso"
      case "review":
        return "En Revisión"
      case "completed":
        return "Completado"
      default:
        return "Desconocido"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4" />
      case "in-progress":
        return <FileText className="w-4 h-4" />
      case "review":
        return <AlertTriangle className="w-4 h-4" />
      case "completed":
        return <CheckCircle className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "bg-red-500"
      case "medium":
        return "bg-yellow-500"
      case "low":
        return "bg-green-500"
      default:
        return "bg-gray-500"
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
          <span className="text-gray-900 font-medium">Trámites</span>
        </div>

        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Gestión de Trámites</h1>
            <p className="text-gray-600">Administra todos los trámites asignados</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button onClick={() => setShowNewProcedureForm(true)} className="bg-lime-500 hover:bg-lime-600">
              <Plus className="w-4 h-4 mr-2" />
              Nuevo Trámite
            </Button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Pendientes</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {procedures.filter((p) => p.status === "pending").length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">En Proceso</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {procedures.filter((p) => p.status === "in-progress").length}
                  </p>
                </div>
                <FileText className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">En Revisión</p>
                  <p className="text-2xl font-bold text-orange-600">
                    {procedures.filter((p) => p.status === "review").length}
                  </p>
                </div>
                <AlertTriangle className="w-8 h-8 text-orange-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Completados</p>
                  <p className="text-2xl font-bold text-green-600">
                    {procedures.filter((p) => p.status === "completed").length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
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
                    placeholder="Buscar por código, cliente o tipo de trámite..."
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
                  <option value="pending">Pendientes</option>
                  <option value="in-progress">En Proceso</option>
                  <option value="review">En Revisión</option>
                  <option value="completed">Completados</option>
                </select>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Más filtros
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* New Procedure Form */}
        {showNewProcedureForm && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Crear Nuevo Trámite</CardTitle>
              <CardDescription>Registra un nuevo trámite para procesar</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="client">Cliente</Label>
                  <Input id="client" placeholder="Nombre del cliente" />
                </div>
                <div>
                  <Label htmlFor="type">Tipo de Trámite</Label>
                  <select id="type" className="w-full p-2 border rounded-md">
                    <option value="">Seleccionar tipo</option>
                    <option value="apertura">Apertura de Cuenta</option>
                    <option value="actualizacion">Actualización de Datos</option>
                    <option value="tarjeta">Solicitud de Tarjeta</option>
                    <option value="cierre">Cierre de Cuenta</option>
                    <option value="credito">Solicitud de Crédito</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="priority">Prioridad</Label>
                  <select id="priority" className="w-full p-2 border rounded-md">
                    <option value="low">Baja</option>
                    <option value="medium">Media</option>
                    <option value="high">Alta</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="dueDate">Fecha Límite</Label>
                  <Input id="dueDate" type="date" />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="description">Descripción</Label>
                  <Textarea id="description" placeholder="Descripción detallada del trámite" rows={3} />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="documents">Documentos Requeridos</Label>
                  <Input id="documents" placeholder="Lista de documentos separados por comas" />
                </div>
              </div>
              <div className="flex space-x-2 mt-6">
                <Button className="bg-green-500 hover:bg-green-600">Crear Trámite</Button>
                <Button variant="outline" onClick={() => setShowNewProcedureForm(false)}>
                  Cancelar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Procedures List */}
        <div className="grid gap-6">
          {filteredProcedures.map((procedure) => (
            <Card key={procedure.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(procedure.status)}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{procedure.code}</h3>
                        <p className="text-sm text-gray-600">{procedure.type}</p>
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${getPriorityColor(procedure.priority)}`}></div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(procedure.status)}>{getStatusText(procedure.status)}</Badge>
                    <Badge variant="outline">
                      {procedure.priority === "high" ? "Alta" : procedure.priority === "medium" ? "Media" : "Baja"}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <span>
                      <strong>Cliente:</strong> {procedure.client}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>
                      <strong>Creado:</strong> {procedure.createdDate}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>
                      <strong>Vence:</strong> {procedure.dueDate}
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Descripción:</strong>
                  </p>
                  <p className="text-sm text-gray-600">{procedure.description}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Documentos requeridos:</strong>
                  </p>
                  <div className="flex flex-wrap gap-1">
                    {procedure.documents.map((doc, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {doc}
                      </Badge>
                    ))}
                  </div>
                </div>

                {procedure.status !== "completed" && (
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-700">Progreso</span>
                      <span className="text-gray-600">{procedure.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${procedure.progress}%` }}
                      ></div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Asignado a: <strong>{procedure.assignedTo}</strong>
                  </span>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      Ver
                    </Button>
                    <Button size="sm" variant="outline">
                      <Edit className="w-4 h-4 mr-1" />
                      Editar
                    </Button>
                    <Button size="sm" variant="outline">
                      <Upload className="w-4 h-4 mr-1" />
                      Documentos
                    </Button>
                    {procedure.status === "in-progress" && (
                      <Button size="sm" className="bg-green-500 hover:bg-green-600">
                        <CheckCircle className="w-4 h-4 mr-1" />
                        Completar
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProcedures.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron trámites</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || selectedFilter !== "all"
                  ? "Intenta ajustar los filtros de búsqueda"
                  : "Aún no tienes trámites asignados"}
              </p>
              {!searchTerm && selectedFilter === "all" && (
                <Button onClick={() => setShowNewProcedureForm(true)} className="bg-lime-500 hover:bg-lime-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Crear Primer Trámite
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
