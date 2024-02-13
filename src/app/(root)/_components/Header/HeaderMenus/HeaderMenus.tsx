import Link from "next/link";

const linkStyles =
  "text-[15px] font-medium text-gray-800 hover:text-black transition";

function HeaderMenus() {
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Link href="/sign-up" className={linkStyles}>
        회원가입
      </Link>
      <Link href="/log-in" className={linkStyles}>
        로그인
      </Link>
    </div>
  );
}

export default HeaderMenus;
