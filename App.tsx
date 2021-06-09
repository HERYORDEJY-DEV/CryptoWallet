import React from 'react';
import { useFonts } from 'expo-font';

import { StyleSheet, Text, View, LogBox } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { setCustomText } from 'react-native-global-props';

import Charts from './src/components/Charts';
import Transaction from './src/screens/tabs/Transaction';

// console.disableYellowBox = true;
LogBox.ignoreAllLogs(true);

export default function App() {
  // Setting default styles for all Text components.
  const customTextProps = {
    style: {
      fontSize: RFValue(16),
      fontFamily: 'MRg',
      color: 'white',
    },
  };
  React.useEffect(() => setCustomText(customTextProps));

  const [loaded] = useFonts({
    MBd: require('./src/assets/fonts/Montserrat-Bold.otf'),
    MRg: require('./src/assets/fonts/Montserrat-Regular.otf'),
    MSb: require('./src/assets/fonts/Montserrat-SemiBold.otf'),
    MLt: require('./src/assets/fonts/Montserrat-Light.otf'),
    MTh: require('./src/assets/fonts/Montserrat-Thin.otf'),
    MXb: require('./src/assets/fonts/Montserrat-ExtraBold.otf'),
    MMd: require('./src/assets/fonts/Montserrat-Medium.otf'),
  });

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Transaction />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
