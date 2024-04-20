import PageHeader from '../../common/PageHeader';
import AssetsGalleryContainer from './AssetsGallery/AssetsGalleryContainer';
import Preview from './Preview/Preview';

type Props = {
  projectInfo: {
    projectName: string
  },
  projectFolder: string
}

export default function Project({projectInfo, projectFolder}: Props) {
  return (
    <>
      <PageHeader>{projectInfo.projectName}</PageHeader>
      <div className='flex flex-col justify-between grow'>
        <div className='flex justify-between'>
          <Preview />
          <AssetsGalleryContainer projectName={projectFolder} />
        </div>
        <div className='border-4 border-white rounded-lg h-[100px] border-dashed'>Timeline</div>
      </div>
    </>
  )
}
