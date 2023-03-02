import { useNavigation } from '@react-navigation/native';
import { formatDistance } from 'date-fns';
import { useEffect, useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import waterDropImage from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import { Header } from '../components/Header';
import { PlantCardSecondary } from '../components/PlantCardSecondary';
import { loadPlant, saveAllPlants, StoragePlant } from '../lib/storage';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

export function MyPlants() {
  const navigation = useNavigation();
  const [savedPlants, setSavedPlants] = useState<StoragePlant[]>([]);
  const [nextWater, setNextWater] = useState('');

  useEffect(() => {
    async function getPlants() {
      const plants = await loadPlant();
      if (!plants[0]) return;

      setSavedPlants(plants);
      const nextTime = formatDistance(
        new Date().getTime(),
        plants[0]?.dateTimeNotification.getTime(),
      );
      setNextWater(`Water your ${plants[0].name} in ${nextTime}`);
    }
    getPlants();
  }, []);

  async function handleRemove(dateTime: Date) {
    const filteredPlants = savedPlants.filter(
      (plant) => plant.dateTimeNotification !== dateTime,
    );
    await saveAllPlants(filteredPlants);
    setSavedPlants(filteredPlants);
  }
  const isPlantSaved = savedPlants.length !== 0;

  return (
    <SafeAreaView style={styles.safeView}>
      <View style={styles.container}>
        <Header />
        {!isPlantSaved && (
          <View style={styles.emojiContainer}>
            <View style={styles.emojiBackground}>
              <View style={styles.emojiSubBackground}>
                <Text style={styles.emojiText}>🥰</Text>
              </View>
            </View>
            <Text style={styles.registerText}>
              How about starting to register your plants?
            </Text>
            <Button
              title="Register"
              onPress={() => navigation.navigate('Plant Select')}
              style={styles.registerButton}
            />
          </View>
        )}

        {isPlantSaved && (
          <>
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
                  handleRemove={() => handleRemove(item.dateTimeNotification)}
                  name={item.name}
                  photo={item.photo}
                  dateTime={item.dateTimeNotification}
                  style={index % 2 == 0 && { marginRight: 16 }}
                />
              )}
            />
          </>
        )}
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

  // No plant saved styles
  emojiContainer: {
    alignItems: 'center',
    marginTop: 80,
  },
  emojiBackground: {
    backgroundColor: colors.emoji_bg_light,
    borderRadius: 200,
    padding: 40,
  },
  emojiSubBackground: {
    backgroundColor: colors.emoji_bg,
    padding: 40,
    borderRadius: 200,
  },
  emojiText: {
    fontSize: 94,
  },
  registerText: {
    fontSize: 18,
    fontFamily: fonts.text,
    marginHorizontal: 80,
    color: colors.heading,
    position: 'relative',
    bottom: 30,
  },
  registerButton: {
    width: 160,
    alignSelf: 'center',
  },

  // Saved styles

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
    fontSize: 16,
    lineHeight: 23,
    flex: 1,
    marginRight: 20,
  },
  title: {
    marginTop: 40,
    marginBottom: 18,
    fontFamily: fonts.heading,
    color: colors.heading,
    fontSize: 24,
  },
});
