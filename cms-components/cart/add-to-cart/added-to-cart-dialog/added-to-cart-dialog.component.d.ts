import { ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cart, CartService, OrderEntry, PromotionLocation, PromotionResult } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/icon.model';
import { ModalService } from '../../../../shared/components/modal/modal.service';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
import * as ɵngcc0 from '@angular/core';
export declare class AddedToCartDialogComponent implements OnInit {
    protected modalService: ModalService;
    protected cartService: CartService;
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
    private quantityControl$;
    constructor(modalService: ModalService, cartService: CartService, promotionService: PromotionService);
    /**
     * @deprecated Since 1.5
     * Use promotionService instead of the promotion inputs.
     * Remove issue: #5670
     */
    constructor(modalService: ModalService, cartService: CartService);
    /**
     * Returns an observable formControl with the quantity of the cartEntry,
     * but also updates the entry in case of a changed value.
     * The quantity can be set to zero in order to remove the entry.
     */
    getQuantityControl(): Observable<FormControl>;
    ngOnInit(): void;
    private getFormControl;
    dismissModal(reason?: any): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<AddedToCartDialogComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<AddedToCartDialogComponent, "cx-added-to-cart-dialog", never, {}, {}, never>;
}

//# sourceMappingURL=added-to-cart-dialog.component.d.ts.map