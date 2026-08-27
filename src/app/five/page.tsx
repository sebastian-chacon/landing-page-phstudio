'use client'
import React, { useState, useEffect, useRef } from "react";
import { Camera, ExternalLink, Mail, MapPin, Phone, ArrowUpRight, MessageCircle } from "lucide-react";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  category: string;
  description: string[];
  gallery: {
    url: string;
    title: string;
    category: string;
    instagramUrl: string;
    spanClass: string;
  }[];
  year: number;
}

type ViewMode = 'portfolio' | 'project' | 'about' | 'contact' | 'archive';

const PROJECTS: Project[] = [
  {
    id: "urban-geometry",
    title: "URBAN GEOMETRY",
    subtitle: "LONDON, UK",
    category: "ARCHITECTURE",
    heroImage:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1600&auto=format&fit=crop",
    description: [
      "A long-term study on the interplay of light, shadow, and brutalist architecture across the London skyline.",
      "Each frame captures the silent dialogue between geometric concrete structures and the fleeting atmospheric shifts of the British capital."
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1515405295579-ba7b45403062?q=80&w=1200&auto=format&fit=crop",
        title: "Brutalist Lines",
        category: "STRUCTURE",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-2 row-span-2",
      },
      {
        url: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?q=80&w=1200&auto=format&fit=crop",
        title: "Concrete Shadow",
        category: "LIGHT",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-1 row-span-1",
      },
      {
        url: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1200&auto=format&fit=crop",
        title: "Skyline Echo",
        category: "GEOMETRY",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-1 row-span-2",
      },
      {
        url: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop",
        title: "Urban Horizon",
        category: "CITY",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-2 row-span-1",
      },
      {
        url: "https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?q=80&w=1200&auto=format&fit=crop",
        title: "Monolithic Form",
        category: "DESIGN",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-1 row-span-1",
      },
      {
        url: "https://images.unsplash.com/photo-1777643156034-2f25a9040eb7?q=80&w=985&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Brutal Contrast",
        category: "STUDY",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-2 row-span-1",
      }
    ],
    year: 2024,
  },
  {
    id: "boda-eterna",
    title: "BODAS",
    subtitle: "ESTANCIA SANTA TEREZA",
    category: "BODAS",
    heroImage:
      "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1600&auto=format&fit=crop",
    description: [
      "Una celebración íntima bajo las estrellas donde cada detalle reflejó la complicidad y el amor de una noche irrepetible.",
      "Desde los preparativos llenos de emoción hasta la fiesta en la pista, capturamos miradas, risas y abrazos genuinos."
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=1200&auto=format&fit=crop",
        title: "El Primer Vistazo",
        category: "PREVIA",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-2 row-span-2",
      },
      {
        url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=1200&auto=format&fit=crop",
        title: "Complicidad",
        category: "CEREMONIA",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-1 row-span-1",
      },
      {
        url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=1200&auto=format&fit=crop",
        title: "Brindis de Honor",
        category: "FESTEJO",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-1 row-span-2",
      },
      {
        url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?q=80&w=1200&auto=format&fit=crop",
        title: "Lluvia de Arroz",
        category: "EMOCIÓN",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-2 row-span-1",
      },
      {
        url: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?q=80&w=1200&auto=format&fit=crop",
        title: "El Vals",
        category: "BAILE",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-1 row-span-1",
      },
      {
        url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?q=80&w=1200&auto=format&fit=crop",
        title: "Atardecer Juntos",
        category: "EXTERIORES",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-2 row-span-1",
      }
    ],
    year: 2025,
  },
  {
    id: "futbol-sabados",
    title: "SABADOS DE FUTBOL",
    subtitle: "TORNEO DE LOS SABADOS",
    category: "FÚTBOL",
    heroImage:
      "https://images.unsplash.com/photo-1598881034666-6d3443d4b1bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: [
      "La pasión del potrero llevada al límite en una final vibrante donde se disputó cada pelota como la última.",
      "Gotas de sudor, gambetas al borde de la raya y el festejo desaforado de una hinchada que no paró de alentar."
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1641159009736-8a5fd4e52fef?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Final Copa",
        category: "PARTIDOS",
        instagramUrl: "https://www.instagram.com/p/DaBB-5Uu0jc/",
        spanClass: "col-span-2 row-span-2",
      },
      {
        url: "https://images.unsplash.com/photo-1741886458879-e063b7855cca?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "La Previa",
        category: "VESTUARIO",
        instagramUrl: "https://www.instagram.com/p/DN4JQZGEcuv/",
        spanClass: "col-span-1 row-span-1",
      },
      {
        url: "https://images.unsplash.com/photo-1770484219470-9079ccb3d91a?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Festejo de Gol",
        category: "EMOCIÓN",
        instagramUrl: "https://www.instagram.com/p/DYAFkZZloJK/?img_index=9",
        spanClass: "col-span-1 row-span-2",
      },
      {
        url: "https://images.unsplash.com/photo-1655587044257-023d0b32cd9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "La Hinchada",
        category: "COMUNIDAD",
        instagramUrl: "https://www.instagram.com/p/DbYsmVIDrOb/?img_index=19",
        spanClass: "col-span-2 row-span-1",
      },
      {
        url: "https://images.unsplash.com/photo-1624280157150-4d1ed8632989?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "A Todo Ritmo",
        category: "ACCIÓN",
        instagramUrl: "https://www.instagram.com/p/DWWmHtNuZyu/",
        spanClass: "col-span-1 row-span-1",
      },
      {
        url: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Tarde de Potrero",
        category: "BARRIO",
        instagramUrl: "https://www.instagram.com/p/DPzi_oPkbgd/?img_index=1",
        spanClass: "col-span-2 row-span-1",
      },
      {
        url: "https://images.unsplash.com/photo-1779760580139-a6220b77a706?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Predio Central",
        category: "SEDE",
        instagramUrl: "https://www.instagram.com/p/DXuNK6WDlHb/",
        spanClass: "col-span-2 row-span-1",
      },
      {
        url: "https://images.unsplash.com/photo-1637203723757-a9b26181e1ad?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "La Copa",
        category: "PREMIOS",
        instagramUrl: "https://www.instagram.com/p/DJ7qmPTRCj2/",
        spanClass: "col-span-2 row-span-1",
      },
      {
        url: "https://images.unsplash.com/photo-1535506197904-e5c09c0e5619?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Torneo Femenino",
        category: "FEMENINO",
        instagramUrl: "https://www.instagram.com/p/DbbZto5Oyq_/",
        spanClass: "col-span-2 row-span-1",
      }
    ],
    year: 2026,
  },
  {
    id: "noche-de-combate",
    title: "NOCHES DE COMBATES",
    subtitle: "CAMPEONATO DE ARTES MARCIALES",
    category: "PELEA",
    heroImage:
      "https://images.unsplash.com/photo-1564097147829-44f8c74a8549?q=80&w=2121&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: [
      "Adrenalina pura bajo las luces del ring, capturando la tensión, el respeto y la explosividad de cada enfrentamiento.",
      "El esfuerzo de meses de entrenamiento resumido en asaltos intensos donde la concentración y el coraje definen al ganador."
    ],
    gallery: [
      {
        url: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?q=80&w=1200&auto=format&fit=crop",
        title: "Cruzado Letal",
        category: "ACCIÓN",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-2 row-span-2",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1721755999925-8b59f881c6fc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Esquina y Estrategia",
        category: "PREPARACIÓN",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-1 row-span-1",
      },
      {
        url: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=1200&auto=format&fit=crop",
        title: "En la Lona",
        category: "TENSIÓN",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-1 row-span-2",
      },
      {
        url: "https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?q=80&w=1200&auto=format&fit=crop",
        title: "Victoria en el Ring",
        category: "TRIUNFO",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-2 row-span-1",
      },
      {
        url: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=1200&auto=format&fit=crop",
        title: "Respeto Mutuo",
        category: "CAMUFLAJE",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-1 row-span-1",
      },
      {
        url: "https://plus.unsplash.com/premium_photo-1681400614910-2e80fa375521?q=80&w=2177&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        title: "Guantes de Acero",
        category: "DETALLE",
        instagramUrl: "https://instagram.com",
        spanClass: "col-span-2 row-span-1",
      }
    ],
    year: 2026,
  },
];

export default function PhotographerPortfolio() {
  const [viewMode, setViewMode] = useState<ViewMode>('portfolio');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOverHeader, setIsOverHeader] = useState(false);
  
  // Estados para el formulario de WhatsApp
  const [clientName, setClientName] = useState('');
  const [clientMessage, setClientMessage] = useState('');
  
  const isScrollingRef = useRef(false);
  const enterButtonRef = useRef<HTMLButtonElement>(null);
  const mainContainerRef = useRef<HTMLElement>(null);

  const mousePos = useRef({ x: 0, y: 0 });
  const delayedPos = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  // Control del scroll principal (Home)
  useEffect(() => {
    if (viewMode !== 'portfolio') return;

    const handleWheel = (e: WheelEvent) => {
      if (isScrollingRef.current) return;
      const delta = Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      
      if (delta > 30) {
        if (currentIndex < PROJECTS.length - 1) {
          isScrollingRef.current = true;
          setCurrentIndex((prev) => prev + 1);
          setTimeout(() => { isScrollingRef.current = false; }, 800);
        }
      } else if (delta < -30) {
        if (currentIndex > 0) {
          isScrollingRef.current = true;
          setCurrentIndex((prev) => prev - 1);
          setTimeout(() => { isScrollingRef.current = false; }, 800);
        }
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [currentIndex, viewMode]);

  // Manejo de la posición de la página al cambiar de vista
  useEffect(() => {
    if (mainContainerRef.current) {
      mainContainerRef.current.scrollTop = 0;
    }
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [viewMode, selectedProject]);

  // Seguidor del cursor [ ENTER ] solo activo en portfolio y fuera del header
  useEffect(() => {
    if (viewMode !== 'portfolio' || isOverHeader) return;

    const handleMouseMove = (event: MouseEvent) => {
      mousePos.current = { x: event.clientX, y: event.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    const updatePosition = () => {
      const ease = 0.15;
      delayedPos.current.x += (mousePos.current.x - delayedPos.current.x) * ease;
      delayedPos.current.y += (mousePos.current.y - delayedPos.current.y) * ease;

      if (enterButtonRef.current) {
        enterButtonRef.current.style.left = `${delayedPos.current.x}px`;
        enterButtonRef.current.style.top = `${delayedPos.current.y}px`;
      }

      animationFrameId.current = requestAnimationFrame(updatePosition);
    };

    animationFrameId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [viewMode, isOverHeader]);

  const activeProject = PROJECTS[currentIndex];

  const handleNavigate = (mode: ViewMode, project: Project | null = null) => {
    setSelectedProject(project);
    setViewMode(mode);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "5491155550000"; // Reemplaza con tu número real de WhatsApp
    const text = `Hola, mi nombre es *${clientName}*. ${clientMessage}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank');
  };

  return (
    <div className="bg-black text-white h-screen w-screen overflow-hidden font-serif selection:bg-[#C0E218] selection:text-black relative">
      <header 
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 sm:px-8 py-6 pointer-events-auto bg-linear-to-b from-black/90 via-black/50 to-transparent"
        onMouseEnter={() => setIsOverHeader(true)}
        onMouseLeave={() => setIsOverHeader(false)}
      >
        <span className="font-black tracking-widest text-xs sm:text-sm cursor-pointer" onClick={() => handleNavigate('portfolio')}>
          P. H. <span className="hidden sm:inline">| STUDIO</span>
        </span>
        <nav className="flex gap-4 sm:gap-8 text-[10px] sm:text-xs tracking-widest text-neutral-300">
          <button onClick={() => handleNavigate('portfolio')} className={`hover:text-white transition-colors cursor-pointer ${viewMode === 'portfolio' ? 'text-[#C0E218] font-bold' : ''}`}>PORTFOLIO</button>
          <button onClick={() => handleNavigate('archive')} className={`hover:text-white transition-colors cursor-pointer ${viewMode === 'archive' ? 'text-[#C0E218] font-bold' : ''}`}>ARCHIVE</button>
          <button onClick={() => handleNavigate('about')} className={`hover:text-white transition-colors cursor-pointer ${viewMode === 'about' ? 'text-[#C0E218] font-bold' : ''}`}>ABOUT</button>
          <button onClick={() => handleNavigate('contact')} className={`hover:text-white transition-colors cursor-pointer ${viewMode === 'contact' ? 'text-[#C0E218] font-bold' : ''}`}>CONTACT</button>
        </nav>
      </header>

      {/* VISTA DE PROYECTO INDIVIDUAL */}
      {viewMode === 'project' && selectedProject ? (
        <main ref={mainContainerRef} className="h-full w-full overflow-y-auto pt-24 sm:pt-32 pb-20 animate-fade-in bg-[#110e17]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-16">
            <button
              onClick={() => handleNavigate('portfolio')}
              className="mb-8 sm:mb-12 text-xs tracking-widest text-neutral-400 hover:text-white transition-colors flex items-center gap-2 font-sans cursor-pointer"
            >
              ← BACK TO PORTFOLIO
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div>
                <span className="text-[#C0E218] font-bold uppercase tracking-widest text-sm flex items-center gap-2 mb-2">
                  <Camera size={18} /> {selectedProject.category} | {selectedProject.year}
                </span>
                <h1 className="text-4xl sm:text-6xl font-black uppercase tracking-tight mb-6 font-sans">
                  {selectedProject.title}
                </h1>
                <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed max-w-prose font-light">
                  {selectedProject.description.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="relative h-75 sm:h-112.5 overflow-hidden rounded-lg shadow-2xl border border-white/10">
                <img
                  src={selectedProject.heroImage}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <section id="galeria-evento" className="w-full overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-8 mb-12">
              <span className="text-[#C0E218] font-bold uppercase tracking-widest text-sm flex items-center gap-2">
                <Camera size={18} /> Archivo Visual del Evento
              </span>
              <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mt-2">
                GALERÍA <span className="text-[#C0E218]">{selectedProject.title}</span>
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm mt-2 uppercase tracking-widest">
                Momentos épicos de este evento. Haz clic para ver el álbum completo
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-6 auto-rows-60 gap-0 w-full overflow-hidden border-y-2 border-white/10 shadow-2xl">
              {selectedProject.gallery.map((item, index) => (
                <a
                  key={index}
                  href={item.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${item.spanClass} relative group overflow-hidden block border border-white/5`}
                >
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#110e17] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                    <div>
                      <span className="text-[#C0E218] text-[10px] font-black uppercase tracking-widest">
                        {item.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-black uppercase text-white">
                        {item.title}
                      </h3>
                    </div>
                    <div className="bg-[#C0E218] text-black p-2.5 rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                      <ExternalLink size={16} />
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>
        </main>
      ) : viewMode === 'archive' ? (
        /* VISTA ARCHIVE: TODOS LOS PROYECTOS */
        <main ref={mainContainerRef} className="h-full w-full overflow-y-auto pt-28 sm:pt-36 px-6 sm:px-12 pb-24 bg-[#0a080f] animate-fade-in">
          <div className="max-w-7xl mx-auto">
            <span className="text-[#C0E218] text-xs uppercase tracking-widest font-sans font-bold block mb-3">
              // REPOSITORIO GLOBAL
            </span>
            <h1 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter mb-4 font-sans">
              ALL <span className="text-neutral-500">PROJECTS</span>
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mb-16 font-light">
              Explora el archivo completo de coberturas, torneos, arquitectura y eventos especiales realizados por el estudio.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
              {PROJECTS.map((proj) => (
                <div 
                  key={proj.id}
                  onClick={() => handleNavigate('project', proj)}
                  className="group cursor-pointer bg-white/2 border border-white/10 rounded-lg overflow-hidden flex flex-col hover:border-[#C0E218]/50 transition-all duration-500 shadow-xl"
                >
                  <div className="relative h-65 sm:h-85 overflow-hidden">
                    <img
                      src={proj.heroImage}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent" />
                    <span className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded text-[10px] font-sans font-bold tracking-widest text-[#C0E218] border border-white/10">
                      {proj.category} — {proj.year}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col justify-between grow">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight mb-3 font-sans group-hover:text-[#C0E218] transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-neutral-400 text-xs sm:text-sm font-light line-clamp-2">
                        {proj.description[0]}
                      </p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-xs tracking-widest uppercase font-sans">
                      <span className="text-neutral-400">{proj.gallery.length} FOTOS EN ARCHIVO</span>
                      <span className="text-[#C0E218] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                        VER PROYECTO →
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      ) : viewMode === 'about' ? (
        /* VISTA ABOUT ME */
        <main ref={mainContainerRef} className="h-full w-full overflow-y-auto pt-28 sm:pt-36 px-6 sm:px-16 pb-24 bg-[#0a080f] animate-fade-in">
          <div className="max-w-6xl mx-auto">
            <span className="text-[#C0E218] text-xs uppercase tracking-widest font-sans font-bold block mb-3">
              // EL ESTUDIO TRAS LA LENTE
            </span>
            <h1 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter mb-12 font-sans">
              ABOUT <span className="text-neutral-500">ME</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-5 relative h-100 sm:h-125 overflow-hidden rounded-md border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop"
                  alt="Fotógrafo Profesional"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              <div className="lg:col-span-7 space-y-6 text-neutral-300 font-light leading-relaxed text-sm sm:text-base">
                <p className="text-lg font-normal text-white">
                  Hola, soy <span className="text-[#C0E218]">P.H. Studio</span>, fotógrafo documental y comercial especializado en capturar la intensidad del movimiento, la arquitectura brutalista y la atmósfera única de los grandes eventos.
                </p>
                <p>
                  Mi enfoque combina la estética cinematográfica con la inmediatez del fotoperiodismo. No busco simplemente congelar una imagen, sino transmitir la tensión, la euforia y la geometría visual de cada espacio o disciplina que habito.
                </p>
                <p>
                  Equipado con tecnología de punta y una mirada obsesionada con el detalle y el claroscuro, trabajo junto a marcas, torneos, productoras y particulares que buscan llevar su identidad visual a un nivel superior.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10 font-sans">
                  <div>
                    <span className="block text-2xl font-black text-[#C0E218]">8+</span>
                    <span className="text-xs tracking-widest text-neutral-400">AÑOS DE TRAYECTORIA</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-[#C0E218]">250+</span>
                    <span className="text-xs tracking-widest text-neutral-400">EVENTOS CUBIERTOS</span>
                  </div>
                  <div>
                    <span className="block text-2xl font-black text-[#C0E218]">GLOBAL</span>
                    <span className="text-xs tracking-widest text-neutral-400">COBERTURAS</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : viewMode === 'contact' ? (
        /* VISTA CONTACTO CON WHATSAPP Y MAPA */
        <main ref={mainContainerRef} className="h-full w-full overflow-y-auto pt-28 sm:pt-36 px-6 sm:px-16 pb-24 bg-[#0a080f] animate-fade-in">
          <div className="max-w-5xl mx-auto">
            <span className="text-[#C0E218] text-xs uppercase tracking-widest font-sans font-bold block mb-3">
              // TRABAJEMOS JUNTOS
            </span>
            <h1 className="text-4xl sm:text-7xl font-black uppercase tracking-tighter mb-6 font-sans">
              CONTACT <span className="text-neutral-500">US</span>
            </h1>
            <p className="text-neutral-400 text-sm sm:text-base max-w-xl mb-16 font-light">
              ¿Tenés un proyecto en mente, un torneo por disputarse o querés cotizar una cobertura especial? Escribinos por WhatsApp de forma directa o visitanos en el estudio.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-[#C0E218]">
                    <Phone size={22} />
                  </div>
                  <div>
                    <span className="text-xs tracking-widest text-neutral-400 block font-sans">TELÉFONO / WHATSAPP</span>
                    <a href="https://wa.me/5491155550000" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-[#C0E218] transition-colors">
                      +54 (911) 5555-0000
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-[#C0E218]">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <span className="text-xs tracking-widest text-neutral-400 block font-sans">ESTUDIO BASE</span>
                    <p className="text-lg font-bold text-white">Buenos Aires, Argentina</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-sm text-[#C0E218]">
                    {/* <Instagram size={22} /> */}
                  </div>
                  <div>
                    <span className="text-xs tracking-widest text-neutral-400 block font-sans">REDES SOCIALES</span>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-lg font-bold hover:text-[#C0E218] transition-colors flex items-center gap-1">
                      @ph.studio <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Formulario que abre WhatsApp directamente */}
              <form onSubmit={handleWhatsAppSubmit} className="space-y-6 bg-white/2 p-8 border border-white/10 rounded-md">
                <div>
                  <label className="block text-xs uppercase tracking-widest font-sans text-neutral-400 mb-2">Tu Nombre / Empresa</label>
                  <input 
                    type="text" 
                    required 
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Ej. Juan Pérez" 
                    className="w-full bg-black/60 border border-white/20 p-3.5 text-white text-sm focus:border-[#C0E218] focus:outline-none rounded-sm transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest font-sans text-neutral-400 mb-2">Mensaje o Consulta</label>
                  <textarea 
                    rows={4} 
                    required 
                    value={clientMessage}
                    onChange={(e) => setClientMessage(e.target.value)}
                    placeholder="Contanos los detalles de tu evento o proyecto..." 
                    className="w-full bg-black/60 border border-white/20 p-3.5 text-white text-sm focus:border-[#C0E218] focus:outline-none rounded-sm transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-4 bg-[#25D366] text-black font-sans font-bold uppercase tracking-widest text-xs hover:bg-[#20ba5a] transition-colors cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle size={18} /> ENVIAR MENSAJE POR WHATSAPP →
                </button>
              </form>
            </div>

            {/* Mapa de Ubicación */}
            <div className="w-full space-y-4 pt-8 border-t border-white/10">
              <span className="text-xs uppercase tracking-widest font-sans font-bold text-[#C0E218] block">
                // UBICACIÓN DEL ESTUDIO
              </span>
              <div className="w-full h-87.5 sm:h-100 rounded-md overflow-hidden border border-white/10 shadow-2xl relative filter grayscale invert contrast-125">
                <iframe
                  title="Ubicación del Estudio"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168882094363!2d-58.38375908477038!3d-34.60373876500595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb6%3A0x11bead4e634e0588!2sObelisco!5e0!3m2!1ses!2sar!4v1650000000000!5m2!1ses!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </main>
      ) : (
        /* VISTA PORTFOLIO (HOME) */
        <main 
          className="relative h-screen w-screen overflow-hidden flex items-center cursor-pointer"
          onClick={() => handleNavigate('project', activeProject)}
          onMouseEnter={() => setIsOverHeader(false)}
        >
          <div className="absolute inset-0 z-0">
            {PROJECTS.map((proj, idx) => (
              <img
                key={proj.id}
                src={proj.heroImage}
                alt={proj.title}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  idx === currentIndex ? "opacity-80 scale-105" : "opacity-0 scale-100"
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-linear-to-t from-black via-black/40 to-black/60" />
          </div>

          <button
            ref={enterButtonRef}
            onClick={(e) => {
              e.stopPropagation();
              handleNavigate('project', activeProject);
            }}
            className="fixed z-60 hidden md:flex cursor-pointer items-center justify-center text-xs font-sans tracking-widest hover:scale-110 transition-transform shadow-2xl pointer-events-auto"
            style={{
              transform: 'translate(-50%, -50%)',
              willChange: 'left, top',
            }}
          >
            [ ENTER ]
          </button>

          <section className="relative z-10 w-full h-full flex flex-col justify-center px-6 sm:px-12 md:px-24 pointer-events-none">
            <div className="max-w-6xl transition-all duration-1000">
              <span className="text-xs sm:text-sm tracking-widest text-[#C0E218] block mb-3 sm:mb-4 font-bold italic">
                [ {activeProject.category} | {activeProject.year} ]
              </span>
              <h1 className="text-5xl sm:text-7xl md:text-9xl font-extrabold tracking-tighter mb-4 sm:mb-6 font-sans">
                {activeProject.title}
              </h1>
              <p className="text-neutral-300 text-sm sm:text-lg max-w-xl font-light line-clamp-2 sm:line-clamp-none">
                {activeProject.description[0]}
              </p>
              
              <span className="inline-block mt-6 text-xs tracking-widest text-white border-b border-white pb-1 md:hidden">
                TAP TO EXPLORE →
              </span>
            </div>

            <div className="absolute bottom-12 right-12 text-right hidden lg:block pointer-events-none">
              <div className="text-3xl xl:text-4xl font-black font-sans space-y-2">
                {PROJECTS.map((proj, idx) => (
                  <p
                    key={proj.id}
                    className={`transition-all duration-500 ${
                      idx === currentIndex ? "text-white scale-105 origin-right" : "text-neutral-700"
                    }`}
                  >
                    {proj.title}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}