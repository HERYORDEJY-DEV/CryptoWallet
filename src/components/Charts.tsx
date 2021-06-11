import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { Chart, Line, Area } from 'react-native-responsive-linechart';

interface Props {
  containerStyle?: RN.ViewStyle;
  data: { x: number; y: number }[];
}

interface State {}

const Charts: React.FC<Props> = (props) => {
  return (
    <>
      <Chart
        style={[
          { height: RFValue(100), width: '100%' },
          styles.container,
          props.containerStyle,
        ]}
        data={props.data}
        // padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
        xDomain={{ min: 0, max: 10 }}
        yDomain={{ min: 0, max: 20 }}
        // viewport={{ size: { width: 10,  } }}
      >
        <Line
          theme={{
            stroke: { color: '#FFFFFF', width: 1 },
          }}
          smoothing={'cubic-spline'}
        />
        <Area
          theme={{
            gradient: {
              from: { color: '#FFFFFF', opacity: 0.2 },
              to: { color: '#FFFFFF', opacity: 0 },
            },
          }}
          smoothing={'cubic-spline'}
        />
      </Chart>
    </>
  );
};

export default Charts;

const styles = RN.StyleSheet.create({
  container: {},
});
