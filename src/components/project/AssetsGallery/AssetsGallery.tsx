type Props = {
  assets: string[],
}

export default function AssetsGallery({assets}: Props) {
  return (
    <div className="h-full overflow-auto bg-slate-600 py-2 px-2 rounded-lg">
      <h3 className="text-center text-2xl font-bold mb-2">Assets Gallery</h3>
      <div className="flex flex-row gap-3 flex-wrap items-center">
        {
          assets.length > 0 ? 
            assets.map((image: string) => <img src={image} width="200" key={image} />) :
            'No assets'
        }
      </div>
    </div>
  )
}