import { ReduxProvider } from "@/redux/store";
import ReactQueryProvider from "./reactQuery.provider";

function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ReactQueryProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </ReactQueryProvider>
  );
}

export default Providers;
