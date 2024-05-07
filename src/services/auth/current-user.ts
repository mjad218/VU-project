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

export const setCurrentUserAdmin = async (token: string, userId: number) => {
  try {
    const req = await fetch(`${API_URL}/users/${userId}/set-as-admin`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (!req.ok) throw "not ok response";
    const res = await req.json();

    return res;
  } catch (error) {
    return null;
  }
};
