"use client";

import React, { useState, useId } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SCAMS_DATA, OTHER_SCAMS } from "@/data/scamsData";
import {
  ShieldAlert,
  Search,
  AlertTriangle,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageSquareWarning,
  Sparkles,
} from "lucide-react";

export const ScamsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [expandedScamId, setExpandedScamId] = useState<string | null>("falso-banco");
  const searchInputId = useId();

  const categories = [
    { id: "todos", label: "Todos os Golpes" },
    { id: "bancario", label: "Bancários & Pix" },
    { id: "redes-sociais", label: "WhatsApp & Redes" },
    { id: "mensagens", label: "Phishing & Mensagens" },
    { id: "compras", label: "Lojas & Vendas" },
    { id: "financeiro", label: "Investimentos & Vagas" },
  ];

  const filteredScams = SCAMS_DATA.filter((scam) => {
    const matchesCategory =
      selectedCategory === "todos" ||
      (selectedCategory === "bancario" && scam.category === "bancario") ||
      (selectedCategory === "redes-sociais" && scam.category === "redes-sociais") ||
      (selectedCategory === "mensagens" && (scam.category === "mensagens" || scam.id === "falsas-vagas")) ||
      (selectedCategory === "compras" && scam.category === "compras") ||
      (selectedCategory === "financeiro" && (scam.category === "financeiro" || scam.id === "falsas-vagas"));

    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      query === "" ||
      scam.title.toLowerCase().includes(query) ||
      scam.shortDesc.toLowerCase().includes(query) ||
      scam.howItWorks.toLowerCase().includes(query) ||
      scam.typicalApproach.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const toggleExpand = (id: string) => {
    setExpandedScamId(expandedScamId === id ? null : id);
  };

  return (
    <section id="golpes" className="py-24 bg-navy-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/90 border border-blue-500/40 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>Mapeamento de Ameaças</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Conheça os Golpes Mais Comuns
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Entender o método de aproximação dos criminosos é o passo mais eficaz para não se deixar manipular por falsas histórias ou pressões de urgência.
          </p>
        </motion.div>

        {/* Filter and Search Bar using semantic <search> */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10 space-y-4"
        >
          <search className="max-w-md mx-auto block">
            <form onSubmit={(e) => e.preventDefault()} role="search">
              <label htmlFor={searchInputId} className="sr-only">
                Buscar por tipo de golpe ou palavra-chave
              </label>
              <div className="relative">
                <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="search"
                  id={searchInputId}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Pesquisar golpe (ex: Pix, WhatsApp, 10 minutos, banco...)"
                  className="w-full pl-11 pr-4 py-3 bg-navy-950/90 border border-slate-700/80 rounded-xl text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all shadow-inner"
                />
              </div>
            </form>
          </search>

          {/* Category Chips with microinteractions */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                type="button"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-cyan-500 text-navy-950 shadow-glow-sm font-bold"
                    : "bg-navy-850/90 text-slate-300 hover:bg-navy-800 hover:text-white border border-slate-800"
                }`}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Scams Grid with AnimatePresence */}
        {filteredScams.length === 0 ? (
          <div className="text-center py-12 glass-panel rounded-2xl max-w-lg mx-auto">
            <HelpCircle className="w-10 h-10 text-slate-400 mx-auto mb-3" />
            <p className="text-base font-semibold text-white">Nenhum golpe encontrado</p>
            <p className="text-sm text-slate-400 mt-1">Tente pesquisar outro termo ou selecione &quot;Todos os Golpes&quot;.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("todos");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-cyan-600 text-white text-xs font-medium hover:bg-cyan-500"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredScams.map((scam) => {
                const isExpanded = expandedScamId === scam.id;

                return (
                  <motion.article
                    key={scam.id}
                    layout
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.3 }}
                    className={`rounded-2xl transition-all duration-300 border flex flex-col justify-between ${
                      isExpanded
                        ? "bg-navy-850/90 border-cyan-500/40 shadow-xl shadow-cyan-950/40"
                        : "bg-navy-900/70 border-slate-800 hover:border-slate-700 hover:bg-navy-850/70"
                    }`}
                  >
                    <div className="p-6">
                      {/* Header with image preview and category */}
                      <div className="flex items-start gap-4 mb-4">
                        <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-slate-700 bg-navy-950">
                          <Image
                            src={scam.image}
                            alt={`Ilustração representativa do golpe: ${scam.title}`}
                            fill
                            sizes="64px"
                            className="object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-800/50">
                              {scam.categoryLabel}
                            </span>
                            {scam.severity === "critica" && (
                              <span className="text-[10px] font-bold uppercase tracking-wide text-rose-400 px-2 py-0.5 rounded bg-rose-950/60 border border-rose-800/40">
                                Alerta Máximo
                              </span>
                            )}
                          </div>
                          <h3 className="text-xl font-bold text-white mt-1.5 leading-snug">
                            {scam.title}
                          </h3>
                        </div>
                      </div>

                      {/* Short Description */}
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {scam.shortDesc}
                      </p>

                      {/* Typical Approach Preview Box */}
                      <div className="mt-4 p-3.5 rounded-xl bg-navy-950/80 border-l-4 border-amber-500 border-t border-r border-b border-slate-800/60">
                        <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-300 mb-1">
                          <MessageSquareWarning className="w-3.5 h-3.5" />
                          <span>Abordagem típica dos golpistas:</span>
                        </div>
                        <p className="text-xs italic text-slate-300 leading-normal">
                          {scam.typicalApproach}
                        </p>
                      </div>

                      {/* Expanded Content: How it Works, Warning Signs, Prevention */}
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="mt-6 pt-5 border-t border-slate-800/90 space-y-5 overflow-hidden"
                        >
                          {/* How it Works */}
                          <div>
                            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2">
                              Como o golpe funciona na prática
                            </h4>
                            <p className="text-sm text-slate-300 leading-relaxed">
                              {scam.howItWorks}
                            </p>
                          </div>

                          {/* Red Flags / Warning Signs */}
                          <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-900/40">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 flex items-center gap-1.5 mb-2.5">
                              <AlertTriangle className="w-4 h-4 text-rose-400" />
                              <span>Principais Sinais de Alerta</span>
                            </h4>
                            <ul className="space-y-2 text-xs text-slate-200">
                              {scam.warningSigns.map((sign, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-rose-400 font-bold shrink-0 mt-0.5">•</span>
                                  <span>{sign}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* How to Avoid / Prevention */}
                          <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-900/40">
                            <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 flex items-center gap-1.5 mb-2.5">
                              <CheckCircle className="w-4 h-4 text-emerald-400" />
                              <span>Como Evitar Cair no Golpe</span>
                            </h4>
                            <ul className="space-y-2 text-xs text-slate-200">
                              {scam.howToAvoid.map((avoid, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <span className="text-emerald-400 font-bold shrink-0 mt-0.5">✓</span>
                                  <span>{avoid}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </div>

                    {/* Toggle Button with microinteraction */}
                    <div className="p-4 bg-navy-950/60 rounded-b-2xl border-t border-slate-800/60 flex items-center justify-between">
                      <span className="text-xs text-slate-400">
                        {isExpanded ? "Ocultar detalhes completos" : "Ver sinais de alerta e prevenção"}
                      </span>
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => toggleExpand(scam.id)}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 py-1.5 px-3 rounded-lg bg-cyan-950/70 hover:bg-cyan-900/70 border border-cyan-800/50 transition-colors"
                        aria-expanded={isExpanded}
                      >
                        <span>{isExpanded ? "Recolher" : "Ver Análise"}</span>
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </motion.button>
                    </div>
                  </motion.article>
                );
              })}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Other Common Scams Mini-Grid with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 pt-12 border-t border-slate-800"
        >
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl font-bold text-white">Outras Fraudes Importantes para Ficar Atento</h3>
            <p className="text-xs text-slate-400 mt-1">
              Golpes menores ou variantes físicas que também utilizam meios digitais para lesar cidadãos.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {OTHER_SCAMS.map((item, index) => {
              const gridSpan =
                index < 3
                  ? "lg:col-span-2 sm:col-span-1"
                  : "lg:col-span-3 sm:col-span-2 sm:max-w-xl sm:mx-auto lg:max-w-none w-full";

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className={`p-4 rounded-xl bg-navy-950/70 border border-slate-800 hover:border-slate-700 hover:bg-navy-900/80 transition-colors shadow-sm flex flex-col justify-between ${gridSpan}`}
                >
                  <div>
                    <div className="flex items-center gap-2 mb-2 text-cyan-300 font-bold text-sm">
                      <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
                      <h4>{item.title}</h4>
                    </div>
                    <p className="text-xs text-slate-300 mb-3 leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="pt-2 border-t border-slate-800/80 text-[11px] text-emerald-300">
                    <span className="font-semibold text-emerald-400">Prevenção: </span>
                    {item.prevention}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};
