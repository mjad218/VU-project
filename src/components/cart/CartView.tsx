"use client";
import { CustomButton } from "../custom-button";
import { RowContainer } from "../row";
import { TextureBackground } from "../texture-wrapper";
import { CartItemView } from "./CartItem";
import { useCart } from "./context";

export const CartView = () => {
  const { cartItems, cartTotal } = useCart();

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

          <TextureBackground className="py-10 gap-8 px-4 rounded-lg w-96 max-w-full flex flex-col justify-between">
            <div>
              <h3 className="font-title text-4xl border-b border-solid border-black pb-2 mb-5">
                Total
              </h3>
              <p> ${cartTotal.toFixed(2)}</p>
            </div>
            <p className="text-[var(--grey)]">
              “Amidst the whispers of silk and roses, may this vintage piece
              echo the timeless romance of an era bygone, cradling your heart in
              its eternal embrace.” _Vu
            </p>
            <div>
              <CustomButton>Checkout</CustomButton>
            </div>
          </TextureBackground>
        </div>
      )}
    </RowContainer>
  );
};
