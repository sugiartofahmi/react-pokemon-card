const Button = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#B2B2B2] hover:bg-[#918e8e] py-1 text-gray-800 rounded-lg"
    >
      {text}
    </button>
  );
};
export default Button;
