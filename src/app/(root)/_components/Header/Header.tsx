import Link from "next/link";
import HeaderMenus from "./HeaderMenus";

function Header() {
  return (
    <header className="bg-white sticky top-0 h-16 border-b flex items-center px-5 lg:px-8 z-10 ">
      <Link href="/" className="font-bold text-2xl">
        발랑
      </Link>
      <Link href="/brand-page" className="ml-20">
        BRANDS
      </Link>

      <HeaderMenus />
    </header>
  );
}

export default Header;
