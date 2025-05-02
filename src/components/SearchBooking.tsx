export default function SearchBooking() {
    return (
        <div className="w-full p-4 bg-white shadow-md rounded-lg">
            <h2 className="text-xl font-bold mb-4 text-center">ĐẶT VÉ NHANH</h2>
            <div className="flex flex-col md:flex-row md:space-x-4">
                <select className="flex-1 p-2 border border-gray-300 rounded">
                    <option value="">1. CHỌN RẠP</option>
                    {/* Add more options here */}
                </select>
                <select className="flex-1 p-2 border border-gray-300 rounded">
                    <option value="">2. CHỌN PHIM</option>
                    {/* Add more options here */}
                </select>
                <select className="flex-1 p-2 border border-gray-300 rounded">
                    <option value="">3. CHỌN NGÀY</option>
                    {/* Add more options here */}
                </select>
                <select className="flex-1 p-2 border border-gray-300 rounded">
                    <option value="">4. CHỌN SUẤT</option>
                    {/* Add more options here */}
                </select>
                <button className="mt-4 md:mt-0 md:ml-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
                    ĐẶT VÉ NGAY
                </button>
            </div>
        </div>
    );
}