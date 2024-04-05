import * as React from 'react'

import SideBar from './SideBar'

export default {
  title: 'Components/SideBar',
  component: SideBar,
}

const Template = (args) => <SideBar {...args} />

export const Default = Template.bind({})
Default.args = {}
