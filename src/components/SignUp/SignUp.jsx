import clsx from 'clsx'
import Heading from '../Heading'
import Link from 'next/link'
import Button from '../Button'

export const SignUp = ({
  otherClasses
}) => {

  const signUpClasses = clsx(
    otherClasses, 'w-full max-w-[500px] p-16 rounded-md border border-gray-200 bg-white shadow-sm'
  )
  
  return (
    <form className={signUpClasses} data-testid='sign-up'>
      <Heading type='h1' otherClasses='lg:text-3xl text-2xl leading-[42px] text-center font-bold mb-2'>Create a new account</Heading>
      <p className='text-sm text-gray-500 font-semibold text-center mb-6'>Already have an account? <Link href='/login' className='text-blue-500'>Sign in</Link></p>

      <div className='flex items-center gap-2'>
      <div className='flex flex-col gap-2 mb-6 w-[180px]'>
        <label htmlFor="" className='text-xs text-gray-500 font-semibold'>Name</label>
        <input type="name" name="name" id="name" className='px-4 py-2 bg-white rounded-md border border-gray-300 focus:border-blue-500 outline-none' required placeholder='Name'/>
      </div>
      <div className='flex flex-col gap-2 mb-6 w-[180px]'>
        <label htmlFor="" className='text-xs text-gray-500 font-semibold'>Last Name</label>
        <input type="name" name="name" id="name" className='px-4 py-2 bg-white rounded-md border border-gray-300 focus:border-blue-500 outline-none ' required placeholder='Last Name'/>
      </div>
      </div>
      <div className='flex flex-col gap-2 mb-6'>
        <label htmlFor="" className='text-xs text-gray-500 font-semibold'>Email</label>
        <input type="email" name="email" id="email" className='px-4 py-2 bg-white rounded-md border border-gray-300 focus:border-blue-500 outline-none ' required placeholder='Email'/>
      </div>
      <div className='flex flex-col gap-2 mb-6'>
        <label htmlFor="" className='text-xs text-gray-500 font-semibold'>Password</label>
         <input type="password" name="password" id="password" className='px-4 py-2 bg-white rounded-md border border-gray-300 focus:border-blue-500 outline-none' placeholder='Password'/>
      </div>
      <div className='flex flex-col gap-2 mb-6'>
        <label htmlFor="" className='text-xs text-gray-500 font-semibold'>Confirm Password</label>
         <input type="password" name="password" id="password" className='px-4 py-2 bg-white rounded-md border border-gray-300 focus:border-blue-500 outline-none' placeholder='Password'/>
      </div>
      <p className='w-full text-right mb-6 text-base leading-6 text-blue-500 font-semibold'>Forgot password?</p>
      <Button label='Sign Up' variant='primary' otherClasses='w-full'/>
    </form>
  )
}

export default SignUp
