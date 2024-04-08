import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import Button from '../Button';
import { FaCloudUploadAlt } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";
import placeholder from '../../../public/images/placeholder.jpg'
import Image from 'next/image'

export const UploadImage = ({
  otherClasses
}) => {

  const ref = useRef()

  const uploadImageClasses = clsx(
    otherClasses, ' relative group'
  )

  const handleOnClick = () =>{
     ref.current.click()
  }

  const [imageSrc, setImageSrc] = useState('');
  // const [fileName, setFileName] = useState('');

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event) => {
      const base64Image = event.target.result;
      const name = file.name;
      localStorage.setItem('fileName', name)
      localStorage.setItem('uploadedImage', base64Image);
      setImageSrc(base64Image);
    };

    reader.readAsDataURL(file);
  };
  
  const handleRemoveAsset =()=>{
     let keyArray = ['fileName', 'uploadedImage']
     for( let key of keyArray){
        localStorage.removeItem(key)
     }
  }
  
  const storedImage = localStorage.getItem('uploadedImage');
  const fileName = localStorage.getItem('fileName')
  
  return (
    <div className={uploadImageClasses} data-testid='upload-image' >
      <button className='absolute top-2 right-0 hidden group-hover:block' onClick={handleRemoveAsset}><RiDeleteBack2Fill size={20}/></button>
      <div className='flex flex-col items-center' onClick={handleOnClick}>
    

      {
        storedImage ? (
          <Image src={storedImage} width={200} height={200} className='rounded-full mb-6'/>
        ): (
          <Image src={placeholder} width={200} height={200} className='rounded-full mb-6'/>
        )
      }

      <button className='py-2 px-6 bg-blue-500 rounded-md text-white font-semibold text-base flex items-center gap-5'><p>{fileName ? fileName.slice(0, 10) + '...' : 'upload image'}</p><FaCloudUploadAlt size={20}/></button>

      <input ref={ref} type="file" src="" alt="" className='hidden' onChange={handleImageUpload} accept="image/jpeg, image/png, image/svg, image"/> 
    
    </div>
    </div>
  )
}

export default UploadImage
