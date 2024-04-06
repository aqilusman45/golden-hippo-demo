import * as React from 'react'

import SettingPop from './SettingPop'

export default {
  title: 'Components/SettingPop',
  component: SettingPop,
}

const Template = (args) => <SettingPop {...args} />

export const Default = Template.bind({})
Default.args = {}
