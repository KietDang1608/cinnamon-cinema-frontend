import { Link } from "react-router-dom";
import image from "../assets/image.png"; // Adjust the path as necessary
import { Calendar } from "lucide-react";

export default function Header() {
  return (
    <header className="flex px-20 bg-gray-900 text-white shadow-md w-full fixed top-0 left-0 z-50">
  <div className="container px-20 mx-auto flex justify-between items-center py-3">
    {/* Logo */}
    <Link to="/" className="flex text-2xl font-bold text-yellow-400">
      <img src={image} alt="Image" className=" inline-block mr-2" style={{height:50, width:150}} />
    </Link>
    {/*Booking button */}
    <div className="flex ">
    <Link to="/booking" className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition">ĐẶT VÉ NGAY</Link>
    </div>

    {/* Navigation */}
    <nav className="flex space-x-6">
      <Link to="showtimes" className="flex hover:text-yellow-300 transition"> <Calendar size={20}></Calendar> Lịch chiếu</Link>

      <Link to="/aboutUs" className="hover:text-yellow-300 transition">Giới thiệu</Link>
    </nav>

    {/*Search bar */}
    <div className="flex">
      <input type="text" placeholder="Tìm kiếm..." className="px-4 py-2 border border-gray-300 rounded" />
      <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition">Tìm</button>
    </div>
     
    {/* Auth buttons */}
    <div className="flex space-x-2 ">
      <Link to="/login" className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded hover:bg-yellow-400 hover:text-black transition">Đăng nhập</Link>
      <Link to="/register" className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-300 transition">Đăng ký</Link>
    </div>
      
  </div>

</header>  );
}
