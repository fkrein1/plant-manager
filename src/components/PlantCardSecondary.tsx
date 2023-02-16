import { StyleSheet, Text, View } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';
import {format} from 'date-fns'


interface PlantProps extends RectButtonProps {
  name: string;
  photo: string;
  dateTime: Date;
}
export function PlantCardSecondary({
  name,
  photo,
  dateTime,
  style,
  ...rest
}: PlantProps) {

  const time = format(dateTime, 'HH:mm')

  return (
    <RectButton style={[styles.container, style]} {...rest}>
      <View style={styles.plant}>
        <SvgFromUri height={50} width={50} uri={photo} />
        <Text style={styles.text}>{name}</Text>
      </View>
      <View>
        <Text style={styles.watering}>Water at</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    width: '100%',
    flexDirection: 'row',
    borderRadius: 20,
    backgroundColor: colors.shape,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginBottom: 8,
  },
  plant: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  text: {
    color: colors.heading,
    fontSize: 18,
    fontFamily: fonts.heading,
    marginLeft: 24,
  },
  watering: {
    fontFamily: fonts.text,
    fontSize: 14,
    color: colors.heading,
    textAlign: 'right',
    
  },
  time: {
    fontFamily: fonts.heading,
    fontSize: 14,
    color: colors.heading,
    textAlign: 'right',
    lineHeight: 20,
  },
});
