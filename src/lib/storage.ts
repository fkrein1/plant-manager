import AsyncStorage from '@react-native-async-storage/async-storage';

import { IPlant } from '../services/getPlants';

export interface StoragePlant extends IPlant {
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
    const formatedPlants = plants
      .map((plant) => ({
        ...plant,
        dateTimeNotification: new Date(plant.dateTimeNotification),
      }))
      .sort(
        (a, b) =>
          Math.floor(a.dateTimeNotification.getTime() / 1000) -
          Math.floor(b.dateTimeNotification.getTime() / 1000),
      );
    return formatedPlants;
  } catch (err) {
    throw new Error(err);
  }
}

export async function saveUser(name) {
  await AsyncStorage.setItem('@plantmanager:user', name);
}

export async function loadUser() {
  return await AsyncStorage.getItem('@plantmanager:user');
}

export async function deleteUser() {
  return await AsyncStorage.removeItem('@plantmanager:user');
}