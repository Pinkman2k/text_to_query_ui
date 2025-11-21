
import React, { useState } from 'react';
import { Search, Send, AlertCircle, Trash2 } from 'lucide-react';
import Header from './components/Header';
import SuggestionInput from './components/SuggestionInput';
import FunctionLibrary from './components/FunctionLibrary';
import HistoryDrawer from './components/HistoryDrawer';
import ResultDisplay from './components/ResultDisplay';
import { convertTextToSql, mockConvertTextToSql } from './services/nlpService';
import { HistoryItem, ApiData } from './types';

const SUGGESTIONS = [
  "查一下2205474.IB的收益率",
  "查询210215的估值",
  "190210.IB的收益率是多少",
  "获取证券 200012 的票面利率"
];

function App() {
  // Search State
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Result State
  const [currentResult, setCurrentResult] = useState<ApiData | null>(null);
  
  // History State
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [selectedHistoryId, setSelectedHistoryId] = useState<string | undefined>(undefined);
  
  // UI State
  const [isMockMode, setIsMockMode] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setCurrentResult(null); // Clear current view to show loading state
    setSelectedHistoryId(undefined);

    const startTimestamp = Date.now();
    const currentQuery = query;

    try {
      const response = isMockMode 
        ? await mockConvertTextToSql(currentQuery)
        : await convertTextToSql(currentQuery);

      if (response.code === 200) {
        const newData = response.data;
        setCurrentResult(newData);
        
        // Add to history
        const newHistoryItem: HistoryItem = {
          id: startTimestamp.toString(),
          query: currentQuery,
          data: newData,
          timestamp: startTimestamp
        };
        setHistory(prev => [newHistoryItem, ...prev]); // Newest first
        setSelectedHistoryId(newHistoryItem.id);
      } else {
        const errorMsg = response.msg || '服务器返回错误';
        setError(errorMsg);
        
        // Optional: Add failed query to history
        const failedItem: HistoryItem = {
          id: startTimestamp.toString(),
          query: currentQuery,
          error: errorMsg,
          timestamp: startTimestamp
        };
        setHistory(prev => [failedItem, ...prev]);
        setSelectedHistoryId(failedItem.id);
      }
    } catch (err: any) {
      const errorMsg = '连接服务器失败，请检查后端服务是否启动，或尝试使用模拟模式。';
      setError(errorMsg);
      
      const failedItem: HistoryItem = {
        id: startTimestamp.toString(),
        query: currentQuery,
        error: errorMsg,
        timestamp: startTimestamp
      };
      setHistory(prev => [failedItem, ...prev]);
      setSelectedHistoryId(failedItem.id);
    } finally {
      setLoading(false);
    }
  };

  const handleRestoreHistory = (item: HistoryItem) => {
    setQuery(item.query);
    if (item.data) {
      setCurrentResult(item.data);
      setError(null);
    } else if (item.error) {
      setError(item.error);
      setCurrentResult(null);
    }
    setSelectedHistoryId(item.id);
    setShowHistory(false); // Close drawer on mobile/desktop after selection
  };

  const clearHistory = () => {
    setHistory([]);
    setSelectedHistoryId(undefined);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden font-sans text-slate-900">
      <Header 
        onOpenLibrary={() => setShowLibrary(true)} 
        onOpenHistory={() => setShowHistory(true)}
        historyCount={history.length}
      />
      
      <FunctionLibrary isOpen={showLibrary} onClose={() => setShowLibrary(false)} />
      
      <HistoryDrawer 
        isOpen={showHistory} 
        onClose={() => setShowHistory(false)} 
        history={history}
        onSelect={handleRestoreHistory}
        selectedId={selectedHistoryId}
      />

      <main className="flex-1 overflow-y-auto scroll-smooth">
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 pb-32 min-h-full flex flex-col">
          
          {/* Search Section - Centered initially, moves up when there is a result */}
          <div className={`transition-all duration-500 ease-in-out flex-shrink-0 ${currentResult || loading || error ? 'mt-4 mb-8' : 'flex-1 flex flex-col justify-center mb-[20vh]'}`}>
            
            {/* Logo/Title when no result */}
            {!currentResult && !loading && !error && (
              <div className="text-center mb-10 animate-fade-in">
                 <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
                  智能 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">债券数据库</span> 助手
                </h2>
                <p className="text-slate-500 text-lg">
                  输入自然语言，立即获取债券指标数据与 SQL 查询。
                </p>
              </div>
            )}

            {/* Search Input Box */}
            <div className="w-full max-w-3xl mx-auto space-y-4">
               <div className="relative group z-10">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative bg-white rounded-2xl shadow-xl border border-slate-200 flex items-center p-2 gap-2 transition-all focus-within:ring-2 focus-within:ring-primary-100 focus-within:border-primary-300">
                    <div className="pl-3 text-slate-400">
                       <Search size={22} />
                    </div>
                    
                    <SuggestionInput 
                      value={query}
                      onChange={setQuery}
                      onSearch={handleSearch}
                      disabled={loading}
                      placeholder="例如：查一下2205474.IB的收益率..."
                    />

                    <button
                      onClick={handleSearch}
                      disabled={loading || !query.trim()}
                      className="bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white p-3 rounded-xl transition-all flex items-center justify-center shrink-0 shadow-md active:scale-95"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      ) : (
                        <Send size={18} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Suggestions Chips & Mock Toggle (Only show when no result to keep UI clean) */}
                {!currentResult && !loading && !error && (
                  <div className="space-y-6 animate-fade-in delay-100">
                    <div className="flex flex-wrap justify-center gap-2">
                      {SUGGESTIONS.map((s, i) => (
                        <button
                          key={i}
                          onClick={() => setQuery(s)}
                          className="text-xs bg-white border border-slate-200 hover:border-primary-300 hover:text-primary-600 text-slate-500 px-3 py-1.5 rounded-full transition-colors shadow-sm"
                        >
                          {s}
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-center">
                      <label className="inline-flex items-center cursor-pointer group bg-white px-4 py-2 rounded-full border border-slate-100 shadow-sm">
                        <input 
                          type="checkbox" 
                          checked={isMockMode} 
                          onChange={(e) => setIsMockMode(e.target.checked)} 
                          className="sr-only peer"
                        />
                        <span className="mr-3 text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors">模拟数据演示模式</span>
                        <div className="relative w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-600"></div>
                      </label>
                    </div>
                  </div>
                )}
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="max-w-3xl mx-auto w-full mb-8 animate-fade-in-up">
              <div className="bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3 text-red-700 shadow-sm">
                <AlertCircle className="shrink-0 mt-0.5" size={20} />
                <div>
                  <h3 className="font-semibold">请求失败</h3>
                  <p className="text-sm mt-1 opacity-90">{error}</p>
                </div>
              </div>
            </div>
          )}

          {/* Loading State (Skeleton) */}
          {loading && !currentResult && (
            <div className="max-w-5xl w-full mx-auto space-y-6 animate-pulse">
              <div className="h-64 bg-slate-200/70 rounded-xl"></div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-1 h-48 bg-slate-200/70 rounded-xl"></div>
                <div className="lg:col-span-2 h-48 bg-slate-200/70 rounded-xl"></div>
              </div>
            </div>
          )}

          {/* Result Display */}
          {currentResult && !loading && (
            <div className="w-full">
               <div className="flex justify-between items-center mb-4 max-w-5xl mx-auto">
                 <h3 className="text-lg font-semibold text-slate-700">查询详情</h3>
                 
                 <label className="inline-flex items-center cursor-pointer">
                    <span className="mr-2 text-xs font-medium text-slate-400">模拟模式</span>
                    <input 
                      type="checkbox" 
                      checked={isMockMode} 
                      onChange={(e) => setIsMockMode(e.target.checked)} 
                      className="sr-only peer"
                    />
                    <div className="relative w-7 h-4 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
               </div>
              <ResultDisplay data={currentResult} />
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

export default App;
