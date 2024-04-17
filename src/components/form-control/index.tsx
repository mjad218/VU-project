import { cn } from "@/utils";
import React, { ReactNode } from "react";

type IProps = {
  className?: string | undefined;
  children?: ReactNode;
};
export const FormControl = (props: IProps) => {
  return (
    <div className={cn("flex flex-col gap-1", props.className)}>
      {props.children}
    </div>
  );
};
