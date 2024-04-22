type Props = {
  index: number,
  menuItem: number,
  menuItemName: string,
  setMenuItem: (value: number) => void
}

export default function MaterialsItem({index, menuItem, menuItemName, setMenuItem}: Props) {
  return (
    <span onClick={() => setMenuItem(index)} 
          className={`${menuItem === index ? 'bg-slate-600' : 'bg-slate-900'} rounded-t-md px-2 text-md cursor-pointer hover:bg-slate-600`}>
      {menuItemName}
    </span>
  )
}
