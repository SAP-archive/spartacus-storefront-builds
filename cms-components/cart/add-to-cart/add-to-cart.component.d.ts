import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActiveCartService, OrderEntry, Product } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { ModalRef } from '../../../shared/components/modal/modal-ref';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { CurrentProductService } from '../../product/current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class AddToCartComponent implements OnInit, OnDestroy {
    protected modalService: ModalService;
    protected currentProductService: CurrentProductService;
    private cd;
    protected activeCartService: ActiveCartService;
    productCode: string;
    showQuantity: boolean;
    /**
     * As long as we do not support #5026, we require product input, as we need
     *  a reference to the product model to fetch the stock data.
     */
    product: Product;
    maxQuantity: number;
    modalRef: ModalRef;
    hasStock: boolean;
    quantity: number;
    increment: boolean;
    cartEntry$: Observable<OrderEntry>;
    subscription: Subscription;
    addToCartForm: FormGroup;
    constructor(modalService: ModalService, currentProductService: CurrentProductService, cd: ChangeDetectorRef, activeCartService: ActiveCartService);
    ngOnInit(): void;
    private setStockInfo;
    updateCount(value: number): void;
    addToCart(): void;
    private openModal;
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddToCartComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AddToCartComponent, "cx-add-to-cart", never, {
    "showQuantity": "showQuantity";
    "productCode": "productCode";
    "product": "product";
}, {}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFkZC10by1jYXJ0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgT25EZXN0cm95LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEFjdGl2ZUNhcnRTZXJ2aWNlLCBPcmRlckVudHJ5LCBQcm9kdWN0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTW9kYWxSZWYgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tb2RhbC1yZWYnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBDdXJyZW50UHJvZHVjdFNlcnZpY2UgfSBmcm9tICcuLi8uLi9wcm9kdWN0L2N1cnJlbnQtcHJvZHVjdC5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEFkZFRvQ2FydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlO1xuICAgIHByaXZhdGUgY2Q7XG4gICAgcHJvdGVjdGVkIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZTtcbiAgICBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICAgIHNob3dRdWFudGl0eTogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBBcyBsb25nIGFzIHdlIGRvIG5vdCBzdXBwb3J0ICM1MDI2LCB3ZSByZXF1aXJlIHByb2R1Y3QgaW5wdXQsIGFzIHdlIG5lZWRcbiAgICAgKiAgYSByZWZlcmVuY2UgdG8gdGhlIHByb2R1Y3QgbW9kZWwgdG8gZmV0Y2ggdGhlIHN0b2NrIGRhdGEuXG4gICAgICovXG4gICAgcHJvZHVjdDogUHJvZHVjdDtcbiAgICBtYXhRdWFudGl0eTogbnVtYmVyO1xuICAgIG1vZGFsUmVmOiBNb2RhbFJlZjtcbiAgICBoYXNTdG9jazogYm9vbGVhbjtcbiAgICBxdWFudGl0eTogbnVtYmVyO1xuICAgIGluY3JlbWVudDogYm9vbGVhbjtcbiAgICBjYXJ0RW50cnkkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+O1xuICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIGFkZFRvQ2FydEZvcm06IEZvcm1Hcm91cDtcbiAgICBjb25zdHJ1Y3Rvcihtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSwgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2UsIGNkOiBDaGFuZ2VEZXRlY3RvclJlZiwgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlKTtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHByaXZhdGUgc2V0U3RvY2tJbmZvO1xuICAgIHVwZGF0ZUNvdW50KHZhbHVlOiBudW1iZXIpOiB2b2lkO1xuICAgIGFkZFRvQ2FydCgpOiB2b2lkO1xuICAgIHByaXZhdGUgb3Blbk1vZGFsO1xuICAgIG5nT25EZXN0cm95KCk6IHZvaWQ7XG59XG4iXX0=