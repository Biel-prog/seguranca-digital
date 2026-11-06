"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { TEN_HABITS, PLATFORM_GUIDES } from "@/data/habitsData";
import {
  ShieldCheck,
  KeyRound,
  Link2Off,
  Smartphone,
  RefreshCw,
  WifiOff,
  EyeOff,
  HardDriveDownload,
  ShoppingBag,
  Hourglass,
  ExternalLink,
  Lock,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from "lucide-react";

export const ProtectionSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"habits" | "platforms">("habits");
  const [activePlatform, setActivePlatform] = useState<string>("whatsapp");

  // Icon mapping
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "KeyRound":
        return <KeyRound className="w-5 h-5 text-cyan-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-emerald-400" />;
      case "Link2Off":
        return <Link2Off className="w-5 h-5 text-blue-400" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-indigo-400" />;
      case "RefreshCw":
        return <RefreshCw className="w-5 h-5 text-cyan-300" />;
      case "WifiOff":
        return <WifiOff className="w-5 h-5 text-amber-400" />;
      case "EyeOff":
        return <EyeOff className="w-5 h-5 text-purple-400" />;
      case "HardDriveDownload":
        return <HardDriveDownload className="w-5 h-5 text-emerald-300" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-5 h-5 text-rose-400" />;
      case "Hourglass":
        return <Hourglass className="w-5 h-5 text-amber-300" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    }
  };

  const currentPlatformData = PLATFORM_GUIDES.find((p) => p.slug === activePlatform) || PLATFORM_GUIDES[0];

  return (
    <section id="prevencao" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="glow-ambient w-96 h-96 top-1/2 -left-20 bg-blue-600/15" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Educação Preventiva</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Como se Proteger no Dia a Dia
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Pequenas atitudes diárias criam barreiras intransponíveis contra fraudadores. Adote hábitos conscientes e blinde suas redes sociais.
          </p>

          {/* Toggle view tabs with microinteractions */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab("habits")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "habits"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-glow-sm"
                  : "bg-navy-900 text-slate-300 hover:text-white border border-slate-800"
              }`}
            >
              10 Hábitos de Ouro
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab("platforms")}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                activeTab === "platforms"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-glow-sm"
                  : "bg-navy-900 text-slate-300 hover:text-white border border-slate-800"
              }`}
            >
              Guia de Redes Sociais & Contas
            </motion.button>
          </div>
        </motion.div>

        {/* Top Banner Feature with Illustration and Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 p-6 sm:p-8 rounded-2xl glass-panel border border-cyan-500/25 relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                Princípio Fundamental de Segurança
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                A segurança digital depende mais de atenção do que de ferramentas caras.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Quase 90% dos golpes virtuais bem-sucedidos no Brasil exploram a <strong>engenharia social</strong>: o criminoso induz a própria vítima a fornecer códigos, digitar senhas ou transferir dinheiro usando gatilhos de pressa e autoridade. Ter antivírus ajuda, mas o seu discernimento é o escudo principal.
              </p>
              <div className="flex flex-wrap gap-4 pt-2 text-xs text-slate-300">
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900/80 border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  Desconfie da urgência imediata
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900/80 border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Nunca forneça senhas ou SMS
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900/80 border border-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-blue-400" />
                  Confirme pedidos por voz
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 relative flex justify-center">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-cyan-500/40 shadow-xl shadow-cyan-950/60 bg-navy-950"
              >
                <Image
                  src="/images/como-se-proteger.png"
                  alt="Ilustração conceitual de segurança e proteção de contas com escudos holográficos"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Tab 1: 10 Hábitos de Ouro */}
        <AnimatePresence mode="wait">
          {activeTab === "habits" && (
            <motion.div
              key="habits"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {TEN_HABITS.map((habit) => (
                <motion.div
                  key={habit.id}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className="p-6 rounded-2xl bg-navy-900/70 border border-slate-800 hover:border-cyan-500/40 hover:bg-navy-850/85 transition-all flex flex-col justify-between group shadow-sm hover:shadow-glow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 rounded-xl bg-navy-950 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                        {renderIcon(habit.icon)}
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-500">
                        #{String(habit.id).padStart(2, "0")}
                      </span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {habit.title}
                    </h4>
                    <p className="text-xs font-medium text-cyan-400 mt-1 mb-2">
                      {habit.tagline}
                    </p>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {habit.description}
                    </p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-slate-800/80 bg-navy-950/40 -mx-6 -mb-6 p-4 rounded-b-2xl">
                    <div className="text-[11px] text-slate-400">
                      <span className="font-semibold text-emerald-400">Dica prática: </span>
                      {habit.practicalTip}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Tab 2: Guia de Redes Sociais & Contas */}
          {activeTab === "platforms" && (
            <motion.div
              key="platforms"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Sidebar list of platforms */}
              <div className="lg:col-span-4 space-y-2">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                  Selecione o Aplicativo / Conta
                </p>
                {PLATFORM_GUIDES.map((platform) => {
                  const isSelected = activePlatform === platform.slug;
                  return (
                    <motion.button
                      key={platform.slug}
                      type="button"
                      whileHover={{ x: 3 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setActivePlatform(platform.slug)}
                      className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-navy-850 border-cyan-400/50 shadow-md shadow-cyan-950/40"
                          : "bg-navy-900/70 border-slate-800 hover:bg-navy-850/60 text-slate-300"
                      }`}
                    >
                      <div>
                        <h4 className="font-bold text-sm text-white">{platform.platform}</h4>
                        <p className="text-xs text-slate-400 mt-0.5">{platform.badge}</p>
                      </div>
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: platform.color }}
                      />
                    </motion.button>
                  );
                })}
              </div>

              {/* Platform Details Card */}
              <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl glass-panel border border-slate-800 space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-3.5 h-3.5 rounded-full"
                        style={{ backgroundColor: currentPlatformData.color }}
                      />
                      <h3 className="text-2xl font-bold text-white">
                        {currentPlatformData.platform}
                      </h3>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">
                      Passo a passo recomendado para blindar sua conta contra invasões e clonagem
                    </p>
                  </div>

                  <motion.a
                    href={currentPlatformData.officialRecoveryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-cyan-950 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900/60 transition-colors shrink-0"
                  >
                    <span>Central Oficial</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </motion.a>
                </div>

                {/* Steps list */}
                <div className="space-y-4">
                  {currentPlatformData.keySteps.map((step, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-navy-950/80 border border-slate-800/80 flex items-start gap-3.5"
                    >
                      <div className="w-6 h-6 rounded-full bg-cyan-500/20 text-cyan-300 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                        {idx + 1}
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">{step.title}</h4>
                        <p className="text-xs text-slate-300 mt-1 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Warning box */}
                <div className="p-4 rounded-xl bg-amber-950/25 border border-amber-800/40 text-xs text-amber-200 flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-amber-300">Atenção em caso de invasão: </span>
                    Nunca negocie diretamente com criminosos que invadiram perfis prometendo devolver a conta mediante Pix. Use exclusivamente o canal oficial de recuperação ({currentPlatformData.platform}) com suporte biométrico ou amigos de confiança.
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
