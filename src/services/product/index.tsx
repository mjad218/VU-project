import { API_URL } from "@/constants";
import { Product, ProductSchema } from "@/types/product";

export const getProduct = async (id: string) => {
  try {
    const req = await fetch(`${API_URL}/products/${id}`, {
      method: "GET",
    });
    if (!req.ok) throw "not ok response";
    const res = await req.json();
    const parseRes = ProductSchema.safeParse(res);
    if (parseRes.success) return parseRes.data;
    return null;
  } catch (error) {
    return null;
  }
};
export const getProducts = async (
  q: string,
  startPrice: number,
  endPrice: number,
  page: number = 1
) => {
  try {
    const req = await fetch(
      `${API_URL}/products/?name=${q}&startPrice=${startPrice}&endPrice=${endPrice}&page=${page}`,
      {
        method: "GET",
      }
    );
    if (!req.ok) throw "not ok response";
    const res = await req.json();
    return res as Product[];
  } catch (error) {
    return null;
  }
};
