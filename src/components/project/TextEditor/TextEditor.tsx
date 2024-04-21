import { Text } from "../../../types"

type Props = {
  text: Text[]
}

export default function TextEditor({text}: Props) {
  return (
    <div className='bg-slate-900 w-full'>
      {
        text.map((item: Text) => {
          return <span className="mr-2" key={item.id}>{item.id}</span>
        })
      }
    </div>
  )
}
