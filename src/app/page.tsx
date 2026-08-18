// app/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface TemplateOption {
  id: string;
  title: string;
  description: string;
  badge: string;
  href: string;
  previewSrc: string;
}

const templates: TemplateOption[] = [
  {
    id: "1",
    title: "Editorial Mosaic (Fit Screen)",
    description: "Diseño clásico de estudio de fotografía con una grilla asimétrica tipo mosaico optimizada para una sola vista de pantalla.",
    badge: "Opción 1",
    href: "/one",
    previewSrc: "/opcion1.png",
  },
  {
    id: "2",
    title: "Horizontal Gallery (Eje X)",
    description: "Galería fotográfica minimalista con desplazamiento horizontal fluido mediante los controles superiores o trackpad.",
    badge: "Opción 2",
    href: "/two",
    previewSrc: "/opcion2.png",
  },
  {
    id: "3",
    title: "Vertical-to-Horizontal GSAP Grid",
    description: "Efecto interactivo avanzado donde el scroll vertical de la página desplaza dinámicamente una grilla modular hacia los costados.",
    badge: "Opción 3",
    href: "/three",
    previewSrc: "/opcion3.png",
  },
];

export default function TemplateSelector() {
  return (
    <div className="min-h-screen bg-[#F9F9F9] text-[#111111] font-sans flex flex-col justify-between p-6 md:p-12">
      
      {/* HEADER */}
      <header className="flex items-center justify-between max-w-7xl mx-auto w-full pb-8 border-b border-gray-200/60">
        <div className="text-sm font-semibold tracking-[0.2em] uppercase">
          studio<span className="text-gray-400">.ph</span> / selector
        </div>
        <span className="text-xs uppercase tracking-widest text-gray-500">
          Seleccionador de Plantillas
        </span>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-7xl mx-auto w-full py-16">
        <div className="mb-12">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400 block mb-3">
            Maquetas disponibles
          </span>
          <h1 className="text-3xl md:text-5xl font-serif font-light">
            Elige el diseño para tu portfolio.
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {templates.map((tpl) => (
            <Link
              key={tpl.id}
              href={tpl.href}
              className="group relative bg-white border border-gray-200/80 rounded-sm overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              {/* PREVIEW IMAGE CONTAINER */}
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden border-b border-gray-100">
                <Image
                  src={tpl.previewSrc}
                  alt={tpl.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute top-3 left-3">
                  <span className="text-[9px] tracking-widest uppercase bg-black/80 backdrop-blur-md text-white px-2.5 py-1 rounded-full">
                    {tpl.badge}
                  </span>
                </div>
              </div>

              {/* TEXT & INFO CONTAINER */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <h3 className="text-lg font-serif font-normal mb-2 group-hover:text-gray-600 transition-colors">
                    {tpl.title}
                  </h3>
                  <p className="text-gray-500 text-xs font-light leading-relaxed mb-6">
                    {tpl.description}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs uppercase tracking-widest font-medium">
                  <span>Ver maqueta</span>
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto w-full pt-8 border-t border-gray-200/60 text-xs text-gray-400 flex justify-between">
        <p>Studio PH Templates — 2026</p>
        <p>Next.js & Tailwind CSS</p>
      </footer>

    </div>
  );
}