import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import rooms from '../data/rooms'

const RoomDetail = () => {
  const { id } = useParams()
  const room = rooms.find((item) => item.id === id)

  if (!room) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
        <div className="text-center">
          <p className="text-xl font-semibold text-slate-800">
            Không tìm thấy phòng bạn yêu cầu.
          </p>
          <Link
            to="/rooms"
            className="mt-6 inline-flex px-6 py-3 rounded-full bg-brand text-white text-sm font-semibold hover:bg-brand-light transition"
          >
            Quay lại danh sách phòng
          </Link>
        </div>
      </section>
    )
  }

  // Tạo gallery bao gồm ảnh chính và các ảnh trong gallery
  const allImages = room.gallery?.length 
    ? [room.image, ...room.gallery] 
    : [room.image]
  
  const [selectedImage, setSelectedImage] = useState(allImages[0])

  return (
    <section className="bg-white min-h-screen motion-safe:animate-fade-up">
      <div className="container mx-auto px-4 py-12">
        <Link
          to="/rooms"
          className="inline-flex text-sm font-semibold text-brand hover:text-brand-light"
        >
          ← Quay lại danh sách phòng
        </Link>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="motion-safe:animate-fade-in">
            {/* Ảnh lớn */}
            <div className="mb-4">
              <img
                src={selectedImage}
                alt={room.name}
                className="rounded-3xl w-full object-cover h-64 lg:h-96 shadow-lg transition-opacity duration-300"
              />
            </div>
            {/* Danh sách thumbnail */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {allImages.map((imgUrl, index) => (
                <button
                  key={imgUrl}
                  onClick={() => setSelectedImage(imgUrl)}
                  className={`flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === imgUrl
                      ? 'border-brand shadow-md scale-105'
                      : 'border-transparent hover:border-slate-300 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={imgUrl}
                    alt={`${room.name} ${index + 1}`}
                    className="w-20 h-20 lg:w-24 lg:h-24 object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
          <div className="bg-slate-50 rounded-3xl p-8 flex flex-col motion-safe:animate-fade-up" style={{ animationDelay: '120ms' }}>
            <span className="uppercase text-xs tracking-[0.3em] text-brand font-semibold">
              {room.name}
            </span>
            <h1 className="text-4xl font-semibold text-slate-900 mt-3">{room.name}</h1>
            <p className="text-2xl text-brand font-semibold mt-4">{room.price}</p>
            <p className="mt-6 text-slate-600 leading-relaxed">{room.description}</p>
            <div className="mt-8">
              <h2 className="text-lg font-semibold text-slate-800 mb-3">Tiện nghi bao gồm</h2>
              <ul className="space-y-2 text-slate-600 list-disc list-inside">
                {room.amenities.map((amenity) => (
                  <li key={amenity}>{amenity}</li>
                ))}
              </ul>
            </div>
            <button className="mt-10 inline-flex justify-center rounded-full bg-brand text-white px-6 py-3 text-sm font-semibold hover:bg-brand-light transition">
              Liên hệ đặt phòng
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RoomDetail
