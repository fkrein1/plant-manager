import { useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { SvgFromUri } from 'react-native-svg';
import waterDropImg from '../assets/waterdrop.png';
import { Button } from '../components/Button';
import { Loading } from '../components/Loading';
import { api } from '../services/api';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';
import { PlantProps } from './PlantSelect';

interface Params {
  id: string;
}

export function PlantSave({}) {
  const [plant, setPlant] = useState<PlantProps>();
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const { id } = route.params as Params;

  useEffect(() => {
    async function getPlant() {
      const { data } = await api.get(`plants/${id}`);
      console.log(data);
      setPlant(data);
      setLoading(false);
    }
    getPlant();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.plant}>
        <SvgFromUri uri={plant.photo} height={240} />
        <Text style={styles.title}>{plant.name}</Text>
        <Text style={styles.description}>{plant.about}</Text>
      </View>
      <View style={styles.controller}>
        <View style={styles.tipContainer}>
          <Image style={styles.image} source={waterDropImg} />
          <Text style={styles.tip}>{plant.water_tips}</Text>
        </View>
        <Button title="Register Plant" onPress={() => {}} />
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
    paddingTop:10,
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
    justifyContent: "space-between",
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
});
