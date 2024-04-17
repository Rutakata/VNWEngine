import { useLocation } from 'react-router-dom';
import PageHeader from '../../common/PageHeader';

export default function Project() {
  let { state } = useLocation();

  return (
    <>
      <PageHeader>{state?.projectName}</PageHeader>
    </>
  )
}
