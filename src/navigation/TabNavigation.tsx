import * as React from 'react';
import * as RN from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import normalize from 'react-native-normalize';

import { background_color } from '../styles/color';
import Transaction from '../screens/tabs/Transaction';
import Home from '../screens/tabs/Home';
import Link from './../screens/tabs/Link';
import Wallet from '../screens/tabs/Wallet';
import Menu from './../screens/tabs/Menu';

const BottomTab = createBottomTabNavigator();

function tabIcons(label, isFocused) {
  if (label === 'Home') {
    return (
      <NB.Icon
        name={'home'}
        type={'AntDesign'}
        style={[styles.icon, { color: isFocused ? '#000000' : '#FFFFFF' }]}
      />
    );
  }
  if (label === 'Link') {
    return (
      <NB.Icon
        name={'link'}
        type={'AntDesign'}
        style={[styles.icon, { color: isFocused ? '#000000' : '#FFFFFF70' }]}
      />
    );
  }
  if (label === 'Transaction') {
    return (
      <NB.Icon
        name={'arrowsalt'}
        type={'AntDesign'}
        style={[styles.icon, { color: isFocused ? '#000000' : '#FFFFFF70' }]}
      />
    );
  }
  if (label === 'Wallet') {
    return (
      <NB.Icon
        name={'wallet'}
        type={'AntDesign'}
        style={[styles.icon, { color: isFocused ? '#000000' : '#FFFFFF70' }]}
      />
    );
  }
  if (label === 'Menu') {
    return (
      <NB.Icon
        name={'grid-outline'}
        type={'Ionicons'}
        style={[styles.icon, { color: isFocused ? '#000000' : '#FFFFFF70' }]}
      />
    );
  }
}

function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <RN.View style={styles.barStyle}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const focusedButtonStyle: RN.ViewStyle = {
          backgroundColor: '#FFFFFF',
          borderRadius: RFValue(20),
          height: RFValue(60),
          width: RFValue(20),
        };

        return (
          <RN.TouchableOpacity
            key={label}
            accessibilityRole='button'
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.labelWrapper, isFocused && focusedButtonStyle]}
          >
            {tabIcons(label, isFocused)}
          </RN.TouchableOpacity>
        );
      })}
    </RN.View>
  );
}

// ...

export function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      animation={false}
      initialRouteName={'Transaction'}
      tabBar={(props) => <MyTabBar {...props} />}
    >
      <BottomTab.Screen name={'Home'} component={Home} />
      <BottomTab.Screen name={'Link'} component={Link} />
      <BottomTab.Screen name={'Transaction'} component={Transaction} />
      <BottomTab.Screen name={'Wallet'} component={Wallet} />
      <BottomTab.Screen name={'Menu'} component={Menu} />
    </BottomTab.Navigator>
  );
}

const styles = RN.StyleSheet.create({
  barStyle: {
    backgroundColor: background_color,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: RFValue(10),
    paddingBottom: RFValue(10),
    borderWidth: 0,
  },
  labelWrapper: {
    flex: 1,
    paddingVertical: RFValue(5),
    height: RFValue(60),
    width: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: RFValue(18),
  },
});
