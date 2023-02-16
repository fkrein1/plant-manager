import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { useNavigation, useRoute } from '@react-navigation/native';
import { format } from 'date-fns';
import React, { useState } from 'react';
import {
  Alert,
  Image,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import waterDropImg from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import { savePlant } from '../lib/storage';
import { IPlant } from '../services/getPlants';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

interface Params {
  plant: IPlant;
}

export function PlantSave({}) {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');
  const navigation = useNavigation();
  const route = useRoute();
  const { plant } = route.params as Params;

  function handleChangeTime(
    _: DateTimePickerEvent,
    dateTime: Date | undefined,
  ) {
    if (Platform.OS === 'android') {
      setShowDatePicker((prev) => !prev);
    }
    if (dateTime) {
      setSelectedDateTime(dateTime);
    }
  }

  function handleDatetimePickerAndroid() {
    setShowDatePicker((prev) => !prev);
  }

  async function handleSavePlant() {
    const plantStorage = { ...plant, dateTimeNotification: selectedDateTime };
    try {
      await savePlant(plantStorage);
      navigation.navigate('ConfirmPlant');
    } catch {
      Alert.alert('Unable to save the plant. 🥲');
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.plant}>
        <SvgFromUri uri={plant.photo} height={200} />
        <Text style={styles.title}>{plant.name}</Text>
        <Text style={styles.description}>{plant.about}</Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image style={styles.image} source={waterDropImg} />
          <Text style={styles.tip}>{plant.water_tips}</Text>
        </View>
        <Text style={styles.reminder}>
          Choose the best time to be reminded:
        </Text>
        {showDatePicker && (
          <DateTimePicker
            value={selectedDateTime}
            mode="time"
            display={Platform.OS === 'ios' ? 'spinner' : 'default'}
            onChange={handleChangeTime}
          />
        )}

        {Platform.OS === 'android' && (
          <TouchableOpacity
            style={styles.timePickerBtn}
            activeOpacity={0.7}
            onPress={handleDatetimePickerAndroid}
          >
            <Text style={styles.timePicker}>{`Change ${format(
              selectedDateTime,
              'HH:mm',
            )}  `}</Text>
          </TouchableOpacity>
        )}
        <Button title="Register Plant" onPress={handleSavePlant} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    flex: 1,
  },
  plant: {
    paddingTop: 30,
    paddingBottom: 80,
    paddingHorizontal: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontFamily: fonts.heading,
    color: colors.heading,
    marginTop: 10,
  },
  description: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 25,
    fontFamily: fonts.text,
    color: colors.heading,
    marginTop: 16,
  },

  controller: {
    flex: 1,
    paddingHorizontal: 32,
    backgroundColor: colors.white,
    justifyContent: 'space-between',
    paddingBottom: 10,
  },

  tipContainer: {
    bottom: 50,
    height: 100,
    position: 'relative',
    backgroundColor: colors.blue_light,
    flexDirection: 'row',
    borderRadius: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 20,
  },

  image: {
    width: 56,
    height: 56,
    marginRight: 24,
  },
  tip: {
    fontFamily: fonts.text,
    fontSize: 15,
    color: colors.blue,
    flex: 1,
  },
  reminder: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.text,
    color: colors.heading,
    marginTop: -15,
  },

  timePickerBtn: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 40,
  },

  timePicker: {
    color: colors.heading,
    fontSize: 24,
    fontFamily: fonts.text,
  },
});
