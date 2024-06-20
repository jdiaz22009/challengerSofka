import {WHITE} from '@/themes';
import React from 'react';
import Svg, {G, Path} from 'react-native-svg';

export const IconCashLine = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: number | string;
  height?: number | string;
}) => {
  const fill = color || WHITE;
  const widthSize = width || '1em';
  const heightSize = height || '1em';

  const svgProps = {
    width: widthSize,
    height: heightSize,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  };

  return (
    <Svg {...svgProps}>
      <G fill={fill}>
        <Path d="M6 11a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3v-6zm3-1a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H9z" />
        <Path d="M5 6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2v2H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v2h-2V7a1 1 0 0 0-1-1H5z" />
        <Path d="M14 13a1 1 0 1 0 0 2a1 1 0 0 0 0-2zm-3 1a3 3 0 1 1 6 0a3 3 0 0 1-6 0z" />
      </G>
    </Svg>
  );
};
