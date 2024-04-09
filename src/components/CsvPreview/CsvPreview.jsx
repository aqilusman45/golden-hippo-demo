import clsx from 'clsx'
import TableComponent from '../TableComponent'
import { useEffect, useMemo, useState } from 'react'

export const CsvPreview = ({
  otherClasses, dataProps
}) => {

  const csvPreviewClasses = clsx(
    otherClasses
  )

  console.log(dataProps);

  const data = dataProps

  const [columnData, setColumnData] = useState([])
  const [rowData, setRowData] = useState([])

  useEffect(()=>{
     const columns = data[0].e.data[0].map((col)=>{
        return {
          Header: col,
          accessor: col.split(" ").join("_").toLowerCase()
        }
     })

     const row = data[0].e.data.slice(1).map((rowData) => {
      return rowData.reduce((acc, cur, index) => {
        acc[columns[index].accessor] = cur;
        return acc;
      }, {});
    });
     setColumnData(columns)
     setRowData(row)
  }, [])

console.log(columnData, 'col');

  
  return (
    <div className={csvPreviewClasses} data-testid='csv-preview'>
    <TableComponent column={columnData} row={rowData}/>
    </div>
  )
  
}


export default CsvPreview
