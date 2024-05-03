import { API_URL } from "@/app/constants";

export const login = async (email: string, password: string) => {
  try {
    const req = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!req.ok) throw "not ok response";
    const _res = await req.json();
    return req.ok;
  } catch (error) {
    return true;
  }
};
