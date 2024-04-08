import * as React from 'react'

import CreateCsvProject from './CreateCsvProject'

export default {
  title: 'Components/CreateCsvProject',
  component: CreateCsvProject,
}

const Template = (args) => <CreateCsvProject {...args} />

export const Default = Template.bind({})
Default.args = {}
