import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import Avatar from '@mui/material/Avatar';
import Button from '../Button';
import { FaCloudUploadAlt } from "react-icons/fa";

export const UploadImage = ({
  otherClasses
}) => {

  const ref = useRef()

  const uploadImageClasses = clsx(
    otherClasses, 'flex flex-col items-center'
  )

  const handleOnClick = () =>{
     ref.current.click()
  }
  
  return (
    <div className={uploadImageClasses} data-testid='upload-image' onClick={handleOnClick}>
        <Avatar
        alt=""
        style={{marginBottom: '24px'}}
        sx={{ width: 200, height: 200 }}
      />

      <button className='py-2 px-6 bg-blue-500 rounded-md text-white font-semibold text-base flex items-center gap-5'><p>upload image</p><FaCloudUploadAlt size={20}/></button>

      <input ref={ref} type="file" src="" alt="" className='hidden'/> 
    
    </div>
  )
}

export default UploadImage
