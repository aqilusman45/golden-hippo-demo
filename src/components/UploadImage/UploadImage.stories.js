import * as React from 'react'

import UploadImage from './UploadImage'

export default {
  title: 'Components/UploadImage',
  component: UploadImage,
}

const Template = (args) => <UploadImage {...args} />

export const Default = Template.bind({})
Default.args = {}
