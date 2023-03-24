import { View, TouchableOpacityProps } from "react-native";

import { Container, Subtitle, Title, CardHeader, VerticalLine, Status  } from "./styles";

type Props = TouchableOpacityProps & {
  date:string;
  time: string;
  title:string;
  status:boolean;
}

export function MealSnack({date, time, title, status, ...rest}: Props) {
  return (
    <Container {...rest}>
      <CardHeader>
        <Subtitle>{time}</Subtitle>
        <VerticalLine></VerticalLine>
        <Title>{title}</Title>
      </CardHeader>
      <Status type={status ? 'PRIMARY' : 'SECONDARY' } />
    </Container>
  )
}