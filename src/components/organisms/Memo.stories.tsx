import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Memo, { Props } from './Memo';

export default {
  title: 'Example/Memo',
  component: Memo,
} as Meta;

const Template: Story<Props> = (args) => <Memo {...args} />;

export const ShortTxt = Template.bind({});
ShortTxt.args = {
  date: '2021/2/2',
  text: `HTMLのタグとプロパティ
    CSSについて
    React何もわからん`,
};

export const LongTxt = Template.bind({});
LongTxt.args = {
  date: '2021/2/2',
  text: `Reactとtypescriptを勉強した。
    機械学習について勉強した。
    オブジェクト指向について勉強した。
    関数型を勉強した。 
    Reactとtypescriptを勉強した。
    機械学習について勉強した。
    オブジェクト指向について勉強した。
    関数型を勉強した。
    Reactとtypescriptを勉強した。
    機械学習について勉強した。
    オブジェクト指向について勉強した。
    関数型を勉強した。
  `,
};
