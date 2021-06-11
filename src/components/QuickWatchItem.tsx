import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';
import * as NB from 'native-base';
import { CoinProps } from '../api/models';
import {
  green_color,
  grey_color,
  red_color,
  yellow_color,
} from '../styles/color';

interface Props extends CoinProps {
  containerStyle?: RN.ViewStyle;
  onPress?: () => void;
  index: number;
}

interface State {}

const QuickWatchItem: React.FC<Props> = (props) => {
  const start = { x: 0, y: 0 };
  const end = { x: 1, y: 0 };
  const isOddIndex = props.index % 2 !== 0;
  return (
    <LinearGradient
      start={isOddIndex ? start : end}
      end={isOddIndex ? end : start}
      colors={['transparent', '#FFFFFF15']}
      style={styles.linearGradient}
    >
      <RN.Pressable
        style={[styles.container, props.containerStyle]}
        onPress={props.onPress}
      >
        <RN.View style={styles.coinNameWrapper}>
          <RN.View style={styles.coinNameSubWrapper}>
            <NB.Icon
              style={[styles.coinIcon, { color: props.color }]}
              type={'MaterialCommunityIcons'}
              name={`${props.name.toLowerCase()}`}
            />
            <RN.Text style={styles.coinName}>
              {props.code}
              {'    '}-
            </RN.Text>
            <NB.Icon
              name={props.gain ? 'arrow-up' : 'arrow-down'}
              type={'MaterialCommunityIcons'}
              style={styles.arrowIcon}
            />
            <RN.Text style={styles.coinName}>{props.high}</RN.Text>
          </RN.View>
          {/* Percentage */}
          <RN.View style={styles.percentageWrapper}>
            <RN.Text
              style={[
                styles.percentage,
                { color: props.gain ? green_color : red_color },
              ]}
            >
              {props.gain ? '+' : '-'}
              {props.percentage}%
            </RN.Text>
          </RN.View>
        </RN.View>
      </RN.Pressable>
    </LinearGradient>
  );
};

export default QuickWatchItem;

const styles = RN.StyleSheet.create({
  container: {
    paddingVertical: RFValue(15),
    paddingHorizontal: RFValue(20),
    justifyContent: 'center',
  },
  coinNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // paddingHorizontal: RFValue(10),
  },
  coinNameSubWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coinIcon: {
    marginRight: RFValue(5),
    fontSize: RFValue(20),
    width: RFValue(20),
    height: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
  coinName: { fontFamily: 'MSb', fontSize: RFValue(12) },
  percentageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentage: {
    fontFamily: 'MBd',
    fontSize: RFValue(10),
  },
  arrowIcon: {
    color: '#FFFFFF',
    fontSize: RFValue(14),
    marginRight: RFValue(5),
    marginLeft: RFValue(20),
  },
  linearGradient: {},
});
