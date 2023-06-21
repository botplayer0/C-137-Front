import { ResCaseDetail } from "@/types/apicase/api.type";
import http, { IResponse } from "@/utils/http";


// 查询用例
export const apiCaseDetail = async (caseId: number) => {
  const response = await http.get<ResCaseDetail>(`/api/case/${caseId}`)
  return response
}
