import clsx from 'clsx'

export const Button = ({
  otherClasses, onClick, label, varient = 'primary'
}) => {

  const buttonClasses = clsx(
    otherClasses,
    varient === 'primary' && 'text-white bg-blue-600 rounded-sm px-6 py-2',
    varient === 'secondary' && 'text-gray-900 px-6 py-2 border border-black rounded-sm bg-transparent',

  )
  console.log(varient, 'varient');
  return (
    <button onClick={onClick} className={buttonClasses} data-testid='button'>
      <span>{label}</span>
    </button>
  )
}

export default Button
