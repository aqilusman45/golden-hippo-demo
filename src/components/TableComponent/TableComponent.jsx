import clsx from 'clsx'
import { useTable, useSortBy, usePagination } from 'react-table'
import React from 'react'
import { FaArrowUpShortWide } from "react-icons/fa6";
import { FaArrowDownShortWide } from "react-icons/fa6";



export const TableComponent = ({
  otherClasses, column, row
}) => {

  const tableComponentClasses = clsx(
    otherClasses, 'w-full max-w-[1550px] mx-6 lg:mx-auto'
  )
  const columns = column
  const data = row

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    nextPage, 
    previousPage,
    canPreviousPage,
    canNextPage,
    state: {
      pageIndex
    },
    pageCount
  } = useTable(
    {
      columns,
      data
    },
    useSortBy,
    usePagination
  );

  return (
    <div className={tableComponentClasses} data-testid='table-component'>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md" {...getTableProps()}>
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-100 dark:text-gray-900">
      {headerGroups.map(headerGroup => (
        <tr key={headerGroup.id} {...headerGroup.getHeaderGroupProps()}>
          {headerGroup.headers.map(column => (
            <th
              scope="col"
              className="px-6 py-3 border text-xl font-normal border-gray-200"
              key={column.id}
              {...column.getHeaderProps(column.getSortByToggleProps())}
            >
              <div className='flex items-center gap-2'>
              <p>{column.render('Header')}</p>
              {column.isSorted && <span>{column.isSortedDesc ? <FaArrowUpShortWide />:  <FaArrowDownShortWide />}</span>}  
              </div>
              
            </th>
          ))}
        </tr>
      ))}
    </thead>

  <tbody {...getTableBodyProps()}>
    {page.map(row => {
      prepareRow(row)
      return (
        <tr key={row.id} {...row.getRowProps()} className='bg-white text-gray-900'>
          {row.cells.map(cell => (
            <td class="px-6 py-4 border border-gray-200" key={cell.id} {...cell.getCellProps()}>{cell.render("Cell")}</td>
          ))}
        </tr>
      )
    })}
  </tbody>
</table>
<div class="flex flex-col items-center mt-10">
  <span class="text-sm text-gray-700 ">
      Showing <span class="font-semibold text-gray-900">{pageIndex + 1}</span> to <span class="font-semibold text-gray-900">{pageCount}</span>
  </span>
  <div class="inline-flex mt-2 xs:mt-0">
    <button disabled={!canPreviousPage} onClick={previousPage} class={clsx("flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", !canPreviousPage && 'opacity-60')}>
        <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
        </svg>
        Prev
    </button>
    <button disabled={!canNextPage} onClick={nextPage} class={clsx("flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white", !canNextPage && 'opacity-60')}>
        Next
        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    </button>
  </div>
    </div>
    </div>
  )
}

export default TableComponent
