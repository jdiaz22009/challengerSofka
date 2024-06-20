import {WHITE} from '@/themes';
import React from 'react';
import Svg, {Path} from 'react-native-svg';

export const IconArrow = ({
  color,
  width,
  height,
}: {
  color?: string;
  width?: number | string;
  height?: number | string;
}) => {
  const fill = color || WHITE;
  const widthSize = width || '128';
  const heightSize = height || '128';

  const svgProps = {
    width: widthSize,
    height: heightSize,
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  };

  return (
    <Svg {...svgProps}>
      <Path
        fill={fill}
        d="M15.187 12L7.47 4.285q-.221-.221-.218-.532q.003-.31.224-.532Q7.698 3 8.009 3q.31 0 .532.221l7.636 7.643q.242.242.354.54t.111.596t-.111.596t-.354.54L8.535 20.78q-.222.221-.53.218q-.307-.003-.528-.224t-.221-.532t.221-.531z"
      />
    </Svg>
  );
};
