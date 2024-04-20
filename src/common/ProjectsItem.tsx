import { useNavigate } from "react-router-dom"

export default function ProjectsItem({title}: {title: string}) {
  const navigate = useNavigate();

  return (
    <div onClick={() => {navigate(`/project/${title.toLowerCase().split(' ').join('-')}`)}} className="bg-lime-400 w-[300px] h-[150px] rounded-2xl flex items-end px-3 py-2 hover:bg-lime-500 duration-300 hover:text-lime-100">
      <h3 className="text-xl font-bold">{title}</h3>
    </div>
  )
}