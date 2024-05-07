import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProductItem } from "@/components/product-item";
import { RowContainer } from "@/components/row";
import { product } from "@/data/product";
import { getProducts } from "@/services/product";

export default async function Home() {
  // const products = await getProducts("", 0, 1000000000, 1);
  const products = Array(3)
    .fill(0)
    .map(() => product);
  return (
    <>
      <Header className=" bg-transparent" />
      <HeroSection product={product} />
      <RowContainer>
        <h3 className="font-title text-2xl m-0 pl-4 pt-5 pb-0">Products </h3>

        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,300px))] my-7">
          {(products ?? []).map((p) => (
            <ProductItem key={p.id} product={p} />
          ))}
        </div>
      </RowContainer>
      <Footer />
    </>
  );
}
