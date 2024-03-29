import "app-datepicker";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-component")
class MyCompoonent extends LitElement {
  override render() {
    return html`
      <app-date-picker
        locale="en-US"
        .max=${"2024-04-31"}
        .min=${"2024-03-38"}
      ></app-date-picker>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-component": MyCompoonent;
  }
}
