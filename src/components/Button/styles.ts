import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Plus } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
    flex-direction: row;

    justify-content: center;
    align-items: center;

    width: 100%;
    height: 50px;

    border-radius: 6px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_2};
`;

export const Text = styled.Text`
    ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
    `}
`;

export const IconPlus = styled(Plus).attrs(({ theme }) => ({
    size: 18,
    color: theme.COLORS.WHITE,
    weight: 'fill',
}))`
    margin-right: 20px;
`