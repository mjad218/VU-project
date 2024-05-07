"use client";
import { useState } from "react";
import { FormControl } from "../form-control";
import { Input } from "../input";
import { CustomButton } from "../custom-button";
import { Address } from "@/types/address";
import { API_URL } from "@/constants";
import { useCurrentUser } from "../current-user";
import { useCart } from "../cart/context";
import { TextureBackground } from "../texture-wrapper";
import { useRouter } from "next/navigation";

type IProps = {
  onAdd?: (a: Partial<Address>) => void;
};
export const AddressForm = (props: IProps) => {
  const [city, setCity] = useState("");
  const [streat, setStreat] = useState("");
  const { user } = useCurrentUser();

  const { setAddress } = useCart();
  const router = useRouter();
  const onAdd = async (a: Partial<Address>) => {
    try {
      const req = await fetch(`${API_URL}/addresses`, {
        method: "POST",
        body: JSON.stringify({
          city,
          streetAddress: streat,
          postalCode: 11511,
          userId: user?.id ?? 0,
        }),
      });
      if (!req.ok) throw "dsds";
      const addr = await req.json();
      setAddress(addr as Address);
    } catch (error) {}
    router.push("/checkout/pay");
  };
  return (
    <TextureBackground className="p-10 rounded-xl gap-4 w-[450px] max-w-full">
      <h3 className="font-title text-2xl m-0 p-0 pb-5">Add Address </h3>
      <div className="flex flex-col gap-4">
        <FormControl className="w-full">
          <label htmlFor="email" className="font-title text-[var(--brown)]">
            Street address{" "}
          </label>
          <Input
            type="text"
            placeholder="...."
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </FormControl>
        <div className="flex gap-3 flex-wrap">
          <FormControl className="w-1/3">
            <label htmlFor="email" className="font-title text-[var(--brown)]">
              City
            </label>
            <Input
              type="text"
              placeholder="...."
              onChange={(e) => setStreat(e.target.value)}
              value={streat}
            />
          </FormControl>{" "}
        </div>

        <CustomButton onClick={() => onAdd({ city, streetAddress: streat })}>
          Add Address
        </CustomButton>
      </div>
    </TextureBackground>
  );
};
