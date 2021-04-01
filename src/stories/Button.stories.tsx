import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Button, ButtonProps } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    label: {
      name: 'label',
      type: { name: 'string', required: true },
      defaultValue: 'Hello',
      description: 'demo description ooo',
      table: {
        type: { summary: 'short', detail: 'long detail' },
        defaultValue: { summary: 'short', detail: 'long detail' },
      },
      control: {
        type: 'text'
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: 'some comp222onent _markdown_',
      },
    },
    controls: { expanded: true, sort: 'alpha' },
  }
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
};
Primary.parameters = {
  backgrounds: {
    values: [
      { name: 'red', value: '#f00' },
      { name: 'green', value: '#0f0' },
    ],
  },
  docs: {
    description: {
      story: 'some story **markdown**',
    },
  },
};
Primary.storyName = 'aadsffsf'

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
