// app/page.tsx
"use client";

import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { useState } from "react";

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  src: string;
  span: string;
}

const galleryProjects: GalleryItem[] = [
    {
      id: 1,
      title: "Editorial Retrato",
      category: "Moda",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 md:col-span-1 md:row-span-3",
    },
    {
      id: 2,
      title: "Minimal Interior",
      category: "Espacios",
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-1 md:col-span-2 md:row-span-2",
    },
    {
      id: 3,
      title: "Warm Desert Tones",
      category: "Estudio",
      src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 md:col-span-1 md:row-span-1",
    },
    {
      id: 4,
      title: "Group Motion",
      category: "Editorial",
      src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 md:col-span-1 md:row-span-2",
    },
    {
      id: 5,
      title: "Orange Car Scene",
      category: "Comercial",
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 md:col-span-1 md:row-span-1",
    },
    {
      id: 6,
      title: "Abstract Art",
      category: "Conceptual",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 md:col-span-1 md:row-span-2",
    },
    {
      id: 7,
      title: "Living Room Setup",
      category: "Espacios",
      src: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-1 md:col-span-2 md:row-span-2",
    },
    {
      id: 8,
      title: "Neon Glow",
      category: "Experimental",
      src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 md:col-span-1 md:row-span-2",
    },
    {
      id: 9,
      title: "Surreal Llama",
      category: "Fine Art",
      src: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 md:col-span-1 md:row-span-1",
    },
];

export default function PhotographyPortfolio() {
  const whatsappNumber = "5491100000000";
  const [activeFilter, setActiveFilter] = useState("Todos");

  return (
    <div className="min-h-screen min-w-[320px] bg-[#F9F9F9] text-[#111111] font-sans selection:bg-black selection:text-white overflow-x-hidden">
      
      {/* HEADER MINIMALISTA */}
      <header className="sticky top-0 z-50 bg-[#F9F9F9]/90 backdrop-blur-md border-b border-gray-200/60 px-4 md:px-12 py-4 md:py-5 flex items-center justify-between">
        <div className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
          studio<span className="text-gray-400">.ph</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.15em] uppercase font-medium text-gray-600">
          <a href="#portfolio" className="hover:text-black transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-black transition-colors">About</a>
          <a href="#services" className="hover:text-black transition-colors">Services</a>
        </nav>

        <div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hola!%20Me%20interesa%20contratar%20tus%20servicios%20de%20fotografía.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-3.5 md:px-5 py-2 md:py-2.5 text-[10px] md:text-xs uppercase tracking-widest font-medium rounded-full hover:bg-gray-800 transition-all flex items-center gap-1.5 shadow-sm"
          >
            Get in touch <ArrowUpRight size={14} />
          </a>
        </div>
      </header>

      {/* GRILLA SEGURA PARA PANTALLAS ULTRA ESTRECHAS */}
      <main id="portfolio" className="flex-1 p-3 md:p-6 max-w-[1700px] w-full mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 auto-rows-55 sm:auto-rows-40 md:auto-rows-[minmax(130px,1fr)] gap-3 w-full md:h-[calc(100vh-100px)] md:max-h-220">
          {galleryProjects.map((item) => (
            <a
              key={item.id}
              href={`https://wa.me/${whatsappNumber}?text=Hola!%20Me%20gustó%20mucho%20la%20foto%20"${encodeURIComponent(item.title)}".`}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden bg-gray-200 rounded-sm shadow-sm ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] tracking-widest uppercase bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full">
                    {item.category}
                  </span>
                  <ArrowUpRight size={16} className="transform -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform" />
                </div>
                <div>
                  <h3 className="text-sm md:text-base font-light tracking-tight">{item.title}</h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
      {/* SECCIÓN SOBRE MÍ / ABOUT */}
      <section id="about" className="pb-20 md:pb-28 px-4 md:px-12 max-w-5xl mx-auto border-t border-gray-200/60 mt-12">
        <h2 className="text-2xl md:text-3xl uppercase text-center tracking-[0.3em] text-gray-400 block my-10">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-75 sm:h-87.5 md:h-100 rounded-sm overflow-hidden bg-gray-200">
            <Image
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop"
              alt="Fotógrafo en estudio"
              fill
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 block mb-3">
              Enfoque visual
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-normal mb-6 leading-snug">
              Capturando la esencia a través de la luz y el espacio.
            </h3>
            <p className="text-gray-600 font-light text-xs sm:text-sm leading-relaxed mb-6">
              Soy director de fotografía y fotógrafo comercial. Mi trabajo explora la relación entre la arquitectura, la moda y la luz natural, buscando siempre una estética minimalista, limpia y sofisticada que potencie la identidad de cada marca o proyecto.
            </p>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-xs font-medium uppercase tracking-widest">
              <span className="border-b border-black pb-1">Editorial</span>
              <span className="border-b border-black pb-1">Comercial</span>
              <span className="border-b border-black pb-1">Espacios</span>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="services" className="bg-[#111111] text-white py-16 md:py-20 px-4 md:px-12 mt-12 md:mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-12 md:mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 block mb-2">
              ¿Tenés un proyecto en mente?
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-serif font-light mb-6">
              Hablemos y creemos algo único.
            </h3>
            <p className="text-gray-400 text-xs sm:text-sm font-light max-w-md mb-8">
              Disponible para producciones fotográficas, dirección de arte y contenido visual para marcas. Escribime directo por WhatsApp.
            </p>
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hola!%20Quiero%20coordinar%20una%20sesión%20fotográfica.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-6 sm:px-8 py-3 text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-gray-200 transition-colors"
            >
              Iniciar chat de WhatsApp
            </a>
          </div>

          <div className="flex flex-col md:items-end justify-center space-y-4 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition-colors flex items-center gap-2">
              <Mail size={16} /> contacto@studioph.com
            </a>
            <p className="text-xs text-gray-500 pt-4">© 2026 Studio PH. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>

    </div>
  );
}