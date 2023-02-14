import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import { Welcome } from './src/screens/Welcome';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Welcome />
      <StatusBar />
    </SafeAreaView>
  );
}
