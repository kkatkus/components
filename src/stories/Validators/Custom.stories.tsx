import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Custom as CV } from './Custom';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'UseForm/Validators/Custom',
  component: CV,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof CV>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CV> = (args) => <CV {...args} />;

export const Custom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Custom.args = {
  validateOn: 'change',
};
