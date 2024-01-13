const TableHeadCell = (props : any) => {
  return (
    <th className={`${props.className}`}>{props.children}</th>
  )
}

const TableBodyCell = (props: any) => {
  return(
    <td className={`p-2 text-center border-2 border-primary min-w-40 text-[12px] ${props.className}`}>{props.children}</td>
  )
}

export {TableHeadCell, TableBodyCell}