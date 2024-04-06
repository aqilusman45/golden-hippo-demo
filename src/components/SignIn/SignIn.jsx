import clsx from 'clsx'
import Heading from '../Heading'
import Link from 'next/link'
import Button from '../Button'
import { useState, useRef } from 'react'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { useRouter } from 'next/router'


export const SignIn = ({
  otherClasses
}) => {

  const signInClasses = clsx(
    otherClasses, 'w-full max-w-[500px] p-16 rounded-md border border-gray-200 bg-white shadow-sm'
  )

  const router = useRouter()
  const msgRef = useRef()
  const [passwordEye, setPasswordEye] = useState(false)
  const handleEyePassword =(e)=>{
    setPasswordEye(!e)
}
  const [input, setInput] = useState({
    email: "",
    password: "",
 })

console.log(msgRef, 'msgRef');

 const handleOnLogin = (e)=>{
  e.preventDefault();
  const userCredientials = JSON.parse(localStorage.getItem('user'))
  console.log(userCredientials, 'userCredientials')
    if(input.email === userCredientials.email && input.password === userCredientials.password){
         router.push('/')
         localStorage.setItem('loggedin', true)
    }
    else{
     msgRef.current.innerText = 'invalid credientials, Please check your email and password.'
    }
 }

  
  return (
    <form method="POST" action="/login" onSubmit={handleOnLogin} className={signInClasses} data-testid='sign-in'>
      <Heading type='h1' otherClasses='lg:text-3xl text-2xl leading-[42px] text-center font-bold mb-2'>Welcome Back</Heading>
      <p className='text-sm text-gray-500 font-semibold text-center mb-6'>Don’t have an account? <Link href='/register' className='text-blue-500'>Register</Link></p>
      <div className='flex flex-col gap-2 mb-6'>
        <span className='text-sm font-semibold w-full md:whitespace-nowrap text-red-500 block -mt-4 mb-6 text-center' id='msg' ref={msgRef}></span>
        <label htmlFor="" className='text-xs text-gray-500 font-semibold'>Email</label>
        <input type="email" name="email" id="email" value={input.value} onChange={(e)=>setInput((prev)=>({
          ...prev,
          email: e.target.value
        }))} className='px-4 py-2 bg-white rounded-md border border-gray-300 focus:border-blue-500 outline-none' placeholder='Email'/>
      </div>
      <div className='flex flex-col gap-2 mb-6'>
        <label htmlFor="" className='text-xs text-gray-500 font-semibold'>Password</label>
        <div className='relative'>
        <input type={ passwordEye ? "text":"password"} name="password" id="password" value={input.password} onChange={(e)=>setInput((prev)=>({
          ...prev,
          password: e.target.value
        }))} className='px-4 py-2 w-full bg-white rounded-md border border-gray-300 focus:border-blue-500 outline-none' placeholder='Password'/>
         <div onClick={()=>handleEyePassword(passwordEye)} className='absolute top-3 right-1'>
          {
             passwordEye ? <IoIosEye size={20}/>:<IoIosEyeOff size={20}/>
          }
        </div>
        </div>
       
      </div>
      <p className='w-full text-right mb-6 text-base leading-6 text-blue-500 font-semibold'>Forgot password?</p>
      <Button label='Login' variant='primary' otherClasses='w-full' type='submitt'/>
    </form>
  )
}

export default SignIn
