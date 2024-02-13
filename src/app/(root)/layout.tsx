import Header from "./_components/Header/Header";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div id="root">
      <Header />
      {children}
    </div>
  );
}

export default layout;
