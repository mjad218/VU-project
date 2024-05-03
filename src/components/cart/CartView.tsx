"use client";
import { CustomButton } from "../custom-button";
import { CartItemView } from "./CartItem";
import { useCart } from "./context";

export const CartView = () => {
  const { cartItems, cartTotal } = useCart();

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {/* Listing all items in the cart */}
          {cartItems.map((item: any) => (
            <div key={item.product.id}>
              <CartItemView item={item} />
            </div>
          ))}

          <div>
            <p>Total Cost: ${cartTotal.toFixed(2)}</p>
          </div>

          <div>
            <CustomButton>Checkout</CustomButton>
          </div>
        </>
      )}
    </div>
  );
};
