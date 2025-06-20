import { useNavigate } from "react-router-dom";

const ViewProducts = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/products"); // Adjust the route based on your routing setup
  };

  return (
    <div className="flex justify-center px-4 sm:px-6">
      <button
        onClick={handleClick}
        className="w-full max-w-xs sm:max-w-sm md:max-w-md px-4 py-3 sm:py-4 text-sm sm:text-base cursor-pointer text-center bg-red-400 text-white font-semibold hover:bg-blue-800 transition-colors duration-200"
      >
        View All Products
      </button>
    </div>
  );
};

export default ViewProducts;
