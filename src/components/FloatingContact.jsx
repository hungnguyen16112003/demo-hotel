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
          className={`relative flex items-center justify-center md:justify-start gap-0 md:gap-3 rounded-full ${option.bg} px-3 py-3 md:px-4 md:py-2.5 shadow-xl shadow-brand/20 border border-white/70 hover:-translate-y-1 hover:shadow-brand/40 transition motion-safe:animate-fade-up animate-pulse-ring`}
          style={{ animationDelay: `${index * 120}ms` }}
          title={option.label}
        >
          <img
            src={option.icon}
            alt={option.label}
            className="h-10 w-10 md:h-10 md:w-10 rounded-full object-contain motion-safe:animate-float"
            aria-hidden="true"
          />
          <span className="hidden md:inline text-sm font-semibold text-brand">{option.label}</span>
        </a>
      ))}
    </div>
  )
}

export default FloatingContact
