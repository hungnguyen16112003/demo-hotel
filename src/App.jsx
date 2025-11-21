import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import RoomDetail from './pages/RoomDetail'
import Admin from './pages/Admin'

const navLinkClasses = ({ isActive }) =>
  `text-sm font-semibold tracking-wide px-3 py-2 rounded-full transition ${
    isActive ? 'bg-brand text-white' : 'text-slate-600 hover:text-brand'
  }`

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <header className="border-b border-slate-100 bg-white/95 backdrop-blur sticky top-0 z-20">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <NavLink to="/" className="text-2xl font-semibold text-brand">
              Aurora Hotel
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

        <footer className="bg-slate-900 text-white py-10 mt-8">
          <div className="container mx-auto px-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between text-sm">
            <p>© {new Date().getFullYear()} Aurora Boutique Hotel</p>
            <p>
              123 Võ Nguyên Giáp, Ngũ Hành Sơn, Đà Nẵng · Hotline: <span className="font-semibold">0901 234 567</span>
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
