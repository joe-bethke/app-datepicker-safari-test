import { LitElement } from 'lit';
import 'app-datepicker';
declare class MyCompoonent extends LitElement {
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'my-component': MyCompoonent;
    }
}
export {};
//# sourceMappingURL=main.d.ts.map