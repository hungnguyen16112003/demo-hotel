const contactOptions = [
  {
    label: 'Chat Zalo',
    href: '#',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/9/91/Icon_of_Zalo.svg',
    bg: 'bg-white/95',
  },
  {
    label: 'Gọi Hotline',
    href: 'tel:0901234567',
    icon: 'https://img.icons8.com/fluency/96/ringer-volume.png',
    bg: 'bg-white/95',
  },
]

const FloatingContact = () => {
  return (
    <div className="fixed bottom-6 right-6 z-30 flex flex-col gap-3">
      {contactOptions.map((option, index) => (
        <a
          key={option.label}
          href={option.href}
          className={`relative flex items-center gap-3 rounded-full ${option.bg} px-4 py-2.5 shadow-xl shadow-brand/20 border border-white/70 hover:-translate-y-1 hover:shadow-brand/40 transition motion-safe:animate-fade-up animate-pulse-ring`}
          style={{ animationDelay: `${index * 120}ms` }}
        >
          <img
            src={option.icon}
            alt={option.label}
            className="h-10 w-10 rounded-full ring-2 ring-white/40 object-contain motion-safe:animate-float"
            aria-hidden="true"
          />
          <span className="text-sm font-semibold text-brand">{option.label}</span>
        </a>
      ))}
    </div>
  )
}

export default FloatingContact
