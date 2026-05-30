
const Fewpic = async () => {
    const res = await fetch('https://qurbanihat-blond.vercel.app/data.json')
    const photos = await res.json();
    console.log(photos);
    return (
        <div>
            
        </div>
    );
};

export default Fewpic;
