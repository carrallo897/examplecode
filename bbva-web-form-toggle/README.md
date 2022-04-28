# bbva-web-form-toggle

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

**Mixins:** BbvaCoreFocusVisibleMixin

## Properties

| Property   | Attribute   | Type      | Default | Description                                      |
|------------|-------------|-----------|---------|--------------------------------------------------|
| `active`   |             | `boolean` |         | Active state of switch                           |
| `checked`  | `checked`   | `boolean` | false   | If true, switch is currently checked             |
| `disabled` | `disabled`  | `boolean` |         | If true, switch is disabled                      |
| `form`     | `form`      | `string`  |         | Associated form for switch                       |
| `label`    | `label`     | `string`  |         | Accessible but not visible label for switch      |
| `name`     | `name`      | `string`  |         | Name of switch related to forms                  |
| `radio`    | `radio`     | `boolean` | false   | If true, switch will behave as a pair of radio buttons, and will always be sent in forms regardless of checked state |
| `required` | `required`  | `boolean` |         | If true, switch is required                      |
| `tagOff`   | `tag-off`   | `string`  |         | Tag to be shown inside switch for unchecked state |
| `tagOn`    | `tag-on`    | `string`  |         | Tag to be shown inside switch for checked state  |
| `value`    | `value`     | `string`  | ""      | Value for switch                                 |
| `valueOff` | `value-off` | `string`  | ""      | Value for switch when unchecked (only for radio state) |

## Methods

| Method      | Type                            | Description                                      |
|-------------|---------------------------------|--------------------------------------------------|
| `onClick`   | `(e: Event \| undefined): void` | Sets checked to true if switch is not disabled<br /><br />**e**: Original click event |
| `onKeyDown` | `(e: Event \| undefined): void` | Sets active state on element on spacebar or Enter keydown<br /><br />**e**: Original keydown event |
| `onKeyUp`   | `(e: Event \| undefined): void` | Checks switch on spacebar or Enter keyup if switch is currently being pressed<br /><br />**e**: Original keyup event |
