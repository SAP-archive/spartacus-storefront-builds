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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFkZGVkLXRvLWNhcnQtZGlhbG9nLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0NBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2FydCwgQ2FydFNlcnZpY2UsIE9yZGVyRW50cnksIFByb21vdGlvbkxvY2F0aW9uLCBQcm9tb3Rpb25SZXN1bHQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Byb21vdGlvbi9wcm9tb3Rpb24uc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U/OiBQcm9tb3Rpb25TZXJ2aWNlO1xuICAgIGljb25UeXBlczogdHlwZW9mIElDT05fVFlQRTtcbiAgICBlbnRyeSQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeT47XG4gICAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gICAgbG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBpbmNyZW1lbnQ6IGJvb2xlYW47XG4gICAgb3JkZXJQcm9tb3Rpb25zJDogT2JzZXJ2YWJsZTxQcm9tb3Rpb25SZXN1bHRbXT47XG4gICAgcHJvbW90aW9uTG9jYXRpb246IFByb21vdGlvbkxvY2F0aW9uO1xuICAgIHF1YW50aXR5OiBudW1iZXI7XG4gICAgbW9kYWxJc09wZW46IGJvb2xlYW47XG4gICAgZGlhbG9nOiBFbGVtZW50UmVmO1xuICAgIGZvcm06IEZvcm1Hcm91cDtcbiAgICBwcml2YXRlIHF1YW50aXR5Q29udHJvbCQ7XG4gICAgY29uc3RydWN0b3IobW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSwgcHJvbW90aW9uU2VydmljZTogUHJvbW90aW9uU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogQGRlcHJlY2F0ZWQgU2luY2UgMS41XG4gICAgICogVXNlIHByb21vdGlvblNlcnZpY2UgaW5zdGVhZCBvZiB0aGUgcHJvbW90aW9uIGlucHV0cy5cbiAgICAgKiBSZW1vdmUgaXNzdWU6ICM1NjcwXG4gICAgICovXG4gICAgY29uc3RydWN0b3IobW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSk7XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvcm1Db250cm9sIHdpdGggdGhlIHF1YW50aXR5IG9mIHRoZSBjYXJ0RW50cnksXG4gICAgICogYnV0IGFsc28gdXBkYXRlcyB0aGUgZW50cnkgaW4gY2FzZSBvZiBhIGNoYW5nZWQgdmFsdWUuXG4gICAgICogVGhlIHF1YW50aXR5IGNhbiBiZSBzZXQgdG8gemVybyBpbiBvcmRlciB0byByZW1vdmUgdGhlIGVudHJ5LlxuICAgICAqL1xuICAgIGdldFF1YW50aXR5Q29udHJvbCgpOiBPYnNlcnZhYmxlPEZvcm1Db250cm9sPjtcbiAgICBuZ09uSW5pdCgpOiB2b2lkO1xuICAgIHByaXZhdGUgZ2V0Rm9ybUNvbnRyb2w7XG4gICAgZGlzbWlzc01vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQ7XG59XG4iXX0=