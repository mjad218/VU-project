import { API_URL } from "@/constants";
import { Tag } from "@/types/tag";

export const getTags = async () => {
  try {
    const req = await fetch(`${API_URL}/tags?page=1&limit=20`, {
      method: "GET",
    });
    if (!req.ok) throw "not ok response";
    const res = await req.json();
    console.log({
      res,
    });
    return res?.data?.tags as Tag[];
  } catch (error) {
    return null;
  }
};
