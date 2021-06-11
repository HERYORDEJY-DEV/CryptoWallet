import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import * as NB from 'native-base';
import { chartDataMal, topCoinsData } from '../api/data';
import {
  green_color,
  grey_color,
  red_color,
  yellow_color,
} from '../styles/color';
import Charts from './Charts';
import ChartStatsBar from './ChartStatsBar';
import { CoinProps } from '../api/models';

interface Props extends CoinProps {
  containerStyle?: RN.ViewStyle;
  volume: string;
  high: string;
  low: string;
}

interface State {
  selectedPeriod: '30m' | '1H' | '4H' | '1D' | '3D' | '7D';
}

const period = ['30m', '1H', '4H', '1D', '3D', '7D'];

const ChartBig: React.FC<Props> = (props) => {
  const [selectedPeriod, setSelectedPeriod] = React.useState<State>({
    selectedPeriod: '30m',
  });
  //  const onSelecPeriod = (period: React.Dispatch<State>) => {
  //  setSelectedPeriod({ 'selectedPeriod': period });
  //  };
  const onSelecPeriod = (period) => {
    setSelectedPeriod({ selectedPeriod: period });
  };

  const prop = topCoinsData[0];

  return (
    <RN.View style={[styles.containerWrapper]}>
      <RN.View style={styles.coinNameWrapper}>
        <RN.View style={styles.coinNameSubWrapper}>
          <NB.Icon
            style={[styles.coinIcon, { color: props.color }]}
            type={'MaterialCommunityIcons'}
            name={`${props.name.toLowerCase()}`}
          />
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
      <RN.View style={[styles.valueWrapper, { borderLeftColor: props.color }]}>
        <RN.View style={styles.valueSubWrapper}>
          <RN.Text style={[styles.coinValue, { color: props.color }]}>
            {props.value.split('.')[0]}
          </RN.Text>
          <RN.Text style={[styles.coinValueSmall, { color: props.color }]}>
            .{props.value.split('.')[1]}
          </RN.Text>
        </RN.View>
        <RN.Text style={styles.dollarEquivalent}>$46,323.35</RN.Text>
      </RN.View>
      <Charts data={chartDataMal(props.percentage)} />
      {/* Chart Stats */}
      <ChartStatsBar vol={props.volume} high={props.high} low={props.low} />
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
                borderWidth:
                  selectedPeriod.selectedPeriod === p ? RFValue(0.5) : 0,
                borderColor:
                  selectedPeriod.selectedPeriod === p
                    ? '#FFFFFF30'
                    : 'transparent',
                alignItems: 'center',
                justifyContent: 'center',
                elevation: selectedPeriod.selectedPeriod === p ? 5 : 0,
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

export default ChartBig;

const styles = RN.StyleSheet.create({
  containerWrapper: {
    // flex: 1,
    // height: RFValue(250),
    backgroundColor: '#1f2029',
    paddingVertical: RFValue(10),
    // marginVertical: RFValue(20),
  },

  coinNameWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(30),
    marginBottom: RFValue(20),
  },
  coinNameSubWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  coinIcon: {
    marginRight: RFValue(5),
    fontSize: RFValue(30),
  },
  coinName: { fontFamily: 'MBd', fontSize: RFValue(18) },
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
    paddingVertical: RFValue(5),
    marginLeft: RFValue(40),
  },
  valueSubWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  coinValue: {
    fontFamily: 'MBd',
    fontSize: RFValue(30),
    marginBottom: RFValue(5),
  },
  coinValueSmall: {
    fontFamily: 'MBd',
    fontSize: RFValue(22),
  },
  dollarEquivalent: {
    fontFamily: 'MSb',
    fontSize: RFValue(22),
    color: '#FFFFFF90',
  },
  periodWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(10),
    paddingTop: RFValue(20),
    borderBottomWidth: RFValue(1),
    borderBottomColor: '#FFFFFF10',
    paddingBottom: RFValue(20),
  },
  periodButton: {
    width: RFValue(50),
    height: RFValue(30),
    borderRadius: RFValue(10),
    borderWidth: RFValue(0.5),
    borderColor: '#FFFFFF30',
    backgroundColor: grey_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  periodText: { fontFamily: 'MBd', fontSize: RFValue(12) },
});
