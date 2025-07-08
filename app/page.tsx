"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronRight, TrendingUp, Users, CreditCard, PiggyBank, MapPin,
  Phone, Mail, Facebook, Twitter, Instagram, Menu, X, Star, CheckCircle,
  ArrowRight, Building, Target, Eye, Heart, BookOpen, Calendar, User,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Imagenlogo from "@/public/logo.png";
import Head from "next/head";



/* imagenes para el slider*/
import Slider1 from "@/public/slide1.webp";
import Slider2 from "@/public/slide2.png"
import Slider3 from "@/public/slide3.png";
import Slider4 from "@/public/slide4.png"
import Slider5 from "@/public/slide5.png";
import Slider6 from "@/public/slide6.png"


/* imagenes  para componentes */
import Emp1 from "@/public/emp1.png"
import Emp2 from "@/public/emp2.png"
import Emp3 from "@/public/emp3.png"
import Emp4 from "@/public/emp4.png"
import Emp5 from "@/public/emp5.png"
import Emp6 from "@/public/emp6.png"
import Emp7 from "@/public/emp7.png"

import Educacion from "@/public/educacion.jpg"
import Historia from "@/public/history.png"
import Equipo from "@/public/equipo.png"

const galeria = [Emp1, Emp2, Emp3, Emp4, Emp5, Emp6, Emp7, Emp3/*, … */];

export default function CooperativaWebsite() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const slides = [
    {
      title: "Bienvenido a tu Cooperativa de Confianza",
      subtitle: "Más de 5 años construyendo sueños financieros",
      description: "Descubre nuestros productos diseñados para hacer crecer tu patrimonio",
      cta: "Conoce nuestros servicios",
      image: Slider1, // <- Cambia aquí
    },
    {
      title: "Créditos con las mejores tasas",
      subtitle: "Financiamiento rápido y seguro",
      description: "Obtén el préstamo que necesitas con tasas preferenciales",
      cta: "Solicita tu crédito",
      image: Slider2,
    },
    {
      title: "Ahorra e invierte con nosotros",
      subtitle: "Tu dinero trabajando para ti",
      description: "Planes de ahorro con excelentes rendimientos",
      cta: "Comienza a ahorrar",
      image: Slider3,
    },
    {
      title: "Ahorra e invierte con nosotros",
      subtitle: "Tu dinero trabajando para ti",
      description: "Planes de ahorro con excelentes rendimientos",
      cta: "Comienza a ahorrar",
      image: Slider5,
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
      image: Educacion,
    },
    {
      title: "Inversión para principiantes: Guía completa",
      excerpt: "Todo lo que necesitas saber antes de hacer tu primera inversión",
      date: "10 Nov 2024",
      category: "Inversiones",
      image: Slider4
    },
    {
      title: "Beneficios de pertenecer a una cooperativa",
      excerpt: "Descubre las ventajas del modelo cooperativo vs bancos tradicionales",
      date: "5 Nov 2024",
      category: "Cooperativismo",
      image: Equipo,
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
                  className={`text-sm font-medium transition-colors hover:text-lime-600 ${activeSection === item.id ? "text-lime-600" : "text-gray-700"
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
            src={slides[currentSlide].image || "/slide1.webp"}
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
            <Button size="lg" variant="outline" className="border-white text-black hover:bg-white hover:text-coop-lime-500">
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
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-lime-500" : "bg-white/50"
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
                src={Historia}
                alt="Nuestra historia"
                width={500}
                height={600}
                className="rounded-lg shadow-lg filter grayscale hover:grayscale-0 transition"

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
        {/* ————— Sección: Galería de Imágenes ————— */}
        <section id="galeria" className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-bold text-center text-blak-700 mb-10">
            para emprendedores como tú
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {galeria.map((imgSrc, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <Image
                  src={imgSrc}
                  alt={`Foto ${idx + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
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


            </div>
            <br />
          </div>
          {/* Google Maps embed for Ayacucho, Credi San Martín de Porres */}
          <Card>
            <CardHeader>
              <CardTitle>Ubicación en el mapa</CardTitle>
              <CardDescription>Encuéntranos en Ayacucho</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="h-64 rounded-lg overflow-hidden">
                <iframe
                  title="Credi San Martín de Porres Ayacucho"
                  src="https://www.google.com/maps?q=Credi+San+Martin+de+Porres,+Ayacucho,+Perú&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
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
                      <path d="M12.75 2h2.25a.75.75 0 0 1 .75.75v1.5a4.5 4.5 0 0 0 4.5 4.5h.75a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75h-1.5v4.5a6.75 6.75 0 1 1-6.75-6.75.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-.75.75 2.25 2.25 0 1 0 2.25 2.25V2.75A.75.75 0 0 1 12.75 2z" />
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
            <p>&copy; 2024 San Martin de Porres E.I.R.L. Todos los derechos reservados.</p>
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
                Designer by Percy
              </a>
            </div>
          </div>
        </div>
      </footer>
      {/* Botón flotante de WhatsApp mejorado */}

    <>
      <style jsx>{`
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70% { box-shadow: 0 0 0 16px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
        @keyframes glow {
          0% { box-shadow: 0 0 20px rgba(37, 211, 102, 0.5); }
          50% { box-shadow: 0 0 30px rgba(37, 211, 102, 0.8); }
          100% { box-shadow: 0 0 20px rgba(37, 211, 102, 0.5); }
        }
        .whatsapp-float {
          animation: bounce 2s infinite;
          box-shadow: 0 4px 24px 0 rgba(37,211,102,0.4);
          border-radius: 50%;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          transition: all 0.3s ease;
        }
        .whatsapp-float:hover {
          transform: scale(1.1);
          animation: glow 1.5s infinite;
        }
        .pulse-ring {
          animation: pulse 1.5s infinite;
          position: absolute;
          inset: 0;
          border-radius: 50%;
          z-index: 0;
        }
        .notification-badge {
          position: absolute;
          top: -4px;
          right: -4px;
          background: linear-gradient(135deg, #ff4444 0%, #cc0000 100%);
          color: white;
          font-size: 12px;
          font-weight: bold;
          border-radius: 50%;
          width: 20px;
          height: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 8px rgba(255, 68, 68, 0.5);
          z-index: 10;
          animation: pulse 2s infinite;
        }
        .help-tooltip {
          position: absolute;
          right: 80px;
          top: 50%;
          transform: translateY(-50%);
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: white;
          padding: 12px 16px;
          border-radius: 12px;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          z-index: 20;
        }
        .help-tooltip::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 8px solid transparent;
          border-left-color: #25D366;
        }
        .whatsapp-container:hover .help-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(-8px);
        }
        .whatsapp-icon {
          position: relative;
          z-index: 10;
          transition: transform 0.3s ease;
        }
        .whatsapp-float:hover .whatsapp-icon {
          transform: scale(1.1);
        }
      `}</style>
      
      <div className="fixed bottom-6 right-6 z-50 whatsapp-container">
        <div className="relative">
          <a
            href="https://wa.me/51987654321?text=Hola%2C%20necesito%20información"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="whatsapp-float"
          >
            {/* Efecto de onda pulsante */}
            <span className="pulse-ring"></span>
            
            {/* Badge de notificación */}
            <span className="notification-badge">1</span>
            
            {/* Icono WhatsApp SVG optimizado */}
            <svg
              className="whatsapp-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
            </svg>
          </a>
          
          {/* Tooltip de ayuda */}
          <span className="help-tooltip">
            💬 ¿Necesitas ayuda?
          </span>
        </div>
      </div>
    </>
  );
      
    </div>
  )
}
