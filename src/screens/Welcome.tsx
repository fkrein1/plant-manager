import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import wateringImg from '../assets/watering.png';
import { loadUser } from '../lib/storage';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

export function Welcome() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<string>();
  const navigation = useNavigation();

  useEffect(() => {
    async function getUser() {
      const user = await loadUser();
      setUser(user);
      setLoading(false);
      if (user) navigation.navigate('PlantSelect');
    }
    getUser();
  }, []);

  function handleStart() {
    navigation.navigate('UserIdentification');
  }

  if (loading || user) {
    return null;
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>
        Easily {'\n'} manage your {'\n'}plants
      </Text>

      <Image style={styles.image} source={wateringImg} resizeMode="contain" />

      <Text style={styles.subtitle}>
        Don't forget to water your plants anymore. We'll take care of reminding
        you whenever you need it.
      </Text>

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={handleStart}
      >
        <Text style={styles.buttonText}>
          {' '}
          <Feather name="chevron-right" size={32} />{' '}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
    lineHeight: 34,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    marginHorizontal: 44,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    width: Dimensions.get('window').width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 16,
    height: 56,
    width: 56,
  },
  buttonText: {
    color: colors.white,
    fontSize: 24,
  },
});
