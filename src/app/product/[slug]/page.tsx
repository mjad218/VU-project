import { ProductDetails } from "@/components/product";
import { ProductImage } from "@/components/product/product-image";
import { getProduct } from "@/services/product";
import { Product } from "@/types/product";

type IProps = {
  params: {
    slug: string;
  };
};
const ProductServerPage = async (props: IProps) => {
  //   const product = await getProduct(props?.params?.slug ?? "");
  let product: Product = {
    id: 0,
    name: "“The Blossom Reverie” ",
    price: 50000,
    description:
      "time stands still. Each thread in this ensemble weaves a delicate story, and every button holds a secret. The jacket, adorned with embroidered blooms, whispers of romance. The trousers, tailored to perfection, rustle like fallen leaves. And the pocket square? It’s a pressed flower, forever preserved in this poetic reverie.",
    quantity: 5,
    imagesUrls: ["/assets/login/man.png"],
  };

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:basis-1/2 h-screen">
        <div className="w-full h-full flex flex-col gap-7 py-3 px-5  items-center justify-center">
          <ProductDetails product={product} />
        </div>
      </div>

      <ProductImage product={product} />
    </div>
  );
};

export default ProductServerPage;
