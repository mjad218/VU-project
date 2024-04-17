import Link from "next/link";
import { LoginForm } from "./login-form";
import { TextureBackground } from "../texture-wrapper";

export const LoginPage = () => {
  return (
    <div className=" h-svh w-screen bg-loginBg bg-no-repeat bg-cover bg-center flex items-center justify-center">
      <TextureBackground className="md:w-[500px] w-[calc(100%-30px)] rounded-lg min-h-96 flex flex-col justify-between px-4 py-6">
        <LoginForm />

        <span className=" self-end text-[var(--brown)] text-base flex gap-2 items-center">
          New here?{" "}
          <Link
            href={"/signup"}
            className="font-bold text-[var(--rose)] font-title text-xl"
          >
            sign in
          </Link>
        </span>
      </TextureBackground>
    </div>
  );
};
