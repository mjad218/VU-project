"use client";
import { CustomButton } from "@/components/custom-button";
import { FormControl } from "@/components/form-control";
import { Input } from "@/components/input";
import { Logo } from "@/components/logo";
import { login } from "@/services/auth/login";
import { useRouter } from "next/navigation";
import { useState } from "react";

const LoginError = (props: { error: boolean }) => {
  if (!props.error) return null;
  return (
    <div className="flex flex-col items-center">
      <p className="text-sm font-normal text-[var(--red)]">
        Have we crossed paths before?
      </p>
      <p className="text-sm font-normal text-[var(--red)]">
        Your details seem familiar.
      </p>
    </div>
  );
};
export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleLogin = async () => {
    try {
      const err = await login(email, password);
      setError(err);
      if (!err) router.push("/");
    } catch (error) {}
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <Logo className=" mx-auto w-48 h-auto max-w-full" />
      <LoginError error={error} />
      <FormControl className="w-full">
        <label htmlFor="email" className="font-title text-[var(--brown)]">
          Email
        </label>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target?.value ?? "")}
        />
      </FormControl>
      <FormControl className="w-full  ">
        <label htmlFor="password" className="font-title text-[var(--brown)]">
          Password
        </label>
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target?.value ?? "")}
        />
      </FormControl>
      <p className="w-full text-sm font-normal text-[var(--red)]">
        forget our secret word?
      </p>
      <CustomButton
        className="rounded-lg py-6  px-9 bg-[var(--red-light)] outline outline-[1px] -outline-offset-8 outline-[var(--brown)] text-white"
        onClick={handleLogin}
      >
        Login
      </CustomButton>
    </div>
  );
};
