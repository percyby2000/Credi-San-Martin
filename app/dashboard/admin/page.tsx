"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Imagenlogo from "@/public/logo.png";
import Image from "next/image";



import {
  Users,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Building,
  Settings,
  BarChart3,
  PieChart,
  Activity,
  UserPlus,
  CreditCard,
  Shield,
  Bell,
  LogOut,
  Home,
  FileText,
  Calendar,
  Target,
  CheckCircle,
  XCircle,
  Eye,
} from "lucide-react"
import Link from "next/link"

export default function AdminDashboard() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Nueva solicitud de crédito pendiente", type: "warning", time: "Hace 5 min" },
    { id: 2, message: "Backup diario completado exitosamente", type: "success", time: "Hace 1 hora" },
    { id: 3, message: "Mantenimiento programado para mañana", type: "info", time: "Hace 2 horas" },
  ])

  const [pendingTasks, setPendingTasks] = useState([
    { id: 1, task: "Revisar solicitud de crédito CR-2024-005", priority: "high", completed: false },
    { id: 2, task: "Aprobar nuevo socio María González", priority: "medium", completed: false },
    { id: 3, task: "Generar reporte mensual de cartera", priority: "high", completed: false },
    { id: 4, task: "Actualizar tasas de interés", priority: "low", completed: false },
    { id: 5, task: "Revisar configuración de seguridad", priority: "medium", completed: false },
  ])

  const stats = [
    {
      title: "Total Socios",
      value: "15,247",
      change: "+12%",
      changeType: "positive",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Cartera Total",
      value: "S/52.3M",
      change: "+8.2%",
      changeType: "positive",
      icon: DollarSign,
      color: "bg-green-500",
    },
    {
      title: "Créditos Activos",
      value: "3,421",
      change: "+15%",
      changeType: "positive",
      icon: CreditCard,
      color: "bg-lime-500",
    },
    {
      title: "Morosidad",
      value: "2.1%",
      change: "-0.5%",
      changeType: "negative",
      icon: AlertTriangle,
      color: "bg-red-500",
    },
  ]

  const recentActivities = [
    { action: "Nuevo socio registrado", user: "María González", time: "Hace 10 min" },
    { action: "Crédito aprobado", user: "Carlos Ruiz", time: "Hace 25 min" },
    { action: "Depósito realizado", user: "Ana Torres", time: "Hace 1 hora" },
    { action: "Actualización de datos", user: "Luis Mendoza", time: "Hace 2 horas" },
  ]

  const pendingCredits = [
    { id: 1, code: "CR-2024-005", client: "Roberto Silva", amount: 25000, type: "Personal" },
    { id: 2, code: "CR-2024-006", client: "Carmen López", amount: 45000, type: "Vehicular" },
    { id: 3, code: "CR-2024-007", client: "Diego Mendoza", amount: 15000, type: "Personal" },
  ]

  const completeTask = (taskId: number) => {
    setPendingTasks((tasks) => tasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task)))
  }

  const removeTask = (taskId: number) => {
    setPendingTasks((tasks) => tasks.filter((task) => task.id !== taskId))
  }

  const closeNotification = (notificationId: number) => {
    setNotifications((notifications) => notifications.filter((notification) => notification.id !== notificationId))
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
              <span className="font-semibold text-gray-900">COOPSMP Admin</span>
            </Link>
            <Badge className="bg-red-100 text-red-700">Administrador</Badge>
          </div>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs"></span>
              )}
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

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 min-h-screen">
          <nav className="p-4 space-y-2">
            <Button variant="ghost" className="w-full justify-start bg-lime-50 text-lime-700">
              <Home className="w-4 h-4 mr-3" />
              Dashboard
            </Button>
            <Link href="/dashboard/admin/members">
              <Button variant="ghost" className="w-full justify-start">
                <Users className="w-4 h-4 mr-3" />
                Gestión de Socios
              </Button>
            </Link>
            <Link href="/dashboard/admin/credits">
              <Button variant="ghost" className="w-full justify-start">
                <CreditCard className="w-4 h-4 mr-3" />
                Créditos y Préstamos
              </Button>
            </Link>
            <Link href="/dashboard/admin/reports">
              <Button variant="ghost" className="w-full justify-start">
                <BarChart3 className="w-4 h-4 mr-3" />
                Reportes Financieros
              </Button>
            </Link>
            <Link href="/dashboard/admin/documents">
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-3" />
                Documentos
              </Button>
            </Link>
            <Link href="/dashboard/admin/security">
              <Button variant="ghost" className="w-full justify-start">
                <Shield className="w-4 h-4 mr-3" />
                Seguridad
              </Button>
            </Link>
            <Link href="/dashboard/client/profile">
              <Button variant="ghost" className="w-full justify-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-gray-200">
  <svg
    className="w-4 h-4 text-gray-600"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.121 17.804A9 9 0 1112 21a9.003 9.003 0 01-6.879-3.196z"
    />
    <circle cx={12} cy={11} r={3} />
  </svg>
</span>
                Mi Perfil
              </Button>
            </Link>
            <Link href="/dashboard/admin/settings">
              <Button variant="ghost" className="w-full justify-start">
                <Settings className="w-4 h-4 mr-3" />
                Configuración
              </Button>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Panel de Administración</h1>
            <p className="text-gray-600">Bienvenido al sistema de gestión de la cooperativa</p>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className={`text-sm ${stat.changeType === "positive" ? "text-green-600" : "text-red-600"}`}>
                        {stat.change} vs mes anterior
                      </p>
                    </div>
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Main Dashboard */}
            <div className="lg:col-span-2 space-y-6">
              <Tabs defaultValue="overview" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Resumen</TabsTrigger>
                  <TabsTrigger value="credits">Créditos</TabsTrigger>
                  <TabsTrigger value="members">Socios</TabsTrigger>
                  <TabsTrigger value="reports">Reportes</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center">
                        <TrendingUp className="w-5 h-5 mr-2" />
                        Crecimiento Mensual
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Nuevos Socios</span>
                            <span>85%</span>
                          </div>
                          <Progress value={85} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Créditos Otorgados</span>
                            <span>72%</span>
                          </div>
                          <Progress value={72} className="h-2" />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Meta de Captación</span>
                            <span>91%</span>
                          </div>
                          <Progress value={91} className="h-2" />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Actividad Reciente</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivities.map((activity, index) => (
                          <div key={index} className="flex items-center space-x-3">
                            <div className="w-2 h-2 bg-lime-500 rounded-full"></div>
                            <div className="flex-1">
                              <p className="text-sm font-medium">{activity.action}</p>
                              <p className="text-xs text-gray-500">
                                {activity.user} • {activity.time}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="credits">
                  <Card>
                    <CardHeader>
                      <CardTitle>Solicitudes de Crédito Pendientes</CardTitle>
                      <CardDescription>Créditos que requieren tu aprobación</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {pendingCredits.map((credit) => (
                          <div key={credit.id} className="flex justify-between items-center p-4 border rounded-lg">
                            <div>
                              <h4 className="font-medium">{credit.code}</h4>
                              <p className="text-sm text-gray-600">
                                {credit.client} - {credit.type} - S/{credit.amount.toLocaleString()}
                              </p>
                            </div>
                            <div className="flex space-x-2">
                              <Link href={`/dashboard/admin/credits/${credit.id}`}>
                                <Button size="sm" variant="outline">
                                  <Eye className="w-4 h-4 mr-1" />
                                  Ver
                                </Button>
                              </Link>
                              <Button size="sm" className="bg-green-500 hover:bg-green-600">
                                <CheckCircle className="w-4 h-4 mr-1" />
                                Aprobar
                              </Button>
                            </div>
                          </div>
                        ))}
                        <Link href="/dashboard/admin/credits">
                          <Button className="w-full bg-transparent" variant="outline">
                            Ver Todas las Solicitudes
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="members">
                  <Card>
                    <CardHeader>
                      <CardTitle>Gestión de Socios</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <Link href="/dashboard/admin/members/new">
                          <Button className="w-full bg-lime-500 hover:bg-lime-600">
                            <UserPlus className="w-4 h-4 mr-2" />
                            Registrar Nuevo Socio
                          </Button>
                        </Link>
                        <div className="grid grid-cols-2 gap-4">
                          <Card>
                            <CardContent className="p-4 text-center">
                              <div className="text-2xl font-bold text-blue-600">1,247</div>
                              <div className="text-sm text-gray-600">Socios Activos</div>
                            </CardContent>
                          </Card>
                          <Card>
                            <CardContent className="p-4 text-center">
                              <div className="text-2xl font-bold text-green-600">89</div>
                              <div className="text-sm text-gray-600">Nuevos este mes</div>
                            </CardContent>
                          </Card>
                        </div>
                        <Link href="/dashboard/admin/members">
                          <Button className="w-full bg-transparent" variant="outline">
                            Ver Todos los Socios
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="reports">
                  <Card>
                    <CardHeader>
                      <CardTitle>Reportes y Analytics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <Link href="/dashboard/admin/reports/financial">
                          <Button variant="outline" className="h-20 flex-col bg-transparent">
                            <BarChart3 className="w-6 h-6 mb-2" />
                            Reporte Financiero
                          </Button>
                        </Link>
                        <Link href="/dashboard/admin/reports/portfolio">
                          <Button variant="outline" className="h-20 flex-col bg-transparent">
                            <PieChart className="w-6 h-6 mb-2" />
                            Análisis de Cartera
                          </Button>
                        </Link>
                        <Link href="/dashboard/admin/reports/kpi">
                          <Button variant="outline" className="h-20 flex-col bg-transparent">
                            <Activity className="w-6 h-6 mb-2" />
                            Indicadores KPI
                          </Button>
                        </Link>
                        <Link href="/dashboard/admin/reports/goals">
                          <Button variant="outline" className="h-20 flex-col bg-transparent">
                            <Target className="w-6 h-6 mb-2" />
                            Metas y Objetivos
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Pending Tasks */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Tareas Pendientes</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pendingTasks
                      .filter((task) => !task.completed)
                      .map((task) => (
                        <div key={task.id} className="p-3 border rounded-lg">
                          <div className="flex items-start justify-between">
                            <div className="flex items-start space-x-2">
                              <div className={`w-2 h-2 rounded-full mt-2 ${getPriorityColor(task.priority)}`}></div>
                              <div className="flex-1">
                                <p className="text-sm font-medium">{task.task}</p>
                                <p className="text-xs text-gray-500 capitalize">
                                  Prioridad:{" "}
                                  {task.priority === "high" ? "Alta" : task.priority === "medium" ? "Media" : "Baja"}
                                </p>
                              </div>
                            </div>
                            <div className="flex space-x-1">
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => completeTask(task.id)}
                                className="h-6 w-6 p-0"
                              >
                                <CheckCircle className="w-4 h-4 text-green-600" />
                              </Button>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => removeTask(task.id)}
                                className="h-6 w-6 p-0"
                              >
                                <XCircle className="w-4 h-4 text-red-600" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      ))}
                    {pendingTasks.filter((task) => !task.completed).length === 0 && (
                      <p className="text-sm text-gray-500 text-center py-4">¡Todas las tareas completadas!</p>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Notifications */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Notificaciones</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {notifications.map((notification) => (
                      <div key={notification.id} className="p-3 border rounded-lg">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start space-x-2">
                            <div
                              className={`w-2 h-2 rounded-full mt-2 ${notification.type === "warning"
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
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => closeNotification(notification.id)}
                            className="h-6 w-6 p-0"
                          >
                            <XCircle className="w-4 h-4 text-gray-400" />
                          </Button>
                        </div>
                      </div>
                    ))}
                    {notifications.length === 0 && (
                      <p className="text-sm text-gray-500 text-center py-4">No hay notificaciones nuevas</p>
                    )}
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
                    <Link href="/dashboard/admin/members/new">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Nuevo Socio
                      </Button>
                    </Link>
                    <Link href="/dashboard/admin/credits">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <CreditCard className="w-4 h-4 mr-2" />
                        Aprobar Crédito
                      </Button>
                    </Link>
                    <Link href="/dashboard/admin/reports">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <FileText className="w-4 h-4 mr-2" />
                        Generar Reporte
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Calendar className="w-4 h-4 mr-2" />
                      Programar Tarea
                    </Button>
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
