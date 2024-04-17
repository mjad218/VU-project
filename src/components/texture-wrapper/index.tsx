import { cn } from "@/utils";
import { ReactNode } from "react";

type IProps = {
  children?: ReactNode | undefined;
  className?: string | undefined;
};
export const TextureBackground = (props: IProps) => {
  return (
    <div
      className={cn(
        "overflow-hidden bg-texture bg-no-repeat bg-cover bg-center relative ",
        props.className
      )}
    >
      <div className="h-full w-full bg-black opacity-20 flex-1   absolute top-0 right-0 left-0 bottom-0" />
      {props.children}
    </div>
  );
};
