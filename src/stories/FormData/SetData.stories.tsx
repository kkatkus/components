import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { SetData as SR } from './SetData';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UseForm/FormData/SetFormData',
  component: SR,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof SR>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SR> = (args) => <SR {...args} />;

export const SetFormData = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
SetFormData.args = {
  validateOn: 'change',
};
