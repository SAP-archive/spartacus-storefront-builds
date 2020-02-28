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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFkZGVkLXRvLWNhcnQtZGlhbG9nLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnRSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IENhcnQsIENhcnRTZXJ2aWNlLCBPcmRlckVudHJ5LCBQcm9tb3Rpb25Mb2NhdGlvbiwgUHJvbW90aW9uUmVzdWx0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvbW90aW9uU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9zZXJ2aWNlcy9wcm9tb3Rpb24vcHJvbW90aW9uLnNlcnZpY2UnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByb3RlY3RlZCBtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZTtcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBwcm9tb3Rpb25TZXJ2aWNlPzogUHJvbW90aW9uU2VydmljZTtcbiAgICBpY29uVHlwZXM6IHR5cGVvZiBJQ09OX1RZUEU7XG4gICAgZW50cnkkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+O1xuICAgIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICAgIGxvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgaW5jcmVtZW50OiBib29sZWFuO1xuICAgIG9yZGVyUHJvbW90aW9ucyQ6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+O1xuICAgIHByb21vdGlvbkxvY2F0aW9uOiBQcm9tb3Rpb25Mb2NhdGlvbjtcbiAgICBxdWFudGl0eTogbnVtYmVyO1xuICAgIG1vZGFsSXNPcGVuOiBib29sZWFuO1xuICAgIGRpYWxvZzogRWxlbWVudFJlZjtcbiAgICBmb3JtOiBGb3JtR3JvdXA7XG4gICAgcHJpdmF0ZSBxdWFudGl0eUNvbnRyb2wkO1xuICAgIGNvbnN0cnVjdG9yKG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgICAqIFVzZSBwcm9tb3Rpb25TZXJ2aWNlIGluc3RlYWQgb2YgdGhlIHByb21vdGlvbiBpbnB1dHMuXG4gICAgICogUmVtb3ZlIGlzc3VlOiAjNTY3MFxuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UpO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gb2JzZXJ2YWJsZSBmb3JtQ29udHJvbCB3aXRoIHRoZSBxdWFudGl0eSBvZiB0aGUgY2FydEVudHJ5LFxuICAgICAqIGJ1dCBhbHNvIHVwZGF0ZXMgdGhlIGVudHJ5IGluIGNhc2Ugb2YgYSBjaGFuZ2VkIHZhbHVlLlxuICAgICAqIFRoZSBxdWFudGl0eSBjYW4gYmUgc2V0IHRvIHplcm8gaW4gb3JkZXIgdG8gcmVtb3ZlIHRoZSBlbnRyeS5cbiAgICAgKi9cbiAgICBnZXRRdWFudGl0eUNvbnRyb2woKTogT2JzZXJ2YWJsZTxGb3JtQ29udHJvbD47XG4gICAgbmdPbkluaXQoKTogdm9pZDtcbiAgICBwcml2YXRlIGdldEZvcm1Db250cm9sO1xuICAgIGRpc21pc3NNb2RhbChyZWFzb24/OiBhbnkpOiB2b2lkO1xufVxuIl19