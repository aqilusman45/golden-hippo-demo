import clsx from 'clsx'

export const SignUp = ({
  otherClasses
}) => {

  const signUpClasses = clsx(
    otherClasses
  )
  
  return (
    <div className={signUpClasses} data-testid='sign-up'>
      New Component!
    </div>
  )
}

export default SignUp
