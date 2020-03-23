import React from 'react';

import { Container } from './styles';

type ButtonProps = {
  children: React.ReactElement;
};

export default function Button({ children }: ButtonProps): React.ReactElement {
  return <Container>{children}</Container>;
}
