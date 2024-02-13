"use client";

import API from "@/api/index.api";
import Page from "@/components/Page";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

function BrandListPage() {
  const { data: brands } = useQuery({
    queryKey: ["brands", { isList: true, type: "brands" }],
    queryFn: API.brands.getBrands,
    refetchOnWindowFocus: true,
  });

  return (
    <Page title="Brands">
      <nav className="mx-auto max-w-screen-lg mb-16">
        <ul className="gap-x-4 text-sm grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-y-5 justify-items-center">
          <li className="col-span-3 sm:col-span-4 md:col-span-6 mb-4">
            <Link
              href="/brand-page"
              className="text-slate-700 data-[active=true]:text-black data-[active=true]:font-semibold hover:text-black transition-all"
              data-active="true"
            >
              ALL
            </Link>
          </li>
          {brands?.map((brand: any) => (
            <li key={brand.id}>
              <Link
                href={`/brand-page/${brand?.id}`}
                className="text-slate-700 data-[active=true]:text-black data-[active=true]:font-semibold hover:text-black transition-all"
              >
                {brand.nameKr}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </Page>
  );
}

export default BrandListPage;
