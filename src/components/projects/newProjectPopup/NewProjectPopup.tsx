import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projectAPI } from "../../../axios/requests";

type Props = {
  setIsVisible: (value: boolean) => void
}

export default function NewProjectPopup({setIsVisible}:Props) {
  const [projectName, setProjectName] = useState<string | null>(null);
  const [isAvailable, setIsAvailable] = useState<boolean>(false);
  const navigate = useNavigate();

  const onProjectCreation = async () => {
    const response = await projectAPI.createProject(projectName?.toLowerCase().split(' ').join('-') as string, projectName as string);

    if (response+'' === 'SUCCESS') {
      navigate(`/project/${projectName?.toLowerCase().split(' ').join('-')}`, { state: {projectName} });
    }
  }
  
  const onNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setProjectName(e.currentTarget.value);
    if (e.currentTarget.value === '' || e.currentTarget.value.length < 4) {
      setIsAvailable(false);
    }else {
      setIsAvailable(true);
    }
  }
  
  const handleClosure = (e: React.MouseEvent) => {
    e.stopPropagation();
  }

  return (
    <div className="absolute top-0 left-0 w-full h-full bg-slate-900/50 flex justify-center items-center" onClick={() => setIsVisible(false)}>
      <div onClick={handleClosure} className="flex items-center justify-start flex-col w-[400px] h-[300px] gap-y-8 bg-slate-900 rounded-2xl p-8">
        <h3 className="text-2xl font-bold">Setup</h3>
        
        <form className="flex flex-col items-center justify-between bg-slate-800 w-full h-full rounded-lg p-2" onSubmit={(e: React.FormEvent) => {e.preventDefault()}}>
          <div className="flex flex-col gap-2 w-full">
            <label className="text-lg">Project's Name</label>
            <input type="text" onChange={onNameChange} className="w-full bg-white text-black placeholder:text-grey px-1" placeholder="Give me a name" />
          </div>
          {
            isAvailable ? 
            // <Link to={`/project/${projectName?.toLowerCase().split(' ').join('-')}`} state={{projectName: projectName}}>
              <button onClick={onProjectCreation} className="bg-slate-900 px-3 py-2 text-lg font-bold rounded-md hover:bg-slate-700">
                Create
              </button> :
            // </Link> :
            null
          }
        </form>
      </div>
    </div>
  )
}
