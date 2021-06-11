import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { green_color, grey_color, red_color } from '../styles/color';

interface Props {
  containerStyle?: RN.ViewStyle;
  coinBalance: string;
  coinCode: string;
  dollarEquivalent: string;
  percentage: string;
  gain: boolean;
}

interface State {}

const CurrentBalance: React.FC<Props> = (props) => {
  return (
    <RN.View style={[styles.container, props.containerStyle]}>
      {/* Balance */}
      <RN.View style={styles.balanceWrapper}>
        <RN.Text style={styles.title}>Current Balance</RN.Text>
        <RN.View style={styles.coinWrapper}>
          <RN.Text style={styles.coinBalance}>{props.coinBalance} </RN.Text>
          <RN.Text style={styles.coinCode}>{props.coinCode}</RN.Text>
        </RN.View>
        <RN.Text style={styles.dollarEquivalent}>
          ${props.dollarEquivalent}
        </RN.Text>
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
  );
};

export default CurrentBalance;

const styles = RN.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  balanceWrapper: {},
  title: { fontFamily: 'MMd', fontSize: RFValue(12), color: '#FFFFFF90' },
  coinWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: RFValue(10),
  },
  coinBalance: {
    fontFamily: 'MBd',
    fontSize: RFValue(20),
    color: '#FFFFFF',
  },
  coinCode: {
    fontFamily: 'MBd',
    fontSize: RFValue(14),
    color: '#FFFFFF',
  },
  dollarEquivalent: {
    fontFamily: 'MMd',
    fontSize: RFValue(16),
    color: '#FFFFFF90',
  },
  percentageWrapper: {
    width: RFValue(60),
    height: RFValue(30),
    borderRadius: 50,
    backgroundColor: grey_color,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  percentage: {
    fontFamily: 'MBd',
    fontSize: RFValue(10),
  },
});
