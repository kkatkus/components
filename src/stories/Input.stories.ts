import type { Meta, StoryObj } from '@storybook/react';

import { Input, inputTypes } from '../index';
import { sizes } from '../theme';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    type: {
      control: {
        type: 'inline-radio',
      },
      options: inputTypes
    },
    size: {
      control: {
        type: 'inline-radio',
      },
      options: sizes
    },
    isDisabled: {
      control: {
        type: 'boolean',
      }
    }
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Text: Story = {
  args: {
    type: "text",
  },
};

export const Password: Story = {
  args: {
    type: "password",
  },
};

export const Number: Story = {
  args: {
    type: "number",
  },
};

export const ExtraSmall: Story = {
  args: {
    type: "text",
    size: "xs"
  },
};

export const Small: Story = {
  args: {
    type: "text",
    size: "sm"
  },
};

export const Medium: Story = {
  args: {
    type: "text",
    size: "md"
  },
};

export const Large: Story = {
  args: {
    type: "text",
    size: "lg"
  },
};

export const WithLabel: Story = {
  args: {
    label: "label for input",
    type: "text",
    size: "sm"
  },
};

export const WithPlaceholder: Story = {
  args: {
    'aria-label': "placeholder for input",
    type: "text",
    size: "sm"
  },
};

export const WithDescription: Story = {
  args: {
    'aria-label': "placeholder for input",
    type: "text",
    size: "sm",
    description: "input description here"
  },
};

export const Disabled: Story = {
  args: {
    'aria-label': "placeholder for input",
    type: "text",
    size: "sm",
    isDisabled: true,
  },
};
