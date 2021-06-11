import * as React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { BottomTabNavigation } from './TabNavigation';
import { AuthNavigation } from './AuthNavigation';
import { StackNavigation } from './StackNavigation';

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
}
