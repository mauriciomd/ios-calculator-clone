import styled from 'styled-components/native';
import { DefaultButtonColor } from '../../styles/color';

type ButtonPropos = {
  color?: string;
};

export const Container = styled.TouchableOpacity<ButtonPropos>`
  background-color: ${props =>
    props.color ? props.color : DefaultButtonColor};
  height: 90px;
  width: 90px;
  border-radius: 45px;
  justify-content: center;
  align-items: center;
`;
