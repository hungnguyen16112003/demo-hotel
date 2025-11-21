import { Link } from "react-router-dom";
import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";

const Home = () => {
  const featuredRooms = rooms.slice(0, 3);

  const contactButtons = [
    { label: "Liên hệ Zalo", href: "#" },
    { label: "Gọi Hotline", href: "#" },
    { label: "Facebook Fanpage", href: "#" },
  ];

  return (
    <div className="bg-white">
      <section className="container mx-auto px-4 py-16 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <span className="text-sm uppercase tracking-[0.2em] text-brand font-semibold">
            Aurora Boutique Hotel
          </span>
          <h1 className="mt-4 text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight">
            Kỳ nghỉ thư thái cạnh biển với dịch vụ chuẩn 4 sao
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Không gian đương đại, tiện nghi sang trọng và đội ngũ hỗ trợ 24/7
            giúp bạn tận hưởng từng khoảnh khắc tại Đà Nẵng.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {contactButtons.map((button) => (
              <a
                key={button.label}
                href={button.href}
                className="px-6 py-3 rounded-full border border-brand text-brand font-semibold text-sm tracking-wide hover:bg-brand hover:text-white transition"
              >
                {button.label}
              </a>
            ))}
          </div>
        </div>
        <div className="grid gap-4">
          <img
            src="https://images.unsplash.com/photo-1470246973918-29a93221c455?auto=format&fit=crop&w=900&q=80"
            alt="Khách sạn"
            className="rounded-3xl shadow-xl object-cover h-72 w-full"
          />
          <img
            src="https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=900&q=80"
            alt="Phòng nghỉ"
            className="rounded-3xl shadow-xl object-cover h-64 w-full hidden sm:block"
          />
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-brand">
                Phòng nghỉ
              </p>
              <h2 className="text-3xl font-semibold text-slate-900">
                Không gian phù hợp cho mọi nhu cầu
              </h2>
            </div>
            <Link
              to="/rooms"
              className="text-sm font-semibold text-brand hover:text-brand-light"
            >
              Xem tất cả phòng →
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredRooms.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
