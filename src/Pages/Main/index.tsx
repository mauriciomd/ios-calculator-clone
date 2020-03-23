import React from 'react';

import { Container, Display, Keyboard, Result } from './styles';

export default function Main() {
  return (
    <Container>
      <Display>
        <Result>0</Result>
      </Display>
      <Keyboard />
    </Container>
  );
}
