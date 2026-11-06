"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Shield,
  AlertTriangle,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  MapPin,
  GraduationCap,
} from "lucide-react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Primary navigation links prioritized as requested
  const primaryLinks = [
    { label: "Início", href: "#inicio" },
    { label: "Conheça os Golpes", href: "#golpes" },
    { label: "Como se Proteger", href: "#prevencao" },
    { label: "Fui Vítima", href: "#fui-vitima" },
    { label: "Onde Buscar Ajuda", href: "#canais-ajuda" },
  ];

  const secondaryLinks = [
    {
      label: "Mogi das Cruzes",
      sublabel: "Atendimento presencial e Procon",
      href: "#mogi-das-cruzes",
      icon: MapPin,
    },
    {
      label: "Central Educativa",
      sublabel: "Quiz, Checklist e Glossário",
      href: "#aprenda",
      icon: GraduationCap,
    },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-navy-950/92 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-black/50 py-3"
          : "bg-navy-950/75 backdrop-blur-sm border-b border-slate-800/80 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#inicio"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-cyan-400 rounded-lg p-1"
        >
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-700 shadow-glow-sm group-hover:shadow-glow-md transition-all">
            <Shield className="w-5 h-5 text-white stroke-[2.2]" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors">
                Segurança<span className="text-cyan-400">Digital</span>
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-semibold px-2 py-0.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
                Guia Oficial
              </span>
            </div>
            <p className="text-xs text-slate-400 hidden sm:block">Informação que Protege</p>
          </div>
        </a>

        {/* Clean, Non-Redundant Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-6" aria-label="Navegação Principal">
          {primaryLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-400 hover:after:w-full after:transition-all focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded"
            >
              {link.label}
            </a>
          ))}

          {/* Dropdown for Secondary Related Resources */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onMouseEnter={() => setDropdownOpen(true)}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors py-1 focus:outline-none focus:ring-1 focus:ring-cyan-400 rounded"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              <span>Mais</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${
                  dropdownOpen ? "rotate-180 text-cyan-400" : "text-slate-400"
                }`}
              />
            </button>

            <AnimatePresence>
              {dropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.18 }}
                  onMouseLeave={() => setDropdownOpen(false)}
                  className="absolute right-0 mt-2 w-64 rounded-xl bg-navy-900 border border-cyan-500/30 shadow-xl shadow-black/60 p-2 backdrop-blur-xl z-50"
                >
                  {secondaryLinks.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setDropdownOpen(false)}
                        className="flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-navy-850 hover:border-cyan-500/20 border border-transparent transition-all group"
                      >
                        <div className="p-1.5 rounded-md bg-navy-950 border border-slate-800 text-cyan-400 group-hover:border-cyan-500/40 shrink-0 mt-0.5">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-white group-hover:text-cyan-300 transition-colors">
                            {item.label}
                          </p>
                          <p className="text-[11px] text-slate-400">{item.sublabel}</p>
                        </div>
                      </a>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Emergency SOS CTA with Motion Microinteraction */}
        <div className="hidden sm:flex items-center gap-3">
          <motion.a
            href="#fui-vitima"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-rose-500/15 border border-rose-500/50 text-rose-300 hover:bg-rose-500/25 hover:border-rose-400 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-400"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500" />
            </span>
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            <span>Fui Vítima (SOS)</span>
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-navy-850 border border-slate-700 text-slate-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          aria-expanded={mobileMenuOpen}
          aria-label="Abrir menu de navegação"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer with Clean Organization */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-navy-900/98 border-b border-cyan-500/20 px-4 pt-3 pb-6 mt-3 space-y-3 backdrop-blur-xl overflow-hidden"
          >
            {/* Primary Links */}
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1 block">
                Navegação Principal
              </span>
              {primaryLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-navy-800 hover:text-cyan-300 transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            {/* Secondary Grouped Resources */}
            <div className="pt-2 border-t border-slate-800/80 space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1 block">
                Recursos Adicionais
              </span>
              {secondaryLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-slate-200 hover:bg-navy-800 hover:text-cyan-300 transition-colors"
                >
                  <div>
                    <span className="block text-sm">{item.label}</span>
                    <span className="block text-[11px] text-slate-400">{item.sublabel}</span>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-500" />
                </a>
              ))}
            </div>

            {/* Emergency CTA at bottom */}
            <div className="pt-3 border-t border-slate-800">
              <motion.a
                href="#fui-vitima"
                whileTap={{ scale: 0.97 }}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-gradient-to-r from-rose-600 to-rose-700 text-white font-semibold text-sm shadow-md"
              >
                <AlertTriangle className="w-4 h-4" />
                <span>Fui Vítima: Guia de Emergência (SOS)</span>
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
