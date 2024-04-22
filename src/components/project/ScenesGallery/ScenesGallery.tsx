import ScenesGalleryItem from "./ScenesGalleryItem";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { Scene } from "../../../types";
import { useAppDispatch } from "../../../hooks";
import { createScene } from "../../../store/slices/sceneSlice";

export default function ScenesGallery() {
  const scenes = useSelector((state: RootState) => state.project.projectScenes as Scene[]);
  const dispatch = useAppDispatch(); 

  return (
    <div className="bg-slate-600 py-3 px-3 rounded-lg rounded-tl-none h-fill flex justify-between">
      <div className="flex flex-row gap-3 overflow-auto items-center">
        {
          scenes.length > 0 ? 
           scenes.map((scene: Scene) => <ScenesGalleryItem scene={scene} />) :
           'No scenes'
        }
      </div>
      <div onClick={() => dispatch(createScene({id: 1,  sceneTitle: 'Haha'}))} className="cursor-pointer">Create Scene</div>
    </div>
  )
}
