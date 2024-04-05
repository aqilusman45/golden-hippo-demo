import * as React from 'react'

import SignUp from './SignUp'

export default {
  title: 'Components/SignUp',
  component: SignUp,
}

const Template = (args) => <SignUp {...args} />

export const Default = Template.bind({})
Default.args = {}
