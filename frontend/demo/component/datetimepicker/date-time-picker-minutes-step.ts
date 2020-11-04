import '../../init'; // hidden-full-source-line

import { customElement, html, LitElement } from 'lit-element';
import '@vaadin/vaadin-date-time-picker/vaadin-date-time-picker';

@customElement('date-time-picker-minutes-step')
export class Example extends LitElement {
  render() {
    return html`
      <!-- tag::snippet[] -->
      <vaadin-date-time-picker
        label="Meeting time"
        value="12:30"
        .step=${60 * 30}
      ></vaadin-date-time-picker>
      <!-- end::snippet[] -->
    `;
  }
}
