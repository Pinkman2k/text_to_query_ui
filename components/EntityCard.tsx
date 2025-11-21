import React from 'react';
import { Tag, Code, FileText } from 'lucide-react';
import { NlpEntities } from '../types';

interface EntityCardProps {
  entities: NlpEntities;
}

const EntityCard: React.FC<EntityCardProps> = ({ entities }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 h-full">
      <h3 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
        <Tag size={16} />
        识别到的实体
      </h3>
      
      <div className="space-y-4">
        {Object.entries(entities).map(([key, value]) => (
          <div key={key} className="group">
            <div className="flex items-center justify-between mb-1">
              {/* 简单的键名翻译映射，如果需要更复杂可以在这里处理 */}
              <span className="text-xs font-medium text-slate-400 uppercase">
                {key === 'bond_code' ? '债券代码' : 
                 key === 'function_api' ? 'API 函数' : 
                 key === 'function_cn' ? '中文指标' : key.replace('_', ' ')}
              </span>
            </div>
            <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100 group-hover:border-primary-200 group-hover:bg-primary-50 transition-all">
              <div className="bg-white p-2 rounded shadow-sm text-primary-600">
                {key === 'bond_code' ? <Code size={18} /> : <FileText size={18} />}
              </div>
              <span className="font-mono text-sm text-slate-700 font-medium">{value || 'N/A'}</span>
            </div>
          </div>
        ))}
        
        {Object.keys(entities).length === 0 && (
          <div className="text-slate-400 text-sm italic py-4 text-center">
            未在该查询中检测到实体。
          </div>
        )}
      </div>
    </div>
  );
};

export default EntityCard;