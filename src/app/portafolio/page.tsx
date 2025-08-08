import type { Metadata } from "next";
import ClientPortafolio from "./ClientPortafolio";

export const metadata: Metadata = {
  title: "Portafolio | Ronald Rangel",
  description:
    "Portafolio: desarrollo web estratégico, branding con propósito, marketing inteligente, contenidos con IA, asesoría en IA y comunicación/PR.",
  alternates: {
    canonical: "/portafolio",
  },
  openGraph: {
    title: "Portafolio | Ronald Rangel",
    description:
      "Muestra de proyectos y servicios: web, branding, marketing, IA y comunicación.",
    url: "/portafolio",
    type: "website",
  },
};

export default function Page() {
  // Server Component (sin "use client"). Sólo renderiza el cliente.
  return <ClientPortafolio />;
}
