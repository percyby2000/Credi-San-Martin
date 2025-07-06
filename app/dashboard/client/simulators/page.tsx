"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Calculator, PiggyBank, CreditCard, TrendingUp, Building, ArrowLeft, Download, Share } from "lucide-react"
import Link from "next/link"

export default function SimulatorsPage() {
  const [activeSimulator, setActiveSimulator] = useState("credit")

  // Simulador de Crédito
  const [creditAmount, setCreditAmount] = useState([50000])
  const [creditTerm, setCreditTerm] = useState([24])
  const [creditType, setCreditType] = useState("personal")

  // Simulador de Ahorros
  const [savingsAmount, setSavingsAmount] = useState([1000])
  const [savingsTerm, setSavingsTerm] = useState([12])
  const [savingsFrequency, setSavingsFrequency] = useState("monthly")

  // Cálculos para crédito
  const getInterestRate = (type: string) => {
    switch (type) {
      case "personal":
        return 0.18
      case "vehicular":
        return 0.14
      case "hipotecario":
        return 0.12
      case "prendario":
        return 0.16
      default:
        return 0.18
    }
  }

  const calculateCredit = () => {
    const principal = creditAmount[0]
    const rate = getInterestRate(creditType) / 12
    const term = creditTerm[0]

    const monthlyPayment = (principal * rate * Math.pow(1 + rate, term)) / (Math.pow(1 + rate, term) - 1)
    const totalPayment = monthlyPayment * term
    const totalInterest = totalPayment - principal

    return {
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      rate: (getInterestRate(creditType) * 100).toFixed(1),
    }
  }

  // Cálculos para ahorros
  const calculateSavings = () => {
    const monthlyAmount = savingsAmount[0]
    const months = savingsTerm[0]
    const annualRate = 0.08 // 8% anual
    const monthlyRate = annualRate / 12

    let futureValue = 0
    for (let i = 0; i < months; i++) {
      futureValue = (futureValue + monthlyAmount) * (1 + monthlyRate)
    }

    const totalDeposited = monthlyAmount * months
    const totalInterest = futureValue - totalDeposited

    return {
      futureValue: futureValue.toFixed(2),
      totalDeposited: totalDeposited.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
    }
  }

  const creditResults = calculateCredit()
  const savingsResults = calculateSavings()

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
          <h1 className="text-xl font-semibold">Simuladores Financieros</h1>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Selector de Simulador */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <Button
            variant={activeSimulator === "credit" ? "default" : "outline"}
            onClick={() => setActiveSimulator("credit")}
            className="h-20 flex-col"
          >
            <CreditCard className="w-6 h-6 mb-2" />
            Simulador de Crédito
          </Button>
          <Button
            variant={activeSimulator === "savings" ? "default" : "outline"}
            onClick={() => setActiveSimulator("savings")}
            className="h-20 flex-col"
          >
            <PiggyBank className="w-6 h-6 mb-2" />
            Simulador de Ahorros
          </Button>
          <Button
            variant={activeSimulator === "investment" ? "default" : "outline"}
            onClick={() => setActiveSimulator("investment")}
            className="h-20 flex-col"
          >
            <TrendingUp className="w-6 h-6 mb-2" />
            Simulador de Inversión
          </Button>
          <Button
            variant={activeSimulator === "mortgage" ? "default" : "outline"}
            onClick={() => setActiveSimulator("mortgage")}
            className="h-20 flex-col"
          >
            <Building className="w-6 h-6 mb-2" />
            Simulador Hipotecario
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulario de Simulación */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Calculator className="w-5 h-5 mr-2" />
                {activeSimulator === "credit" && "Simulador de Crédito"}
                {activeSimulator === "savings" && "Simulador de Ahorros"}
                {activeSimulator === "investment" && "Simulador de Inversión"}
                {activeSimulator === "mortgage" && "Simulador Hipotecario"}
              </CardTitle>
              <CardDescription>Calcula y planifica tus finanzas con nuestras herramientas</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {activeSimulator === "credit" && (
                <>
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
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Monto del Crédito: S/{creditAmount[0].toLocaleString()}</Label>
                    <Slider
                      value={creditAmount}
                      onValueChange={setCreditAmount}
                      max={200000}
                      min={5000}
                      step={1000}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>S/5,000</span>
                      <span>S/200,000</span>
                    </div>
                  </div>

                  <div>
                    <Label>Plazo en Meses: {creditTerm[0]} meses</Label>
                    <Slider
                      value={creditTerm}
                      onValueChange={setCreditTerm}
                      max={60}
                      min={6}
                      step={6}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>6 meses</span>
                      <span>60 meses</span>
                    </div>
                  </div>
                </>
              )}

              {activeSimulator === "savings" && (
                <>
                  <div>
                    <Label>Monto Mensual: S/{savingsAmount[0].toLocaleString()}</Label>
                    <Slider
                      value={savingsAmount}
                      onValueChange={setSavingsAmount}
                      max={5000}
                      min={100}
                      step={50}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>S/100</span>
                      <span>S/5,000</span>
                    </div>
                  </div>

                  <div>
                    <Label>Plazo en Meses: {savingsTerm[0]} meses</Label>
                    <Slider
                      value={savingsTerm}
                      onValueChange={setSavingsTerm}
                      max={120}
                      min={6}
                      step={6}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>6 meses</span>
                      <span>120 meses</span>
                    </div>
                  </div>

                  <div>
                    <Label>Frecuencia de Depósito</Label>
                    <Select value={savingsFrequency} onValueChange={setSavingsFrequency}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="monthly">Mensual</SelectItem>
                        <SelectItem value="biweekly">Quincenal</SelectItem>
                        <SelectItem value="weekly">Semanal</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </>
              )}

              <div className="flex space-x-2">
                <Button className="flex-1 bg-lime-500 hover:bg-lime-600">Recalcular</Button>
                <Button variant="outline">
                  <Download className="w-4 h-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Resultados */}
          <Card>
            <CardHeader>
              <CardTitle>Resultados de la Simulación</CardTitle>
              <CardDescription>Detalles de tu simulación financiera</CardDescription>
            </CardHeader>
            <CardContent>
              {activeSimulator === "credit" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-600 font-medium">Cuota Mensual</p>
                      <p className="text-2xl font-bold text-blue-900">S/{creditResults.monthlyPayment}</p>
                    </div>
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-600 font-medium">Tasa de Interés</p>
                      <p className="text-2xl font-bold text-green-900">{creditResults.rate}%</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monto del Crédito:</span>
                      <span className="font-semibold">S/{creditAmount[0].toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total a Pagar:</span>
                      <span className="font-semibold">S/{creditResults.totalPayment}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total de Intereses:</span>
                      <span className="font-semibold text-red-600">S/{creditResults.totalInterest}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Plazo:</span>
                      <span className="font-semibold">{creditTerm[0]} meses</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-sm text-yellow-800">
                      <strong>Nota:</strong> Esta simulación es referencial. Las condiciones finales pueden variar según
                      tu evaluación crediticia.
                    </p>
                  </div>
                </div>
              )}

              {activeSimulator === "savings" && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-600 font-medium">Valor Futuro</p>
                      <p className="text-2xl font-bold text-green-900">S/{savingsResults.futureValue}</p>
                    </div>
                    <div className="p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-600 font-medium">Intereses Ganados</p>
                      <p className="text-2xl font-bold text-blue-900">S/{savingsResults.totalInterest}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ahorro Mensual:</span>
                      <span className="font-semibold">S/{savingsAmount[0].toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Total Depositado:</span>
                      <span className="font-semibold">S/{savingsResults.totalDeposited}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Plazo:</span>
                      <span className="font-semibold">{savingsTerm[0]} meses</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Tasa Anual:</span>
                      <span className="font-semibold text-green-600">8.0%</span>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-green-50 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>¡Excelente!</strong> Con disciplina de ahorro, podrás alcanzar tus metas financieras.
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 flex space-x-2">
                <Button className="flex-1 bg-blue-500 hover:bg-blue-600">Solicitar este Producto</Button>
                <Button variant="outline">
                  <Share className="w-4 h-4 mr-2" />
                  Compartir
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
