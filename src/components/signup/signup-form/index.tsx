"use client";
import { CustomButton } from "@/components/custom-button";
import { FormControl } from "@/components/form-control";
import { Input } from "@/components/input";
import { signUp } from "@/services/auth/signup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z, ZodError } from "zod";

const SignUpSchema = z.object({
  email: z.string().email(),
  password: z.string(),
  phoneNumber: z.string(),
  name: z.string(),
});

const findZodError = (error: ZodError | undefined, field: string) => {
  const err = (error?.errors ?? []).find((e) => e.path.includes(field));
  return err?.message ?? "";
};
export const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState<ZodError | undefined>();
  const router = useRouter();

  const handleSignUp = async () => {
    try {
      const parseRes = SignUpSchema.safeParse({
        email,
        name,
        password,
        phoneNumber,
      });
      if (!parseRes.success) {
        console.log(parseRes.error.errors);
        setError(parseRes.error);
        throw "Validation Error";
      }
      const err = await signUp(email, name, password, phoneNumber);
      if (!err) router.push("/");
    } catch (error) {}
  };
  return (
    <div className="flex flex-col gap-5 overflow-y-auto max-w-full w-96">
      <FormControl className="w-full">
        <label htmlFor="email" className="font-title text-[var(--brown)]">
          Full name *
        </label>
        <Input
          type="text"
          placeholder="...."
          value={name}
          onChange={(e) => setName(e.target?.value)}
        />
        <p className="font-title text-[var(--red)]">
          {findZodError(error, "name")}
        </p>
      </FormControl>
      <FormControl className="w-full">
        <label htmlFor="email" className="font-title text-[var(--brown)]">
          Email *{" "}
        </label>
        <Input
          type="email"
          placeholder="...."
          value={email}
          onChange={(e) => setEmail(e.target?.value)}
        />
        <p className="font-title text-[var(--red)]">
          {findZodError(error, "email")}
        </p>
      </FormControl>

      <FormControl className="w-full">
        <label htmlFor="email" className="font-title text-[var(--brown)]">
          Password *
        </label>
        <Input
          type="password"
          placeholder="...."
          value={password}
          onChange={(e) => setPassword(e.target?.value)}
        />
        <p className="font-title text-[var(--red)]">
          {findZodError(error, "password")}
        </p>
      </FormControl>

      <FormControl className="w-full">
        <label htmlFor="email" className="font-title text-[var(--brown)]">
          Phone number{" "}
        </label>
        <Input
          type="text"
          placeholder="...."
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target?.value)}
        />
        <p className="font-title text-[var(--red)]">
          {findZodError(error, "phoneNumber")}
        </p>
      </FormControl>

      <CustomButton className="w-fit mx-auto" onClick={handleSignUp}>
        {" "}
        Sign up
      </CustomButton>
    </div>
  );
};
