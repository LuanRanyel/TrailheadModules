import { LightningElement } from lwc;
export default class MyComponent extends LightningElement {
    myProperty;
    myFunction() {
        console.log(this.myProperty);
    }
} 