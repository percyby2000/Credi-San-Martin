"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Imagenlogo from "@/public/logo.png";
import Image from "next/image";
import {
  Users,
  FileText,
  CheckCircle,
  Clock,
  Building,
  Bell,
  LogOut,
  Home,
  UserPlus,
  CreditCard,
  Search,
  Plus,
  AlertTriangle,
  TrendingUp,
  Calendar,
  MessageSquare,
  Phone,
  Mail,
  MoreHorizontal,
  X,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function EmployeeDashboard() {
  const [notifications, setNotifications] = useState([
    { id: 1, message: "Nueva solicitud de crédito asignada", type: "info", time: "Hace 10 min" },
    { id: 2, message: "Cliente requiere seguimiento", type: "warning", time: "Hace 30 min" },
    { id: 3, message: "Reunión de equipo en 1 hora", type: "info", time: "Hace 1 hora" },
  ])

  const [pendingTasks, setPendingTasks] = useState([
    {
      id: 1,
      client: "María González",
      task: "Revisión de documentos",
      priority: "high",
      dueDate: "Hoy",
      completed: false,
    },
    {
      id: 2,
      client: "Carlos Ruiz",
      task: "Seguimiento de pago",
      priority: "medium",
      dueDate: "Mañana",
      completed: false,
    },
    {
      id: 3,
      client: "Ana Torres",
      task: "Actualización de datos",
      priority: "low",
      dueDate: "Esta semana",
      completed: false,
    },
  ])

  const [newTask, setNewTask] = useState({ client: "", task: "", priority: "medium", dueDate: "" })
  const [showNewTaskForm, setShowNewTaskForm] = useState(false)

  const stats = [
    {
      title: "Clientes Asignados",
      value: "65",
      change: "+3",
      changeType: "positive",
      icon: Users,
      color: "bg-blue-500",
    },
    {
      title: "Trámites Pendientes",
      value: pendingTasks.filter((task) => !task.completed).length.toString(),
      change: "-1",
      changeType: "negative",
      icon: FileText,
      color: "bg-orange-500",
    },
    {
      title: "Créditos Procesados",
      value: "28",
      change: "+7",
      changeType: "positive",
      icon: CreditCard,
      color: "bg-green-500",
    },
    {
      title: "Meta Mensual",
      value: "62%",
      change: "+5%",
      changeType: "positive",
      icon: TrendingUp,
      color: "bg-lime-500",
    },
  ]

  const recentClients = [
    {
      id: 1,
      name: "Juan Pérez",
      phone: "(01) 234-5678",
      email: "juan@email.com",
      status: "active",
      lastContact: "Hoy",
      balance: "S/12,500",
    },
    {
      id: 2,
      name: "María López",
      phone: "(01) 234-5679",
      email: "maria@email.com",
      status: "pending",
      lastContact: "Ayer",
      balance: "S/8,750",
    },
    {
      id: 3,
      name: "Carlos Silva",
      phone: "(01) 234-5680",
      email: "carlos@email.com",
      status: "follow-up",
      lastContact: "Hace 2 días",
      balance: "S/15,200",
    },
  ]

  const completeTask = (taskId: number) => {
    setPendingTasks((tasks) => tasks.map((task) => (task.id === taskId ? { ...task, completed: true } : task)))
  }

  const deleteTask = (taskId: number) => {
    setPendingTasks((tasks) => tasks.filter((task) => task.id !== taskId))
  }

  const addNewTask = () => {
    if (newTask.client && newTask.task) {
      const task = {
        id: Date.now(),
        ...newTask,
        completed: false,
      }
      setPendingTasks((tasks) => [...tasks, task])
      setNewTask({ client: "", task: "", priority: "medium", dueDate: "" })
      setShowNewTaskForm(false)
    }
  }

  const dismissNotification = (notificationId: number) => {
    setNotifications((notifications) => notifications.filter((notification) => notification.id !== notificationId))
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
            <span className="text-sm text-gray-600">Bienvenido, Mavel Trejo </span>
            <Button variant="ghost" size="sm" className="relative">
              <Bell className="w-5 h-5" />
              {notifications.length > 0 && (
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full text-xs flex items-center justify-center text-white">
                  {notifications.length}
                </span>
              )}
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
            <Button variant="ghost" className="w-full justify-start bg-green-50 text-green-700">
              <Home className="w-4 h-4 mr-3" />
              Dashboard
            </Button>
            <Link href="/dashboard/employee/clients" className="block">
              <Button variant="ghost" className="w-full justify-start">
                <Users className="w-4 h-4 mr-3" />
                Mis Clientes
              </Button>
            </Link>
            <Link href="/dashboard/employee/procedures" className="block">
              <Button variant="ghost" className="w-full justify-start">
                <FileText className="w-4 h-4 mr-3" />
                Trámites
              </Button>
            </Link>
            <Link href="/dashboard/employee/credit-requests" className="block">
              <Button variant="ghost" className="w-full justify-start">
                <CreditCard className="w-4 h-4 mr-3" />
                Solicitudes de Crédito
              </Button>
            </Link>
              <Link href="/dashboard/reports">
              <Button variant="ghost" className="w-full justify-start">
                <BarChart3 className="w-4 h-4 mr-3" />
                Reportes Financieros
              </Button>
            </Link>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Panel de Trabajo</h1>
            <p className="text-gray-600">Gestiona tus clientes y trámites de manera eficiente</p>
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
                        {stat.change} esta semana
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
              <Tabs defaultValue="tasks" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="tasks">Tareas</TabsTrigger>
                  <TabsTrigger value="clients">Clientes</TabsTrigger>
                  <TabsTrigger value="credits">Créditos</TabsTrigger>
                  <TabsTrigger value="communications">Comunicar</TabsTrigger>
                </TabsList>

                <TabsContent value="tasks" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Tareas Pendientes</CardTitle>
                          <CardDescription>Trámites que requieren tu atención</CardDescription>
                        </div>
                        <Button
                          onClick={() => setShowNewTaskForm(!showNewTaskForm)}
                          className="bg-lime-500 hover:bg-lime-600"
                        >
                          <Plus className="w-4 h-4 mr-2" />
                          Nueva Tarea
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {showNewTaskForm && (
                        <div className="mb-6 p-4 border rounded-lg bg-gray-50">
                          <h4 className="font-medium mb-3">Agregar Nueva Tarea</h4>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="client">Cliente</Label>
                              <Input
                                id="client"
                                value={newTask.client}
                                onChange={(e) => setNewTask({ ...newTask, client: e.target.value })}
                                placeholder="Nombre del cliente"
                              />
                            </div>
                            <div>
                              <Label htmlFor="dueDate">Fecha límite</Label>
                              <Input
                                id="dueDate"
                                value={newTask.dueDate}
                                onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                                placeholder="Ej: Hoy, Mañana"
                              />
                            </div>
                          </div>
                          <div className="mt-4">
                            <Label htmlFor="task">Descripción de la tarea</Label>
                            <Input
                              id="task"
                              value={newTask.task}
                              onChange={(e) => setNewTask({ ...newTask, task: e.target.value })}
                              placeholder="Descripción de la tarea"
                            />
                          </div>
                          <div className="mt-4">
                            <Label htmlFor="priority">Prioridad</Label>
                            <select
                              id="priority"
                              value={newTask.priority}
                              onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                              className="w-full p-2 border rounded-md"
                            >
                              <option value="low">Baja</option>
                              <option value="medium">Media</option>
                              <option value="high">Alta</option>
                            </select>
                          </div>
                          <div className="flex space-x-2 mt-4">
                            <Button onClick={addNewTask} className="bg-green-500 hover:bg-green-600">
                              Agregar Tarea
                            </Button>
                            <Button variant="outline" onClick={() => setShowNewTaskForm(false)}>
                              Cancelar
                            </Button>
                          </div>
                        </div>
                      )}

                      <div className="space-y-4">
                        {pendingTasks
                          .filter((task) => !task.completed)
                          .map((task) => (
                            <div key={task.id} className="flex items-center justify-between p-4 border rounded-lg">
                              <div className="flex items-center space-x-3">
                                <div
                                  className={`w-3 h-3 rounded-full ${
                                    task.priority === "high"
                                      ? "bg-red-500"
                                      : task.priority === "medium"
                                        ? "bg-yellow-500"
                                        : "bg-green-500"
                                  }`}
                                ></div>
                                <div>
                                  <p className="font-medium">{task.task}</p>
                                  <p className="text-sm text-gray-600">Cliente: {task.client}</p>
                                </div>
                              </div>
                              <div className="text-right">
                                <Badge variant="outline" className="mb-2">
                                  {task.dueDate}
                                </Badge>
                                <div className="flex space-x-2">
                                  <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => deleteTask(task.id)}
                                    className="text-red-600 hover:text-red-700"
                                  >
                                    <X className="w-4 h-4" />
                                  </Button>
                                  <Button
                                    size="sm"
                                    className="bg-green-500 hover:bg-green-600"
                                    onClick={() => completeTask(task.id)}
                                  >
                                    <CheckCircle className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          ))}

                        {pendingTasks.filter((task) => task.completed).length > 0 && (
                          <div className="mt-6">
                            <h4 className="font-medium text-green-600 mb-3">Tareas Completadas</h4>
                            {pendingTasks
                              .filter((task) => task.completed)
                              .map((task) => (
                                <div
                                  key={task.id}
                                  className="flex items-center justify-between p-4 border rounded-lg bg-green-50 opacity-75"
                                >
                                  <div className="flex items-center space-x-3">
                                    <CheckCircle className="w-5 h-5 text-green-500" />
                                    <div>
                                      <p className="font-medium line-through">{task.task}</p>
                                      <p className="text-sm text-gray-600">Cliente: {task.client}</p>
                                    </div>
                                  </div>
                                  <Badge className="bg-green-100 text-green-700">Completada</Badge>
                                </div>
                              ))}
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="clients">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Mis Clientes</CardTitle>
                          <CardDescription>Gestiona tu cartera de clientes</CardDescription>
                        </div>
                        <Link href="/dashboard/employee/clients">
                          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                            <UserPlus className="w-4 h-4 mr-2" />
                            Ver Todos
                          </Button>
                        </Link>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <div className="relative">
                          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                          <Input placeholder="Buscar cliente..." className="pl-10" />
                        </div>
                      </div>
                      <div className="space-y-4">
                        {recentClients.map((client) => (
                          <div
                            key={client.id}
                            className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <Users className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <p className="font-medium">{client.name}</p>
                                <div className="flex items-center space-x-4 text-sm text-gray-600">
                                  <span className="flex items-center">
                                    <Phone className="w-3 h-3 mr-1" />
                                    {client.phone}
                                  </span>
                                  <span className="flex items-center">
                                    <Mail className="w-3 h-3 mr-1" />
                                    {client.email}
                                  </span>
                                </div>
                                <p className="text-sm font-medium text-green-600">{client.balance}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              <Badge
                                className={
                                  client.status === "active"
                                    ? "bg-green-100 text-green-700"
                                    : client.status === "pending"
                                      ? "bg-yellow-100 text-yellow-700"
                                      : "bg-orange-100 text-orange-700"
                                }
                              >
                                {client.status === "active"
                                  ? "Activo"
                                  : client.status === "pending"
                                    ? "Pendiente"
                                    : "Seguimiento"}
                              </Badge>
                              <p className="text-xs text-gray-500 mt-1">Último contacto: {client.lastContact}</p>
                              <div className="flex space-x-1 mt-2">
                                <Button variant="ghost" size="sm">
                                  <Phone className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <Mail className="w-4 h-4" />
                                </Button>
                                <Button variant="ghost" size="sm">
                                  <MoreHorizontal className="w-4 h-4" />
                                </Button>
                              </div>
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
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Solicitudes de Crédito</CardTitle>
                          <CardDescription>Procesa y gestiona solicitudes</CardDescription>
                        </div>
                        <Link href="/dashboard/employee/credit-requests">
                          <Button size="sm" className="bg-lime-500 hover:bg-lime-600">
                            Ver Todas
                          </Button>
                        </Link>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center">
                              <Clock className="w-5 h-5 text-yellow-600" />
                            </div>
                            <div>
                              <p className="font-medium">Préstamo Personal - Juan Pérez</p>
                              <p className="text-sm text-gray-600">S/15,000 • Documentos completos</p>
                              <p className="text-xs text-gray-500">Solicitud #CR-2024-001</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline" className="text-red-600 border-red-600 bg-transparent">
                              Rechazar
                            </Button>
                            <Button size="sm" className="bg-green-500 hover:bg-green-600">
                              Aprobar
                            </Button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                              <AlertTriangle className="w-5 h-5 text-red-600" />
                            </div>
                            <div>
                              <p className="font-medium">Crédito Vehicular - María López</p>
                              <p className="text-sm text-gray-600">S/35,000 • Faltan documentos</p>
                              <p className="text-xs text-gray-500">Solicitud #CR-2024-002</p>
                            </div>
                          </div>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Phone className="w-4 h-4 mr-1" />
                              Contactar
                            </Button>
                            <Button size="sm" variant="outline">
                              Ver Detalles
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="communications">
                  <Card>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle>Comunicar Novedades</CardTitle>
                          <CardDescription>Envía actualizaciones a clientes o equipo</CardDescription>
                        </div>
                        <Link href="/dashboard/employee/communications">
                          <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
                            Ver Historial
                          </Button>
                        </Link>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="recipient">Para</Label>
                          <Input id="recipient" placeholder="Cliente o grupo destinatario" />
                        </div>
                        <div>
                          <Label htmlFor="subject">Asunto</Label>
                          <Input id="subject" placeholder="Asunto del mensaje" />
                        </div>
                        <div>
                          <Label htmlFor="message">Mensaje</Label>
                          <Textarea id="message" placeholder="Escribe tu mensaje aquí..." rows={4} />
                        </div>
                        <div className="flex space-x-2">
                          <Button className="bg-blue-500 hover:bg-blue-600">
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Enviar Mensaje
                          </Button>
                          <Button variant="outline">
                            <Plus className="w-4 h-4 mr-2" />
                            Adjuntar Archivo
                          </Button>
                          <Button variant="outline">Guardar Borrador</Button>
                        </div>
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
                        <div className="flex items-start justify-between">
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
                          <Button variant="ghost" size="sm" onClick={() => dismissNotification(notification.id)}>
                            <X className="w-3 h-3" />
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

              {/* Daily Goals */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Metas del Día</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Contactos realizados</span>
                        <span>8/12</span>
                      </div>
                      <Progress value={67} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Trámites procesados</span>
                        <span>5/8</span>
                      </div>
                      <Progress value={63} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Seguimientos completados</span>
                        <span>3/5</span>
                      </div>
                      <Progress value={60} className="h-2" />
                    </div>
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
                    <Link href="/dashboard/employee/clients">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <UserPlus className="w-4 h-4 mr-2" />
                        Registrar Cliente
                      </Button>
                    </Link>
                    <Link href="/dashboard/employee/procedures">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <FileText className="w-4 h-4 mr-2" />
                        Nuevo Trámite
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full justify-start bg-transparent">
                      <Phone className="w-4 h-4 mr-2" />
                      Llamada de Seguimiento
                    </Button>
                    <Link href="/dashboard/employee/schedule">
                      <Button variant="outline" className="w-full justify-start bg-transparent">
                        <Calendar className="w-4 h-4 mr-2" />
                        Agendar Cita
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
