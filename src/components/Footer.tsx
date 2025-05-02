import { Link } from "react-router-dom";
import image from "../assets/image.png"; // Adjust the path as necessary
export default function Footer() {
  return (
    <footer className="bg-gray-900 flex flex-row text-white w-full mt-10">
      <div className="container flex">
        <div className="container  flex-row mx-auto space-x-3">
            
          <Link to="/" className=" text-2xl  font-bold text-yellow-400">
            <img src={image} alt="Image" className=" inline-block mr-2" style={{height:120, width:300}} />
          </Link>
          <p className="text-2xl ">BE HAPPY, BE A CINNAMON</p>
        </div>
        <div className="flex flex-col items-center justify-center w-full text-center py-4">
          <p className="mb-4">© 2025 Movie Booking. All rights reserved.</p>
          <nav className="flex space-x-4">
            <Link to="/privacy" className="hover:text-yellow-300 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-yellow-300 transition">Terms of Service</Link>
            <Link to="/contact" className="hover:text-yellow-300 transition">Contact Us</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}