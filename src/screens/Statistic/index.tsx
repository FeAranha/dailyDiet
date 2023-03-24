import { useCallback, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { HeaderStatistic } from "@components/HeaderStatistic";
import { StatisticCard } from "@components/StatisticCard";

import StorageMeals from '@storage/Meals'

import { useTheme } from "styled-components/native";
import * as S from "./styles";

export default function Statistic() {
  const { COLORS } = useTheme();

  const [totalMeals, setTotalMeals] = useState(0);
  const [totalMealsInsedeDiet, setTotalMealsInsedeDiet] = useState(0);
  const [totaltotalOutsideDiet, setTotaltotalOutsideDiet] = useState(0);

  useFocusEffect(
    useCallback(() => {
      setTotalMeals(StorageMeals.totalMeals);
      setTotalMealsInsedeDiet(StorageMeals.totalInsedeDiet);
      setTotaltotalOutsideDiet(StorageMeals.totalOutsideDiet);
    }, [])
  );

  return (
    <S.Container>
      <HeaderStatistic />
      <S.Page>
        <S.Title>Estatísticas gerais</S.Title>
        <StatisticCard
          title={totalMealsInsedeDiet}
          subtitle="melhor sequência de pratos dentro da dieta"
          color={COLORS.GRAY_7}
        />
        <StatisticCard
          title={totalMeals}
          subtitle="refeições registradas"
          color={COLORS.GRAY_7}
        />

        <S.ContainerStatistic>
          <StatisticCard
            size={48}
            title={totalMealsInsedeDiet}
            subtitle="refeições dentro da dieta"
            color={COLORS.GREEN_LIGHT}
          />
          <StatisticCard
            size={48}
            title={totaltotalOutsideDiet}
            subtitle="refeições fora da dieta"
            color={COLORS.RED_LIGHT}
          />
        </S.ContainerStatistic>
      </S.Page>
    </S.Container>
  );
}
