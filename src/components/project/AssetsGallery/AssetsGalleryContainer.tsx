import { useEffect, useState } from "react";
import { projectAPI } from "../../../axios/requests";
import AssetsGallery from "./AssetsGallery";
import Loading from "../../../common/Loading";

type Props = {
  projectName: string
}

export default function AssetsGalleryContainer({projectName}: Props) {
  const [assets, setAssets] = useState<any|null>(null);

  const requestImage = async () => {
    const response = await projectAPI.getAssets(projectName);
    setAssets(response.assets);
  }

  useEffect(() => {
    try {
      requestImage();
    }catch(error) {
      console.log("Some error");
    }
  }, [])

  return assets == null ? <Loading /> : <AssetsGallery assets={assets} />;

}
