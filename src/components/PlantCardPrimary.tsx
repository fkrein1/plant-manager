import { Image, StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { SvgFromUri } from 'react-native-svg';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';


interface PlantProps extends RectButtonProps {
  name: string;
  photo: string;
}
export function PlantCardPrimary({ name, photo, style, ...rest }: PlantProps) {
  return (
    <RectButton style={[styles.container, style]} {...rest}>
      <SvgFromUri height={100} uri={photo} />
      <Text style={styles.text}>{name}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1/2,
    borderRadius: 20,
    backgroundColor: colors.shape,
    paddingVertical: 10,
    alignItems: 'center',
  },

  text: {
    color: colors.heading,
    fontSize: 14,
    fontFamily: fonts.heading,
    marginVertical: 10,
  },
});
