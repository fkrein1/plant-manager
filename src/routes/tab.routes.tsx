import { MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MyPlants } from '../screens/MyPlants';
import { PlantSelect } from '../screens/PlantSelect';
import { colors } from '../styles/colors';

const AppTab = createBottomTabNavigator();

export function AuthRoutes() {
  return (
    <AppTab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,

        tabBarActiveTintColor: colors.green,
        tabBarInactiveTintColor: colors.heading,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          paddingVertical: 20,
          height: 88,
        },
      })}
    >
      <AppTab.Screen
        name="Plant Select"
        component={PlantSelect}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />
      <AppTab.Screen
        name="My Plants"
        component={MyPlants}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </AppTab.Navigator>
  );
}
