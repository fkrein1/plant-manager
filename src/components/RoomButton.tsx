import { StyleSheet, Text } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

interface RoomButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}
export function RoomButton({
  title,
  active = false,
  ...rest
}: RoomButtonProps) {
  return (
    <RectButton
      {...rest}
      style={[styles.container, active && styles.containerActive]}
    >
      <Text style={[styles.title, active && styles.titleActive]}>{title}</Text>
    </RectButton>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.shape,
    width: 90,
    height: 40,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  containerActive: {
    backgroundColor: colors.green_light,
  },
  title: {
    fontFamily: fonts.text,
    color: colors.heading,
  },
  titleActive: {
    fontFamily: fonts.heading,
    color: colors.green_dark,
  },
});
