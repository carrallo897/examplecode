/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';
const foundationsTypes = new foundations.FoundationTypography();

export default css`[ambient^=dark] {
  --bbva-web-form-toggle-control-color: var(--colorsPrimaryCoreLightened, ${unsafeCSS(foundations.colors.primaryCoreLightened)});
  --bbva-web-form-toggle-control-checked-color: var(--colorsPrimaryCoreLightened, ${unsafeCSS(foundations.colors.primaryCoreLightened)});
  --bbva-web-form-toggle-control-knob-tie-color: var(--colorsSecondary500, ${unsafeCSS(foundations.colors.secondary500)});
  --bbva-web-form-toggle-control-knob-tie-checked-color: var(--colorsPrimaryMedium, ${unsafeCSS(foundations.colors.primaryMedium)});
  --bbva-web-form-toggle-control-knob-tag-checked-color: var(--colorsPrimaryCoreLightened, ${unsafeCSS(foundations.colors.primaryCoreLightened)});
  --bbva-web-form-toggle-control-knob-tag-unchecked-color: var(--colorsSecondary500, ${unsafeCSS(foundations.colors.secondary500)});
}
${foundationsTypes.mediaRules()}`;