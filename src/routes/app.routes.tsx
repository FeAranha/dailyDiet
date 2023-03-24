import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Feedback } from "@screens/Feedback";
import { Home } from "@screens/Home";
import { NewMeal } from "@screens/NewMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />

      <Screen name="newMeal" component={NewMeal} />

      <Screen name="feedback" component={Feedback} />
    </Navigator>
  );
}
