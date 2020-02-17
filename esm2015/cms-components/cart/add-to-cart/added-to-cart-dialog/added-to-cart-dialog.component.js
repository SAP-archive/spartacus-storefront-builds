/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CartService, PromotionLocation, } from '@spartacus/core';
import { filter, map, startWith, switchMap, tap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/index';
import { ModalService } from '../../../../shared/components/modal/index';
import { PromotionService } from '../../../../shared/services/promotion/promotion.service';
export class AddedToCartDialogComponent {
    /**
     * @param {?} modalService
     * @param {?} cartService
     * @param {?=} promotionService
     */
    constructor(modalService, cartService, promotionService) {
        this.modalService = modalService;
        this.cartService = cartService;
        this.promotionService = promotionService;
        this.iconTypes = ICON_TYPE;
        this.promotionLocation = PromotionLocation.ActiveCart;
        this.quantity = 0;
        this.modalIsOpen = false;
        this.form = new FormGroup({});
    }
    /**
     * Returns an observable formControl with the quantity of the cartEntry,
     * but also updates the entry in case of a changed value.
     * The quantity can be set to zero in order to remove the entry.
     * @return {?}
     */
    getQuantityControl() {
        if (!this.quantityControl$) {
            this.quantityControl$ = this.entry$.pipe(filter((/**
             * @param {?} e
             * @return {?}
             */
            e => !!e)), map((/**
             * @param {?} entry
             * @return {?}
             */
            entry => this.getFormControl(entry))), switchMap((/**
             * @return {?}
             */
            () => this.form.valueChanges.pipe(
            // tslint:disable-next-line:deprecation
            startWith(null), tap((/**
             * @param {?} valueChange
             * @return {?}
             */
            valueChange => {
                if (valueChange) {
                    this.cartService.updateEntry(valueChange.entryNumber, valueChange.quantity);
                    if (valueChange.quantity === 0) {
                        this.dismissModal('Removed');
                    }
                }
                else {
                    this.form.markAsPristine();
                }
            }))))), map((/**
             * @return {?}
             */
            () => (/** @type {?} */ (this.form.get('quantity'))))));
        }
        return this.quantityControl$;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.orderPromotions$ = this.promotionService.getOrderPromotions(this.promotionLocation);
    }
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    getFormControl(entry) {
        if (!this.form.get('quantity')) {
            /** @type {?} */
            const quantity = new FormControl(entry.quantity, { updateOn: 'blur' });
            this.form.addControl('quantity', quantity);
            /** @type {?} */
            const entryNumber = new FormControl(entry.entryNumber);
            this.form.addControl('entryNumber', entryNumber);
        }
        return (/** @type {?} */ (this.form.get('quantity')));
    }
    /**
     * @param {?=} reason
     * @return {?}
     */
    dismissModal(reason) {
        this.modalService.dismissActiveModal(reason);
    }
}
AddedToCartDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-added-to-cart-dialog',
                template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"(loaded$ | async) || modalIsOpen; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{\n          (increment\n            ? 'addToCart.itemsIncrementedInYourCart'\n            : 'addToCart.itemsAddedToYourCart') | cxTranslate\n        }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"entry$ | async as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [quantityControl]=\"getQuantityControl() | async\"\n            [promotionLocation]=\"promotionLocation\"\n            (view)=\"dismissModal('Product selected')\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"cart$ | async as cart\">\n            <div>\n              {{\n                'cartItems.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n\n            <div>{{ cart.subTotal?.formattedValue }}</div>\n          </div>\n\n          <!-- Promotions -->\n          <ng-container *cxFeatureLevel=\"'1.5'\">\n            <div\n              class=\"cx-dialog-promotions\"\n              *ngIf=\"orderPromotions$ | async as orderPromotions\"\n            >\n              <cx-promotions [promotions]=\"orderPromotions\"></cx-promotions>\n            </div>\n          </ng-container>\n\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n              class=\"btn btn-primary\"\n              cxAutoFocus\n              (click)=\"!form.dirty && dismissModal('View Cart click')\"\n              >{{ 'addToCart.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"!form.dirty && dismissModal('Proceed To Checkout click')\"\n              >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"dismissModal('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
            }] }
];
/** @nocollapse */
AddedToCartDialogComponent.ctorParameters = () => [
    { type: ModalService },
    { type: CartService },
    { type: PromotionService }
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
    AddedToCartDialogComponent.prototype.orderPromotions$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.promotionLocation;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.quantity;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.modalIsOpen;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.dialog;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    AddedToCartDialogComponent.prototype.quantityControl$;
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
    AddedToCartDialogComponent.prototype.promotionService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2FydC9hZGQtdG8tY2FydC9hZGRlZC10by1jYXJ0LWRpYWxvZy9hZGRlZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFVLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFFTCxXQUFXLEVBRVgsaUJBQWlCLEdBRWxCLE1BQU0saUJBQWlCLENBQUM7QUFFekIsT0FBTyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDdkUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJDQUEyQyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBTTNGLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQWtDckMsWUFDWSxZQUEwQixFQUMxQixXQUF3QixFQUN4QixnQkFBbUM7UUFGbkMsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFDeEIscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFtQjtRQXBDL0MsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQU90QixzQkFBaUIsR0FBc0IsaUJBQWlCLENBQUMsVUFBVSxDQUFDO1FBRXBFLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFDYixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUtwQixTQUFJLEdB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RW5CLDBDQUFvQzs7Ozs7SUFFcEMsc0RBQWtEOzs7OztJQWlCaEQsa0RBQW9DOzs7OztJQUNwQyxpREFBa0M7Ozs7O0lBQ2xDLHNEQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBDYXJ0LFxuICBDYXJ0U2VydmljZSxcbiAgT3JkZXJFbnRyeSxcbiAgUHJvbW90aW9uTG9jYXRpb24sXG4gIFByb21vdGlvblJlc3VsdCxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGZpbHRlciwgbWFwLCBzdGFydFdpdGgsIHN3aXRjaE1hcCwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcbmltcG9ydCB7IFByb21vdGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9zaGFyZWQvc2VydmljZXMvcHJvbW90aW9uL3Byb21vdGlvbi5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWRkZWQtdG8tY2FydC1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBBZGRlZFRvQ2FydERpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBlbnRyeSQ6IE9ic2VydmFibGU8T3JkZXJFbnRyeT47XG4gIGNhcnQkOiBPYnNlcnZhYmxlPENhcnQ+O1xuICBsb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBpbmNyZW1lbnQ6IGJvb2xlYW47XG4gIG9yZGVyUHJvbW90aW9ucyQ6IE9ic2VydmFibGU8UHJvbW90aW9uUmVzdWx0W10+O1xuICBwcm9tb3Rpb25Mb2NhdGlvbjogUHJvbW90aW9uTG9jYXRpb24gPSBQcm9tb3Rpb25Mb2NhdGlvbi5BY3RpdmVDYXJ0O1xuXG4gIHF1YW50aXR5ID0gMDtcbiAgbW9kYWxJc09wZW4gPSBmYWxzZTtcblxuICBAVmlld0NoaWxkKCdkaWFsb2cnLCB7IHN0YXRpYzogZmFsc2UsIHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgZGlhbG9nOiBFbGVtZW50UmVmO1xuXG4gIGZvcm06IEZvcm1Hcm91cCA9IG5ldyBGb3JtR3JvdXAoe30pO1xuXG4gIHByaXZhdGUgcXVhbnRpdHlDb250cm9sJDogT2JzZXJ2YWJsZTxGb3JtQ29udHJvbD47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTp1bmlmaWVkLXNpZ25hdHVyZXNcbiAgICBwcm9tb3Rpb25TZXJ2aWNlOiBQcm9tb3Rpb25TZXJ2aWNlXG4gICk7XG5cbiAgLyoqXG4gICAqIEBkZXByZWNhdGVkIFNpbmNlIDEuNVxuICAgKiBVc2UgcHJvbW90aW9uU2VydmljZSBpbnN0ZWFkIG9mIHRoZSBwcm9tb3Rpb24gaW5wdXRzLlxuICAgKiBSZW1vdmUgaXNzdWU6ICM1NjcwXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihtb2RhbFNlcnZpY2U6IE1vZGFsU2VydmljZSwgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcHJvbW90aW9uU2VydmljZT86IFByb21vdGlvblNlcnZpY2VcbiAgKSB7fVxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIGZvcm1Db250cm9sIHdpdGggdGhlIHF1YW50aXR5IG9mIHRoZSBjYXJ0RW50cnksXG4gICAqIGJ1dCBhbHNvIHVwZGF0ZXMgdGhlIGVudHJ5IGluIGNhc2Ugb2YgYSBjaGFuZ2VkIHZhbHVlLlxuICAgKiBUaGUgcXVhbnRpdHkgY2FuIGJlIHNldCB0byB6ZXJvIGluIG9yZGVyIHRvIHJlbW92ZSB0aGUgZW50cnkuXG4gICAqL1xuICBnZXRRdWFudGl0eUNvbnRyb2woKTogT2JzZXJ2YWJsZTxGb3JtQ29udHJvbD4ge1xuICAgIGlmICghdGhpcy5xdWFudGl0eUNvbnRyb2wkKSB7XG4gICAgICB0aGlzLnF1YW50aXR5Q29udHJvbCQgPSB0aGlzLmVudHJ5JC5waXBlKFxuICAgICAgICBmaWx0ZXIoZSA9PiAhIWUpLFxuICAgICAgICBtYXAoZW50cnkgPT4gdGhpcy5nZXRGb3JtQ29udHJvbChlbnRyeSkpLFxuICAgICAgICBzd2l0Y2hNYXAoKCkgPT5cbiAgICAgICAgICB0aGlzLmZvcm0udmFsdWVDaGFuZ2VzLnBpcGUoXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6ZGVwcmVjYXRpb25cbiAgICAgICAgICAgIHN0YXJ0V2l0aChudWxsKSxcbiAgICAgICAgICAgIHRhcCh2YWx1ZUNoYW5nZSA9PiB7XG4gICAgICAgICAgICAgIGlmICh2YWx1ZUNoYW5nZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FydFNlcnZpY2UudXBkYXRlRW50cnkoXG4gICAgICAgICAgICAgICAgICB2YWx1ZUNoYW5nZS5lbnRyeU51bWJlcixcbiAgICAgICAgICAgICAgICAgIHZhbHVlQ2hhbmdlLnF1YW50aXR5XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWVDaGFuZ2UucXVhbnRpdHkgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIHRoaXMuZGlzbWlzc01vZGFsKCdSZW1vdmVkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9ybS5tYXJrQXNQcmlzdGluZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKSxcbiAgICAgICAgbWFwKCgpID0+IDxGb3JtQ29udHJvbD50aGlzLmZvcm0uZ2V0KCdxdWFudGl0eScpKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucXVhbnRpdHlDb250cm9sJDtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMub3JkZXJQcm9tb3Rpb25zJCA9IHRoaXMucHJvbW90aW9uU2VydmljZS5nZXRPcmRlclByb21vdGlvbnMoXG4gICAgICB0aGlzLnByb21vdGlvbkxvY2F0aW9uXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Rm9ybUNvbnRyb2woZW50cnk6IE9yZGVyRW50cnkpOiBGb3JtQ29udHJvbCB7XG4gICAgaWYgKCF0aGlzLmZvcm0uZ2V0KCdxdWFudGl0eScpKSB7XG4gICAgICBjb25zdCBxdWFudGl0eSA9IG5ldyBGb3JtQ29udHJvbChlbnRyeS5xdWFudGl0eSwgeyB1cGRhdGVPbjogJ2JsdXInIH0pO1xuICAgICAgdGhpcy5mb3JtLmFkZENvbnRyb2woJ3F1YW50aXR5JywgcXVhbnRpdHkpO1xuXG4gICAgICBjb25zdCBlbnRyeU51bWJlciA9IG5ldyBGb3JtQ29udHJvbChlbnRyeS5lbnRyeU51bWJlcik7XG4gICAgICB0aGlzLmZvcm0uYWRkQ29udHJvbCgnZW50cnlOdW1iZXInLCBlbnRyeU51bWJlcik7XG4gICAgfVxuICAgIHJldHVybiA8Rm9ybUNvbnRyb2w+dGhpcy5mb3JtLmdldCgncXVhbnRpdHknKTtcbiAgfVxuXG4gIGRpc21pc3NNb2RhbChyZWFzb24/OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5kaXNtaXNzQWN0aXZlTW9kYWwocmVhc29uKTtcbiAgfVxufVxuIl19