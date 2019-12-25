import { ElementRef, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cart, CartService, OrderEntry, PromotionResult, PromotionLocation } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
import { ModalService } from '../../../../shared/components/modal/index';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
export declare class AddedToCartDialogComponent implements OnInit {
    protected modalService: ModalService;
    protected cartService: CartService;
    protected fb: FormBuilder;
    protected promotionService?: PromotionService;
    iconTypes: typeof ICON_TYPE;
    entry$: Observable<OrderEntry>;
    cart$: Observable<Cart>;
    loaded$: Observable<boolean>;
    increment: boolean;
    orderPromotions$: Observable<PromotionResult[]>;
    promotionLocation: PromotionLocation;
    quantity: number;
    modalIsOpen: boolean;
    dialog: ElementRef;
    form: FormGroup;
    constructor(modalService: ModalService, cartService: CartService, fb: FormBuilder, promotionService: PromotionService);
    /**
     * @deprecated Since 1.4
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     */
    constructor(modalService: ModalService, cartService: CartService, fb: FormBuilder);
    ngOnInit(): void;
    dismissModal(reason?: any): void;
    removeEntry(item: OrderEntry): void;
    updateEntry({ item, updatedQuantity }: {
        item: any;
        updatedQuantity: any;
    }): void;
    private createEntryFormGroup;
}
