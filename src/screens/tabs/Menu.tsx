import * as React from 'react';
import * as RN from 'react-native';

import * as NB from 'native-base';
import { RFValue } from 'react-native-responsive-fontsize';
import { background_color, grey_color } from '../../styles/color';

const Menu: React.FC = () => {
  return (
    <NB.Container style={styles.container}>
      <RN.StatusBar
        backgroundColor={background_color}
        barStyle={'light-content'}
        translucent={true}
      />
      {/* Header */}
      <NB.Content
        style={styles.content}
        contentContainerStyle={styles.contentContainer}
      >
        <RN.Text style={styles.title}>Menu Screen</RN.Text>
      </NB.Content>
    </NB.Container>
  );
};

export default Menu;

const styles = RN.StyleSheet.create({
  container: {
    backgroundColor: background_color,
    padding: RFValue(20),
  },
  content: {},
  contentContainer: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  title: { fontSize: RFValue(50), fontFamily: 'MXb' },
});
