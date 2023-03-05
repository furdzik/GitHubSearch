import '@emotion/react';

import { ITheme, ThemeColors } from 'styles/theme';

declare module '@emotion/react' {
  export interface Theme extends ITheme {
    colorMono: ThemeColors;
  }
}
