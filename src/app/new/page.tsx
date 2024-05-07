import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductForm } from "@/components/product-form";
import { getTags } from "@/services/tag";

const CreateProduct = async () => {
  const tags = await getTags();
  return (
    <div>
      <Header />
      <ProductForm tags={tags ?? []} />
      <Footer />
    </div>
  );
};

export default CreateProduct;
