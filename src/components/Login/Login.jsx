import clsx from 'clsx'

export const Login = ({
  otherClasses
}) => {

  const loginClasses = clsx(
    otherClasses
  )
  
  return (
    <div className={loginClasses} data-testid='login'>
      New Component!
    </div>
  )
}

export default Login
