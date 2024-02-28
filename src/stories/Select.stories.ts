import type { Meta, StoryObj } from '@storybook/react';

import SelectStory from './SelectStory';
import { sizes } from '../theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof SelectStory> = {
  title: 'Components/Select',
  component: SelectStory,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
      },
      options: sizes
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    size: "sm"
  },
};

export const WithLabel: Story = {
  args: {
    label: "label for input",
    size: "sm"
  },
};
