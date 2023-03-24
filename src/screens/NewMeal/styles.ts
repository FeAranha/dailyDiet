import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
  width: number
  direction: string
}

export const Container = styled(SafeAreaView)<Props>`
  width: ${({ width })=> width ? `${width}%` : 'auto'};
  justify-content: space-between;
  flex-direction: ${({direction})=> direction ? direction : 'column' };  
`;

export const Content = styled.View<Props>`
  flex:1;
  flex-direction: column ; 
`;
