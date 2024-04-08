import clsx from 'clsx'
import Heading from '../Heading'

export const CreateCsvFirstStep = ({
  otherClasses
}) => {

  const createCsvFirstStepClasses = clsx(
    otherClasses,'w-full max-w-[1500px] mx-auto mt-20 rounded-xl mx-4 md:mx-0 p-6 lg:p-10 shadow-md mb-10'
  )
  
  return (
    <div className={createCsvFirstStepClasses} data-testid='create-csv-first-step'>
      <Heading type='h2' otherClasses='text-2xl font-medium mb-6'>Create New Project</Heading>
      <form action="">
        <div className='flex flex-col w-full mb-6'>
          <label htmlFor="" className='mb-2'>Project Name</label>
          <input type="text" name="" id="" className='px-4 py-2 border rounded-md focus:border-blue-500 outline-none' placeholder='Project Name'/> 
        </div>
        <div className='flex flex-col w-full'>
          <label htmlFor="" className='mb-2'>Project Name</label>
         <select name="" id="" className='px-4 py-2 border rounded-md focus:border-blue-500 outline-none'>
          <option value="" className=''>Select Schedule</option>
          <option value="Once">Once</option>
          <option value="Daily">Daily</option>
          <option value="Weekly">Weekly</option>
          <option value="Monthly">Monthly</option>
         </select>
        </div>
       
      </form>
    </div>
  )
}

export default CreateCsvFirstStep
