type Props = {
  assets: string[],
}

export default function AssetsGallery({assets}: Props) {
  return (
    <div className="bg-slate-600 py-3 px-3 rounded-lg rounded-tl-none">
      <h3 className="text-center text-2xl font-bold mb-2">Assets Gallery</h3>
      <div className="flex flex-row gap-3 overflow-auto items-center">
        {
          assets.length > 0 ? 
            assets.map((image: string) => <img src={image} className="max-h-[100px]" key={image} />) :
            'No assets'
        }
      </div>
    </div>
  )
}