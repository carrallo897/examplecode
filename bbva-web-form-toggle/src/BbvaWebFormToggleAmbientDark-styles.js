/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';
const foundationsTypes = new foundations.FoundationTypography();

export default css`[ambient^=dark] {
  --bbva-web-form-toggle-label-color: var(--bbva-web-form-toggle-label-color-ambient-dark, var(--colorsPrimaryCoreLightened, ${unsafeCSS(foundations.colors.primaryCoreLightened)}));
  --bbva-web-form-toggle-label-description-color: var(--bbva-web-form-toggle-label-description-color-ambient-dark, var(--colorsPrimaryCoreLightened, ${unsafeCSS(foundations.colors.primaryCoreLightened)}));
}
${foundationsTypes.mediaRules()}`;