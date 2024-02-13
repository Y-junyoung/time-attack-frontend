"use client";

import API from "@/api/index.api";
import Page from "@/components/Page";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/Product.type";
import { useQuery } from "@tanstack/react-query";
import BrandListPage from "../_components/BrandListPage";

function BrandDetailListPage(props: { params: { brandId: string } }) {
  const paramsBrandId = props.params.brandId;

  const returnValueOfUseQuery = useQuery({
    queryKey: ["products", { isList: true, type: "trending" }],
    queryFn: API.products.getProducts,
    refetchOnWindowFocus: true,
  });
  const { data: products } = returnValueOfUseQuery;

  const fiteredProducts = products?.filter(
    (product: Product) => product.brandId === Number(paramsBrandId)
  );

  return (
    <>
      <BrandListPage />
      <Page>
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-8 gap-y-12">
          {fiteredProducts &&
            fiteredProducts?.map((product: Product) => (
              <li key={product.id}>
                <ProductCard key={product.id} product={product} />
              </li>
            ))}
        </ul>
      </Page>
    </>
  );
}

export default BrandDetailListPage;
