import { Jost_400Regular, Jost_600SemiBold } from '@expo-google-fonts/jost';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native';
import 'react-native-gesture-handler';
import { Routes } from './src/routes';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const loadFonts = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ Jost_400Regular, Jost_600SemiBold });
      } catch {
      } finally {
        setAppIsReady(true);
      }
    };
    loadFonts();
  }, []);

  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }} onLayout={onLayout}>
        <Routes />
        <StatusBar />
      </SafeAreaView>
    </NavigationContainer>
  );
}
