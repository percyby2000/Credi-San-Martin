"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import {
  Building,
  Bell,
  LogOut,
  ArrowLeft,
  Download,
  BarChart3,
  PieChart,
  Activity,
  Target,
  Calendar,
  FileText,
  Users,
  CreditCard,
  Settings,
  Filter,
  Eye,
  RefreshCw,
} from "lucide-react"
import Link from "next/link"

export default function ReportsPage() {
  const [selectedPeriod, setSelectedPeriod] = useState("monthly")
  const [selectedYear, setSelectedYear] = useState("2024")
  const [selectedMonth, setSelectedMonth] = useState("01")
  const [isGenerating, setIsGenerating] = useState(false)

  const reportTypes = [
    {
      id: "financial",
      title: "Reporte Financiero",
      description: "Estado financiero completo de la cooperativa",
      icon: BarChart3,
      color: "bg-blue-500",
      lastGenerated: "2024-01-15",
      frequency: "Mensual",
    },
    {
      id: "portfolio",
      title: "Análisis de Cartera",
      description: "Análisis detallado de la cartera de créditos",
      icon: PieChart,
      color: "bg-green-500",
      lastGenerated: "2024-01-14",
      frequency: "Semanal",
    },
    {
      id: "kpi",
      title: "Indicadores KPI",
      description: "Indicadores clave de rendimiento",
      icon: Activity,
      color: "bg-purple-500",
      lastGenerated: "2024-01-15",
      frequency: "Diario",
    },
    {
      id: "goals",
      title: "Metas y Objetivos",
      description: "Seguimiento de metas institucionales",
      icon: Target,
      color: "bg-orange-500",
      lastGenerated: "2024-01-10",
      frequency: "Mensual",
    },
    {
      id: "members",
      title: "Reporte de Socios",
      description: "Estadísticas y análisis de socios",
      icon: Users,
      color: "bg-cyan-500",
      lastGenerated: "2024-01-12",
      frequency: "Mensual",
    },
    {
      id: "credits",
      title: "Reporte de Créditos",
      description: "Análisis de créditos otorgados y pendientes",
      icon: CreditCard,
      color: "bg-lime-500",
      lastGenerated: "2024-01-13",
      frequency: "Semanal",
    },
  ]

  const quickStats = [
    {
      title: "Reportes Generados",
      value: "247",
      change: "+12%",
      icon: FileText,
      color: "text-blue-600",
    },
    {
      title: "Descargas del Mes",
      value: "89",
      change: "+23%",
      icon: Download,
      color: "text-green-600",
    },
    {
      title: "Reportes Automáticos",
      value: "15",
      change: "+5%",
      icon: RefreshCw,
      color: "text-purple-600",
    },
    {
      title: "Usuarios Activos",
      value: "34",
      change: "+8%",
      icon: Users,
      color: "text-orange-600",
    },
  ]

  const recentReports = [
    {
      id: 1,
      name: "Reporte Financiero Enero 2024",
      type: "Financiero",
      generatedBy: "Admin Principal",
      date: "2024-01-15",
      size: "2.4 MB",
      downloads: 12,
    },
    {
      id: 2,
      name: "Análisis de Cartera Semanal",
      type: "Cartera",
      generatedBy: "Ana Martínez",
      date: "2024-01-14",
      size: "1.8 MB",
      downloads: 8,
    },
    {
      id: 3,
      name: "KPI Dashboard Diario",
      type: "KPI",
      generatedBy: "Sistema Automático",
      date: "2024-01-15",
      size: "956 KB",
      downloads: 15,
    },
    {
      id: 4,
      name: "Reporte de Socios Diciembre",
      type: "Socios",
      generatedBy: "Admin Principal",
      date: "2024-01-10",
      size: "3.1 MB",
      downloads: 6,
    },
  ]

  const generateReport = async (reportType: string) => {
    setIsGenerating(true)

    // Simular generación de reporte
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsGenerating(false)
    alert(`Reporte ${reportType} generado exitosamente`)
  }

  const downloadReport = (reportId: number) => {
    alert(`Descargando reporte ${reportId}...`)
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
          <span className="text-gray-900 font-medium">Reportes Financieros</span>
        </div>

        {/* Page Header */}
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Reportes Financieros</h1>
            <p className="text-gray-600">Genera y gestiona reportes de la cooperativa</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
            <Button variant="outline">
              <Calendar className="w-4 h-4 mr-2" />
              Programar
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {quickStats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className={`text-sm ${stat.color}`}>{stat.change} vs mes anterior</p>
                  </div>
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Report Generation */}
          <div className="lg:col-span-2 space-y-6">
            {/* Period Selection */}
            <Card>
              <CardHeader>
                <CardTitle>Configuración de Reportes</CardTitle>
                <CardDescription>Selecciona el período y tipo de reporte a generar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div>
                    <Label htmlFor="period">Período</Label>
                    <select
                      id="period"
                      value={selectedPeriod}
                      onChange={(e) => setSelectedPeriod(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option value="daily">Diario</option>
                      <option value="weekly">Semanal</option>
                      <option value="monthly">Mensual</option>
                      <option value="quarterly">Trimestral</option>
                      <option value="yearly">Anual</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="year">Año</Label>
                    <select
                      id="year"
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md"
                    >
                      <option value="2024">2024</option>
                      <option value="2023">2023</option>
                      <option value="2022">2022</option>
                    </select>
                  </div>
                  <div>
                    <Label htmlFor="month">Mes</Label>
                    <select
                      id="month"
                      value={selectedMonth}
                      onChange={(e) => setSelectedMonth(e.target.value)}
                      className="w-full px-3 py-2 border rounded-md"
                      disabled={selectedPeriod === "yearly"}
                    >
                      <option value="01">Enero</option>
                      <option value="02">Febrero</option>
                      <option value="03">Marzo</option>
                      <option value="04">Abril</option>
                      <option value="05">Mayo</option>
                      <option value="06">Junio</option>
                      <option value="07">Julio</option>
                      <option value="08">Agosto</option>
                      <option value="09">Septiembre</option>
                      <option value="10">Octubre</option>
                      <option value="11">Noviembre</option>
                      <option value="12">Diciembre</option>
                    </select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Report Types */}
            <Card>
              <CardHeader>
                <CardTitle>Tipos de Reportes</CardTitle>
                <CardDescription>Selecciona el tipo de reporte que deseas generar</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {reportTypes.map((report) => (
                    <Card key={report.id} className="hover:shadow-md transition-shadow cursor-pointer">
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <div className={`w-10 h-10 ${report.color} rounded-lg flex items-center justify-center`}>
                            <report.icon className="w-5 h-5 text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 mb-1">{report.title}</h3>
                            <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                            <div className="flex justify-between items-center text-xs text-gray-500">
                              <span>Último: {report.lastGenerated}</span>
                              <span>{report.frequency}</span>
                            </div>
                            <Button
                              size="sm"
                              className="w-full mt-3"
                              onClick={() => generateReport(report.title)}
                              disabled={isGenerating}
                            >
                              {isGenerating ? (
                                <>
                                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                                  Generando...
                                </>
                              ) : (
                                <>
                                  <FileText className="w-4 h-4 mr-2" />
                                  Generar
                                </>
                              )}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Reports */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Reportes Recientes</CardTitle>
                <CardDescription>Últimos reportes generados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentReports.map((report) => (
                    <div key={report.id} className="p-3 border rounded-lg hover:bg-gray-50">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="font-medium text-sm text-gray-900 mb-1">{report.name}</h4>
                          <div className="text-xs text-gray-600 space-y-1">
                            <p>Tipo: {report.type}</p>
                            <p>Por: {report.generatedBy}</p>
                            <p>Fecha: {report.date}</p>
                            <p>Tamaño: {report.size}</p>
                            <p>Descargas: {report.downloads}</p>
                          </div>
                        </div>
                        <div className="flex flex-col space-y-1">
                          <Button size="sm" variant="outline" onClick={() => downloadReport(report.id)}>
                            <Download className="w-3 h-3" />
                          </Button>
                          <Button size="sm" variant="outline">
                            <Eye className="w-3 h-3" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Acciones Rápidas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => generateReport("Reporte Financiero Completo")}
                  >
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Reporte Financiero
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => generateReport("Análisis de Cartera")}
                  >
                    <PieChart className="w-4 h-4 mr-2" />
                    Análisis de Cartera
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => generateReport("Dashboard KPI")}
                  >
                    <Activity className="w-4 h-4 mr-2" />
                    Dashboard KPI
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent"
                    onClick={() => generateReport("Reporte de Socios")}
                  >
                    <Users className="w-4 h-4 mr-2" />
                    Reporte de Socios
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
