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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLXRvLWNhcnQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9hZGQtdG8tY2FydC9hZGQtdG8tY2FydC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsS0FBSyxFQUVMLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJdEQsT0FBTyxFQUFFLFdBQVcsRUFBZ0IsTUFBTSxpQkFBaUIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSx1REFBdUQsQ0FBQztBQUVuRztJQXVCRSw0QkFDWSxXQUF3QixFQUMxQixZQUFzQjtRQURwQixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBVTtJQUM3QixDQUFDOzs7O0lBRUoscUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMvRDtJQUNILENBQUM7Ozs7SUFFRCxzQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUMzQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDN0QsQ0FBQzs7Ozs7SUFFTyxzQ0FBUzs7OztJQUFqQjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEVBQUU7WUFDdEUsUUFBUSxFQUFFLElBQUk7WUFDZCxJQUFJLEVBQUUsSUFBSTtTQUNYLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQztRQUNyQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzVDLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDeEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUMxQyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQzlDLENBQUM7O2dCQXBERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsK05BQTJDO29CQUUzQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7aUJBQ2hEOzs7O2dCQVRRLFdBQVc7Z0JBSlgsUUFBUTs7OzJCQWlCZCxLQUFLOzhCQUdMLEtBQUs7MkJBRUwsS0FBSzs4QkFHTCxLQUFLOztJQW9DUix5QkFBQztDQUFBLEFBckRELElBcURDO1NBL0NZLGtCQUFrQjs7O0lBQzdCLDJDQUFtQjs7SUFFbkIsc0NBQ1M7O0lBRVQseUNBQ29COztJQUNwQixzQ0FDaUI7O0lBRWpCLHlDQUNvQjs7SUFFcEIsd0NBQXFDOztJQUNyQyxxQ0FBNkI7Ozs7O0lBRzNCLHlDQUFrQzs7Ozs7SUFDbEMsMENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5nYk1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmltcG9ydCB7IENhcnRTZXJ2aWNlLCBVSU9yZGVyRW50cnkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudCB9IGZyb20gJy4vYWRkZWQtdG8tY2FydC1kaWFsb2cvYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkLXRvLWNhcnQnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkLXRvLWNhcnQuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9hZGQtdG8tY2FydC5jb21wb25lbnQuc2NzcyddLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQWRkVG9DYXJ0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbW9kYWxJbnN0YW5jZTogYW55O1xuXG4gIEBJbnB1dCgpXG4gIGljb25Pbmx5O1xuXG4gIEBJbnB1dCgpXG4gIHByb2R1Y3RDb2RlOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIHF1YW50aXR5OiBudW1iZXI7XG5cbiAgQElucHV0KClcbiAgbWF4UXVhbnRpdHk6IG51bWJlcjtcblxuICBjYXJ0RW50cnkkOiBPYnNlcnZhYmxlPFVJT3JkZXJFbnRyeT47XG4gIGxvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcml2YXRlIG1vZGFsU2VydmljZTogTmdiTW9kYWxcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGlmICh0aGlzLnByb2R1Y3RDb2RlKSB7XG4gICAgICB0aGlzLmxvYWRlZCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldExvYWRlZCgpO1xuICAgICAgdGhpcy5jYXJ0RW50cnkkID0gdGhpcy5jYXJ0U2VydmljZS5nZXRFbnRyeSh0aGlzLnByb2R1Y3RDb2RlKTtcbiAgICB9XG4gIH1cblxuICBhZGRUb0NhcnQoKSB7XG4gICAgaWYgKCF0aGlzLnByb2R1Y3RDb2RlIHx8IHRoaXMucXVhbnRpdHkgPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLm9wZW5Nb2RhbCgpO1xuICAgIHRoaXMuY2FydFNlcnZpY2UuYWRkRW50cnkodGhpcy5wcm9kdWN0Q29kZSwgdGhpcy5xdWFudGl0eSk7XG4gIH1cblxuICBwcml2YXRlIG9wZW5Nb2RhbCgpIHtcbiAgICB0aGlzLm1vZGFsSW5zdGFuY2UgPSB0aGlzLm1vZGFsU2VydmljZS5vcGVuKEFkZGVkVG9DYXJ0RGlhbG9nQ29tcG9uZW50LCB7XG4gICAgICBjZW50ZXJlZDogdHJ1ZSxcbiAgICAgIHNpemU6ICdsZycsXG4gICAgfSkuY29tcG9uZW50SW5zdGFuY2U7XG4gICAgdGhpcy5tb2RhbEluc3RhbmNlLmVudHJ5JCA9IHRoaXMuY2FydEVudHJ5JDtcbiAgICB0aGlzLm1vZGFsSW5zdGFuY2UuY2FydCQgPSB0aGlzLmNhcnRTZXJ2aWNlLmdldEFjdGl2ZSgpO1xuICAgIHRoaXMubW9kYWxJbnN0YW5jZS5sb2FkZWQkID0gdGhpcy5sb2FkZWQkO1xuICAgIHRoaXMubW9kYWxJbnN0YW5jZS5xdWFudGl0eSA9IHRoaXMucXVhbnRpdHk7XG4gIH1cbn1cbiJdfQ==