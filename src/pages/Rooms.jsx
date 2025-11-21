import rooms from '../data/rooms'
import RoomCard from '../components/RoomCard'

const Rooms = () => {
  return (
    <section className="bg-slate-50 py-16 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <p className="text-sm uppercase tracking-[0.3em] text-brand">Danh sách phòng</p>
          <h1 className="text-4xl font-semibold text-slate-900 mt-3">Chọn không gian phù hợp cho kỳ nghỉ</h1>
          <p className="mt-4 text-slate-600">
            Mọi phòng đều được vệ sinh mỗi ngày, cung cấp nước suối miễn phí và hỗ trợ đặt dịch vụ du lịch theo yêu cầu.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Rooms
