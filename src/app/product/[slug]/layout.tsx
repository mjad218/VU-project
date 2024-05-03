import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ReactNode } from "react";

type IProps = {
  children: ReactNode;
};
const ProductLayout = (props: IProps) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default ProductLayout;
