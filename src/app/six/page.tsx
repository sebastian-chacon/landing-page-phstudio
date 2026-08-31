import {
  Camera,
  ArrowRight,
  Play,
  Check,
  Star,
  Aperture,
  BookOpen,
  UsersRound,
} from "lucide-react";

const LandingPage = () => {
  const courses = [
    {
      id: 1,
      title: "Fundamentos de Fotografía",
      description:
        "Domina la exposición, la composición y los ajustes manuales de la cámara para capturar imágenes impresionantes en cualquier condición de luz.",
      price: "$149",
      level: "Principiante",
      image:
        "https://images.unsplash.com/photo-1516961642265-531546e84af2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Curso base",
      badge: "MÁS VENDIDO",
    },
    {
      id: 2,
      title: "Masterclass de Retrato e Iluminación",
      description:
        "Aprende a manipular la luz natural y de estudio para crear retratos profesionales y cautivadores.",
      price: "$199",
      level: "Avanzado",
      image:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Fotografía de retrato",
    },
    {
      id: 3,
      title: "Edición y Retoque en Lightroom y Photoshop",
      description:
        "Perfecciona tu flujo de trabajo de posproducción y logra acabados cinematográficos y limpios en cada una de tus fotos.",
      price: "$179",
      level: "Avanzado",
      image:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      alt: "Edición digital",
    },
    {
      id: 4,
      title: "Fotografía Comercial y de Producto",
      description:
        "Descubre cómo montar un estudio profesional, trabajar con marcas exigentes y comercializar tu trabajo fotográfico.",
      price: "$229",
      level: "Experto",
      image:
        "https://plus.unsplash.com/premium_photo-1726805082424-2c38d1697f5b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Fotografía comercial",
    },
  ];
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-gray-200 font-sans selection:bg-[#d4af37] selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full items-center backdrop-blur-sm bg-black z-50">
        <div className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto border-b border-gray-800/50">
          <div className="flex items-center gap-2">
            <Aperture className="text-[#d4af37]" />
            <span className="text-xl font-bold tracking-widest text-white">
              PH<span className="text-[#d4af37]">STUDIO</span>
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm uppercase tracking-wider font-semibold">
            <a href="#" className="hover:text-[#d4af37] transition-colors">
              Inicio
            </a>
            <a href="#curso" className="hover:text-[#d4af37] transition-colors">
              Cursos
            </a>
            <a href="#instructores" className="hover:text-[#d4af37] transition-colors">
              Instructores
            </a>
            <a href="#contacto" className="hover:text-[#d4af37] transition-colors">
              Contacto
            </a>
          </div>
          <button className="bg-[#d4af37] text-black px-6 py-2 rounded-sm font-bold text-sm uppercase tracking-wider hover:bg-[#b5952f] transition-colors">
            Inscríbete
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative w-full h-auto ">
        <div className="px-8 py-32 max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 z-10">
            <div className="text-[#d4af37] uppercase tracking-widest text-xs font-bold mb-4 flex items-center gap-2">
              <div className="h-px w-10 bg-[#d4af37]"></div>Tu carrera en la
              fotografía empieza aquí
            </div>
            <h1 className="text-6xl md:text-8xl font-serif text-white leading-none mb-6">
              Captura.
              <br />
              <span className="italic text-[#d4af37]">Retoca.</span>
              <br />
              Publica.
            </h1>
            <p className="text-gray-400 mb-8 max-w-md text-lg">
              Transforma tu pasión en una profesión con nuestros cursos
              avanzados de fotografía, guiados por expertos de la industria.
            </p>
            <div className="flex gap-4">
              <button className="bg-[#d4af37] text-black px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:bg-[#b5952f] transition-colors">
                Empezar
              </button>
              <button className="border border-gray-600 text-white px-8 py-3 rounded-sm font-bold uppercase tracking-wider hover:border-white transition-colors flex items-center gap-2">
                <Play size={16} /> Ver Video
              </button>
            </div>

            <div className="flex gap-12 mt-16 pt-8 border-t border-gray-800">
              <div>
                <h4 className="text-3xl font-bold text-[#d4af37] mb-1">
                  5.000+
                </h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Estudiantes
                </p>
              </div>
              <div>
                <h4 className="text-3xl font-bold text-[#d4af37] mb-1">
                  4.9/5
                </h4>
                <p className="text-sm text-gray-500 uppercase tracking-wider">
                  Reseñas
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Background Overlay Image Placeholder */}
        <div
          className="absolute right-0 top-0 w-full md:w-2/3 h-full opacity-30 z-0 pointer-events-none"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            maskImage: "linear-gradient(to right, transparent, black)",
          }}
        ></div>
      </header>

      {/* Courses Section */}
      <section id="curso" className="w-full h-auto scroll-mt-5 ">
        <div className="px-8 py-24 max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <div className="text-[#d4af37] uppercase tracking-widest text-xs font-bold mb-2 flex gap-2 items-center">
                <div className="h-px10 bg-[#d4af37]"></div>Aprende de los
                mejores
              </div>
              <h2 className="text-4xl font-serif text-white">
                Nuestros Cursos
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-l-[0.5px] border-gray-800/50">
            {courses.map((course) => (
              <div
                key={course.id}
                className="bg-[#141416] overflow-hidden group cursor-pointer border-r-[0.5px] border-gray-800/50 hover:border-gray-700 transition-colors"
              >
                <div className="h-64 overflow-hidden relative">
                  {course.badge && (
                    <span className="absolute top-4 left-4 bg-[#d4af37] text-black text-xs font-bold px-2 py-1 rounded z-10">
                      {course.badge}
                    </span>
                  )}
                  {course.level && (
                    <span className="absolute top-4 right-4 bg-black backdrop-blur-2xl text-white text-xs font-bold px-2 py-1 rounded z-10">
                      {course.level}
                    </span>
                  )}
                  <img
                    src={course.image}
                    alt={course.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-6 line-clamp-2 border-b-[0.5px] border-gray-800/50 pb-6">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span className="text-[#d4af37] font-bold text-xl">
                      {course.price}
                    </span>
                    <span className="text-white border-[0.5px] px-5  py-3 border-gray-800/50 flex items-center gap-2 text-sm uppercase tracking-widest group-hover:text-white group-hover:bg-[#d4af37] transition-colors">
                      Saber más <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="w-full bg-[#0f0f11] h-auto border-y border-gray-800/50">
        <div className="px-8 py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
            <div className="text-[#d4af37] uppercase tracking-widest text-xs font-bold mb-2 flex gap-2 items-center">
              <div className="h-px w-10 bg-[#d4af37]"></div>Nuestro enfoque
            </div>
            <h2 className="text-5xl font-serif text-white mb-4 leading-tight">
              Aprende en el <br />
              <span className="italic text-[#d4af37]">campo,</span>
              <br /> no en la teoría.
            </h2>
            <p className="text-gray-400 mb-8">
              Nuestro enfoque es 100% práctico. Te enseñamos a resolver
              problemas del mundo real a los que se enfrenta todo fotógrafo en
              el set o en posproducción.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1">
                  <Camera className="text-[#d4af37]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">
                    Casos del mundo real
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Analizamos tomas icónicas y las recreamos paso a paso.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1">
                  <Play className="text-[#d4af37]" size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">
                    Retroalimentación directa
                  </h4>
                  <p className="text-gray-500 text-sm">
                    Tus tareas son revisadas personalmente por nuestros
                    instructores.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img
              src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Editor trabajando"
              className="rounded-sm shadow-2xl brightness-75"
            />
            <div className="absolute -bottom-6 -left-6 bg-[#0a0a0a] p-6 border-[0.5px] border-gray-800/50 shadow-xl">
              <p className="text-[#d4af37] text-3xl font-bold mb-1">300+</p>
              <p className="text-gray-400 text-xs uppercase tracking-widest">
                Horas de Video en 4K
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="px-8 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#d4af37] uppercase tracking-widest text-xs font-bold mb-2 flex items-center gap-2 justify-center">
            <div className="h-px w-10 bg-[#d4af37]"></div>
            <span>Los Beneficios</span>
            <div className="h-px w-10 bg-[#d4af37]"></div>
          </div>
          <h2 className="text-4xl font-serif text-white">
            Todo lo que necesitas para crecer
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-l-[0.5px] border-gray-800/50">
          <div className="bg-[#141416] p-8 border-r-[0.5px] border-gray-800/50">
            <BookOpen className="text-[#d4af37] pb-2" />
            <h3 className="text-white font-bold text-xl mb-6">
              Técnicas Avanzadas
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Check size={16} className="text-[#d4af37]" /> Composición
                visual
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Check size={16} className="text-[#d4af37]" /> Teoría del color
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Check size={16} className="text-[#d4af37]" /> Retoque de piel
                en Photoshop
              </li>
            </ul>
          </div>
          <div className="bg-[#141416] p-8 border border-gray-800/50 rounded-sm">
            <UsersRound className="text-[#d4af37] pb-2" />
            <h3 className="text-white font-bold text-xl mb-6">
              Flujo de Trabajo Eficiente
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Check size={16} className="text-[#d4af37]" /> Configuración de
                iluminación de estudio
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Check size={16} className="text-[#d4af37]" /> Catalogación en
                Lightroom
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Check size={16} className="text-[#d4af37]" /> Exportación en
                alta resolución para web
              </li>
            </ul>
          </div>
          <div className="bg-[#141416] p-8 border border-gray-800/50 rounded-sm">
            <Star className="text-[#d4af37] pb-2" />
            <h3 className="text-white font-bold text-xl mb-6">
              Negocios y Marketing
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Check size={16} className="text-[#d4af37]" /> Consigue tus
                primeros clientes
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Check size={16} className="text-[#d4af37]" /> Curaduría de
                portafolio
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <Check size={16} className="text-[#d4af37]" /> Crecimiento
                orgánico en Instagram
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id='instructores' className="bg-[#0f0f11] scroll-mt-5">
        <div className="px-8 py-24 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <p className="text-[#d4af37] uppercase tracking-widest text-xs font-bold mb-2 flex items-center gap-3">
              <span className="h-px w-8 bg-[#d4af37]"></span>
              Los Expertos
            </p>
            <h2 className="text-4xl font-serif text-white">
              Nuestros Instructores
            </h2>
          </div>

          {/* Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-l-[0.5px] border-gray-800/80">
            {[
              {
                name: "Marcus Vance",
                role: "Fotógrafo Documental",
                courses: "2 Cursos",
                students: "1.500 Estudiantes",
                img: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Laura Ross",
                role: "Especialista en Retrato y Moda",
                courses: "3 Cursos",
                students: "2.400 Estudiantes",
                img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Andrew Collins",
                role: "Posproductor Principal",
                courses: "4 Cursos",
                students: "3.100 Estudiantes",
                img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Sarah Jenkins",
                role: "Fotógrafa de Paisajes",
                courses: "2 Cursos",
                students: "1.800 Estudiantes",
                img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
            ].map((instructor, idx) => (
              <div
                key={idx}
                className="group cursor-pointer border-r-[0.5px] border-gray-800/80 overflow-hidden transition-all duration-300"
              >
                {/* Image Container with Overlay Gradient */}
                <div className="overflow-hidden relative h-80">
                  <img
                    src={instructor.img}
                    alt={instructor.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5">
                    <h4 className="text-white font-bold text-lg leading-tight">
                      {instructor.name}
                    </h4>
                    <p className="text-[#d4af37] text-xs font-medium mt-1">
                      {instructor.role}
                    </p>
                  </div>
                </div>

                {/* Details & Metadata Section */}
                <div className="p-5 flex flex-col gap-4">
                  <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">
                    Profesional galardonado que comparte una década de
                    experiencia real en la industria.
                  </p>

                  {/* Metrics / Icons */}
                  <div className="pt-3 border-t border-gray-800/80 flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center gap-2">
                      <BookOpen className="w-4 h-4 text-[#d4af37]" />
                      <span>{instructor.courses}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <UsersRound className="w-4 h-4 text-[#d4af37]" />
                      <span>{instructor.students}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="w-full h-auto border-t border-gray-800/50">
        <div className="px-8 py-24 max-w-7xl mx-auto">
          <p className="text-[#d4af37] mb-12 uppercase tracking-widest text-xs font-bold flex items-center gap-3">
            <span className="h-px w-8 bg-[#d4af37]"></span>
            Reseñas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 border-l-[0.5px] border-gray-800/80">
            {[
              {
                text: '"Curso increíble. Aprendí más en estas 10 horas que en años de tutoriales gratuitos en YouTube. ¡Muy recomendado!"',
                author: "Julia M.",
              },
              {
                text: '"Calidad de primer nivel. Solo el módulo de retoque me permitió duplicar las tarifas con mis clientes en dos meses."',
                author: "Robert F.",
              },
              {
                text: '"Por fin un curso que se deja de rodeos y te muestra paso a paso cómo obtener resultados profesionales. La práctica directa marca toda la diferencia."',
                author: "Elena S.",
              },
            ].map((review, idx) => (
              <div
                key={idx}
                className="bg-[#141416] p-8 border-r-[0.5px] border-b-[0.5px] md:border-b-0 border-gray-800/80 flex flex-col justify-between h-full"
              >
                {/* Bloque superior: Estrellas + Texto */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex gap-1 mb-4 text-[#d4af37]">
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                      <Star size={16} fill="currentColor" />
                    </div>
                    <p className="text-gray-300 italic text-sm leading-relaxed">
                      {review.text}
                    </p>
                  </div>

                  {/* Línea divisoria fija antes del autor */}
                  <div className="w-full my-6 border-b-[0.5px] border-gray-800/80"></div>
                </div>

                {/* Nombre del autor siempre en el fondo */}
                <p className="text-white font-bold text-sm mt-auto">
                  — {review.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section id='contacto' className="px-8 py-32 mx-auto text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1452587925148-ce544e77e70d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center"></div>
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-serif text-white mb-6">
            Tu próxima <br />
            <span className="italic text-[#d4af37]">captura te espera.</span>
          </h2>
          <p className="text-gray-400 mb-8 max-w-lg mx-auto">
            No pospongas tu pasión. Únete a nuestra comunidad y empieza a crear
            imágenes inolvidables hoy mismo.
          </p>
          <button className="bg-[#d4af37] text-black px-10 py-4 rounded-sm font-bold uppercase tracking-wider hover:bg-[#b5952f] transition-colors">
            Inicia tu camino
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800/50 bg-[#0a0a0a]">
        <div className="px-8 py-16 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <Aperture className="text-[#d4af37]" />
              <span className="text-xl font-bold tracking-widest text-white">
                PH<span className="text-[#d4af37]">STUDIO</span>
              </span>
            </div>
            <p className="text-gray-500 text-sm max-w-sm mb-6">
              La plataforma definitiva para fotógrafos de todos los niveles.
              Cursos, talleres y recursos para elevar tu arte y tu negocio.
            </p>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">
              Navegación
            </h5>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Cursos Básicos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Masterclasses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instructores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-white font-bold mb-4 uppercase tracking-widest text-sm">
              Soporte
            </h5>
            <ul className="space-y-2 text-sm text-gray-500">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contáctanos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="px-8 py-6 border-t border-gray-800/50 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600 max-w-7xl mx-auto">
          <p>© 2026 LensArt. Todos los derechos reservados.</p>
          <p>Diseño inspirado en site.jpg</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
