import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Header } from '../components/Header';
import { Loading } from '../components/Loading';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import { RoomButton } from '../components/RoomButton';
import { getPlants, IPlant } from '../services/getPlants';
import { getRooms, IRooms } from '../services/getRooms';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

export function PlantSelect() {
  const [rooms, setRooms] = useState<IRooms[]>([]);
  const [plants, setPlants] = useState<IPlant[]>([]);
  const [roomSelected, setRoomSelected] = useState('all');
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    async function fetchRooms() {
      const data = await getRooms();
      setRooms([{ key: 'all', title: 'All' }, ...data]);
    }
    fetchRooms();
  }, []);

  useEffect(() => {
    async function fetchPlants() {
      const data = await getPlants();
      setPlants(data);
      setLoading(false);
    }
    fetchPlants();
  }, []);

  const filteredPlants =
    roomSelected === 'all'
      ? plants
      : plants.filter((plant) => plant.rooms.includes(roomSelected));

  if (loading) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Text style={styles.title}>Where in your house</Text>
      <Text style={styles.subTitle}>do you want to place your plant?</Text>
      <View style={styles.rooms}>
        <FlatList
          horizontal
          keyExtractor={(item) => item.key}
          showsHorizontalScrollIndicator={false}
          data={rooms}
          renderItem={({ item }) => (
            <RoomButton
              title={item.title}
              active={item.key === roomSelected}
              onPress={() => setRoomSelected(item.key)}
            />
          )}
        />
      </View>
      <View style={styles.plants}>
        <FlatList
          numColumns={2}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <View style={{ margin: 8 }} />}
          data={filteredPlants}
          renderItem={({ item, index }) => (
            <PlantCardPrimary
              name={item.name}
              photo={item.photo}
              style={index % 2 == 0 && { marginRight: 16 }}
              onPress={() => navigation.navigate('PlantSave', { plant: item })}
            />
          )}
        />
      </View>
    </SafeAreaView>
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
  rooms: {
    marginTop: 24,
  },
  plants: {
    flex: 1,
    justifyContent: 'center',
    marginTop: 40,
  },
});
