import IconEstrella from "@/assets/icons/star.svg";

const palabras = [
  "Alto rendimiento",
  "Seguridad",
  "Flexibilidad",
  "User friendly",
  "Escalable",
  "Satisfacción",
  "Innovación",
  "Interactivo",
  "SEO",
  "Confiable",
  "Responsive",
  "Profesional",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-500 to-sky-500  -rotate-3 -mx-1">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex flex-none gap-4 py-3">
            {" "}
            {palabras.map((palabra) => (
              <div
                key={palabra}
                className="inline-flex gap-4 items-center text-gray-900"
              >
                <span className="text-gray-900 uppercase font-extrabold text-sm">
                  {palabra}
                </span>
                <IconEstrella clasName="size-6 " />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
