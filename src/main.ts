import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'app-datepicker';

@customElement('my-component')
class MyCompoonent extends LitElement {
  render() {
    return html`
    <app-date-picker
      locale="en-US"
      .max=${'2024-04-31'}
      .min=${'2024-03-38'}
    ></app-date-picker>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'my-component': MyCompoonent;
  }
}
