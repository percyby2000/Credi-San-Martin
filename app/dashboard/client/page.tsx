"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Imagenlogo from "@/public/logo.png";
import Image from "next/image";
import {
  User,
  DollarSign,
  CreditCard,
  PiggyBank,
  Building,
  Bell,
  LogOut,
  Home,
  FileText,
  Calculator,
  Send,
  Download,
  Eye,
  TrendingUp,
  Calendar,
  AlertCircle,
  CheckCircle,
  Clock,
} from "lucide-react"
import Link from "next/link"

export default function ClientDashboard() {
  const [notifications] = useState([
    { id: 1, message: "Tu crédito ha sido aprobado", type: "success", time: "Hace 2 horas" },
    { id: 2, message: "Próximo pago vence en 5 días", type: "warning", time: "Hace 1 día" },
    { id: 3, message: "Nueva promoción disponible", type: "info", time: "Hace 2 días" },
  ])

  const accountSummary = {
    savings: 15750.5,
    checking: 3240.75,
    creditLimit: 25000,
    creditUsed: 8500,
    nextPayment: 450.0,
    paymentDate: "2024-12-15",
  }

  const recentTransactions = [
    { id: 1, description: "Depósito en efectivo", amount: 500.0, date: "2024-11-20", type: "credit" },
    { id: 2, description: "Pago de servicios", amount: -120.5, date: "2024-11-19", type: "debit" },
    { id: 3, description: "Transferencia recibida", amount: 800.0, date: "2024-11-18", type: "credit" },
    { id: 4, description: "Compra en línea", amount: -89.99, date: "2024-11-17", type: "debit" },
  ]

  const creditApplications = [
    { id: 1, type: "Préstamo Personal", amount: 15000, status: "approved", date: "2024-11-15" },
    { id: 2, type: "Crédito Vehicular", amount: 35000, status: "pending", date: "2024-11-10" },
  ]

  accountSummary.savings = 15750.5
  accountSummary.checking = 3240.75
  accountSummary.creditLimit = 25000
  accountSummary.creditUsed = 8500
  accountSummary.nextPayment = 450.0

  recentTransactions.forEach((transaction) => {
    transaction.amount = Math.abs(transaction.amount)
  })

  creditApplications.forEach((application) => {
    application.amount = application.amount
  })

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
            <Badge className="bg-blue-100 text-blue-700">Cliente</Badge>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">Bienvenido, Pilar Mitma</span>
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

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start bg-blue-50 text-blue-700">
              <Home className="w-4 h-4 mr-3" />
              Mi Dashboard
            </Button>
            <Link href="/dashboard/client/transfers">
              <Button variant="ghost" className="w-full justify-start">
                <Send className="w-4 h-4 mr-3" />
                Transferencias
              </Button>
            </Link>
            <Link href="/dashboard/client/requests">
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-3" />
                Solicitudes
              </Button>
            </Link>
            <Link href="/dashboard/client/simulators">
              <Button variant="ghost" className="w-full justify-start">
                <Calculator className="w-4 h-4 mr-3" />
                Simuladores
              </Button>
            </Link>
            <Link href="/dashboard/client/profile">
              <Button variant="ghost" className="w-full justify-start">
                <User className="w-4 h-4 mr-3" />
                Mi Perfil
              </Button>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Mi Dashboard</h1>
            <p className="text-gray-600">Gestiona tus finanzas de manera fácil y segura</p>
          </div>

          {/* Account Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Cuenta de Ahorros</p>
                    <p className="text-2xl font-bold text-gray-900">S/{accountSummary.savings.toLocaleString()}</p>
                    <p className="text-sm text-green-600">+2.5% este mes</p>
                  </div>
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                    <PiggyBank className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Cuenta Corriente</p>
                    <p className="text-2xl font-bold text-gray-900">S/{accountSummary.checking.toLocaleString()}</p>
                    <p className="text-sm text-blue-600">Disponible</p>
                  </div>
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Línea de Crédito</p>
                    <p className="text-2xl font-bold text-gray-900">
                      S/{(accountSummary.creditLimit - accountSummary.creditUsed).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">de S/{accountSummary.creditLimit.toLocaleString()}</p>
                  </div>
                  <div className="w-12 h-12 bg-lime-500 rounded-lg flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Próximo Pago</p>
                    <p className="text-2xl font-bold text-gray-900">S/{accountSummary.nextPayment.toLocaleString()}</p>
                    <p className="text-sm text-orange-600">{accountSummary.paymentDate}</p>
                  </div>
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Dashboard */}
            <div className="lg:col-span-2 space-y-6">
              <Tabs defaultValue="transactions" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="transactions">Movimientos</TabsTrigger>
                  <TabsTrigger value="credits">Créditos</TabsTrigger>
                  <TabsTrigger value="requests">Solicitudes</TabsTrigger>
                  <TabsTrigger value="tools">Herramientas</TabsTrigger>
                </TabsList>

                <TabsContent value="transactions" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Movimientos Recientes</CardTitle>
                      <CardDescription>Últimas transacciones en tus cuentas</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentTransactions.map((transaction) => (
                          <div key={transaction.id} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                  transaction.type === "credit" ? "bg-green-100" : "bg-red-100"
                                }`}
                              >
                                {transaction.type === "credit" ? (
                                  <TrendingUp className="w-5 h-5 text-green-600" />
                                ) : (
                                  <TrendingUp className="w-5 h-5 text-red-600 rotate-180" />
                                )}
                              </div>
                              <div>
                                <p className="font-medium">{transaction.description}</p>
                                <p className="text-sm text-gray-500">{transaction.date}</p>
                              </div>
                            </div>
                            <div
                              className={`font-semibold ${
                                transaction.type === "credit" ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {transaction.type === "credit" ? "+" : ""}S/
                              {Math.abs(transaction.amount).toLocaleString()}
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 text-center">
                        <Button variant="outline">
                          <Eye className="w-4 h-4 mr-2" />
                          Ver todos los movimientos
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="credits">
                  <Card>
                    <CardHeader>
                      <CardTitle>Mis Créditos</CardTitle>
                      <CardDescription>Estado de tus créditos y préstamos</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 border rounded-lg">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-medium">Préstamo Personal</h4>
                              <p className="text-sm text-gray-600">Saldo: S/12,500</p>
                            </div>
                            <Badge className="bg-green-100 text-green-700">Al día</Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progreso de pago</span>
                              <span>65%</span>
                            </div>
                            <Progress value={65} className="h-2" />
                          </div>
                        </div>

                        <div className="p-4 border rounded-lg">
                          <div className="flex justify-between items-start mb-3">
                            <div>
                              <h4 className="font-medium">Crédito Vehicular</h4>
                              <p className="text-sm text-gray-600">Saldo: S/28,750</p>
                            </div>
                            <Badge className="bg-yellow-100 text-yellow-700">Próximo pago</Badge>
                          </div>
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span>Progreso de pago</span>
                              <span>32%</span>
                            </div>
                            <Progress value={32} className="h-2" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="requests">
                  <Card>
                    <CardHeader>
                      <CardTitle>Mis Solicitudes</CardTitle>
                      <CardDescription>Estado de tus solicitudes de crédito</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {creditApplications.map((application) => (
                          <div key={application.id} className="flex items-center justify-between p-4 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                                  application.status === "approved"
                                    ? "bg-green-100"
                                    : application.status === "pending"
                                      ? "bg-yellow-100"
                                      : "bg-red-100"
                                }`}
                              >
                                {application.status === "approved" ? (
                                  <CheckCircle className="w-5 h-5 text-green-600" />
                                ) : application.status === "pending" ? (
                                  <Clock className="w-5 h-5 text-yellow-600" />
                                ) : (
                                  <AlertCircle className="w-5 h-5 text-red-600" />
                                )}
                              </div>
                              <div>
                                <p className="font-medium">{application.type}</p>
                                <p className="text-sm text-gray-600">
                                  S/{application.amount.toLocaleString()} • {application.date}
                                </p>
                              </div>
                            </div>
                            <Badge
                              className={
                                application.status === "approved"
                                  ? "bg-green-100 text-green-700"
                                  : application.status === "pending"
                                    ? "bg-yellow-100 text-yellow-700"
                                    : "bg-red-100 text-red-700"
                              }
                            >
                              {application.status === "approved"
                                ? "Aprobado"
                                : application.status === "pending"
                                  ? "En revisión"
                                  : "Rechazado"}
                            </Badge>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4">
                        <Button className="w-full bg-lime-500 hover:bg-lime-600">Nueva Solicitud de Crédito</Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="tools">
                  <Card>
                    <CardHeader>
                      <CardTitle>Herramientas Financieras</CardTitle>
                      <CardDescription>Simuladores y calculadoras</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <Link href="/dashboard/client/simulators">
                          <Button variant="outline" className="h-20 flex-col">
                            <Calculator className="w-6 h-6 mb-2" />
                            Simulador de Crédito
                          </Button>
                        </Link>
                        <Link href="/dashboard/client/simulators">
                          <Button variant="outline" className="h-20 flex-col">
                            <PiggyBank className="w-6 h-6 mb-2" />
                            Calculadora de Ahorros
                          </Button>
                        </Link>
                        <Link href="/dashboard/client/simulators">
                          <Button variant="outline" className="h-20 flex-col">
                            <TrendingUp className="w-6 h-6 mb-2" />
                            Proyección de Inversión
                          </Button>
                        </Link>
                        <Button variant="outline" className="h-20 flex-col">
                          <FileText className="w-6 h-6 mb-2" />
                          Estado de Cuenta
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Notificaciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-3 border rounded-lg">
                        <div className="flex items-start space-x-2">
                          <div
                            className={`w-2 h-2 rounded-full mt-2 ${
                              notification.type === "warning"
                                ? "bg-yellow-500"
                                : notification.type === "success"
                                  ? "bg-green-500"
                                  : "bg-blue-500"
                            }`}
                          ></div>
                          <div className="flex-1">
                            <p className="text-sm font-medium">{notification.message}</p>
                            <p className="text-xs text-gray-500">{notification.time}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Transfer */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Transferencia Rápida</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="amount">Monto</Label>
                      <Input id="amount" placeholder="S/0.00" />
                    </div>
                    <div>
                      <Label htmlFor="account">Cuenta destino</Label>
                      <Input id="account" placeholder="Número de cuenta" />
                    </div>
                    <Link href="/dashboard/client/transfers">
                      <Button className="w-full bg-blue-500 hover:bg-blue-600">
                        <Send className="w-4 h-4 mr-2" />
                        Transferir
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Acciones Rápidas</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar Estado
                    </Button>
                    <Link href="/dashboard/client/requests">
                      <Button variant="outline" className="w-full justify-start">
                        <Calculator className="w-4 h-4 mr-2" />
                        Solicitar Tarjeta
                      </Button>
                    </Link>
                    <Link href="/dashboard/client/simulators">
                      <Button variant="outline" className="w-full justify-start">
                        <Calculator className="w-4 h-4 mr-2" />
                        Simular Crédito
                      </Button>
                    </Link>
                    <Link href="/dashboard/client/profile">
                      <Button variant="outline" className="w-full justify-start">
                        <User className="w-4 h-4 mr-2" />
                        Actualizar Datos
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
