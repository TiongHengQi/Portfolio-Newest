interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12">
      <h2 className="text-4xl font-bold text-center mb-2">{title}</h2>
      {subtitle && <p className="text-center text-gray-400">{subtitle}</p>}
    </div>
  )
}
