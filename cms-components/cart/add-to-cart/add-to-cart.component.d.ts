import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { CartService, OrderEntry, ProductService } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { ModalRef, ModalService } from '../../../shared/components/modal/index';
import { CurrentProductService } from '../../product/current-product.service';
export declare class AddToCartComponent implements OnInit, OnDestroy {
    protected cartService: CartService;
    protected modalService: ModalService;
    protected currentProductService: CurrentProductService;
    private cd;
    private productService?;
    productCode: string;
    showQuantity: boolean;
    maxQuantity: number;
    modalRef: ModalRef;
    hasStock: boolean;
    quantity: number;
    increment: boolean;
    cartEntry$: Observable<OrderEntry>;
    subscription: Subscription;
    constructor(cartService: CartService, modalService: ModalService, currentProductService: CurrentProductService, cd: ChangeDetectorRef, productService: ProductService);
    /**
     * @deprecated since version 1.4
     *  Use constructor(store: Store<StateWithUser | StateWithProcess<void>>,
     *  authService: AuthService) instead
     */
    constructor(cartService: CartService, modalService: ModalService, currentProductService: CurrentProductService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    private setStockInfo;
    updateCount(value: number): void;
    addToCart(): void;
    private openModal;
    ngOnDestroy(): void;
}
