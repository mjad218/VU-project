import React from "react";
import { Input } from "../input";
import { FaMagnifyingGlass } from "react-icons/fa6";

export const SearchBox = () => {
  return (
    <div className="flex gap-2 items-center">
      <Input
        type="text"
        placeholder="search"
        className="border-0 bg-transparent border-b border-solid border-[var(--white)] rounded-none outline-none focus:outline-none focus-within:outline-none w-80 text-[var(--white)] placeholder:text-[var(--white)]"
      />
      <FaMagnifyingGlass className="text-[var(--white)] w-5 h-auto block" />
    </div>
  );
};
