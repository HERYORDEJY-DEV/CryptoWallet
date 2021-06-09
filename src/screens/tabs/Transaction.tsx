import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { Background } from '../../styles/color';

const Transaction: React.FC = () => {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar backgroundColor={Background} barStyle={'light-content'} />
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
      <NB.Content>
        <RN.Text style={{ fontFamily: 'MTh' }}>Yusuf</RN.Text>
      </NB.Content>
    </NB.Container>
  );
};

export default Transaction;

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Background,
    paddingHorizontal: RFValue(20),
    paddingTop: RFValue(30),
  },
  content: {},
  contentContainer: {},
  headerWrapper: { alignItems: 'flex-end' },
  headerButtonWrapper: {
    width: RFValue(50),
    height: RFValue(50),
    borderRadius: 50,
    backgroundColor: '#2d2d31',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  headerButtonIcon: { color: '#ffffff' },
});
