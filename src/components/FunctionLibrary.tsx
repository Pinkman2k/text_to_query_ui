
import React, { useState } from 'react';
import { bondData } from '../data/bondData';
import { Search, Copy, X, Database, Check } from 'lucide-react';

interface FunctionLibraryProps {
  isOpen: boolean;
  onClose: () => void;
}

const FunctionLibrary: React.FC<FunctionLibraryProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [notification, setNotification] = useState<string | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!isOpen) return null;

  const functions = Object.entries(bondData.func_cn_to_info);
  
  const filteredFunctions = functions.filter(([name, info]) => {
    const searchLower = searchTerm.toLowerCase();
    return name.toLowerCase().includes(searchLower) || 
           (info as any).api.toLowerCase().includes(searchLower);
  });

  const copyToClipboard = async (text: string) => {
    try {
      // 1. Try Modern Clipboard API
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(text);
      } else {
        // 2. Fallback for older browsers or non-secure contexts (http)
        const textArea = document.createElement("textarea");
        textArea.value = text;
        
        // Ensure it's not visible but part of the DOM
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
        } catch (err) {
          console.error('Fallback copy failed', err);
          setNotification('复制失败，请手动复制');
          document.body.removeChild(textArea);
          return;
        }
        
        document.body.removeChild(textArea);
      }

      // Success Feedback
      setCopiedKey(text);
      setNotification(`已复制: ${text}`);
      setTimeout(() => {
        setNotification(null);
        setCopiedKey(null);
      }, 2000);

    } catch (err) {
      console.error('Copy failed', err);
      setNotification('复制失败');
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 animate-fade-in">
      <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[85vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-100 p-2 rounded-lg text-indigo-600">
              <Database size={20} />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-800 leading-none">函数/指标库</h2>
              <p className="text-xs text-slate-400 mt-1">点击卡片复制函数名称</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
             <span className="bg-slate-100 text-slate-500 px-2.5 py-0.5 rounded-full text-xs font-medium">
              {filteredFunctions.length} 个结果
            </span>
            <button 
              onClick={onClose}
              className="p-2 hover:bg-slate-200 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Search */}
        <div className="p-4 border-b border-slate-100 bg-white">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="搜索函数名称或 API 代码..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-100 focus:border-primary-400 transition-all text-sm"
              autoFocus
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 bg-slate-50/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredFunctions.map(([name, info]: [string, any]) => (
              <div 
                key={name} 
                className={`group p-3 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                  copiedKey === name 
                    ? 'bg-green-50 border-green-200 ring-1 ring-green-200' 
                    : 'bg-white border-slate-200 hover:border-primary-300 hover:shadow-md hover:-translate-y-0.5'
                }`}
                onClick={() => copyToClipboard(name)}
              >
                <div className="flex justify-between items-start mb-1">
                  <h3 className={`font-semibold text-sm truncate pr-6 ${copiedKey === name ? 'text-green-700' : 'text-slate-700 group-hover:text-primary-700'}`} title={name}>
                    {name}
                  </h3>
                  <div className={`absolute top-3 right-3 transition-all ${copiedKey === name ? 'opacity-100 scale-110' : 'opacity-0 group-hover:opacity-100'}`}>
                     {copiedKey === name ? <Check size={16} className="text-green-600" /> : <Copy size={14} className="text-slate-400" />}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-3">
                  <code className="text-[10px] font-mono text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded group-hover:bg-white border border-transparent group-hover:border-slate-100 select-all">
                    {info.api}
                  </code>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">{info.dataType}</span>
                </div>
              </div>
            ))}
            
            {filteredFunctions.length === 0 && (
              <div className="col-span-full py-12 text-center text-slate-400 flex flex-col items-center">
                <Search size={48} className="opacity-20 mb-4" />
                <p>未找到匹配的函数</p>
              </div>
            )}
          </div>
        </div>
        
        {/* Notification Toast (Fixed at bottom of modal) */}
        {notification && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-slate-800 text-white px-4 py-2 rounded-lg text-sm shadow-lg animate-fade-in flex items-center gap-2">
            <Check size={14} className="text-green-400" />
            {notification}
          </div>
        )}
      </div>
    </div>
  );
};

export default FunctionLibrary;
