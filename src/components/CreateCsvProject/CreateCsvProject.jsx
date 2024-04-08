import clsx from 'clsx'
import { useCSVReader } from 'react-papaparse';
import React, { CSSProperties, useState } from 'react';
import { IoCloudUploadOutline } from "react-icons/io5";
import Button from '../Button';

export const CreateCsvProject = ({
  otherClasses
}) => {

  const createCsvProjectClasses = clsx(
    otherClasses, ''
  )

  const [data, setData] = useState([])

  const { CSVReader } = useCSVReader();

  const styles = {
    csvReader: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: 10,
    },
    browseFile: {
      width: '20%',
    },
    acceptedFile: {
      border: '1px solid #ccc',
      height: 45,
      lineHeight: 2.5,
      paddingLeft: 10,
      width: '80%',
    },
    remove: {
      borderRadius: 0,
      padding: '0 20px',
    },
    progressBarBackgroundColor: {
      backgroundColor: 'red',
    },
  }

  console.log(data, 'CSV');
  
  
  return (
    <div className={createCsvProjectClasses} data-testid='create-csv-project'>
      <div className='max-w-[1600px]'>

      <CSVReader
      onUploadAccepted={(results) => {
        setData(results)
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
    </div>
  )
}

export default CreateCsvProject
