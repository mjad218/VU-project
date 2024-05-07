import { SearchPage } from "@/components/search";
import { getProducts } from "@/services/product";

type IProps = {
  params: {};
  searchParams: { q: string; maxPrice: string; minPrice: string; page: string };
};

const SearchServerPage = async (props: IProps) => {
  const products = await getProducts(
    props.searchParams.q,
    Number(props.searchParams.minPrice),
    Number(props.searchParams.maxPrice),
    Number(props.searchParams.page)
  );
  return <SearchPage products={products ?? []} />;
};

export default SearchServerPage;
