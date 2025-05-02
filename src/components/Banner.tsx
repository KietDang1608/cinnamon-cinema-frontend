import banner from "../assets/banner_web1.jpg";

export default function Banner() {
    return (
        <div className="w-full bg-gray-900">
            <img 
                src={banner} 
                alt="Banner quảng bá rạp chiếu phim CinnamonCinema" 
                className="w-full h-auto object-cover" 
            />
        </div>
    );
}
