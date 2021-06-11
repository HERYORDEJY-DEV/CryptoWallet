import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabNavigation } from './TabNavigation';
import CoinInfo from '../screens/stack/CoinInfo';

const StackNavigator = createStackNavigator();

export function StackNavigation() {
  return (
    <StackNavigator.Navigator initialRouteName={'Home'} headerMode={null}>
      <StackNavigator.Screen
        name={'Home'}
        component={BottomTabNavigation}
        options={{
          animationEnabled: false,
        }}
      />
      <StackNavigator.Screen
        name={'CoinInfo'}
        component={CoinInfo}
        options={{
          animationEnabled: false,
        }}
      />
    </StackNavigator.Navigator>
  );
}
