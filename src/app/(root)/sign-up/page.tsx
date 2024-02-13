"use client";

import API from "@/api/index.api";
import Page from "@/components/Page";
import { FormEventHandler, useRef } from "react";

function SignUpPage() {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const pwInputRef = useRef<HTMLInputElement>(null);
  const pw2InputRef = useRef<HTMLInputElement>(null);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    const email = emailInputRef.current?.value;
    const pw = pwInputRef.current?.value;
    const pw2 = pw2InputRef.current?.value;

    if (pw !== pw2) return alert("비밀번호가 일치하지 않습니다.");
    if (!email || !pw || !pw2) return alert("모든 값을 입력해주세요.");

    const data = { email, pw };
    API.auth.signUp(data);
  };

  return (
    <Page title="회원가입">
      <form
        className="flex flex-col items-center gap-y-4 max-w-sm mx-auto w-full"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-y-1.5 w-full">
          <label className="text-sm font-medium text-gray-800">이메일</label>
          <input
            ref={emailInputRef}
            type="email"
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>
        <div className="grid gap-y-1.5 w-full">
          <label className="text-sm font-medium text-gray-800">비밀번호</label>
          <input
            ref={pwInputRef}
            type="password"
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>
        <div className="grid gap-y-1.5 w-full">
          <label className="text-sm font-medium text-gray-800">
            비밀번호 확인
          </label>
          <input
            ref={pw2InputRef}
            type="password"
            className="block border w-full px-6 py-3 rounded focus:border-black outline-none transition border-slate-300"
          />
        </div>
        <div className="mt-2"></div>
        <button
          className="border border-slate-700 py-4 px-12 text-[15px] font-semibold bg-white transition hover:-translate-y-1 active:translate-y-0 hover:drop-shadow w-full data-[color=black]:bg-black data-[color=black]:text-white"
          data-color="black"
        >
          회원가입하기
        </button>
      </form>
    </Page>
  );
}

export default SignUpPage;
