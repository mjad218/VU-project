"use client";
import { Product } from "@/types/product";
import { CustomButton } from "../custom-button";
import { useCart } from "../cart/context";

type IProps = {
  product: Product | null;
};

export const ProductDetails = (props: IProps) => {
  const { addToCart } = useCart();

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
      <CustomButton onClick={handleAddToCart}>Add to Bag</CustomButton>
    </div>
  );
};
