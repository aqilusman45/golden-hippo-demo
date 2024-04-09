import clsx from 'clsx'
import Heading from '../Heading'
import TableComponent from '../TableComponent'

export const CsvProjectField = ({
  otherClasses
}) => {

  const csvProjectFieldClasses = clsx(
    otherClasses, 'w-full max-w-[1512px] mx-auto bg-white rounded-md shadow-lg p-6 lg:p-10 mb-10'
  )

  const data = [
    {
      haeder: "Brand",
      data: "gundry md"
    },
    {
      haeder: "Keyword",
      data: "gundry md energy renew"
    },
    {
      haeder: "Kwconfig",
      data: "brand_and_products"
    },
    {
      haeder: "Site",
      data: "youtube.com/watch?v=M3b6KZp0seI"
    },
    {
      haeder: "Location",
      data: "United States"
    },
    {
      haeder: "Site",
      data: "English"
    },
  
  ]
  
  return (
    <div className={csvProjectFieldClasses} data-testid='csv-project-field'>
      <Heading type='h3' otherClasses='text-3xl  text-gray-900 mb-6'>Creat Project</Heading>
      <div className='w-full flex items-center justify-between mb-6'>
        <p>Map Imports Fields</p>
         <p>#Keywords<span>1</span></p>
      </div>
    

<div class="relative overflow-x-auto">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-md">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-100 dark:text-gray-900">
            <tr>
                <th scope="col" class="px-6 py-3 border border-gray-200">
                    CSV Headers
                </th>
                <th scope="col" class="px-6 py-3 border border-gray-200">
                Field
                </th>
                <th scope="col" class="px-6 py-3 border border-gray-200">
                CSV Data
                </th>
            </tr>
        </thead>
        {
          data.map(({haeder, field, data}, i)=>{
            return  <tbody key={i}>
            <tr class="bg-white text-gray-900 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap  border border-gray-200">
                    {haeder}
                </th>
              
                     <td class=" border border-gray-200 px-2" key={i}>
                    <select name="" id="" className='w-full px-4 py-2 rounded-md border border-gray-200'>
                     <option value="Brand">Brand</option>
                     <option value="Keyword">Keyword</option>
                     <option value="Kwconfig">Kwconfig</option>
                     <option value="Site">Site</option>
                     <option value="Location">Location</option>
                     <option value="Language">Language</option>
                    </select>
                 </td>
             
                <td class="px-6 py-4 border border-gray-200">
                   {data}
                </td>
            </tr>
        </tbody>
          })
        }
       
    </table>
</div>


     {/* <TableComponent/> */}
    </div>
  )
}

export default CsvProjectField
