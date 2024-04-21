import PageHeader from '../../common/PageHeader';
// import AssetsGalleryContainer from './AssetsGallery/AssetsGalleryContainer';
import Preview from './Preview/Preview';
import TextEditorContainer from './TextEditor/TextEditorContainer';

type Props = {
  projectInfo: {
    projectName: string
  }
}

export default function Project({projectInfo}: Props) {
  return (
    <>
      <PageHeader>{projectInfo.projectName}</PageHeader>
      <div className='flex justify-between grow gap-7'>
        <TextEditorContainer />
        <div className='flex flex-col gap-7'>
          <Preview />
          {/* <AssetsGalleryContainer projectName={projectFolder} /> */}
          <div className='bg-slate-900 h-full'>Scene/Assets/Audio lists</div>
        </div>
      </div>
    </>
  )
}
