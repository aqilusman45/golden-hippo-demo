import clsx from 'clsx'
import Heading from '../Heading'

export const CsvProjectField = ({
  otherClasses
}) => {

  const csvProjectFieldClasses = clsx(
    otherClasses, 'w-full max-w-[1512px] mx-auto bg-white rounded-md shadow-lg p-6 lg:p-10 mb-10'
  )
  
  return (
    <div className={csvProjectFieldClasses} data-testid='csv-project-field'>
      <Heading type='h3' otherClasses='text-3xl  text-gray-900 mb-6'>Creat Project</Heading>
      <div className='w-full flex items-center justify-between'>
        <p>Map Imports Fields</p>
         <p>#Keywords<span>1</span></p>
      </div>

      <table className='w-full'>
        <tr className='p-6 rounded-lg bg-gray-100'>
          <td>CSV Headers</td>
          <td>Field</td>
          <td>CSV Data</td>
        </tr>
        
      </table>
    </div>
  )
}

export default CsvProjectField
