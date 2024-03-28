var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import 'app-datepicker';
let MyCompoonent = class MyCompoonent extends LitElement {
    render() {
        return html `
    <app-date-picker
      locale="en-US"
      .max=${'2024-04-31'}
      .min=${'2024-03-38'}
    ></app-date-picker>
    `;
    }
};
MyCompoonent = __decorate([
    customElement('my-component')
], MyCompoonent);
//# sourceMappingURL=main.js.map