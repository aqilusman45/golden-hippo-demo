import clsx from 'clsx'

export const ProjectGrid = ({
  otherClasses
}) => {

  const projectGridClasses = clsx(
    otherClasses, 'mt-[95px] lg:ml-[300px] bg-blue-500 px-6 py-10 lg:p-10'
  )

  const data = [
    {
      title: 'Positive Percentage',
      number: '29%'
    },
    {
      title: 'Negative Percentage',
      number: '53%'
    },
    {
      title: 'Neutral Percentage',
      number: '18%'
    },
    {
      title: 'Total Keywords',
      number: '3'
    },
    {
      title: 'Positive Results',
      number: '3'
    },
    {
      title: 'Negative Results',
      number: '3'
    },
  ]
  
  return (
    <div className={projectGridClasses} data-testid='project-grid'>
      <div className='w-full max-w-[1600px]'>
        <p className='text-4xl lg:text-[48px] font-bold text-white font-Poppin mb-6'>
        New project 
        </p>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-10">
           {
            data.map(({title, number}, i)=>{
              return <div className='p-4 bg-white rounded-md shadow-md' key={i}>
                   <p className='text-xl font-bold text-gray-800 font-Poppin'>{title}</p>
                   <span className='text-[48px] font-bold text-gray-800 font-Poppin'>{number}</span>
              </div>
            })
           }
          </div> 
       
      </div>
      
    </div>
  )
}

export default ProjectGrid
