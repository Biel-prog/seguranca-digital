"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  OFFICIAL_CHANNELS,
  BIG_TECH_RECOVERY,
  MOGI_DAS_CRUZES_INFO,
} from "@/data/channelsData";
import {
  Building2,
  ExternalLink,
  MapPin,
  Scale,
  Globe2,
  Info,
} from "lucide-react";

export const OfficialChannels: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<string>("todos");

  const categories = [
    { id: "todos", label: "Todos os Órgãos" },
    { id: "policia", label: "Polícia & Registro" },
    { id: "financeiro", label: "Banco Central & Bancos" },
    { id: "consumidor", label: "Consumidor & Procon" },
    { id: "seguranca-dados", label: "CERT.br & LGPD" },
  ];

  const filteredChannels = OFFICIAL_CHANNELS.filter(
    (c) => filterCategory === "todos" || c.category === filterCategory
  );

  return (
    <section id="canais-ajuda" className="py-24 bg-navy-900/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5" />
            <span>Diretório Oficial de Apoio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Onde Buscar Ajuda e Denunciar
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Acesse diretamente os portais governamentais e órgãos oficiais para registrar boletins, abrir contestações e resguardar seus direitos.
          </p>

          {/* Filter Chips with microinteractions */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  filterCategory === cat.id
                    ? "bg-cyan-500 text-navy-950 shadow-glow-sm font-bold"
                    : "bg-navy-900 text-slate-300 hover:bg-navy-850 hover:text-white border border-slate-800"
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Directory Cards Grid with Balanced Distribution */}
        <motion.div
          layout
          className={`grid gap-6 ${
            filteredChannels.length <= 2
              ? "grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          <AnimatePresence mode="popLayout">
            {filteredChannels.map((channel) => (
              <motion.div
                key={channel.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25 }}
                className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-navy-900/80 transition-all flex flex-col justify-between group shadow-sm hover:shadow-glow-sm"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950 border border-cyan-800/40">
                      {channel.categoryLabel}
                    </span>
                    {channel.badge && (
                      <span className="text-[10px] font-semibold text-emerald-300 px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-800/30">
                        {channel.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {channel.name}
                  </h3>
                  <p className="text-xs font-semibold text-cyan-400/90 mt-1 mb-2">
                    {channel.role}
                  </p>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {channel.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400 truncate max-w-[160px]">
                    {channel.url.replace("https://", "").replace("www.", "").split("/")[0]}
                  </span>
                  <motion.a
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-600/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500 hover:text-navy-950 transition-all shadow-sm"
                  >
                    <span>{channel.primaryAction}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Big Tech Account Recovery Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800"
        >
          <div className="flex items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2">
            <Globe2 className="w-4 h-4 text-cyan-400" />
            <span>Recuperação de Acesso em Grandes Plataformas</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Canais Oficiais das Redes Sociais e Contas Digitais
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 mb-6">
            Em caso de invasão de contas, evite intermediários e use exclusivamente as centrais verificadas:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {BIG_TECH_RECOVERY.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-xl bg-navy-950/80 border border-slate-800/90 flex flex-col justify-between"
              >
                <div>
                  <h4 className="font-bold text-white text-sm mb-1">{item.name}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{item.desc}</p>
                </div>
                <motion.a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg text-xs font-semibold bg-navy-900 hover:bg-cyan-600 hover:text-white text-cyan-300 border border-slate-700 transition-colors"
                >
                  <span>{item.action}</span>
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Dedicated Local Section: Mogi das Cruzes */}
        <motion.div
          id="mogi-das-cruzes"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-12 border-t border-slate-800 scroll-mt-24"
        >
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 border border-cyan-500/30 shadow-xl">
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 border border-cyan-500/40 text-cyan-300 text-xs font-bold mb-2">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{MOGI_DAS_CRUZES_INFO.city}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {MOGI_DAS_CRUZES_INFO.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl">
                  {MOGI_DAS_CRUZES_INFO.intro}
                </p>
              </div>

              <motion.a
                href={MOGI_DAS_CRUZES_INFO.prefeituraUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-navy-950 transition-all shrink-0 self-start md:self-auto shadow-glow-sm"
              >
                <span>Portal da Prefeitura de Mogi</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Guidance cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {MOGI_DAS_CRUZES_INFO.guidanceCards.map((card, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-navy-950/80 border border-slate-800 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Scale className="w-4 h-4 text-cyan-400" />
                      <h4 className="text-base font-bold text-white">{card.title}</h4>
                    </div>
                    <p className="text-xs font-semibold text-cyan-300">{card.role}</p>
                    <p className="text-xs text-slate-300 leading-relaxed">{card.description}</p>
                    
                    <div className="p-3 rounded-lg bg-navy-900 border border-slate-800 text-[11px] text-slate-300">
                      <span className="font-bold text-amber-300">Competência: </span>
                      {card.importantNotice}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-slate-800">
                    <a
                      href={card.actionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>{card.actionText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Local Data Transparency Note */}
            <div className="mt-6 p-4 rounded-xl bg-navy-950 border border-slate-800 text-xs text-slate-400 flex items-start gap-2.5">
              <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>{MOGI_DAS_CRUZES_INFO.transparencyNote}</span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
