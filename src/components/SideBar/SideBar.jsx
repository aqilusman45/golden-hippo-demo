import clsx from 'clsx'
import Image from 'next/image'
import logo from '../../../public/images/logo.png'
import Link from 'next/link'
import { FaTableCellsLarge } from "react-icons/fa6";
import { BiSolidCube } from "react-icons/bi";
import { useRouter } from 'next/router';

export const SideBar = ({
  otherClasses
}) => {

  const sideBarClasses = clsx(
    otherClasses, 'w-full lg:w-[300px] h-screen z-50 fixed top-0 left-0 bg-white shadow-xl py-8 px-6 hidden lg:block'
  )

  const router = useRouter()
  console.log(router);
  
  return (
    <div className={sideBarClasses} data-testid='side-bar'>
      <Link href='/' className='group flex items-center gap-2 mb-10'>
       <Image src={logo} width={30} height={30}/>
       <p className='text-base font-bold font-Poppins text-gray-800 group-hover:text-blue-400 uppercase tracking-tighter'>goldenhippo sge</p>
      </Link>
      <ul className='border-y border-y-gray-300 py-10'>
      <Link href='/dashboard'>
        <li className={clsx('flex items-center gap-2 hover:text-blue-500 focus:text-blue-400 group mb-5', router.asPath === '/dashboard' && 'text-blue-400 [&>p]:text-blue-400')}>
          
        <FaTableCellsLarge size={15}/>
        <p className='text-sm font-bold text-gray-800 uppercase group-hover:text-blue-400 group-focus:text-blue-500'>Projects</p>
        
        </li>
        </Link>
      <Link href='/dashboard/create-project'>
        <li className={clsx('flex items-center gap-2 hover:text-blue-400 focus:text-blue-400 group', router.asPath === '/dashboard/create-project' && 'text-blue-400 [&>p]:text-blue-400')}>
          
        <BiSolidCube size={20}/>
        <p className='text-sm font-bold text-gray-800 uppercase group-hover:text-blue-400 group-focus:text-blue-300'>create project</p>
        
        </li>
        </Link>

      </ul>
    </div>
  )
}

export default SideBar
