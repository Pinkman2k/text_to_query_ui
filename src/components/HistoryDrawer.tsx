
import React from 'react';
import { X, Clock, Search, AlertCircle, ChevronRight } from 'lucide-react';
import { HistoryItem } from '../types';

interface HistoryDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  history: HistoryItem[];
  onSelect: (item: HistoryItem) => void;
  selectedId?: string;
}

const HistoryDrawer: React.FC<HistoryDrawerProps> = ({ 
  isOpen, 
  onClose, 
  history, 
  onSelect,
  selectedId 
}) => {
  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-slate-100 flex justify-between items-center bg-slate-50">
          <div className="flex items-center gap-2 text-slate-700 font-semibold">
            <Clock size={18} />
            <h3>本次会话历史</h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-2 space-y-2">
          {history.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-slate-400 text-sm gap-2">
              <Clock size={32} className="opacity-20" />
              <p>暂无历史记录</p>
            </div>
          ) : (
            history.map((item) => (
              <button
                key={item.id}
                onClick={() => onSelect(item)}
                className={`w-full text-left p-3 rounded-xl border transition-all group relative overflow-hidden ${
                  selectedId === item.id 
                    ? 'bg-primary-50 border-primary-200 shadow-sm' 
                    : 'bg-white border-transparent hover:bg-slate-50 hover:border-slate-200'
                }`}
              >
                <div className="flex items-start gap-3 mb-1">
                  <div className={`mt-0.5 shrink-0 ${item.error ? 'text-red-500' : 'text-primary-500'}`}>
                    {item.error ? <AlertCircle size={14} /> : <Search size={14} />}
                  </div>
                  <p className={`text-sm font-medium line-clamp-2 ${selectedId === item.id ? 'text-primary-900' : 'text-slate-700'}`}>
                    {item.query}
                  </p>
                </div>
                <div className="flex justify-between items-center pl-6">
                  <span className="text-[10px] text-slate-400">
                    {new Date(item.timestamp).toLocaleTimeString()}
                  </span>
                  {selectedId === item.id && (
                    <ChevronRight size={14} className="text-primary-400" />
                  )}
                </div>
              </button>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default HistoryDrawer;
