"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, PerspectiveCamera, Center } from "@react-three/drei";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo, useState } from "react";
import * as THREE from "three";
import Image from "next/image";

// ======================================================
// 3D MODEL & CAMERA CONTROLS
// ======================================================
function Model({ scrollYProgress }: { scrollYProgress: any }) {
  const { scene } = useGLTF("/model.glb");

  const groupRef = useRef<THREE.Group>(null);
  const shadowRef = useRef<THREE.Mesh>(null);

  // Sombra suave adaptada para fondo gris
  const shadowTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      const gradient = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.15)");
      gradient.addColorStop(0.4, "rgba(255, 255, 255, 0.05)");
      gradient.addColorStop(0.7, "rgba(255, 255, 255, 0.01)");
      gradient.addColorStop(1, "rgba(255, 255, 255, 0)");

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 256, 256);
    }

    return new THREE.CanvasTexture(canvas);
  }, []);

  const finishTimeRef = useRef<number | null>(null);

  useFrame((state) => {
    if (!groupRef.current || !shadowRef.current) return;

    const p = scrollYProgress.get();
    const progress = Math.min(Math.max(0, p / 0.8), 1);

    const startZ = window.innerWidth <= 768 ? 0.2 : 0.8;
    const finalZ = -2.2;
    const currentZ = THREE.MathUtils.lerp(startZ, finalZ, progress);

    groupRef.current.position.set(0, 0, currentZ);

    const scrollRotation = THREE.MathUtils.lerp(0, -1, progress);

    if (progress < 1) {
      finishTimeRef.current = null;
      groupRef.current.rotation.y = scrollRotation;
    } else {
      if (finishTimeRef.current === null) {
        finishTimeRef.current = state.clock.elapsedTime;
      }

      const elapsedTimeSinceFinished =
        state.clock.elapsedTime - finishTimeRef.current;
      const finalScrollRotation = THREE.MathUtils.lerp(0, -1, 1);
      groupRef.current.rotation.y =
        finalScrollRotation + elapsedTimeSinceFinished * 0.4;
    }
  });

  const isMobile = typeof window !== "undefined" && window.innerWidth <= 768;
  const modelScale = isMobile ? 0.52 : 0.7;

  return (
    <>
      <group ref={groupRef}>
        <group
          rotation={[
            THREE.MathUtils.degToRad(-10),
            THREE.MathUtils.degToRad(265),
            THREE.MathUtils.degToRad(0),
          ]}
        >
          <Center>
            <primitive
              object={scene}
              scale={modelScale}
              onUpdate={(self: THREE.Object3D) => {
                self.traverse((child) => {
                  if ((child as THREE.Mesh).isMesh) {
                    const mesh = child as THREE.Mesh;
                    if (mesh.material instanceof THREE.MeshStandardMaterial) {
                      if (
                        mesh.material.color.getHex() === 0x000000 ||
                        mesh.material.color.getHex() < 0x222222
                      ) {
                        mesh.material.color.setHex(0xa0a8b8);
                        mesh.material.metalness = 0.9;
                        mesh.material.roughness = 0.2;
                      }
                    }
                  }
                });
              }}
            />
          </Center>
        </group>
      </group>

      <mesh
        ref={shadowRef}
        position={[0, -1.2, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[1.8, 1.8]} />
        <meshBasicMaterial
          map={shadowTexture}
          transparent={true}
          depthWrite={false}
        />
      </mesh>
    </>
  );
}

// ======================================================
// PORTAFOLIO PRINCIPAL (GRAY GRID MODE)
// ======================================================
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
    title: "Campaña Otoño-Invierno",
    category: "Comercial",
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2070&auto=format&fit=crop",
    alt: "Campaña comercial de moda",
    spanClass: "md:col-span-2",
    heightClass: "h-[450px]",
  },
  {
    id: 2,
    title: "Retrato en Luz Natural",
    category: "Retratos",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2070&auto=format&fit=crop",
    alt: "Retrato expresivo",
    spanClass: "md:col-span-1",
    heightClass: "h-[450px]",
  },
  {
    id: 3,
    title: "Arquitectura Minimalista",
    category: "Comercial",
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=987&auto=format&fit=crop",
    alt: "Espacio arquitectónico limpio",
    spanClass: "md:col-span-1",
    heightClass: "h-[320px]",
  },
  {
    id: 4,
    title: "Texturas de Autor",
    category: "Comercial",
    src: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop",
    alt: "Fotografía de producto elegante",
    spanClass: "md:col-span-1",
    heightClass: "h-[320px]",
  },
  {
    id: 5,
    title: "Backstage Pasarela",
    category: "Eventos",
    src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=2503&auto=format&fit=crop",
    alt: "Cobertura de desfile en vivo",
    spanClass: "md:col-span-1",
    heightClass: "h-[320px]",
  },
  {
    id: 6,
    title: "Festival de Arte Contemporáneo",
    category: "Eventos",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2486&auto=format&fit=crop",
    alt: "Acontecimiento cultural masivo",
    spanClass: "md:col-span-2",
    heightClass: "h-[380px]",
  },
  {
    id: 7,
    title: "Artesanía y Diseño",
    category: "Comercial",
    src: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=800&auto=format&fit=crop",
    alt: "Proceso de trabajo artesanal",
    spanClass: "md:col-span-1",
    heightClass: "h-[380px]",
  },
  {
    id: 8,
    title: "Mirada Interior",
    category: "Retratos",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=2487&auto=format&fit=crop",
    alt: "Retrato conceptual en estudio",
    spanClass: "md:col-span-1",
    heightClass: "h-[320px]",
  },
];

export default function PhotographerPortfolio() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState<string>("Todas");
  const filteredPhotos = (
    activeFilter === "Todas"
      ? portfolioPhotos
      : portfolioPhotos.filter((photo) => photo.category === activeFilter)
  ).slice(0, 7);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const introOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0], {
    clamp: true,
  });
  const introDisplay = useTransform(scrollYProgress, (val) =>
    val > 0.08 ? "none" : "flex"
  );

  const aboutOpacity = useTransform(
    scrollYProgress,
    [0.05, 0.2, 0.9, 1.0],
    [0, 1, 1, 1]
  );
  const aboutY = useTransform(scrollYProgress, [0.05, 0.2], [40, 0]);

  const scrollToSection = (progressFraction: number) => {
    const totalScrollableHeight = window.innerHeight * 3;
    window.scrollTo({
      top: totalScrollableHeight * progressFraction,
      behavior: "smooth",
    });
  };

  return (
    <main className="w-full h-auto bg-[#262626] bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-size-[64px_64px] text-[#ededed] selection:bg-[#444] selection:text-white font-sans">
      {/* 1. SECCIÓN PRINCIPAL CON SCROLL 3D Y GRID TÉCNICO */}
      <div ref={containerRef} className="h-[300vh] relative">
        <header className="fixed top-0 bg-[#262626]/80 backdrop-blur-md border-b border-[#383838] left-0 w-full z-50 flex justify-between items-center px-8 md:px-16 py-6 pointer-events-auto">
          <span
            className="font-mono font-bold text-xs tracking-[0.3em] text-[#ededed] cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            LUCAS VANCE
          </span>
          <nav className="flex items-center gap-6 md:gap-8 text-[11px] uppercase tracking-[0.25em] text-[#aaa]">
            <button
              onClick={() => scrollToSection(0.6)}
              className="hover:text-white transition hidden sm:inline-block"
            >
              ABOUT ME
            </button>
            <a
              href="#registros-visuales"
              className="hover:text-white transition hidden sm:inline-block"
            >
              Archivos Visuales
            </a>
            <a
              href="https://wa.me/34600000000?text=Hola%20Lucas,%20estoy%20interesado%20en%20contratar%20tus%20servicios%20fotográficos."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] text-white px-3 py-1.5 rounded-sm font-semibold hover:opacity-90 transition-all shadow-md"
              title="Contactar por WhatsApp"
            >
              <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              <span className="text-[10px] tracking-widest hidden lg:inline">WhatsApp</span>
            </a>
          </nav>
        </header>

        <motion.div
          style={{ opacity: introOpacity, display: introDisplay }}
          className="fixed inset-0 z-40 bg-[#262626] bg-[linear-gradient(to_right,#333333_1px,transparent_1px),linear-gradient(to_bottom,#333333_1px,transparent_1px)] bg-size-[64px_64px] flex flex-col items-center justify-center text-[#ededed] pointer-events-none"
        >
          <div className="text-center px-4 pointer-events-auto">
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#999] font-mono">
              01. Lucas Vance · 2026
            </span>
            <h1 className="text-5xl md:text-8xl font-serif mt-4 tracking-tight font-light text-white">
              Welcome To My Portfolio
            </h1>
            <p className="text-[10px] text-[#999] font-mono mt-8 uppercase tracking-[0.3em] animate-pulse">
              ↓ Desliza para enfocar la escena
            </p>
          </div>
        </motion.div>

        <div id="about-me" className="sticky top-0 h-screen w-full flex overflow-hidden">
          <div className="w-full h-full relative z-10 flex flex-col justify-center px-6 md:px-12 lg:px-16">
            <motion.div
              style={{ opacity: aboutOpacity, y: aboutY }}
              className="absolute inset-0 flex flex-col justify-center items-center h-full pointer-events-auto"
            >
              <section
                id="about"
                className="py-12 px-4 max-w-7xl mx-auto w-full"
              >
                <h2 className="text-xs uppercase tracking-[0.4em] text-center text-[#aaa] font-mono block mb-12">
                  02. About Me
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center">
                  <div className="text-center lg:text-right space-y-4">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-[#aaa] font-mono block">
                      Enfoque visual
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif font-normal leading-snug text-white">
                      Capturando la esencia a través de la luz y el espacio.
                    </h3>
                    <p className="text-[#ccc] font-light text-xs sm:text-sm leading-relaxed">
                      Soy fotógrafo profesional y director de fotografía con más de 10 años de trayectoria internacional. Mi trabajo explora la relación entre la arquitectura, la moda editorial y la luz natural.
                    </p>
                  </div>

                  <div className="relative w-full max-w-[320px] sm:max-w-90 h-80 sm:h-100 mx-auto rounded-sm overflow-hidden bg-[#222222] border border-[#383838] shadow-2xl">
                    <img
                      src="/imagenSinCamara.jpeg"
                      alt="Fotógrafo en estudio"
                      className="object-cover w-full h-full opacity-90 grayscale hover:grayscale-0 transition-all duration-700"
                    />
                  </div>

                  <div className="text-center lg:text-left space-y-6">
                    <p className="text-[#ccc] font-light text-xs sm:text-sm leading-relaxed">
                      Buscando siempre una estética minimalista, limpia y sofisticada que potencie la identidad de cada marca de lujo o proyecto personal.
                    </p>
                    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-4 text-[11px] font-mono uppercase tracking-widest text-[#ccc]">
                      <span className="border-b border-[#777] pb-1">
                        Editorial
                      </span>
                      <span className="border-b border-[#777] pb-1">
                        Comercial
                      </span>
                      <span className="border-b border-[#777] pb-1">
                        Espacios
                      </span>
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          </div>

          <div className="w-full h-full absolute z-20 block pointer-events-none">
            <Canvas className="w-full h-full">
              <PerspectiveCamera makeDefault position={[0, 0, 1]} />
              <ambientLight intensity={1.2} />
              <directionalLight
                position={[10, 20, 15]}
                intensity={1.8}
                color="#ffffff"
              />
              <directionalLight
                position={[-10, -10, -5]}
                intensity={0.5}
                color="#88aaff"
              />
              <pointLight
                position={[0, 5, 5]}
                intensity={1.0}
                color="#ffffff"
              />
              <Model scrollYProgress={scrollYProgress} />
            </Canvas>
          </div>
        </div>
      </div>

      {/* 2. FICHA TÉCNICA (EXIF) */}
      <div className="bg-[#262626]/90 backdrop-blur-sm border-y border-[#383838] px-6 relative z-10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 py-10 text-center font-mono">
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#aaa] block mb-1">
              Cámara
            </span>
            <span className="text-xs text-[#ddd]">Hasselblad 500C/M</span>
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#aaa] block mb-1">
              Lente
            </span>
            <span className="text-xs text-[#ddd]">Planar 80mm f/2.8</span>
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#aaa] block mb-1">
              Película
            </span>
            <span className="text-xs text-[#ddd]">Kodak Portra 400</span>
          </div>
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#aaa] block mb-1">
              Formato
            </span>
            <span className="text-xs text-[#ddd]">Medio (120mm)</span>
          </div>
        </div>
      </div>

      {/* 3. GALERÍA FILTRABLE DE PROYECTOS */}
      <section
        id="registros-visuales"
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-xs uppercase tracking-[0.4em] text-center text-[#aaa] font-mono block mb-12">
            03. REGISTRO VISUAL
          </h2>
          <h2 className="text-4xl font-serif font-normal">Portafolio</h2>

          <div className="flex flex-wrap justify-center gap-8 mt-6 text-xs uppercase tracking-widest text-gray-500">
            {["Todas", "Comercial", "Eventos", "Retratos"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`pb-1 transition-colors ${
                  activeFilter === category
                    ? "text-[#aaa] font-semibold border-b border-[#aaa]"
                    : "hover:text-[#ddd]"
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
              <div className="absolute bottom-6 left-6 bg-[#262626]/90 backdrop-blur-sm px-6 py-3 text-xs tracking-wider uppercase shadow-sm">
                <p className="font-semibold">{photo.title}</p>
                <span className="text-[10px] text-[#ddd]">
                  {photo.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. PRENSA Y EXPOSICIONES */}
      <section className="py-26 border-t border-[#383838] bg-[#262626]/80 backdrop-blur-sm relative z-10">
        <div className="max-w-4xl mx-auto px-6">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#aaa] font-mono block text-center mb-4">
            04. Reconocimientos
          </span>
          <h2 className="text-3xl font-serif text-center mb-16 text-white">
            Exposiciones & Prensa
          </h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-[#383838] pb-6">
              <div>
                <h3 className="font-serif text-lg text-white">
                  The Silence of Spaces
                </h3>
                <p className="text-xs text-[#bbb] font-mono mt-1">
                  Galería Haus — Milán, Italia
                </p>
              </div>
              <span className="text-xs font-mono tracking-widest text-[#aaa] mt-2 md:mt-0">
                2025
              </span>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-baseline border-b border-[#383838] pb-6">
              <div>
                <h3 className="font-serif text-lg text-white">
                  Architectural Digest Monograph
                </h3>
                <p className="text-xs text-[#bbb] font-mono mt-1">
                  Publicación impresa / Portada e interior
                </p>
              </div>
              <span className="text-xs font-mono tracking-widest text-[#aaa] mt-2 md:mt-0">
                2024
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECCIÓN DE CONTACTO / BOOKING */}
      <section className="py-28 border-t border-[#383838] px-8 relative z-10">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#aaa] font-mono block">
            05. Disponibilidad
          </span>
          <h2 className="text-3xl md:text-5xl font-serif text-white">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-sm text-[#ccc] font-light leading-relaxed max-w-lg mx-auto">
            Disponible para comisiones editoriales, dirección de fotografía y colaboraciones creativas a nivel global.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="mailto:contacto@lucasvance.com"
              className="inline-block border border-[#555] bg-[#303030] px-10 py-5 text-[11px] font-mono uppercase tracking-[0.3em] text-white hover:bg-white hover:text-black transition-all duration-300 shadow-lg"
            >
              Iniciar Conversación
            </a>
            <a
              href="https://wa.me/34600000000?text=Hola%20Lucas,%20estoy%20interesado%20en%20contratar%20tus%20servicios%20fotográficos."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] px-8 py-5 text-[11px] font-mono uppercase tracking-[0.3em] text-white font-bold hover:opacity-90 transition-all duration-300 shadow-lg"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}