/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';
const foundationsTypes = new foundations.FoundationTypography();

export default css`:host {
  --_control-color: var(--bbva-web-form-toggle-control-color,var(--colorsSecondary500, ${unsafeCSS(foundations.colors.secondary500)}));
  --_control-checked-color: var(--bbva-web-form-toggle-control-checked-color,var(--colorsPrimaryMedium, ${unsafeCSS(foundations.colors.primaryMedium)}));
  --_knob-tie-color: var(--bbva-web-form-toggle-control-knob-tie-color,var(--colorsPrimaryCoreLightened, ${unsafeCSS(foundations.colors.primaryCoreLightened)}));
  --_knob-tie-checked-color: var(--bbva-web-form-toggle-control-knob-tie-checked-color,var(--colorsPrimaryCoreLightened, ${unsafeCSS(foundations.colors.primaryCoreLightened)}));
  --_knob-tag-checked: var(--bbva-web-form-toggle-control-knob-tag-checked-color,var(--colorsPrimaryMedium, ${unsafeCSS(foundations.colors.primaryMedium)}));
  --_knob-tag-unchecked: var(--bbva-web-form-toggle-control-knob-tag-unchecked-color,var(--colorsPrimaryCoreLightened, ${unsafeCSS(foundations.colors.primaryCoreLightened)}));
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  padding: calc(((0.125 * var(--gridSpacerVariant, var(--gridSpacer, ${unsafeCSS(foundations.grid.spacer)}))) / 16) * 1em);
  cursor: pointer;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *:before, *:after {
  box-sizing: inherit;
}

.bg {
  flex: none;
  order: 2;
  position: relative;
  overflow: hidden;
  height: 1.5rem;
  width: 2.5rem;
  margin: calc(((1.5 * var(--gridSpacerVariant, var(--gridSpacer, ${unsafeCSS(foundations.grid.spacer)}))) / 16) * 1rem) 0;
  background-color: var(--_control-color);
  border-radius: 0.8125rem;
}
:host([radio]) .bg {
  background-color: var(--_control-checked-color);
}
:host([checked]) .bg {
  background-color: var(--_control-checked-color);
}

.knob {
  position: absolute;
  top: 0.0625rem;
  left: 0.0625rem;
  right: 0.0625rem;
  bottom: 0.0625rem;
  transition: transform 0.2s;
}
:host([checked]) .knob {
  transform: translateX(calc(100% - 1.375rem));
}
.knob-tie {
  display: block;
  height: 100%;
  width: 1.375rem;
  border-radius: 0.8125rem;
  background-color: var(--_knob-tie-color);
}
:host([radio]) .knob-tie {
  background-color: var(--_knob-tie-checked-color);
}
:host([checked]) .knob-tie {
  background-color: var(--_knob-tie-checked-color);
}
.knob-tag {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-top: 1px;
  width: 50%;
  font-size: var(--typographyType2XSmall, ${unsafeCSS(foundations.typography.type2XSmall)});
  line-height: var(--lineHeightType2XSmall, ${unsafeCSS(foundations.lineHeight.type2XSmall)});
  font-weight: var(--fontFacePrimaryMediumFontWeight, ${unsafeCSS(foundations.fontFacePrimary.medium.fontWeight)});
}
.knob-tag, :host([checked]) .knob-tag ~ .knob-tag {
  color: var(--_knob-tag-checked);
}
:host([checked]) .knob-tag, .knob-tag ~ .knob-tag {
  color: var(--_knob-tag-unchecked);
}

.slot-control ::slotted(*) {
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  opacity: 0;
  z-index: -1;
  pointer-events: none;
}

:host([aria-disabled=true]) {
  opacity: 0.4;
  cursor: default;
  pointer-events: none;
}
${foundationsTypes.mediaRules()}`;