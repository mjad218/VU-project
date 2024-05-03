import { z } from "zod";

export const ProductSchema = z.object({
  id: z.number(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  quantity: z.number(),
  imagesUrls: z.array(z.string()),
});

export type Product = z.infer<typeof ProductSchema>;

export type CartItem = {
  product: Product;
  quantity: number;
};
