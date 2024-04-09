import clsx from 'clsx'

export const CsvPreview = ({
  otherClasses
}) => {

  const csvPreviewClasses = clsx(
    otherClasses
  )
  
  return (
    <div className={csvPreviewClasses} data-testid='csv-preview'>
      New Component!
    </div>
  )
}

export default CsvPreview
