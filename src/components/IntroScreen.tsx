import React from "react";
// import type { Emotion } from "../../types"; // Больше не нужен
import type { PracticeData } from "../../content"; // 🔴 Импортируем PracticeData

interface IntroScreenProps {
  // emotion: Emotion; // 🔴 Удаляем emotion
  practice: PracticeData; // 🟢 Добавляем practice
  onStart: () => void;
}

export const IntroScreen: React.FC<IntroScreenProps> = ({
  practice, // 🔴 Используем practice
  onStart,
}) => {
  // const data = content[emotion]; // 🔴 Удаляем, используем practice напрямую

  return (
    <div className="flex flex-col h-full items-center justify-center p-6 pt-32 md:pt-40 max-w-md mx-auto w-full animate-fade-in-up text-center">
      <div className="flex-1 flex flex-col items-center justify-center">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-700 leading-snug max-w-xs">
          {practice.introText} {/* 🔴 Используем introText из practice */}
        </h2>
      </div>

      <div className="w-full pb-10 pt-8">
        <button
          onClick={onStart}
          className="w-full py-5 rounded-full text-xl font-semibold tracking-wide bg-gradient-to-r from-sky-100 to-pink-100 text-slate-700 shadow-[0_8px_30px_-10px_rgba(167,232,255,0.4)] hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 active:scale-95"
        >
          Start
        </button>
      </div>
    </div>
  );
};
