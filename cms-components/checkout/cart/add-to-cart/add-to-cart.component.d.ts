import { OnInit, ChangeDetectorRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CartService, OrderEntry } from '@spartacus/core';
import { CurrentProductService } from '../../../product/current-product.service';
export declare class AddToCartComponent implements OnInit {
    protected cartService: CartService;
    private modalService;
    protected currentProductService: CurrentProductService;
    private cd;
    productCode: string;
    showQuantity: boolean;
    maxQuantity: number;
    modalInstance: any;
    hasStock: boolean;
    quantity: number;
    cartEntry$: Observable<OrderEntry>;
    constructor(cartService: CartService, modalService: NgbModal, currentProductService: CurrentProductService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    updateCount(value: any): void;
    addToCart(): void;
    private openModal;
}
