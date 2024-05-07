"use client";
import { TextureBackground } from "@/components/texture-wrapper";
import React from "react";
import { useCart } from "../context";
import { useRouter } from "next/navigation";
import { CustomButton } from "@/components/custom-button";

export const TotalPrice = () => {
  const { cartTotal } = useCart();

  const router = useRouter();
  return (
    <TextureBackground className="py-10 gap-8 px-4 rounded-lg w-96 max-w-full flex flex-col justify-between">
      <div>
        <h3 className="font-title text-4xl border-b border-solid border-black pb-2 mb-5">
          Total
        </h3>
        <p> ${cartTotal.toFixed(2)}</p>
      </div>
      <p className="text-[var(--grey)]">
        “Amidst the whispers of silk and roses, may this vintage piece echo the
        timeless romance of an era bygone, cradling your heart in its eternal
        embrace.” _Vu
      </p>
      <div>
        <CustomButton onClick={() => router.push("/checkout/address")}>
          Checkout
        </CustomButton>
      </div>
    </TextureBackground>
  );
};
