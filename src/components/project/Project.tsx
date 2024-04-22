import Materials from './Materials/Materials';
import Preview from './Preview/Preview';
import TextEditorContainer from './TextEditor/TextEditorContainer';

export default function Project() {
  return (
    <>
      <div className='flex justify-between grow gap-7'>
        <TextEditorContainer />
        <div className='flex flex-col gap-7'>
          <Preview />
          {/* <AssetsGalleryContainer /> */}
          {/* <div className='bg-slate-900 h-full'>Scene/Assets/Audio lists</div> */}
          <Materials />
        </div>
      </div>
    </>
  )
}
