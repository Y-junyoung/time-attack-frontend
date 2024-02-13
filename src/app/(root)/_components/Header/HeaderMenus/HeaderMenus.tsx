"use client";
import LogInModal from "@/components/LogInModal";
import { setModal } from "@/redux/slices/utils.slice";
import { useAppDispatch } from "@/redux/store";
import Link from "next/link";

const linkStyles =
  "text-[15px] font-medium text-gray-800 hover:text-black transition";

function HeaderMenus() {
  const dispatch = useAppDispatch();

  const handleClickLogIn = () => {
    const action = setModal(<LogInModal />);
    dispatch(action);
  };

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Link href="/sign-up" className={linkStyles}>
        회원가입
      </Link>
      <button className={linkStyles} onClick={handleClickLogIn}>
        로그인
      </button>
    </div>
  );
}

export default HeaderMenus;
