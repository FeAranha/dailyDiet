import { TouchableOpacityProps } from 'react-native'
import * as S from "./styles";

type Props = TouchableOpacityProps & {
    title?: string;
    hour?: string;
    meal?: string;
}

export function MealCard({title, hour, meal,  ...rest}: Props) {
  return (
    <S.Container {...rest}>
      <S.Title>{title}</S.Title>
      <S.Content>
        <S.Text>{hour}</S.Text>
        <S.Text>{meal}</S.Text> 
      </S.Content>
    </S.Container>
  );
}
