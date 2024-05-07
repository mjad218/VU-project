import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";

type IProps = {
  product: Product;
};
export const ProductItem = (props: IProps) => {
  return (
    <div className="flex flex-col gap-4 border border-solid border-[var(--grey)] rounded-md overflow-hidden ">
      <Image
        src={(props.product?.imagesUrls ?? [])[0] ?? ""}
        alt={props.product?.name ?? ""}
        className="block w-full aspect-[452/566] "
        width={452}
        height={566}
      />
      <div className="px-3">
        <h2 className="font-title text-[var(--brown)] font-bold text-2xl m-0 pt-0 pb-1">
          <Link href={`/product/${props?.product?.id}`}>
            {props.product?.name}
          </Link>
        </h2>
      </div>
    </div>
  );
};
