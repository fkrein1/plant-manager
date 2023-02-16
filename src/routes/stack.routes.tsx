import { createStackNavigator } from '@react-navigation/stack';

import { ConfirmLogin } from '../screens/ConfirmLogin';
import { ConfirmPlant } from '../screens/ConfirmPlant';
import { MyPlants } from '../screens/MyPlants';
import { PlantSave } from '../screens/PlantSave';
import { PlantSelect } from '../screens/PlantSelect';
import { UserIdentification } from '../screens/UserIdentification';
import { Welcome } from '../screens/Welcome';

import { colors } from '../styles/colors';

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.white },
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="UserIdentification" component={UserIdentification} />
      <Stack.Screen name="ConfirmLogin" component={ConfirmLogin} />
      <Stack.Screen name="PlantSelect" component={PlantSelect} />
      <Stack.Screen name="PlantSave" component={PlantSave} />
      <Stack.Screen name="ConfirmPlant" component={ConfirmPlant} />
      <Stack.Screen name="MyPlants" component={MyPlants} />

    </Stack.Navigator>
  );
}
