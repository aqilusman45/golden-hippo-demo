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

  const data = [
    {
      id: '01',  
      name: 'herry',
      salary: '300000'
    },
    {
      id: '02',  
      name: 'kaka',
      salary: '700000'
    },
    {
      id: '01',  
      name: 'James',
      salary: '900000'
    },
  ]
  

 const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({
    columns,
    data
 });

  return (
    <div className={tableComponentClasses} data-testid='table-component'>
      <table className='w-full' {...getTableProps()}>
        <thead>
        {headerGroups.map(headerGroup => (
   <tr {...headerGroup.getHeaderGroupProps()}>
     {headerGroup.headers.map(column => (
       <th {...column.getHeaderProps()}>{column.render('Header')}</th>
     ))}
   </tr>
 ))}
             
          {/* <tr>
            <th>Id</th>
            <th>Gender</th>
            <th>Salary</th>
          </tr> */}
        </thead>
        <tbody>
          {/* <tr>
            <td>01</td>
            <td>Male</td>
            <td>100000</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  )
}

export default TableComponent
