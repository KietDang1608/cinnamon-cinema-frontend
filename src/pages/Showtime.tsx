import React from "react";
import {Calendar, Clapperboard, MapPin} from "lucide-react";
const Showtime: React.FC = () => {
    return (
        <div className="flex gap-4 bg-[#0b1020] p-4 rounded-md">
          {/* Ngày */}
          <div className="flex flex-col text-yellow-400 border border-white/20 rounded-xl p-4 w-1/3">
            <div className="flex items-center justify-between font-bold text-lg mb-2">
              <span>1. Ngày</span>
              <Calendar size={20} />
            </div>
            <select className="bg-white text-black font-semibold rounded-md p-2">
              <option>Hôm Nay 29/04</option>
              <option>Ngày Mai 30/04</option>
            </select>
          </div>
    
          {/* Phim */}
          <div className="flex flex-col text-yellow-400 border border-white/20 rounded-xl p-4 w-1/3">
            <div className="flex items-center justify-between font-bold text-lg mb-2">
              <span>2. Phim</span>
              <Clapperboard size={20} />
            </div>
            <select className="bg-white text-black font-semibold rounded-md p-2">
              <option>Chọn Phim</option>
              <option>Avengers: Endgame</option>
            </select>
          </div>
    
          {/* Rạp */}
          <div className="flex flex-col text-yellow-400 border border-white/20 rounded-xl p-4 w-1/3">
            <div className="flex items-center justify-between font-bold text-lg mb-2">
              <span>3. Rạp</span>
              <MapPin size={20} />
            </div>
            <select className="bg-white text-black font-semibold rounded-md p-2">
              <option>Chọn Rạp</option>
              <option>CGV Vincom</option>
            </select>
          </div>
        </div>
      );
    }

export default Showtime;