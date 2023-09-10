import { globalStyle, style } from '@vanilla-extract/css';

// 반응형 레이아웃 적용
const responsiveStyle = ({ tablet, desktop }) => ({
  '@media': {
    'screen and (min-width: 768px)': tablet,
    'screen and (min-width: 1024px)': desktop,
  },
});

export const container = style([
  {
    height: '100vh',
  },
  responsiveStyle({
    tablet: {
      margin: 'auto 0',
    },
    desktop: {
      margin: 'auto 0',
    },
  }),
]);

export const modalBackground = style({
  position: 'fixed',
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  width: ' 100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 2,
});

export const modalBlock = style({
  backgroundColor: 'white',
  borderRadius: 5,
  padding: 10,
  boxSizing: 'border-box',
});

export const button = style({
  background: 'white',
  border: '2px solid green',
  fontSize: '1rem',
  fontWeight: '600',
  color: 'green',
  borderRadius: '3px',
  padding: '5px 15px',
  ':hover': {
    background: 'green',
    color: 'white',
  },
  ':active': {
    background: 'blue',
  },
});

globalStyle('body', {
  margin: 0,
});
