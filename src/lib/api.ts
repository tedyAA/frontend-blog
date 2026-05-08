const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:4000/api/v1";

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
};

export type RegisterInput = {
  name: string;
  email: string;
  password: string;
};

export type PostItem = {
  id: string;
  title: string;
  slug: string;
  excerpt?: string | null;
  content: string;
  publishedAt?: string | null;
};

type PostsResponse = {
  items: PostItem[];
  meta: {
    page: number;
    limit: number;
    total: number;
  };
};

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options?.headers ?? {})
    }
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({ message: "Request failed" }));
    throw new Error(errorBody.message ?? "Request failed");
  }

  return response.json() as Promise<T>;
}

export async function login(email: string, password: string): Promise<LoginResponse> {
  return request<LoginResponse>("/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password })
  });
}

export async function register(input: RegisterInput): Promise<LoginResponse> {
  return request<LoginResponse>("/auth/register", {
    method: "POST",
    body: JSON.stringify(input)
  });
}

export async function getPosts(): Promise<PostsResponse> {
  return request<PostsResponse>("/posts");
}
