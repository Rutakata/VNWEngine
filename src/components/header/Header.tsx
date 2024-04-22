import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom"
import { RootState } from "../../store/store"

export default function Header() {
  const projectName = useSelector((state: RootState) => state.project.projectInfo?.projectName);

  return (
    <header className="bg-slate-900 min-h-20 flex justify-between items-center px-5 py-2">
      <div className="text-2xl font-bold">
        <NavLink to="/home">
          Lotus 
        </NavLink>
        {projectName ? <span className="text-lg font-normal">{` > ${projectName}`}</span> : null}
      </div>
      <ul className="flex flex-row gap-x-5 text-lg">
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/settings">Settings</NavLink>
      </ul>
    </header>
  )
}
