"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { EMERGENCY_STEPS, MED_DETAILS } from "@/data/emergencyData";
import {
  AlertOctagon,
  Clock,
  ShieldAlert,
  ExternalLink,
  AlertTriangle,
  Info,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export const EmergencyGuide: React.FC = () => {
  const [showMedDeepDive, setShowMedDeepDive] = useState(false);

  return (
    <section id="fui-vitima" className="py-24 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 relative">
      {/* Background ambient red/amber alarm glow */}
      <div className="glow-ambient w-[36rem] h-[36rem] top-10 -right-20 bg-rose-600/10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-950/80 border border-rose-500/40 text-rose-300 text-xs font-bold uppercase tracking-wider mb-4 animate-pulse">
            <AlertOctagon className="w-4 h-4 text-rose-400" />
            <span>Guia de Ação Imediata</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Caí em um Golpe. <span className="text-rose-400">E Agora?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Mantenha a calma. A prioridade imediata é <strong>interromper o prejuízo</strong>, proteger seus dispositivos e preservar evidências. Siga os passos abaixo em ordem de prioridade.
          </p>
        </motion.div>

        {/* Hero Emergency Alert Banner with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-rose-950/70 via-navy-900/90 to-amber-950/40 border border-rose-500/30 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider">
                <Clock className="w-4 h-4" />
                <span>Ação Imediata: O Tempo é Decisivo</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Os primeiros 30 minutos determinam as chances de bloqueio do dinheiro.
              </h3>
              <p className="text-sm text-slate-200 leading-relaxed">
                Quanto mais rápido você comunicar a fraude ao seu banco e solicitar a abertura do <strong>MED (Mecanismo Especial de Devolução do Pix)</strong>, maiores as probabilidades de a instituição conseguir congelar o saldo antes que os golpistas transfiram os recursos para outras contas.
              </p>
              
              <div className="p-3.5 rounded-xl bg-navy-950/80 border border-slate-700/80 text-xs text-slate-300">
                <span className="font-semibold text-white">Lembrete de Segurança Física: </span>
                Se a situação envolveu violência, ameaça presencial ou coação grave, ligue imediatamente para o <strong>190 (Polícia Militar)</strong> ou procure socorro em local público e seguro.
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-rose-500/30 shadow-xl shadow-rose-950/50 bg-navy-950"
              >
                <Image
                  src="/images/fui-vitima-suporte.png"
                  alt="Ilustração conceitual de suporte e orientação emergencial contra fraudes"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </motion.div>
            </div>

          </div>
        </motion.div>

        {/* 7 Chronological Steps */}
        <div className="space-y-6">
          {EMERGENCY_STEPS.map((step, index) => {
            const isCritical = step.priority === "urgencia-maxima";

            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`p-6 sm:p-7 rounded-2xl border transition-all ${
                  isCritical
                    ? "bg-navy-900/90 border-rose-500/30 shadow-lg shadow-black/40"
                    : "bg-navy-900/70 border-slate-800 hover:border-slate-700 hover:bg-navy-850/70"
                }`}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  {/* Step number badge & Title */}
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center font-extrabold text-base shrink-0 shadow-md ${
                        isCritical
                          ? "bg-gradient-to-br from-rose-500 to-rose-700 text-white"
                          : "bg-navy-950 border border-slate-700 text-cyan-300"
                      }`}
                    >
                      {step.step}
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                            isCritical
                              ? "bg-rose-950/90 text-rose-300 border border-rose-800/60"
                              : "bg-navy-950 text-cyan-300 border border-slate-700"
                          }`}
                        >
                          {isCritical ? "Urgência Máxima" : "Procedimento Essencial"}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {step.shortAction}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                        {step.title}
                      </h3>
                    </div>
                  </div>

                  {/* Action Link Button if exists */}
                  {step.buttonLabel && step.buttonLink && (
                    <motion.a
                      href={step.buttonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-600 hover:bg-cyan-500 text-white transition-colors shrink-0 self-start shadow-sm"
                    >
                      <span>{step.buttonLabel}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </motion.a>
                  )}
                </div>

                {/* Step Body */}
                <div className="mt-4 md:pl-14 space-y-4">
                  <p className="text-sm text-slate-200 leading-relaxed">
                    {step.description}
                  </p>

                  {/* Checklist of actions for this step */}
                  <ul className="space-y-2 bg-navy-950/70 p-4 rounded-xl border border-slate-800/80">
                    {step.actionItems.map((action, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className="text-cyan-400 font-bold shrink-0 mt-0.5">•</span>
                        <span>{action}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Warning Note */}
                  {step.warningNote && (
                    <div className="p-3 rounded-lg bg-amber-950/30 border border-amber-800/40 text-xs text-amber-200 flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{step.warningNote}</span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Deep Dive: O que é o MED (Mecanismo Especial de Devolução do Pix) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/30"
        >
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-cyan-400 mb-1">
                <ShieldAlert className="w-4 h-4" />
                <span>Normativa Oficial do Banco Central</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {MED_DETAILS.title}
              </h3>
            </div>
            
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowMedDeepDive(!showMedDeepDive)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-navy-850 hover:bg-navy-800 text-cyan-300 border border-cyan-500/30 transition-all self-start sm:self-auto"
            >
              <span>{showMedDeepDive ? "Recolher Detalhes" : "Como Funciona o MED"}</span>
              {showMedDeepDive ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </motion.button>
          </div>

          <div className="mt-4 space-y-4 text-sm text-slate-300 leading-relaxed">
            <p>
              Criado pela <strong>{MED_DETAILS.creator}</strong>, o MED é o único instrumento oficial que conecta o banco da vítima ao banco onde os fraudadores mantêm a conta para realizar o bloqueio e estorno de valores.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/40">
                <h4 className="text-xs font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  Quando o MED SE APLICA:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  {MED_DETAILS.applicableCases.map((c, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40">
                <h4 className="text-xs font-bold uppercase tracking-wider text-rose-400 mb-2">
                  Quando o MED NÃO SE APLICA:
                </h4>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  {MED_DETAILS.notApplicableCases.map((c, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-rose-400 font-bold">✗</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Expanded Detailed Steps */}
            <AnimatePresence>
              {showMedDeepDive && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mt-6 pt-6 border-t border-slate-800 space-y-4 overflow-hidden"
                >
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider text-cyan-300">
                    O Passo a Passo do Fluxo Operacional MED:
                  </h4>
                  <div className="space-y-2">
                    {MED_DETAILS.howItWorksSteps.map((s, idx) => (
                      <div key={idx} className="p-3 rounded-lg bg-navy-950/70 border border-slate-800 text-xs text-slate-300">
                        {s}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Essential Transparency Disclaimer */}
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-600/40 text-xs text-amber-100 flex items-start gap-3 mt-4">
              <Info className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-300">Aviso de Transparência e Responsabilidade: </strong>
                {MED_DETAILS.transparencyWarning}
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
