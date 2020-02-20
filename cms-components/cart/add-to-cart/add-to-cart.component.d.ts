import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CartService, OrderEntry, Product } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { ModalService } from '../../../shared/components/modal/modal.service';
import { ModalRef } from '../../../shared/components/modal/modal-ref';
import { CurrentProductService } from '../../product/current-product.service';
import * as ɵngcc0 from '@angular/core';
export declare class AddToCartComponent implements OnInit, OnDestroy {
    protected cartService: CartService;
    protected modalService: ModalService;
    protected currentProductService: CurrentProductService;
    private cd;
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
    constructor(cartService: CartService, modalService: ModalService, currentProductService: CurrentProductService, cd: ChangeDetectorRef);
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

//# sourceMappingURL=add-to-cart.component.d.ts.map