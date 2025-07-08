"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Imagenlogo from "@/public/logo.png";
import Image from "next/image";
import {
  CreditCard,
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
  Eye,
  Edit,
  User,
  Calendar,
  DollarSign,
  FileText,
  Phone,
  Mail,
  XCircle,
} from "lucide-react"
import Link from "next/link"

export default function CreditRequestsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedFilter, setSelectedFilter] = useState("all")
  const [showNewRequestForm, setShowNewRequestForm] = useState(false)

  const creditRequests = [
    {
      id: 1,
      code: "CR-2024-001",
      type: "Préstamo Personal",
      client: "Juan Pérez Rodríguez",
      dni: "12345678",
      amount: 15000,
      term: 24,
      status: "pending",
      priority: "medium",
      createdDate: "2024-01-15",
      reviewDate: "2024-01-20",
      description: "Préstamo para gastos médicos familiares",
      income: 3500,
      creditScore: 750,
      documents: ["DNI", "Recibos de sueldo", "Certificado médico"],
      assignedTo: "Ana Martínez",
      interestRate: 18.5,
      monthlyPayment: 789.5,
    },
    {
      id: 2,
      code: "CR-2024-002",
      type: "Crédito Vehicular",
      client: "María López García",
      dni: "87654321",
      amount: 35000,
      term: 60,
      status: "review",
      priority: "high",
      createdDate: "2024-01-14",
      reviewDate: "2024-01-18",
      description: "Compra de vehículo para trabajo",
      income: 4200,
      creditScore: 680,
      documents: ["DNI", "Recibos de sueldo", "Proforma del vehículo", "SOAT"],
      assignedTo: "Ana Martínez",
      interestRate: 16.8,
      monthlyPayment: 865.2,
    },
    {
      id: 3,
      code: "CR-2024-003",
      type: "Préstamo Hipotecario",
      client: "Carlos Silva Mendoza",
      dni: "11223344",
      amount: 120000,
      term: 240,
      status: "approved",
      priority: "high",
      createdDate: "2024-01-10",
      reviewDate: "2024-01-15",
      description: "Compra de vivienda familiar",
      income: 6500,
      creditScore: 720,
      documents: ["DNI", "Recibos de sueldo", "Minuta de compraventa", "Tasación"],
      assignedTo: "Ana Martínez",
      interestRate: 12.5,
      monthlyPayment: 1345.8,
    },
    {
      id: 4,
      code: "CR-2024-004",
      type: "Préstamo Prendario",
      client: "Ana Torres Vega",
      dni: "55667788",
      amount: 8000,
      term: 12,
      status: "rejected",
      priority: "low",
      createdDate: "2024-01-12",
      reviewDate: "2024-01-17",
      description: "Préstamo con garantía de joyas",
      income: 2800,
      creditScore: 580,
      documents: ["DNI", "Recibos de sueldo", "Tasación de joyas"],
      assignedTo: "Ana Martínez",
      interestRate: 22.0,
      monthlyPayment: 745.6,
      rejectionReason: "Ingresos insuficientes para el monto solicitado",
    },
  ]

  const filteredRequests = creditRequests.filter((request) => {
    const matchesSearch =
      request.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      request.type.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesFilter = selectedFilter === "all" || request.status === selectedFilter

    return matchesSearch && matchesFilter
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "review":
        return "bg-blue-100 text-blue-700"
      case "approved":
        return "bg-green-100 text-green-700"
      case "rejected":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "pending":
        return "Pendiente"
      case "review":
        return "En Revisión"
      case "approved":
        return "Aprobado"
      case "rejected":
        return "Rechazado"
      default:
        return "Desconocido"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="w-4 h-4" />
      case "review":
        return <AlertTriangle className="w-4 h-4" />
      case "approved":
        return <CheckCircle className="w-4 h-4" />
      case "rejected":
        return <XCircle className="w-4 h-4" />
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

  const approveRequest = (requestId: number) => {
    // Lógica para aprobar solicitud
    console.log(`Aprobando solicitud ${requestId}`)
  }

  const rejectRequest = (requestId: number) => {
    // Lógica para rechazar solicitud
    console.log(`Rechazando solicitud ${requestId}`)
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
          <span className="text-gray-900 font-medium">Solicitudes de Crédito</span>
        </div>

        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Solicitudes de Crédito</h1>
            <p className="text-gray-600">Evalúa y procesa solicitudes de crédito</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Exportar
            </Button>
            <Button onClick={() => setShowNewRequestForm(true)} className="bg-green-500 hover:bg-green-600">
              <Plus className="w-4 h-4 mr-2" />
              Nueva Solicitud
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
                    {creditRequests.filter((r) => r.status === "pending").length}
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
                  <p className="text-sm font-medium text-gray-600">En Revisión</p>
                  <p className="text-2xl font-bold text-blue-600">
                    {creditRequests.filter((r) => r.status === "review").length}
                  </p>
                </div>
                <AlertTriangle className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Aprobados</p>
                  <p className="text-2xl font-bold text-green-600">
                    {creditRequests.filter((r) => r.status === "approved").length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Monto Total</p>
                  <p className="text-2xl font-bold text-lime-600">
                    S/{creditRequests.reduce((sum, r) => sum + r.amount, 0).toLocaleString()}
                  </p>
                </div>
                <DollarSign className="w-8 h-8 text-lime-500" />
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
                    placeholder="Buscar por código, cliente o tipo de crédito..."
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
                  <option value="review">En Revisión</option>
                  <option value="approved">Aprobados</option>
                  <option value="rejected">Rechazados</option>
                </select>
                <Button variant="outline">
                  <Filter className="w-4 h-4 mr-2" />
                  Más filtros
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Credit Requests List */}
        <div className="grid gap-6">
          {filteredRequests.map((request) => (
            <Card key={request.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-2">
                      {getStatusIcon(request.status)}
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{request.code}</h3>
                        <p className="text-sm text-gray-600">{request.type}</p>
                      </div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${getPriorityColor(request.priority)}`}></div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Badge className={getStatusColor(request.status)}>{getStatusText(request.status)}</Badge>
                    <Badge variant="outline">
                      {request.priority === "high" ? "Alta" : request.priority === "medium" ? "Media" : "Baja"}
                    </Badge>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <User className="w-4 h-4" />
                    <div>
                      <p>
                        <strong>Cliente:</strong> {request.client}
                      </p>
                      <p className="text-xs">DNI: {request.dni}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <DollarSign className="w-4 h-4" />
                    <div>
                      <p>
                        <strong>Monto:</strong> S/{request.amount.toLocaleString()}
                      </p>
                      <p className="text-xs">{request.term} meses</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <div>
                      <p>
                        <strong>Creado:</strong> {request.createdDate}
                      </p>
                      <p className="text-xs">Revisión: {request.reviewDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <CreditCard className="w-4 h-4" />
                    <div>
                      <p>
                        <strong>Score:</strong> {request.creditScore}
                      </p>
                      <p className="text-xs">Ingresos: S/{request.income.toLocaleString()}</p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm text-gray-700 mb-2">
                    <strong>Descripción:</strong>
                  </p>
                  <p className="text-sm text-gray-600">{request.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Documentos requeridos:</strong>
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {request.documents.map((doc, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {doc}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700 mb-2">
                      <strong>Condiciones:</strong>
                    </p>
                    <div className="text-sm text-gray-600">
                      <p>
                        Tasa de interés: <strong>{request.interestRate}%</strong>
                      </p>
                      <p>
                        Cuota mensual: <strong>S/{request.monthlyPayment}</strong>
                      </p>
                    </div>
                  </div>
                </div>

                {request.status === "rejected" && request.rejectionReason && (
                  <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-sm text-red-700">
                      <strong>Motivo de rechazo:</strong> {request.rejectionReason}
                    </p>
                  </div>
                )}

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">
                    Asignado a: <strong>{request.assignedTo}</strong>
                  </span>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline">
                      <Eye className="w-4 h-4 mr-1" />
                      Ver Detalles
                    </Button>
                    <Button size="sm" variant="outline">
                      <Phone className="w-4 h-4 mr-1" />
                      Contactar
                    </Button>
                    <Button size="sm" variant="outline">
                      <Mail className="w-4 h-4 mr-1" />
                      Email
                    </Button>
                    {request.status === "pending" && (
                      <>
                        <Button
                          size="sm"
                          variant="outline"
                          className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent"
                          onClick={() => rejectRequest(request.id)}
                        >
                          <XCircle className="w-4 h-4 mr-1" />
                          Rechazar
                        </Button>
                        <Button
                          size="sm"
                          className="bg-green-500 hover:bg-green-600"
                          onClick={() => approveRequest(request.id)}
                        >
                          <CheckCircle className="w-4 h-4 mr-1" />
                          Aprobar
                        </Button>
                      </>
                    )}
                    {request.status === "review" && (
                      <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                        <Edit className="w-4 h-4 mr-1" />
                        Revisar
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredRequests.length === 0 && (
          <Card>
            <CardContent className="p-12 text-center">
              <CreditCard className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron solicitudes</h3>
              <p className="text-gray-600 mb-4">
                {searchTerm || selectedFilter !== "all"
                  ? "Intenta ajustar los filtros de búsqueda"
                  : "Aún no tienes solicitudes de crédito asignadas"}
              </p>
              {!searchTerm && selectedFilter === "all" && (
                <Button onClick={() => setShowNewRequestForm(true)} className="bg-green-500 hover:bg-green-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Crear Primera Solicitud
                </Button>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
