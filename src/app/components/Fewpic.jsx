import PhotoCard from "./PhotoCard";
import photos from '../../../public/data.json'; 

const Fewpic = () => {
    const topPhotos = photos; 

    // 1. This slices the first 4 items perfectly
    const topPhoto = topPhotos.slice(0, 4);

    return (
        <div>
            <h1 className="text-2xl font-bold text-center my-5">GET SOME IDEAS</h1>

            <div className="grid grid-cols-4 gap-5">
                {/* 2. CHANGE 'topPhotos' TO 'topPhoto' HERE TO DISPLAY ONLY THE 4 SLICED CARDS */}
                {topPhoto.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} />
                ))}
            </div>
        </div>
    );
};

export default Fewpic;