import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { Button } from '../components/Button';
import { saveUser } from '../lib/storage';
import { colors } from '../styles/colors';
import { fonts } from '../styles/fonts';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [name, setName] = useState('');
  const navigation = useNavigation();

  const isFilled = name.length > 0;

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputBlur() {
    setIsFocused(false);
  }

  async function handleSubmit() {
    if (name.length === 0) {
      return Alert.alert('Please enter your name.');
    }
    try {
      await saveUser(name)
      navigation.navigate('ConfirmLogin');
    } catch {
      return Alert.alert('Unable to save your name.');
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
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
            <Button title="Confirm" onPress={handleSubmit} />
          </View>
        </View>
      </TouchableWithoutFeedback>
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
