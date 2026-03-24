"use client";
import { useState, useEffect, useRef } from "react";

// ─── DATA ────────────────────────────────────────────────────────────────────

const site = {
  brand: "ANELE WHO / ELENA RIVERA",
  tagline: "Movimiento · Presencia · Experiencia",
  email: "elenariv04@gmail.com",
  instagram: "@anele.who",
  phone: "+52 55 8479 9062",
};

const projects = [
  {
    id: "wemove",
    title: "WeMove",
    subtitle: "Co-fundadora de WeMove",
    category: "Wellness / Producción",
    headerName: "Elena Rivera / Anele Who",
    description:
      "Co-fundadora de WeMove (@wemove.mex), una productora de experiencias wellness.",
    extra:
      "DreamFlow — Primera experiencia desarrollada en Fantasy Lab (@fantasylaab), donde el pilates se transformó en un recorrido sensorial.",
    details: [
      "Concepto, producción y ejecución de la experiencia",
    ],
    socialLinks: [
      { handle: "@wemove.mex", url: "https://www.instagram.com/wemove.mex" },
      { handle: "@fantasylaab", url: "https://www.instagram.com/fantasylaab" },
    ],
    images: [
      "/images/wemove/wemove-01.jpg",
      "/images/wemove/wemove-02.jpg",
    ],
    video: "/videos/wemove/wemove-loop.mp4",
  },
  {
    id: "movimiento",
    title: "Movimiento",
    subtitle: "Danza contemporánea / Barre / Mat Pilates",
    category: "Movimiento",
    headerName: "Anele Who",
    description:
      "Bailarina profesional de Danza Contemporánea y Coach certificada en Barre y Pilates.",
    extra:
      "Trabajo el movimiento desde la técnica, el control y la expresión corporal.",
    details: [
      "ENDCC",
      "Barre7",
      "MetaPilates",
      "Competencias Nacionales de Danza",
    ],
    detailsLabel: "Formación",
    socialLinks: [],
    images: [
      "/images/movimiento/mov-01.png",
      "/images/movimiento/mov-02.png",
      "/images/movimiento/mov-03.png",
    ],
    video: "/videos/movimiento/movimiento-loop.mp4",
    videoVertical: true,
  },
  {
    id: "performance",
    title: "Performance",
    subtitle: "Audiovisual / Moda / Editorial",
    category: "Performance",
    headerName: "Anele Who",
    description:
      "Experiencia frente a cámara en proyectos audiovisuales y contenido visual.",
    extra: null,
    details: [
      "Modelo independiente, comercial y editorial",
      "Aparición en desfiles de moda y revista",
    ],
    cortometraje: {
      title: "Bucle (Cortometraje)",
      director: "Dirección: Mariana Rivera & Mariana Limón",
      rol: "Rol: Actriz principal",
      url: "https://vimeo.com/942198818",
    },
    socialLinks: [],
    images: [
      "/images/performance/performance-01.png",
      "/images/performance/performance-02.png",
      "/images/performance/performance-03.png",
      "/images/performance/performance-04.png",
      "/images/performance/performance-05.jpg",
    ],
    video: "/videos/performance/performance-loop.mp4",
    videoVertical: true,
  },
  {
    id: "mejor-q-ayer",
    title: "Mejor Q' Ayer",
    subtitle: "Production & Talent Management",
    category: "Producción",
    headerName: "Elena Rivera",
    description:
      "Producción de temporadas de grabación y gestión de talento dentro del proyecto.",
    extra: null,
    details: [
      "Producción",
      "Gestión de talento",
      "Coordinación operativa",
    ],
    socialLinks: [
      { handle: "@mejorqayeroficial", url: "https://www.instagram.com/mejorqayeroficial" },
    ],
    images: [
      "/images/mejor-q-ayer/mejor-q-ayer-01.jpg",
      "/images/mejor-q-ayer/mejor-q-ayer-02.jpg",
      "/images/mejor-q-ayer/mejor-q-ayer-03.jpg",
    ],
    video: null,
  },
  {
    id: "lumina",
    title: "Lumina Experience",
    subtitle: "Líder del Área Comercial",
    category: "Eventos",
    headerName: "Elena Rivera",
    description:
      "Líder del Área Comercial dentro de una iniciativa desarrollada en 5to semestre de la carrera.",
    extra: null,
    details: [],
    socialLinks: [],
    images: [],
    video: "/videos/lumina/lumina-loop.mp4",
  },
];

// ─── SCROLL REVEAL HOOK ──────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

function Reveal({ children, className = "", delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── INSTAGRAM LINK HELPER ───────────────────────────────────────────────────

function InstaLink({ handle, url }) {
  return (
    <a
      href={url || `https://www.instagram.com/${handle.replace("@", "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-stone-500 underline decoration-stone-300 underline-offset-2 transition hover:text-stone-900 hover:decoration-stone-900"
    >
      {handle}
    </a>
  );
}

// ─── MAIN COMPONENT ──────────────────────────────────────────────────────────

export default function PortfolioWebsite() {
  return (
    <main className="bg-stone-50 text-stone-900">

      {/* ── HEADER ─────────────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-stone-200/70 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-stone-500">
              Portafolio Visual
            </p>
            <h1 className="mt-1 text-sm font-medium tracking-[0.08em]">
              ANELE WHO / ELENA RIVERA
            </h1>
          </div>

          <nav className="hidden gap-8 text-sm text-stone-600 md:flex">
            <a href="#home" className="transition hover:text-stone-950">Home</a>
            <a href="#projects" className="transition hover:text-stone-950">Proyectos</a>
            <a href="#about" className="transition hover:text-stone-950">About</a>
            <a href="#contact" className="transition hover:text-stone-950">Contacto</a>
          </nav>
        </div>
      </header>

      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section
        id="home"
        className="mx-auto flex min-h-[88vh] max-w-7xl items-center px-6 py-20"
      >
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <p className="text-[11px] uppercase tracking-[0.45em] text-stone-500">
              Portafolio visual
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="mt-8 text-5xl font-semibold leading-[0.95] tracking-tight text-stone-900 md:text-7xl">
              ANELE WHO / <br className="hidden md:block" />
              ELENA RIVERA
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-stone-600 md:text-xl">
              {site.tagline}
            </p>
          </Reveal>

          {/* Párrafo intro ELIMINADO por corrección */}

          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-stone-900 px-7 py-3 text-sm font-medium text-stone-50 transition hover:bg-stone-700"
              >
                Ver proyectos
              </a>
              <a
                href="#contact"
                className="rounded-full border border-stone-300 px-7 py-3 text-sm font-medium text-stone-800 transition hover:border-stone-900"
              >
                Contacto
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROYECTOS HEADER ───────────────────────────────────────────── */}
      <section
        id="projects"
        className="mx-auto max-w-7xl px-6 pb-10 pt-4 md:pb-16"
      >
        <Reveal>
          <div className="mb-14">
            <p className="text-[11px] uppercase tracking-[0.35em] text-stone-500">
              Selección
            </p>
            <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
              Proyectos
            </h3>
            {/* Párrafo descriptivo ELIMINADO por corrección */}
          </div>
        </Reveal>
      </section>

      {/* ── PROYECTOS ──────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-7xl space-y-24 px-6 pb-16 md:space-y-32 md:pb-24">

        {projects.map((project) => (
          <article
            id={project.id}
            key={project.id}
            className="grid gap-10 md:grid-cols-12 md:gap-12"
          >
            {/* ── LEFT: TEXT ──────────────────────────────────────────── */}
            <Reveal className="md:col-span-4 md:sticky md:top-28 md:self-start">
              <p className="text-[11px] uppercase tracking-[0.35em] text-stone-500">
                {project.headerName}
              </p>
              <h4 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                {project.title}
              </h4>
              <p className="mt-2 text-sm text-stone-600">{project.subtitle}</p>

              <p className="mt-6 text-sm leading-8 text-stone-700">
                {project.description}
              </p>

              {/* Social links inline with description */}
              {project.socialLinks && project.socialLinks.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-3">
                  {project.socialLinks.map((link) => (
                    <InstaLink key={link.handle} handle={link.handle} url={link.url} />
                  ))}
                </div>
              )}

              {project.extra && (
                <p className="mt-4 text-sm leading-8 text-stone-700">
                  {project.extra}
                </p>
              )}

              {project.details && project.details.length > 0 && (
                <>
                  {project.detailsLabel && (
                    <p className="mt-6 text-[11px] uppercase tracking-[0.3em] text-stone-500">
                      {project.detailsLabel}
                    </p>
                  )}
                  <ul className={`${project.detailsLabel ? "mt-2" : "mt-6"} space-y-2 text-sm text-stone-700`}>
                    {project.details.map((detail) => (
                      <li key={detail}>• {detail}</li>
                    ))}
                  </ul>
                </>
              )}

              {/* Cortometraje button for Performance */}
              {project.cortometraje && (
                <div className="mt-6 rounded-2xl border border-stone-200 bg-white p-5">
                  <p className="text-sm font-medium text-stone-900">
                    {project.cortometraje.title}
                  </p>
                  <p className="mt-1 text-sm text-stone-600">
                    {project.cortometraje.director}
                  </p>
                  <p className="text-sm text-stone-600">
                    {project.cortometraje.rol}
                  </p>
                  <a
                    href={project.cortometraje.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-sm font-medium text-stone-50 transition hover:bg-stone-700"
                  >
                    Ver cortometraje
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  </a>
                </div>
              )}

              {/* Card "Enfoque" ELIMINADA por corrección */}
            </Reveal>

            {/* ── RIGHT: MEDIA ───────────────────────────────────────── */}
            <div className="md:col-span-8">

              {/* WEMOVE — video is 1080x1920 (9:16 vertical), photos are ~3:2 landscape */}
              {project.id === "wemove" && (
                <Reveal delay={0.15}>
                  <div className="space-y-6">
                    {/* Video horizontal crop — wemove video is vertical but Elena approved horizontal display */}
                    <div className="aspect-[16/9] overflow-hidden rounded-[2rem] bg-stone-200">
                      <video
                        autoPlay muted loop playsInline
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </div>
                    {/* 2 landscape photos side by side — both ~3:2 */}
                    <div className="grid gap-6 md:grid-cols-2">
                      {project.images.map((image) => (
                        <div key={image} className="aspect-[3/2] overflow-hidden rounded-[2rem] bg-stone-200">
                          <img
                            src={image}
                            alt={project.title}
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              )}

              {/* MOVIMIENTO — mosaic: video left, photos right */}
              {project.id === "movimiento" && (
                <Reveal delay={0.15}>
                  <div
                    className="overflow-hidden rounded-[2rem]"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.2fr 1fr 1fr",
                      gridTemplateRows: "2.5fr 1fr",
                      gap: "5px",
                      height: "750px",
                    }}
                  >
                    {/* Video — left, spans both rows */}
                    <div style={{ gridColumn: "1", gridRow: "1 / 3", overflow: "hidden" }}>
                      <video
                        autoPlay muted loop playsInline
                        className="h-full w-full object-cover object-top"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </div>
                    {/* img1 — top right, spans 2 columns */}
                    <div style={{ gridColumn: "2 / 4", gridRow: "1", overflow: "hidden" }}>
                      <img src={project.images[0]} alt={project.title} className="h-full w-full object-cover object-center" />
                    </div>
                    {/* img2 — bottom middle */}
                    <div style={{ gridColumn: "2", gridRow: "2", overflow: "hidden" }}>
                      <img src={project.images[1]} alt={project.title} className="h-full w-full object-cover object-top" />
                    </div>
                    {/* img3 — bottom right */}
                    <div style={{ gridColumn: "3", gridRow: "2", overflow: "hidden" }}>
                      <img src={project.images[2]} alt={project.title} className="h-full w-full object-cover object-top" />
                    </div>
                  </div>
                </Reveal>
              )}

              {/* PERFORMANCE — compact mosaic, everything visible at once */}
              {project.id === "performance" && (
                <Reveal delay={0.15}>
                  <div
                    className="overflow-hidden rounded-[2rem]"
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.2fr 1fr 1fr",
                      gridTemplateRows: "1fr 1.3fr 1fr",
                      gap: "5px",
                      height: "1100px",
                    }}
                  >
                    {/* Video — left column, spans all 3 rows */}
                    <div style={{ gridColumn: "1", gridRow: "1 / 4", overflow: "hidden" }}>
                      <video
                        autoPlay muted loop playsInline
                        className="h-full w-full object-cover object-top"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </div>
                    {/* img1 — top middle */}
                    <div style={{ gridColumn: "2", gridRow: "1", overflow: "hidden" }}>
                      <img src={project.images[0]} alt={project.title} className="h-full w-full object-cover object-top" />
                    </div>
                    {/* img2 — top right */}
                    <div style={{ gridColumn: "3", gridRow: "1", overflow: "hidden" }}>
                      <img src={project.images[1]} alt={project.title} className="h-full w-full object-cover object-top" />
                    </div>
                    {/* img3 — middle, spans 2 columns (the big portrait) */}
                    <div style={{ gridColumn: "2 / 4", gridRow: "2", overflow: "hidden" }}>
                      <img src={project.images[2]} alt={project.title} className="h-full w-full object-cover object-top" />
                    </div>
                    {/* img4 — bottom middle */}
                    <div style={{ gridColumn: "2", gridRow: "3", overflow: "hidden" }}>
                      <img src={project.images[3]} alt={project.title} className="h-full w-full object-cover object-top" />
                    </div>
                    {/* img5 — bottom right */}
                    <div style={{ gridColumn: "3", gridRow: "3", overflow: "hidden" }}>
                      <img src={project.images[4]} alt={project.title} className="h-full w-full object-cover object-top" />
                    </div>
                  </div>
                </Reveal>
              )}

              {/* MEJOR Q' AYER — img1 4160x1447 (ultra-wide ~3:1), img2+3 1600x900 (16:9) */}
              {project.id === "mejor-q-ayer" && (
                <Reveal delay={0.15}>
                  <div className="space-y-6">
                    {/* Row 1: ultra-wide panoramic image */}
                    <div className="aspect-[3/1] overflow-hidden rounded-[2rem] bg-stone-200">
                      <img
                        src={project.images[0]}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                    {/* Row 2: two 16:9 images side by side */}
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="aspect-[16/9] overflow-hidden rounded-[2rem] bg-stone-200">
                        <img
                          src={project.images[1]}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                      <div className="aspect-[16/9] overflow-hidden rounded-[2rem] bg-stone-200">
                        <img
                          src={project.images[2]}
                          alt={project.title}
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}

              {/* LUMINA — video left + text card right (as Elena requested) */}
              {project.id === "lumina" && (
                <Reveal delay={0.15}>
                  <div className="grid gap-6 md:grid-cols-[0.45fr_1fr]">
                    {/* Video vertical */}
                    <div className="aspect-[9/16] max-h-[600px] overflow-hidden rounded-[2rem] bg-stone-200">
                      <video
                        autoPlay muted loop playsInline
                        className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                      >
                        <source src={project.video} type="video/mp4" />
                      </video>
                    </div>
                    {/* Text card */}
                    <div className="flex items-center">
                      <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200 md:p-10">
                        <p className="text-[11px] uppercase tracking-[0.35em] text-stone-500">
                          Experiencia
                        </p>
                        <h5 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
                          Across The Universe
                        </h5>
                        <p className="mt-4 text-sm leading-8 text-stone-700">
                          Primera edición del evento que reunió propuestas musicales
                          emergentes, incluyendo la participación de Grupo Morsa,
                          acompañado de un bazar gastronómico y experiencias
                          complementarias para los asistentes.
                        </p>
                        <div className="mt-6 space-y-2 text-sm text-stone-700">
                          <p>• Liderazgo comercial</p>
                          <p>• Experiencia de evento</p>
                          <p>• Coordinación y proyección de propuesta</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              )}
            </div>
          </article>
        ))}
      </section>

      {/* ── ABOUT ──────────────────────────────────────────────────────── */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 pb-10 pt-2 md:pb-16"
      >
        <Reveal>
          <div className="grid gap-6 md:grid-cols-2">

            {/* Card 1: Elena Rivera */}
            <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-stone-200 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.35em] text-stone-500">
                About
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Elena Rivera
              </h3>
              <p className="mt-6 text-sm leading-8 text-stone-700">
                Estudiante de Administración de Negocios de la Comunicación y del
                Entretenimiento (2023–Actual) en la Escuela Bancaria y Comercial.
              </p>
              <p className="mt-3 text-sm leading-8 text-stone-700">
                Productora de Experiencias. Integro creatividad, producción y
                estrategia en cada proyecto.
              </p>
            </div>

            {/* Card 2: Anele Who */}
            <div className="rounded-[2rem] bg-stone-900 p-8 text-stone-50 md:p-10">
              <p className="text-[11px] uppercase tracking-[0.35em] text-stone-400">
                About
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                Anele Who
              </h3>
              <p className="mt-6 text-sm leading-8 text-stone-300">
                Performer y creadora enfocada en el movimiento, la estética y la
                conexión.
              </p>
              <p className="mt-3 text-sm leading-8 text-stone-300">
                Trabajo desde el cuerpo, la presencia y la emoción.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── CONTACTO ───────────────────────────────────────────────────── */}
      <section
        id="contact"
        className="mx-auto max-w-7xl px-6 pb-16 pt-4 md:pb-24"
      >
        <Reveal>
          <div className="rounded-[2rem] border border-stone-200 bg-white p-8 shadow-sm md:p-12">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-stone-500">
                Contacto
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Hablemos
              </h3>
              {/* Párrafo descriptivo ELIMINADO por corrección */}
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              <a
                href="https://www.instagram.com/anele.who"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200 transition hover:bg-stone-100"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-stone-500">
                  Instagram
                </p>
                <p className="mt-2 text-sm text-stone-800">{site.instagram}</p>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200 transition hover:bg-stone-100"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-stone-500">
                  Email
                </p>
                <p className="mt-2 break-all text-sm text-stone-800">
                  {site.email}
                </p>
              </a>

              <a
                href={`tel:${site.phone.replace(/\s+/g, "")}`}
                className="rounded-2xl bg-stone-50 p-5 ring-1 ring-stone-200 transition hover:bg-stone-100"
              >
                <p className="text-[11px] uppercase tracking-[0.3em] text-stone-500">
                  Teléfono
                </p>
                <p className="mt-2 text-sm text-stone-800">{site.phone}</p>
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
