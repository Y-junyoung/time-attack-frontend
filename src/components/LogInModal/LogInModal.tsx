"use client";

import API from "@/api/index.api";
import { useAuth } from "@/app/_providers/contexts/auth.context";
import { useState } from "react";
import Modal from "../Modal";

function LogInModal() {
  const auth = useAuth();

  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  const handleClickLogIn = () => {
    const data = { email, pw };
    API.auth.signUp(data);
  };

  return (
    <Modal title="로그인하기">
      <div className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full">
        <div className="grid gap-y-1.5 w-full">
          <label htmlFor="email" className="text-sm font-medium text-gray-800">
            이메일
          </label>
          <input
            value={email}
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>
        <div className="grid gap-y-1.5 w-full">
          <label htmlFor="pw" className="text-sm font-medium text-gray-800">
            비밀번호
          </label>
          <input
            value={pw}
            id="pw"
            onChange={(e) => setPw(e.target.value)}
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>
        <button
          onClick={handleClickLogIn}
          className="border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white"
          data-color="black"
        >
          로그인하기
        </button>
      </div>
    </Modal>
  );
}

export default LogInModal;
