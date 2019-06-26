import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { CartService, OrderEntry } from '@spartacus/core';
import { Observable, Subscription } from 'rxjs';
import { ModalRef, ModalService } from '../../../shared/components/modal/index';
import { CurrentProductService } from '../../product/current-product.service';
export declare class AddToCartComponent implements OnInit, OnDestroy {
    protected cartService: CartService;
    protected modalService: ModalService;
    protected currentProductService: CurrentProductService;
    private cd;
    productCode: string;
    showQuantity: boolean;
    maxQuantity: number;
    modalRef: ModalRef;
    hasStock: boolean;
    quantity: number;
    increment: boolean;
    cartEntry$: Observable<OrderEntry>;
    subscription: Subscription;
    constructor(cartService: CartService, modalService: ModalService, currentProductService: CurrentProductService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    updateCount(value: number): void;
    addToCart(): void;
    private openModal;
    ngOnDestroy(): void;
}
