import { Scene } from "../../../types";
import { MdEdit, MdDelete  } from "react-icons/md";

type Props = {
  scene: Scene
}

export default function ScenesGalleryItem({scene}: Props) {
  return (
    <div className="flex flex-col justify-between p-2 bg-slate-900 rounded-md gap-3">
      <h4 className="text-base">{scene.sceneTitle}</h4>
      <div className="flex justify-between items-center">
        <MdEdit size={16} className="hover:text-white" />
        <MdDelete size={16} className="hover:text-white" />
      </div>
    </div>
  )
}
