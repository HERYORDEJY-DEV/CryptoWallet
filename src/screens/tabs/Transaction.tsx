import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { useNavigation } from '@react-navigation/native';

import { background_color, grey_color } from '../../styles/color';
import CurrentBalance from './../../components/CurrentBalance';
import CoinsHightlightBar from '../../components/CoinsHightlightBar';
import { topCoinsData } from '../../api/data';
import ButtonPrimary from '../../components/ButtonPrimary';
import ButtonSecondary from './../../components/ButtonSecondary';
import TopCoinsItem from './../../components/TopCoinsItem';
import { CoinProps } from '../../api/models';

const Transaction: React.FC = () => {
  // navigation insance
  const navigation = useNavigation();
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        backgroundColor={background_color}
        barStyle={'light-content'}
      />
      {/* Header */}
      <RN.View style={styles.headerWrapper}>
        <RN.Pressable style={styles.headerButtonWrapper}>
          <NB.Icon
            style={styles.headerButtonIcon}
            name={'align-right'}
            type={'Feather'}
          />
        </RN.Pressable>
      </RN.View>
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
      >
        {/* Current Balance */}
        <CurrentBalance
          coinBalance={'9.029411'}
          coinCode={'BTC'}
          dollarEquivalent={'418,623.24'}
          percentage={'10.23'}
          gain={true}
        />

        {/* Coins Hightlight Bar */}
        <CoinsHightlightBar data={topCoinsData} />

        {/* Transc Buttons */}
        <RN.View style={styles.trancsButtonsWrapper}>
          <ButtonPrimary
            onPress={() => {}}
            title={'Deposit'}
            containerStyle={{ marginRight: RFValue(10) }}
          />
          <ButtonSecondary
            onPress={() => navigation.navigate('CoinInfo', { name: 'Bitcoin' })}
            title={'Withdraw'}
            containerStyle={{ marginLeft: RFValue(10) }}
          />
        </RN.View>

        {/* Top Coins */}
        <RN.View style={styles.topCoinsWrapper}>
          <RN.View style={styles.topCoinHeaderWrapper}>
            <RN.Text style={styles.topCoinHeaderTitle}>Top Coins</RN.Text>
            <RN.Pressable style={styles.topCoinFilterButton}>
              <RN.Text style={styles.topCoinFilterTitle}>Filter</RN.Text>
              <NB.Icon
                name={'sort'}
                type={'FontAwesome'}
                style={styles.filterIcon}
              />
            </RN.Pressable>
          </RN.View>
          <RN.ScrollView
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
            horizontal={true}
            contentContainerStyle={styles.topIconsItemWrapper}
          >
            {topCoinsData.map((coin: CoinProps, index) => (
              <TopCoinsItem
                key={coin.id + index}
                {...coin}
                color={coin.color}
                containerStyle={{
                  marginRight:
                    index + 1 === topCoinsData.length ? 0 : RFValue(20),
                }}
              />
            ))}
          </RN.ScrollView>
        </RN.View>
      </NB.Content>
    </NB.Container>
  );
};

export default Transaction;

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background_color,
    paddingHorizontal: RFValue(20),
    paddingTop: RFValue(10),
  },
  content: {},
  contentContainer: { paddingTop: RFValue(10) },
  headerWrapper: { alignItems: 'flex-end' },
  headerButtonWrapper: {
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: 50,
    backgroundColor: grey_color,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  headerButtonIcon: { color: '#ffffff' },
  trancsButtonsWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: RFValue(5),
  },
  topCoinsWrapper: { marginVertical: RFValue(30) },
  topCoinHeaderWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topCoinHeaderTitle: { fontFamily: 'MBd', fontSize: RFValue(16) },
  topCoinFilterButton: {
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  topCoinFilterTitle: {
    fontFamily: 'MBd',
    fontSize: RFValue(12),
    marginRight: RFValue(10),
  },
  filterIcon: { color: '#FFFFFF', fontSize: RFValue(12) },
  topIconsItemWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
