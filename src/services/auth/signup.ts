import { API_URL } from "@/constants";

export const signUp = async (
  email: string,
  name: string,
  password: string,
  phoneNumber: string
) => {
  try {
    const req = await fetch(`${API_URL}/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
        phoneNumber,
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
