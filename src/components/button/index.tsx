import React from 'react';

import { Container } from './styles';

type ButtonProps = {
  children: React.ReactElement;
  color?: string;
};

export default function Button({ children, color }: ButtonProps) {
  return <Container color={color}>{children}</Container>;
}
