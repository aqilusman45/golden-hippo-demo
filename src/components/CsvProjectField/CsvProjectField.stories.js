import * as React from 'react'

import CsvProjectField from './CsvProjectField'

export default {
  title: 'Components/CsvProjectField',
  component: CsvProjectField,
}

const Template = (args) => <CsvProjectField {...args} />

export const Default = Template.bind({})
Default.args = {}
