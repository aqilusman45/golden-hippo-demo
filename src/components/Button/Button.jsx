import clsx from 'clsx'

export const Button = ({
  otherClasses, onClick, label, variant, disabled
}) => {

  const buttonClasses = clsx(
    otherClasses,
    variant === 'primary' && 'text-white bg-blue-600 rounded-md px-6 py-2 hover:bg-blue-700 font-semibold',
    variant === 'secondary' && 'text-gray-900 px-6 py-2 border border-black rounded-sm bg-transparent font-semibold',
    variant === 'tertiary' && 'text-white px-6 py-2 rounded-md bg-red-500 font-semibold',
    variant === 'link' && 'border border-gray-200 text-base py-2 px-6 rounded-md hover:bg-gray-100 focus:border-blue-500 focus:bg-blue-50'

  )
  return (
    <button onClick={onClick} className={buttonClasses} disabled={disabled} data-testid='button'>
      <span>{label}</span>
    </button>
  )
}

export default Button
