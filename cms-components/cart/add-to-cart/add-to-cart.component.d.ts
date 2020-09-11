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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddToCartComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AddToCartComponent, "cx-add-to-cart", never, { "showQuantity": "showQuantity"; "productCode": "productCode"; "product": "product"; }, {}, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFkZC10by1jYXJ0LmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQWN0aXZlQ2FydFNlcnZpY2UsIE9yZGVyRW50cnksIFByb2R1Y3QgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBNb2RhbFJlZiB9IGZyb20gJy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLXJlZic7XG5pbXBvcnQgeyBNb2RhbFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvY29tcG9uZW50cy9tb2RhbC9tb2RhbC5zZXJ2aWNlJztcbmltcG9ydCB7IEN1cnJlbnRQcm9kdWN0U2VydmljZSB9IGZyb20gJy4uLy4uL3Byb2R1Y3QvY3VycmVudC1wcm9kdWN0LnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWRkVG9DYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY3VycmVudFByb2R1Y3RTZXJ2aWNlOiBDdXJyZW50UHJvZHVjdFNlcnZpY2U7XG4gICAgcHJpdmF0ZSBjZDtcbiAgICBwcm90ZWN0ZWQgYWN0aXZlQ2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlO1xuICAgIHByb2R1Y3RDb2RlOiBzdHJpbmc7XG4gICAgc2hvd1F1YW50aXR5OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEFzIGxvbmcgYXMgd2UgZG8gbm90IHN1cHBvcnQgIzUwMjYsIHdlIHJlcXVpcmUgcHJvZHVjdCBpbnB1dCwgYXMgd2UgbmVlZFxuICAgICAqICBhIHJlZmVyZW5jZSB0byB0aGUgcHJvZHVjdCBtb2RlbCB0byBmZXRjaCB0aGUgc3RvY2sgZGF0YS5cbiAgICAgKi9cbiAgICBwcm9kdWN0OiBQcm9kdWN0O1xuICAgIG1heFF1YW50aXR5OiBudW1iZXI7XG4gICAgbW9kYWxSZWY6IE1vZGFsUmVmO1xuICAgIGhhc1N0b2NrOiBib29sZWFuO1xuICAgIHF1YW50aXR5OiBudW1iZXI7XG4gICAgaW5jcmVtZW50OiBib29sZWFuO1xuICAgIGNhcnRFbnRyeSQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeT47XG4gICAgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XG4gICAgYWRkVG9DYXJ0Rm9ybTogRm9ybUdyb3VwO1xuICAgIGNvbnN0cnVjdG9yKG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLCBjdXJyZW50UHJvZHVjdFNlcnZpY2U6IEN1cnJlbnRQcm9kdWN0U2VydmljZSwgY2Q6IENoYW5nZURldGVjdG9yUmVmLCBhY3RpdmVDYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2UpO1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBzZXRTdG9ja0luZm87XG4gICAgdXBkYXRlQ291bnQodmFsdWU6IG51bWJlcik6IHZvaWQ7XG4gICAgYWRkVG9DYXJ0KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBvcGVuTW9kYWw7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==