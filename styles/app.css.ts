import { globalStyle, style } from '@vanilla-extract/css';

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

globalStyle('body', {
  margin: 0,
});
