import React from 'react';
import { Database, Activity, Book } from 'lucide-react';

interface HeaderProps {
  onOpenLibrary?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenLibrary }) => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary-600 p-2 rounded-lg text-white">
            <Database size={20} />
          </div>
          <div>
            <h1 className="font-bold text-lg text-slate-900 leading-tight">BondSQL <span className="text-primary-600">AI</span></h1>
            <p className="text-xs text-slate-500 font-medium">自然语言转 SQL 引擎</p>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
           <button 
             onClick={onOpenLibrary}
             className="hidden sm:flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-primary-600 bg-slate-50 hover:bg-primary-50 border border-slate-200 hover:border-primary-200 px-3 py-1.5 rounded-lg transition-all"
           >
             <Book size={16} />
             <span>函数库</span>
           </button>
           
           <div className="flex items-center gap-2 text-sm text-slate-500 bg-green-50 border border-green-100 text-green-700 px-3 py-1.5 rounded-full">
            <Activity size={14} className="text-green-500" />
            <span className="hidden sm:inline">系统运行中</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
