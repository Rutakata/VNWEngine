export default function PageHeader({children}: {children: string}) {
  return <h2 className="text-3xl mb-3 font-bold">{children}</h2>
}