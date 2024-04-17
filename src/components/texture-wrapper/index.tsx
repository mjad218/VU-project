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
        "overflow-hidden bg-[var(--beige)] relative ",
        props.className,
        "p-0 px-0 py-0"
      )}
    >
      <div className="h-full bg-texture bg-no-repeat bg-cover bg-center w-full opacity-20 flex-1 absolute top-0 right-0 left-0 bottom-0 z-0" />

      <div
        className={cn(
          "overflow-hidden bg-[var(--beige)] relative  ",
          props.className,
          "w-full h-full bg-transparent"
        )}
      >
        {props.children}
      </div>
    </div>
  );
};
