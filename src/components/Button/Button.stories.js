import * as React from 'react'

import Button from './Button'

const onClick = (e) => {
  e.preventDefault()
  alert('I have been clicked')
}



export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      defaultValue: 'primary',
      options: [
        'primary',
        'secondary'
      ],
      control: { type: 'select' },
    },
    label: {
      defaultValue: 'Learn More',
      control: { type: 'text' },
    },
  },
}

const Template = (args) => <Button {...args} />

export const ButtonPrimary = Template.bind({})
ButtonPrimary.args = {
  variant: 'primary',
  label: 'Get A Quote',
  onClick
}

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
  variant: 'secondary',
  label: 'Get A Quote',
  onClick
}
export const TertiaryButton = Template.bind({})
TertiaryButton.args = {
  variant: 'tertiary',
  label: 'Get A Quote',
  onClick
}

export const Default = Template.bind({})
Default.args = {}
