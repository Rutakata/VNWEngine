import { useParams } from "react-router-dom";
import Project from "./Project";
import { useEffect, useState } from "react";
import { projectAPI } from "../../axios/requests";
import Loading from "../../common/Loading";

type Config = {
  projectName: string
}

export default function ProjectContainer() {
  const [projectInfo, setProjectInfo] = useState<Config | null>(null);
  const { projectFolder } = useParams();

  const requestProjectInfo = async (projectFolder: string) => {
    const projectInfo: Config = await projectAPI.getProjectInfo(projectFolder);
    setProjectInfo(projectInfo);
  }

  useEffect(() => {
    if (projectFolder) {
      requestProjectInfo(projectFolder);
    }
  }, [])

  return projectInfo == null ? <Loading /> : <Project projectInfo={projectInfo as Config} projectFolder={projectFolder as string} />;
}
