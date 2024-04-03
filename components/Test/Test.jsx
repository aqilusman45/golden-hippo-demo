import React from 'react'
import clsx from 'clsx'

export const Test = ({
  otherClasses
}) => {
  const testClasses = clsx(
    otherClasses
  )
  return (
    <div className={testClasses} data-testid='test'>
      New Component!
    </div>
  )
}

export default Test
