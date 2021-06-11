import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { useNavigation, useRoute } from '@react-navigation/native';
import { RFValue } from 'react-native-responsive-fontsize';
import {
  background_color,
  green_color,
  grey_color,
  red_color,
} from '../../styles/color';
import { topCoinsData } from '../../api/data';
import ChartStatsBar from '../../components/ChartStatsBar';
import ChartBig from '../../components/ChartBig';
import QuickWatchItem from '../../components/QuickWatchItem';
import ButtonSecondary from '../../components/ButtonSecondary';
import ButtonPrimary from '../../components/ButtonPrimary';
import { CoinProps } from '../../api/models';

// interface Props extend
interface State {
  selectedPeriod: '30m' | '1H' | '4H' | '1D' | '3D' | '7D';
}

const period = ['30m', '1H', '4H', '1D', '3D', '7D'];

const CoinInfo: React.FC = (props) => {
  const [selectedPeriod, setSelectedPeriod] = React.useState<State>({
    selectedPeriod: '30m',
  });
  const onSelecPeriod = (period) => {
    setSelectedPeriod({ selectedPeriod: period });
  };

  // navigation instance
  const navigation = useNavigation();
  const route = useRoute();
  const {
    params: { name: coinName },
  } = route;

  const prop = topCoinsData.filter(
    (coin: CoinProps, index) => coin.name === coinName,
  )[0];
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        backgroundColor={background_color}
        barStyle={'light-content'}
        translucent={true}
      />
      {/* Header */}
      <RN.View style={styles.headerWrapper}>
        <RN.Pressable
          style={styles.headerLeftWrapper}
          onPress={() => navigation.goBack()}
        >
          <NB.Icon
            style={styles.headerRightIcon}
            name={'chevron-left'}
            type={'Feather'}
          />
          <RN.Text style={styles.headerLeftTitle}>Wallet</RN.Text>
        </RN.Pressable>
        <RN.View style={styles.headerRightWrapper}>
          <NB.Icon
            style={styles.headerLeftIcon}
            name={'sync'}
            type={'MaterialCommunityIcons'}
          />
          <NB.Icon
            style={styles.headerLeftIcon}
            name={'credit-card-scan-outline'}
            type={'MaterialCommunityIcons'}
          />
          <NB.Icon
            style={styles.headerLeftIcon}
            name={'star-circle-outline'}
            type={'MaterialCommunityIcons'}
          />
        </RN.View>
      </RN.View>
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        <ChartBig {...prop} />
        {/* Quickwatch */}
        <RN.View style={styles.quickWatchWrapper}>
          <RN.Text style={styles.quickWatchTitle}>Quick Watch</RN.Text>
          <RN.View style={styles.quickWachItemWrapper}>
            {topCoinsData.map((coin, index) => (
              <QuickWatchItem {...coin} index={index} key={coin.id + index} />
            ))}
          </RN.View>
        </RN.View>
      </NB.Content>
      <RN.View style={styles.bottomWrapper}>
        <ButtonSecondary
          title={'Withdraw'}
          onPress={() => {}}
          containerStyle={styles.bottomButtonLeft}
        />
        <ButtonPrimary
          title={
            <NB.Icon
              name={'arrow-collapse-down'}
              type={'MaterialCommunityIcons'}
              style={styles.downloadIcon}
            />
          }
          onPress={() => {}}
          containerStyle={styles.bottomButtonRight}
        />
      </RN.View>
    </NB.Container>
  );
};

export default CoinInfo;

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: background_color,

    paddingTop: RFValue(30),
  },
  content: {},
  contentContainer: { paddingBottom: RFValue(10) },
  headerWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomColor: '#FFFFFF30',
    borderBottomWidth: RFValue(1),
    padding: RFValue(20),
    paddingTop: RFValue(0),
    paddingBottom: RFValue(10),
  },
  headerLeftWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerLeftIcon: {
    color: '#FFFFFF',
    padding: RFValue(10),
    paddingLeft: RFValue(20),
    paddingRight: 0,
  },
  headerLeftTitle: { fontSize: RFValue(14), fontFamily: 'MBd' },
  headerRightWrapper: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerRightIcon: {
    color: '#FFFFFF',
    paddingRight: RFValue(5),
  },
  quickWatchWrapper: {},
  quickWatchTitle: {
    padding: RFValue(20),
    fontSize: RFValue(14),
    fontFamily: 'MSb',
  },
  quickWachItemWrapper: {},
  bottomWrapper: {
    margin: RFValue(20),
    marginVertical: RFValue(10),
    flexDirection: 'row',
  },
  bottomButtonLeft: { flex: 5.5, height: RFValue(50) },
  bottomButtonRight: { flex: 1, height: RFValue(50), marginLeft: RFValue(10) },
  downloadIcon: { color: '#000000', fontSize: RFValue(18) },
});
