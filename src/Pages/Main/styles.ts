import styled from 'styled-components/native';

import {
  DefaultBackgroundColor,
  DefaultButtonColor,
  DefaultTextColor,
} from '../../styles/color';

type LargeButtonPropos = {
  color?: string;
};

type TextProps = {
  color?: string;
};

export const Container = styled.SafeAreaView`
  background: ${DefaultBackgroundColor};
  flex: 1;
`;

export const Display = styled.View`
  height: 150px;
  width: 100%;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 5px 10px;
`;

export const Result = styled.Text`
  font-size: 64px;
  color: #fff;
`;

export const Keyboard = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: space-around;
`;

export const LargeButton = styled.TouchableOpacity<LargeButtonPropos>`
  background-color: ${props =>
    props.color ? props.color : DefaultButtonColor};
  height: 90px;
  width: 190px;
  border-radius: 45px;
  justify-content: center;
  align-items: center;
`;

export const Text = styled.Text<TextProps>`
  color: ${props => (props.color ? props.color : DefaultTextColor)};
  font-size: 36px;
`;
