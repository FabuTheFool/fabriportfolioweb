"use client";
import { useEffect } from "react";
import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero";
import { ProjectsSection } from "@/sections/Projects";
import ReactGA from "react-ga4";
import { TapeSection } from "@/sections/Tape";

// Inicializar Google Analytics
ReactGA.initialize("G-6SCBT5XYPE");

export default function Home() {
  useEffect(() => {
    // Google Tag Manager
    const script1 = document.createElement("script");
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-6SCBT5XYPE";
    script1.async = true;
    document.head.appendChild(script1);

    // gtag config
    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-6SCBT5XYPE');
    `;
    document.head.appendChild(script2);

    // Cleanup
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
    </div>
  );
}
