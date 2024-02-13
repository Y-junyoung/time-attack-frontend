'use client'

import { useAppSelector } from "@/redux/store";
import { AuthProvider } from "../_providers/contexts/auth.context";
import Header from "./_components/Header/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  const modal = useAppSelector((state) => state.utils.modal);

  return (
    <AuthProvider>
      <div id="root">
        <Header />
        {children}
        {modal}
      </div>
    </AuthProvider>
  );
}

export default RootLayout;
