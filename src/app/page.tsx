import React from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { ScamsSection } from "@/components/ScamsSection";
import { ProtectionSection } from "@/components/ProtectionSection";
import { EmergencyGuide } from "@/components/EmergencyGuide";
import { OfficialChannels } from "@/components/OfficialChannels";
import { InteractiveHub } from "@/components/InteractiveHub";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar />

      {/* Main Landmark for semantic HTML & accessibility */}
      <main id="conteudo-principal" className="flex-1">
        {/* Hero Banner Section */}
        <Hero />

        {/* 4.2 Conheça os Golpes */}
        <ScamsSection />

        {/* 4.3 Como se Proteger */}
        <ProtectionSection />

        {/* 4.4 Fui Vítima. E Agora? (SOS Guia de Emergência) */}
        <EmergencyGuide />

        {/* 4.5 Onde Buscar Ajuda & 8. Mogi das Cruzes */}
        <OfficialChannels />

        {/* 5 & 9 Recursos Educativos: Quiz, Checklist, Mitos e Verdades, Glossário, FAQ */}
        <InteractiveHub />
      </main>

      {/* Institutional Footer */}
      <Footer />
    </div>
  );
}
