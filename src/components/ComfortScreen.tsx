import React from "react";
// 🟢 Типы уже импортированы корректно
import type { PracticeData } from "../../content";
import { CompletionAnimation } from "./CompletionAnimation";

interface ComfortScreenProps {
  practice: PracticeData; // 🟢 Интерфейс корректно принимает practice
  onClose: () => void;
}

export const ComfortScreen: React.FC<ComfortScreenProps> = ({
  practice, // 🟢 Деструктурируем practice
  onClose,
}) => {
  // 🔴 Удалена ненужная и некорректная строка const data = content[emotion];

  return (
    // 🟢 Применяем финальные классы отступов для "воздуха" сверху (pt-32 md:pt-40)
    <div className="relative h-full w-full flex flex-col items-center justify-center p-8 pt-32 md:pt-40 overflow-hidden">
      {/* Abstract Background (без изменений) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-pink-50 opacity-90"></div>
        <div className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] bg-pink-200/40 rounded-full blur-[80px] animate-breathe"></div>
        <div
          className="absolute bottom-[-20%] left-[-10%] w-[80%] h-[80%] bg-[#A7E8FF]/40 rounded-full blur-[80px] animate-breathe"
          style={{ animationDelay: "3s" }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-md flex flex-col items-center text-center space-y-12 animate-fade-in-up">
        {/* Heart Animation (без изменений) */}
        <div className="scale-125 mb-4">
          <CompletionAnimation />
        </div>

        {/* Completion Message */}
        <div className="max-w-xs mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold text-slate-700 leading-tight">
            {/* 🔴 ИСПРАВЛЕНО: Используем practice.completionText */}
            {practice.completionText}
          </h1>
        </div>

        {/* Close Button (без изменений) */}
        <div className="w-full pt-8">
          <button
            onClick={onClose}
            className="w-full py-4 rounded-[2rem] text-lg font-semibold bg-white/80 border border-white/60 text-slate-500 hover:text-slate-700 hover:bg-white transition-all shadow-sm hover:shadow-md"
          >
            Schlißen
          </button>
        </div>
      </div>
    </div>
  );
};
