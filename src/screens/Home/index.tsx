import { Button } from "@components/Button";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { MealCard } from "@components/MealCard";
import { useState } from "react";
import { SectionList, Text } from "react-native";
import * as S from "./styles";

export function Home() {
  const [meals, setMeals] = useState<string[]>([])
  return (
    <S.Container>
      <Header />

      <Highlight 
      title="90, 86%" 
      subtitle="das refeições dentro da dieta" />  

      <S.Text>Refeições</S.Text>

      <Button />
      <MealCard 
      title="12.08.12"
      hour="20:00"
      meal="x-tudo"
      />

      {/* <SectionList
      sections={meals}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => (
        <MealCard />
      )}
      renderSectionHeader={({ section: {title}}) => (
        <Text>12.08.22</Text>
      )}      
      /> */}
      
    </S.Container>
  );
}
