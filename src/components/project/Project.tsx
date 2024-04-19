import { useLocation } from 'react-router-dom';
import PageHeader from '../../common/PageHeader';
import AssetsGalleryContainer from './AssetsGallery/AssetsGalleryContainer';

type State = {
  projectName: string
}

export default function Project() {
  const { state }: { state: State } = useLocation();

  return (
    <>
      <PageHeader>{state.projectName}</PageHeader>
      <AssetsGalleryContainer projectName={state.projectName} />
    </>
  )
}
