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

const operations = {
  add: (x: number, y: number) => x + y,
  min: (x: number, y: number) => x - y,
  mul: (x: number, y: number) => x * y,
  div: (x: number, y: number) => x / y,
};

type CalculatorState = {
  waitingForOperand: boolean;
  replaceView: boolean;
  firstOperand: number;
  display: string;
};

export default function Main() {
  const [calc, setCalc] = React.useState<CalculatorState>({
    waitingForOperand: true,
    replaceView: false,
    firstOperand: 0,
    display: '0',
  });
  const [operator, setOperator] = React.useState<string>('');

  function handleClickNumber(value: string): void {
    if ((calc.display === '0' && value !== '.') || calc.replaceView) {
      setCalc({
        ...calc,
        replaceView: false,
        display: value,
      });
    } else if (calc.display !== 'Error') {
      setCalc({
        ...calc,
        display: calc.display.concat(value),
      });
    }
  }

  function handleOperation(op: string): void {
    setOperator(op);
    handleExecuteCalc();
  }

  function handleExecuteCalc(): void {
    if (!calc.waitingForOperand) {
      const a = calc.firstOperand;
      const b = Number.parseFloat(calc.display);
      const result = operations[operator](a, b);

      setCalc({
        ...calc,
        display: result.toString(),
        firstOperand: result,
        replaceView: true,
      });
    } else {
      setCalc({
        ...calc,
        firstOperand: Number.parseFloat(calc.display),
        waitingForOperand: false,
        replaceView: true,
      });
    }
  }

  function handleEqual(): void {
    if (!calc.waitingForOperand) {
      const a = calc.firstOperand;
      const b = Number.parseFloat(calc.display);
      const result = operations[operator](a, b);

      setCalc({
        ...calc,
        display: result.toString(),
        firstOperand: result,
        replaceView: true,
        waitingForOperand: true,
      });
    }
  }

  function handlePercent(): void { }

  function handleChangeSignal(): void {
    if (calc.display.startsWith('-')) {
      setCalc({
        ...calc,
        display: calc.display.slice(1, calc.display.length),
      });
    } else {
      setCalc({
        ...calc,
        display: '-'.concat(calc.display),
      });
    }
  }

  function handleClean(): void {
    setCalc({
      waitingForOperand: true,
      replaceView: false,
      firstOperand: 0,
      display: '0',
    });
  }

  return (
    <Container>
      <Display>
        <Result>{calc.display}</Result>
      </Display>

      <Keyboard>
        <Button color={ActionButtonColor} onPress={handleClean}>
          <Text color={ActionTextColor}>AC</Text>
        </Button>
        <Button color={ActionButtonColor} onPress={() => handleChangeSignal()}>
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
            handleClickNumber('.');
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
