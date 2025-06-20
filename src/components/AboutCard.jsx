export default function AboutCard({ image, title, text }) {
  return (
    <div className=" w-70 h-63 mt-15 bg-amber-50 border shadow-md hover:shadow-lg transition-shadow duration-300">
      <img
        className=" w-30 h-30  p-5 mx-20"
        src={image}
        alt={title}
      />
      <div className="p-4">
        <h2 className="text-4xl text-center font-extrabold mb-2">{title}</h2>
        <p className="text-gray-600 text-sm text-center">{text}</p>
      </div>
    </div>
  );
}
