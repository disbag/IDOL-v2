import homeIcon from '../assets/icons/home.svg'

export default function Breadcrumbs({ items }) {
  return (
    <nav className="flex items-center gap-[2px] py-[4px]">
      <img src={homeIcon} alt="Главная" className="size-[12px]" />
      {items.map((item, index) => (
        <span key={item.label} className="flex items-center gap-[2px]">
          <span className="w-[12px] text-center text-xs uppercase text-text-disabled">/</span>
          <a
            href={item.href}
            className="whitespace-nowrap text-xs uppercase text-text-disabled transition-colors hover:text-text-primary"
          >
            {item.label}
          </a>
        </span>
      ))}
    </nav>
  )
}
