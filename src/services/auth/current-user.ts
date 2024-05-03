import { API_URL } from "@/constants";

export const getCurrentUser = async () => {
  try {
    const req = await fetch(`${API_URL}/users/me`, {
      method: "GET",
    });
    if (!req.ok) throw "not ok response";
    const res = await req.json();
    return res;
  } catch (error) {
    return null;
  }
};
