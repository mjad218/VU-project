import { Logo } from "../logo";

export const Header = () => {
  return (
    <header className="flex justify-between w-full h-24 bg-[var(--brown)] px-10 items-center">
      <Logo className=" text-white w-16" />
    </header>
  );
};
