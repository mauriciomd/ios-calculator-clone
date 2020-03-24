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
  const operations = {
    add: (x: number, y: number) => x + y,
    min: (x: number, y: number) => x - y,
    mul: (x: number, y: number) => x * y,
    div: (x: number, y: number) => x / y,
  };

  const [result, setResult] = React.useState<string>('0');
  const [firstOperator, setFirstOperator] = React.useState('0');

  const [currentOperation, setCurrentOperation] = React.useState<string>('');
  const [replaceView, setReplaceView] = React.useState<boolean>(false);

  function handleClickNumber(value: string): void {
    if ((result === '0' && value !== ',') || replaceView) {
      setResult(value);
      setReplaceView(false);
    } else if (result !== 'Error') {
      const newValue = result.concat(value);
      setResult(newValue);
    }
  }

  function handleOperation(operation: string): void {
    if (result !== 'Error') {
      setReplaceView(true);
      setCurrentOperation(operation);
      setFirstOperator(result);
    }
  }

  function handleEqual(): void {
    if (result !== 'Error') {
      const a = Number.parseInt(firstOperator, 0);
      setResult(a);
      const b = Number.parseInt(result, 0);

      if (currentOperation === 'div' && b === 0) {
        setResult('Error');
      } else {
        const value = operations[currentOperation](a, b);
        setResult(value);
        setFirstOperator(value);
      }
    }
  }

  function handleClean() {
    setResult('0');
    setFirstOperator('0');
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
        <Button
          color={OperationButtonColor}
          onPress={() => handleOperation('div')}>
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
        <Button
          color={OperationButtonColor}
          onPress={() => handleOperation('mul')}>
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
        <Button
          color={OperationButtonColor}
          onPress={() => handleOperation('min')}>
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
        <Button
          color={OperationButtonColor}
          onPress={() => handleOperation('add')}>
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
        <Button color={OperationButtonColor} onPress={() => handleEqual()}>
          <Text>=</Text>
        </Button>
      </Keyboard>
    </Container>
  );
}
