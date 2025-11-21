
import React, { useState } from 'react';
import { Search, Send, AlertCircle } from 'lucide-react';
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
  // State
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  // Result State
  const [currentResult, setCurrentResult] = useState<ApiData | null>(null);
  
  // History State
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  
  // UI State
  const [isMockMode, setIsMockMode] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  const [selectedHistoryId, setSelectedHistoryId] = useState<string | undefined>(undefined);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);
    setError(null);
    setCurrentResult(null); // Clear current result while loading
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
        setError(response.msg || '服务器返回错误');
        // Add failed item to history
         const failedItem: HistoryItem = {
           id: startTimestamp.toString(),
           query: currentQuery,
           error: response.msg || '服务器返回错误',
           timestamp: startTimestamp
         };
         setHistory(prev => [failedItem, ...prev]);
         setSelectedHistoryId(failedItem.id);
      }
    } catch (err: any) {
      const errMsg = '连接服务器失败，请检查后端服务是否启动，或尝试使用模拟模式。';
      setError(errMsg);
      
      const failedItem: HistoryItem = {
        id: startTimestamp.toString(),
        query: currentQuery,
        error: errMsg,
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

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden font-sans">
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
        <div className="max-w-5xl mx-auto px-4 py-8 sm:px-6 lg:px-8 pb-32">
          
          {/* Search Section */}
          <div className={`transition-all duration-500 ease-in-out ${currentResult || loading || error ? 'mb-8' : 'min-h-[60vh] flex flex-col justify-center'}`}>
            
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

                {/* Suggestions Chips (Only show when nothing happened) */}
                {!currentResult && !loading && !error && (
                  <div className="flex flex-wrap justify-center gap-2 animate-fade-in delay-100">
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
                )}

                {/* Mock Mode Toggle */}
                <div className="flex justify-center">
                  <label className="inline-flex items-center cursor-pointer group">
                    <input 
                      type="checkbox" 
                      checked={isMockMode} 
                      onChange={(e) => setIsMockMode(e.target.checked)} 
                      className="sr-only peer"
                    />
                    <span className="mr-3 text-xs font-medium text-slate-400 group-hover:text-slate-600 transition-colors">模拟数据模式</span>
                    <div className="relative w-9 h-5 bg-slate-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-600"></div>
                  </label>
                </div>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="max-w-3xl mx-auto mt-8 animate-fade-in-up">
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
            <div className="max-w-5xl mx-auto mt-10 space-y-6 animate-pulse">
              <div className="h-64 bg-slate-200 rounded-xl"></div>
              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-1 h-48 bg-slate-200 rounded-xl"></div>
                <div className="col-span-2 h-48 bg-slate-200 rounded-xl"></div>
              </div>
            </div>
          )}

          {/* Result Display */}
          {currentResult && !loading && (
            <div className="mt-6">
              <ResultDisplay data={currentResult} />
            </div>
          )}

        </div>
      </main>
    </div>
  );
}

export default App;
