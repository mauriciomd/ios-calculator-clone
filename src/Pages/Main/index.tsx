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
  const [result, setResult] = React.useState<string>('0');

  function handleClickNumber(value: string): void {
    if (result === '0' && value !== ',') {
      setResult(value);
    } else {
      const newValue = result.concat(value);
      setResult(newValue);
    }
  }

  function handleClean() {
    setResult('0');
  }

  return (
    <Container>
      <Display>
        <Result>{result}</Result>
      </Display>

      <Keyboard>
        <Button color={ActionButtonColor} onPress={handleClean}>
          <Text color={ActionTextColor}>AC</Text>
        </Button>
        <Button color={ActionButtonColor}>
          <Text color={ActionTextColor}>+/-</Text>
        </Button>
        <Button color={ActionButtonColor}>
          <Text color={ActionTextColor}>%</Text>
        </Button>
        <Button color={OperationButtonColor}>
          <Text>/</Text>
        </Button>

        <Button
          onPress={() => {
            handleClickNumber('7');
          }}>
          <Text>7</Text>
        </Button>
        <Button
          onPress={() => {
            handleClickNumber('8');
          }}>
          <Text>8</Text>
        </Button>
        <Button
          onPress={() => {
            handleClickNumber('9');
          }}>
          <Text>9</Text>
        </Button>
        <Button color={OperationButtonColor}>
          <Text>x</Text>
        </Button>

        <Button
          onPress={() => {
            handleClickNumber('4');
          }}>
          <Text>4</Text>
        </Button>
        <Button
          onPress={() => {
            handleClickNumber('5');
          }}>
          <Text>5</Text>
        </Button>
        <Button
          onPress={() => {
            handleClickNumber('6');
          }}>
          <Text>6</Text>
        </Button>
        <Button color={OperationButtonColor}>
          <Text>-</Text>
        </Button>

        <Button
          onPress={() => {
            handleClickNumber('1');
          }}>
          <Text>1</Text>
        </Button>
        <Button
          onPress={() => {
            handleClickNumber('2');
          }}>
          <Text>2</Text>
        </Button>
        <Button
          onPress={() => {
            handleClickNumber('3');
          }}>
          <Text>3</Text>
        </Button>
        <Button color={OperationButtonColor}>
          <Text>+</Text>
        </Button>

        <LargeButton
          onPress={() => {
            handleClickNumber('0');
          }}>
          <Text>0</Text>
        </LargeButton>
        <Button
          onPress={() => {
            handleClickNumber(',');
          }}>
          <Text>,</Text>
        </Button>
        <Button color={OperationButtonColor}>
          <Text>=</Text>
        </Button>
      </Keyboard>
    </Container>
  );
}
