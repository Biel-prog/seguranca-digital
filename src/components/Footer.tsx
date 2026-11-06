"use client";

import React from "react";
import { motion } from "framer-motion";
import { Shield, ExternalLink, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 border-t border-slate-800 text-slate-400 text-xs relative z-10">
      
      {/* Institutional Transparency Box */}
      <div className="bg-navy-900/80 border-b border-slate-800/80 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-4 sm:p-6 rounded-2xl bg-navy-950/90 border border-cyan-500/20 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="p-2.5 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h4 className="text-white font-bold text-sm">
                Aviso Legal e Mensagem de Transparência
              </h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                “Este portal tem finalidade educativa e informativa. Não substitui atendimento bancário, orientação jurídica ou atuação das autoridades. Em caso de fraude, procure imediatamente os canais oficiais da instituição envolvida e das autoridades competentes.”
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Column 1: Brand & Project */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-700 text-white font-bold">
                <Shield className="w-4 h-4 stroke-[2.2]" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Segurança<span className="text-cyan-400">Digital</span>
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Portal de utilidade pública e conscientização contra golpes digitais. Desenvolvido no âmbito de atividade extensionista universitária com foco em cidadania e inclusão digital.
            </p>
            <p className="text-[11px] text-cyan-300">
              Público-alvo: População em geral, idosos, jovens e consumidores.
            </p>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Navegação Rápida</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#inicio" className="hover:text-cyan-300 transition-colors">
                  Início e Apresentação
                </a>
              </li>
              <li>
                <a href="#golpes" className="hover:text-cyan-300 transition-colors">
                  Conheça os Golpes Mais Comuns
                </a>
              </li>
              <li>
                <a href="#prevencao" className="hover:text-cyan-300 transition-colors">
                  10 Hábitos de Segurança & Redes
                </a>
              </li>
              <li>
                <a href="#fui-vitima" className="hover:text-rose-400 transition-colors font-medium">
                  Guia SOS: Fui Vítima. E agora?
                </a>
              </li>
              <li>
                <a href="#canais-ajuda" className="hover:text-cyan-300 transition-colors">
                  Diretório de Canais Oficiais
                </a>
              </li>
              <li>
                <a href="#mogi-das-cruzes" className="hover:text-cyan-300 transition-colors">
                  Atendimento em Mogi das Cruzes
                </a>
              </li>
              <li>
                <a href="#aprenda" className="hover:text-cyan-300 transition-colors">
                  Quiz, Checklist e Glossário
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Official Verification Channels */}
          <div>
            <h4 className="text-white font-bold text-sm mb-3">Fontes Oficiais</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href="https://www.delegaciaeletronica.policiacivil.sp.gov.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-300 transition-colors"
                >
                  <span>Delegacia Eletrônica SP</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.bcb.gov.br/golpes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-300 transition-colors"
                >
                  <span>Banco Central – Golpes & Pix</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.consumidor.gov.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-300 transition-colors"
                >
                  <span>Consumidor.gov.br</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.procon.sp.gov.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-300 transition-colors"
                >
                  <span>Fundação Procon-SP</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://cartilha.cert.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-300 transition-colors"
                >
                  <span>CERT.br – Cartilha de Segurança</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.mogidascruzes.sp.gov.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-cyan-300 transition-colors"
                >
                  <span>Prefeitura de Mogi das Cruzes</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Privacy & Back to Top */}
          <div className="space-y-4">
            <h4 className="text-white font-bold text-sm">Privacidade & Segurança</h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              Este portal <strong>não coleta, não armazena e não solicita dados pessoais</strong> ou bancários dos visitantes. Todo o processamento interativo do checklist e quiz ocorre estritamente na memória local do seu navegador.
            </p>
            <motion.button
              type="button"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-navy-900 border border-slate-700 hover:border-cyan-400 text-slate-200 hover:text-white transition-all text-xs font-semibold"
            >
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
              <span>Voltar ao Topo</span>
            </motion.button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Segurança Digital: Informação que Protege. Atividade Extensionista Universitária.
          </p>
          <p className="text-slate-400 text-center">
            Desenvolvido por <span className="text-slate-300 font-medium">Gabriel Rodrigues</span>
          </p>
          <p className="text-slate-500 text-center md:text-right">
            Última revisão editorial: Novembro de 2026. Conteúdo de utilidade pública.
          </p>
        </div>

      </div>
    </footer>
  );
};
