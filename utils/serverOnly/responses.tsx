import { NextApiResponse } from "next";

export function resOk(res: NextApiResponse, data: any) {
  res.status(200).json(data);
}

export function resCreated(res: NextApiResponse, data: any) {
  res.status(201).json(data);
}

export function resNoContent(res: NextApiResponse) {
  res.status(204).json({});
}

export function resBadRequest(res: NextApiResponse, error: string) {
  res.status(400).json({ error });
}

export function resUnauthorized(res: NextApiResponse) {
  res.status(401).json({ error: "Unauthorized" });
}
export function resNotFound(res: NextApiResponse, error: string) {
  res.status(404).json({ error });
}

export function resMethodNotAllowed(res: NextApiResponse) {
  res.status(405).json({ error: "Method Not Allowed" });
}

export function resInternalError(res: NextApiResponse, error: string) {
  res.status(500).json({ error });
}
