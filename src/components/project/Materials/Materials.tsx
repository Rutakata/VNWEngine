import { useState } from "react";
import AssetsGalleryContainer from "../AssetsGallery/AssetsGalleryContainer";
import MaterialsItem from "./MaterialsItem";

export default function Materials() {
  const [ menuItem, setMenuItem ] = useState<number>(0);
  const menuItems = ['Scenes', 'Assets', 'Audio'];

  return (
    <div className='h-full'>
      <div className="flex gap-1">
        {
          menuItems.map((menuItemName: string, index: number) => {
            return <MaterialsItem menuItem={menuItem} key={index} index={index} menuItemName={menuItemName} setMenuItem={setMenuItem} />
          })
        }
      </div>
      {
        menuItem === 0 ? <div>Scenes</div> : menuItem === 1 ? <AssetsGalleryContainer /> : <div>Audio</div>
      }
    </div>
  )
}
