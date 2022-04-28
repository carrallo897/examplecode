import { html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import { mediaCSS } from '@bbva-web-components/bbva-foundations-styles';
import { BbvaWebFormToggleControl } from './BbvaWebFormToggleControl.js';
import desktopStyles from './BbvaWebFormToggleDesktop-styles.js';
import styles from './BbvaWebFormToggle-styles.js';

export { bbvaWebFormToggleAmbient } from './BbvaWebFormToggleAmbient.js';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

Toggles will toggle the state of a page or object. Toggles will act the same as radio buttons in that only one option can be selected.

Example:

```html
<bbva-web-form-toggle description="Description" value="2">Option Label</bbva-web-form-toggle>

<bbva-web-form-toggle label="accessibility label" value="1" variant="button"></bbva-web-form-toggle>

<bbva-web-form-toggle value="2" description="Description" variant="left">Option Label</bbva-web-form-toggle>

<bbva-web-form-toggle description="Label" variant="switch">Main Label</bbva-web-form-toggle>
```

## Exports
- BbvaWebFormToggle
- bbvaWebFormToggleAmbient

## Styling

The following custom properties are available for styling:

### Custom properties

| Selector                                    | CSS Property         | CSS Variable                                   | Theme Variable                    | Foundations/Fallback                                        |
| ------------------------------------------- | -------------------- | ---------------------------------------------- | --------------------------------- | ----------------------------------------------------------- |
| :host([variant=switch]) .label .description | margin-left          | --gridSpacerVariant                            | --gridSpacer                      | foundations.grid.spacer                       |
| :host([variant=switch]) .label .description | font-size            |                                                | --typographyType3XSmall           | foundations.typography.type3XSmall            |
| :host([variant=switch]) .label .description | line-height          |                                                | --lineHeightType3XSmall           | foundations.lineHeight.type3XSmall            |
| :host([variant=switch]) .label .description | color                | --_label-color                                 |                                   |                                                             |
| :host([variant=switch]) .label              | font-weight          |                                                | --fontFacePrimaryMediumFontWeight | foundations.fontFacePrimary.medium.fontWeight |
| :host([variant=switch])                     | padding              | --gridSpacerVariant                            | --gridSpacer                      | foundations.grid.spacer                       |
| :host([variant=left]) .label                | margin-left          | --gridSpacerVariant                            | --gridSpacer                      | foundations.grid.spacer                       |
| .label .description                         | color                | --_description-color                           |                                   |                                                             |
| .label                                      | margin-right         | --gridSpacerVariant                            | --gridSpacer                      | foundations.grid.spacer                       |
| :host                                       | --_label-color       | --bbva-web-form-toggle-label-color             | --colorsSecondary600              | foundations.colors.secondary600               |
| :host                                       | --_description-color | --bbva-web-form-toggle-label-description-color | --colorsSecondary500              | foundations.colors.secondary500               |
| :host                                       | padding              | --gridSpacerVariant                            | --gridSpacer                      | foundations.grid.spacer                       |
| :host                                       | font-size            |                                                | --typographyTypeSmall             | foundations.typography.typeSmall              |
| :host                                       | line-height          |                                                | --lineHeightTypeSmall             | foundations.lineHeight.typeSmall              |
| :host                                       | color                | --_label-color                                 |                                   |                                                             |
### Custom properties

| Selector                               | CSS Property              | CSS Variable                                            | Theme Variable                    | Foundations/Fallback                                        |
| -------------------------------------- | ------------------------- | ------------------------------------------------------- | --------------------------------- | ----------------------------------------------------------- |
| :host([checked]) .knob-tag             | color                     | --_knob-tag-unchecked                                   |                                   |                                                             |
| .knob-tag ~ .knob-tag                  | color                     | --_knob-tag-unchecked                                   |                                   |                                                             |
| .knob-tag                              | color                     | --_knob-tag-checked                                     |                                   |                                                             |
| :host([checked]) .knob-tag ~ .knob-tag | color                     | --_knob-tag-checked                                     |                                   |                                                             |
| .knob-tag                              | font-size                 |                                                         | --typographyType2XSmall           | foundations.typography.type2XSmall            |
| .knob-tag                              | line-height               |                                                         | --lineHeightType2XSmall           | foundations.lineHeight.type2XSmall            |
| .knob-tag                              | font-weight               |                                                         | --fontFacePrimaryMediumFontWeight | foundations.fontFacePrimary.medium.fontWeight |
| :host([checked]) .knob-tie             | background-color          | --_knob-tie-checked-color                               |                                   |                                                             |
| :host([radio]) .knob-tie               | background-color          | --_knob-tie-checked-color                               |                                   |                                                             |
| .knob-tie                              | background-color          | --_knob-tie-color                                       |                                   |                                                             |
| :host([checked]) .bg                   | background-color          | --_control-checked-color                                |                                   |                                                             |
| :host([radio]) .bg                     | background-color          | --_control-checked-color                                |                                   |                                                             |
| .bg                                    | margin                    | --gridSpacerVariant                                     | --gridSpacer                      | foundations.grid.spacer                       |
| .bg                                    | background-color          | --_control-color                                        |                                   |                                                             |
| :host                                  | --_control-color          | --bbva-web-form-toggle-control-color                    | --colorsSecondary500              | foundations.colors.secondary500               |
| :host                                  | --_control-checked-color  | --bbva-web-form-toggle-control-checked-color            | --colorsPrimaryMedium             | foundations.colors.primaryMedium              |
| :host                                  | --_knob-tie-color         | --bbva-web-form-toggle-control-knob-tie-color           | --colorsPrimaryCoreLightened      | foundations.colors.primaryCoreLightened       |
| :host                                  | --_knob-tie-checked-color | --bbva-web-form-toggle-control-knob-tie-checked-color   | --colorsPrimaryCoreLightened      | foundations.colors.primaryCoreLightened       |
| :host                                  | --_knob-tag-checked       | --bbva-web-form-toggle-control-knob-tag-checked-color   | --colorsPrimaryMedium             | foundations.colors.primaryMedium              |
| :host                                  | --_knob-tag-unchecked     | --bbva-web-form-toggle-control-knob-tag-unchecked-color | --colorsPrimaryCoreLightened      | foundations.colors.primaryCoreLightened       |
| :host                                  | padding                   | --gridSpacerVariant                                     | --gridSpacer                      | foundations.grid.spacer                       |
### Custom properties



## Ambient

### Custom properties

| Selector        | CSS Property                                   | CSS Variable                                                | Theme Variable               | Foundations/Fallback                                  |
| --------------- | ---------------------------------------------- | ----------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| [ambient^=dark] | --bbva-web-form-toggle-label-color             | --bbva-web-form-toggle-label-color-ambient-dark             | --colorsPrimaryCoreLightened | foundations.colors.primaryCoreLightened |
| [ambient^=dark] | --bbva-web-form-toggle-label-description-color | --bbva-web-form-toggle-label-description-color-ambient-dark | --colorsPrimaryCoreLightened | foundations.colors.primaryCoreLightened |

### Custom properties



### Custom properties

| Selector        | CSS Property                                            | CSS Variable | Theme Variable               | Foundations/Fallback                                  |
| --------------- | ------------------------------------------------------- | ------------ | ---------------------------- | ----------------------------------------------------- |
| [ambient^=dark] | --bbva-web-form-toggle-control-color                    |              | --colorsPrimaryCoreLightened | foundations.colors.primaryCoreLightened |
| [ambient^=dark] | --bbva-web-form-toggle-control-checked-color            |              | --colorsPrimaryCoreLightened | foundations.colors.primaryCoreLightened |
| [ambient^=dark] | --bbva-web-form-toggle-control-knob-tie-color           |              | --colorsSecondary500         | foundations.colors.secondary500         |
| [ambient^=dark] | --bbva-web-form-toggle-control-knob-tie-checked-color   |              | --colorsPrimaryMedium        | foundations.colors.primaryMedium        |
| [ambient^=dark] | --bbva-web-form-toggle-control-knob-tag-checked-color   |              | --colorsPrimaryCoreLightened | foundations.colors.primaryCoreLightened |
| [ambient^=dark] | --bbva-web-form-toggle-control-knob-tag-unchecked-color |              | --colorsSecondary500         | foundations.colors.secondary500         |

### Custom properties


> Styling documentation generated by Cells CLI

@customElement bbva-web-form-toggle
*/
export class BbvaWebFormToggle extends BbvaWebFormToggleControl {
  static get is() {
    return 'bbva-web-form-toggle';
  }

  static get properties() {
    return {
      /**
       * Description text
       */
      description: {
        type: String,
      },
      /**
       * Form toggle variant. Can be:
       * - button, only the toggle control is displayed. For accessibility you should add the label property.
       * - left, shows the toggle control to the left of text and description.
       * - switch, shows the label text and description inline and with other font-size and font-weight.
       */
      variant: {
        type: String,
        reflect: true,
      },
    };
  }

  static get styles() {
    return [
      super.styles,
      styles,
      mediaCSS('sm', desktopStyles),
      getComponentSharedStyles('bbva-form-toggle-shared-styles'),
    ];
  }

  /**
   * HTML to be used as label for the switch
   * @return {TemplateResult} HTML of label
   */
  get _labelTemplate() {
    return html`
      <span class="label">
        <span class="sr-only" aria-live="assertive"> ${this.label} ${this._labelState} </span>

        <span class="text"><slot></slot></span>

        <span class="description" ?hidden="${!this.description}">${this.description}</span>
      </span>
    `;
  }
}
