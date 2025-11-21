import React, { useState } from 'react';
import { bondData } from '../data/bondData';
import { Search, Copy, X, Database } from 'lucide-react';

interface FunctionLibraryProps {
  isOpen: boolean;
  onClose: () => void;
}

const FunctionLibrary: React.FC<FunctionLibraryProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState<string | null>(null);

  if (!isOpen) return null;

  const functions = Object.entries(bondData.func_cn_to_info);
  
  const filteredFunctions = functions.filter(([name, info]) => {
    const searchLower = searchTerm.toLowerCase();
    return name.toLowerCase().includes(searchLower) || 
           (info as any).api.toLowerCase().includes(searchLower);
  });

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setNotification(`已复制: ${text}`);
    setTimeout(() => setNotification(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
              <Database size={20} />
            </div>
            <h2 className="text-lg font-bold text-slate-800">函数/指标库</h2>
            <span className="bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
              {functions.length} 个指标
            </span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-slate-100">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="搜索函数名称或 API 代码..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-400 transition-all text-sm"
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredFunctions.map(([name, info]: [string, any]) => (
              <div 
                key={name} 
                className="group p-3 rounded-xl border border-slate-200 hover:border-primary-200 hover:shadow-sm hover:bg-primary-50/30 transition-all cursor-pointer"
                onClick={() => copyToClipboard(name)}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-semibold text-slate-700 text-sm group-hover:text-primary-700 truncate" title={name}>{name}</h3>
                  <Copy size={14} className="text-slate-300 group-hover:text-primary-400 opacity-0 group-hover:opacity-100 transition-all" />
                </div>
                <div className="flex items-center justify-between mt-2">
                  <code className="text-xs font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded group-hover:bg-white group-hover:text-primary-600">
                    {info.api}
                  </code>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">{info.dataType}</span>
                </div>
              </div>
            ))}
            
            {filteredFunctions.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-400">
                <p>未找到匹配的函数</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Footer / Notification */}
        <div className="px-6 py-3 bg-slate-50 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
          <span>点击卡片即可复制函数名称</span>
          {notification && (
            <span className="text-green-600 font-medium animate-fade-in">
              {notification}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FunctionLibrary;
