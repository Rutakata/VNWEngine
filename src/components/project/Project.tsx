import { useLocation } from 'react-router-dom';
import PageHeader from '../../common/PageHeader';
import { asssetsAPI } from '../../axios/requests';
import { useState } from 'react';

export default function Project() {
  const { state } = useLocation();
  const [response, setResponse] = useState<any|null>(null);

  const handleImagesRequest = async () => {
    const response = await asssetsAPI.getImages();
    setResponse(response);
  }

  return (
    <>
      <PageHeader>{state?.projectName}</PageHeader>
      <button onClick={handleImagesRequest}>Request images</button>
      <img src={response ?? ''} width='200' />
    </>
  )
}
