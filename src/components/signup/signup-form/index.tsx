import { CustomButton } from "@/components/custom-button";
import { FormControl } from "@/components/form-control";
import { Input } from "@/components/input";

export const SignUpForm = () => {
  return (
    <div className="flex flex-col gap-2 overflow-y-auto">
      <FormControl className="w-full">
        <label htmlFor="email" className="font-title text-[var(--brown)]">
          Full name *
        </label>
        <Input type="text" placeholder="...." />
      </FormControl>
      <FormControl className="w-full">
        <label htmlFor="email" className="font-title text-[var(--brown)]">
          Email *{" "}
        </label>
        <Input type="email" placeholder="...." />
      </FormControl>

      <FormControl className="w-full">
        <label htmlFor="email" className="font-title text-[var(--brown)]">
          Password *
        </label>
        <Input type="password" placeholder="...." />
      </FormControl>

      <FormControl className="w-full">
        <label htmlFor="email" className="font-title text-[var(--brown)]">
          Phone number{" "}
        </label>
        <Input type="text" placeholder="...." />
      </FormControl>
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
      <CustomButton>Sign up</CustomButton>
    </div>
  );
};
