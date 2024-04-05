import clsx from 'clsx'

export const SideBar = ({
  otherClasses
}) => {

  const sideBarClasses = clsx(
    otherClasses
  )
  
  return (
    <div className={sideBarClasses} data-testid='side-bar'>
      New Component!
    </div>
  )
}

export default SideBar
