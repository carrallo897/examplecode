/* eslint-disable import/no-extraneous-dependencies */

import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../bbva-web-form-toggle.js';

suite('BbvaWebFormToggle', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(
      html`<bbva-web-form-toggle description="Description" value="1"
        >Option Label</bbva-web-form-toggle
      >`,
    );
    await el.updateComplete;
  });

  test('a11y', () => assert.isAccessible(el));

  test('SHADOW DOM - Structure test', () => {
    assert.shadowDom.equalSnapshot(el, { ignoreAttributes: ['id', 'name'] });
  });

  test('LIGHT DOM - Structure test', () => {
    assert.lightDom.equalSnapshot(el, { ignoreAttributes: ['id', 'name'] });
  });

  suite('Variant button', () => {
    setup(async () => {
      el = await fixture(
        html`<bbva-web-form-toggle
          label="accessibility label"
          variant="button"
          value="1"
        ></bbva-web-form-toggle>`,
      );
      await el.updateComplete;
    });

    test('a11y', () => assert.isAccessible(el));

    test('SHADOW DOM - Structure test', () => {
      assert.shadowDom.equalSnapshot(el, { ignoreAttributes: ['id', 'name'] });
    });

    test('LIGHT DOM - Structure test', () => {
      assert.lightDom.equalSnapshot(el, { ignoreAttributes: ['id', 'name'] });
    });
  });

  suite('Variant left', () => {
    setup(async () => {
      el = await fixture(
        html`<bbva-web-form-toggle variant="left" description="Description" value="1"
          >Option Label</bbva-web-form-toggle
        >`,
      );
      await el.updateComplete;
    });

    test('a11y', () => assert.isAccessible(el));

    test('SHADOW DOM - Structure test', () => {
      assert.shadowDom.equalSnapshot(el, { ignoreAttributes: ['id', 'name'] });
    });

    test('LIGHT DOM - Structure test', () => {
      assert.lightDom.equalSnapshot(el, { ignoreAttributes: ['id', 'name'] });
    });
  });

  suite('Variant switch', () => {
    setup(async () => {
      el = await fixture(
        html`<bbva-web-form-toggle variant="switch" description="Label" value="1"
          >Main Label</bbva-web-form-toggle
        >`,
      );
      await el.updateComplete;
    });

    test('a11y', () => assert.isAccessible(el));

    test('SHADOW DOM - Structure test', () => {
      assert.shadowDom.equalSnapshot(el, { ignoreAttributes: ['id', 'name'] });
    });

    test('LIGHT DOM - Structure test', () => {
      assert.lightDom.equalSnapshot(el, { ignoreAttributes: ['id', 'name'] });
    });
  });
});
