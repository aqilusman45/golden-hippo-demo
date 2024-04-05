import clsx from 'clsx'

export const Button = ({
  otherClasses, onClick
}) => {

  const buttonClasses = clsx(
    otherClasses
  )
  
  return (
    <button onClick={onClick} className={buttonClasses} data-testid='button'>
      new
    </button>
  )
}

export default Button
