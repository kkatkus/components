import { darken, getContrast, lighten } from 'polished';

export interface PalleteItem {
  main: string;
  dark: string;
  light: string;
}
export interface Pallete {
  primary: PalleteItem;
  secondary: PalleteItem;
  error: PalleteItem;
  warning: PalleteItem;
  info: PalleteItem;
  success: PalleteItem;
}

export function mostReadable(p: string) {
  const w = getContrast(p, '#ffffff');
  const b = getContrast(p, '#000000');
  return w > b ? '#ffffff' : '#000000';
}

export function getPallete(p: PalleteItem | string) {
  if (typeof p === 'string') {
    return {
      main: p,
      dark: darken(0.1, p),
      light: lighten(0.1, p),
    };
  }
  return {
    main: p.main,
    dark: p.dark || darken(0.1, p.main),
    light: p.light || lighten(0.1, p.main),
  };
}
