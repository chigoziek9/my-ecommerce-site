import AdsImg from "../assets/AdsImage.png";

export default function AdsImageComponent() {
  return (
    <div className="flex items-center justify-center mt-7 px-4">
      <div className="w-full max-w-[1500px] bg-black rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Image comes first on mobile, second on desktop */}
        <img
          src={AdsImg}
          alt="Ad"
          className="w-full max-w-sm md:max-w-md h-auto object-contain order-1 md:order-2"
        />

        {/* Text and Button */}
        <div className="text-center md:text-left order-2 md:order-1">
          <h1 className="text-green-400 text-sm md:text-base">Categories</h1>
          <h1 className="text-3xl md:text-6xl font-semibold mb-6 md:mb-8 text-amber-50 pt-4">
            Enhance Your
            <br className="hidden md:block" />
            Music Experience
          </h1>
          <button className="px-6 py-3 md:p-6 bg-green-400 text-white font-semibold hover:bg-blue-800 transition-colors duration-200">
            Buy Now!
          </button>
        </div>
        
      </div>
    </div>
  );
}
