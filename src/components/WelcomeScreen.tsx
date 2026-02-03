import React, { memo } from "react";
import type { Emotion } from "../../types";
import { SoftButton } from "./SoftButton";
import { emotionLabels } from "../../content";

interface WelcomeScreenProps {
  onEmotionSelect: (emotion: Emotion) => void;
}

// Вынесено за пределы для исключения повторных аллокаций
const EMOTIONS: Emotion[] = Object.keys(emotionLabels) as Emotion[];
const ANIMATION_BASE_DELAY = 100;
const ANIMATION_STEP_DELAY = 100;

// ✅ Использование React.memo предотвращает ререндер при обновлении анимации фона в App.tsx
export const WelcomeScreen: React.FC<WelcomeScreenProps> = memo(
  ({ onEmotionSelect }) => {
    return (
      <div className="flex flex-col h-full items-center p-6 pt-32 md:pt-40 max-w-md mx-auto w-full">
        <header className="mb-10 text-center animate-fade-in-up">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-700 mb-2 tracking-tight leading-tight">
            Как ты сейчас?
          </h1>
          <div className="h-1.5 w-16 bg-gradient-to-r from-sky-100 to-pink-100 rounded-full mx-auto mt-6 opacity-60"></div>
        </header>

        <div className="w-full space-y-4">
          {EMOTIONS.map((emotion, index) => (
            <SoftButton
              key={emotion}
              primaryText={emotionLabels[emotion]}
              // ✅ Передаем emotion в обработчик (предполагается, что SoftButton мемоизирован)
              onClick={() => onEmotionSelect(emotion)}
              delay={ANIMATION_BASE_DELAY + index * ANIMATION_STEP_DELAY}
            />
          ))}
        </div>
      </div>
    );
  },
);

// Добавляем DisplayName для удобства отладки в DevTools
WelcomeScreen.displayName = "WelcomeScreen";
