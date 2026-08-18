// app/page.tsx
"use client";

import Image from "next/image";
import { ArrowUpRight, Mail } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  src: string;
  span: string;
}

const galleryColumns: GalleryItem[][] = [
  [
    {
      id: 1,
      title: "Editorial Retrato",
      category: "Moda",
      src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 row-span-3",
    },
    {
      id: 2,
      title: "Orange Car Scene",
      category: "Comercial",
      src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 row-span-2",
    },
    {
      id: 3,
      title: "Detalle",
      category: "Editorial",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 row-span-1",
    },
  ],

  [
    {
      id: 4,
      title: "Minimal Interior",
      category: "Espacios",
      src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-2 row-span-2",
    },
    {
      id: 5,
      title: "Abstract Art",
      category: "Conceptual",
      src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 row-span-1",
    },
    {
      id: 6,
      title: "Abstract Art",
      category: "Conceptual",
      src: "https://images.unsplash.com/photo-1532282145199-0f4d84f05246?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWQlMjBkZSUyMGZvdG9ncmFmaWF8ZW58MHx8MHx8fDI%3D?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 row-span-1",
    },
  ],

  [
    {
      id: 7,
      title: "Warm Desert Tones",
      category: "Estudio",
      src: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 row-span-1",
    },
    {
      id: 8,
      title: "Group Motion",
      category: "Editorial",
      src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 row-span-2",
    },
    {
      id: 9,
      title: "Studio Light",
      category: "Estudio",
      src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 row-span-1",
    },
    {
      id: 10,
      title: "Abstract Art",
      category: "Conceptual",
      src: "https://images.unsplash.com/photo-1532282145199-0f4d84f05246?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGhlYWQlMjBkZSUyMGZvdG9ncmFmaWF8ZW58MHx8MHx8fDI%3D?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-2 row-span-2",
    },
  ],

  [
    {
      id: 11,
      title: "Living Room Setup",
      category: "Espacios",
      src: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?q=80&w=1200&auto=format&fit=crop",
      span: "col-span-2 row-span-1",
    },
    {
      id: 12,
      title: "Living Room Setup",
      category: "Espacios",
      src: "https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhZCUyMGRlJTIwZm90b2dyYWZpYXxlbnwwfHwwfHx8Mg%3D%3D",
      span: "col-span-1 row-span-2",
    },
    {
      id: 13,
      title: "Neon Glow",
      category: "Experimental",
      src: "https://images.unsplash.com/photo-1623577284502-d65cdc6ba0b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aGVhZCUyMGRlJTIwZm90b2dyYWZpYXxlbnwwfHwwfHx8Mg%3D%3D",
      span: "col-span-1 row-span-2",
    },
  ],

  [
    {
      id: 14,
      title: "Surreal Llama",
      category: "Fine Art",
      src: "https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 row-span-3",
    },
    {
      id: 15,
      title: "Cactus Detail",
      category: "Naturaleza",
      src: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 row-span-1",
    },
    {
      id: 16,
      title: "Natural Texture",
      category: "Naturaleza",
      src: "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 row-span-1",
    },
    {
      id: 17,
      title: "Cactus Detail",
      category: "Naturaleza",
      src: "https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?q=80&w=1000&auto=format&fit=crop",
      span: "col-span-1 row-span-1",
    },
  ],
];

export default function HorizontalGridScrollPortfolio() {
  const whatsappNumber = "5491100000000";
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      const trigger = triggerRef.current;

      if (!section || !trigger) return;

      const getScrollAmount = () => {
        return section.scrollWidth - window.innerWidth;
      };

      const tween = gsap.to(section, {
        x: () => -getScrollAmount(),
        ease: "none",
        scrollTrigger: {
          trigger,
          pin: true,
          scrub: 1.5,
          start: "top top",
          end: () => `+=${getScrollAmount()}`,
          invalidateOnRefresh: true,
          anticipatePin: 1,
        },
      });

      return () => {
        tween.kill();
      };
    }, triggerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[#F9F9F9] text-[#111111] font-sans selection:bg-black selection:text-white overflow-x-hidden">
      {/* HEADER FIJO */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#F9F9F9]/90 backdrop-blur-md border-b border-gray-200/60 px-6 md:px-12 py-5 flex items-center justify-between">
        <div className="text-sm font-semibold tracking-[0.2em] uppercase">
          studio<span className="text-gray-400">.ph</span>
        </div>

        <nav className="hidden md:flex items-center space-x-8 text-xs tracking-[0.15em] uppercase font-medium text-gray-600">
          <a href="#services" className="hover:text-black transition-colors">
            Services
          </a>
          <a href="#about" className="hover:text-black transition-colors">
            Company
          </a>
          <a href="#portfolio" className="hover:text-black transition-colors">
            Projects
          </a>
        </nav>

        <div>
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hola!%20Me%20interesa%20contratar%20tus%20servicios.`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white px-5 py-2.5 text-xs uppercase tracking-widest font-medium rounded-full hover:bg-800 transition-all flex items-center gap-2 shadow-sm"
          >
            Get in touch
          </a>
        </div>
      </header>

      {/* SECCIÓN HORIZONTAL PINEADA CON GSAP */}
      <div
        id="portfolio"
        ref={triggerRef}
        className="overflow-hidden h-screen w-screen bg-[#F9F9F9] flex items-center">
        <div
          ref={sectionRef}
          className="flex gap-8 px-8 md:px-20 h-[75vh] items-center flex-nowrap w-max will-change-transform">
          {galleryColumns.map((column, colIndex) => (
            <div
              key={colIndex}
              className="grid grid-cols-2 grid-rows-3 gap-4 w-[520px] md:w-[600px] h-[620px] shrink-0">
              {column.map((item) => (
                <a
                  key={item.id}
                  href={`https://wa.me/${whatsappNumber}?text=Hola!%20Me%20gustó%20mucho%20la%20foto%20"${encodeURIComponent(
                    item.title
                  )}".`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative overflow-hidden bg-gray-200 rounded-sm shadow-sm ${item.span}`}
                >
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"/>

                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] tracking-widest uppercase bg-white/20 backdrop-blur-md px-2 py-0.5 rounded-full">
                        {item.category}
                      </span>
                      <ArrowUpRight
                        size={16}
                        className="transform -translate-y-1 translate-x-1 group-hover:translate-y-0 group-hover:translate-x-0 transition-transform"
                      />
                    </div>
                    <div>
                      <h3 className="text-sm md:text-base font-light tracking-tight">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* SECCIÓN SOBRE MÍ / ABOUT */}
      <section
        id="about"
        className="py-28 px-6 md:px-12 max-w-5xl mx-auto border-t border-gray-200/60 bg-[#F9F9F9] relative z-10"
      >
        <h2 className="text-2xl uppercase text-center tracking-[0.3em] text-gray-400 mb-12">
          About Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-sm overflow-hidden bg-gray-200">
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
            <h3 className="text-3xl md:text-4xl font-serif font-normal mb-6 leading-snug">
              Capturando la esencia a través de la luz y el espacio.
            </h3>
            <p className="text-gray-600 font-light text-sm leading-relaxed mb-6">
              Soy director de fotografía y fotógrafo comercial. Mi trabajo
              explora la relación entre la arquitectura, la moda y la luz
              natural con un formato interactivo y moderno.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="services"
        className="bg-[#111111] text-white py-16 px-6 md:px-12 relative z-10"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-400 block mb-1">
              ¿Tenés un proyecto en mente?
            </span>
            <p className="text-xl font-serif font-light">
              Hablemos y creemos algo único.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={`https://wa.me/${whatsappNumber}?text=Hola!%20Quiero%20coordinar%20una%20sesión.`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black px-6 py-3 text-xs uppercase tracking-widest font-semibold rounded-full hover:bg-gray-200 transition-colors"
            >
              WhatsApp
            </a>
            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
