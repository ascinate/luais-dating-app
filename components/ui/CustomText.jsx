import React from 'react';
import { Text } from 'react-native';

const fontMap = {
  thin: 'Inter-Thin',
  thinItalic: 'Inter-ThinItalic',

  extraLight: 'Inter-ExtraLight',
  extraLightItalic: 'Inter-ExtraLightItalic',

  light: 'Inter-Light',
  lightItalic: 'Inter-LightItalic',

  regular: 'Inter-Regular',
  italic: 'Inter-Italic',

  medium: 'Inter-Medium',
  mediumItalic: 'Inter-MediumItalic',

  semiBold: 'Inter-SemiBold',
  semiBoldItalic: 'Inter-SemiBoldItalic',

  bold: 'Inter-Bold',
  boldItalic: 'Inter-BoldItalic',

  extraBold: 'Inter-ExtraBold',
  extraBoldItalic: 'Inter-ExtraBoldItalic',

  black: 'Inter-Black',
  blackItalic: 'Inter-BlackItalic',
};

export default function CustomText({
  children,
  weight = 'regular',
  style,
  ...props
}) {
  return (
    <Text {...props} style={[{ fontFamily: fontMap[weight] }, style]}>
      {children}
    </Text>
  );
}