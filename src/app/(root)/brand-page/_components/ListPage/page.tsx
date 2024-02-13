"use client";
import API from "@/api/index.api";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/Product.type";
import { useQuery } from "@tanstack/react-query";

function ListPage() {
  const returnValueOfUseQuery = useQuery({
    queryKey: ["products", { isList: true, type: "trending" }],
    queryFn: API.products.getProducts,
    refetchOnWindowFocus: true,
  });
  const { data: products } = returnValueOfUseQuery;

  return (
    <div
      className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none flex flex-col grow w-full items-stretch"
      data-full-width="true"
    >
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
        {products?.map((product: Product) => (
          <li key={product.id}>
            <ProductCard key={product.id} product={product} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListPage;
