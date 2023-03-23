import { extendTheme, theme as base } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
const styles = {
  global: (props:any) => ({
    body: {
      bg: mode('#fff', '#2d3142')(props),
      color: colors.mainTextColor,
      fontWeight: 400,
      fontStyle: 'normal',
      fontSize: 'md',
    },
    ol: {
      padding: '0px 0px 0px 40px',
    },
    ul: {
      padding: '0px 0px 0px 40px',
    },
    img: {
      display: 'unset'
    },
  }),
};

const colors = {
  white: '#FFFFFF',
  headerColor: '#FFFFFF',
  contentColor: '#FFFFFF',
  mainTextColor: '#B6ABAE',
  textLightGray: '#6A6C7E',
  errorColor: '#FA4F6E',
  primary: {
    500: '#FF77A0',
    600: '#FF77A0',
  },
  warning: {
    500: '#FF98001A',
    600: '#FF9800',
  },
};

const fonts = {
  heading: `Noto Sans, sans-serif`,
  body: `Noto Sans, sans-serif`,
};

// @ts-ignore
// @ts-ignore
// @ts-ignore
const components = {
  Text: {
    variants: {
      ar: {
        textAlign: 'end',
      },
    },
  },
  Alert: {
    variants: {
      toast: (P: any) => {
        return {
          title: P.title,
          description: P.description,
          status: P.description,
          duration: 2000,
          isClosable: false,
        };
      },
    },
  },
  Button: {
    variants: {
      outline: (props:any) => {
        return base.components.Button.variants && ({
          ...base.components.Button.variants.outline(props),
          color: 'secondary.500',
          borderColor: 'secondary.500',
        });
      },
    },
    sizes: {
      xs: {
        h: '32px',
        fontSize: 'sm',
        px: '12px',
        py: '6px',
      },
      sm: {
        h: '40px',
        fontSize: 'md',
        px: '16px',
        py: '8px',
      },
      md: {
        h: '48px',
        fontSize: 'lg',
        px: '18px',
        py: '11px',
      },
    },
    defaultProps: {
      size: 'sm', // default is md
      variant: 'solid', // default is solid
      colorScheme: 'primary', // default is gray
    },
  },
  Tabs: {
    variants: {
      line: (props:any) => {
        return base.components.Tabs.variants && ({
          ...base.components.Tabs.variants.line(props),
          color: 'secondary.500',
          fontWeight: 'bold',
          _active: {color: 'secondary.500'},
        });
      },
    },
  },
  Container: {
    baseStyle: {
      px: ['16px', null, '24px'],
      maxW: '82rem',
    },
  },
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};
const fontSizes = {
  '2md': '2rem', //32px
  11: '2.75rem', // 44px
  '5.5xl': '3.25rem', //52px
};

const breakpoints = ['0em', '30em', '48em', '62em', '80em', '96em'];
// 0-30em (0-480px)
// 30em-48em (480px - 768px)
// 48em-62em (768px - 992px)
// 62em-80em (992px - 1280px)
// 80em-96em+ (1280px - 1536px)
// 96em+ (1536px+)

const theme = extendTheme({
  config,
  styles,
  colors,
  fonts,
  components,
  breakpoints,
  fontSizes,
});
export default theme;

// fontSizes
//     -xs: 0.75rem; 12px
//     -sm: 0.875rem; 14px
//     -md: 1rem;      16px
//     -lg: 1.125rem; 18px
//     -xl: 1.25rem; 20px
//     -2xl: 1.5rem; 24px
//     -3xl: 1.875rem; 30 px
//     -2md: '2rem' 32px
//     -4xl: 2.25rem; 36px
//     -5xl: 3rem;
//     -6xl: 3.75rem;
//     -7xl: 4.5rem;
//     -8xl: 6rem;
//     -9xl: 8rem;

//fintWeight
//     -hairline: 100;
//     -thin: 200;
//     -light: 300;
//     -normal: 400;
//     -medium: 500;
//     -semibold: 600;
//     -bold: 700;
//     -extrabold: 800;
//     -black: 900;
// lineHeights: {
//   normal: "normal",
//   none: 1,
//   shorter: 1.25,
//   short: 1.375,
//   base: 1.5,
//   tall: 1.625,
//   taller: "2",
//   "3": ".75rem",
//   "4": "1rem",
//   "5": "1.25rem",
//   "6": "1.5rem",
//   "7": "1.75rem",
//   "8": "2rem",
//   "9": "2.25rem",
//   "10": "2.5rem",

// px	1px	1px
// 0.5	0.125rem	2px
// 1	0.25rem	4px
// 1.5	0.375rem	6px
// 2	0.5rem	8px
// 2.5	0.625rem	10px
// 3	0.75rem	12px
// 3.5	0.875rem	14px
// 4	1rem	16px
// 5	1.25rem	20px
// 6	1.5rem	24px
// 7	1.75rem	28px
// 8	2rem	32px
// 9	2.25rem	36px
// 10	2.5rem	40px
// 12	3rem	48px
// 14	3.5rem	56px
// 16	4rem	64px
// 18 4.5rem 72px
// 20	5rem	80px
// 24	6rem	96px
// 28	7rem	112px
// 32	8rem	128px
// 36	9rem	144px
// 40	10rem	160px
// 44	11rem	176px
// 48	12rem	192px
// 56	14rem	224px
// 60	15rem	240px
// 64	16rem	256px
// 72	18rem	288px
// 80	20rem	320px
// 96	24rem	384px
