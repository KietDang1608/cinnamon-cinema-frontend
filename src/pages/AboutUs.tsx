import React from "react";

const AboutUs: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full p-20 bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Về Chúng Tôi</h1>
        <p className="text-lg text-center mb-8">
            Chào mừng bạn đến với trang web đặt vé xem phim của chúng tôi! Chúng tôi là một nhóm đam mê điện ảnh, mong muốn mang đến cho bạn những trải nghiệm tuyệt vời nhất khi thưởng thức các bộ phim yêu thích.
        </p>
        <p className="text-lg text-center mb-8">
            Với giao diện thân thiện và dễ sử dụng, bạn có thể dễ dàng tìm kiếm và đặt vé cho các bộ phim đang chiếu tại rạp gần nhất. Chúng tôi cam kết cung cấp thông tin chính xác và nhanh chóng để bạn có thể tận hưởng những giây phút giải trí tuyệt vời.
        </p>
        <p className="text-lg text-center mb-8">
            Cảm ơn bạn đã chọn chúng tôi làm đối tác trong hành trình điện ảnh của mình. Hãy cùng nhau khám phá thế giới điện ảnh đầy màu sắc!
        </p>
        </div>
    );
    }

export default AboutUs;