"use client";
import { product } from "@/data/product";
import { ProductItem } from "../product-item";
import { RowContainer } from "../row";
import { Header } from "../header";
import { Footer } from "../footer";
import { SearchFilters } from "./search-filters";
import { Product } from "@/types/product";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../pagination";
import { useRouter, useSearchParams } from "next/navigation";

type IProps = {
  products: Product[];
};
export const SearchPage = (props: IProps) => {
  const params = useSearchParams();
  const router = useRouter();
  const page = Number(params.get("page")) ?? 1;
  const products = Array(3)
    .fill(0)
    .map(() => product);
  return (
    <div>
      <Header />

      <RowContainer>
        <SearchFilters />
        <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(200px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(200px,300px))] my-7">
          {(products ?? []).map((p) => (
            <ProductItem key={p.id} product={p} />
          ))}
        </div>
      </RowContainer>
      <Pagination className="mb-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              href={`#`}
              onClick={(e) => {
                e.preventDefault();
                const p = new URLSearchParams(params.toString());
                p.set("page", (page - 1).toString());
                router.push(`/search?${p.toString()}`);
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink
              href={`#`}
              onClick={(e) => {
                e.preventDefault();
                const p = new URLSearchParams(params.toString());
                p.set("page", (1).toString());
                router.push(`/search?${p.toString()}`);
              }}
            >
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              onClick={(e) => {
                e.preventDefault();
                const p = new URLSearchParams(params.toString());
                p.set("page", (page + 1).toString());
                router.push(`/search?${p.toString()}`);
              }}
              href="#"
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Footer />
    </div>
  );
};
