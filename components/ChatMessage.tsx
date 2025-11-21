
import React from 'react';
import { Message } from '../types';
import SqlViewer from './SqlViewer';
import EntityCard from './EntityCard';
import DebugLog from './DebugLog';
import ResultTable from './ResultTable';
import { Bot, User, AlertCircle } from 'lucide-react';

interface ChatMessageProps {
  message: Message;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  if (isUser) {
    return (
      <div className="flex justify-end mb-8">
        <div className="flex max-w-3xl items-start gap-3 flex-row-reverse">
          <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center shrink-0 shadow-sm text-white">
            <User size={20} />
          </div>
          <div className="bg-primary-600 text-white rounded-2xl rounded-tr-none px-6 py-4 shadow-md">
            <p className="text-base leading-relaxed whitespace-pre-wrap">{message.content}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-start mb-12">
      <div className="flex max-w-4xl items-start gap-3 w-full">
        <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 shadow-sm text-slate-600">
          <Bot size={20} />
        </div>
        
        <div className="flex-1 space-y-6 min-w-0">
          {/* Loading State or Error State or Content */}
          {message.error ? (
             <div className="p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-700">
                <AlertCircle size={20} className="shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold">处理请求时出错</h3>
                  <p className="text-sm mt-1 opacity-90">{message.error}</p>
                </div>
             </div>
          ) : !message.data ? (
            <div className="flex items-center gap-2 text-slate-500 bg-white px-4 py-3 rounded-xl border border-slate-100 shadow-sm w-fit">
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-primary-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
              <span className="text-sm font-medium ml-2">AI 正在思考与查询...</span>
            </div>
          ) : (
            <>
               {/* 1. Query Result Table */}
               {message.data.query_result && message.data.query_result.rows && (
                  <div className="w-full animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <ResultTable rows={message.data.query_result.rows} />
                  </div>
                )}

                {/* NLP Result Section - Check if exists */}
                {message.data.nlp_result && (
                    <>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                          {/* Left: Entities */}
                          <div className="lg:col-span-1">
                            <EntityCard entities={message.data.nlp_result.entities || {}} />
                          </div>
                          
                          {/* Right: SQL */}
                          <div className="lg:col-span-2">
                            <SqlViewer sql={message.data.nlp_result.sql || '-- No SQL Generated'} />
                          </div>
                        </div>

                        {/* Bottom: Debug Trace */}
                        {message.data.nlp_result.debug_trace && message.data.nlp_result.debug_trace.length > 0 && (
                          <div className="w-full animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                            <DebugLog traces={message.data.nlp_result.debug_trace} />
                          </div>
                        )}
                    </>
                )}
                
                {!message.data.nlp_result && !message.data.query_result && (
                    <div className="text-slate-500 italic">服务返回了空数据。</div>
                )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
