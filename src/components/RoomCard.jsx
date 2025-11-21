import { Link } from 'react-router-dom'

const RoomCard = ({ room }) => {
  return (
    <article className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
      <img
        src={room.image}
        alt={room.name}
        className="h-52 w-full object-cover hover:opacity-90 transition"
      />
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-semibold text-slate-900">{room.name}</h3>
          <span className="text-brand text-base font-semibold">{room.price}</span>
        </div>
        <p className="text-slate-600 text-sm mb-4">
          {room.description}
        </p>
        <ul className="text-sm text-slate-500 space-y-1 mb-6">
          {room.amenities.slice(0, 4).map((amenity) => (
            <li key={amenity}>• {amenity}</li>
          ))}
          {room.amenities.length > 4 && <li>• ...</li>}
        </ul>
        <Link
          to={`/rooms/${room.id}`}
          className="mt-auto inline-flex items-center justify-center rounded-full border border-brand text-brand px-4 py-2 text-sm font-semibold hover:bg-brand hover:text-white transition"
        >
          Xem chi tiết
        </Link>
      </div>
    </article>
  )
}

export default RoomCard
