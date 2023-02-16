import { ReactNode } from 'react';
import { StyleSheet, Text, TextProps, View, ViewProps } from 'react-native';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

interface RootProps extends ViewProps {
  children: ReactNode;
}

export function Root({ children, style, ...rest }: RootProps) {
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
}

interface EmojiProps extends TextProps {
  emoji: string;
}

export function Emoji({ emoji, style, ...rest }: EmojiProps) {
  return (
    <Text style={[styles.emoji, style]} {...rest}>
      {emoji}
    </Text>
  );
}

interface TitleProps extends TextProps {
  title: string;
}

export function Title({ title, style, ...rest }: TitleProps) {
  return (
    <Text style={[styles.title, style]} {...rest}>
      {title}
    </Text>
  );
}

interface SubtitleProps extends TextProps {
  subtitle: string;
}

export function Subtitle({ subtitle, style, ...rest }: SubtitleProps) {
  return (
    <Text style={[styles.subtitle, style]} {...rest}>
      {subtitle}
    </Text>
  );
}

interface RootProps extends ViewProps {
  children: ReactNode;
}

export function Footer({ children, style, ...rest }: RootProps) {
  return (
    <View style={[styles.footer, style]} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 34,
  },
  emoji: {
    fontSize: 78,
    marginBottom: 50,
  },
  title: {
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    fontSize: 24,
    lineHeight: 30,
    marginBottom: 16,
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 18,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 34,
    marginTop: 40,
  },
});
