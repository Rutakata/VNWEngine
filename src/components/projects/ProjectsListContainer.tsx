import { projectAPI } from "../../axios/requests";
import { useEffect, useState } from "react";
import Loading from "../../common/Loading";
import ProjectsList from "./ProjectsList";

export default function ProjectsListContainer() {
  const [projects, setProjects] = useState<string[]|null>(null);

  const requestProjects = async () => {
    const response = await projectAPI.getAllProjects();
    console.log(response);
    
    setProjects(response.projects);
  }

  useEffect(() => {
    try {
      requestProjects();
    }catch(error) {
      console.log(error);
    }
    
  }, [])

  return projects == null ? <Loading /> : <ProjectsList projects={projects} />;
}
