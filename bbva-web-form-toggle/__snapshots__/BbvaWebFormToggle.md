# `BbvaWebFormToggle`

#### `SHADOW DOM - Structure test`

```html
<div class="container">
  <span
    aria-hidden="true"
    class="bg"
  >
    <span class="knob">
      <span class="knob-tie">
      </span>
    </span>
  </span>
  <span class="label">
    <span
      aria-live="assertive"
      class="sr-only"
    >
    </span>
    <span class="text">
      <slot>
      </slot>
    </span>
    <span class="description">
      Description
    </span>
  </span>
</div>
<span class="slot-control">
  <slot>
  </slot>
</span>

```

#### `LIGHT DOM - Structure test`

```html
Option Label
<div
  class="controls"
  slot="_control"
>
  <input
    aria-hidden="true"
    tabindex="-1"
    type="checkbox"
    value="1"
  >
</div>

```

## `Variant button`

####   `SHADOW DOM - Structure test`

```html
<div class="container">
  <span
    aria-hidden="true"
    class="bg"
  >
    <span class="knob">
      <span class="knob-tie">
      </span>
    </span>
  </span>
  <span class="label">
    <span
      aria-live="assertive"
      class="sr-only"
    >
      accessibility label
    </span>
    <span class="text">
      <slot>
      </slot>
    </span>
    <span
      class="description"
      hidden=""
    >
    </span>
  </span>
</div>
<span class="slot-control">
  <slot>
  </slot>
</span>

```

####   `LIGHT DOM - Structure test`

```html
<div
  class="controls"
  slot="_control"
>
  <input
    aria-hidden="true"
    tabindex="-1"
    type="checkbox"
    value="1"
  >
</div>

```

## `Variant left`

####   `SHADOW DOM - Structure test`

```html
<div class="container">
  <span
    aria-hidden="true"
    class="bg"
  >
    <span class="knob">
      <span class="knob-tie">
      </span>
    </span>
  </span>
  <span class="label">
    <span
      aria-live="assertive"
      class="sr-only"
    >
    </span>
    <span class="text">
      <slot>
      </slot>
    </span>
    <span class="description">
      Description
    </span>
  </span>
</div>
<span class="slot-control">
  <slot>
  </slot>
</span>

```

####   `LIGHT DOM - Structure test`

```html
Option Label
<div
  class="controls"
  slot="_control"
>
  <input
    aria-hidden="true"
    tabindex="-1"
    type="checkbox"
    value="1"
  >
</div>

```

## `Variant switch`

####   `SHADOW DOM - Structure test`

```html
<div class="container">
  <span
    aria-hidden="true"
    class="bg"
  >
    <span class="knob">
      <span class="knob-tie">
      </span>
    </span>
  </span>
  <span class="label">
    <span
      aria-live="assertive"
      class="sr-only"
    >
    </span>
    <span class="text">
      <slot>
      </slot>
    </span>
    <span class="description">
      Label
    </span>
  </span>
</div>
<span class="slot-control">
  <slot>
  </slot>
</span>

```

####   `LIGHT DOM - Structure test`

```html
Main Label
<div
  class="controls"
  slot="_control"
>
  <input
    aria-hidden="true"
    tabindex="-1"
    type="checkbox"
    value="1"
  >
</div>

```

