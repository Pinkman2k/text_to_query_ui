import React from 'react';
import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface SqlViewerProps {
  sql: string;
}

const SqlViewer: React.FC<SqlViewerProps> = ({ sql }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(sql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-full bg-slate-900 rounded-xl overflow-hidden shadow-lg border border-slate-700">
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 border-b border-slate-700">
        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">生成的 SQL 语句</span>
        <button
          onClick={handleCopy}
          className="text-slate-400 hover:text-white transition-colors p-1 rounded hover:bg-slate-700"
          title="复制到剪贴板"
        >
          {copied ? <Check size={16} className="text-green-400" /> : <Copy size={16} />}
        </button>
      </div>
      <div className="p-6 overflow-x-auto">
        <pre className="font-mono text-sm md:text-base leading-relaxed text-green-400 whitespace-pre-wrap break-all">
          <code>{sql}</code>
        </pre>
      </div>
    </div>
  );
};

export default SqlViewer;