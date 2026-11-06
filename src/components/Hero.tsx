"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Shield, ArrowRight, AlertOctagon, CheckCircle2, Lock, Smartphone, ShieldAlert } from "lucide-react";

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="inicio" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-grid-pattern">
      {/* Ambient background glows with subtle breathing effect */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.22, 0.32, 0.22],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="glow-ambient w-96 h-96 -top-20 -left-20 bg-blue-600"
      />
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="glow-ambient w-[32rem] h-[32rem] top-40 -right-20 bg-cyan-600"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline and Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            
            {/* Tag Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold tracking-wide shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                <span>Atividade Extensionista Universitária</span>
                <span className="text-slate-500">|</span>
                <span className="text-slate-300 font-normal">Cidadania & Educação Digital</span>
              </div>
            </motion.div>

            {/* Impact Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]"
            >
              Na internet,{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-300">
                informação
              </span>{" "}
              também é proteção.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed"
            >
              Aprenda a reconhecer golpes virtuais, blindar suas contas e agir com rapidez e assertividade caso seja vítima de fraudes financeiras ou digitais.
            </motion.p>

            {/* Pillar Badges */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-slate-300"
            >
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-slate-800 shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Prevenção Prática</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-slate-800 shadow-sm">
                <Shield className="w-4 h-4 text-cyan-400" />
                <span>Orientação Oficial</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-slate-800 shadow-sm">
                <Lock className="w-4 h-4 text-blue-400" />
                <span>Diretório Confiável</span>
              </div>
            </motion.div>

            {/* CTAs with Microinteractions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <motion.a
                href="#golpes"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 shadow-glow-sm hover:shadow-glow-md transition-all text-sm group"
              >
                <span>Conhecer os Principais Golpes</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.a
                href="#fui-vitima"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-rose-300 bg-rose-500/15 border border-rose-500/40 hover:bg-rose-500/25 hover:border-rose-400 transition-all text-sm"
              >
                <AlertOctagon className="w-4 h-4 text-rose-400" />
                <span>Fui Vítima. E agora? (SOS)</span>
              </motion.a>
            </motion.div>

            {/* Target Audience Note */}
            <motion.p variants={itemVariants} className="text-xs text-slate-400 pt-2">
              Conteúdo acessível desenvolvido para a população em geral, com atenção a pessoas idosas, jovens e trabalhadores.
            </motion.p>
          </motion.div>

          {/* Right Column: Premium Hero Image with Floating Status Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            
            {/* Background Radial Glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/25 to-blue-600/25 rounded-3xl blur-2xl transform scale-95" />

            <div className="relative w-full max-w-md rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-navy-950/80 bg-navy-900/60 p-2 group">
              <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-navy-950">
                <Image
                  src="/images/hero-shield-smartphone.png"
                  alt="Ilustração premium de smartphone protegido por escudo digital luminoso contra fraudes na internet"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 400px"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-60" />
              </div>

              {/* Floating Badge 1 - MED Pix with Motion Float */}
              <motion.div
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-6 -left-3 sm:-left-6 glass-panel px-3.5 py-2.5 rounded-xl flex items-center gap-2.5 shadow-xl shadow-black/60 border border-cyan-400/40"
              >
                <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-300">
                  <ShieldAlert className="w-4 h-4 text-cyan-300" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">Mecanismo MED</p>
                  <p className="text-[10px] text-cyan-200">Prazo de até 80 dias para Pix</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - 2FA Protection with Motion Float */}
              <motion.div
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-8 -right-3 sm:-right-6 glass-panel px-3.5 py-2.5 rounded-xl flex items-center gap-2.5 shadow-xl shadow-black/60 border border-emerald-400/40"
              >
                <div className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-white">2 Fatores (2FA)</p>
                  <p className="text-[10px] text-emerald-200">+99% de proteção contra invasão</p>
                </div>
              </motion.div>

              {/* Bottom Card Bar */}
              <div className="p-3 bg-navy-950/90 rounded-b-xl border-t border-slate-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-300">
                  <Smartphone className="w-4 h-4 text-cyan-400" />
                  <span>Proteção Móvel e Bancária</span>
                </div>
                <span className="text-emerald-400 font-medium">Guia Atualizado</span>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Highlight Stats / Pillars Bar with Staggered Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          <div className="glass-panel p-4 rounded-xl border border-slate-800/80 text-center hover:border-cyan-500/40 transition-colors">
            <span className="text-2xl font-bold text-cyan-400">8+</span>
            <p className="text-xs text-slate-200 mt-1 font-semibold">Golpes Detalhados</p>
            <p className="text-[11px] text-slate-400">Com exemplos e sinais de alerta</p>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-slate-800/80 text-center hover:border-blue-500/40 transition-colors">
            <span className="text-2xl font-bold text-blue-400">10</span>
            <p className="text-xs text-slate-200 mt-1 font-semibold">Hábitos de Segurança</p>
            <p className="text-[11px] text-slate-400">Atitudes simples que blindam você</p>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-slate-800/80 text-center hover:border-rose-500/40 transition-colors">
            <span className="text-2xl font-bold text-rose-400">7</span>
            <p className="text-xs text-slate-200 mt-1 font-semibold">Passos Imediatos de SOS</p>
            <p className="text-[11px] text-slate-400">Para conter perdas financeiras</p>
          </div>
          <div className="glass-panel p-4 rounded-xl border border-slate-800/80 text-center hover:border-emerald-500/40 transition-colors">
            <span className="text-2xl font-bold text-emerald-400">100%</span>
            <p className="text-xs text-slate-200 mt-1 font-semibold">Canais Oficiais e Gratuitos</p>
            <p className="text-[11px] text-slate-400">Polícia Civil, Banco Central e Procon</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
