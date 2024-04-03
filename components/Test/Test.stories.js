import * as React from 'react'

import Test from './Test'

export default {
  title: 'Components/Test',
  component: Test
}

const Template = (args) => <Test {...args} />

export const Default = Template.bind({})
Default.args = {}
