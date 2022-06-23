import { QueryResponse } from "../../types/fetch";
import { getRequest } from "../../utils/fetch";

interface IsNameTakenData {
  taken: boolean;
}

export function isNameTaken(name: string): QueryResponse<IsNameTakenData> {
  return getRequest(`/api/slug-taken?name=${name}`);
}
