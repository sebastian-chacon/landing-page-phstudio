// app/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Globe, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "Su habilidad para capturar los detalles y la atmósfera del proyecto superó todas nuestras expectativas. Las imágenes se sienten vivas y con una identidad única. No pudimos elegir mejor.",
    author: "Sofía & Martín",
    role: "Proyecto Comercial - Octubre 2025"
  },
  {
    id: 2,
    quote: "Vino con la cámara a cubrir nuestra jornada de trabajo y se adaptó por completo a la dinámica del equipo. Capturó exactamente la esencia y el esfuerzo diario. Un profesional excelente.",
    author: "Equipo de Dirección",
    role: "Temporada Oficial de Producción"
  },
  {
    id: 3,
    quote: "Una mirada súper fresca y directa. Logró plasmar en cada toma la naturalidad del momento sin poses forzadas. El material final superó lo que teníamos en mente.",
    author: "Lucas Gómez",
    role: "Sesión Creativa y Retratos"
  }
];

interface PhotoItem {
  id: number;
  title: string;
  category: "Comercial" | "Eventos" | "Retratos";
  src: string;
  alt: string;
  spanClass: string;
  heightClass: string;
}

const portfolioPhotos: PhotoItem[] = [
  {
    id: 1,
    title: "Identidad Visual",
    category: "Comercial",
    src: "https://images.unsplash.com/photo-1626248801379-51a0748a5f96?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Proyecto comercial",
    spanClass: "md:col-span-2",
    heightClass: "h-[450px]",
  },
  {
    id: 2,
    title: "Expresión Urbana",
    category: "Retratos",
    src: "https://images.unsplash.com/photo-1630259136050-4d9ec96bc4b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Retrato en la calle",
    spanClass: "md:col-span-1",
    heightClass: "h-[450px]",
  },
  {
    id: 3,
    title: "Espacios Reales",
    category: "Comercial",
    src: "https://images.unsplash.com/photo-1621538997517-58ce53933faa?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Interior de local",
    spanClass: "md:col-span-1",
    heightClass: "h-[320px]",
  },
  {
    id: 4,
    title: "Detalles y Texturas",
    category: "Comercial",
    src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=800&auto=format&fit=crop",
    alt: "Fotografía de producto",
    spanClass: "md:col-span-1",
    heightClass: "h-[320px]",
  },
  {
    id: 5,
    title: "Cobertura en Vivo",
    category: "Eventos",
    src: "https://images.unsplash.com/photo-1480099225005-2513c8947aec?q=80&w=2503&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Evento en vivo",
    spanClass: "md:col-span-1",
    heightClass: "h-[320px]",
  },
  {
    id: 6,
    title: "Dinámica Colectiva",
    category: "Eventos",
    src: "https://images.unsplash.com/photo-1679757020290-4d569d2bd59c?q=80&w=2486&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Acontecimiento masivo",
    spanClass: "md:col-span-2",
    heightClass: "h-[380px]",
  },
  {
    id: 7,
    title: "Esencia Artesanal",
    category: "Comercial",
    src: "https://images.unsplash.com/photo-1590947132387-155cc02f3212?q=80&w=800&auto=format&fit=crop",
    alt: "Proceso de trabajo",
    spanClass: "md:col-span-1",
    heightClass: "h-[380px]",
  },
  {
    id: 8,
    title: "Instantes Capturados",
    category: "Retratos",
    src: "https://images.unsplash.com/photo-1624280157150-4d1ed8632989?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    alt: "Retrato expresivo",
    spanClass: "md:col-span-1",
    heightClass: "h-[320px]",
  },
];

export default function LandingPage() {
  const [activeFilter, setActiveFilter] = useState<string>("Todas");
  const filteredPhotos = (
    activeFilter === "Todas"
      ? portfolioPhotos
      : portfolioPhotos.filter((photo) => photo.category === activeFilter)
  ).slice(0, 7);
  
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  // Reemplaza este número por el de tu cliente final (ej: 5491112345678)
  const whatsappNumber = "5491100000000"; 
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#FAFAFA]">
      {/* 1. HEADER / NAVEGACIÓN (Logo genérico adaptable: PH [Nombre]) */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-8 py-5 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-gray-200/60">
        <div className="text-xl font-serif tracking-[0.2em] font-bold">
          PH<span className="text-sm">STUDIO</span>
        </div>
        <nav className="hidden md:flex items-center space-x-10 text-sm tracking-widest uppercase text-gray-700">
          <a href="#portafolio" className="hover:text-black transition-colors">
            Portafolio
          </a>
          <a href="#bio" className="hover:text-black transition-colors">
            Bio
          </a>
          <a href="#servicios" className="hover:text-black transition-colors">
            Servicios
          </a>
          <a href="#contacto" className="hover:text-black transition-colors">
            Contacto
          </a>
        </nav>
        <div>
          <a
            href={`${whatsappUrl}?text=Hola!%20Quiero%20consultar%20por%20una%20reserva.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#111111] text-[#FAFAFA] px-6 py-2.5 text-xs tracking-widest uppercase font-medium hover:bg-gray-800 transition-all shadow-sm"
          >
            RESERVAR
          </a>
        </div>
      </header>

      {/* 2. HERO SECTION */}
      <section className="relative h-[85vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1622550105129-02c04a85a5f3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?q=80&w=2000&auto=format&fit=crop"
            alt="Hero background"
            fill
            priority
            className="object-cover opacity-40 filter brightness-90"
          />
        </div>

        <div className="relative z-10 text-center max-w-3xl px-6 border border-white/20 p-12 backdrop-blur-[2px]">
          <h1 className="text-4xl md:text-6xl font-serif tracking-wide mb-4 font-normal">
            Fotografía Profesional & Documental
          </h1>
          <p className="text-sm md:text-base text-gray-200 tracking-wide font-light mb-8 max-w-xl mx-auto">
            Mirada honesta, intencional y atemporal para contar la historia de tu marca o proyecto.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#portafolio"
              className="w-full sm:w-auto bg-[#FAFAFA] text-[#111111] px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-gray-200 transition-all"
            >
              VER PORTAFOLIO
            </a>
            <a
              href={`${whatsappUrl}?text=Hola!%20Me%20interesa%20contactar%20contigo%20por%20tus%20servicios%20fotográficos.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto border border-white text-white px-8 py-3 text-xs tracking-widest uppercase font-medium hover:bg-white hover:text-black transition-all"
            >
              CONTACTAR
            </a>
          </div>
        </div>
      </section>

      {/* 3. PORTAFOLIO CON FILTROS */}
      <section
        id="portafolio"
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 block mb-2">
            REGISTRO VISUAL
          </span>
          <h2 className="text-4xl font-serif font-normal">Portafolio</h2>

          <div className="flex flex-wrap justify-center gap-8 mt-6 text-xs uppercase tracking-widest text-gray-500">
            {["Todas", "Comercial", "Eventos", "Retratos"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`pb-1 transition-colors ${
                  activeFilter === category
                    ? "text-black font-semibold border-b border-black"
                    : "hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-500">
          {filteredPhotos.map((photo) => (
            <div
              key={photo.id}
              className={`${photo.spanClass} relative ${photo.heightClass} group overflow-hidden bg-gray-200 transition-all duration-500`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm px-6 py-3 text-xs tracking-wider uppercase shadow-sm">
                <p className="font-semibold">{photo.title}</p>
                <span className="text-[10px] text-gray-500">
                  {photo.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. SECCIÓN "SOBRE MÍ" */}
      <section id="bio" className="py-24 bg-white border-y border-gray-200/60">
        <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative h-137.5 bg-gray-100 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1531384698654-7f6e477ca221?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Fotógrafo profesional"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 block mb-2">
              SOBRE MÍ
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-normal mb-6 leading-snug">
              Una mirada atenta y genuina
            </h2>
            <p className="text-gray-600 font-light leading-relaxed mb-6 text-sm">
              Mi trabajo consiste en observar el entorno sin intervenir, buscando la autenticidad y el detalle en cada escena. Ya sea capturando la energía de un evento corporativo, la atmósfera de un espacio comercial, la espontaneidad de un retrato o la dinámica de cualquier acontecimiento, mi enfoque se centra en contar historias visuales reales.
            </p>
            <p className="text-gray-600 font-light leading-relaxed mb-8 text-sm">
              Creo en una narrativa limpia y honesta, donde cada imagen transmita la verdadera esencia del momento sin artificios innecesarios.
            </p>
            <button className="flex items-center gap-2 text-xs uppercase tracking-widest font-semibold border-b border-black pb-1 hover:opacity-75 transition-opacity">
              Saber más <ChevronDown size={14} />
            </button>
          </div>
        </div>
      </section>

      {/* 5. PAQUETES / SERVICIOS */}
      <section id="servicios" className="py-24 max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 block mb-2">
            SERVICIOS
          </span>
          <h2 className="text-4xl font-serif font-normal mb-3">Lo que hago</h2>
          <p className="text-gray-500 text-sm font-light">
            Propuestas visuales adaptadas a cada proyecto, marca o acontecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 border border-gray-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="text-2xl mb-4">🏢</div>
              <h3 className="font-serif text-xl mb-3">Comercial y Espacios</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-light mb-8">
                Contenido visual para marcas, locales y productos. Destacamos la identidad, los detalles y la atmósfera de tu espacio de trabajo.
              </p>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">
                Consultar{" "}
                <span className="text-black font-semibold text-sm">
                  Pack Comercial
                </span>
              </div>
              <a
                href={`${whatsappUrl}?text=Hola!%20Me%20interesa%20consultar%20por%20el%20Pack%20Comercial.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full border border-black py-3 text-xs uppercase tracking-widest font-medium hover:bg-black hover:text-white transition-all"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white p-8 border border-black shadow-lg flex flex-col justify-between relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] tracking-widest uppercase px-3 py-1">
              Popular
            </span>
            <div>
              <div className="text-2xl mb-4">⚡</div>
              <h3 className="font-serif text-xl mb-3">Eventos y Dinámicas</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-light mb-8">
                Cobertura integral de acontecimientos, actividades en vivo y proyectos especiales con un registro ágil y detallista.
              </p>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">
                Consultar{" "}
                <span className="text-black font-semibold text-sm">
                  Cobertura Total
                </span>
              </div>
              <a
                href={`${whatsappUrl}?text=Hola!%20Me%20interesa%20consultar%20por%20la%20Cobertura%20Total%20de%20Eventos.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full bg-black text-white py-3 text-xs uppercase tracking-widest font-medium hover:bg-gray-800 transition-all"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white p-8 border border-gray-200/80 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="text-2xl mb-4">🎯</div>
              <h3 className="font-serif text-xl mb-3">Proyecto a Medida</h3>
              <p className="text-gray-600 text-xs leading-relaxed font-light mb-8">
                Fotografía callejera, retratos, crónicas visuales y propuestas creativas libres según las necesidades específicas de cada cliente.
              </p>
            </div>
            <div>
              <div className="text-xs text-gray-500 uppercase tracking-widest mb-4">
                Consultar{" "}
                <span className="text-black font-semibold text-sm">
                  Proyecto Libre
                </span>
              </div>
              <a
                href={`${whatsappUrl}?text=Hola!%20Quiero%20consultar%20por%20un%20Proyecto%20a%20Medida.`}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center w-full border border-black py-3 text-xs uppercase tracking-widest font-medium hover:bg-black hover:text-white transition-all"
              >
                Reservar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 6. TESTIMONIOS */}
      <section className="py-24 bg-white border-y border-gray-200/60">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 block mb-2">
            TESTIMONIOS
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-normal mb-12">
            Lo que dicen mis clientes
          </h2>

          <div className="relative px-8 transition-all duration-500">
            <span className="text-5xl font-serif text-gray-300 block mb-4">
              “
            </span>
            <p className="text-gray-700 font-serif text-lg md:text-xl italic leading-relaxed mb-8 max-w-2xl mx-auto min-h-27.5">
              &quot;{testimonials[activeTestimonial].quote}&quot;
            </p>
            <div>
              <p className="font-semibold text-sm tracking-wide">
                {testimonials[activeTestimonial].author}
              </p>
              <span className="text-xs text-gray-400">
                {testimonials[activeTestimonial].role}
              </span>
            </div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button 
                onClick={() => setActiveTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="p-2 border border-gray-300 hover:border-black transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <span className="text-xs text-gray-400 tracking-widest">
                {activeTestimonial + 1} / {testimonials.length}
              </span>
              <button 
                onClick={() => setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="p-2 border border-gray-300 hover:border-black transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. FOOTER / CONTACTO WHATSAPP */}
      <footer
        id="contacto"
        className="bg-[#FAFAFA] pt-24 pb-12 border-t border-gray-200"
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          <div className="md:col-span-2 flex flex-col justify-center">
            <h3 className="font-serif text-3xl mb-3">Hablemos por WhatsApp</h3>
            <p className="text-gray-600 text-sm font-light mb-8 max-w-lg">
              Coordinemos directamente los detalles para tu próximo proyecto, evento, espacio comercial o cobertura especial. ¡Escribime y lo charlamos al instante!
            </p>

            <div>
              <a
                href={`${whatsappUrl}?text=Hola!%20Quiero%20ponerme%20en%20contacto%20para%20coordinar%20una%20sesión.`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#111111] text-[#FAFAFA] px-6 py-2.5 text-xs tracking-widest uppercase font-medium hover:bg-gray-800 transition-all shadow-sm"
                >
                Abrir chat de WhatsApp
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-between">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                  Navegación
                </h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li>
                    <a href="#portafolio" className="hover:text-black">
                      Portafolio
                    </a>
                  </li>
                  <li>
                    <a href="#bio" className="hover:text-black">
                      Sobre Mí
                    </a>
                  </li>
                  <li>
                    <a href="#servicios" className="hover:text-black">
                      Servicios
                    </a>
                  </li>
                  <li>
                    <a href="#contacto" className="hover:text-black">
                      Contacto
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                  Información
                </h4>
                <ul className="space-y-2 text-xs text-gray-600">
                  <li>
                    <a href="#" className="hover:text-black">
                      Términos de servicio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      Política de privacidad
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-black">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 md:mt-0">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-4">
                Redes sociales
              </h4>
              <div className="flex space-x-4 text-xs text-gray-600">
                <a
                  href="#"
                  className="flex items-center gap-1 hover:text-black"
                >
                  <Globe size={14} /> Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 pt-8 border-t border-gray-200/60 flex flex-col sm:flex-row justify-between items-center text-[10px] text-gray-400 tracking-wider">
          <p>© PH STUDIO 2026. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">Fotografía Profesional</p>
        </div>
      </footer>
    </div>
  );
}