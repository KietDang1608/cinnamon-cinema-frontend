import React from "react";
import Banner from "../components/Banner";
import SearchBooking from "../components/SearchBooking";
import { useEffect, useState } from "react";
import { Movie } from "../types/movie";
import { getAllMovies } from "../apis/movieApi";



const HomePage: React.FC = () => {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllMovies()
            .then((data) => setMovies(data))
            .catch((err) => console.error("Lỗi khi fetch movies:", err))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <p className="text-center text-lg">Đang tải dữ liệu...</p>;
    return (
        <div className="w-full p-20">
            {/* Banner nằm ngoài padding */}
            <Banner /> 

            {/* Các nội dung khác mới cần padding */}
            <div className="flex flex-col items-center justify-center">
                <SearchBooking />
                <div className="text-center p-4">
                    <h1 className="text-2xl font-bold mb-4 color-white">PHIM ĐANG CHIẾU</h1>
                    
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
                    {movies.map((movie) => (
                        <div key={movie.id} className="bg-white p-4 rounded shadow text-center">
                            <img src={movie.imageUrl} alt={movie.title} className="w-full h-48 object-cover rounded mb-2" />
                            <h2 className="text-lg font-semibold">{movie.title}</h2>
                            <p className="text-gray-600">{movie.releaseDate}</p>
                            <p className="text-gray-600">{movie.description}</p>
                            <p className="text-gray-600">{movie.duration} phút</p>
                            
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
    );};



export default HomePage;
