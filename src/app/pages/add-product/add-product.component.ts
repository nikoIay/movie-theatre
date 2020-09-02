import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../../store/reducers';
import {getNextProductId} from '../../store/selectors/product';
import {Subscription} from 'rxjs';
import {Add} from '../../store/actions/product';
import {Product} from '../../models/product';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
    form: FormGroup;
    isSaved = false;

    private nextProductId: number;
    private subscription: Subscription;

    constructor(private store: Store<State>) {
        this.subscription = store.select(getNextProductId)
            .subscribe((id: number) => {
                this.nextProductId = id;
                console.log(id);
            });
    }

    ngOnInit(): void {
        this.form = new FormGroup({
            productName: new FormControl('', [Validators.required]),
            price: new FormControl('', [Validators.required, Validators.pattern('^[0-9]*$')])
        });
    }

    submit() {
        const newProduct: Product = {
            id: this.nextProductId,
            price: parseInt(this.form.value.price, 10),
            name: this.form.value.productName
        };

        this.store.dispatch(new Add(newProduct));
        this.form.reset();
        this.isSaved = true;

        setTimeout(() => { this.isSaved = false; }, 1000);
    }
}
