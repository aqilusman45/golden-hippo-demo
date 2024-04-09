import clsx from 'clsx'
import Heading from '../Heading'
import Button from '../Button'
import { useEffect, useState } from 'react'

export const CreateCsvFirstStep = ({
  otherClasses, handleDataProps, handleNavigateNext, handleNavigatePrev, componentIndex
}) => {

  const createCsvFirstStepClasses = clsx(
    otherClasses,'w-full'
  )
  const [project, setProject] = useState({
    name: "",
    selec: ""
  })

  const handleProjectDetail=(e)=>{
    setProject((prev)=>({
        ...prev,
        [e.target.name]: e.target.value,
    }))
  }

  let projectDetail = project
  
  return (
    <div className={createCsvFirstStepClasses} data-testid='create-csv-first-step'>
      <div className='w-full max-w-[1500px] lg:mx-auto mt-20 rounded-xl mx-4 md:mx-0 p-6 lg:p-10 shadow-md mb-10'>
      <Heading type='h2' otherClasses='text-2xl font-medium mb-6'>Create New Project</Heading>
      <form action="">
        <div className='flex flex-col w-full mb-6'>
      <label htmlFor="projectName" className='mb-2'>Project Name</label>
      <input type="text" name="name" id="projectName" value={project.name} onChange={handleProjectDetail} className='px-4 py-2 border rounded-md focus:border-blue-500 outline-none' placeholder='Project Name'/> 
    </div>
    <div className='flex flex-col w-full'>
      <label htmlFor="projectSchedule" className='mb-2'>Project Schedule</label>
      <select name="selec" id="projectSchedule" value={project.selec} onChange={handleProjectDetail} className='px-4 py-2 border rounded-md focus:border-blue-500 outline-none'>
        <option value="">Select Schedule</option>
        <option value="Once">Once</option>
        <option value="Daily">Daily</option>
        <option value="Weekly">Weekly</option>
        <option value="Monthly">Monthly</option>
      </select>
    </div>
      </form>
      </div>
  
      <div className='w-full flex items-center justify-between'>
         <Button
            variant="link"
            label="Previous"
            onClick={() => handleNavigatePrev(componentIndex)}
            otherClasses={clsx(componentIndex === 1 && "opacity-70 cursor-not-allowed hover:bg-none focus:border-none")}
          />
          <Button
            variant="link"
            label="Next"
            onClick={() => {handleNavigateNext(componentIndex); handleDataProps(projectDetail)}}
          />
      </div>
      
    </div>
  )
}

export default CreateCsvFirstStep
