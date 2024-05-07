import { CustomButton } from "@/components/custom-button";
import { FormControl } from "@/components/form-control";
import { Input } from "@/components/input";
import { TextureBackground } from "@/components/texture-wrapper";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export const SearchFilters = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [min, setMin] = useState(Number(params.get("minPrice")));
  const [max, setMax] = useState(Number(params.get("maxPrice")));

  return (
    <TextureBackground className="mx-auto max-w-full w-[450px] p-5 rounded-2xl my-5">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          router.push(
            `/search?q=${params.get("name") ?? ""}&maxPrice=${
              max ?? 0
            }&minPrice=${min ?? 0}`
          );
        }}
      >
        <div className="flex gap-2 items-center">
          <FormControl>
            <label htmlFor="min" className="font-title text-[var(--brown)]">
              Minimum Price
            </label>
            <Input
              type="number"
              id="max"
              onChange={(e) => setMin(Number(e.target.value))}
              value={min}
            />
          </FormControl>
          <FormControl>
            <label htmlFor="max" className="font-title text-[var(--brown)]">
              Maximum Price
            </label>

            <Input
              type="number"
              id="max"
              onChange={(e) => setMax(Number(e.target.value))}
              value={max}
            />
          </FormControl>
        </div>
        <div className="flex gap-3 items-center mt-4">
          <CustomButton type="submit">View</CustomButton>
          <CustomButton
            className="bg-transparent text-[var(--brown)] outline-none outline-transparent border border-solid border-[var(--brown)]"
            onClick={(e) => {
              e.preventDefault();
              setMin(0);
              setMax(0);
            }}
          >
            Clear
          </CustomButton>
        </div>
      </form>
    </TextureBackground>
  );
};
