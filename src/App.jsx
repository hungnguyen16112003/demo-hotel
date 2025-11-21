import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import Rooms from './pages/Rooms'
import RoomDetail from './pages/RoomDetail'
import Admin from './pages/Admin'
import FloatingContact from './components/FloatingContact'

// Component để scroll to top khi route thay đổi
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant', // Sử dụng 'instant' để scroll ngay lập tức
    })
  }, [pathname])

  return null
}

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
      { label: 'Sự kiện & Hội nghị', href: '#' },
    ],
  },
  {
    title: 'Dịch vụ',
    items: [
      { label: 'Đón sân bay miễn phí', href: '#' },
      { label: 'Thuê xe riêng', href: '#' },
      { label: 'Ẩm thực tại phòng', href: '#' },
      { label: 'Spa & Wellness', href: '#' },
      { label: 'Hồ bơi vô cực', href: '#' },
    ],
  },
  {
    title: 'Hỗ trợ',
    items: [
      { label: 'Câu hỏi thường gặp', href: '#' },
      { label: 'Chính sách hủy phòng', href: '#' },
      { label: 'Điều khoản sử dụng', href: '#' },
      { label: 'Bảo mật thông tin', href: '#' },
    ],
  },
]

const socialLinks = [
  { name: 'Facebook', icon: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z', href: '#' },
  { name: 'Instagram', icon: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z', href: '#' },
  { name: 'TikTok', icon: 'M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z', href: '#' },
  { name: 'YouTube', icon: 'M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z', href: '#' },
]

const App = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isDesktopMenuOpen && !event.target.closest('.menu-container')) {
        setIsDesktopMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isDesktopMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const toggleDesktopMenu = () => {
    setIsDesktopMenuOpen(!isDesktopMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const closeDesktopMenu = () => {
    setIsDesktopMenuOpen(false)
  }

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <header className="border-b border-slate-100 bg-white/95 backdrop-blur sticky top-0 z-20 motion-safe:animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <NavLink to="/" className="text-2xl font-semibold text-brand" onClick={closeMobileMenu}>
              Demo Hotel
            </NavLink>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-2">
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

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-slate-600 hover:text-brand hover:bg-slate-100 transition-all duration-300"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90 scale-110' : 'rotate-0 scale-100'}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-slate-100 bg-white animate-slide-down">
              <nav className="container mx-auto px-4 py-4 flex flex-col gap-2">
                <NavLink
                  to="/"
                  className={navLinkClasses}
                  end
                  onClick={closeMobileMenu}
                >
                  Trang chủ
                </NavLink>
                <NavLink
                  to="/rooms"
                  className={navLinkClasses}
                  onClick={closeMobileMenu}
                >
                  Danh sách phòng
                </NavLink>
                <NavLink
                  to="/admin"
                  className={navLinkClasses}
                  onClick={closeMobileMenu}
                >
                  Admin
                </NavLink>
              </nav>
            </div>
          )}
        </header>

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:id" element={<RoomDetail />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>

        <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white mt-16 motion-safe:animate-fade-in">
          {/* Main Footer Content */}
          <div className="container mx-auto px-4 py-16">
            <div className="grid gap-12 lg:grid-cols-5">
              {/* Brand Column */}
              <div className="lg:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">Demo Hotel</h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Khách sạn boutique chuẩn 4 sao với 120+ phòng nghỉ, hồ bơi vô cực
                  và rooftop bar nhìn thẳng ra biển Mỹ Khê. Trải nghiệm nghỉ dưỡng
                  đẳng cấp tại trung tâm thành phố Đà Nẵng.
                </p>
                
                {/* Contact Info with Icons */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-brand mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span>123 Võ Nguyên Giáp, Ngũ Hành Sơn, Đà Nẵng</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <a href="tel:0901234567" className="hover:text-brand transition">0901 234 567</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <a href="mailto:booking@demohotel.vn" className="hover:text-brand transition">booking@demohotel.vn</a>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-slate-300">
                    <svg className="w-5 h-5 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                    <span>Zalo CSKH: 0901 888 000</span>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h4 className="text-sm font-semibold text-white mb-3">Kết nối với chúng tôi</h4>
                  <div className="flex gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        className="w-10 h-10 rounded-full bg-slate-800 hover:bg-brand flex items-center justify-center transition-all duration-200 hover:scale-110"
                        aria-label={social.name}
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d={social.icon} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Links Columns */}
              {footerLinks.map((column) => (
                <div key={column.title}>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                    {column.title}
                  </h4>
                  <ul className="space-y-3">
                    {column.items.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="text-sm text-slate-300 hover:text-brand transition-colors duration-200 flex items-center gap-2"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-slate-800 bg-slate-950">
            <div className="container mx-auto px-4 py-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-xs text-slate-400 text-center md:text-left">
                  © {new Date().getFullYear()} Demo Hotel. Tất cả quyền được bảo lưu.
                </div>
                <div className="flex items-center gap-6 text-xs text-slate-400">
                  <a href="#" className="hover:text-brand transition">Chính sách bảo mật</a>
                  <a href="#" className="hover:text-brand transition">Điều khoản sử dụng</a>
                  <a href="#" className="hover:text-brand transition">Sơ đồ trang web</a>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Chứng nhận 4 sao</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Đảm bảo chất lượng</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                  <span>Thanh toán an toàn</span>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <FloatingContact />
      </div>
    </BrowserRouter>
  )
}

export default App
