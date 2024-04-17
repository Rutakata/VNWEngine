import PageHeader from "../../common/PageHeader";
import ProjectsItem from "../../common/ProjectsItem";

export default function Home() {
  const latest:string[] = ['Test', 'Example', 'Night Call'];

  return (
    <>
      <PageHeader>Latest projects</PageHeader>
      <div className="flex flex-row flex-wrap gap-x-5">
        {latest.map((title: string) => {
          return <ProjectsItem title={title} />
        })}
      </div>
    </>
  )
}

