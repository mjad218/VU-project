"use client";
import { Product } from "@/types/product";
import { CustomButton } from "../custom-button";
import { useCart } from "../cart/context";
import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

type IProps = {
  product: Product | null;
};

export const ProductDetails = (props: IProps) => {
  const { addToCart, cartItems } = useCart();
  const router = useRouter();
  const isInTheCart = useMemo(
    () => cartItems.find((item) => item?.product?.id === props.product?.id),
    [cartItems, props.product]
  );

  const handleAddToCart = () => {
    if (props.product) addToCart(props.product);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1 className="font-title text-5xl text-[--brown] text-center ">
        {props.product?.name}
      </h1>
      <span className="font-title text-2xl text-[--brown] text-center">
        {props.product?.price}
        {" EGP"}
      </span>
      <p className=" text-base text-[--brown] text-center ">
        {props.product?.description}
      </p>
      {!isInTheCart && (
        <CustomButton onClick={handleAddToCart}>Add to Bag</CustomButton>
      )}
      {isInTheCart && (
        <CustomButton onClick={() => router.push("/cart")}>
          Go to Cart
        </CustomButton>
      )}
    </div>
  );
};
