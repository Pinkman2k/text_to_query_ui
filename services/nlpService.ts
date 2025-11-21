import { ApiResponse } from '../types';

// 为空字符串，以便使用 Vite 的代理功能 (请求 /api/... 而不是 http://localhost:5000/api/...)
const API_URL = ''; 

export const convertTextToSql = async (query: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_URL}/api/text2sql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`服务端错误: ${response.status}`);
    }

    const result: ApiResponse = await response.json();
    return result;
  } catch (error) {
    console.error("请求 NLP 服务失败:", error);
    throw error;
  }
};

// 模拟数据 helper，用于在后端未启动时演示
export const mockConvertTextToSql = async (query: string): Promise<ApiResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 800)); // 模拟网络延迟

  return {
    code: 200,
    msg: "success",
    data: {
      nlp_result: {
        entities: {
          bond_code: "2205474.IB",
          function_api: "val_yld_cfets_val",
          function_cn: "估值收益率"
        },
        sql: "select val_yld_cfets_val(sec_code_par) from security_info where sec_code_par='2205474.IB'",
        debug_trace: [
            "Entity: 2205474.IB (BOND_CODE)",
            "Entity: 收益率 (FUNCTION)",
            "Mapped Func '收益率' to '估值收益率' (synonym)"
        ]
      },
      query_result: {
        code: 200,
        message: "",
        rows: [
          {
            "val_yld_cfets_val": "2.85%"
          }
        ],
        raw: {}
      }
    }
  };
};