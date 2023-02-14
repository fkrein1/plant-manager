import { Image, StyleSheet, Text, View } from 'react-native';
import wateringImg from '../assets/watering.png';
import { Button } from '../components/Button';
import { colors } from '../styles/colors';

export function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Easily {'\n'} manage your {'\n'}plants
      </Text>

      <Image style={styles.image} source={wateringImg} />

      <Text style={styles.subtitle}>
        Don't forget to water your plants anymore. We'll take care of reminding
        you whenever you need it.
      </Text>

      <Button title=">" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 44,
    color: colors.heading,
  },
  image: {
    width: 292,
    height: 284,
  },
});
