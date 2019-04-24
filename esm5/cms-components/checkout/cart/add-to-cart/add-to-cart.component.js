/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from '@spartacus/core';
import { AddedToCartDialogComponent } from './added-to-cart-dialog/added-to-cart-dialog.component';
var AddToCartComponent = /** @class */ (function () {
    function AddToCartComponent(cartService, modalService) {
        this.cartService = cartService;
        this.modalService = modalService;
    }
    /**
     * @return {?}
     */
    AddToCartComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.productCode) {
            this.loaded$ = this.cartService.getLoaded();
            this.cartEntry$ = this.cartService.getEntry(this.productCode);
        }
    };
    /**
     * @return {?}
     */
    AddToCartComponent.prototype.addToCart = /**
     * @return {?}
     */
    function () {
        if (!this.productCode || this.quantity <= 0) {
            return;
        }
        this.openModal();
        this.cartService.addEntry(this.productCode, this.quantity);
    };
    /**
     * @private
     * @return {?}
     */
    AddToCartComponent.prototype.openModal = /**
     * @private
     * @return {?}
     */
    function () {
        this.modalInstance = this.modalService.open(AddedToCartDialogComponent, {
            centered: true,
            size: 'lg',
        }).componentInstance;
        this.modalInstance.entry$ = this.cartEntry$;
        this.modalInstance.cart$ = this.cartService.getActive();
        this.modalInstance.loaded$ = this.loaded$;
        this.modalInstance.quantity = this.quantity;
    };
    AddToCartComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-add-to-cart',
                    template: "<button\n  class=\"btn btn-primary btn-block\"\n  type=\"button\"\n  [disabled]=\"quantity <= 0 || quantity > maxQuantity\"\n  (click)=\"addToCart()\"\n>\n  {{ 'addToCart.addToCart' | cxTranslate }}\n</button>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    AddToCartComponent.ctorParameters = function () { return [
        { type: CartService },
        { type: NgbModal }
    ]; };
    AddToCartComponent.propDecorators = {
        iconOnly: [{ type: Input }],
        productCode: [{ type: Input }],
        quantity: [{ type: Input }],
        maxQuantity: [{ type: Input }]
    };
    return AddToCartComponent;
}());
export { AddToCartComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJdEQsT0FBTyxFQUFFLFdBQVcsRUFBYyxNQUFNLGlCQUFpQixDQUFDO0FBRTFELE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBRW5HO0lBdUJFLDRCQUNZLFdBQXdCLEVBQzFCLFlBQXNCO1FBRHBCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQzFCLGlCQUFZLEdBQVosWUFBWSxDQUFVO0lBQzdCLENBQUM7Ozs7SUFFSixxQ0FBUTs7O0lBQVI7UUFDRSxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDcEIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzVDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQy9EO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFTOzs7SUFBVDtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQzNDLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM3RCxDQUFDOzs7OztJQUVPLHNDQUFTOzs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQywwQkFBMEIsRUFBRTtZQUN0RSxRQUFRLEVBQUUsSUFBSTtZQUNkLElBQUksRUFBRSxJQUFJO1NBQ1gsQ0FBQyxDQUFDLGlCQUFpQixDQUFDO1FBQ3JCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDNUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUN4RCxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzFDLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDOUMsQ0FBQzs7Z0JBcERGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQiwrTkFBMkM7b0JBRTNDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBVFEsV0FBVztnQkFKWCxRQUFROzs7MkJBaUJkLEtBQUs7OEJBR0wsS0FBSzsyQkFFTCxLQUFLOzhCQUdMLEtBQUs7O0lBb0NSLHlCQUFDO0NBQUEsQUFyREQsSUFxREM7U0EvQ1ksa0JBQWtCOzs7SUFDN0IsMkNBQW1COztJQUVuQixzQ0FDUzs7SUFFVCx5Q0FDb0I7O0lBQ3BCLHNDQUNpQjs7SUFFakIseUNBQ29COztJQUVwQix3Q0FBbUM7O0lBQ25DLHFDQUE2Qjs7Ozs7SUFHM0IseUNBQWtDOzs7OztJQUNsQywwQ0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPbkluaXQsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmdiTW9kYWwgfSBmcm9tICdAbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcCc7XG5cbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIE9yZGVyRW50cnkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vYWRkZWQtdG8tY2FydC1kaWFsb2cvYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkLXRvLWNhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLXRvLWNhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtdG8tY2FydC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVG9DYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbW9kYWxJbnN0YW5jZTogYW55O1xuXG4gIEBJbnB1dCgpXG4gIGljb25Pbmx5O1xuXG4gIEBJbnB1dCgpXG4gIHByb2R1Y3RDb2RlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHF1YW50aXR5OiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgbWF4UXVhbnRpdHk6IG51bWJlcjtcblxuICBjYXJ0RW50cnkkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+O1xuICBsb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBtb2RhbFNlcnZpY2U6IE5nYk1vZGFsXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAodGhpcy5wcm9kdWN0Q29kZSkge1xuICAgICAgdGhpcy5sb2FkZWQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRMb2FkZWQoKTtcbiAgICAgIHRoaXMuY2FydEVudHJ5JCA9IHRoaXMuY2FydFNlcnZpY2UuZ2V0RW50cnkodGhpcy5wcm9kdWN0Q29kZSk7XG4gICAgfVxuICB9XG5cbiAgYWRkVG9DYXJ0KCkge1xuICAgIGlmICghdGhpcy5wcm9kdWN0Q29kZSB8fCB0aGlzLnF1YW50aXR5IDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5vcGVuTW9kYWwoKTtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLmFkZEVudHJ5KHRoaXMucHJvZHVjdENvZGUsIHRoaXMucXVhbnRpdHkpO1xuICB9XG5cbiAgcHJpdmF0ZSBvcGVuTW9kYWwoKSB7XG4gICAgdGhpcy5tb2RhbEluc3RhbmNlID0gdGhpcy5tb2RhbFNlcnZpY2Uub3BlbihBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgY2VudGVyZWQ6IHRydWUsXG4gICAgICBzaXplOiAnbGcnLFxuICAgIH0pLmNvbXBvbmVudEluc3RhbmNlO1xuICAgIHRoaXMubW9kYWxJbnN0YW5jZS5lbnRyeSQgPSB0aGlzLmNhcnRFbnRyeSQ7XG4gICAgdGhpcy5tb2RhbEluc3RhbmNlLmNhcnQkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRBY3RpdmUoKTtcbiAgICB0aGlzLm1vZGFsSW5zdGFuY2UubG9hZGVkJCA9IHRoaXMubG9hZGVkJDtcbiAgICB0aGlzLm1vZGFsSW5zdGFuY2UucXVhbnRpdHkgPSB0aGlzLnF1YW50aXR5O1xuICB9XG59XG4iXX0=