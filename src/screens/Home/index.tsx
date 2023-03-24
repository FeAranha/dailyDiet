import { ButtonIcon } from "@components/ButtonIcon";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { MealSnack } from "@components/MealSnack";
import { useCallback, useState } from "react";
import { SectionList, Text } from "react-native";
import * as S from "./styles";
import StorageMeals, { MealsType } from "@storage/Meals";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { ListEmpty } from "@components/ListEmpty";
import { Plus } from "phosphor-react-native";
import { useTheme } from 'styled-components/native';

type DataType = {
  title: string;
  data: MealsType[];
};

export function Home() {
  const [data, setData] = useState<DataType[]>([]);
  const navigation = useNavigation();
  const { COLORS } = useTheme();

  function handleNewMeal() {
    navigation.navigate("newMeal", {id:''});
  }

  function handleEditMeals(id:string) {
    navigation.navigate('editMeals', {id})
  }

    async function fetchMeals() {
    try {
      let meals = await StorageMeals.getAll()
      const data = StorageMeals.indentList(meals, 'date')
      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useFocusEffect(useCallback(()=>{
    fetchMeals();
  }, []))

  return (
    <S.Container>
      <Header />

      <Highlight title="90, 86%" subtitle="das refeições dentro da dieta" />

      <S.Text>Refeições</S.Text>

      <ButtonIcon 
        icon={ <Plus size={18} color={COLORS.WHITE}/> }
        hasIcon
        title="Nova Refeição" 
        onPress={ () => handleNewMeal() } />

      <SectionList
        sections={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealSnack
            date={item.date}
            time={item.time}
            title={item.name}
            status={item.isDiet}
            onPress={() => handleEditMeals(item.id)}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <S.HeaderSection>
            <S.HeaderTitle>{title}</S.HeaderTitle>
          </S.HeaderSection>
        )}
        contentContainerStyle={data.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira Refeição?" />
        )}
      />
    </S.Container>
  );
}
