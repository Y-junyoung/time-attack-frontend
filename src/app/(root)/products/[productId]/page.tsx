"use client";

import API from "@/api/index.api";
import Page from "@/components/Page";
import { useQuery } from "@tanstack/react-query";

function ProductDetailPage(props: { params: { productId: string } }) {
  const productId = props.params.productId;

  const { data: product } = useQuery({
    queryKey: ["products", { isList: false, id: productId }],
    queryFn: () => API.products.getProduct(productId),
  });

  return <Page title={product?.id}>page</Page>;
}

export default ProductDetailPage;
