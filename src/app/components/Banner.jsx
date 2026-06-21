import { Button } from "@heroui/react";
import Link from "next/link";

const Banner = () => {
  return (
    // 1. Swapped 'aspect-video' for dynamic 'py' margins. Increased width to w-[95%] on mobile so it doesn't look cramped.
    <div className="bg-[url('/hero4.jpg')] w-[95%] sm:w-[90%] mx-auto bg-cover bg-no-repeat bg-center flex items-center rounded-2xl shadow-2xl overflow-hidden my-6">
      
      {/* Overlay Layer */}
      {/* 2. Ensured py padding matches here so background overlay expands with content */}
      <div className="w-full h-full bg-black/55 flex items-center py-12 xs:py-16 sm:py-24 md:py-32">
        
        {/* Content Container */}
        {/* 3. Added 'text-center sm:text-left' and flex-alignment variables for mobile glass screens */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 md:px-12 text-white flex flex-col items-center sm:items-start text-center sm:text-left">
          
          {/* Dynamic Typographies */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black mb-4 max-w-2xl leading-tight tracking-tight">
            Bringing the Haat <br className="hidden sm:inline" /> to you.
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl mb-6 max-w-xl text-gray-200 font-medium">
            Your digital gateway to hassle-free Qurbani livestock.
          </p>

          {/* Action Buttons */}
          {/* 4. 'w-full sm:w-auto' expands buttons cleanly on tiny cellphones */}
          <div className="flex flex-col xs:flex-row gap-3.5 xs:gap-4 w-full xs:w-auto">
            <Link href="#" className="w-full xs:w-auto">
              <Button className=" xs:w-auto bg-gradient-to-r from-blue-900 to-blue-950 text-white font-semibold px-8 shadow-lg">
                Buy Now
              </Button>
            </Link>

            <Link href="/pricing" className="w-full xs:w-auto">
              <Button 
                variant="bordered" 
                className=" xs:w-auto border-white text-white bg-blue-900 font-semibold px-6"
              >
                View Pricing
              </Button>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;