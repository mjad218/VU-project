import { ComponentProps } from "react";
import { Button } from "../button";
import { cn } from "@/utils";

type IProps = ComponentProps<typeof Button>;
export const CustomButton = (props: IProps) => {
  return (
    <Button
      {...props}
      className={cn(
        "rounded-lg py-6  px-9 bg-[var(--red-light)] outline outline-[1px] -outline-offset-8 outline-[var(--brown)] text-white",
        props.className
      )}
    />
  );
};
