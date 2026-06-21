import PhotoCard from "./PhotoCard";
import photos from '../../../public/data.json'; 

const Fewpic = () => {
    const topPhotos = photos; 

    // Slices the first 4 items perfectly
    const topPhoto = topPhotos.slice(0, 4);

    return (
        // Added responsive horizontal padding to keep the container clean on all screen sizes
        <div className="px-4 py-6 max-w-7xl mx-auto">
            <h1 className="text-xl sm:text-2xl font-bold text-center my-6 text-white tracking-tight">
                GET SOME IDEAS
            </h1>

            {/* 
              Responsive Grid Configuration:
              - grid-cols-1: 1 card wide on mobile
              - sm:grid-cols-2: 2 cards wide on small screens/tablets (>= 640px)
              - md:grid-cols-3: 3 cards wide on medium screens (>= 768px)
              - lg:grid-cols-4: 4 cards wide on desktops (>= 1024px)
              - gap-4 sm:gap-6: Adjust spacing dynamically so layout feels comfortable
            */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                {topPhoto.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>
        </div>
    );
};

export default Fewpic;