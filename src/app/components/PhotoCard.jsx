import Image from "next/image";
import Link from "next/link";

const PhotoCard = ({ photo }) => {
    // Destructuring fields matching your dataset
    const { id, name, type, breed, age, location, image } = photo;

    return (
        <div className="border border-gray-200 rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
            
            {/* Image Container */}
            <div className="relative w-full h-52 bg-gray-100 overflow-hidden">
                <img 
                    src={image || "https://placehold.co/400x300?text=No+Image"} 
                    alt={name} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Animal Type Badge */}
                <span className="absolute top-3 left-3 bg-blue-950 text-white text-xs font-semibold px-2.5 py-1 rounded-full shadow">
                    {type}
                </span>
            </div>

            {/* Content Details */}
            <div className="p-4 flex flex-col justify-between flex-grow gap-4">
                <div>
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-xs text-gray-500 font-medium mb-1">
                        <span>Breed: {breed}</span>
                        <span>📍 {location}</span>
                    </div>

                    {/* Animal Name */}
                    <h2 className="text-lg font-bold text-blue-950 line-clamp-1  transition-colors">
                        {name}
                    </h2>
                </div>

                {/* Footer Section with Age & Action Button */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className="flex flex-col">
                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Age</span>
                        <span className="text-sm font-bold text-gray-700">
                            {age} Yrs
                        </span>
                    </div>
                    
                    <Link href={`/animal/${id}`}>
                        <span className="bg-blue-950  text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors inline-block cursor-pointer shadow-sm">
                            View Details
                        </span>
                    </Link>
                </div>
            </div>

        </div>
    );
};

export default PhotoCard;