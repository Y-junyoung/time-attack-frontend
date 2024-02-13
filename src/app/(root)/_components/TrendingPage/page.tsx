"use client";

import API from "@/api/index.api";
import Page from "@/components/Page";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/Product.type";
import { useQuery } from "@tanstack/react-query";

function TrendingPage() {
  const returnValueOfUseQuery = useQuery({
    queryKey: ["products", { isList: true, type: "trending" }],
    queryFn: API.products.getProducts,
    refetchOnWindowFocus: true,
  });
  const { data: products } = returnValueOfUseQuery;

  return (
    <Page title="Trending">
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
        {products?.map((product: Product) => (
          <li key={product.id}>
            <ProductCard key={product.id} product={product} />
          </li>
        ))}
      </ul>
    </Page>
  );
}

export default TrendingPage;
