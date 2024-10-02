import { PropsWithChildren } from "react";

export const HeroOrbita = ({
  children,
  size,
  rotation,
}: PropsWithChildren<{ size: number; rotation: number }>) => {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-1">
      <div
        className="flex items-start justify-start"
        style={{
          animation: `spin 300s linear infinite`,
          height: `${size}px`,
          width: `${size}px`,
          transform: `rotate(${rotation}deg)`,
        }}
      >
        <div
          className="inline-flex animate-spin " //  giro de estrellas en su eje
          style={{
            transform: `rotate(${rotation * -1}deg)`,
            animation: `spin 60s linear infinite`,
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};
