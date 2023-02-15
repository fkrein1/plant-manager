import AsyncStorage from '@react-native-async-storage/async-storage';
import { Image, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

import { useEffect, useState } from 'react';
import avatarImg from '../assets/avatar.jpg';

export function Header() {
  const [name, setName] = useState('');
  useEffect(() => {
    async function getName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setName(user);
    };
    getName();
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Hi,</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  title: {
    fontSize: 32,
    lineHeight: 36,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  name: {
    fontSize: 32,
    lineHeight: 36,
    fontFamily: fonts.heading,
    color: colors.heading,
  },
  image: {
    borderRadius: 100,
    width: 56,
    height: 56,
  },
});
