"use client";
import { Button } from "@/components/button";
import { CustomButton } from "@/components/custom-button";
import { FormControl } from "@/components/form-control";
import { Input } from "@/components/input";
import { Logo } from "@/components/logo";

export const LoginForm = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <Logo className=" mx-auto w-48 h-auto max-w-full" />
      <div className="flex flex-col items-center">
        <p className="text-sm font-normal text-[var(--red)]">
          Have we crossed paths before?
        </p>
        <p className="text-sm font-normal text-[var(--red)]">
          Your details seem familiar.
        </p>
      </div>
      <FormControl className="w-full">
        <label htmlFor="email" className="font-title text-[var(--brown)]">
          Email
        </label>
        <Input type="email" placeholder="Email" />
      </FormControl>
      <FormControl className="w-full  ">
        <label htmlFor="password" className="font-title text-[var(--brown)]">
          Password
        </label>
        <Input type="password" placeholder="Password" />
      </FormControl>
      <p className="w-full text-sm font-normal text-[var(--red)]">
        forget our secret word?
      </p>
      <CustomButton className="rounded-lg py-6  px-9 bg-[var(--red-light)] outline outline-[1px] -outline-offset-8 outline-[var(--brown)] text-white">
        Login
      </CustomButton>
    </div>
  );
};
