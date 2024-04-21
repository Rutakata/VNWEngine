import Loading from "../../../common/Loading";
import TextEditor from "./TextEditor";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { useAppDispatch } from "../../../hooks";
import { fetchProjectText } from "../../../store/slices/projectSlice";

export default function TextEditorContainer() {
  const { projectFolder, projectText } = useSelector((state: RootState) => state.project);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (projectFolder) {
      dispatch(fetchProjectText(projectFolder));
    }
  }, [projectFolder])

  return projectText == null ? <Loading /> : <TextEditor text={projectText} />;
}
