import { useEffect, useState } from "react";
import { asssetsAPI } from "../../../axios/requests";
import AssetsGallery from "./AssetsGallery";
import Loading from "../../../common/Loading";


type Props = {
  projectName: string
}

export default function AssetsGalleryContainer({projectName}: Props) {
  const [images, setImages] = useState<any|null>(null);

  const requestImage = async () => {
      const response = await asssetsAPI.getImages(projectName);
      setImages(response.images);
  }

  useEffect(() => {
    try {
      requestImage();
    }catch(error) {
      console.log("Some error");
    }
    console.log("Rerendering", images);
    
  }, [])

  return images == null ? <Loading /> : <AssetsGallery images={images} />;

}
