import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { CoinProps } from '../api/models';

interface Props {
  data: {}[];
  containerStyle?: RN.ViewStyle;
}

interface State {}

const CoinsHightlightBar: React.FC<Props> = (props) => {
  return (
    <RN.View style={[styles.container, props.containerStyle]}>
      {props.data?.map((coin: CoinProps, index) => (
        <RN.View style={styles.wrapper} key={coin.id + index}>
          <RN.View
            style={[
              styles.colorWrapper,
              { backgroundColor: coin.color + '07' },
            ]}
          >
            <RN.View
              style={[styles.color, { backgroundColor: coin.color }]}
            ></RN.View>
          </RN.View>
          <RN.Text style={styles.title}>
            {`${coin.code}: ${coin.percentage}%`}
          </RN.Text>
        </RN.View>
      ))}
    </RN.View>
  );
};

export default CoinsHightlightBar;

const styles = RN.StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: RFValue(20),
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
  },
  colorWrapper: {
    height: RFValue(30),
    width: RFValue(30),
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  color: {
    height: RFValue(10),
    width: RFValue(10),
    borderRadius: 30,
    elevation: 5,
  },
  title: { fontFamily: 'MMd', fontSize: RFValue(12), color: '#FFFFFF' },
});
