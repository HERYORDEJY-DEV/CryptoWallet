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
      {/* ================================================================ */}
      {/* <RN.View style={{ backgroundColor: 'black' }}>
        <ChartPathProvider data={{ points, smoothingStrategy: 'bezier' }}>
          <ChartPath height={SIZE / 2} stroke='yellow' width={SIZE} />
          <ChartDot style={{ backgroundColor: 'blue' }} />
        </ChartPathProvider>
      </RN.View> */}
    </>
  );
};

export default Charts;

const styles = RN.StyleSheet.create({
  container: {},
});

{
  /* <LineChart
  bezier
  data={{
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        data: [
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
          Math.random() * 100,
        ],
      },
    ],
  }}
  width={Dimensions.get('window').width} // from react-native
  height={220}
  chartConfig={{
    fillShadowGradient: 'red',
    fillShadowGradientOpacity: 0.5,
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `#c33455`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: {
      borderRadius: 16,
      padding: 0,
      margin: 0,
    },
  }}
  style={{ padding: 0, margin: 0 }}
  withHorizontalLines={false}
  withHorizontalLabels={false}
  withVerticalLines={false}
  withVerticalLabels={false}
  withDots={false}
/>; */
}
