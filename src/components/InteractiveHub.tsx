"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CHECKLIST_ITEMS,
  QUIZ_QUESTIONS,
  MYTHS_AND_TRUTHS,
  GLOSSARY_TERMS,
  FAQ_ITEMS,
} from "@/data/educationalData";
import {
  GraduationCap,
  CheckSquare,
  HelpCircle,
  BookOpen,
  Sparkles,
  ChevronDown,
  ChevronUp,
  RotateCcw,
  CheckCircle,
  XCircle,
  AlertCircle,
  Award,
} from "lucide-react";

export const InteractiveHub: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"checklist" | "quiz" | "myths" | "glossary" | "faq">("quiz");

  // Checklist state
  const [checkedIds, setCheckedIds] = useState<Record<string, boolean>>({});

  const toggleChecklist = (id: string) => {
    setCheckedIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const completedChecklistCount = Object.values(checkedIds).filter(Boolean).length;
  const checklistPercentage = Math.round((completedChecklistCount / CHECKLIST_ITEMS.length) * 100);

  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
  const [quizScore, setQuizScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  const handleSelectOption = (idx: number) => {
    if (selectedOptionIndex !== null) return;
    setSelectedOptionIndex(idx);

    const question = QUIZ_QUESTIONS[currentQuestionIndex];
    if (question.options[idx].isCorrect) {
      setQuizScore((prev) => prev + 1);
    }
    setUserAnswers((prev) => [...prev, idx]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setSelectedOptionIndex(null);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedOptionIndex(null);
    setQuizScore(0);
    setQuizFinished(false);
    setUserAnswers([]);
  };

  // Myths vs Truths expanded state
  const [revealedMyths, setRevealedMyths] = useState<Record<number, boolean>>({});

  const toggleMyth = (id: number) => {
    setRevealedMyths((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // FAQ expanded state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  return (
    <section id="aprenda" className="py-24 bg-navy-950 relative">
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
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Educação e Fixação</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Central de Aprendizado Interativo
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Teste sua percepção contra armadilhas virtuais, avalie a segurança dos seus aparelhos e consulte termos técnicos explicados de forma simples.
          </p>

          {/* Navigation Tabs with microinteractions */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab("quiz")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "quiz"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-glow-sm"
                  : "bg-navy-900 text-slate-300 hover:bg-navy-850 hover:text-white border border-slate-800"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Quiz Educativo</span>
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab("checklist")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "checklist"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-glow-sm"
                  : "bg-navy-900 text-slate-300 hover:bg-navy-850 hover:text-white border border-slate-800"
              }`}
            >
              <CheckSquare className="w-4 h-4" />
              <span>Checklist de Segurança</span>
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab("myths")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "myths"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-glow-sm"
                  : "bg-navy-900 text-slate-300 hover:bg-navy-850 hover:text-white border border-slate-800"
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Mitos e Verdades</span>
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab("glossary")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "glossary"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-glow-sm"
                  : "bg-navy-900 text-slate-300 hover:bg-navy-850 hover:text-white border border-slate-800"
              }`}
            >
              <BookOpen className="w-4 h-4" />
              <span>Glossário Prático</span>
            </motion.button>

            <motion.button
              type="button"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActiveTab("faq")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all ${
                activeTab === "faq"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-glow-sm"
                  : "bg-navy-900 text-slate-300 hover:bg-navy-850 hover:text-white border border-slate-800"
              }`}
            >
              <HelpCircle className="w-4 h-4" />
              <span>Perguntas Frequentes (FAQ)</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Dynamic Tab Container with AnimatePresence */}
        <AnimatePresence mode="wait">
          
          {/* TAB 1: QUIZ EDUCATIVO */}
          {activeTab === "quiz" && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto glass-panel p-6 sm:p-10 rounded-2xl border border-cyan-500/30"
            >
              {!quizFinished ? (
                <div>
                  {/* Progress bar and counter */}
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="font-semibold text-cyan-300 uppercase tracking-wider">
                      Pergunta {currentQuestionIndex + 1} de {QUIZ_QUESTIONS.length}
                    </span>
                    <span>Pontuação atual: {quizScore} acerto(s)</span>
                  </div>
                  <div className="w-full h-2 bg-navy-900 rounded-full overflow-hidden mb-6 border border-slate-800">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                      initial={{ width: 0 }}
                      animate={{
                        width: `${((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100}%`,
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* Scenario box */}
                  <div className="p-4 sm:p-5 rounded-xl bg-navy-950/80 border border-slate-800 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400">
                      Cenário Prático: {QUIZ_QUESTIONS[currentQuestionIndex].scenario}
                    </span>
                    <p className="text-base sm:text-lg font-medium text-white mt-2 leading-relaxed">
                      {QUIZ_QUESTIONS[currentQuestionIndex].context}
                    </p>
                  </div>

                  {/* Multiple choice options */}
                  <div className="space-y-3">
                    {QUIZ_QUESTIONS[currentQuestionIndex].options.map((option, idx) => {
                      const isSelected = selectedOptionIndex === idx;
                      const hasAnswered = selectedOptionIndex !== null;

                      let btnStyle = "bg-navy-900/70 border-slate-800 text-slate-200 hover:bg-navy-850 hover:border-slate-700";

                      if (hasAnswered) {
                        if (option.isCorrect) {
                          btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-semibold";
                        } else if (isSelected && !option.isCorrect) {
                          btnStyle = "bg-rose-950/80 border-rose-500 text-rose-200";
                        } else {
                          btnStyle = "bg-navy-950/50 border-slate-900 text-slate-400 opacity-60";
                        }
                      }

                      return (
                        <motion.button
                          key={idx}
                          type="button"
                          whileHover={!hasAnswered ? { scale: 1.01 } : {}}
                          whileTap={!hasAnswered ? { scale: 0.99 } : {}}
                          onClick={() => handleSelectOption(idx)}
                          disabled={hasAnswered}
                          className={`w-full text-left p-4 rounded-xl border text-sm transition-all flex items-start gap-3 ${btnStyle}`}
                        >
                          <span className="w-6 h-6 rounded-full bg-navy-950 border border-slate-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            {String.fromCharCode(65 + idx)}
                          </span>
                          <span className="flex-1">{option.text}</span>
                          {hasAnswered && option.isCorrect && (
                            <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0" />
                          )}
                          {hasAnswered && isSelected && !option.isCorrect && (
                            <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                          )}
                        </motion.button>
                      );
                    })}
                  </div>

                  {/* Explanation feedback card if answered */}
                  {selectedOptionIndex !== null && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-6 p-4 rounded-xl bg-navy-950 border border-cyan-500/30"
                    >
                      <div className="flex items-center gap-2 mb-1.5 font-bold text-xs uppercase tracking-wider">
                        {QUIZ_QUESTIONS[currentQuestionIndex].options[selectedOptionIndex].isCorrect ? (
                          <span className="text-emerald-400 flex items-center gap-1">
                            <CheckCircle className="w-4 h-4" /> Resposta Correta!
                          </span>
                        ) : (
                          <span className="text-rose-400 flex items-center gap-1">
                            <AlertCircle className="w-4 h-4" /> Atenção para a armadilha!
                          </span>
                        )}
                      </div>
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {QUIZ_QUESTIONS[currentQuestionIndex].options[selectedOptionIndex].explanation}
                      </p>

                      <div className="mt-4 flex justify-end">
                        <motion.button
                          type="button"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          onClick={handleNextQuestion}
                          className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold text-xs shadow-glow-sm transition-all"
                        >
                          {currentQuestionIndex < QUIZ_QUESTIONS.length - 1
                            ? "Próxima Pergunta →"
                            : "Ver Resultado Final"}
                        </motion.button>
                      </div>
                    </motion.div>
                  )}
                </div>
              ) : (
                /* Quiz Finished Summary */
                <div className="text-center py-6 space-y-6">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12 }}
                    className="w-16 h-16 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center mx-auto border border-cyan-400/30"
                  >
                    <Award className="w-8 h-8 text-cyan-400" />
                  </motion.div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                      Quiz Concluído!
                    </h3>
                    <p className="text-sm text-slate-300 mt-2">
                      Você acertou{" "}
                      <span className="text-cyan-400 font-bold text-lg">
                        {quizScore} de {QUIZ_QUESTIONS.length}
                      </span>{" "}
                      situações.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-navy-950/80 border border-slate-800 text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
                    {quizScore === 5 ? (
                      <p className="text-emerald-400 font-bold">
                        Excelente percepção! Você possui um senso crítico afiado e reconhece com rapidez as técnicas de pressão psicológica e fraude digital.
                      </p>
                    ) : quizScore >= 3 ? (
                      <p className="text-cyan-300">
                        Bom resultado! Você tem noções sólidas, mas lembre-se: criminosos inovam diariamente. Releia os sinais de alerta de emergência bancária e Pix.
                      </p>
                    ) : (
                      <p className="text-amber-300">
                        Fique muito atento! Os golpes exploram exatamente a pressa e o medo. Recomendamos revisar com carinho as seções de &quot;Conheça os Golpes&quot; e os 10 Hábitos de Ouro.
                      </p>
                    )}
                  </div>

                  <motion.button
                    type="button"
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={handleResetQuiz}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-semibold text-xs shadow-glow-sm transition-all"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Refazer o Quiz</span>
                  </motion.button>
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 2: CHECKLIST DE SEGURANÇA */}
          {activeTab === "checklist" && (
            <motion.div
              key="checklist"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto glass-panel p-6 sm:p-10 rounded-2xl border border-cyan-500/30"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    Checklist de Blindagem Digital
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    Marque os itens que você já aplicou em seus aparelhos para avaliar seu nível de proteção.
                  </p>
                </div>

                <div className="text-left sm:text-right">
                  <span className="text-2xl font-extrabold text-cyan-400">
                    {completedChecklistCount}/{CHECKLIST_ITEMS.length}
                  </span>
                  <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">
                    {checklistPercentage}% Concluído
                  </p>
                </div>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-2.5 bg-navy-950 rounded-full overflow-hidden mb-6 border border-slate-800">
                <motion.div
                  className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400"
                  animate={{ width: `${checklistPercentage}%` }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Checklist Items */}
              <div className="space-y-3">
                {CHECKLIST_ITEMS.map((item) => {
                  const isChecked = !!checkedIds[item.id];
                  return (
                    <motion.label
                      key={item.id}
                      whileHover={{ x: 2 }}
                      className={`flex items-start gap-3.5 p-4 rounded-xl border transition-all cursor-pointer ${
                        isChecked
                          ? "bg-navy-900/90 border-emerald-500/40 text-white"
                          : "bg-navy-950/60 border-slate-800 text-slate-300 hover:bg-navy-900/50"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={() => toggleChecklist(item.id)}
                        className="mt-1 w-4 h-4 text-cyan-500 rounded border-slate-700 bg-navy-900 focus:ring-cyan-400 focus:ring-offset-navy-950 cursor-pointer"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-400 px-2 py-0.5 rounded bg-navy-950 border border-slate-800">
                            {item.category}
                          </span>
                          <span
                            className={`text-sm font-semibold ${
                              isChecked ? "text-emerald-300 line-through opacity-90" : "text-white"
                            }`}
                          >
                            {item.text}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 mt-1 leading-normal">{item.detail}</p>
                      </div>
                    </motion.label>
                  );
                })}
              </div>

              {/* Status note */}
              <div className="mt-6 p-4 rounded-xl bg-navy-950 border border-slate-800 text-xs text-slate-300 text-center">
                {completedChecklistCount === CHECKLIST_ITEMS.length ? (
                  <span className="text-emerald-400 font-bold">
                    Parabéns! Suas contas e dispositivos contam com excelentes camadas de proteção. Mantenha os hábitos atualizados!
                  </span>
                ) : (
                  <span>
                    Complete os itens pendentes para garantir que sua vida digital fique protegida contra as ameaças mais frequentes.
                  </span>
                )}
              </div>
            </motion.div>
          )}

          {/* TAB 3: MITOS E VERDADES */}
          {activeTab === "myths" && (
            <motion.div
              key="myths"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto space-y-4"
            >
              <p className="text-xs text-center text-slate-400 mb-6">
                Clique em cada afirmação para desvendar a verdade técnica e não cair em crendices populares.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {MYTHS_AND_TRUTHS.map((item, index) => {
                  const isRevealed = !!revealedMyths[item.id];
                  const isLastOdd = index === MYTHS_AND_TRUTHS.length - 1;
                  return (
                    <motion.div
                      key={item.id}
                      whileHover={{ y: -3 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => toggleMyth(item.id)}
                      className={`p-5 rounded-2xl bg-navy-900/70 border border-slate-800 hover:border-cyan-500/40 transition-all cursor-pointer flex flex-col justify-between ${
                        isLastOdd ? "md:col-span-2 bg-navy-900/85 border-cyan-500/25" : ""
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2">
                          <span className="text-xs font-mono font-bold text-slate-500">
                            Afirmação #{item.id}
                          </span>
                          <span className="text-xs font-semibold text-cyan-400 flex items-center gap-1">
                            {isRevealed ? "Ocultar" : "Clique para desvendar"}
                          </span>
                        </div>

                        <h4 className="text-sm font-bold text-white leading-snug">
                          {item.statement}
                        </h4>
                      </div>

                      <AnimatePresence>
                        {isRevealed && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            className="mt-4 pt-3 border-t border-slate-800 overflow-hidden"
                          >
                            <div className="flex items-center gap-1.5 font-extrabold text-xs uppercase mb-1">
                              {item.isTruth ? (
                                <span className="text-emerald-400 flex items-center gap-1">
                                  <CheckCircle className="w-4 h-4" /> VERDADE
                                </span>
                              ) : (
                                <span className="text-rose-400 flex items-center gap-1">
                                  <XCircle className="w-4 h-4" /> MITO
                                </span>
                              )}
                            </div>
                            <p className="text-xs text-slate-300 leading-relaxed">
                              {item.explanation}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}

          {/* TAB 4: GLOSSÁRIO PRÁTICO */}
          {activeTab === "glossary" && (
            <motion.div
              key="glossary"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              {GLOSSARY_TERMS.map((term, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.2 }}
                  className="p-5 rounded-2xl bg-navy-900/60 border border-slate-800 hover:border-slate-700 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <h4 className="text-base font-bold text-white">{term.term}</h4>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-3">
                    {term.definition}
                  </p>
                  <div className="p-2.5 rounded-lg bg-navy-950/80 border border-slate-800/80 text-[11px] text-cyan-200">
                    <strong className="text-cyan-400 font-semibold">Exemplo real: </strong>
                    {term.example}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* TAB 5: FAQ EXPANSÍVEL */}
          {activeTab === "faq" && (
            <motion.div
              key="faq"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto space-y-4"
            >
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-2xl bg-navy-900/70 border border-slate-800 overflow-hidden"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-5 flex items-center justify-between gap-4 font-bold text-white text-sm sm:text-base hover:text-cyan-300 transition-colors"
                      aria-expanded={isOpen}
                    >
                      <span>{item.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-cyan-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 overflow-hidden"
                        >
                          {item.answer}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
};
