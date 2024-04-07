import clsx from 'clsx'
import { useEffect, useState } from 'react'
import UploadImage from '../UploadImage'
import Button from '../Button'
import { MdClose } from "react-icons/md";
import { useRouter } from 'next/router';

export const SettingPop = ({
  otherClasses, handleClose
}) => {

  const [data, setData] = useState('')

  useEffect(()=>{
    const userCredential = JSON.parse(localStorage.getItem('user'))
    setData(userCredential)
  })

  const router = useRouter()

  const settingPopClasses = clsx(
    otherClasses, 'w-full max-w-[600px] bg-white rounded-md p-6 flex items-center relative'
  )
 
  const handleRemoveAccount = ()=>{
    
    let keysToRemove = ["user", "loggedin"];
    for (let key of keysToRemove) {
      localStorage.removeItem(key);
  }
    router.push('/login')
  }

  
  return (
    <div className={settingPopClasses} data-testid='setting-pop'>
        <button onClick={handleClose} className='absolute top-5 right-5'>
          <MdClose size={20}/>
        </button>
     <UploadImage/>
     <div className='w-[2px] bg-gray-200 h-[250px] mx-10'></div>
       <div className='mt-10'>
        {
          data &&  <p className='text-xl font-medium text-gray-900 mb-1'>{data.name}</p>
        }
        {
          data &&  <p className='text-base font-semibold text-gray-600 mb-20'>{data.email}</p>
        }
        <Button variant='tertiary' label='Delete Account' onClick={handleRemoveAccount}/>
       </div>
    </div>
  )
}

export default SettingPop
