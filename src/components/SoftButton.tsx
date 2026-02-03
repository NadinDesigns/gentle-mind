import React from "react";

interface SoftButtonProps {
  primaryText: string;
  secondaryText?: string;
  onClick: () => void;
  delay?: number;
  className?: string;
  isAccent?: boolean;
}

export const SoftButton: React.FC<SoftButtonProps> = ({
  primaryText,
  secondaryText,
  onClick,
  delay = 0,
  className = "",
  isAccent = false,
}) => {
  return (
    <button
      onClick={onClick}
      style={{ animationDelay: `${delay}ms` }}
      className={`
        animate-fade-in-up opacity-0
        w-full py-5 px-6
        rounded-[2rem]
        text-lg font-medium tracking-wide
        shadow-[0_8px_30px_-10px_rgba(100,130,140,0.15)]
        hover:shadow-[0_15px_35px_-10px_rgba(100,130,140,0.25)]
        transition-all duration-500 ease-out
        transform hover:-translate-y-1 active:scale-[0.98]
        outline-none focus:ring-2 focus:ring-sky-200/50
        h-24
        flex flex-col items-center justify-center gap-1
        ${
          isAccent
            ? "bg-gradient-to-r from-sky-100 via-white to-pink-100 border-white/70 text-slate-700"
            : "bg-white/80 hover:bg-white/95 border-white/60 text-slate-600"
        }
        backdrop-blur-md border
        ${className}
      `}
    >
      <span className="block font-semibold text-center">{primaryText}</span>
      {secondaryText && (
        <span
          className={`block text-sm ${
            isAccent ? "text-slate-500" : "text-slate-400"
          } font-normal`}
        >
          {secondaryText}
        </span>
      )}
    </button>
  );
};
