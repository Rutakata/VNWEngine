import { NavLink } from "react-router-dom"

export default function Header() {
  return (
    <header className="bg-slate-900 min-h-20 flex justify-between items-center px-5 py-2">
      <h1 className="text-2xl font-bold">
        <NavLink to="/home">
          Engine Name
        </NavLink>
      </h1>
      <ul className="flex flex-row gap-x-5 text-lg">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </ul>
    </header>
  )
}
