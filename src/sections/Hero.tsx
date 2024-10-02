import Image from "next/image";
import memojiImage from "@/assets/images/avataaars.png";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import grainImage from "@/assets/images/grain.jpg";
import StarIcon from "@/assets/icons/star.svg";
import { HeroOrbita } from "@/components/HeroOrbita";

import SparkleIcon from "@/assets/icons/sparkle.svg";

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0  z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        <div className="hero-anillo size-[620px]"></div>
        <div className="hero-anillo size-[820px]"></div>
        <div className="hero-anillo size-[1020px]"></div>
        <div className="hero-anillo size-[1220px]"></div>

        <HeroOrbita size={800} rotation={-72}>
          <StarIcon className="size-32 text-emerald-500" />
        </HeroOrbita>
        <HeroOrbita size={550} rotation={20}>
          <StarIcon className="size-10 text-emerald-500" />
        </HeroOrbita>
        <HeroOrbita size={590} rotation={98}>
          <StarIcon className="size-8 text-emerald-500" />
        </HeroOrbita>
        <HeroOrbita size={430} rotation={-13}>
          <SparkleIcon className="size-8 text-emerald-500/15" />
        </HeroOrbita>
        <HeroOrbita size={440} rotation={80}>
          <SparkleIcon className="size-5 text-emerald-500/15" />
        </HeroOrbita>
        <HeroOrbita size={530} rotation={180}>
          <SparkleIcon className="size-10 text-emerald-500/15" />
        </HeroOrbita>
        <HeroOrbita size={710} rotation={144}>
          <SparkleIcon className="size-14 text-emerald-500/15" />
        </HeroOrbita>
        <HeroOrbita size={720} rotation={86}>
          <div className="bg-emerald-400/20 rounded-full size-3"></div>
        </HeroOrbita>
        <HeroOrbita size={520} rotation={-40}>
          <div className="bg-emerald-400/20 rounded-full size-2"></div>
        </HeroOrbita>
        <HeroOrbita size={520} rotation={-40}>
          <div className="bg-emerald-400/20 rounded-full size-2"></div>
        </HeroOrbita>
        <HeroOrbita size={650} rotation={-4}>
          <div className="bg-emerald-400/20 rounded-full size-2"></div>
        </HeroOrbita>
      </div>
      <div className="relative container z-50">
        <div className="flex flex-col items-center">
          <Image src={memojiImage} className="size-[100px]" alt="Hero Image" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full  gap-4 rounded-lged-lg"></div>
            <div className="text-sm font-medium">
              Disponible para nuevos proyectos
            </div>
          </div>
        </div>

        <div className="max-w-lg mx-auto">
          <h1 className="font-serif text-3xl text-center mt-8 tracking-wide md:text-5xl">
            Creando soluciones y experiencias
          </h1>

          <p className="mt-4 text-center text-white/60 md:text-lg">
            Me especializo en crear paginas web modernas y funcionales,
            basandome en un diseño predefinido o realizando los diseños por mi
            cuenta. Traigamos a la vida tu proximo proyecto!
          </p>
        </div>
        <div className="flex flex-col items-center mt-8  gap-4 md:flex-row justify-center">
          <button className="boton1 inline-flex items-center gap-2 bg-gray-900/20 border border-white/15 px-6 h-12 rounded-xl backdrop-blur">
            <span className="font-semibold">Mi trabajo</span>
            <ArrowDown className="size-4" />
          </button>
          <a
            href="https://api.whatsapp.com/send?phone=595981400359"
            className="boton2 inline-flex items-center gap-2 border-white text bg-white text-gray-900 h-12 px-6 border rounded-xl"
          >
            <span>👋</span>
            <span className="font-semibold">Contactame</span>
          </a>
        </div>
      </div>
    </div>
  );
};
