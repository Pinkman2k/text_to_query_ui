
import React, { useState, useRef, useEffect } from 'react';
import { Search, Sparkles, Send, Trash2 } from 'lucide-react';
import Header from './components/Header';
import ChatMessage from './components/ChatMessage';
import SuggestionInput from './components/SuggestionInput';
import FunctionLibrary from './components/FunctionLibrary';
import { convertTextToSql, mockConvertTextToSql } from './services/nlpService';
import { Message } from './types';

const SUGGESTIONS = [
  "查一下2205474.IB的收益率",
  "查询210215的估值",
  "190210.IB的收益率是多少",
  "获取证券 200012 的票面利率"
];

function App() {
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [isMockMode, setIsMockMode] = useState(false);
  const [showLibrary, setShowLibrary] = useState(false);
  
  // Chat History State
  const [messages, setMessages] = useState<Message[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSearch = async () => {
    if (!query.trim()) return;

    const currentQuery = query;
    setQuery(''); // Clear input immediately
    setLoading(true);

    // Add User Message
    const userMsgId = Date.now().toString();
    const userMsg: Message = {
      id: userMsgId,
      role: 'user',
      content: currentQuery,
      timestamp: Date.now(),
    };
    
    // Add Placeholder Assistant Message
    const assistantMsgId = (Date.now() + 1).toString();
    const assistantMsg: Message = {
      id: assistantMsgId,
      role: 'assistant',
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMsg, assistantMsg]);

    try {
      const response = isMockMode 
        ? await mockConvertTextToSql(currentQuery)
        : await convertTextToSql(currentQuery);
      
      // Update Assistant Message with Result
      setMessages(prev => prev.map(msg => {
        if (msg.id === assistantMsgId) {
          if (response.code === 200) {
            return { ...msg, data: response.data };
          } else {
            return { ...msg, error: response.msg || '未知服务器错误' };
          }
        }
        return msg;
      }));

    } catch (err: any) {
      setMessages(prev => prev.map(msg => {
        if (msg.id === assistantMsgId) {
          return { ...msg, error: `连接本地后端失败。请确保服务器正运行在 localhost:5000，或者尝试切换到模拟模式。` };
        }
        return msg;
      }));
    } finally {
      setLoading(false);
    }
  };

  const clearHistory = () => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col h-screen bg-slate-50 overflow-hidden">
      <Header onOpenLibrary={() => setShowLibrary(true)} />
      <FunctionLibrary isOpen={showLibrary} onClose={() => setShowLibrary(false)} />

      <main className="flex-1 overflow-y-auto p-4 sm:p-6 scroll-smooth">
        <div className="max-w-4xl mx-auto pb-32">
          
          {/* Empty State */}
          {messages.length === 0 && (
            <div className="min-h-[60vh] flex flex-col items-center justify-center text-center space-y-8 animate-fade-in">
              <div>
                <h2 className="text-4xl font-bold text-slate-900 mb-4">
                  智能 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-indigo-600">债券数据库</span> 助手
                </h2>
                <p className="text-slate-500 text-lg max-w-lg mx-auto">
                  向我提问关于债券代码、名称、或者指标数据的问题。
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-2xl w-full px-4">
                {SUGGESTIONS.map((s, i) => (
                  <button
                    key={i}
                    onClick={() => setQuery(s)}
                    className="text-sm text-left bg-white border border-slate-200 hover:border-primary-300 hover:shadow-md p-4 rounded-xl text-slate-600 transition-all"
                  >
                    "{s}"
                  </button>
                ))}
              </div>

              {/* Mock Mode Toggle for Empty State */}
               <label className="inline-flex items-center cursor-pointer bg-white px-4 py-2 rounded-full border border-slate-200 shadow-sm">
                  <input 
                    type="checkbox" 
                    checked={isMockMode} 
                    onChange={(e) => setIsMockMode(e.target.checked)} 
                    className="sr-only peer"
                  />
                  <div className="relative w-9 h-5 bg-slate-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary-600"></div>
                  <span className="ms-3 text-sm font-medium text-slate-600">演示 / 模拟模式</span>
                </label>
            </div>
          )}

          {/* Chat Messages */}
          <div className="space-y-6">
            {messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))}
            <div ref={messagesEndRef} />
          </div>
        </div>
      </main>

      {/* Input Area - Fixed at Bottom */}
      <div className="bg-white border-t border-slate-200 p-4 sticky bottom-0 z-10 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
        <div className="max-w-4xl mx-auto">
           {/* Control Bar (Clear History, Mock Toggle in non-empty state) */}
           {messages.length > 0 && (
             <div className="flex justify-between items-center mb-3 px-1">
               <button 
                 onClick={clearHistory}
                 className="text-xs flex items-center gap-1.5 text-slate-400 hover:text-red-500 transition-colors"
               >
                 <Trash2 size={14} /> 清空历史
               </button>

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
           )}

           <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-indigo-500 rounded-2xl blur opacity-10 group-hover:opacity-20 transition-opacity duration-200"></div>
            <div className="relative bg-white rounded-2xl shadow-lg border border-slate-200 flex items-center p-2 gap-2">
              <div className="pl-3 text-slate-400">
                 <Search size={20} />
              </div>
              
              <SuggestionInput 
                value={query}
                onChange={setQuery}
                onSearch={handleSearch}
                disabled={loading}
                placeholder="请输入自然语言查询..."
              />

              <button
                onClick={handleSearch}
                disabled={loading || !query.trim()}
                className="bg-slate-900 hover:bg-slate-800 disabled:bg-slate-300 disabled:cursor-not-allowed text-white p-2.5 rounded-xl transition-all flex items-center justify-center shrink-0"
              >
                {loading ? (
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <Send size={18} />
                )}
              </button>
            </div>
          </div>
          <div className="text-center mt-2 text-xs text-slate-400">
            BondSQL AI 可能通过 Mock 数据进行演示。
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
