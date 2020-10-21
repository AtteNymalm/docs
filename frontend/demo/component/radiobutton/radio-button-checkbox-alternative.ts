import '../../init'; // hidden-full-source-line

import { html, LitElement, customElement } from 'lit-element';
import '@vaadin/vaadin-radio-button/vaadin-radio-group';
import '@vaadin/vaadin-radio-button/vaadin-radio-button';
import '@vaadin/vaadin-checkbox/vaadin-checkbox';

// tag::snippet[]
@customElement('radio-button-checkbox-alternative')
export class RadioButtonCheckboxAlternative extends LitElement {

  render() {
    return html`
      <vaadin-checkbox checked>Reply All by default (unchecked state not clear)</vaadin-checkbox>
      <vaadin-radio-group
        label="Default reply behavior"
      >
        <vaadin-radio-button checked>Reply</vaadin-radio-button>
        <vaadin-radio-button>Reply to all</vaadin-radio-button>
      </vaadin-radio-group>
    `;
  }
}
// end::snippet[]
