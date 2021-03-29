/** @jsxImportSource @emotion/react */
import React, { FC } from 'react';

export type Props = {
  text: string;
  color?: string;
  padding?: string;
  width?: string;
  backgroundColor?: string;
  borderRadius?: string;
  onClick?: () => void;
};

const Button: FC<Props> = ({
  text,
  color,
  padding,
  width,
  backgroundColor,
  borderRadius,
  onClick,
}) => (
  <div
    css={{ width, backgroundColor, borderRadius, display: 'inline-block' }}
    onClick={onClick}
  >
    <div css={{ color, padding, userSelect: 'none', textAlign: 'center' }}>
      {text}
    </div>
  </div>
);

export default Button;
