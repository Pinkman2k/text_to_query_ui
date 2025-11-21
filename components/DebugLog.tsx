import React, { useState } from 'react';
import { Terminal, ChevronDown, ChevronUp } from 'lucide-react';

interface DebugLogProps {
  traces: string[];
}

const DebugLog: React.FC<DebugLogProps> = ({ traces }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-slate-50 hover:bg-slate-100 transition-colors"
      >
        <div className="flex items-center gap-2 text-slate-600">
          <Terminal size={16} />
          <span className="font-semibold text-sm">执行逻辑追踪</span>
          <span className="text-xs bg-slate-200 text-slate-600 px-2 py-0.5 rounded-full">
            {traces.length} 步
          </span>
        </div>
        {isOpen ? <ChevronUp size={16} className="text-slate-400" /> : <ChevronDown size={16} className="text-slate-400" />}
      </button>
      
      {isOpen && (
        <div className="p-4 bg-slate-900 max-h-60 overflow-y-auto">
          <ul className="space-y-2">
            {traces.map((trace, index) => (
              <li key={index} className="flex items-start gap-3 text-xs md:text-sm font-mono">
                <span className="text-slate-500 select-none w-6 text-right">{index + 1}</span>
                <span className={`${trace.includes('Entity') || trace.includes('实体') ? 'text-yellow-400' : 'text-slate-300'}`}>
                  {trace}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DebugLog;