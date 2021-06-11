import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';
import {
  green_color,
  grey_color,
  red_color,
  yellow_color,
} from '../styles/color';
import Charts from './Charts';
import { CoinProps } from '../api/models';
import { BnbIcon } from '../svg/BnbIcon';
import { chartData, chartDataMal } from '../api/data';

interface Props extends CoinProps {
  containerStyle?: RN.ViewStyle;
}

interface State {
  selectedPeriod: '30m' | '1H' | '4H' | '1D';
}

const period = ['30m', '1H', '4H', '1D'];

const TopCoinsItem: React.FC<Props> = (props) => {
  const [selectedPeriod, setSelectedPeriod] = React.useState<State>({
    selectedPeriod: '30m',
  });
  const onSelecPeriod = (period) => {
    setSelectedPeriod({ selectedPeriod: period });
  };

  // navigation instance
  const navigation = useNavigation();

  return (
    <RN.View style={[styles.container, props.containerStyle]}>
      <RN.Pressable
        onPress={() => navigation.navigate('CoinInfo', { name: props.name })}
      >
        <RN.View style={styles.coinNameWrapper}>
          <RN.View style={styles.coinNameSubWrapper}>
            {/* {props.name === 'Binance' ? (
              <BnbIcon />
            ) : ( */}
            <NB.Icon
              style={[styles.coinIcon, { color: props.color }]}
              type={'MaterialCommunityIcons'}
              name={`${props.name.toLowerCase()}`}
            />
            {/* )} */}
            <RN.Text style={styles.coinName}>{props.code}/USDT</RN.Text>
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
        <RN.View
          style={[styles.valueWrapper, { borderLeftColor: props.color }]}
        >
          <RN.View style={styles.valueSubWrapper}>
            <RN.Text style={[styles.coinValue, { color: props.color }]}>
              {props.value.split('.')[0]}
            </RN.Text>
            <RN.Text style={[styles.coinValueSmall, { color: props.color }]}>
              .{props.value.split('.')[1]}
            </RN.Text>
          </RN.View>
          <RN.Text style={styles.dollarEquivalent}>
            ${props.dollarEquivalent}
          </RN.Text>
        </RN.View>
      </RN.Pressable>
      <Charts data={chartDataMal(props.percentage)} />
      <RN.View style={styles.periodWrapper}>
        {period.map((p, index) => (
          <RN.Pressable
            key={`p-${index}`}
            style={[
              styles.periodButton,
              {
                backgroundColor:
                  selectedPeriod.selectedPeriod === p
                    ? grey_color
                    : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
              },
            ]}
            onPress={() => onSelecPeriod(p)}
          >
            <RN.Text style={styles.periodText}>{p}</RN.Text>
          </RN.Pressable>
        ))}
      </RN.View>
    </RN.View>
  );
};

export default TopCoinsItem;

const styles = RN.StyleSheet.create({
  container: {
    // flex: 1,
    width: RFValue(200),
    // height: RFValue(250),
    borderRadius: RFValue(20),
    backgroundColor: '#1f2029',
    borderWidth: RFValue(0.5),
    borderColor: '#FFFFFF50',
    paddingVertical: RFValue(20),
    marginVertical: RFValue(20),
    elevation: 5,
  },
  coinNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(10),
  },
  coinNameSubWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coinIcon: { color: '#FFFFFF', marginRight: RFValue(5) },
  coinName: { fontFamily: 'MSb', fontSize: RFValue(14) },
  percentageWrapper: {
    width: RFValue(60),
    height: RFValue(30),
    borderRadius: RFValue(50),
    backgroundColor: grey_color,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  percentage: {
    fontFamily: 'MBd',
    fontSize: RFValue(10),
  },
  valueWrapper: {
    borderLeftWidth: RFValue(3),
    paddingLeft: RFValue(10),
    marginLeft: RFValue(20),
    marginTop: RFValue(10),
    paddingVertical: RFValue(5),
  },
  valueSubWrapper: {
    flexDirection: 'row',
    alignItems: 'baseline',
    // justifyContent: 'space-between',
  },
  coinValue: {
    fontFamily: 'MBd',
    fontSize: RFValue(18),
    marginBottom: RFValue(5),
  },
  coinValueSmall: {
    fontFamily: 'MBd',
    fontSize: RFValue(12),
  },
  dollarEquivalent: {
    fontFamily: 'MSb',
    fontSize: RFValue(14),
    color: '#FFFFFF90',
  },
  periodWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(10),
    paddingTop: RFValue(20),
  },
  periodButton: {
    width: RFValue(30),
    height: RFValue(20),
    borderRadius: RFValue(5),
    backgroundColor: grey_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  periodText: { fontFamily: 'MBd', fontSize: RFValue(8) },
});
