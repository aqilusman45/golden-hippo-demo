import clsx from 'clsx'
import Heading from '../Heading'
import Link from 'next/link'
import Button from '../Button'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import { TiWarning } from "react-icons/ti";

export const SignUp = ({
  otherClasses
}) => {

  const router = useRouter()

  const [passwordEye, setPasswordEye] = useState(false)
  const [confirmPasswordEye, setConfirmPasswordEye] = useState(false)

  const handleEyePassword =(e)=>{
      setPasswordEye(!e)
  }
  const handleEyeConfirmPassword =(e)=>{
      setConfirmPasswordEye(!e)
  }

  const [input, setInput] = useState({
     name: "",
     lastname: "",
     email: "",
     password: "",
     confirmpassword: ""
  })


  // if(input.password != input.confirmpassword){
  //    return alert("pasword should same")
  // }

  const handleOnSubmitt = (e)=>{
       e.preventDefault();
       localStorage.setItem('user', JSON.stringify(input))
      //  const confirm = document.getElementById('confirm-password')
       router.push('/login')
  }

  const signUpClasses = clsx(
    otherClasses, 'w-full max-w-[500px] px-16 py-20 rounded-md border border-gray-200 bg-white shadow-sm'
  )

  console.log(input, 'data');
  
  return (
    <form onSubmit={handleOnSubmitt} className={signUpClasses} data-testid='sign-up'>
      <Heading type='h1' otherClasses='lg:text-3xl text-2xl leading-[42px] text-center font-bold mb-2'>Create a new account</Heading>
      <p className='text-sm text-gray-500 font-semibold text-center mb-6'>Already have an account? <Link href='/login' className='text-blue-500'>Sign in</Link></p>

      <div className='flex items-center gap-2'>
      <div className='flex flex-col gap-2 mb-6 w-[180px]'>
        <label htmlFor="" className='text-xs text-gray-500 font-semibold'>Name</label>
        <input type="text" value={input.name} onChange={(e)=>setInput((prev)=>({
          ...prev,
          name: e.target.value
        }))} name="name" id="name" className='px-4 py-2 bg-white rounded-md border border-gray-300 focus:border-blue-500 outline-none' required placeholder='Name'/>
      </div>
      <div className='flex flex-col gap-2 mb-6 w-[180px]'>
        <label htmlFor="" className='text-xs text-gray-500 font-semibold'>Last Name</label>
        <input type="text" value={input.lastname} onChange={(e)=>setInput((prev)=>({
          ...prev,
          lastname: e.target.value
        }))} name="lastname" id="lastname" className='px-4 py-2 bg-white rounded-md border border-gray-300 focus:border-blue-500 outline-none ' required placeholder='Last Name'/>
      </div>
      </div>
      <div className='flex flex-col gap-2 mb-6'>
        <label htmlFor="" className='text-xs text-gray-500 font-semibold'>Email</label>
        <input type="email" name="email" id="email" value={input.email}  onChange={(e)=>setInput((prev)=>({
          ...prev,
          email: e.target.value
        }))}  className='px-4 py-2 bg-white rounded-md border border-gray-300 focus:border-blue-500 outline-none ' required placeholder='Email'/>
      </div>
      <div className='flex flex-col gap-2 mb-6'>
        <label htmlFor="" className='text-xs text-gray-500 font-semibold'>Password</label>
        <div className='relative'>
        <input type={passwordEye ?"text": "password"} name="confirm-password" id="confirm-password" value={input.password}  onChange={(e)=>setInput((prev)=>({
          ...prev,
          password: e.target.value
        }))} className='px-4 py-2 w-full bg-white rounded-md border border-gray-300 focus:border-blue-500 outline-none' placeholder='Confirm Password'/>
        <button onClick={()=>handleEyePassword(passwordEye)} className='absolute top-3 right-1'>
          {
             passwordEye ? <IoIosEye size={20}/>:<IoIosEyeOff size={20}/>
          }
        </button>
        </div>
      </div>
      <div className='flex flex-col gap-2 mb-6'>
        <label htmlFor="" className='text-xs text-gray-500 font-semibold'>Confirm Password</label>
        <div className='relative'>
        <input type={passwordEye ?"text": "password"} name="confirm-password" id="confirm-password" value={input.confirmpassword}  onChange={(e)=>setInput((prev)=>({
          ...prev,
          confirmpassword: e.target.value
        }))} className='px-4 py-2 w-full bg-white rounded-md border border-gray-300 focus:border-blue-500 outline-none' placeholder='Confirm Password'/>
        <button onClick={()=>handleEyeConfirmPassword(confirmPasswordEye)} className='absolute top-3 right-1'>
          {
             confirmPasswordEye ? <IoIosEye size={20}/>:<IoIosEyeOff size={20}/>
          }
        </button>
        </div>
       
      </div>
      <Button label='Sign Up' variant='primary' otherClasses='w-full mb-6'/>
      <p className='text-sm text-gray-500 font-semibold text-center mb-6'>By clicking Register, you agree to the Realm Terms of Use and Privacy Policy</p>
    </form>
  )
}

export default SignUp
