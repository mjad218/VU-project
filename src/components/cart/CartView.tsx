"use client";
import { ReactNode } from "react";
import { RowContainer } from "../row";
import { CartItemView } from "./CartItem";
import { useCart } from "./context";

type IProps = {
  children: ReactNode;
};
export const CartView = (props: IProps) => {
  const { cartItems } = useCart();

  return (
    <RowContainer>
      <h2 className="font-title text-5xl pb-6 pt-10">Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="flex gap-10 justify-between flex-wrap pb-11">
          <div className="flex flex-col gap-6">
            {cartItems.map((item: any) => (
              <div key={item.product.id}>
                <CartItemView item={item} />
              </div>
            ))}
          </div>

          {props.children}
        </div>
      )}
    </RowContainer>
  );
};
