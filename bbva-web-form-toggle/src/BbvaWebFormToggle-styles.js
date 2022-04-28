/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`:host {
  --_label-color: var(--bbva-web-form-toggle-label-color,var(--colorsSecondary600, ${unsafeCSS(foundations.colors.secondary600)}));
  --_description-color: var(--bbva-web-form-toggle-label-description-color,var(--colorsSecondary500, ${unsafeCSS(foundations.colors.secondary500)}));
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: calc(((1 * var(--gridSpacerVariant, var(--gridSpacer, ${unsafeCSS(foundations.grid.spacer)}))) / 15) * 1em) calc(((2 * var(--gridSpacerVariant, var(--gridSpacer, ${unsafeCSS(foundations.grid.spacer)}))) / 15) * 1em);
  font-size: var(--typographyTypeSmall, ${unsafeCSS(foundations.typography.typeSmall)});
  line-height: var(--lineHeightTypeSmall, ${unsafeCSS(foundations.lineHeight.typeSmall)});
  color: var(--_label-color);
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.sr-only {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.container {
  display: flex;
  align-self: flex-start;
}

.label {
  flex: auto;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  align-self: center;
  height: 100%;
  margin-right: calc(((1 * var(--gridSpacerVariant, var(--gridSpacer, ${unsafeCSS(foundations.grid.spacer)}))) / 16) * 1rem);
}
.label .text {
  flex: auto;
  display: block;
}
.label .description {
  flex: none;
  display: block;
  color: var(--_description-color);
}

:host([variant=button]) {
  width: auto;
}
:host([variant=button]) .label {
  margin: 0;
}

:host([variant=left]) .bg {
  order: initial;
}
:host([variant=left]) .label {
  margin-left: calc(((1 * var(--gridSpacerVariant, var(--gridSpacer, ${unsafeCSS(foundations.grid.spacer)}))) / 16) * 1rem);
}

:host([variant=switch]) {
  padding: calc(((3 * var(--gridSpacerVariant, var(--gridSpacer, ${unsafeCSS(foundations.grid.spacer)}))) / 15) * 1em) calc(((2 * var(--gridSpacerVariant, var(--gridSpacer, ${unsafeCSS(foundations.grid.spacer)}))) / 15) * 1em);
}
:host([variant=switch]) .bg {
  margin: 0;
}
:host([variant=switch]) .label {
  flex-direction: row;
  align-items: baseline;
  font-weight: var(--fontFacePrimaryMediumFontWeight, ${unsafeCSS(foundations.fontFacePrimary.medium.fontWeight)});
}
:host([variant=switch]) .label .description {
  margin-left: calc(((1 * var(--gridSpacerVariant, var(--gridSpacer, ${unsafeCSS(foundations.grid.spacer)}))) / 16) * 1rem);
  font-size: var(--typographyType3XSmall, ${unsafeCSS(foundations.typography.type3XSmall)});
  line-height: var(--lineHeightType3XSmall, ${unsafeCSS(foundations.lineHeight.type3XSmall)});
  color: var(--_label-color);
}
`;