
import React from 'react';
import { ApiData } from '../types';
import EntityCard from './EntityCard';
import SqlViewer from './SqlViewer';
import ResultTable from './ResultTable';
import DebugLog from './DebugLog';

interface ResultDisplayProps {
  data: ApiData;
}

const ResultDisplay: React.FC<ResultDisplayProps> = ({ data }) => {
  const { nlp_result, query_result } = data;
  
  // Safe check for entities to prevent crash
  const entities = nlp_result?.entities || {};
  
  return (
    <div className="space-y-6 animate-fade-in-up">
      {/* 1. Query Result Table (Most Important) */}
      {query_result && query_result.rows && (
        <div className="w-full">
          <ResultTable rows={query_result.rows} />
        </div>
      )}

      {/* 2. Analysis Section (Entities & SQL) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Entities */}
        <div className="lg:col-span-1">
           <EntityCard entities={entities} />
        </div>
        
        {/* Right: SQL */}
        <div className="lg:col-span-2">
          <SqlViewer sql={nlp_result?.sql || '-- No SQL Generated'} />
        </div>
      </div>

      {/* 3. Debug Trace (Optional, Collapsible) */}
      {nlp_result?.debug_trace && nlp_result.debug_trace.length > 0 && (
        <div className="w-full">
          <DebugLog traces={nlp_result.debug_trace} />
        </div>
      )}
      
      {/* Empty State Handling */}
      {!nlp_result && !query_result && (
         <div className="p-8 text-center text-slate-400 bg-slate-50 rounded-xl border border-slate-100 border-dashed">
            无有效数据返回
         </div>
      )}
    </div>
  );
};

export default ResultDisplay;
