import AsyncStorage from '@react-native-async-storage/async-storage';

import { IPlant } from '../services/getPlants';

interface StoragePlant extends IPlant {
  dateTimeNotification: Date;
}

export async function savePlant(plant: StoragePlant) {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const oldPlants = data ? (JSON.parse(data) as StoragePlant[]) : [];
    const newPlant = [plant];

    await AsyncStorage.setItem(
      '@plantmanager:plants',
      JSON.stringify([...newPlant, ...oldPlants]),
    );
  } catch (err) {
    throw new Error(err);
  }
}

export async function loadPlant() {
  try {
    const data = await AsyncStorage.getItem('@plantmanager:plants');
    const plants = data ? (JSON.parse(data) as StoragePlant[]) : [];
    return plants;
  } catch (err) {
    throw new Error(err);
  }
}
