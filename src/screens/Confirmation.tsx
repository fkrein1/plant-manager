import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../components/Button';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

export function Confirmation() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('PlantSelect');
  }
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.emoji}>😄</Text>
      <Text style={styles.heading}>We are ready!</Text>
      <Text style={styles.subtitle}>
        Now let's start taking care of your little plants very carefully.
      </Text>
      <View style={styles.footer}>
        <Button title="Start" onPress={handleStart} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 34,
  },
  emoji: {
    fontSize: 78,
    marginBottom: 50,
  },
  heading: {
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 16,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 34,
    marginTop: 40,
  },
});
