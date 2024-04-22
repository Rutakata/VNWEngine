import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import AudioGalleryItem from "./AudioGalleryItem";

export default function AudioGallery() {
  const music = useSelector((state: RootState) => state.project.projectMusic as string[]);
  const projectFolder = useSelector((state: RootState) => state.project.projectFolder as string);

  return (
    <div className="bg-slate-600 py-3 px-3 rounded-lg rounded-tl-none h-fill">
      {
        music.length > 0 ?
        music.map((sound: string) => <AudioGalleryItem audio={sound} projectFolder={projectFolder} />) :
        'No audio content'
      }
    </div>
  )
}
