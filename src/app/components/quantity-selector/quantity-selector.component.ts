import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-quantity-selector',
    templateUrl: './quantity-selector.component.html',
    styleUrls: ['./quantity-selector.component.scss']
})
export class QuantitySelectorComponent implements OnInit {
    @Input() value: number;
    @Input() isDisabled: boolean;
    @Output() change = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit(): void {
    }

    setValue(value: number) {
        this.change.emit(value);
    }
}
