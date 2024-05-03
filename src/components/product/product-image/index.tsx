import { Product } from "@/types/product";

type IProps = {
  product: Product | null;
};

export const ProductImage = (props: IProps) => {
  const thumb = (props?.product?.imagesUrls ?? [])[0] ?? "";
  return (
    <div
      className={`bg-no-repeat bg-cover bg-center lg:basis-1/2 h-screen  `}
      style={{ backgroundImage: `url('${thumb}')` }}
    ></div>
  );
};
