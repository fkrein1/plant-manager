import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { RoomButton } from '../components/RoomButton';
import { api } from '../services/api';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

interface EnviromentProps {
  key: string;
  title: string;
}
export function PlantSelect() {
  const [rooms, setRooms] = useState<EnviromentProps[]>([]);
  useEffect(() => {
    async function getRooms() {
      const { data } = await api.get('plants_rooms');
      setRooms(data);
    }
    getRooms();
  }, []);
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Where in your house</Text>
      <Text style={styles.subTitle}>do you want to place your plant?</Text>
      <View style={styles.list}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={rooms}
          renderItem={({ item }) => <RoomButton title={item.title} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 32,
  },
  title: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: fonts.heading,
    color: colors.heading,
  },
  subTitle: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: fonts.text,
    color: colors.heading,
  },
  list: {
    marginTop: 24,
  },
});
