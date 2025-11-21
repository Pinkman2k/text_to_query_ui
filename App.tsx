import React, { useState } from 'react';
import { Search, Sparkles, AlertCircle } from 'lucide-react';
import Header from './components/Header';
import SqlViewer from './components/SqlViewer';
import EntityCard from './components/EntityCard';
import DebugLog from './components/DebugLog';
import ResultTable from './components/ResultTable';
import { convertTextToSql, mockConvertTextToSql } from './services/nlpService';
import { ApiData } from './types';

const SUGGESTIONS = [
  "查一下2205474.IB的收益率",
  "查询210215的估值",
  "190210.IB的收益率是多少",
  "获取证券 200012 的票面利率"
];

function App() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<ApiData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isMockMode, setIsMockMode] = useState(false);

  const handleSearch = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setData(null);

    try {
      // 优先尝试真实 API，如果处于模拟模式则使用 mock
      const response = isMockMode 
        ? await mockConvertTextToSql(query)
        : await convertTextToSql(query);
      
      if (response.code === 200) {
        setData(response.data);
      } else {
        setError(response.msg || '未知服务器错误');
      }
    } catch (err: any) {
      // 处理 fetch 错误
      setError(`连接本地后端失败。请确保服务器正运行在 localhost:5000，或者尝试切换到模拟模式。`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <Header />

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        
        {/* Hero / Search Section */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            智能 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">债券数据库</span> 助手
          </h2>
          <p className="text-slate-500 text-lg mb-8">
            将自然语言问题即时转化为可执行的 SQL 查询语句并展示结果。
          </p>

          <form onSubmit={handleSearch} className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-200"></div>
            <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 flex items-center p-2">
              <Search className="text-slate-400 ml-4" size={24} />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="例如：查一下2205474.IB的收益率"
                className="flex-1 bg-transparent border-none outline-none px-4 py-3 text-lg text-slate-800 placeholder:text-slate-300"
              />
              <button
                type="submit"
                disabled={loading || !query.trim()}
                className="bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 text-white px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 min-w-[120px] justify-center"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    生成查询 <Sparkles size={16} />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Suggestions */}
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {SUGGESTIONS.map((s, i) => (
              <button
                key={i}
                onClick={() => {
                  setQuery(s);
                  // 可选：点击后自动提交
                }}
                className="text-xs bg-white border border-slate-200 hover:border-primary-300 hover:text-primary-600 px-3 py-1.5 rounded-full text-slate-500 transition-colors"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Mock Mode Toggle */}
          <div className="mt-4 flex items-center justify-center gap-2">
             <label className="inline-flex items-center cursor-pointer">
                <input 
                  type="checkbox" 
                  checked={isMockMode} 
                  onChange={(e) => setIsMockMode(e.target.checked)} 
                  className="sr-only peer"
                />
                <div className="relative w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-600"></div>
                <span className="ms-3 text-xs font-medium text-slate-400 dark:text-slate-300">演示 / 模拟模式</span>
              </label>
          </div>
        </div>

        {/* Error State */}
        {error && (
          <div className="max-w-3xl mx-auto mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-700">
            <AlertCircle size={20} className="shrink-0 mt-0.5" />
            <div>
              <h3 className="font-semibold">生成失败</h3>
              <p className="text-sm mt-1 opacity-90">{error}</p>
              {!isMockMode && (
                <button 
                  onClick={() => setIsMockMode(true)}
                  className="mt-2 text-xs font-semibold underline hover:text-red-800"
                >
                  尝试切换到模拟模式？
                </button>
              )}
            </div>
          </div>
        )}

        {/* Results Section */}
        {data && (
          <div className="animate-fade-in-up space-y-6">
            
            {/* 1. Query Result Table (最重要，放在显眼位置) */}
            {data.query_result && (
              <div className="w-full">
                <ResultTable rows={data.query_result.rows} />
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left: Entities */}
              <div className="lg:col-span-1">
                <EntityCard entities={data.nlp_result.entities} />
              </div>
              
              {/* Right: SQL */}
              <div className="lg:col-span-2">
                <SqlViewer sql={data.nlp_result.sql} />
              </div>
            </div>

            {/* Bottom: Debug Trace (如果有) */}
            {data.nlp_result.debug_trace && data.nlp_result.debug_trace.length > 0 && (
              <div className="w-full">
                <DebugLog traces={data.nlp_result.debug_trace} />
              </div>
            )}
          </div>
        )}

        {/* Empty State / Placeholder */}
        {!data && !loading && !error && (
          <div className="max-w-2xl mx-auto text-center py-12 opacity-40">
            <DatabaseIconPlaceholder />
            <p className="mt-4 text-slate-400 font-medium">等待输入查询...</p>
          </div>
        )}

      </main>
    </div>
  );
}

const DatabaseIconPlaceholder = () => (
  <svg className="w-32 h-32 mx-auto text-slate-200" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
    <ellipse cx="12" cy="5" rx="9" ry="3" />
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
  </svg>
);

export default App;