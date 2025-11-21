import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import RoomDetail from './pages/RoomDetail'
import Admin from './pages/Admin'
import FloatingContact from './components/FloatingContact'

const navLinkClasses = ({ isActive }) =>
  `text-sm font-semibold tracking-wide px-3 py-2 rounded-full transition ${
    isActive ? 'bg-brand text-white' : 'text-slate-600 hover:text-brand'
  }`

const footerLinks = [
  {
    title: 'Khám phá',
    items: [
      { label: 'Danh sách phòng', href: '/rooms' },
      { label: 'Ưu đãi cuối tuần', href: '#' },
      { label: 'Combo tour Đà Nẵng', href: '#' },
    ],
  },
  {
    title: 'Dịch vụ nổi bật',
    items: [
      { label: 'Đón sân bay miễn phí', href: '#' },
      { label: 'Thuê xe riêng', href: '#' },
      { label: 'Ẩm thực tại phòng', href: '#' },
    ],
  },
]

const contactDetails = [
  '123 Võ Nguyên Giáp, Ngũ Hành Sơn, Đà Nẵng',
  'Hotline: 0901 234 567',
  'Email: booking@demohotel.vn',
  'Zalo CSKH: 0901 888 000',
]

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <header className="border-b border-slate-100 bg-white/95 backdrop-blur sticky top-0 z-20 motion-safe:animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <NavLink to="/" className="text-2xl font-semibold text-brand">
              Demo Hotel
            </NavLink>
            <nav className="flex items-center gap-2">
              <NavLink to="/" className={navLinkClasses} end>
                Trang chủ
              </NavLink>
              <NavLink to="/rooms" className={navLinkClasses}>
                Danh sách phòng
              </NavLink>
              <NavLink to="/admin" className={navLinkClasses}>
                Admin
              </NavLink>
            </nav>
          </div>
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<RoomDetail />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <footer className="bg-slate-900 text-white py-12 mt-8 motion-safe:animate-fade-in">
          <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
            <div>
              <h3 className="text-xl font-semibold">Demo Hotel</h3>
              <p className="text-slate-300 text-sm mt-3">
                Khách sạn boutique chuẩn 4 sao với 120+ phòng nghỉ, hồ bơi vô cực
                và rooftop bar nhìn thẳng ra biển Mỹ Khê.
              </p>
              <div className="mt-4 space-y-1 text-sm text-slate-400">
                {contactDetails.map((item) => (
                  <p key={item}>{item}</p>
                ))}
              </div>
            </div>

            {footerLinks.map((column) => (
              <div key={column.title}>
                <h4 className="text-sm uppercase tracking-[0.3em] text-white">
                  {column.title}
                </h4>
                <ul className="mt-4 space-y-2 text-sm">
                  {column.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        className="text-white font-medium hover:text-brand-light transition"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} Demo Hotel · Made for demo purposes
          </div>
        </footer>
        <FloatingContact />
      </div>
    </BrowserRouter>
  )
}

export default App
