import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

interface IconProps {
    type: 'up' | 'down';
}

export const Container = styled(TouchableOpacity)`
    width: 48%;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    border: 1.5px solid ${({ theme }) => theme.colors.text};
    border-radius: 5;

    padding: 16px;
`;

export const Icon = styled(Feather) <IconProps>`
    font-size: ${RFValue(24)}px;
    margin-right: 12px;

    color: ${({ theme, type }) => 
        type === 'up' ? theme.colors.succes : theme.colors.attention
    };
`;
export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;

