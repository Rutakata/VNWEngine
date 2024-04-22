import Project from "./Project";
import Loading from "../../common/Loading";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { clearProjectData, fetchProjectData, setProjectFolder } from "../../store/slices/projectSlice";
import { useAppDispatch } from "../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function ProjectContainer() {
  const { project } = useParams();
  const dispatch = useAppDispatch();
  const { projectFolder, projectInfo } = useSelector((state: RootState) => state.project);

  useEffect(() => {
    if (project) dispatch(setProjectFolder(project));
    return () => { dispatch(clearProjectData()) };
  }, [])

  useEffect(() => {  
    if (projectFolder) dispatch(fetchProjectData(projectFolder));
  }, [projectFolder])

  return projectInfo == null ? <Loading /> : <Project />;
}
