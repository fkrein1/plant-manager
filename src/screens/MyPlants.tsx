import { formatDistance } from 'date-fns';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import waterDropImage from '../assets/waterdrop.png';
import { Header } from '../components/Header';
import { PlantCardSecondary } from '../components/PlantCardSecondary';
import { loadPlant, StoragePlant } from '../lib/storage';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

export function MyPlants() {
  const [savedPlants, setSavedPlants] = useState<StoragePlant[]>([]);
  const [nextWater, setNextWater] = useState('');

  useEffect(() => {
    async function getPlants() {
      const plants = await loadPlant();
      setSavedPlants(plants);

      const nextTime = formatDistance(
        new Date().getTime(),
        plants[0].dateTimeNotification.getTime(),
      );
      setNextWater(`Water your ${plants[0].name} in ${nextTime}`);
    }
    getPlants();
  }, []);

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Header />
        <View style={styles.spotlight}>
          <Image source={waterDropImage} style={styles.spotlightImg} />
          <Text style={styles.spotlightText}>{nextWater}</Text>
        </View>
        <Text style={styles.title}>Next watering</Text>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={savedPlants}
          keyExtractor={(item) => String(item.dateTimeNotification)}
          renderItem={({ item, index }) => (
            <PlantCardSecondary
              name={item.name}
              photo={item.photo}
              dateTime={item.dateTimeNotification}
              style={index % 2 == 0 && { marginRight: 16 }}
              // onPress={() => navigation.navigate('PlantSave', { plant: item })}
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeView: {
    backgroundColor: colors.background,
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: colors.background,
  },
  spotlight: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.blue_light,
    height: 88,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginTop: 20,
  },
  spotlightImg: {
    height: 56,
    width: 56,
    marginRight: 24,
  },
  spotlightText: {
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 15,
    lineHeight: 23,
    paddingRight: 20,
  },
  title: {
    marginTop: 40,
    marginBottom: 18,
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 24,
  },
});
