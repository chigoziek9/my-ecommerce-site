export default function AboutImage({ image, title, text }) {
  return (
    <div className="w-[95%] max-w-3xl h-auto mt-6 bg-amber-50 border shadow-md hover:shadow-lg transition-shadow duration-300 mx-auto">
      <img
        className="w-full h-auto object-cover"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-2xl md:text-4xl text-center font-extrabold mb-2">
          {title}
        </h2>
        <p className="text-gray-600 text-base md:text-xl text-center">
          {text}
        </p>
      </div>
    </div>
  );
}
