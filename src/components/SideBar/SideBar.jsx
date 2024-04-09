import clsx from 'clsx'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { FaChevronDown } from "react-icons/fa";
import Icon from '../Icon';
import { useEffect, useState } from 'react';
import { IoCloseOutline } from "react-icons/io5";


export const SideBar = ({
  otherClasses, showSideBar, handleCollapseSideBar
}) => {


  const [show, setShow] = useState(false)

  const toggleFunc = (e)=>{
      setShow(!e)
  }

  const sideBarClasses = clsx(
    otherClasses, 'w-full lg:w-[300px] h-screen z-30 fixed top-0 left-0 bg-[#f7f8f9] shadow-xl py-8 px-6 ', showSideBar ?"block":"hidden lg:block"
  )

  const router = useRouter()
  console.log(router);

  useEffect(()=>{
    if (router.pathname){
      setShow(true)
    } 
  }, [])
  
  return (
    <div className={sideBarClasses} data-testid='side-bar'>
      <button className='absolute top-5 right-5 lg:hidden' onClick={handleCollapseSideBar}>
      <IoCloseOutline size={25}/>
      </button>
      <Link href='/' className='group flex items-center gap-2 mb-10'>
       <Image src={logo} width={30} height={30}/>
       <p className='text-base font-semibold font-Poppins text-gray-800 group-hover:text-blue-400 uppercase tracking-tighter'>goldenhippo sge</p>
      </Link>
      <div>
      <button className='flex items-center justify-between w-full rounded-md hover:bg-gray-100 p-4' onClick={()=>toggleFunc(show)}>
        <div className='flex items-center gap-1'>
          <Icon icon='my-queues-icon' iconWidth={30} iconHeight={30}/>
           <p>My queues</p>
        </div>
         <div className={clsx('transition ease-in-out duration-300', show ? 'rotate-180': 'rotate-0')}>
         <FaChevronDown/> 
         </div> 
       </button>
      <ul className={clsx('p-4', show? 'block': 'hidden')}>
      <Link href='/dashboard'>
        <li className={clsx('mb-1 p-4 hover:rounded-md hover:bg-[#eef1f5]', router.asPath === '/dashboard' && 'rounded-md bg-[#eef1f5]')}>
        <p className='text-base text-gray-800 '>Projects</p>
        
        </li>
        </Link>
      <Link href='/dashboard/create-project'>
        <li className={clsx(' p-4 hover:rounded-md hover:bg-[#eef1f5]', router.asPath === '/dashboard/create-project' && 'rounded-md bg-[#eef1f5]')}>
        <p className='text-base  text-gray-800 '>Create Project</p>
        
        </li>
        </Link>

      </ul>

      </div>
      
    </div>
  )
}

export default SideBar
