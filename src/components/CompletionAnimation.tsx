import React from 'react';

export const CompletionAnimation: React.FC = () => {
  return (
    <div className="relative flex items-center justify-center w-full h-full min-h-[200px]">
      {/* Expanding soft rings - Using #A7E8FF */}
      <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-pink-300/40 bg-pink-100/40 animate-expand-ring" style={{ animationDelay: '0s' }}></div>
      <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-[#A7E8FF]/40 bg-sky-100/30 animate-expand-ring" style={{ animationDelay: '0.8s' }}></div>
      <div className="absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-pink-200/40 bg-white/40 animate-expand-ring" style={{ animationDelay: '1.6s' }}></div>
      
      {/* Central Heart with Richer Pastel Gradient */}
      <div className="relative z-10 drop-shadow-md animate-heartbeat-3">
        <svg className="w-24 h-24 sm:w-28 sm:h-28" viewBox="0 0 24 24">
           <defs>
             <linearGradient id="sunsetHeart" x1="0%" y1="0%" x2="100%" y2="100%">
               <stop offset="10%" stopColor="#f9a8d4" /> {/* pink-300 */}
               <stop offset="100%" stopColor="#A7E8FF" /> {/* Replaced teal with Sky Blue */}
             </linearGradient>
           </defs>
           <path fill="url(#sunsetHeart)" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      </div>
      
      {/* Glow behind heart */}
      <div className="absolute w-20 h-20 bg-pink-200/50 rounded-full blur-xl z-0 animate-breathe"></div>
    </div>
  );
};