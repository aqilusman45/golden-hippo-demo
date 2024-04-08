import * as React from 'react'

import ModalComponent from './ModalComponent'

export default {
  title: 'Components/ModalComponent',
  component: ModalComponent,
}

const Template = (args) => <ModalComponent {...args} />

export const Default = Template.bind({})
Default.args = {}
