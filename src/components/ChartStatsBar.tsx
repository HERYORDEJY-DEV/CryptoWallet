import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { yellow_color } from '../styles/color';

interface Props {
  containerStyle?: RN.ViewStyle;
  vol: string;
  high: string;
  low: string;
}

interface State {}

const ChartStatsBar: React.FC<Props> = (props) => {
  return (
    <RN.View style={[styles.container, props.containerStyle]}>
      <RN.View style={styles.wrapper}>
        <RN.Text style={styles.key}>Vol</RN.Text>
        <RN.Text style={styles.value}>{props.vol}</RN.Text>
      </RN.View>
      <RN.View style={styles.line}>
        <RN.Text> </RN.Text>
      </RN.View>
      <RN.View style={styles.wrapper}>
        <RN.Text style={styles.key}>High</RN.Text>
        <RN.Text style={styles.value}>{props.high}</RN.Text>
      </RN.View>
      <RN.View style={styles.line}>
        <RN.Text> </RN.Text>
      </RN.View>
      <RN.View style={styles.wrapper}>
        <RN.Text style={styles.key}>Low</RN.Text>
        <RN.Text style={styles.value}>{props.low}</RN.Text>
      </RN.View>
    </RN.View>
  );
};

export default ChartStatsBar;

const styles = RN.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: RFValue(1),
    borderColor: '#FFFFFF50',
    paddingBottom: RFValue(20),
  },
  wrapper: { marginHorizontal: RFValue(20) },
  key: { fontFamily: 'MSb', fontSize: RFValue(12), color: '#FFFFFF' },
  value: { fontFamily: 'MBd', fontSize: RFValue(14), color: '#FFFFFF' },
  line: {
    borderLeftWidth: RFValue(1),
    borderColor: '#FFFFFF50',
    height: RFValue(10),
  },
});
