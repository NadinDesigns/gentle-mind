import React, { useState, useEffect, useCallback, useMemo } from "react";
import type { Emotion, ViewState } from "../types";
import { WelcomeScreen } from "./components/WelcomeScreen";
import { IntroScreen } from "./components/IntroScreen";
import { PracticeScreen } from "./components/PracticeScreen";
import { ComfortScreen } from "./components/ComfortScreen";
import { RepeatPopup } from "./components/RepeatPopup";
import { content, type PracticeData } from "../content";

const App: React.FC = () => {
  const [viewState, setViewState] = useState<ViewState>("WELCOME");
  const [selectedPractice, setSelectedPractice] = useState<PracticeData | null>(
    null,
  );
  // ✅ УДАЛЕНО: selectedEmotion удален, так как не использовался

  // --- ЛОГИКА ВЫБОРА ---
  const handleEmotionSelect = useCallback((emotion: Emotion) => {
    const practices = content[emotion];
    const randomIndex = Math.floor(Math.random() * practices.length);
    setSelectedPractice(practices[randomIndex]);
    setViewState("INTRO");
  }, []);

  // --- ЛОГИКА АНИМАЦИИ (Оптимизировано через CSS Variables) ---
  const [bgPos, setBgPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    let frameId: number;
    const animate = () => {
      setBgPos({
        x: 50 + Math.sin(Date.now() / 8000) * 10,
        y: 50 + Math.cos(Date.now() / 10000) * 10,
      });
      frameId = requestAnimationFrame(animate);
    };
    frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // --- ЛОГИКА НАВИГАЦИИ (Мемоизация для предотвращения лишних рендеров) ---
  const handleStartPractice = useCallback(() => setViewState("PRACTICE"), []);

  // ✅ ИСПРАВЛЕНО: useCallback предотвращает каскадные рендеры в PracticeScreen
  const handlePracticeComplete = useCallback(() => setViewState("SUCCESS"), []);

  const handleCloseSuccess = useCallback(
    () => setViewState("REPEAT_PROMPT"),
    [],
  );

  const handlePopupAction = useCallback(() => {
    setViewState("WELCOME");
    setSelectedPractice(null);
  }, []);

  // Вычисляемый стиль для оптимизации
  const containerStyle = useMemo(
    () => ({
      background: `
      radial-gradient(circle at ${bgPos.x}% ${bgPos.y}%, rgba(255, 220, 238, 0.6) 0%, rgba(167, 232, 255, 0.6) 50%, rgba(255, 255, 255, 1) 100%),
      linear-gradient(to bottom, #fffefc, #f0fdfd)
    `,
    }),
    [bgPos],
  );

  return (
    <div
      className="relative min-h-screen w-full overflow-hidden transition-all duration-[3000ms] font-sans"
      style={containerStyle}
    >
      <main className="relative z-10 min-h-screen flex flex-col">
        {viewState === "WELCOME" && (
          <WelcomeScreen onEmotionSelect={handleEmotionSelect} />
        )}
        {viewState === "INTRO" && selectedPractice && (
          <IntroScreen
            practice={selectedPractice}
            onStart={handleStartPractice}
          />
        )}
        {viewState === "PRACTICE" && selectedPractice && (
          <PracticeScreen
            practice={selectedPractice}
            onComplete={handlePracticeComplete}
          />
        )}
        {viewState === "SUCCESS" && selectedPractice && (
          <ComfortScreen
            practice={selectedPractice}
            onClose={handleCloseSuccess}
          />
        )}
        {viewState === "REPEAT_PROMPT" && (
          <RepeatPopup
            onConfirm={handlePopupAction}
            onCancel={handlePopupAction}
            onRemindLater={handlePopupAction}
          />
        )}
      </main>
    </div>
  );
};

export default App;
