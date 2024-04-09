import clsx from 'clsx'
import { useCSVReader } from 'react-papaparse';
import React, { useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import Button from '../Button';
import Heading from '../Heading';
import {toast} from 'react-toastify'

export const CreateCsvProject = ({
  otherClasses, handleDataProps, componentIndex, handleNavigateNext, handleNavigatePrev
}) => {

  const createCsvProjectClasses = clsx(
    otherClasses, 'lg:mx-20 mb-10'
  )

  const [data, setData] = useState([])

  const { CSVReader } = useCSVReader();

  const styles = {
    csvReader: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 10,
    }
  }

  console.log(data, 'CSV');

  const csvData = data
  
  return (
    <div className={createCsvProjectClasses} data-testid='create-csv-project'>
      <div className='max-w-[1600px] '>
        <p className=''>Upload CSV</p>
      <CSVReader
      onUploadAccepted={(results) => {
          setData(results);
      }}
    >
      {({
        getRootProps,
        acceptedFile,
      }) => (
        <>
          <div style={styles.csvReader} className='border-2 border-dashed flex items-center justify-center rounded-lg py-[200px]'>
               <button {...getRootProps()} className='flex flex-col items-center'>
               <IoCloudUploadOutline size={120}/>
               <Button variant='link'  label={!acceptedFile?.name ? 'upload File': acceptedFile?.name}/>
               </button>
          </div>
        </>
      )}
    </CSVReader>
  
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
            onClick={() => {data.length === 0 ? "" :handleNavigateNext(componentIndex); handleDataProps(csvData)}}
          />
      </div>
    </div>
  )
}

export default CreateCsvProject
