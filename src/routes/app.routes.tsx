import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Home } from "@screens/Home"; 
import { NewMeal } from "@screens/NewMeal";

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
    return(
        <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
            <Screen name = "home" component={Home} />

            <Screen name = "new" component={NewMeal} />
        </Navigator>
    )
}