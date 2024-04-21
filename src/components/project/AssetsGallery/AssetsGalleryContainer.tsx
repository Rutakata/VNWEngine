// import { useEffect } from "react";
import AssetsGallery from "./AssetsGallery";
import Loading from "../../../common/Loading";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
// import { useAppDispatch } from "../../../hooks";
// import { fetchProjectAssets } from "../../../store/slices/projectSlice";

export default function AssetsGalleryContainer() {
  const { projectAssets } = useSelector((state: RootState) => state.project);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (projectFolder) {
  //     dispatch(fetchProjectAssets(projectFolder));
  //   }
  // }, [])

  return projectAssets == null ? <Loading /> : <AssetsGallery assets={projectAssets} />;

}
