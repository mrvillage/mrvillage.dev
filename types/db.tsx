export interface User {
  id: string;
  name: string;
  avatar: string | null;
}

export interface Coord {
  id: number;
  x: number;
  y: number;
  z: number | null;
  public: boolean;
  list_id: number;
}

export interface CoordList {
  id: number;
  name: string;
  public: boolean;
  list_id: number | null;
  owner_id: string;
}

export interface CoordShare {
  id: number;
  user_id: string;
  list_id: number;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  author_id: string;
  tags: string[];
  created_at: Date;
  updated_at: Date | null;
  published: boolean;
}

export interface BlogComment {
  id: number;
  content: string;
  author_id: string;
  post_id: number;
  created_at: Date;
  updated_at: Date | null;
}
