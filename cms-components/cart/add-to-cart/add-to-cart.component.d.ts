import { ChangeDetectorRef, OnInit } from '@angular/core';
import { CartService, OrderEntry } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ModalRef, ModalService } from '../../../shared/components/modal/index';
import { CurrentProductService } from '../../product/current-product.service';
export declare class AddToCartComponent implements OnInit {
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
    cartEntry$: Observable<OrderEntry>;
    constructor(cartService: CartService, modalService: ModalService, currentProductService: CurrentProductService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    updateCount(value: number): void;
    addToCart(): void;
    private openModal;
}
