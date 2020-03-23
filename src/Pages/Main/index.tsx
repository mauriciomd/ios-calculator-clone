import React from 'react';

import Button from '../../Components/button/';
import {
  ActionButtonColor,
  OperationButtonColor,
  ActionTextColor,
} from '../../styles/color';

import {
  Container,
  Display,
  Keyboard,
  Result,
  LargeButton,
  Text,
} from './styles';

export default function Main() {
  const actions = ['AC', '+/-', '%'];
  const keyboard = [
    '/',
    '7',
    '8',
    '9',
    'x',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    ',',
    '=',
  ];

  return (
    <Container>
      <Display>
        <Result>0</Result>
      </Display>

      <Keyboard>
        {actions.map(action => (
          <Button key={action} color={ActionButtonColor}>
            <Text color={ActionTextColor}>{action}</Text>
          </Button>
        ))}

        {keyboard.map((key, index) => {
          if (key === '0') {
            return (
              <LargeButton key={key}>
                <Text>{key}</Text>
              </LargeButton>
            );
          } else if (key === '=') {
            return (
              <Button key={key} color={OperationButtonColor}>
                <Text>{key}</Text>
              </Button>
            );
          } else {
            return (
              <Button
                key={key}
                color={index % 4 === 0 ? OperationButtonColor : undefined}>
                <Text>{key}</Text>
              </Button>
            );
          }
        })}
      </Keyboard>
    </Container>
  );
}
