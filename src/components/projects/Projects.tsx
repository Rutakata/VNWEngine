import PageHeader from "../../common/PageHeader";
import ProjectsItem from "../../common/ProjectsItem";

export default function Projects() {
  const projects:string[] = [ "Night call", "Sounds of a soul", "Last word", 
                              "Blue Paradise", "Fate: Stay Night", "Fate: Grand Order" ];

  return (
    <div>
      <PageHeader>Projects</PageHeader>
      
      <div className="flex flex-row flex-wrap gap-5">
        {projects.map((project: string) => {
          return <ProjectsItem title={project} />
        })}
      </div>
    </div>
  )
}
