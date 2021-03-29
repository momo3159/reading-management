/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';

export type Props = {
  date: string;
  text: string;
};

const breakpoints = [600, 960, 1264];
const mediaQuery = breakpoints.map((bp) => `@media(min-width: ${bp}px)`);
export const cutText = (text: string) => {
  const texts = [];
  for (let count = 0; count <= 3; count += 1) {
    if (text[count * 20] === undefined) {
      break;
    }
    texts.push(text.substr(count * 20, 20));
  }

  return texts;
};

const Memo: FC<Props> = ({ date, text }) => {
  const paragraphs = cutText(text);

  return (
    <div
      css={{
        boxShadow: '0px 0px 5px rgba(0, 0, 0, .5)',
        backgroundColor: '#fff',
        height: '150px',
        [mediaQuery[0]]: { width: '70vw' },
        [mediaQuery[1]]: { width: '30vw' },
        [mediaQuery[2]]: { width: '20vw' },
      }}
    >
      <p css={{ color: '#ced4d9', paddingLeft: 10, paddingTop: 8 }}>{date}</p>
      <div
        css={{
          width: '80%',
          paddingLeft: 10,
          overflowWrap: 'break-word',
          fontSize: 14,
        }}
      >
        {paragraphs.map((paragraph) => (
          <p css={{ margin: 0 }}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default Memo;
