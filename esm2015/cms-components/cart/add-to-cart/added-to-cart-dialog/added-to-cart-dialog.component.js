/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '@spartacus/core';
import { tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
import { ModalService } from '../../../../shared/components/modal/index';
export class AddedToCartDialogComponent {
    /**
     * @param {?} modalService
     * @param {?} cartService
     * @param {?} fb
     */
    constructor(modalService, cartService, fb) {
        this.modalService = modalService;
        this.cartService = cartService;
        this.fb = fb;
        this.iconTypes = ICON_TYPE;
        this.modalIsOpen = false;
        this.quantity = 0;
        this.form = this.fb.group({});
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.entry$ = this.entry$.pipe(tap((/**
         * @param {?} entry
         * @return {?}
         */
        entry => {
            if (entry) {
                const { code } = entry.product;
                if (!this.form.controls[code]) {
                    this.form.setControl(code, this.createEntryFormGroup(entry));
                }
                else {
                    /** @type {?} */
                    const entryForm = (/** @type {?} */ (this.form.controls[code]));
                    entryForm.controls.quantity.setValue(entry.quantity);
                }
                this.form.markAsPristine();
                if (!this.modalIsOpen) {
                    this.modalIsOpen = true;
                }
            }
        })));
    }
    /**
     * @param {?=} reason
     * @return {?}
     */
    dismissModal(reason) {
        this.modalService.dismissActiveModal(reason);
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeEntry(item) {
        this.cartService.removeEntry(item);
        delete this.form.controls[item.product.code];
        this.dismissModal('Removed');
    }
    /**
     * @param {?} __0
     * @return {?}
     */
    updateEntry({ item, updatedQuantity }) {
        this.cartService.updateEntry(item.entryNumber, updatedQuantity);
    }
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    createEntryFormGroup(entry) {
        return this.fb.group({
            entryNumber: entry.entryNumber,
            quantity: entry.quantity,
        });
    }
}
AddedToCartDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-added-to-cart-dialog',
                template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"(loaded$ | async) || modalIsOpen; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{\n          (increment\n            ? 'addToCart.itemsIncrementedInYourCart'\n            : 'addToCart.itemsAddedToYourCart') | cxTranslate\n        }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"entry$ | async as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [isReadOnly]=\"false\"\n            [parent]=\"form.controls[entry.product.code]\"\n            [cartIsLoading]=\"form.dirty\"\n            (remove)=\"removeEntry($event)\"\n            (update)=\"updateEntry($event)\"\n            (view)=\"dismissModal('Product selected')\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"cart$ | async as cart\">\n            <div>\n              {{\n                'cartItems.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n            <div>{{ cart.totalPrice?.formattedValue }}</div>\n          </div>\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n              class=\"btn btn-primary\"\n              cxAutoFocus\n              (click)=\"!form.dirty && dismissModal('View Cart click')\"\n              >{{ 'addToCart.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"!form.dirty && dismissModal('Proceed To Checkout click')\"\n              >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
            }] }
];
/** @nocollapse */
AddedToCartDialogComponent.ctorParameters = () => [
    { type: ModalService },
    { type: CartService },
    { type: FormBuilder }
];
AddedToCartDialogComponent.propDecorators = {
    dialog: [{ type: ViewChild, args: ['dialog', { static: false, read: ElementRef },] }]
};
if (false) {
    /** @type {?} */
    AddedToCartDialogComponent.prototype.iconTypes;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.entry$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.cart$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.loaded$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.increment;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.modalIsOpen;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.quantity;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.dialog;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.form;
    /**
     * @type {?}
     * @protected
     */
    AddedToCartDialogComponent.prototype.modalService;
    /**
     * @type {?}
     * @protected
     */
    AddedToCartDialogComponent.prototype.cartService;
    /**
     * @type {?}
     * @protected
     */
    AddedToCartDialogComponent.prototype.fb;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9hZGQtdG8tY2FydC9hZGRlZC10by1jYXJ0LWRpYWxvZy9hZGRlZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFRLFdBQVcsRUFBYyxNQUFNLGlCQUFpQixDQUFDO0FBRWhFLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBTXpFLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQWdCckMsWUFDWSxZQUEwQixFQUMxQixXQUF3QixFQUN4QixFQUFlO1FBRmYsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIsT0FBRSxHQUFGLEVBQUUsQ0FBYTtRQWxCM0IsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQU10QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVwQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBS2IsU0FBSSxHQUFjLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBTWpDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FDNUIsR0FBRzs7OztRQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ1YsSUFBSSxLQUFLLEVBQUU7c0JBQ0gsRUFBRSxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsT0FBTztnQkFDOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7aUJBQzlEO3FCQUFNOzswQkFDQyxTQUFTLEdBQUcsbUJBQUEsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQWE7b0JBQ3ZELFNBQVMsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3REO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDekI7YUFDRjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxNQUFZO1FBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUMsa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBZ0I7UUFDMUIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkMsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsRUFBRSxJQUFJLEVBQUUsZUFBZSxFQUFFO1FBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUM7SUFDbEUsQ0FBQzs7Ozs7O0lBRU8sb0JBQW9CLENBQUMsS0FBaUI7UUFDNUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNuQixXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsUUFBUSxFQUFFLEtBQUssQ0FBQyxRQUFRO1NBQ3pCLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWpFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHlCQUF5QjtnQkFDbkMsMDNHQUFvRDthQUNyRDs7OztZQUxRLFlBQVk7WUFKTixXQUFXO1lBRGpCLFdBQVc7OztxQkFzQmpCLFNBQVMsU0FBQyxRQUFRLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Ozs7SUFWeEQsK0NBQXNCOztJQUV0Qiw0Q0FBK0I7O0lBQy9CLDJDQUF3Qjs7SUFDeEIsNkNBQTZCOztJQUM3QiwrQ0FBbUI7O0lBQ25CLGlEQUFvQjs7SUFFcEIsOENBQWE7O0lBRWIsNENBQ21COztJQUVuQiwwQ0FBb0M7Ozs7O0lBR2xDLGtEQUFvQzs7Ozs7SUFDcEMsaURBQWtDOzs7OztJQUNsQyx3Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgQ2FydCwgQ2FydFNlcnZpY2UsIE9yZGVyRW50cnkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkZWQtdG8tY2FydC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBlbnRyeSQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeT47XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBsb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBpbmNyZW1lbnQ6IGJvb2xlYW47XG4gIG1vZGFsSXNPcGVuID0gZmFsc2U7XG5cbiAgcXVhbnRpdHkgPSAwO1xuXG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZycsIHsgc3RhdGljOiBmYWxzZSwgcmVhZDogRWxlbWVudFJlZiB9KVxuICBkaWFsb2c6IEVsZW1lbnRSZWY7XG5cbiAgZm9ybTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7fSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBjYXJ0U2VydmljZTogQ2FydFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGZiOiBGb3JtQnVpbGRlclxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5lbnRyeSQgPSB0aGlzLmVudHJ5JC5waXBlKFxuICAgICAgdGFwKGVudHJ5ID0+IHtcbiAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgY29uc3QgeyBjb2RlIH0gPSBlbnRyeS5wcm9kdWN0O1xuICAgICAgICAgIGlmICghdGhpcy5mb3JtLmNvbnRyb2xzW2NvZGVdKSB7XG4gICAgICAgICAgICB0aGlzLmZvcm0uc2V0Q29udHJvbChjb2RlLCB0aGlzLmNyZWF0ZUVudHJ5Rm9ybUdyb3VwKGVudHJ5KSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGVudHJ5Rm9ybSA9IHRoaXMuZm9ybS5jb250cm9sc1tjb2RlXSBhcyBGb3JtR3JvdXA7XG4gICAgICAgICAgICBlbnRyeUZvcm0uY29udHJvbHMucXVhbnRpdHkuc2V0VmFsdWUoZW50cnkucXVhbnRpdHkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLmZvcm0ubWFya0FzUHJpc3RpbmUoKTtcbiAgICAgICAgICBpZiAoIXRoaXMubW9kYWxJc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMubW9kYWxJc09wZW4gPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZGlzbWlzc01vZGFsKHJlYXNvbj86IGFueSk6IHZvaWQge1xuICAgIHRoaXMubW9kYWxTZXJ2aWNlLmRpc21pc3NBY3RpdmVNb2RhbChyZWFzb24pO1xuICB9XG5cbiAgcmVtb3ZlRW50cnkoaXRlbTogT3JkZXJFbnRyeSk6IHZvaWQge1xuICAgIHRoaXMuY2FydFNlcnZpY2UucmVtb3ZlRW50cnkoaXRlbSk7XG4gICAgZGVsZXRlIHRoaXMuZm9ybS5jb250cm9sc1tpdGVtLnByb2R1Y3QuY29kZV07XG4gICAgdGhpcy5kaXNtaXNzTW9kYWwoJ1JlbW92ZWQnKTtcbiAgfVxuXG4gIHVwZGF0ZUVudHJ5KHsgaXRlbSwgdXBkYXRlZFF1YW50aXR5IH0pOiB2b2lkIHtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLnVwZGF0ZUVudHJ5KGl0ZW0uZW50cnlOdW1iZXIsIHVwZGF0ZWRRdWFudGl0eSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUVudHJ5Rm9ybUdyb3VwKGVudHJ5OiBPcmRlckVudHJ5KTogRm9ybUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5mYi5ncm91cCh7XG4gICAgICBlbnRyeU51bWJlcjogZW50cnkuZW50cnlOdW1iZXIsXG4gICAgICBxdWFudGl0eTogZW50cnkucXVhbnRpdHksXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==