"use client";

import API from "@/api/index.api";
import { useAuth } from "@/app/_providers/contexts/auth.context";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import Modal from "../Modal";

function LogInModal() {
  const auth = useAuth();
  const { mutateAsync } = useMutation({ mutationFn: API.auth.logIn });
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");

  //   const handleClickLogIn = async () => {
  //     const {} = await mutateAsync({ email, pw });
  //   };

  return (
    <Modal title="로그인하기">
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <input value={pw} onChange={(e) => setPw(e.target.value)} />

      <button>로그인하기</button>
    </Modal>
  );
}

export default LogInModal;
