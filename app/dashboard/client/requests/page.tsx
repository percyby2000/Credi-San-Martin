"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, ArrowLeft, Upload, CheckCircle, Clock, AlertTriangle, Eye, Download, Plus } from "lucide-react"
import Link from "next/link"

export default function RequestsPage() {
  const [requestType, setRequestType] = useState("credit")
  const [creditType, setCreditType] = useState("personal")
  const [amount, setAmount] = useState("")
  const [term, setTerm] = useState("")
  const [purpose, setPurpose] = useState("")
  const [income, setIncome] = useState("")

  const [myRequests] = useState([
    {
      id: 1,
      type: "Préstamo Personal",
      amount: 15000,
      status: "approved",
      date: "2024-11-15",
      reference: "SOL001234",
      comments: "Aprobado con tasa preferencial del 16% anual",
    },
    {
      id: 2,
      type: "Crédito Vehicular",
      amount: 35000,
      status: "pending",
      date: "2024-11-10",
      reference: "SOL001235",
      comments: "En proceso de evaluación. Faltan documentos de ingresos.",
    },
    {
      id: 3,
      type: "Tarjeta de Crédito",
      amount: 8000,
      status: "rejected",
      date: "2024-10-25",
      reference: "SOL001236",
      comments: "No cumple con los requisitos mínimos de ingresos.",
    },
  ])

  const handleSubmitRequest = (e: React.FormEvent) => {
    e.preventDefault()
    alert("Solicitud enviada exitosamente. Recibirás una respuesta en 24-48 horas.")
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "approved":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "rejected":
        return "bg-red-100 text-red-700"
      case "in_review":
        return "bg-blue-100 text-blue-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "approved":
        return "Aprobada"
      case "pending":
        return "Pendiente"
      case "rejected":
        return "Rechazada"
      case "in_review":
        return "En Revisión"
      default:
        return "Desconocido"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "approved":
        return <CheckCircle className="w-4 h-4" />
      case "pending":
        return <Clock className="w-4 h-4" />
      case "rejected":
        return <AlertTriangle className="w-4 h-4" />
      case "in_review":
        return <Eye className="w-4 h-4" />
      default:
        return <FileText className="w-4 h-4" />
    }
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
          <h1 className="text-xl font-semibold">Solicitudes</h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <Tabs defaultValue="new" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="new">Nueva Solicitud</TabsTrigger>
            <TabsTrigger value="history">Mis Solicitudes</TabsTrigger>
          </TabsList>

          <TabsContent value="new" className="space-y-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Formulario de Nueva Solicitud */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <FileText className="w-5 h-5 mr-2" />
                      Nueva Solicitud
                    </CardTitle>
                    <CardDescription>Completa el formulario para solicitar un producto financiero</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmitRequest} className="space-y-6">
                      {/* Tipo de Solicitud */}
                      <div>
                        <Label>Tipo de Solicitud</Label>
                        <Select value={requestType} onValueChange={setRequestType}>
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="credit">Solicitud de Crédito</SelectItem>
                            <SelectItem value="card">Tarjeta de Crédito</SelectItem>
                            <SelectItem value="account">Nueva Cuenta</SelectItem>
                            <SelectItem value="increase">Aumento de Línea</SelectItem>
                            <SelectItem value="other">Otro Servicio</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      {requestType === "credit" && (
                        <>
                          {/* Tipo de Crédito */}
                          <div>
                            <Label>Tipo de Crédito</Label>
                            <Select value={creditType} onValueChange={setCreditType}>
                              <SelectTrigger>
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="personal">Préstamo Personal</SelectItem>
                                <SelectItem value="vehicular">Crédito Vehicular</SelectItem>
                                <SelectItem value="hipotecario">Crédito Hipotecario</SelectItem>
                                <SelectItem value="prendario">Crédito Prendario</SelectItem>
                                <SelectItem value="microempresa">Microempresa</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>

                          {/* Monto Solicitado */}
                          <div>
                            <Label>Monto Solicitado</Label>
                            <div className="relative">
                              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                                S/
                              </span>
                              <Input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                placeholder="0.00"
                                className="pl-8"
                                min="1000"
                                required
                              />
                            </div>
                            <p className="text-sm text-gray-500 mt-1">Monto mínimo: S/1,000</p>
                          </div>

                          {/* Plazo */}
                          <div>
                            <Label>Plazo Deseado (meses)</Label>
                            <Select value={term} onValueChange={setTerm}>
                              <SelectTrigger>
                                <SelectValue placeholder="Selecciona el plazo" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="6">6 meses</SelectItem>
                                <SelectItem value="12">12 meses</SelectItem>
                                <SelectItem value="18">18 meses</SelectItem>
                                <SelectItem value="24">24 meses</SelectItem>
                                <SelectItem value="36">36 meses</SelectItem>
                                <SelectItem value="48">48 meses</SelectItem>
                                <SelectItem value="60">60 meses</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </>
                      )}

                      {/* Ingresos Mensuales */}
                      <div>
                        <Label>Ingresos Mensuales</Label>
                        <div className="relative">
                          <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">S/</span>
                          <Input
                            type="number"
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                            placeholder="0.00"
                            className="pl-8"
                            required
                          />
                        </div>
                      </div>

                      {/* Finalidad */}
                      <div>
                        <Label>Finalidad del Crédito</Label>
                        <Textarea
                          value={purpose}
                          onChange={(e) => setPurpose(e.target.value)}
                          placeholder="Describe para qué utilizarás el crédito"
                          rows={3}
                          required
                        />
                      </div>

                      {/* Documentos */}
                      <div>
                        <Label>Documentos Requeridos</Label>
                        <div className="space-y-3 mt-2">
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-2">
                              <FileText className="w-4 h-4 text-blue-500" />
                              <span className="text-sm">DNI (ambas caras)</span>
                            </div>
                            <Button size="sm" variant="outline">
                              <Upload className="w-4 h-4 mr-2" />
                              Subir
                            </Button>
                          </div>
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-2">
                              <FileText className="w-4 h-4 text-blue-500" />
                              <span className="text-sm">Recibo de ingresos (3 últimos)</span>
                            </div>
                            <Button size="sm" variant="outline">
                              <Upload className="w-4 h-4 mr-2" />
                              Subir
                            </Button>
                          </div>
                          <div className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-2">
                              <FileText className="w-4 h-4 text-blue-500" />
                              <span className="text-sm">Declaración jurada de ingresos</span>
                            </div>
                            <Button size="sm" variant="outline">
                              <Upload className="w-4 h-4 mr-2" />
                              Subir
                            </Button>
                          </div>
                        </div>
                      </div>

                      {/* Botones */}
                      <div className="flex space-x-4">
                        <Button type="submit" className="flex-1 bg-lime-500 hover:bg-lime-600">
                          <Plus className="w-4 h-4 mr-2" />
                          Enviar Solicitud
                        </Button>
                        <Button type="button" variant="outline">
                          Guardar Borrador
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Información Adicional */}
              <div className="space-y-6">
                {/* Requisitos */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Requisitos</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>Ser socio activo de la cooperativa</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>Tener ingresos demostrables</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>No tener deudas vencidas</span>
                      </div>
                      <div className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                        <span>Presentar documentación completa</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Tasas de Interés */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Tasas de Interés</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>Préstamo Personal:</span>
                        <span className="font-semibold text-blue-600">16% - 20%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Crédito Vehicular:</span>
                        <span className="font-semibold text-blue-600">12% - 16%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Crédito Hipotecario:</span>
                        <span className="font-semibold text-blue-600">10% - 14%</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Microempresa:</span>
                        <span className="font-semibold text-blue-600">18% - 24%</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-3">*Tasas referenciales sujetas a evaluación crediticia</p>
                  </CardContent>
                </Card>

                {/* Tiempo de Respuesta */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Tiempo de Respuesta</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>Evaluación inicial: 24 horas</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>Respuesta final: 3-5 días hábiles</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-500" />
                        <span>Desembolso: 1-2 días hábiles</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="history" className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-center">
                  <div>
                    <CardTitle>Historial de Solicitudes</CardTitle>
                    <CardDescription>Todas tus solicitudes realizadas</CardDescription>
                  </div>
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Exportar
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myRequests.map((request) => (
                    <div key={request.id} className="p-4 border rounded-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4">
                          <div
                            className={`w-10 h-10 rounded-full flex items-center justify-center ${getStatusColor(request.status)}`}
                          >
                            {getStatusIcon(request.status)}
                          </div>
                          <div>
                            <h4 className="font-medium">{request.type}</h4>
                            <p className="text-sm text-gray-600">Monto: S/{request.amount.toLocaleString()}</p>
                            <p className="text-xs text-gray-500">
                              Fecha: {request.date} • Ref: {request.reference}
                            </p>
                            {request.comments && (
                              <p className="text-sm text-gray-700 mt-2 p-2 bg-gray-50 rounded">{request.comments}</p>
                            )}
                          </div>
                        </div>
                        <div className="text-right">
                          <Badge className={getStatusColor(request.status)}>{getStatusText(request.status)}</Badge>
                          <div className="mt-2 space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="w-4 h-4 mr-1" />
                              Ver
                            </Button>
                            {request.status === "pending" && (
                              <Button size="sm" variant="outline">
                                Editar
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
