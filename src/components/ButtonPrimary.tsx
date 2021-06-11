import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { yellow_color } from '../styles/color';

interface Props {
  containerStyle?: RN.ViewStyle;
  title: string | React.ReactNode;
  onPress: () => void;
}

interface State {}

const ButtonPrimary: React.FC<Props> = (props) => {
  return (
    <RN.Pressable
      style={[styles.container, props.containerStyle]}
      onPress={props.onPress}
    >
      {typeof props.title === 'string' ? (
        <RN.Text style={styles.title}>{props.title}</RN.Text>
      ) : (
        props.title
      )}
    </RN.Pressable>
  );
};

export default ButtonPrimary;

const styles = RN.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: yellow_color,
    height: RFValue(50),
    // width: '100%',
    borderRadius: RFValue(30),
  },
  title: { fontFamily: 'MBd', fontSize: RFValue(12), color: '#000000' },
});
