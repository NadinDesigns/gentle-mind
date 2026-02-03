import React, { useState, useEffect, useRef } from "react";
import type { PracticeData } from "../../content";

const INITIAL_TIME_SECONDS = 20;

interface PracticeScreenProps {
  practice: PracticeData;
  onComplete: () => void;
}

export const PracticeScreen: React.FC<PracticeScreenProps> = ({
  practice,
  onComplete,
}) => {
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME_SECONDS);
  const [isActive, setIsActive] = useState(false);

  // ✅ ИСПРАВЛЕНО: Типизация для браузера (number)
  const timerRef = useRef<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Инициализация аудио (один раз при монтировании)
  useEffect(() => {
    audioRef.current = new Audio("/piano-logo-152947.mp3");
    audioRef.current.volume = 0.25;

    // Чистим таймер при удалении компонента
    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, []);

  // ✅ ЕДИНАЯ ЛОГИКА ТАЙМЕРА И ЗАВЕРШЕНИЯ
  useEffect(() => {
    if (isActive) {
      // Запускаем интервал
      timerRef.current = window.setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            // КОНЕЦ ВРЕМЕНИ:
            // Сначала очищаем интервал
            if (timerRef.current) window.clearInterval(timerRef.current);
            timerRef.current = null;

            // Запускаем финализацию через макрозадачу (setTimeout 0),
            // чтобы выйти из текущего цикла рендера и избежать Cascading Renders
            setTimeout(() => {
              handleFinish();
            }, 0);

            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } else {
      // Если не активно — чистим интервал
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive]); // Зависим ТОЛЬКО от isActive

  // Вынесенная функция завершения
  const handleFinish = () => {
    setIsActive(false);
    audioRef.current?.play().catch(() => {
      /* игнорируем ошибки автоплея */
    });
    onComplete();
  };

  const handleStartTimer = () => {
    setTimeLeft(INITIAL_TIME_SECONDS);
    setIsActive(true);
  };

  // Расчет прогресса для круга
  const progress =
    ((INITIAL_TIME_SECONDS - timeLeft) / INITIAL_TIME_SECONDS) * 100;
  const radius = 58;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="flex flex-col h-full items-center p-6 pt-32 md:pt-40 max-w-md mx-auto w-full animate-fade-in-up">
      <div className="text-center space-y-2 mb-10 shrink-0">
        <h2 className="text-lg uppercase tracking-widest text-sky-600/80 font-bold">
          {practice.title}
        </h2>
        <div className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed whitespace-pre-line max-w-xs mx-auto">
          {practice.practiceText}
        </div>
      </div>

      <div className="flex-1 w-full flex items-center justify-center min-h-[200px] z-10 relative">
        <div className="relative flex items-center justify-center">
          <svg
            className="w-56 h-56 transform -rotate-90 overflow-visible"
            viewBox="0 0 128 128"
          >
            <circle
              cx="64"
              cy="64"
              r={radius}
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-slate-100"
            />
            <circle
              cx="64"
              cy="64"
              r={radius}
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              className="text-[#A7E8FF] transition-all duration-1000 ease-linear"
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference - (circumference * progress) / 100
              }
            />
          </svg>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {!isActive ? (
              <button
                onClick={handleStartTimer}
                className="w-20 h-20 rounded-full bg-sky-100/80 hover:bg-sky-200/80 text-sky-700 font-bold text-lg shadow-sm border border-sky-200/50 flex items-center justify-center transition-all transform hover:scale-105 active:scale-95"
              >
                Старт
              </button>
            ) : (
              <span className="text-4xl font-light tabular-nums text-slate-600">
                {`00:${timeLeft.toString().padStart(2, "0")}`}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
