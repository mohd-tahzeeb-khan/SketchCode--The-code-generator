import Image from "next/image";

export default function ProjectCard({ title, model, description, image }) {
    
  return (
    <>
    <div className="w-full sm:w-[48%] lg:w-[31%] bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <span className="inline-block text-sm px-3 py-1 bg-blue-100 text-blue-700 rounded-full">
          {model}
        </span>
        <p className="text-gray-600 text-sm">{description}</p>
      </div>
    </div>

    <div className="bg-white shadow-md rounded-2xl overflow-hidden p-4 w-full max-w-md mx-auto hover:shadow-xl transition-all duration-300">
      <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h2 className="text-xl font-bold mb-1">{title}</h2>
      <p className="text-sm text-gray-500 mb-2 italic">Model: {model}</p>
      <p className="text-gray-700 text-sm mb-4">{description}</p>

      <div className="flex justify-between">
        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 transition"
        >
          Code
        </a>
        <button
        //   onClick={onDelete}
          className="px-4 py-2 text-sm font-semibold rounded-lg bg-red-500 text-white hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
    </>
  );
}
