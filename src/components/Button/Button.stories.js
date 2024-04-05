import * as React from 'react'
import mocks from './mocks'

import Button from './Button'

export default {
  title: 'Components/Button',
  component: Button,
  varient: {
    defaultValue: 'primary',
    Options: [
      'primary',
      'secondary'
    ]
  }
}

const Template = (args) => <Button {...args} />

export const ButtonPrimary = Template.bind({})
ButtonPrimary.args = {
  variant: 'primary',
  label: 'Get A Quote',
  // onClick
}

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
  variant: 'secondary',
  label: 'Get A Quote',
  // onClick
}

export const Default = Template.bind({})
Default.args = {...mocks}
