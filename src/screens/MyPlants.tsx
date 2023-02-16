import { SafeAreaView, StyleSheet } from 'react-native';
import { Header } from '../components/Header';
import { colors } from '../styles/colors';

export function MyPlants() {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 32,
    paddingTop: 50,
    backgroundColor: colors.background,
  },
});
