import { OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { CartService, OrderEntry } from '@spartacus/core';
export declare class AddToCartComponent implements OnInit {
    protected cartService: CartService;
    private modalService;
    modalInstance: any;
    iconOnly: any;
    productCode: string;
    quantity: number;
    maxQuantity: number;
    cartEntry$: Observable<OrderEntry>;
    loaded$: Observable<boolean>;
    constructor(cartService: CartService, modalService: NgbModal);
    ngOnInit(): void;
    addToCart(): void;
    private openModal;
}
