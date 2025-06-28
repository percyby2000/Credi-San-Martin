"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  ChevronRight,
  TrendingUp,
  Users,
  CreditCard,
  PiggyBank,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Menu,
  X,
  Star,
  CheckCircle,
  ArrowRight,
  Building,
  Target,
  Eye,
  Heart,
  BookOpen,
  Calendar,
  User,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import Imagenlogo from "@/public/logo.png"


export default function CooperativaWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("inicio")

  const slides = [
    {
      title: "Bienvenido a tu Cooperativa de Confianza",
      subtitle: "Más de 25 años construyendo sueños financieros",
      description: "Descubre nuestros productos diseñados para hacer crecer tu patrimonio",
      cta: "Conoce nuestros servicios",
      image: "https://media.istockphoto.com/id/2160500238/photo/portrait-of-a-smiling-young-hispanic-female-entrepreneur-standing-with-arms-crossed-in-her.jpg?s=1024x1024&w=is&k=20&c=0BS5wOvM9H7w-HR78ouY_EWJf4N6BbAYuaSZBB0-E7c=",
    },
    {
      title: "Créditos con las mejores tasas",
      subtitle: "Financiamiento rápido y seguro",
      description: "Obtén el préstamo que necesitas con tasas preferenciales",
      cta: "Solicita tu crédito",
      image: "https://biblioteca.jornada.com.pe/images/2025/02/25/Carnavales-2025-comerciantes-intensifican-ventas-de-articulos-propios-de-la-festividad.webp",
    },
    {
      title: "Ahorra e invierte con nosotros",
      subtitle: "Tu dinero trabajando para ti",
      description: "Planes de ahorro con excelentes rendimientos",
      cta: "Comienza a ahorrar",
      image: "https://www.ytuqueplanes.com/imagenes/fotos/novedades/interna-Artesan%C3%ADa-de-Ayacucho-2.jpg",
    },
  ]

  const services = [
    {
      icon: PiggyBank,
      title: "Cuentas de Ahorro",
      description: "Ahorra con tasas competitivas y acceso inmediato a tu dinero",
      features: ["Sin monto mínimo", "Tarjeta de débito gratuita", "Banca móvil"],
    },
    {
      icon: CreditCard,
      title: "Préstamos Personales",
      description: "Créditos rápidos para tus proyectos personales",
      features: ["Hasta S/50,000", "Tasas desde 12%", "Aprobación en 24h"],
    },
    {
      icon: Building,
      title: "Créditos Prendarios",
      description: "Financiamiento con garantía de vehículo o inmueble",
      features: ["Hasta 80% del valor", "Plazos flexibles", "Tasas preferenciales"],
    },
    {
      icon: TrendingUp,
      title: "Inversiones",
      description: "Haz crecer tu dinero con nuestros productos de inversión",
      features: ["CDT desde S/100,000", "Rendimientos atractivos", "Asesoría especializada"],
    },
  ]

  const educationArticles = [
    {
      title: "Cómo crear un presupuesto familiar efectivo",
      excerpt: "Aprende a organizar tus finanzas personales con herramientas prácticas",
      date: "15 Nov 2024",
      category: "Finanzas Personales",
      image: "https://scontent.flim2-2.fna.fbcdn.net/v/t39.30808-6/479549205_558656133875634_2717845050020480468_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH89Vwue-Gp1Xn53gggQ6DfbVm8DLCPSjxtWbwMsI9KPP583Ycfk_Fys7u62DNM-3Gq2-DtSB0xeszf2V8FiRPM&_nc_ohc=eHXxbO01gEwQ7kNvwGnmTEu&_nc_oc=AdnyyHdJHPGKonlF4vTM8mp6slJT4b5_OS64Hb1LHxR1CnCMOfQns8YRxuR70mJrz5mM1Rw3q4cjK_OR-8YmdnbB&_nc_zt=23&_nc_ht=scontent.flim2-2.fna&_nc_gid=CHXgr0km4beXi0_s46Z5gQ&oh=00_AfOzs3qmGIQDjQcgKSE2jwSFX0wZa0QJqA_lwNCqAUp43w&oe=6866202D",
    },
    {
      title: "Inversión para principiantes: Guía completa",
      excerpt: "Todo lo que necesitas saber antes de hacer tu primera inversión",
      date: "10 Nov 2024",
      category: "Inversiones",
      image: "https://scontent.flim2-4.fna.fbcdn.net/v/t39.30808-6/472171998_530530470021534_4304040910802705053_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFyYCZ_9iuS9XyOGr7uwMuU1iPhRVJkTM_WI-FFUmRMzxYSh43P6hOjL1jRAXw6TD6bvEQs5RQrLigfrqiguvt3&_nc_ohc=0w07WuryPR0Q7kNvwHM4VbF&_nc_oc=AdlQFWgm0AXfMSxG7Ujus7dXuLIXj6gdUfqW7jEBB8Zzkj7v4zho-OB340nPeG1OMByFHF9KymVtnSoRmM2hGqh3&_nc_zt=23&_nc_ht=scontent.flim2-4.fna&_nc_gid=OlOCzFfvifQ0dDOzz9hz3w&oh=00_AfOUe9ixmFbHqUmk8tjGO7bxMPn8OUh4B3QDFLgD02JLWA&oe=686622E4",
    },
    {
      title: "Beneficios de pertenecer a una cooperativa",
      excerpt: "Descubre las ventajas del modelo cooperativo vs bancos tradicionales",
      date: "5 Nov 2024",
      category: "Cooperativismo",
      image: "https://scontent.flim2-1.fna.fbcdn.net/v/t39.30808-6/480254305_562255266849054_6485757624532205158_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGkaMQc7wk-cOANNGYeY1qDzxiFaHgwuNfPGIVoeDC419uz9YaZDUbVuHKNdQQ7TPOzZTzO8-QuVcmwFfesvh_c&_nc_ohc=GVQzPeyjkY8Q7kNvwECw-5Y&_nc_oc=AdmvQDwXKpd_DwJ_4BJgc8bWCu_9SBjGUtB_LXKDX4t9KVaJRih4jHwuM8m4apzdIOD96UepbeX6KS9Wch39Qh83&_nc_zt=23&_nc_ht=scontent.flim2-1.fna&_nc_gid=ECJXQJNuB523OAKoNAPBnA&oh=00_AfMEYgAj8Evey56WecHzSAq_4nbugJ7TUEHppadln0aD3A&oe=68661D61",
    },
  ]

  const news = [
    {
      title: "Nueva sucursal en el centro de la ciudad",
      excerpt: "Ampliamos nuestra cobertura para estar más cerca de ti",
      date: "20 Nov 2024",
      type: "Expansión",
    },
    {
      title: "Promoción especial: Créditos sin cuota inicial",
      excerpt: "Durante diciembre, accede a créditos vehiculares sin cuota inicial",
      date: "18 Nov 2024",
      type: "Promoción",
    },
    {
      title: "Actualización de la app móvil",
      excerpt: "Nueva versión con mejores funcionalidades y seguridad",
      date: "15 Nov 2024",
      type: "Tecnología",
    },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [slides.length])

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-lime-400 to-green-500 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={Imagenlogo}
                    alt="Logo de la Cooperativa"
                    width={40}
                    height={40}
                    className="object-cover"
                />
                </div>
              <div>
                <h1 className="text-lg font-bold text-gray-900">CREDI</h1>
                <p className="text-xs text-gray-600"> San Martin de Porres E.I.R.L</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { id: "inicio", label: "Inicio" },
                { id: "nosotros", label: "Nosotros" },
                { id: "servicios", label: "Servicios" },
                { id: "educacion", label: "Educación" },
                { id: "noticias", label: "Noticias" },
                { id: "contacto", label: "Contacto" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-lime-600 ${
                    activeSection === item.id ? "text-lime-600" : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline" size="sm" className="border-lime-500 text-lime-600 hover:bg-lime-50">
                  <User className="w-4 h-4 mr-2" />
                  Intranet
                </Button>
              </Link>
                <Link href="/login">
                <Button size="sm" className="bg-lime-500 hover:bg-lime-600 text-white">
                  Únete ahora
                </Button>
                </Link>
            </div>

            {/* Mobile menu button */}
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-200">
              <nav className="flex flex-col space-y-4">
                {[
                  { id: "inicio", label: "Inicio" },
                  { id: "nosotros", label: "Nosotros" },
                  { id: "servicios", label: "Servicios" },
                  { id: "educacion", label: "Educación" },
                  { id: "noticias", label: "Noticias" },
                  { id: "contacto", label: "Contacto" },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left text-gray-700 hover:text-lime-600 font-medium"
                  >
                    {item.label}
                  </button>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                  <Link href="/login">
                    <Button variant="outline" size="sm" className="w-full border-lime-500 text-lime-600">
                      <User className="w-4 h-4 mr-2" />
                      Intranet
                    </Button>
                  </Link>
                  <Button size="sm" className="w-full bg-lime-500 hover:bg-lime-600 text-white">
                    Únete ahora
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Slider */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30 z-10" />
        <div className="absolute inset-0">
          <Image
            src={slides[currentSlide].image || "/placeholder.svg"}
            alt="Hero background"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <Badge className="mb-4 bg-lime-500/20 text-lime-300 border-lime-400">{slides[currentSlide].subtitle}</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">{slides[currentSlide].title}</h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">{slides[currentSlide].description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-lime-500 hover:bg-lime-600 text-white">
              {slides[currentSlide].cta}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              Conoce más
            </Button>
          </div>
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? "bg-lime-500" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "25+", label: "Años de experiencia", icon: Calendar },
              { number: "15,000+", label: "Socios activos", icon: Users },
              { number: "S/50M+", label: "En créditos otorgados", icon: TrendingUp },
              { number: "98%", label: "Satisfacción del cliente", icon: Star },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-lime-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lime-100 text-lime-700">Nosotros</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Cooperativa San Martín de Porres</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Desde 1999, hemos sido el aliado financiero de miles de familias, construyendo un futuro próspero basado
              en la confianza mutua y el desarrollo sostenible.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="https://scontent.flim2-6.fna.fbcdn.net/v/t39.30808-6/476440807_557486663992581_2393715791485649439_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeFOgIUeqsthOH1dO0Q6EmOXuWn3evE3E3W5afd68TcTdWHMJrNyGP3_tDIPNzmG2bBC6Y5PH6-PgsfslaC85oTL&_nc_ohc=lAVdLM8OlZ8Q7kNvwG9bhv3&_nc_oc=Adm75V1X8tIEayLob7bXniJ7oQur3DaYQpIQknLy-N72oTdx3JdcVr18py3KSmIDjLp5PkOMo2SGaJdWdsSgqCtH&_nc_zt=23&_nc_ht=scontent.flim2-6.fna&_nc_gid=oS81F4MqsO8hCzXgJ1yJig&oh=00_AfNaZfMq9zR1_2XHaLLxKew6ETlWD5xUCY9RR6nztX9H4g&oe=68662412"
                alt="Nuestra historia"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Nuestra Historia</h3>
              <p className="text-gray-600 mb-6">
                Fundada en 1999 por un grupo de visionarios comprometidos con el desarrollo económico de la comunidad,
                la Cooperativa San Martín de Porres nació con el propósito de democratizar el acceso a servicios
                financieros de calidad.
              </p>
              <p className="text-gray-600 mb-6">
                A lo largo de más de dos décadas, hemos crecido de manera sostenible, manteniendo siempre nuestros
                valores cooperativos y el compromiso con nuestros socios.
              </p>
              <div className="flex items-center space-x-4">
                <CheckCircle className="w-6 h-6 text-lime-500" />
                <span className="text-gray-700">Más de 25 años de trayectoria sólida</span>
              </div>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-l-4 border-l-lime-500">
              <CardHeader>
                <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-lime-600" />
                </div>
                <CardTitle className="text-xl">Misión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Brindar servicios financieros integrales, accesibles y de calidad, promoviendo el desarrollo económico
                  y social de nuestros socios y la comunidad.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-blue-500">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Visión</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ser la cooperativa líder en servicios financieros, reconocida por su innovación, solidez y compromiso
                  con el desarrollo sostenible.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-green-500">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Valores</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• Transparencia y honestidad</li>
                  <li>• Solidaridad y ayuda mutua</li>
                  <li>• Responsabilidad social</li>
                  <li>• Innovación y excelencia</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-lime-100 text-lime-700">Servicios</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Productos Financieros</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre nuestra amplia gama de productos diseñados para satisfacer todas tus necesidades financieras.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-lime-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-lime-500 transition-colors">
                    <service.icon className="w-8 h-8 text-lime-600 group-hover:text-white" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-lime-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-lime-500 hover:bg-lime-600 text-white">
                    Más información
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="educacion" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Educación Financiera</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Aprende y Crece</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fortalece tus conocimientos financieros con nuestros recursos educativos y toma mejores decisiones para tu
              futuro.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {educationArticles.map((article, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300">
                <div className="relative overflow-hidden">
                  <Image
                    src={article.image || "/educacion.jpg"}
                    alt={article.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-500 text-white">{article.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">{article.title}</CardTitle>
                  <CardDescription>{article.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{article.date}</span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                      Leer más
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-blue-500 text-blue-600 hover:bg-blue-50">
              <BookOpen className="w-5 h-5 mr-2" />
              Ver todos los artículos
            </Button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="noticias" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700">Noticias</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Últimas Novedades</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mantente informado sobre nuestros últimos lanzamientos, promociones y eventos especiales.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{item.type}</Badge>
                    <span className="text-sm text-gray-500">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription>{item.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" className="text-green-600 hover:text-green-700 p-0">
                    Leer más
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-gray-100 text-gray-700">Contacto</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Estamos aquí para ayudarte</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Contáctanos para resolver tus dudas o solicitar información sobre nuestros productos y servicios.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle>Envíanos un mensaje</CardTitle>
                <CardDescription>Completa el formulario y te responderemos a la brevedad</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                      <Input placeholder="Tu nombre completo" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Teléfono</label>
                      <Input placeholder="Tu número de teléfono" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                    <Input type="email" placeholder="tu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Asunto</label>
                    <Input placeholder="¿En qué podemos ayudarte?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                    <Textarea placeholder="Escribe tu mensaje aquí..." rows={4} />
                  </div>
                  <Button className="w-full bg-lime-500 hover:bg-lime-600 text-white">Enviar mensaje</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Información de contacto</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-lime-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-lime-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Oficina Principal</h4>
                      <p className="text-gray-600">
                        Av. San Martín de Porres 1234
                        <br />
                        Lima, Perú
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Teléfonos</h4>
                      <p className="text-gray-600">
                        (01) 234-5678
                        <br />
                        (01) 234-5679
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">
                        info@coopsmp.com
                        <br />
                        atencion@coopsmp.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Síguenos en redes sociales</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex space-x-4">
                    <Button size="icon" variant="outline" className="hover:bg-blue-50 hover:border-blue-500">
                      <Facebook className="w-5 h-5 text-blue-600" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-blue-50 hover:border-blue-400">
                      <Twitter className="w-5 h-5 text-blue-400" />
                    </Button>
                    <Button size="icon" variant="outline" className="hover:bg-pink-50 hover:border-pink-500">
                      <Instagram className="w-5 h-5 text-pink-500" />
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Map placeholder */}
              <Card>
                <CardContent className="p-0">
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center text-gray-500">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Mapa interactivo</p>
                      <p className="text-sm">Ubicación de nuestras oficinas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-lime-400 to-green-500 rounded-full flex items-center justify-center">
                  <Building className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold">COOPSMP</h3>
                  <p className="text-sm text-gray-400">San Martín de Porres</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Tu cooperativa de confianza desde 1999. Construyendo sueños financieros juntos.
              </p>
                <div className="flex space-x-4">
                <a
                  href="https://web.facebook.com/profile.php?id=100091937571696"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <Facebook className="w-5 h-5" />
                  </Button>
                </a>
                <a
                  href="https://tiktok.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                >
                  <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  {/* TikTok SVG icon */}
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M12.75 2h2.25a.75.75 0 0 1 .75.75v1.5a4.5 4.5 0 0 0 4.5 4.5h.75a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-1.5v4.5a6.75 6.75 0 1 1-6.75-6.75.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75 2.25 2.25 0 1 0 2.25 2.25V2.75A.75.75 0 0 1 12.75 2z"/>
                  </svg>
                  </Button>
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Button size="icon" variant="ghost" className="text-gray-400 hover:text-white">
                  <Instagram className="w-5 h-5" />
                  </Button>
                </a>
                </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Servicios</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cuentas de Ahorro
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Préstamos Personales
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Créditos Prendarios
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Inversiones
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Recursos</h4>
              <ul className="space-y-3 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Educación Financiera
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Calculadoras
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Preguntas Frecuentes
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Centro de Ayuda
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Contacto</h4>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Av. San Martín de Porres 1234
                </li>
                <li className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  (01) 234-5678
                </li>
                <li className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  info@coopsmp.com
                </li>
              </ul>
            </div>
          </div>

            <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 flex flex-col items-center gap-2">
            <p>&copy; 2024 Cooperativa de Ahorro y Crédito San Martín de Porres Ltda. Todos los derechos reservados.</p>
            <div className="flex items-center gap-2">
              <a
              href="https://github.com/percyby2000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center hover:text-white transition-colors"
              >
              <svg
                className="w-5 h-5 mr-1"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.867 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.31.678.921.678 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.135 20.2 22 16.448 22 12.021 22 6.484 17.523 2 12 2z"
                clipRule="evenodd"
                />
              </svg>
              Designer Percy
              </a>
            </div>
            </div>
        </div>
      </footer>
    </div>
  )
}
