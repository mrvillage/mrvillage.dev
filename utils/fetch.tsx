import { supabase } from "./supabase";

interface Response<T> {
  data: T;
  status: number;
  error?: string;
}

interface Request {
  url: string;
  method: string;
  body?: object;
  auth?: boolean;
}

export async function request<T = object>({
  url,
  method,
  body,
  auth = true,
}: Request): Promise<Response<T>> {
  const response = await fetch(url, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      authorization: auth
        ? `Bearer ${supabase.auth.session()?.access_token}`
        : "",
    },
  });
  const isJson = response.headers
    .get("Content-Type")
    ?.includes("application/json");
  let data;
  if (isJson) {
    data = response.body ? await response.json() : {};
  } else {
    data = {};
  }
  return {
    data,
    status: response.status,
    error: isJson ? data.error : "Invalid response",
  };
}

export function getRequest<T = object>(url: string, auth?: boolean) {
  return request<T>({ url, method: "GET", body: undefined, auth });
}

export function postRequest<T = object>(
  url: string,
  body: object,
  auth?: boolean
) {
  return request<T>({ url, method: "POST", body, auth });
}

export function putRequest<T = object>(
  url: string,
  body: object,
  auth?: boolean
) {
  return request<T>({ url, method: "PUT", body, auth });
}

export function deleteRequest<T = object>(url: string, auth?: boolean) {
  return request<T>({ url, method: "DELETE", body: undefined, auth });
}

export function patchRequest<T = object>(
  url: string,
  body: object,
  auth?: boolean
) {
  return request<T>({ url, method: "PATCH", body, auth });
}
