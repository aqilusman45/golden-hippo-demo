import clsx from 'clsx'
import TableComponent from '../TableComponent'

export const CsvPreview = ({
  otherClasses
}) => {

  const csvPreviewClasses = clsx(
    otherClasses
  )
  
  return (
    <div className={csvPreviewClasses} data-testid='csv-preview'>
    <TableComponent/>
    </div>
  )
}

export default CsvPreview
