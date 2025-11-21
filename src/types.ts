
export interface NlpEntities {
  bond_code?: string;
  function_api?: string;
  function_cn?: string;
  [key: string]: string | undefined;
}

export interface NlpResult {
  sql: string;
  entities: NlpEntities;
  debug_trace?: string[];
}

export interface QueryRow {
  [key: string]: any;
}

export interface QueryResult {
  code: number;
  message: string;
  rows: QueryRow[];
  raw?: any;
  traceId?: string;
}

export interface ApiData {
  nlp_result: NlpResult;
  query_result?: QueryResult;
}

export interface ApiResponse {
  code: number;
  msg: string;
  data: ApiData;
}

export interface ApiError {
  message: string;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content?: string;
  data?: ApiData;
  error?: string;
  timestamp: number;
}

export interface FunctionInfo {
  api: string;
  dataType: string;
  example_sql: string;
}

export interface SuggestionItem {
  type: 'bond' | 'function';
  label: string;
  value: string;
  subLabel?: string;
}
