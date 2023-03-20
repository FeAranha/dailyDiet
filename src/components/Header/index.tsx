import * as S from "./styles";

import logoImg from '@assets/logo.png'
import perfilImg from '@assets/Perfil.png'

export function Header() {
  return (
    <S.Container>
        <S.Logo source={logoImg}/>
        <S.Perfil source={perfilImg}/>
    </S.Container>
  )
}