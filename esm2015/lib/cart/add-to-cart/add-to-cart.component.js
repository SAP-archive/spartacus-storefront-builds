/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '@spartacus/core';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';
export class AddToCartComponent {
    /**
     * @param {?} cartService
     * @param {?} modalService
     */
    constructor(cartService, modalService) {
        this.cartService = cartService;
        this.modalService = modalService;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.productCode) {
            this.loaded$ = this.cartService.getLoaded();
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
        }
    }
    /**
     * @return {?}
     */
    addToCart() {
        if (!this.productCode || this.quantity <= 0) {
            return;
        }
        this.openModal();
        this.cartService.addEntry(this.productCode, this.quantity);
    }
    /**
     * @private
     * @return {?}
     */
    openModal() {
        this.modalInstance = this.modalService.open(AddedToCartDialogComponent, {
            centered: true,
            size: 'lg',
        }).componentInstance;
        this.modalInstance.entry$ = this.cartEntry$;
        this.modalInstance.cart$ = this.cartService.getActive();
        this.modalInstance.loaded$ = this.loaded$;
        this.modalInstance.quantity = this.quantity;
    }
}
AddToCartComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-add-to-cart',
                template: "<button\n  class=\"btn btn-primary btn-block\"\n  type=\"button\"\n  [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  (click)=\"addToCart()\"\n>\n  {{ 'addToCart.addToCart' | cxTranslate }}\n</button>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [""]
            }] }
];
/** @nocollapse */
AddToCartComponent.ctorParameters = () => [
    { type: CartService },
    { type: NgbModal }
];
AddToCartComponent.propDecorators = {
    iconOnly: [{ type: Input }],
    productCode: [{ type: Input }],
    quantity: [{ type: Input }],
    maxQuantity: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AddToCartComponent.prototype.modalInstance;
    /** @type {?} */
    AddToCartComponent.prototype.iconOnly;
    /** @type {?} */
    AddToCartComponent.prototype.productCode;
    /** @type {?} */
    AddToCartComponent.prototype.quantity;
    /** @type {?} */
    AddToCartComponent.prototype.maxQuantity;
    /** @type {?} */
    AddToCartComponent.prototype.cartEntry$;
    /** @type {?} */
    AddToCartComponent.prototype.loaded$;
    /**
     * @type {?}
     * @protected
     */
    AddToCartComponent.prototype.cartService;
    /**
     * @type {?}
     * @private
     */
    AddToCartComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NhcnQvYWRkLXRvLWNhcnQvYWRkLXRvLWNhcnQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCx1QkFBdUIsR0FDeEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBSXRELE9BQU8sRUFBRSxXQUFXLEVBQWMsTUFBTSxpQkFBaUIsQ0FBQztBQUUxRCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQVFuRyxNQUFNLE9BQU8sa0JBQWtCOzs7OztJQWlCN0IsWUFDWSxXQUF3QixFQUMxQixZQUFzQjtRQURwQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBVTtJQUM3QixDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDL0Q7SUFDSCxDQUFDOzs7O0lBRUQsU0FBUztRQUNQLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQzNDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVPLFNBQVM7UUFDZixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLDBCQUEwQixFQUFFO1lBQ3RFLFFBQVEsRUFBRSxJQUFJO1lBQ2QsSUFBSSxFQUFFLElBQUk7U0FDWCxDQUFDLENBQUMsaUJBQWlCLENBQUM7UUFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUM1QyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDMUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUM5QyxDQUFDOzs7WUFwREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLCtOQUEyQztnQkFFM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBVFEsV0FBVztZQUpYLFFBQVE7Ozt1QkFpQmQsS0FBSzswQkFHTCxLQUFLO3VCQUVMLEtBQUs7MEJBR0wsS0FBSzs7OztJQVZOLDJDQUFtQjs7SUFFbkIsc0NBQ1M7O0lBRVQseUNBQ29COztJQUNwQixzQ0FDaUI7O0lBRWpCLHlDQUNvQjs7SUFFcEIsd0NBQW1DOztJQUNuQyxxQ0FBNkI7Ozs7O0lBRzNCLHlDQUFrQzs7Ozs7SUFDbEMsMENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBPcmRlckVudHJ5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL2FkZGVkLXRvLWNhcnQtZGlhbG9nL2FkZGVkLXRvLWNhcnQtZGlhbG9nLmNvbXBvbmVudCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZC10by1jYXJ0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZC10by1jYXJ0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLXRvLWNhcnQuY29tcG9uZW50LnNjc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEFkZFRvQ2FydENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIG1vZGFsSW5zdGFuY2U6IGFueTtcblxuICBASW5wdXQoKVxuICBpY29uT25seTtcblxuICBASW5wdXQoKVxuICBwcm9kdWN0Q29kZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICBxdWFudGl0eTogbnVtYmVyO1xuXG4gIEBJbnB1dCgpXG4gIG1heFF1YW50aXR5OiBudW1iZXI7XG5cbiAgY2FydEVudHJ5JDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PjtcbiAgbG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByaXZhdGUgbW9kYWxTZXJ2aWNlOiBOZ2JNb2RhbFxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKHRoaXMucHJvZHVjdENvZGUpIHtcbiAgICAgIHRoaXMubG9hZGVkJCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0TG9hZGVkKCk7XG4gICAgICB0aGlzLmNhcnRFbnRyeSQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEVudHJ5KHRoaXMucHJvZHVjdENvZGUpO1xuICAgIH1cbiAgfVxuXG4gIGFkZFRvQ2FydCgpIHtcbiAgICBpZiAoIXRoaXMucHJvZHVjdENvZGUgfHwgdGhpcy5xdWFudGl0eSA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMub3Blbk1vZGFsKCk7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5hZGRFbnRyeSh0aGlzLnByb2R1Y3RDb2RlLCB0aGlzLnF1YW50aXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgb3Blbk1vZGFsKCkge1xuICAgIHRoaXMubW9kYWxJbnN0YW5jZSA9IHRoaXMubW9kYWxTZXJ2aWNlLm9wZW4oQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnQsIHtcbiAgICAgIGNlbnRlcmVkOiB0cnVlLFxuICAgICAgc2l6ZTogJ2xnJyxcbiAgICB9KS5jb21wb25lbnRJbnN0YW5jZTtcbiAgICB0aGlzLm1vZGFsSW5zdGFuY2UuZW50cnkkID0gdGhpcy5jYXJ0RW50cnkkO1xuICAgIHRoaXMubW9kYWxJbnN0YW5jZS5jYXJ0JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0QWN0aXZlKCk7XG4gICAgdGhpcy5tb2RhbEluc3RhbmNlLmxvYWRlZCQgPSB0aGlzLmxvYWRlZCQ7XG4gICAgdGhpcy5tb2RhbEluc3RhbmNlLnF1YW50aXR5ID0gdGhpcy5xdWFudGl0eTtcbiAgfVxufVxuIl19