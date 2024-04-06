import * as React from 'react'

import LogoutPop from './LogoutPop'

export default {
  title: 'Components/LogoutPop',
  component: LogoutPop,
}

const Template = (args) => <LogoutPop {...args} />

export const Default = Template.bind({})
Default.args = {}
