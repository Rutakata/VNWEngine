// import { MdDelete  } from "react-icons/md";

type Props = {
  audio: string,
  projectFolder: string
}

export default function AudioGalleryItem({audio, projectFolder}: Props) {
  return (
    <div className="flex flex-col justify-between p-2 bg-slate-900 rounded-md gap-3">
      <audio controls className="text-base" src={`/public/${projectFolder}/audio/${audio}`}></audio>
      <h4>{audio}</h4>
      {/* <div className="flex justify-between items-center">
        <MdDelete size={16} className="hover:text-white" />
      </div> */}
    </div>
  )
}
