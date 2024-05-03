import React, { ReactNode } from "react";

type IProps = {
  children: ReactNode;
};
export const RowContainer = (props: IProps) => {
  return (
    <div className="w-full px-5 lg:max-w-[1000px] xl:lg:max-w-[1200px] mx-auto">
      {props.children}
    </div>
  );
};
