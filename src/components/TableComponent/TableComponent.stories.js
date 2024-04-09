import * as React from 'react'

import TableComponent from './TableComponent'

export default {
  title: 'Components/TableComponent',
  component: TableComponent,
}

const Template = (args) => <TableComponent {...args} />

export const Default = Template.bind({})
Default.args = {}
