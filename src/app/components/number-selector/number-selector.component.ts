import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-number-selector',
    templateUrl: './number-selector.component.html',
    styleUrls: ['./number-selector.component.scss']
})
export class NumberSelectorComponent implements OnInit {
    @Input() value: number;
    @Input() isDisabled ? = false;
    @Output() change = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit(): void {
    }

    setValue(value: number) {
        this.change.emit(value);
    }
}
