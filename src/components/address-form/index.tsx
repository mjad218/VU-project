"use client";
import { FormControl } from "../form-control";
import { Input } from "../input";

export const AddressForm = () => {
  return (
    <div>
      <FormControl className="w-full">
        <label htmlFor="email" className="font-title text-[var(--brown)]">
          Street address{" "}
        </label>
        <Input type="text" placeholder="...." />
      </FormControl>
      <div className="flex gap-3 flex-wrap">
        <FormControl className="w-1/3">
          <label htmlFor="email" className="font-title text-[var(--brown)]">
            City
          </label>
          <Input type="text" placeholder="...." />
        </FormControl>{" "}
        <FormControl className="w-1/3">
          <label htmlFor="email" className="font-title text-[var(--brown)]">
            Province{" "}
          </label>
          <Input type="text" placeholder="...." />
        </FormControl>{" "}
        <FormControl className="w-1/3">
          <label htmlFor="email" className="font-title text-[var(--brown)]">
            Postal code{" "}
          </label>
          <Input type="text" placeholder="...." />
        </FormControl>
      </div>
    </div>
  );
};
