import { Feather } from '@expo/vector-icons';
import { format } from 'date-fns';
import { useState } from 'react';
import { Animated, StyleSheet, Text, View } from 'react-native';
import {
  RectButton,
  RectButtonProps,
  Swipeable,
} from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

interface PlantProps extends RectButtonProps {
  name: string;
  photo: string;
  dateTime: Date;
  handleRemove: () => void;
}
export function PlantCardSecondary({
  name,
  photo,
  dateTime,
  handleRemove,
  style,
  ...rest
}: PlantProps) {
  const [open, setOpen] = useState(false);
  const time = format(dateTime, 'HH:mm');

  return (
    <Swipeable
      overshootRight={false}
      leftThreshold={20}
      onSwipeableWillOpen={() => setOpen(true)}
      onSwipeableWillClose={() => setOpen(false)}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton style={styles.buttonRemove} onPress={handleRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton
        style={[styles.container, style, open && { left: 30 }]}
        {...rest}
      >
        <View style={styles.plant}>
          <SvgFromUri height={50} width={50} uri={photo} />
          <Text style={styles.text}>{name}</Text>
        </View>
        <View>
          <Text style={styles.watering}>Water at</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
      </RectButton>
    </Swipeable>
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
  buttonRemove: {
    width: 100,
    height: 80,
    backgroundColor: colors.red,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    paddingLeft: 25,
  },
});
