import LottieView from 'lottie-react-native';
import React, { useRef } from 'react';
import { StyleSheet, View } from 'react-native';

export function Loading() {
  const animation = useRef(null);

  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        ref={animation}
        style={styles.animation}
        source={require('../assets/load.json')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  animation: {
    width: 300,
    height: 300,
    backgroundColor: 'transparent',
  },
});
