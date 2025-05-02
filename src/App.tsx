import { Routes, Route } from "react-router-dom";
import GenresPage from "./pages/GenresPage";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import Showtime from "./pages/Showtime";

function App() {
  return (
    <>
      <Header />
      <main className="w-full mx-auto px-20 px-4pt-20 bg-gray-900">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/genres" element={<GenresPage />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/showtimes" element={<Showtime/>} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;