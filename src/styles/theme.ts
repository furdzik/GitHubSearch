import { Theme } from '@emotion/react';
import _map from 'lodash/map';

import { colors, typography } from './basic';

const baseFontFamily = _map(typography.fontFamily, (el: string) => `${el}`).join(', ').replace(', Icons', '');

export interface ThemeColors {
  [colorName: string]: string;
}
export interface ThemeTypography {
  [colorName: string]: string | number;
}
export interface ThemeLayout {
  baseFontFamily: string;
  width: number;
  padding: number;
  paddingDesktop: number;
  background?: string;
  borderColor?: string;
  boxShadow?: string;
  transition?: string;
}
export interface ITheme {
  color: ThemeColors;
  colorOthers: ThemeColors;
  colorGray: ThemeColors;
  colorMono: ThemeColors;
  colorText: ThemeColors;
  colorIcon: ThemeColors;
  fontFamily: ThemeTypography;
  fontSize: ThemeTypography;
  lineHeight: ThemeTypography;
  fontWeight: ThemeTypography;
  layout: ThemeLayout;
}

export const theme: Theme = {
  ...colors,
  ...typography,

  layout: {
    baseFontFamily,
    width: 1600,
    background: colors.colorOthers.gray,
    borderColor: '#d8d8d8',
    padding: 20,
    paddingDesktop: 30,
    transition: 'all .3s ease-in-out'
  }
};
