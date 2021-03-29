import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button, { Props } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<Props> = (args) => <Button {...args} />;

export const Update = Template.bind({});
Update.args = {
  borderRadius: '20px',
  text: '進捗を更新',
  color: '#fff',
  width: '140px',
  backgroundColor: '#0090ff',
  padding: '5px',
};
export const Write = Template.bind({});
Write.args = {
  borderRadius: '20px',
  text: 'メモを書く',
  color: '#fff',
  width: '140px',
  backgroundColor: '#0090ff',
  padding: '5px',
};
export const Watch = Template.bind({});
Watch.args = {
  borderRadius: '20px',
  text: `他ユーザのメモ`,
  color: '#fff',
  width: '140px',
  backgroundColor: '#0090ff',
  padding: '5px',
};
export const Register = Template.bind({});
Register.args = {
  borderRadius: '20px',
  text: '登録',
  color: '#fff',
  width: '140px',
  backgroundColor: '#0090ff',
  padding: '5px',
};
