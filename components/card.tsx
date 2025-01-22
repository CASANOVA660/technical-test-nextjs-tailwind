interface CardProps {
  title: string
  description: string
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-serif mb-4 text-[#2D2D2B]">{title}</h3>
      <p className="text-[#2D2D2B] text-sm leading-relaxed">{description}</p>
    </div>
  )
}
