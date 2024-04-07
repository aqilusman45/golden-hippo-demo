import * as React from 'react'

import ProjectGrid from './ProjectGrid'

export default {
  title: 'Components/ProjectGrid',
  component: ProjectGrid,
}

const Template = (args) => <ProjectGrid {...args} />

export const Default = Template.bind({})
Default.args = {}
