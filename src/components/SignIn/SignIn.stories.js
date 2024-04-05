import * as React from 'react'

import SignIn from './SignIn'

export default {
  title: 'Components/SignIn',
  component: SignIn,
}

const Template = (args) => <SignIn {...args} />

export const Default = Template.bind({})
Default.args = {}
