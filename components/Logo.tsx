/**
 * Logo Cliques do Paraíso
 * Usa logo.png (arquivo real enviado pelo cliente)
 */
import Image from "next/image";

interface LogoProps {
  variant?: "light" | "dark";
  width?: number;
  className?: string;
}

export default function Logo({ variant = "light", width = 160, className = "" }: LogoProps) {
  const height = Math.round(width * 1.0); // logo PNG é aproximadamente quadrado
  return (
    <Image
      src="/logo.png"
      alt="Cliques do Paraíso — Fotografia em Jericoacoara"
      width={width}
      height={height}
      className={`${variant === "dark" ? "brightness-0 invert" : ""} ${className}`}
      priority
    />
  );
}
