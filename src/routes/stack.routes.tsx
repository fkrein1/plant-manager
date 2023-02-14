import { createStackNavigator } from '@react-navigation/stack';
import { Confirmation } from '../screens/Confirmation';
import { UserIdentification } from '../screens/UserIdentification';
import { Welcome } from '../screens/Welcome';
import { colors } from '../styles/colors';

const Stack = createStackNavigator();

export function AppRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: colors.white },
      }}
    >
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="UserIdentification" component={UserIdentification} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
    </Stack.Navigator>
  );
}
