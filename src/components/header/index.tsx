import { IoBagOutline } from "react-icons/io5";
import { Logo } from "../logo";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex justify-between w-full h-24 bg-[var(--brown)] px-10 items-center">
      <Link href={"/"}>
        <Logo className=" text-white w-16" />
      </Link>

      <Link href={"/cart"}>
        <IoBagOutline />
      </Link>
    </header>
  );
};
