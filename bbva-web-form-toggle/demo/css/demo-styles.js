import { setDocumentCustomStyles, } from '@bbva-web-components/bbva-core-lit-helpers';
import { css, } from 'lit-element';

setDocumentCustomStyles(css`
  #iframeBody {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`);
