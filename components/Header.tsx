import React from 'react';
import { Database, Activity } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-primary-600 p-2 rounded-lg text-white">
            <Database size={20} />
          </div>
          <div>
            <h1 className="font-bold text-lg text-slate-900 leading-tight">BondSQL <span className="text-primary-600">AI</span></h1>
            <p className="text-xs text-slate-500 font-medium">自然语言转 SQL 引擎</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
          <Activity size={14} className="text-green-500" />
          <span>系统运行中</span>
        </div>
      </div>
    </header>
  );
};

export default Header;