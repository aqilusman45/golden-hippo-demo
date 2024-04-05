import clsx from 'clsx'

export const Header = ({
  otherClasses
}) => {

  const headerClasses = clsx(
    otherClasses
  )
  
  return (
    <div className={headerClasses} data-testid='header'>
      New Component!
    </div>
  )
}

export default Header
