const color = {
  primary: '#2d5d6e',
  primaryHover: '#1f3f4a',
  primaryFocus: '#285160',

  secondary: '#d7b9d5',
  secondaryHover: '#bba1ba',
  secondaryFocus: '#ceb1cc',

  tertiary: '#5c9ead',
  tertiaryHover: '#568d9a',
  tertiaryFocus: '#5897a5',

  quaternary: '#c64cbd',
  quaternaryHover: '#983a92',
  quaternaryFocus: '#ba47b2',
};

const colorOthers = {
  error: color.quaternary,
  success: color.primary,
  info: '#ada7c9',
  gray: '#eeeeee'
}

const colorMono = {
  white: '#ffffff',
  black: '#000000'
};

const colorGray = {
  black88: 'rgba(0, 0, 0, .88)',
  black56: 'rgba(0, 0, 0, .56)',
  black42: 'rgba(0, 0, 0, .42)',
  black24: 'rgba(0, 0, 0, .24)',
  black12: 'rgba(0, 0, 0, .12)',
  black06: 'rgba(0, 0, 0, .06)',
  black03: 'rgba(0, 0, 0, .03)',

  white88: 'rgba(255, 255, 255, .88)',
  white56: 'rgba(255, 255, 255, .56)',
  white42: 'rgba(255, 255, 255, .42)',
  white24: 'rgba(255, 255, 255, .24)',
  white12: 'rgba(255, 255, 255, .12)',
  white06: 'rgba(255, 255, 255, .06)'
};

const colorText = {
  primary: colorMono.black,
  secondary: '#484747'
};

const colorIcon = {
  primary: '#a2a1a1',
  secondary: colorGray.black56
};

export const colors = {
  color,
  colorGray,
  colorOthers,
  colorMono,
  colorText,
  colorIcon
};

