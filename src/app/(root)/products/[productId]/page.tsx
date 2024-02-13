"use client";

import API from "@/api/index.api";
import Page from "@/components/Page";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";

let numberFormat = Intl.NumberFormat("ko-KR", {
  style: "currency",
  currency: "KRW",
});

function ProductDetailPage(props: { params: { productId: string } }) {
  const productId = props.params.productId;

  const { data: product } = useQuery({
    queryKey: ["products", { isList: false, id: productId }],
    queryFn: () => API.products.getProduct(productId),
  });

  return (
    <Page data-full-width="false">
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
        <div className="relative aspect-[3/4]">
          <Image
            src={product?.imgSrc}
            alt={product?.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="py-8 flex flex-col">
          <Link
            href="/brand"
            className="text-[15px] border-b pb-2.5 mb-2.5 font-bold"
          >
            {product?.brand.nameKr} / {product?.brand.nameEn}
          </Link>
          <h1 className="text-lg">{product?.name}</h1>
          <div className="grid grid-cols-5 my-12 gap-y-5 text-[15px]">
            <div className="text-slate-900 font-bold">정가</div>
            <div className="col-span-4 line-through text-red-500">
              {numberFormat.format(product?.originalPrice)}
            </div>
            <div className="text-slate-900 font-bold">판매가</div>
            <div className="col-span-4 font-semibold">
              {numberFormat.format(product?.price)}
            </div>
            <div className="text-slate-900 font-bold">배송</div>
            <div className="col-span-4">{product?.deliveryType}</div>
            <div className="text-slate-900 font-bold">잔여 재고</div>
            <div className="col-span-4">{product?.onlineStock}</div>
          </div>
          <button
            className="border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white"
            data-color="black"
          >
            장바구니에 담기
          </button>
        </div>
      </section>
    </Page>
  );
}

export default ProductDetailPage;
