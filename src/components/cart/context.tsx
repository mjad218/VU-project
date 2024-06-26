"use client";
import { Address } from "@/types/address";
import { CartItem, Product } from "@/types/product";
import { createContext, useContext, useState } from "react";

interface CartContextValue {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateCartItemQuantity: (productId: number, quantity: number) => void;
  cartTotal: number;
  cartCount: number;
  address: Address | null;
  setAddress: (a: Address) => void;
}

const CartContext = createContext<CartContextValue>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItemQuantity: () => {},
  cartTotal: 0,
  cartCount: 0,
  address: null,
  setAddress: () => {},
});

export const useCart = () => {
  return useContext(CartContext);
};

interface Props {
  children: React.ReactNode;
}

export const CartProvider = ({ children }: Props) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [address, setAddress] = useState<Address | null>(null);

  const addToCart = (product: Product) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === product.id
    );
    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product.id !== productId
    );
    setCartItems(updatedCartItems);
  };

  const updateCartItemQuantity = (productId: number, quantity: number) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.id === productId
    );
    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];
      const updatedCartItem = {
        ...existingCartItem,
        quantity,
      };
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex] = updatedCartItem;
      setCartItems(updatedCartItems);
    }
  };

  const cartTotal = cartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        cartTotal,
        cartCount,
        address,
        setAddress,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
