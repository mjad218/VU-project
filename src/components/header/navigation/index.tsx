"use client";

import { useCurrentUser } from "@/components/current-user";
import Link from "next/link";
import { CiUser } from "react-icons/ci";
import { IoBagOutline } from "react-icons/io5";

export const Navigation = () => {
  const { user } = useCurrentUser();
  const isLoggedin = !!user;

  if (isLoggedin)
    return (
      <div className="flex items-center gap-4">
        <Link href={"/cart"}>
          <IoBagOutline className="text-[var(--white)] w-7 h-auto" />
        </Link>
        <CiUser className="text-[var(--white)] w-7 h-auto" />
      </div>
    );
  return (
    <Link href={"/login"} className="py-2 px-3 rounded-md bg-[var(--white)]">
      Login
    </Link>
  );
};
