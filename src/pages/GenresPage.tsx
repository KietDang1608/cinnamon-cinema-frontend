import React, { useEffect, useState } from "react";
import { Genre } from "../types/genre";
import { getAllGenres } from "../apis/genreApi";

const GenresPage: React.FC = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllGenres()
      .then((data) => setGenres(data))
      .catch((err) => console.error("Lỗi khi fetch genres:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center text-lg">Đang tải dữ liệu...</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách thể loại</h1>
      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {genres.map((genre) => (
          <li key={genre.id} className="bg-white p-4 rounded shadow text-center">
            {genre.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GenresPage;
