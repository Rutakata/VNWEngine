type Props = {
  assets: string[],
}

export default function AssetsGallery({assets}: Props) {
  return (
    <div className="w-[300px] overflow-auto max-h-[400px] bg-slate-600 h-full py-2 px-2 rounded-lg">
      <h3 className="text-center text-2xl font-bold mb-2">Assets Gallery</h3>
      <div className="flex flex-row gap-3 flex-wrap justify-center">
        {
          assets.length > 0 ? 
            assets.map((image: string) => <img src={image} width="200" key={image} />) :
            'No assets'
        }
      </div>
    </div>
  )
}