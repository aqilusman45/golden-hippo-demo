import * as React from 'react';
import clsx from 'clsx'
import { useEffect, useState } from 'react';
import { CiLogout } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
// import Modal from '@mui/material/Modal';
import LogoutPop from '../LogoutPop';
import SettingPop from '../SettingPop';
import Button from '../Button';
import { useRouter } from 'next/router';
import Image from 'next/image'
import ModalComponent from '../ModalComponent';

export const Header = ({
  otherClasses
}) => {

  const [dropDownShow, setDropDownShow] = useState(false)
  const [randomColor, setRandomColor] = useState('');
  const [selectOption, setSelectOption] = useState('')

  const {push} = useRouter()

  const headerClasses = clsx(
    otherClasses, 'w-full fixed top-0 bg-white z-30'
  )

  const handleShowDropDown = (e)=>{
      setDropDownShow(!e)
  }

  const ref = React.useRef(null);
  
  // useEffect(() => {
  //   const handleClickOutside = (event) => {
  //     if (ref.current && !ref.current.contains(event.target)) {
  //       setDropDownShow(false);
  //     }
  //   };

  //   document.body.addEventListener('click', handleClickOutside);

  //   return () => {
  //     document.body.removeEventListener('click', handleClickOutside);
  //   };
  // }, []);

  const [userCredentials, setUserCredentials] = useState(null);
  const [profileImage, setProfileImage] = useState('');

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUserCredentials(JSON.parse(userData));
    }
  }, []);

  // const handleOnLink = ()=>{
  //   router.push
  // }


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(()=>{
    const storedImage = localStorage.getItem('uploadedImage')
    setProfileImage(storedImage)
  }, [])
 

  useEffect(()=>{
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    } 
    setRandomColor(color)
  }, [])

  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow(true);
  };
  const toggleCancel = () => {
    setShow(false);
  };

  return (
    <div className={headerClasses} data-testid='header'>
      <div className='flex items-center justify-between border-b lg:pl-[360px] lg:pr-20 border-b-gray-200 py-6 '>
      <p className='text-2xl font-bold  text-gray-900'>Dashboard</p>
      <div className='relative'>
      {userCredentials && userCredentials.name && (
        <button onClick={()=>handleShowDropDown(dropDownShow)}>
          {
            profileImage ? <Image src={profileImage} width={45} height={45} className='rounded-full object-cover'/>: <div className='flex items-center pb-2 text-white justify-center uppercase text-3xl w-[45px] h-[45px] rounded-full' style={{background: randomColor}}><span>{userCredentials.name.slice(0, 1)}</span></div>
          }
           
        </button>
         
        )}

        <div ref={ref} className={clsx('bg-white rounded-md p-4 absolute top-16 -left-14 w-full min-w-40 shadow-lg', dropDownShow ? 'block': 'hidden' )}>
          <button className='flex items-center gap-1 mb-2' onClick={() => { toggleShow(); setSelectOption('setting'); setDropDownShow(false) }}>
          <IoSettingsOutline size={20}/>
          <p>Settings</p>
          </button> 
          <button className='flex items-center gap-1 text-red-500' onClick={() => { toggleShow(); setSelectOption('logout'); setDropDownShow(false)}}>
          <CiLogout size={20}/>
           <p>Log out</p>
          </button>
        </div>
        
      
      </div>
      </div>
     <div className='pt-6 pb-10 border-b border-b-gray-200 lg:pl-[360px] lg:pr-20 flex gap-6'>
         <Button variant='link' label='Projects' onClick={()=>{push('/dashboard')}}/>
         <Button variant='link' label='Create Project' onClick={()=>{push('/dashboard/create-project')}}/>
     </div>
   {
     selectOption === 'logout' &&  <ModalComponent show={show} handleClose={toggleCancel}>
     <LogoutPop otherClasses=''  handleClose={toggleCancel}/> 
    </ModalComponent>
   }
   {
    selectOption === 'setting' && <ModalComponent show={show} handleClose={toggleCancel}>
          <SettingPop otherClasses='' handleClose={toggleCancel}/>
    </ModalComponent>
   }
       
      
    </div>
  )
}

export default Header
