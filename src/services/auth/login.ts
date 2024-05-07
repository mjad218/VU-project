import { API_URL } from "@/constants";

export const login = async (email: string, password: string) => {
  try {
    const req = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    if (!req.ok) throw "not ok response";
    const _res = await req.json();

    const token = _res?.data?.token;
    return token;
  } catch (error) {
    return true;
  }
};
