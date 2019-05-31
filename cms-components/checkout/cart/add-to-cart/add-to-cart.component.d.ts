import { OnInit, ChangeDetectorRef } from '@angular/core';
import { Observable } from 'rxjs';
import { CartService, OrderEntry } from '@spartacus/core';
import { CurrentProductService } from '../../../product/current-product.service';
import { ModalService, ModalRef } from '../../../../shared/components/modal/index';
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
