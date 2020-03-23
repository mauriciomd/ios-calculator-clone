import styled from 'styled-components/native';

type ButtonPropos = {
  color?: string;
};

export const Container = styled.TouchableOpacity<ButtonPropos>`
  background-color: ${props => (props.color ? props.color : '#444')};
  height: 90px;
  width: 90px;
  border-radius: 45px;
  justify-content: center;
  align-items: center;
`;
