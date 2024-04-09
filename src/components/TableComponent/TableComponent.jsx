import clsx from 'clsx'
import { useTable } from 'react-table'
import React from 'react'



export const TableComponent = ({
  otherClasses, 
}) => {

  const tableComponentClasses = clsx(
    otherClasses, 'w-full'
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Address',
        accessor: 'address',
      },
      {
        Header: 'Date',
        accessor: 'date',
      },
    ],
    []
   )

   const data = React.useMemo(
    () =>  [
      {
        id: '01',  
        name: 'John Doe',
        address: '123 Main St',
        date: '2024-04-09',
        salary: 50000
      },
      {
        id: '02',  
        name: 'Jane Smith',
        address: '456 Elm St',
        date: '2024-04-10',
        salary: 60000
      },
      // Add more sample data objects here if needed
    ], 
    []
  );
  

 const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
    columns,
    data
 });

  return (
    <div className={tableComponentClasses} data-testid='table-component'>
    <table className='w-full' {...getTableProps()}>
  <thead>
    {headerGroups.map(headerGroup => (
      <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
        {headerGroup.headers.map(column => (
          <th key={column.id} {...column.getHeaderProps()}>{column.render('Header')}</th>
        ))}
      </tr>
    ))}
  </thead>
  <tbody {...getTableBodyProps()}>
    {rows.map(row => {
      prepareRow(row)
      return (
        <tr key={row.id} {...row.getRowProps()}>
          {row.cells.map(cell => (
            <td key={cell.id} {...cell.getCellProps()}>{cell.render("Cell")}</td>
          ))}
        </tr>
      )
    })}
  </tbody>
</table>
    </div>
  )
}

export default TableComponent
