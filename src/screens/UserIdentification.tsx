import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { Button } from '../components/Button';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState('');

  const isFilled = name.length > 0;

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Text style={styles.emoji}>{isFilled ? '😄' : '😀'}</Text>
      <Text style={styles.heading}>What can we {'\n'} call you?</Text>
      <TextInput
        style={[
          styles.input,
          (isFocused || isFilled) && { borderBottomColor: colors.green },
        ]}
        placeholder="Enter yout name"
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        value={name}
        onChangeText={setName}
      />
      <View style={styles.footer}>
        <Button />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    paddingHorizontal: 56,
  },
  emoji: {
    fontSize: 44,
    marginBottom: 24,
  },
  heading: {
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    fontSize: 28,
    lineHeight: 32,
    marginBottom: 50,
  },
  input: {
    borderBottomColor: colors.gray,
    textAlign: 'center',
    fontSize: 18,
    borderBottomWidth: 1,
    paddingBottom: 14,
    width: '100%',
    color: colors.heading,
  },
  footer: {
    width: '100%',
    paddingHorizontal: 16,
    marginTop: 40,
  },
});
