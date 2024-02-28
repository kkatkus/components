import deepmerge from 'deepmerge';
import { Pallete, PalleteItem, getPallete } from './pallete';

export const sizes = ['xs', 'sm', 'md', 'lg'] as const;
export type Size = (typeof sizes)[number];

export type Color = 'primary' | 'secondary';

export interface Typography {
  fontFamily: string;
  fontSize: string;
  fontWeight: string;
  lineHeight: string;
}

export interface Interactive {
  padding: Record<Size, [string, string]>; // topbottom, leftright
  icon: Record<Size, [string, string]>; //height, margin from border
  border: {
    radius: Record<Size, string>;
    width: Record<Size, string>;
  };
}

export interface Theme {
  breakpoints: Record<Size, number>;
  typography: {
    paragraphs: Record<Size, Typography>;
    labels: Record<Size, Typography>;
    headings: Record<Size, Typography>;
  };
  pallete: Pallete;
  interactive: Interactive;
}

export const theme: Theme = {
  breakpoints: {
    xs: 480,
    sm: 544,
    md: 768,
    lg: 1012,
  },
  typography: {
    paragraphs: {
      xs: {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '0.75rem',
        fontWeight: '400',
        lineHeight: '1.25rem',
      },
      sm: {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '0.875rem',
        fontWeight: '400',
        lineHeight: '1.25rem',
      },
      md: {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1.5rem',
      },
      lg: {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '1rem',
        fontWeight: '400',
        lineHeight: '1.75rem',
      },
    },
    labels: {
      xs: {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '0.75rem',
        fontWeight: '500',
        lineHeight: '1rem',
      },
      sm: {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '0.875rem',
        fontWeight: '500',
        lineHeight: '1rem',
      },
      md: {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '1rem',
        fontWeight: '500',
        lineHeight: '1.25rem',
      },
      lg: {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '1.125rem',
        fontWeight: '500',
        lineHeight: '1.5rem',
      },
    },
    headings: {
      xs: {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '1,25rem',
        fontWeight: '700',
        lineHeight: '1.75rem',
      },
      sm: {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '1.5rem',
        fontWeight: '500',
        lineHeight: '2rem',
      },
      md: {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '1.75rem',
        fontWeight: '500',
        lineHeight: '2.25rem',
      },
      lg: {
        fontFamily: `'Roboto', sans-serif`,
        fontSize: '2rem',
        fontWeight: '500',
        lineHeight: '2.5rem',
      },
    },
  },
  pallete: {
    primary: getPallete('#171717'),
    secondary: getPallete('#701a75'),
    error: getPallete('#cc0000'),
    warning: getPallete('#ff8800'),
    info: getPallete('#0099cc'),
    success: getPallete('#007e33'),
  },
  interactive: {
    padding: {
      xs: ['8px', '12px'], //32px
      sm: ['12px', '16px'], //40
      md: ['14px', '16px'], //48
      lg: ['16px', '24px'], //56
    },
    icon: {
      xs: ['24px', '8px'],
      sm: ['32px', '12px'],
      md: ['38px', '16px'],
      lg: ['48px', '22px'],
    },
    border: {
      radius: {
        xs: '3px',
        sm: '4px',
        md: '6px',
        lg: '8px',
      },
      width: {
        xs: '2px',
        sm: '2px',
        md: '2px',
        lg: '2px',
      },
    },
  },
};

export function createTheme(t: Partial<Theme> = {}) {
  const merged = deepmerge(theme, t);
  merged.pallete = {
    ...Object.keys(merged.pallete).reduce((arr, k) => {
      arr[k as keyof Pallete] = getPallete(merged.pallete[k as keyof Pallete] as PalleteItem);
      return arr;
    }, {} as Pallete),
  };
  return merged;
}
