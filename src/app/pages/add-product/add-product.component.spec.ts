import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddProductComponent} from './add-product.component';
import {StoreModule} from '@ngrx/store';
import {provideMockStore} from '@ngrx/store/testing';
import {initialState} from '../../store/reducers';

describe('AddProductComponent', () => {
    let component: AddProductComponent;
    let fixture: ComponentFixture<AddProductComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AddProductComponent],
            imports: [StoreModule],
            providers: [provideMockStore({initialState})]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AddProductComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
