
export default function PageHeader({ title, children: description }) {
  return (
    <header>
      <h2 className="text-2x1 font-bold text-orange-500">{title}
      </h2>
      <p>{description}</p>
    </header>
  )
}
