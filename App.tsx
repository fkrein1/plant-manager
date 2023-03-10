import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from '@expo-google-fonts/jost';
import 'react-native-gesture-handler';
import { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Jost_400Regular, Jost_600SemiBold });

  if (!fontsLoaded) {
    return null;
  }

  return <Routes />;
}
