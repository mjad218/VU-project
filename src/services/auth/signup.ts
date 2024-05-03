import { API_URL } from "@/app/constants";

export const signUp = async (
  email: string,
  name: string,
  password: string,
  phoneNumber: string
) => {
  try {
    const req = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        password,
        phoneNumber,
      }),
    });
    if (!req.ok) throw "not ok response";
    const _res = await req.json();
    return req.ok;
  } catch (error) {
    return true;
  }
};
