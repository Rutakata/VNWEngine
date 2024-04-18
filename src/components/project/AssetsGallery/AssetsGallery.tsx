type Props = {
  images: string[]
}

export default function AssetsGallery({images}: Props) {
  return (
    <div className="w-[300px] bg-slate-600 h-full">
      <h3>Assets Gallery</h3>
      <div className="flex flex-row gap-3 flex-wrap justify-center">
        {
          images.map((image: string) => <img src={image} width="200" key={image} />)
        }
      </div>
    </div>
  )
}