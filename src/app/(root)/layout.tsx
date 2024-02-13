import { AuthProvider } from "../_providers/contexts/auth.context";
import Header from "./_components/Header/Header";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div id="root">
        <Header />
        {children}
      </div>
    </AuthProvider>
  );
}

export default RootLayout;
