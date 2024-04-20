import PageHeader from "../../common/PageHeader";
import ProjectsListContainer from "./ProjectsListContainer";
import NewProjectPopup from "./newProjectPopup/NewProjectPopup";
import { useState } from "react";

export default function Projects() {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  return (
    <>
      <PageHeader>Projects</PageHeader>
      <div 
        onClick={() => {setIsVisible(true)}} 
        className="bg-lime-600 px-4 py-3 mb-4 inline-block rounded-xl text-white hover:bg-lime-800 cursor-pointer w-fit">
        Create new project
      </div>

      <div className="flex flex-row flex-wrap gap-5">
        <ProjectsListContainer />
      </div>

      { isVisible ? <NewProjectPopup setIsVisible={setIsVisible} /> : null }
    </>
  )
}
