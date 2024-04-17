import Link from "next/link";
import { Logo } from "../logo";
import { TextureBackground } from "../texture-wrapper";
import { SignUpForm } from "./signup-form";

export const SignUpPage = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:basis-1/2 h-screen">
        <TextureBackground className="w-full h-full flex flex-col gap-7 py-3 px-5  items-center justify-center">
          <div className="max-w-[450px] flex flex-col gap-7">
            <div className="">
              <h1 className="m-0 p-0 text-3xl font-bold text-white font-title">
                Greetings...
              </h1>
              <p className="text-sm text-white font-title">
                to whom do I owe the pleasure?
              </p>
            </div>
            <SignUpForm />
          </div>
        </TextureBackground>
      </div>
      <div className=" bg-no-repeat bg-cover bg-center lg:basis-1/2 h-screen bg-signBg ">
        <div className="flex flex-col justify-between items-center px-5 py-9 bg-gradient-to-t from-[#444] to-transparent w-full h-full">
          <Logo className=" text-white w-40" />
          <div className="flex justify-center items-center flex-col">
            <span className="font-title text-8xl text-[--white]">“</span>
            <p className="font-title text-5xl text-[--white] text-center w-80">
              Sartorial Sonnets in Every Stitch
            </p>
          </div>
          <p className="text-[--white] text-sm">
            already a member{" "}
            <Link
              href={"/login"}
              className="text-base font-title text-[--white]"
            >
              log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};
