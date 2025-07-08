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
import { Send, ArrowLeft, CreditCard, Download } from "lucide-react"
import Link from "next/link"


export default function TransfersPage() {
  const [transferType, setTransferType] = useState("internal")
  const [amount, setAmount] = useState("")
  const [destinationAccount, setDestinationAccount] = useState("")
  const [description, setDescription] = useState("")
  const [sourceAccount, setSourceAccount] = useState("savings")

  const [recentTransfers] = useState([
    {
      id: 1,
      type: "Transferencia Enviada",
      amount: -500.0,
      destination: "Juan Pérez - 1234567890",
      date: "2024-11-20 14:30",
      status: "completed",
      reference: "TRF001234",
    },
    {
      id: 2,
      type: "Transferencia Recibida",
      amount: 800.0,
      destination: "María López - 0987654321",
      date: "2024-11-19 09:15",
      status: "completed",
      reference: "TRF001235",
    },
    {
      id: 3,
      type: "Transferencia Enviada",
      amount: -250.0,
      destination: "Carlos Silva - 5555666677",
      date: "2024-11-18 16:45",
      status: "pending",
      reference: "TRF001236",
    },
  ])

  const myAccounts = [
    { id: "savings", name: "Cuenta de Ahorros", number: "****1234", balance: 15750.5 },
    { id: "checking", name: "Cuenta Corriente", number: "****5678", balance: 3240.75 },
  ]

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica de transferencia
    alert(`Transferencia de S/${amount} procesada exitosamente`)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-700"
      case "pending":
        return "bg-yellow-100 text-yellow-700"
      case "failed":
        return "bg-red-100 text-red-700"
      default:
        return "bg-gray-100 text-gray-700"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completada"
      case "pending":
        return "Pendiente"
      case "failed":
        return "Fallida"
      default:
        return "Desconocido"
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
          <h1 className="text-xl font-semibold">Transferencias</h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Formulario de Transferencia */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Send className="w-5 h-5 mr-2" />
                  Nueva Transferencia
                </CardTitle>
                <CardDescription>Envía dinero de forma rápida y segura</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleTransfer} className="space-y-6">
                  {/* Tipo de Transferencia */}
                  <div>
                    <Label>Tipo de Transferencia</Label>
                    <Select value={transferType} onValueChange={setTransferType}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="internal">Entre mis cuentas</SelectItem>
                        <SelectItem value="coop">A otro socio de la cooperativa</SelectItem>
                        <SelectItem value="external">A otro banco</SelectItem>
                        <SelectItem value="cci">Transferencia CCI</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Cuenta Origen */}
                  <div>
                    <Label>Cuenta de Origen</Label>
                    <Select value={sourceAccount} onValueChange={setSourceAccount}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {myAccounts.map((account) => (
                          <SelectItem key={account.id} value={account.id}>
                            <div className="flex items-center justify-between w-full">
                              <span>
                                {account.name} {account.number}
                              </span>
                              <span className="text-green-600 font-semibold ml-4">
                                S/{account.balance.toLocaleString()}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Cuenta Destino */}
                  <div>
                    <Label>
                      {transferType === "internal"
                        ? "Cuenta de Destino"
                        : transferType === "coop"
                          ? "Número de Cuenta del Socio"
                          : transferType === "cci"
                            ? "Código CCI"
                            : "Número de Cuenta"}
                    </Label>
                    <Input
                      value={destinationAccount}
                      onChange={(e) => setDestinationAccount(e.target.value)}
                      placeholder={
                        transferType === "internal"
                          ? "Selecciona cuenta destino"
                          : transferType === "coop"
                            ? "Ej: 1234567890"
                            : transferType === "cci"
                              ? "Ej: 00212345678901234567"
                              : "Número de cuenta del destinatario"
                      }
                      required
                    />
                  </div>

                  {/* Nombre del Beneficiario (solo para transferencias externas) */}
                  {transferType !== "internal" && (
                    <div>
                      <Label>Nombre del Beneficiario</Label>
                      <Input placeholder="Nombre completo del destinatario" required />
                    </div>
                  )}

                  {/* Monto */}
                  <div>
                    <Label>Monto a Transferir</Label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">S/</span>
                      <Input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder="0.00"
                        className="pl-8"
                        min="1"
                        step="0.01"
                        required
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">Límite diario: S/10,000</p>
                  </div>

                  {/* Concepto */}
                  <div>
                    <Label>Concepto (Opcional)</Label>
                    <Textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      placeholder="Describe el motivo de la transferencia"
                      rows={3}
                    />
                  </div>

                  {/* Resumen de la Transferencia */}
                  {amount && (
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-2">Resumen de la Transferencia</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Monto:</span>
                          <span className="font-semibold">S/{Number.parseFloat(amount || "0").toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Comisión:</span>
                          <span className="font-semibold">{transferType === "internal" ? "S/0.00" : "S/5.00"}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span className="font-semibold">Total a Debitar:</span>
                          <span className="font-bold text-blue-900">
                            S/
                            {(
                              Number.parseFloat(amount || "0") + (transferType === "internal" ? 0 : 5)
                            ).toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Botones */}
                  <div className="flex space-x-4">
                    <Button type="submit" className="flex-1 bg-lime-500 hover:bg-lime-600">
                      <Send className="w-4 h-4 mr-2" />
                      Realizar Transferencia
                    </Button>
                    <Button type="button" variant="outline">
                      Limpiar
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar con información adicional */}
          <div className="space-y-6">
            {/* Mis Cuentas */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Mis Cuentas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {myAccounts.map((account) => (
                    <div key={account.id} className="p-3 border rounded-lg">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <CreditCard className="w-4 h-4 text-blue-500" />
                          <div>
                            <p className="font-medium text-sm">{account.name}</p>
                            <p className="text-xs text-gray-500">{account.number}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold text-green-600">S/{account.balance.toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Límites y Comisiones */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Límites y Comisiones</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Límite diario:</span>
                    <span className="font-semibold">S/10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Límite mensual:</span>
                    <span className="font-semibold">S/100,000</span>
                  </div>
                  <div className="border-t pt-2">
                    <p className="font-medium mb-2">Comisiones:</p>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>Entre mis cuentas:</span>
                        <span className="text-green-600">Gratis</span>
                      </div>
                      <div className="flex justify-between">
                        <span>A otros socios:</span>
                        <span>S/2.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>A otros bancos:</span>
                        <span>S/5.00</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Historial de Transferencias */}
        <Card className="mt-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Historial de Transferencias</CardTitle>
                <CardDescription>Últimas transferencias realizadas</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Exportar
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransfers.map((transfer) => (
                <div key={transfer.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transfer.amount > 0 ? "bg-green-100" : "bg-blue-100"
                      }`}
                    >
                      <Send
                        className={`w-5 h-5 ${transfer.amount > 0 ? "text-green-600 rotate-180" : "text-blue-600"}`}
                      />
                    </div>
                    <div>
                      <p className="font-medium">{transfer.type}</p>
                      <p className="text-sm text-gray-600">{transfer.destination}</p>
                      <p className="text-xs text-gray-500">{transfer.date}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${transfer.amount > 0 ? "text-green-600" : "text-red-600"}`}>
                      {transfer.amount > 0 ? "+" : ""}S/{Math.abs(transfer.amount).toLocaleString()}
                    </p>
                    <Badge className={getStatusColor(transfer.status)}>{getStatusText(transfer.status)}</Badge>
                    <p className="text-xs text-gray-500 mt-1">Ref: {transfer.reference}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
