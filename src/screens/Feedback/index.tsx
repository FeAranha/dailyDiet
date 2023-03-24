import * as S from './styles'

import Positive from '@assets/positive.png'
import Negative from '@assets/negative.png'

import { ButtonIcon } from "@components/ButtonIcon";
import { useRoute, useNavigation } from '@react-navigation/native';

type RouteParams = {
  isDiet:boolean;
}

export function Feedback() {
  const route = useRoute();
  const navigation = useNavigation()
  const { isDiet } = route.params as RouteParams

  function handleGoHome(){
    navigation.navigate('home')
  }

  return(
    <S.Container>
      <S.Title isDiet={isDiet}> {isDiet ? 'Continue assim!' : 'Que pena!'}</S.Title>
      <S.Subtitle>
        {
          isDiet 
          ? 'Você continua dentro da dieta. Muito bem!'
          : 'Você saiu da dieta dessa vez, mas continue se esforçando e não desista!'
        }
      </S.Subtitle>
      <S.Logo source={ isDiet ? Positive : Negative } />
      <ButtonIcon 
        title="Ir para a página inicial"
        onPress={()=> handleGoHome()}
      />
    </S.Container>
  )
}