import * as React from 'react';
import * as RN from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import {
  Chart,
  Line,
  Area,
  HorizontalAxis,
  VerticalAxis,
  Tooltip,
} from 'react-native-responsive-linechart';
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   ProgressChart,
//   ContributionGraph,
//   StackedBarChart,
// } from 'react-native-chart-kit';

interface Props {
  containerStyle?: RN.ViewStyle;
}

interface State {}

const Charts: React.FC<Props> = (props) => {
  return (
    <Chart
      style={[
        { height: 200, width: '100%' },
        styles.container,
        props.containerStyle,
      ]}
      data={[
        { x: -2, y: 15 },
        { x: -1, y: 10 },
        { x: 0, y: 12 },
        { x: 1, y: 7 },
        { x: 2, y: 6 },
        { x: 3, y: 8 },
        { x: 4, y: 10 },
        { x: 5, y: 8 },
        { x: 6, y: 0 },
        { x: 7, y: 14 },
        { x: 8, y: 12 },
        { x: 9, y: 13.5 },
        { x: 10, y: 18 },
      ]}
      padding={{ left: 40, bottom: 20, right: 20, top: 20 }}
      xDomain={{ min: 0, max: 10 }}
      yDomain={{ min: 0, max: 20 }}
      viewport={{ size: { width: 5 } }}
    >
      <Line
        theme={{
          stroke: { color: '#f39c12', width: 2 },
        }}
        smoothing='bezier'
      />
      <Area
        theme={{
          gradient: {
            from: { color: '#f39c12', opacity: 0.4 },
            to: { color: '#f39c12', opacity: 0 },
          },
        }}
        smoothing='bezier'
      />
    </Chart>
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
