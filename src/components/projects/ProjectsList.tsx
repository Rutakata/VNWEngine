import ProjectsItem from "../../common/ProjectsItem"

type Props = {
  projects: string[]
}

export default function ProjectsList({ projects }: Props) {
  return (
    <>
    { 
      projects.length > 0 ?
        projects.map((project: string) => {
          return <ProjectsItem title={project} />
        }) : 
        'There are no projects yet'
    }
    </>
  )
}
