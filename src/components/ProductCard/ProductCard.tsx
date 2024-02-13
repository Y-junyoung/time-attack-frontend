import { Product } from "@/types/Product.type";
import Image from "next/image";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface ProductCardProps {
  product: Product;
}

let numberFormat = Intl.NumberFormat("ko-KR", {
  style: "currency",
  currency: "KRW",
});

function ProductCard({ product }: PropsWithChildren<ProductCardProps>) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="relative flex flex-col group"
    >
      <div className="aspect-[3/4] relative mb-4">
        <Image
          src={product.imgSrc}
          alt={product.name}
          width={200}
          height={200}
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="grid gap-y-2">
        <div className="text-sm font-bold">{product.brand.nameEn}</div>
        <h6 className="text-[15px]">{product.name}</h6>
        <div className="text-sm flex flex-col sm:flex-row items-baseline gap-1.5">
          <span className="text-red-500 line-through font-semibold">
            {numberFormat.format(product.originalPrice)}
          </span>
          <span className="font-bold">
            {numberFormat.format(product.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default ProductCard;
