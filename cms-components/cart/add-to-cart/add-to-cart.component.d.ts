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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFkZC10by1jYXJ0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyQkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBBY3RpdmVDYXJ0U2VydmljZSwgT3JkZXJFbnRyeSwgUHJvZHVjdCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE1vZGFsUmVmIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwtcmVmJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3VycmVudFByb2R1Y3RTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vcHJvZHVjdC9jdXJyZW50LXByb2R1Y3Quc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZGRUb0NhcnRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZTtcbiAgICBwcml2YXRlIGNkO1xuICAgIHByb3RlY3RlZCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgcHJvZHVjdENvZGU6IHN0cmluZztcbiAgICBzaG93UXVhbnRpdHk6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQXMgbG9uZyBhcyB3ZSBkbyBub3Qgc3VwcG9ydCAjNTAyNiwgd2UgcmVxdWlyZSBwcm9kdWN0IGlucHV0LCBhcyB3ZSBuZWVkXG4gICAgICogIGEgcmVmZXJlbmNlIHRvIHRoZSBwcm9kdWN0IG1vZGVsIHRvIGZldGNoIHRoZSBzdG9jayBkYXRhLlxuICAgICAqL1xuICAgIHByb2R1Y3Q6IFByb2R1Y3Q7XG4gICAgbWF4UXVhbnRpdHk6IG51bWJlcjtcbiAgICBtb2RhbFJlZjogTW9kYWxSZWY7XG4gICAgaGFzU3RvY2s6IGJvb2xlYW47XG4gICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgICBpbmNyZW1lbnQ6IGJvb2xlYW47XG4gICAgY2FydEVudHJ5JDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PjtcbiAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcbiAgICBhZGRUb0NhcnRGb3JtOiBGb3JtR3JvdXA7XG4gICAgY29uc3RydWN0b3IobW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsIGN1cnJlbnRQcm9kdWN0U2VydmljZTogQ3VycmVudFByb2R1Y3RTZXJ2aWNlLCBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsIGFjdGl2ZUNhcnRTZXJ2aWNlOiBBY3RpdmVDYXJ0U2VydmljZSk7XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBwcml2YXRlIHNldFN0b2NrSW5mbztcbiAgICB1cGRhdGVDb3VudCh2YWx1ZTogbnVtYmVyKTogdm9pZDtcbiAgICBhZGRUb0NhcnQoKTogdm9pZDtcbiAgICBwcml2YXRlIG9wZW5Nb2RhbDtcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkO1xufVxuIl19