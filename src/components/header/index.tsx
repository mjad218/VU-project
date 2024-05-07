import { IoBagOutline } from "react-icons/io5";
import { Logo } from "../logo";
import Link from "next/link";
import { Navigation } from "./navigation";
import { SearchBox } from "../search-box";
import { Popover, PopoverContent, PopoverTrigger } from "../popover";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { cn } from "@/utils";

type IProps = {
  className?: string | undefined;
};
export const Header = (props: IProps) => {
  return (
    <header
      className={cn(
        "flex justify-between w-full h-24 bg-[var(--brown)] px-10 items-center relative z-10",
        props.className
      )}
    >
      <Link href={"/"}>
        <Logo className=" text-white w-16" />
      </Link>

      <div className="flex gap-10 items-center">
        <div className="block  lg:hidden">
          <Popover>
            <PopoverTrigger>
              <FaMagnifyingGlass className="text-[var(--white)] w-5 h-auto block" />
            </PopoverTrigger>
            <PopoverContent className="bg-[var(--brown)]">
              <SearchBox />
            </PopoverContent>
          </Popover>
        </div>
        <div className=" hidden lg:block">
          <SearchBox />
        </div>
        <div className="h-6 w-[1px] bg-[var(--white)]"></div>
        <Navigation />
      </div>
    </header>
  );
};
