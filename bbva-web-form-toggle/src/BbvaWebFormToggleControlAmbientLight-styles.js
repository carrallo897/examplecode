/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';
const foundationsTypes = new foundations.FoundationTypography();

export default css`[ambient^=light] {
  --bbva-web-form-toggle-control-color: initial;
  --bbva-web-form-toggle-control-checked-color: initial;
  --bbva-web-form-toggle-control-knob-tie-color: initial;
  --bbva-web-form-toggle-control-knob-tie-checked-color: initial;
  --bbva-web-form-toggle-control-knob-tag-checked-color: initial;
  --bbva-web-form-toggle-control-knob-tag-unchecked-color: initial;
}
${foundationsTypes.mediaRules()}`;