/* eslint-disable no-unused-vars */
import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';
const foundationsTypes = new foundations.FoundationTypography();

export default css`:host {
  padding: 0;
}
${foundationsTypes.mediaRules()}`;