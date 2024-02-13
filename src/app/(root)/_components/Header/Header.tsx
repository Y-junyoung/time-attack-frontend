import Link from "next/link";
import HeaderButtons from "./HeaderButtons";

function Header() {
  return (
    <header className="bg-white sticky top-0 h-16 border-b flex items-center px-5 lg:px-8 z-10 ">
      <Link href="/" className="font-bold text-2xl">
        발랑
      </Link>
      <nav className="ml-20">BRANDS</nav>

      <HeaderButtons />
    </header>
  );
}

export default Header;
