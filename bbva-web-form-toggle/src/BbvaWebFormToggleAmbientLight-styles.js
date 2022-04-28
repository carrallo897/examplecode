/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';
const foundationsTypes = new foundations.FoundationTypography();

export default css`[ambient^=light] {
  --bbva-web-form-toggle-label-color: initial;
  --bbva-web-form-toggle-label-description-color: initial;
}
${foundationsTypes.mediaRules()}`;