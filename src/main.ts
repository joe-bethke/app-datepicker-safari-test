import "app-datepicker";
import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("my-component")
class MyCompoonent extends LitElement {
  override render() {
    return html` <app-date-picker></app-date-picker> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "my-component": MyCompoonent;
  }
}
