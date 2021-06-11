import { CoinProps } from './models';

export const topCoinsData: CoinProps[] = [
  {
    id: '001',
    name: 'Bitcoin',
    code: 'BTC',
    color: '#f2a900',
    percentage: '10',
    gain: true,
    value: '42,563.23',
    dollarEquivalent: '12,456.12',
    volume: '2,528,061,55.80',
    high: '51,934.55',
    low: '19,111.10',
  },
  {
    id: '002',
    name: 'Ethereum',
    code: 'ETH',
    color: '#c99d66',
    percentage: '15',
    gain: true,
    value: '1,033.17',
    dollarEquivalent: '1,456.02',
    volume: '2,528,061,55.80',
    high: '91,832.34',
    low: '28,848.40',
  },
  {
    id: '003',
    name: 'Litecoin',
    code: 'LTC',
    color: '#00aeff',
    percentage: '9',
    gain: false,
    value: '363.03',
    dollarEquivalent: '456.70',
    volume: '2,528,061,55.80',
    high: '12,349.05',
    low: '10,888.90',
  },
];

export const chartData: { x: number; y: number }[] = [
  { x: -2, y: 10 },
  { x: -1, y: Math.random() * 20 },
  { x: 0, y: 12 },
  { x: 1, y: Math.random() * 20 },
  { x: 2, y: 2 },
  { x: 3, y: Math.random() * 20 },
  { x: 4, y: 10 },
  { x: 5, y: Math.random() * 20 },
  { x: 6, y: 1 },
  { x: 7, y: Math.random() * 20 },
  { x: 8, y: 12 },
  { x: 9, y: Math.random() * 20 },
  { x: 10, y: 18 },
];

export const chartDataMal = (value: string | number) => {
  return [
    { x: -2, y: 10 },
    { x: -1, y: Math.random() * +value },
    { x: 0, y: 12 },
    { x: 1, y: Math.random() * +value },
    { x: 2, y: 2 },
    { x: 3, y: Math.random() * +value },
    { x: 4, y: 10 },
    { x: 5, y: Math.random() * +value },
    { x: 6, y: 1 },
    { x: 7, y: Math.random() * +value },
    { x: 8, y: 12 },
    { x: 9, y: Math.random() * +value },
    { x: 10, y: 18 },
  ];
};
