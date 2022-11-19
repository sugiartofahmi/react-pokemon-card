const CardLayout = ({ children }) => {
  return (
    <div className="flex flex-col gap-y-10 px-20 max-w-sm p-6 border rounded-lg shadow-md bg-gray-800">
      {children}
    </div>
  );
};
export default CardLayout;
