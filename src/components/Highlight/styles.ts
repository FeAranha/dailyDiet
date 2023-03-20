import styled, { css } from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native";

export const Container = styled.View`
    width: 100%;
    padding: 20px;

    border-radius: 8px;

    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`;

export const Content = styled.View`
flex-direction: row-reverse;
bottom: 12px;
left: 12px;
`

export const Title = styled.Text`
    text-align: center;
    ${({ theme }) => css`
        font-size: ${({ theme }) => theme.FONT_SIZE.XX}px;
        font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
        color: ${({ theme }) => theme.COLORS.GRAY_1};
    `}
`;

export const Subtitle = styled.Text`
    text-align: center;
    ${({ theme }) => css`
        font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
        font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
        color: ${({ theme }) => theme.COLORS.GRAY_2};
    `}
`;

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 18,
    color: theme.COLORS.GREEN_DARK,
    weight: 'regular',
}))`

`
