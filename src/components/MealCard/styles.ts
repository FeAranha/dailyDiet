
import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export const Container = styled.View`
    
    width: 100%;
    height: 100%;

    margin-top: 40px;    
`;

export const Content = styled(TouchableOpacity)`
    flex-direction: row;
    justify-content: center;
    align-items: center;

    height: 50px;
    margin-top: 8px;
    
    border: 1px solid ${({ theme }) => theme.COLORS.GRAY_5};
    border-radius: 6px;
`;

export const Title = styled.Text`
    
    margin-top: 32px;

    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.LG}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.GRAY_1};
    `}
`;

export const Text = styled.Text`
    margin-bottom: 8px;

    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
    color: ${theme.COLORS.GRAY_1};
    `}
`;
