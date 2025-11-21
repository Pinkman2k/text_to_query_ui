import React from 'react';
import { Table, AlertCircle } from 'lucide-react';
import { QueryRow } from '../types';

interface ResultTableProps {
  rows: QueryRow[];
}

const ResultTable: React.FC<ResultTableProps> = ({ rows }) => {
  if (!rows || rows.length === 0) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 mb-4">
          <Table className="text-slate-400" size={24} />
        </div>
        <h3 className="text-slate-900 font-medium mb-1">无查询结果</h3>
        <p className="text-slate-500 text-sm">SQL 执行成功，但数据库没有返回任何匹配的数据。</p>
      </div>
    );
  }

  // 动态获取表头
  const headers = Object.keys(rows[0]);

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden flex flex-col h-full">
      <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center gap-2">
        <Table className="text-primary-600" size={18} />
        <h3 className="font-semibold text-slate-800">查询结果</h3>
        <span className="text-xs bg-primary-100 text-primary-700 px-2 py-0.5 rounded-full ml-auto">
          {rows.length} 条记录
        </span>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-slate-50 border-b border-slate-200">
              {headers.map((header) => (
                <th key={header} className="px-6 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200">
            {rows.map((row, index) => (
              <tr key={index} className="hover:bg-slate-50 transition-colors">
                {headers.map((header) => (
                  <td key={`${index}-${header}`} className="px-6 py-3 text-sm text-slate-700 whitespace-nowrap">
                    {row[header]?.toString() || <span className="text-slate-300 italic">null</span>}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResultTable;