import React from 'react'
import Heading from '../Heading/Heading'
import Link from 'next/link'

const Login = () => {
  return (
    <div className='w-full max-w-[600px] bg-white rounded-lg'>
      <Heading type='h1'>Welcome Back</Heading>
      <p>Don’t have an account? <Link href='/'>Register</Link></p>
    </div>
  ) 
}

export default Login