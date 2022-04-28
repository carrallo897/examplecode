import { css } from 'lit-element';
import { bbvaWebFormToggleControlAmbient as control } from './BbvaWebFormToggleControlAmbient.js';
import light from './BbvaWebFormToggleAmbientLight-styles.js';
import dark from './BbvaWebFormToggleAmbientDark-styles.js';

export const bbvaWebFormToggleAmbient = {
  light: css`
    ${control.light} ${light}
  `,
  dark: css`
    ${control.dark} ${dark}
  `,
};
