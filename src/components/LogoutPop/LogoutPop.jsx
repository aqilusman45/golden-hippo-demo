import clsx from 'clsx'
import { MdClose } from "react-icons/md";
import Button from '../Button';
import { useRouter } from 'next/router';

export const LogoutPop = ({
  otherClasses, handleClose
}) => {

  const logoutPopClasses = clsx(
    otherClasses, 'w-full max-w-[300px] bg-white rounded-md p-4'
  )
  const router = useRouter()

  const reomoveCredentials = ()=>{
    localStorage.removeItem('loggedin')
    router.push('/login')
  }
  
  return (
    <div className={logoutPopClasses} data-testid='logout-pop'>
      <div className='flex items-center justify-between mb-6'>
        <p className='text-2xl font-semibold text-gray-900'>Log out</p>
        <button onClick={handleClose}>
          <MdClose size={20}/>
        </button>
      </div>
      <p className='text-gray-900 text-base leading-6 text-center mb-6'>Are your sure you want to log out?</p>
        <div className='w-full flex items-center justify-between'>
           <Button label='No, cancel' variant='secondary' otherClasses='!border-none' onClick={handleClose}/>
           <Button label='Yes Logout' variant='tertiary' onClick={reomoveCredentials}/>
        </div>
    </div>
  )
}

export default LogoutPop
