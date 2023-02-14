import {
  Jost_400Regular,
  Jost_600SemiBold,
  useFonts,
} from '@expo-google-fonts/jost';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback } from 'react';
import { SafeAreaView } from 'react-native';
import { Welcome } from './src/screens/Welcome';

SplashScreen.preventAutoHideAsync();

export default function App() {
  let [fontsLoaded] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Welcome />
      <StatusBar />
    </SafeAreaView>
  );
}
