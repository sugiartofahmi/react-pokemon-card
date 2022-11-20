const MainLayout = ({ children }) => {
  return (
    <main className="w-full h-full gap-y-5 flex flex-col items-center justify-center p-5">
      {children}
    </main>
  );
};
export default MainLayout;
