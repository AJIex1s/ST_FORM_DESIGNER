import { Component, Injector } from '@angular/core';

@Component({
    moduleId: module.id.toString(),
    selector: 'text-field',
    templateUrl: 'text-field.component.html',
    styleUrls: ['text-field.component.css']
})
export class TextFieldComponent {
    public draging: boolean = false;
    constructor(paramsInjector: Injector) {
    }
}