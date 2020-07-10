import styled from 'styled-components';
import {Text, View} from 'react-native';

export const Header = styled(View)`
  padding-bottom: 5px;
`;

export const Title = styled(Text)`
  font-weight: bold;
  font-size: 20;
  margin-bottom: 5px;
`;
export const Form = styled(View)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormText = styled(Text)`
  color: grey;
`;

export const NameDivision = styled(View)`
  display: flex;
  flex-direction: row;
`;
