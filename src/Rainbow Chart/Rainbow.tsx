import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
// import {
//   ChartDot,
//   ChartPath,
//   ChartPathProvider,
//   monotoneCubicInterpolation,
// } from '@rainbow-me/animated-charts';
import {
  useSharedValue,
  runOnJS,
  useDerivedValue,
  useAnimatedReaction,
} from 'react-native-reanimated';

export const { width: SIZE } = Dimensions.get('window');

export const data = [
  { x: 1453075200, y: 1.47 },
  { x: 1453161600, y: 1.37 },
  { x: 1453248000, y: 1.53 },
  { x: 1453334400, y: 1.54 },
  { x: 1453420800, y: 1.52 },
  { x: 1453507200, y: 2.03 },
  { x: 1453593600, y: 2.1 },
  { x: 1453680000, y: 2.5 },
  { x: 1453766400, y: 2.3 },
  { x: 1453852800, y: 2.42 },
  { x: 1453939200, y: 2.55 },
  { x: 1454025600, y: 2.41 },
  { x: 1454112000, y: 2.43 },
  { x: 1454198400, y: 2.2 },
];

// const points = monotoneCubicInterpolation(data)(40);

import Graph from './Graph';
import Footer from './components/Footer';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
});

const Rainbow = () => {
  const randomWidth = useSharedValue(10);
  const lastResults = [];

  const recordResult = (result) => {
    lastResults.push(result);
    if (lastResults.length > 3) {
      lastResults.shift();
    }
  };

  useDerivedValue(() => {
    runOnJS(recordResult)(randomWidth.value);
  });
  return (
    <View style={styles.container}>
      <Graph />
      <Footer />
    </View>
  );
};

export default Rainbow;
