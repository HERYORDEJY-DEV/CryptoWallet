import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { grey_color, yellow_color } from '../styles/color';

interface Props {
  containerStyle?: RN.ViewStyle;
  title: string | React.ReactNode;
  onPress: () => void;
}

interface State {}

const ButtonSecondary: React.FC<Props> = (props) => {
  return (
    <RN.Pressable
      onPress={props.onPress}
      style={[styles.container, props.containerStyle]}
    >
      {typeof props.title === 'string' ? (
        <RN.Text style={styles.title}>{props.title}</RN.Text>
      ) : (
        props.title
      )}
    </RN.Pressable>
  );
};

export default ButtonSecondary;

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: grey_color,
    height: RFValue(50),
    borderRadius: RFValue(30),
  },
  title: { fontFamily: 'MBd', fontSize: RFValue(12), color: '#FFFFFF' },
});
