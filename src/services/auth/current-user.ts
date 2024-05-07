import { API_URL } from "@/constants";

export const getCurrentUser = async (token: string) => {
  try {
    const req = await fetch(`${API_URL}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!req.ok) throw "not ok response";
    const res = await req.json();

    return res?.data?.user;
  } catch (error) {
    return null;
  }
};
