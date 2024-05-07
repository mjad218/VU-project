import { Product } from "@/types/product";

type IProps = {
  product: Product | null;
};
export const HeroSection = (props: IProps) => {
  const thumb = (props?.product?.imagesUrls ?? [])[0] ?? "";

  return (
    <div
      className={`bg-no-repeat bg-cover bg-center lg:basis-1/2 h-screen w-full flex items-center justify-center relative after:h-full after:bg-gradient-to-t after:from-gray-700 after:to-gray-600 after:bg-no-repeat after:bg-cover after:bg-center after:w-full after:opacity-40 after:flex-1 after:absolute after:top-0 after:right-0 after:left-0 after:bottom-0 after:z-0 -mt-24`}
      style={{ backgroundImage: `url('${thumb}')` }}
    >
      <h1 className="font-title text-7xl text-center font-bold text-white absolute z-10">
        {props.product?.name}
      </h1>
    </div>
  );
};
