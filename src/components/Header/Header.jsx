import * as React from 'react';
import clsx from 'clsx'
import Avatar from '@mui/material/Avatar';
import { useEffect, useState } from 'react';
import { CiLogout } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import Modal from '@mui/material/Modal';
import LogoutPop from '../LogoutPop';
import SettingPop from '../SettingPop';

export const Header = ({
  otherClasses
}) => {

  const [dropDownShow, setDropDownShow] = useState(false)
  const [randomColor, setRandomColor] = useState('');
  const [selectOption, setSelectOption] = useState('')

  const headerClasses = clsx(
    otherClasses, 'w-full fixed top-0 py-6 flex items-center justify-between bg-blue-500 lg:pl-[360px] lg:pr-20 z-40'
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

  return (
    <div className={headerClasses} data-testid='header'>
      <p className='text-base font-bold uppercase text-white'>dashboard</p>
      <div className='relative'>
      {userCredentials && userCredentials.name && (
        <button onClick={()=>handleShowDropDown(dropDownShow)}>
          {
            profileImage ? <Avatar src={profileImage} sx={{width: 45, height: 45}}/>: <Avatar sx={{ bgcolor: randomColor, width: 45, height: 45}} className='uppercase' sizes={40}>
            {userCredentials.name.slice(0,1)}
          </Avatar>
          }
           
        </button>
         
        )}

        <div ref={ref} className={clsx('bg-white rounded-md p-4 absolute top-16 -left-14 w-full min-w-40 shadow-lg', dropDownShow ? 'block': 'hidden' )}>
          <button className='flex items-center gap-1 mb-2' onClick={() => { handleOpen(); setSelectOption('setting'); setDropDownShow(false) }}>
          <IoSettingsOutline size={20}/>
          <p>Settings</p>
          </button> 
          <button className='flex items-center gap-1 text-red-500' onClick={() => { handleOpen(); setSelectOption('logout'); setDropDownShow(false)}}>
          <CiLogout size={20}/>
           <p>Log out</p>
          </button>
        </div>
        {
          selectOption === 'logout' &&   <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <LogoutPop otherClasses='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4' handleClose={handleClose}/>
  
        </Modal>
        }
        {
          selectOption === 'setting' &&   <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <SettingPop otherClasses='absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4' handleClose={handleClose}/>
  
        </Modal>
        }
      
      </div>
    </div>
  )
}

export default Header
