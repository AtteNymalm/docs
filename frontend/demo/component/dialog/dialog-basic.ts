import '../../init'; // hidden-full-source-line

import { html, LitElement, internalProperty, customElement } from 'lit-element';
import { render } from 'lit-html';
import { guard } from 'lit-html/directives/guard';

import '@vaadin/vaadin-dialog/vaadin-dialog';
import '@vaadin/vaadin-button/vaadin-button';
import '@vaadin/vaadin-text-field/vaadin-text-field';
import '@vaadin/vaadin-ordered-layout/vaadin-horizontal-layout';
import '@vaadin/vaadin-ordered-layout/vaadin-vertical-layout';

import { applyTheme } from 'themes/theme-generated.js';

// tag::snippet[]
@customElement('dialog-basic')
export class Example extends LitElement {
  constructor() {
    super();
    // Apply custom theme (only supported if your app uses one)
    applyTheme(this.shadowRoot);
  }

  @internalProperty()
  private dialogOpened = false;

  render() {
    return html`
      <vaadin-dialog
        aria-label="simple"
        .opened=${this.dialogOpened}
        .renderer="${guard([], () => (root: HTMLElement) => {
          render(
            html`
              <vaadin-vertical-layout theme="spacing" style="align-items: stretch;">
                <h2 style="margin: var(--lumo-space-m) 0 0 0;">New employee</h2>
                <vaadin-vertical-layout style="align-items: stretch;">
                  <vaadin-text-field label="First name"></vaadin-text-field>
                  <vaadin-text-field label="Last name"></vaadin-text-field>
                </vaadin-vertical-layout>
                <vaadin-horizontal-layout theme="spacing" style="justify-content: flex-end">
                  <vaadin-button @click=${() => (this.dialogOpened = false)}>
                    Cancel
                  </vaadin-button>
                  <vaadin-button theme="primary" @click=${() => (this.dialogOpened = false)}>
                    Save changes
                  </vaadin-button>
                </vaadin-horizontal-layout>
              </vaadin-vertical-layout>
            `,
            root
          );
        })}"
        @opened-changed=${(e: CustomEvent) => (this.dialogOpened = e.detail.value)}
      ></vaadin-dialog>

      <vaadin-button @click=${() => (this.dialogOpened = true)}> Show dialog </vaadin-button>
    `;
  }
}
// end::snippet[]
