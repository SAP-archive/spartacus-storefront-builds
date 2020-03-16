import { ElementRef, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Cart, ActiveCartService, OrderEntry, PromotionLocation, PromotionResult } from '@spartacus/core';
import { Observable } from 'rxjs';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/icon.model';
import { ModalService } from '../../../../shared/components/modal/modal.service';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
import * as ɵngcc0 from '@angular/core';
export declare class AddedToCartDialogComponent implements OnInit {
    protected modalService: ModalService;
    protected cartService: ActiveCartService;
    protected promotionService: PromotionService;
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
    constructor(modalService: ModalService, cartService: ActiveCartService, promotionService: PromotionService);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbImFkZGVkLXRvLWNhcnQtZGlhbG9nLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7OztBQU9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEJBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2FydCwgQWN0aXZlQ2FydFNlcnZpY2UsIE9yZGVyRW50cnksIFByb21vdGlvbkxvY2F0aW9uLCBQcm9tb3Rpb25SZXN1bHQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgTW9kYWxTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL2NvbXBvbmVudHMvbW9kYWwvbW9kYWwuc2VydmljZSc7XG5pbXBvcnQgeyBQcm9tb3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vc2hhcmVkL3NlcnZpY2VzL3Byb21vdGlvbi9wcm9tb3Rpb24uc2VydmljZSc7XG5leHBvcnQgZGVjbGFyZSBjbGFzcyBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlO1xuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQWN0aXZlQ2FydFNlcnZpY2U7XG4gICAgcHJvdGVjdGVkIHByb21vdGlvblNlcnZpY2U6IFByb21vdGlvblNlcnZpY2U7XG4gICAgaWNvblR5cGVzOiB0eXBlb2YgSUNPTl9UWVBFO1xuICAgIGVudHJ5JDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PjtcbiAgICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgICBsb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIGluY3JlbWVudDogYm9vbGVhbjtcbiAgICBvcmRlclByb21vdGlvbnMkOiBPYnNlcnZhYmxlPFByb21vdGlvblJlc3VsdFtdPjtcbiAgICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb247XG4gICAgcXVhbnRpdHk6IG51bWJlcjtcbiAgICBtb2RhbElzT3BlbjogYm9vbGVhbjtcbiAgICBkaWFsb2c6IEVsZW1lbnRSZWY7XG4gICAgZm9ybTogRm9ybUdyb3VwO1xuICAgIHByaXZhdGUgcXVhbnRpdHlDb250cm9sJDtcbiAgICBjb25zdHJ1Y3Rvcihtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSwgY2FydFNlcnZpY2U6IEFjdGl2ZUNhcnRTZXJ2aWNlLCBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgZm9ybUNvbnRyb2wgd2l0aCB0aGUgcXVhbnRpdHkgb2YgdGhlIGNhcnRFbnRyeSxcbiAgICAgKiBidXQgYWxzbyB1cGRhdGVzIHRoZSBlbnRyeSBpbiBjYXNlIG9mIGEgY2hhbmdlZCB2YWx1ZS5cbiAgICAgKiBUaGUgcXVhbnRpdHkgY2FuIGJlIHNldCB0byB6ZXJvIGluIG9yZGVyIHRvIHJlbW92ZSB0aGUgZW50cnkuXG4gICAgICovXG4gICAgZ2V0UXVhbnRpdHlDb250cm9sKCk6IE9ic2VydmFibGU8Rm9ybUNvbnRyb2w+O1xuICAgIG5nT25Jbml0KCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBnZXRGb3JtQ29udHJvbDtcbiAgICBkaXNtaXNzTW9kYWwocmVhc29uPzogYW55KTogdm9pZDtcbn1cbiJdfQ==