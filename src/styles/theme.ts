import { DefaultTheme } from 'styled-components/dist/types';

const colors = {
  main1: '#3253FF',
  main2: '#4E69FF',
  main3: '#667EFF',
  main4: '#8295FF',
  main5: '#B0BDFF',
  main6: '#D3DBFF',

  sub1: '#D1FF38',

  white: '#FFFFFF',
  grey1: '#EEEEEE',
  grey2: '#D8D8D8',
  grey3: '#BEBEBE',
  grey4: '#A4A4A4',
  grey5: '#787878',
  grey6: '#555555',
  grey7: '#3F3F3F',
  grey8: '#2E2E2E',
  grey9: '#252525',
  grey10: '#141414',
  black: '#000000',
  black60: '#00000099',

  red: '#F45D56',
  yellow: '#FFE14D',
  green: '#2DDD93',

  level5: 'rgba(50, 83, 255)',
  level4: 'rgba(50, 83, 255, 0.8)',
  level3: 'rgba(50, 83, 255, 0.5)',
  level2: 'rgba(50, 83, 255, 0.3)',
  level1: 'rgba(50, 83, 255, 0.1)',

  dim_gradient: 'linear-gradient(1deg, #141414 56.25%, rgba(20, 20, 20, 0) 95.89%)',
};

export type ColorsTypes = typeof colors;

interface Font {
  family: string;
  weight: number;
  size: number;
  lineHeight: number;
}

const FONT = ({ family, weight, size, lineHeight }: Font): string => {
  return `
    font-family: ${family};
    font-weight : ${weight};
    font-size : ${size}rem;
    line-height : ${lineHeight}rem;
    `;
};

const fonts = {
  head1: FONT({ family: 'Pretendard Variable', weight: 600, size: 2.8, lineHeight: 3.4 }),
  head2: FONT({ family: 'Pretendard Variable', weight: 600, size: 2.2, lineHeight: 3 }),

  title1: FONT({ family: 'Pretendard Variable', weight: 600, size: 1.8, lineHeight: 2.4 }),
  title2: FONT({ family: 'Pretendard Variable', weight: 500, size: 1.6, lineHeight: 2 }),

  body1: FONT({ family: 'Pretendard Variable', weight: 500, size: 1.6, lineHeight: 2.4 }),
  body2: FONT({ family: 'Pretendard Variable', weight: 500, size: 1.4, lineHeight: 2 }),
  body3: FONT({ family: 'Pretendard Variable', weight: 400, size: 1.4, lineHeight: 2 }),
  body4: FONT({ family: 'Pretendard Variable', weight: 500, size: 1.2, lineHeight: 1.6 }),

  button1: FONT({ family: 'Pretendard Variable', weight: 500, size: 1.6, lineHeight: 2 }),
  button2: FONT({ family: 'Pretendard Variable', weight: 400, size: 1.6, lineHeight: 2 }),
};

export type FontsTypes = typeof fonts;

export const theme: DefaultTheme = {
  colors,
  fonts,
};
