import * as React from 'react'

import CsvPreview from './CsvPreview'

export default {
  title: 'Components/CsvPreview',
  component: CsvPreview,
}

const Template = (args) => <CsvPreview {...args} />

export const Default = Template.bind({})
Default.args = {}
