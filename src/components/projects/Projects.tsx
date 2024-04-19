import PageHeader from "../../common/PageHeader";
import ProjectsItem from "../../common/ProjectsItem";
import NewProjectPopup from "./newProjectPopup/NewProjectPopup";
import { useState } from "react";

type Props = {
  projects: string[]
}

export default function Projects({projects}: Props) {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <PageHeader>Projects</PageHeader>
      <div 
        onClick={() => {setIsVisible(true)}} 
        className="bg-lime-600 px-4 py-3 mb-4 inline-block rounded-xl text-white hover:bg-lime-800 cursor-pointer">
        Create new project
      </div>

      <div className="flex flex-row flex-wrap gap-5">
        {projects.map((project: string) => {
          return <ProjectsItem title={project} />
        })}
      </div>

      { isVisible ? <NewProjectPopup setIsVisible={setIsVisible} /> : null }
    </>
  )
}
