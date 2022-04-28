import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import { BbvaCoreSwitch } from '@bbva-web-components/bbva-core-switch';
import { bbvaFoundationsStylesFocus } from '@bbva-web-components/bbva-foundations-styles';
import styles from './BbvaWebFormToggleControl-styles.js';

export { bbvaWebFormToggleControlAmbient } from './BbvaWebFormToggleControlAmbient.js';

/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

`BbvaWebFormToggleControl` is a base class extending from `@bbva-web-components/bbva-core-switch` which provides a basic toggle control with BBVA Experience styling. It's meant to be extended and should not be used 'as is'. So, it does not define a `<bbva-web-form-toggle-control>` custom element. Check 'BbvaWebFormToggle' for a ready-to-use BBVA Experience Web Studio toggle control.

## Exports
- BbvaWebFormToggleControl
- bbvaWebFormToggleControlAmbient

## Styling

The following custom properties are available for styling:

### Custom properties

| Selector                               | CSS Property              | CSS Variable                                    | Theme Variable                    | Foundations/Fallback                                        |
| -------------------------------------- | ------------------------- | ----------------------------------------------- | --------------------------------- | ----------------------------------------------------------- |
| :host([checked]) .knob-tag             | color                     | --_knob-tag-unchecked                           |                                   |                                                             |
| .knob-tag ~ .knob-tag                  | color                     | --_knob-tag-unchecked                           |                                   |                                                             |
| .knob-tag                              | color                     | --_knob-tag-checked                             |                                   |                                                             |
| :host([checked]) .knob-tag ~ .knob-tag | color                     | --_knob-tag-checked                             |                                   |                                                             |
| .knob-tag                              | font-size                 |                                                 | --typographyType2XSmall           | foundations.typography.type2XSmall            |
| .knob-tag                              | line-height               |                                                 | --lineHeightType2XSmall           | foundations.lineHeight.type2XSmall            |
| .knob-tag                              | font-weight               |                                                 | --fontFacePrimaryMediumFontWeight | foundations.fontFacePrimary.medium.fontWeight |
| :host([checked]) .knob-tie             | background-color          | --_knob-tie-checked-color                       |                                   |                                                             |
| :host([radio]) .knob-tie               | background-color          | --_knob-tie-checked-color                       |                                   |                                                             |
| .knob-tie                              | background-color          | --_knob-tie-color                               |                                   |                                                             |
| :host([checked]) .bg                   | background-color          | --_control-checked-color                        |                                   |                                                             |
| :host([radio]) .bg                     | background-color          | --_control-checked-color                        |                                   |                                                             |
| .bg                                    | margin                    | --gridSpacerVariant                             | --gridSpacer                      | foundations.grid.spacer                       |
| .bg                                    | background-color          | --_control-color                                |                                   |                                                             |
| :host                                  | --_control-color          | --bbva-web-form-toggle-control-color            | --colorsSecondary500              | foundations.colors.secondary500               |
| :host                                  | --_control-checked-color  | --bbva-web-form-toggle-control-checked-color    | --colorsPrimaryMedium             | foundations.colors.primaryMedium              |
| :host                                  | --_knob-tie-color         | --bbva-web-form-toggle-knob-tie-color           | --colorsPrimaryCoreLightened      | foundations.colors.primaryCoreLightened       |
| :host                                  | --_knob-tie-checked-color | --bbva-web-form-toggle-knob-tie-checked-color   | --colorsPrimaryCoreLightened      | foundations.colors.primaryCoreLightened       |
| :host                                  | --_knob-tag-checked       | --bbva-web-form-toggle-knob-tag-checked-color   | --colorsPrimaryMedium             | foundations.colors.primaryMedium              |
| :host                                  | --_knob-tag-unchecked     | --bbva-web-form-toggle-knob-tag-unchecked-color | --colorsPrimaryCoreLightened      | foundations.colors.primaryCoreLightened       |

## Ambient

### Custom properties

| Selector        | CSS Property                                    | CSS Variable | Theme Variable               | Foundations/Fallback                                  |
| --------------- | ----------------------------------------------- | ------------ | ---------------------------- | ----------------------------------------------------- |
| [ambient^=dark] | --bbva-web-form-toggle-control-color            |              | --colorsPrimaryCoreLightened | foundations.colors.primaryCoreLightened |
| [ambient^=dark] | --bbva-web-form-toggle-control-checked-color    |              | --colorsPrimaryCoreLightened | foundations.colors.primaryCoreLightened |
| [ambient^=dark] | --bbva-web-form-toggle-control-knob-tie-color           |              | --colorsSecondary500         | foundations.colors.secondary500         |
| [ambient^=dark] | --bbva-web-form-toggle-control-knob-tie-checked-color   |              | --colorsPrimaryMedium        | foundations.colors.primaryMedium        |
| [ambient^=dark] | --bbva-web-form-toggle-control-knob-tag-checked-color   |              | --colorsPrimaryCoreLightened | foundations.colors.primaryCoreLightened |
| [ambient^=dark] | --bbva-web-form-toggle-control-knob-tag-unchecked-color |              | --colorsSecondary500         | foundations.colors.secondary500         |


> Styling documentation generated by Cells CLI

@customElement bbva-web-form-toggle-control
*/
export class BbvaWebFormToggleControl extends BbvaCoreSwitch {
  static get styles() {
    return [
      bbvaFoundationsStylesFocus(),
      styles,
      getComponentSharedStyles('bbva-web-form-toggle-control-shared-styles'),
    ];
  }
}
