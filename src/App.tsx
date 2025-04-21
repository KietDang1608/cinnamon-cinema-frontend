import { useEffect, useState } from "react";
import { Genre } from "./types/genre";
import { getAllGenres } from "./apis/genreApi";

function App() {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllGenres()
      .then((data) => setGenres(data))
      .catch((err) => console.error("Lỗi khi lấy genres:", err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">🎬 Danh sách thể loại phim</h1>

      {loading ? (
        <p>Đang tải dữ liệu...</p>
      ) : (
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {genres.map((genre) => (
            <li
              key={genre.id}
              className="bg-white rounded shadow p-4 text-center hover:bg-gray-100 transition"
            >
              {genre.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
