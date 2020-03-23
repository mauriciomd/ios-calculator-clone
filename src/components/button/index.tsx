import React, { pro } from 'react';

import { Container } from './styles';
import { GestureResponderEvent } from 'react-native';

type ButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
  children: React.ReactElement;
  color?: string;
};

export default function Button({ onPress, children, color }: ButtonProps) {
  return (
    <Container onPress={onPress} color={color}>
      {children}
    </Container>
  );
}
