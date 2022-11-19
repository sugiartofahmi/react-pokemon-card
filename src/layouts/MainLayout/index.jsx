const MainLayout = ({ children }) => {
  return (
    <main className="w-full h-full gap-y-5 flex flex-col items-center justify-center">
      {children}
    </main>
  );
};
export default MainLayout;
