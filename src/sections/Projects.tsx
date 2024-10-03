import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import lightSaasLandingPage from "@/assets/images/light-saas-landing-page.png";
import aiStartupLandingPage from "@/assets/images/ai-startup-landing-page.png";
import Image from "next/image";
import asistia from "@/assets/images/asistia.png";
import aroma from "@/assets/images/aroma1.png";
import yacht from "@/assets/images/yacht.png";
import asisrank from "@/assets/images/asisrank.png";
import voucher from "@/assets/images/VOUCHERASISTIA.png";

import CheckIconCircular from "@/assets/icons/check-circle.svg";
import ArrowDiag from "@/assets/icons/arrow-up-right.svg";
import { url } from "inspector";
import grainImage from "@/assets/images/grain.jpg";

const portfolioProjects = [
  {
    company: "Asistia",
    year: "2024",
    title: "Asistia Landing Page",
    results: [
      { title: "Posicionamiento SEO" },
      { title: "Google Analytics" },
      { title: "Direccionamiento form via SMTP" },
    ],
    link: "https://asistia.com.py/",
    image: asistia,
  },
  {
    company: "Yacht & Golf Club",
    year: "2024",
    title: "Torneo Yacht Junior",
    results: [
      { title: "Diseño responsive" },
      { title: "Listado de participantes" },
      { title: "Galeria de imagenes estilo Masonry" },
      { title: "Administracion de Servidor SMTP" },
      { title: "Google Analytics" },
    ],
    link: "https://yachtjunior.com.py",
    image: yacht,
  },
  {
    company: "Aroma",
    year: "2023",
    title: "Aroma E-Commerce",
    results: [
      { title: "Integracion de pasarela de pagos Bancard" },
      { title: "Optimizacion de SEO" },
      { title: "Administracion de Servidor SMTP" },
      { title: "Google Analytics" },
    ],
    link: "https://aroma.com.py",
    image: aroma,
  },
  {
    company: "Asistia - Grupo KMC ",
    year: "2023",
    title: "Sistema de emision y validacion de Vouchers QR de pasajeros",
    results: [
      {
        title:
          "Automatizacion de emision de vouchers segun la base de clientes",
      },
      { title: "Categorizacion por empresa" },
      { title: "Validacion de vouchers" },
      { title: "Informes de utilizacion" },
    ],
    link: "https://comdetur.com",
    image: voucher,
  },
  {
    company: "AsisRank",
    year: "2024",
    title: "Plataforma Web en Proceso",
    results: [
      { title: "Creador y diseñador del Proyecto" },
      { title: "Categorizacion de empresas" },
      { title: "Sistema de reviews" },
      { title: "Sistema de miembros de empresas " },
      { title: "Red Social " },
    ],
    link: "https://asisrank.com",
    image: asisrank,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16" id="projects">
      <div className="container">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-500 to-sky-500 text-transparent bg-clip-text">
            Trabajos Realizados
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6 ">
          Mis Proyectos
        </h2>
        <p className="text-center md:text-lg max-w-md mx-auto text-white/60 mt-4">
          Conceptos transformados en experiencias digitales
        </p>
        <div className="flex flex-col mt-10 gap-16 md:mt-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className="bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-8 py-8 after:pointer-events-none md:pt-12 md:px-10"
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
              <div className="bg-gradient-to-r from-emerald-500 to-sky-500 text-transparent bg-clip-text inline-flex gap-2 font-bold uppercase tracking-widest text-md">
                <span>{project.company}</span>
                <span>&bull;</span>
                <span>{project.year}</span>
              </div>

              <h3 className="font-serif text-2xl mt-2 md:text-4xl md:mt-5">
                {project.title}
              </h3>
              <hr className="border-t-2 border-white/10 mt-4 md:mt-5" />
              <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                {project.results.map((result) => (
                  <li
                    key={result.title}
                    className="flex gap-2 text-sm md:text-base text-white/50"
                  >
                    <CheckIconCircular className="size-5" />
                    <span>{result.title}</span>
                  </li>
                ))}
              </ul>
              <a href={project.link}>
                <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 transition-all duration-400 hover:animate-pulse-white ">
                  <span className="bg-gradient-to-r from-emerald-500 to-sky-500 text-transparent bg-clip-text duration-400 infinite">
                    Ver Proyecto
                  </span>
                  <ArrowDiag className="size-5 bg-gradient-to-r from-emerald-500 to-sky-500 bg-clip-text" />
                </button>
              </a>
              <div className="overflow-hidden z-0 rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="mt-8 -mb-8 rounded-lg align-center  "
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
