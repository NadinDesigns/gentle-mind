
import React from 'react';

interface RepeatPopupProps {
  onConfirm: () => void;
  onCancel: () => void;
  onRemindLater: () => void;
}

export const RepeatPopup: React.FC<RepeatPopupProps> = ({ onConfirm, onCancel, onRemindLater }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/20 backdrop-blur-sm animate-fade-in-up">
      <div className="bg-white/90 backdrop-blur-xl rounded-[2rem] p-8 w-full max-w-sm shadow-2xl border border-white/80 text-center space-y-6">
        
        <h3 className="text-xl font-bold text-slate-700 leading-snug">
          Хочешь повторить это завтра в это же время?
        </h3>

        <div className="flex flex-col gap-3">
          <button 
            onClick={onConfirm}
            className="w-full py-4 rounded-xl bg-gradient-to-r from-sky-100 to-pink-100 text-slate-700 font-semibold shadow-sm hover:shadow-md transition-all"
          >
            Да
          </button>
          <button 
            onClick={onCancel}
            className="w-full py-4 rounded-xl bg-slate-50 text-slate-500 font-medium hover:bg-slate-100 transition-all"
          >
            Нет
          </button>
          <button 
            onClick={onRemindLater}
            className="text-sm text-slate-400 font-medium py-2 hover:text-slate-600 transition-colors"
          >
            Напомнить позже
          </button>
        </div>

      </div>
    </div>
  );
};
