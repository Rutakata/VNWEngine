import Project from "./Project";
import Loading from "../../common/Loading";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProjectInfo, setProjectFolder } from "../../store/slices/projectSlice";
import { useAppDispatch } from "../../hooks";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

export default function ProjectContainer() {
  const { projectFolder } = useParams();
  const dispatch = useAppDispatch();
  const projectInfo = useSelector((state: RootState) => state.project.projectInfo);

  useEffect(() => {
    if (projectFolder) {
      dispatch(setProjectFolder(projectFolder));
      dispatch(fetchProjectInfo(projectFolder));
    }
  }, [])

  return projectInfo == null ? <Loading /> : <Project projectInfo={projectInfo} />;
}
