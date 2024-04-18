import { useLocation } from 'react-router-dom';
import PageHeader from '../../common/PageHeader';
import AssetsGalleryContainer from './AssetsGallery/AssetsGalleryContainer';

export default function Project() {
  const { state } = useLocation();

  return (
    <>
      <PageHeader>{state?.projectName}</PageHeader>
      <AssetsGalleryContainer projectName={state.projectName} />
    </>
  )
}
