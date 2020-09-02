import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {State} from '../../store/reducers';
import {getNextProductId} from '../../store/selectors/product';
import {Subscription} from 'rxjs';
import {AddDiscount, AddProduct} from '../../store/actions/product';
import {Product, ProductDiscount} from '../../models/product';

@Component({
    selector: 'app-add-product',
    templateUrl: './add-product.component.html',
    styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
    form: FormGroup;
    isSaved = false;

    private nextProductId: number;
    private subscription: Subscription = new Subscription();

    constructor(private store: Store<State>) {
        const sub = store.select(getNextProductId)
            .subscribe((id: number) => {
                this.nextProductId = id;
            });

        this.subscription.add(sub);
    }

    ngOnInit(): void {
        this.initForm();
    }

    private initForm() {
        const numberValidator = Validators.pattern('^[0-9]*$');

        this.form = new FormGroup({
            productName: new FormControl('', [Validators.required]),
            price: new FormControl('', [Validators.required, numberValidator]),
            withDiscount: new FormControl(false),
            from: new FormControl('', numberValidator),
            to: new FormControl('', numberValidator)
        });

        const sub = this.form.get('withDiscount').valueChanges.subscribe(value => {
            const validators = [numberValidator];

            if (value) {
                validators.push(Validators.required);
            }

            this.form.get('from').setValidators(validators);
            this.form.get('to').setValidators(validators);

            this.form.get('from').updateValueAndValidity();
            this.form.get('to').updateValueAndValidity();
        });

        this.subscription.add(sub);
    }

    submit() {
        const formVal = this.form.value;
        const nextId = this.nextProductId;

        this.saveProduct(formVal, nextId);

        if (formVal.withDiscount) {
            this.saveDiscount(formVal, nextId);
        }

        this.form.reset();
        this.isSaved = true;

        setTimeout(() => { this.isSaved = false; }, 1000);
    }

    private saveProduct(formVal: any, nextId: number) {
        const newProduct: Product = {
            id: nextId,
            price: parseInt(formVal.price, 10),
            name: formVal.productName
        };

        this.store.dispatch(new AddProduct(newProduct));
    }

    private saveDiscount(formVal: any, nextId: number) {
        const discount: ProductDiscount = {
            from: parseInt(formVal.from, 10),
            to: parseInt(formVal.to, 10)
        };

        this.store.dispatch(new AddDiscount({
            productId: nextId,
            discount
        }));
    }
}
