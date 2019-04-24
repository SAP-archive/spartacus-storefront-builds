/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { CartService } from '@spartacus/core';
export class AddedToCartDialogComponent {
    /**
     * @param {?} activeModal
     * @param {?} cartService
     * @param {?} fb
     */
    constructor(activeModal, cartService, fb) {
        this.activeModal = activeModal;
        this.cartService = cartService;
        this.fb = fb;
        this.quantity = 0;
        this.form = this.fb.group({});
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loaded$ = this.loaded$.pipe(tap(res => {
            if (this.previousLoaded !== res) {
                this.finishedLoading = this.previousLoaded === false;
                this.previousLoaded = res;
            }
        }));
        this.entry$ = this.entry$.pipe(tap(entry => {
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
            }
        }));
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this.finishedLoading) {
            this.finishedLoading = false;
            /** @type {?} */
            const elementToFocus = (/** @type {?} */ (this.dialog.nativeElement.querySelector(`[ngbAutofocus]`)));
            if (elementToFocus) {
                elementToFocus.focus();
            }
        }
    }
    /**
     * @param {?} item
     * @return {?}
     */
    removeEntry(item) {
        this.cartService.removeEntry(item);
        delete this.form.controls[item.product.code];
        this.activeModal.dismiss('Removed');
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
                template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"(loaded$ | async) as loaded; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.itemsAddedToYourCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"(entry$ | async) as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [isReadOnly]=\"false\"\n            [parent]=\"form.controls[entry.product.code]\"\n            [cartIsLoading]=\"!loaded\"\n            (remove)=\"removeEntry($event)\"\n            (update)=\"updateEntry($event)\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"(cart$ | async) as cart\">\n            <div>\n              {{\n                'cartItems.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n            <div>{{ cart.totalPrice.formattedValue }}</div>\n          </div>\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ route: ['cart'] } | cxTranslateUrl\"\n              class=\"btn btn-primary\"\n              ngbAutoFocus\n              (click)=\"!form.dirty && activeModal.dismiss('View Cart click')\"\n              >{{ 'addToCart.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ route: ['checkout'] } | cxTranslateUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"\n                !form.dirty && activeModal.dismiss('Proceed To Checkout click')\n              \"\n              >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n",
                styles: ["/*!\n  SPARTA v0.1\n  This file is for theme configuration. These variables are used in global and component CSS files.\n\n  You can:\n    1) Set new values for Bootstrap variables - https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss\n    2) Set new values for cxbase variables - cxbase/_variables.scss\n    3) Set new values for component variables - app/__/_.scss\n  You cannot:\n    1) Add new variables\n*//*!\n  CXBASE VARIABLES\n  This is NOT a theme.\n\n  This file should include ONLY new variables that Bootstrap does not provide.\n  For example, Bootstrap does not have a variable for semi font weight.\n\n  Same case for directionality.\n\n  Also be aware of items that should be configurable.\n  The Sparta buttons use uppercase type but future themes may want normal case\n  so a variable was created to make this available for other themes.\n\n*/.cx-dialog-header{padding:var(--cx-padding,2rem 1.75rem .85rem);border-width:var(--cx-border-width,0)}.cx-dialog-title{font-size:var(--cx-font-size,1.375rem);font-weight:var(--cx-g-font-weight-semi);line-height:var(--cx-line-height,1.22222)}.cx-dialog-body{padding:var(--cx-padding,1rem 1rem 0 1rem)}@media (max-width:767.98px){.cx-dialog-body{padding:var(--cx-padding,0)}}.cx-dialog-row{margin:var(--cx-margin,0);display:var(--cx-display,flex);padding:var(--cx-padding,0 .875rem 2.875rem);max-width:var(--cx-max-width,100%);flex-wrap:var(--cx-flex-wrap,wrap)}@media (max-width:767.98px){.cx-dialog-row{flex-direction:var(--cx-flex-direction,column);padding:var(--cx-padding,0)}.cx-dialog-item{padding:var(--cx-padding,2rem)}}.cx-dialog-separator{border-width:var(--cx-border-width,1px 0 0 0);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}.cx-dialog-actions{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column);padding:var(--cx-padding,0 1rem 0 2.5rem);border-width:var(--cx-border-width,0 0 0 1px);border-style:var(--cx-border-style,solid);border-color:var(--cx-border-color,var(--cx-g-color-light))}@media (max-width:767.98px){.cx-dialog-actions{border-width:var(--cx-border-width,0);padding:var(--cx-padding,1.875rem)}}.cx-dialog-total{font-size:var(--cx-font-size,1.125rem);font-weight:var(--cx-g-font-weight-bold);line-height:var(--cx-line-height,1.22222);display:var(--cx-display,flex);justify-content:var(--cx-justify-content,space-between);padding:var(--cx-padding,0 0 1.25rem 0)}.cx-dialog-buttons{display:var(--cx-display,flex);flex-direction:var(--cx-flex-direction,column)}.cx-dialog-buttons .btn-primary{margin:var(--cx-margin,0 0 .625rem 0)}"]
            }] }
];
/** @nocollapse */
AddedToCartDialogComponent.ctorParameters = () => [
    { type: NgbActiveModal },
    { type: CartService },
    { type: FormBuilder }
];
AddedToCartDialogComponent.propDecorators = {
    dialog: [{ type: ViewChild, args: ['dialog', { read: ElementRef },] }]
};
if (false) {
    /** @type {?} */
    AddedToCartDialogComponent.prototype.entry$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.cart$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.loaded$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.cartLoaded$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.quantity;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.previousLoaded;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.finishedLoading;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.dialog;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.form;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.activeModal;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9hZGQtdG8tY2FydC9hZGRlZC10by1jYXJ0LWRpYWxvZy9hZGRlZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTVELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsV0FBVyxFQUFvQixNQUFNLGlCQUFpQixDQUFDO0FBT2hFLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQWVyQyxZQUNTLFdBQTJCLEVBQ3hCLFdBQXdCLEVBQ3hCLEVBQWU7UUFGbEIsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO1FBQ3hCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFaM0IsYUFBUSxHQUFHLENBQUMsQ0FBQztRQU9iLFNBQUksR0FBYyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQU1qQyxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzlCLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNSLElBQUksSUFBSSxDQUFDLGNBQWMsS0FBSyxHQUFHLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLGNBQWMsS0FBSyxLQUFLLENBQUM7Z0JBQ3JELElBQUksQ0FBQyxjQUFjLEdBQUcsR0FBRyxDQUFDO2FBQzNCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztRQUVGLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQzVCLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNWLElBQUksS0FBSyxFQUFFO3NCQUNILEVBQUUsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLE9BQU87Z0JBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUM5RDtxQkFBTTs7MEJBQ0MsU0FBUyxHQUFHLG1CQUFBLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFhO29CQUN2RCxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN0RDtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO2FBQzVCO1FBQ0gsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxrQkFBa0I7UUFDaEIsSUFBSSxJQUFJLENBQUMsZUFBZSxFQUFFO1lBQ3hCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDOztrQkFDdkIsY0FBYyxHQUFHLG1CQUFBLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FDNUQsZ0JBQWdCLENBQ2pCLEVBQWU7WUFDaEIsSUFBSSxjQUFjLEVBQUU7Z0JBQ2xCLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzthQUN4QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsSUFBSTtRQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ25DLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUN0QyxDQUFDOzs7OztJQUVELFdBQVcsQ0FBQyxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUU7UUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQztJQUNsRSxDQUFDOzs7Ozs7SUFFTyxvQkFBb0IsQ0FBQyxLQUFLO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDbkIsV0FBVyxFQUFFLEtBQUssQ0FBQyxXQUFXO1lBQzlCLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUTtTQUN6QixDQUFDLENBQUM7SUFDTCxDQUFDOzs7WUEvRUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLDhxR0FBb0Q7O2FBRXJEOzs7O1lBVFEsY0FBYztZQUdkLFdBQVc7WUFKWCxXQUFXOzs7cUJBcUJqQixTQUFTLFNBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs7OztJQVR6Qyw0Q0FBK0I7O0lBQy9CLDJDQUF3Qjs7SUFDeEIsNkNBQTZCOztJQUM3QixpREFBaUM7O0lBRWpDLDhDQUFhOztJQUNiLG9EQUF3Qjs7SUFDeEIscURBQXlCOztJQUV6Qiw0Q0FDbUI7O0lBRW5CLDBDQUFvQzs7SUFHbEMsaURBQWtDOzs7OztJQUNsQyxpREFBa0M7Ozs7O0lBQ2xDLHdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIENhcnQsIE9yZGVyRW50cnkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hZGRlZC10by1jYXJ0LWRpYWxvZycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGRlZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FkZGVkLXRvLWNhcnQtZGlhbG9nLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEFkZGVkVG9DYXJ0RGlhbG9nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdDaGVja2VkIHtcbiAgZW50cnkkOiBPYnNlcnZhYmxlPE9yZGVyRW50cnk+O1xuICBjYXJ0JDogT2JzZXJ2YWJsZTxDYXJ0PjtcbiAgbG9hZGVkJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgY2FydExvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG5cbiAgcXVhbnRpdHkgPSAwO1xuICBwcmV2aW91c0xvYWRlZDogYm9vbGVhbjtcbiAgZmluaXNoZWRMb2FkaW5nOiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGQoJ2RpYWxvZycsIHsgcmVhZDogRWxlbWVudFJlZiB9KVxuICBkaWFsb2c6IEVsZW1lbnRSZWY7XG5cbiAgZm9ybTogRm9ybUdyb3VwID0gdGhpcy5mYi5ncm91cCh7fSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGFjdGl2ZU1vZGFsOiBOZ2JBY3RpdmVNb2RhbCxcbiAgICBwcm90ZWN0ZWQgY2FydFNlcnZpY2U6IENhcnRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBmYjogRm9ybUJ1aWxkZXJcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMubG9hZGVkJCA9IHRoaXMubG9hZGVkJC5waXBlKFxuICAgICAgdGFwKHJlcyA9PiB7XG4gICAgICAgIGlmICh0aGlzLnByZXZpb3VzTG9hZGVkICE9PSByZXMpIHtcbiAgICAgICAgICB0aGlzLmZpbmlzaGVkTG9hZGluZyA9IHRoaXMucHJldmlvdXNMb2FkZWQgPT09IGZhbHNlO1xuICAgICAgICAgIHRoaXMucHJldmlvdXNMb2FkZWQgPSByZXM7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcblxuICAgIHRoaXMuZW50cnkkID0gdGhpcy5lbnRyeSQucGlwZShcbiAgICAgIHRhcChlbnRyeSA9PiB7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIGNvbnN0IHsgY29kZSB9ID0gZW50cnkucHJvZHVjdDtcbiAgICAgICAgICBpZiAoIXRoaXMuZm9ybS5jb250cm9sc1tjb2RlXSkge1xuICAgICAgICAgICAgdGhpcy5mb3JtLnNldENvbnRyb2woY29kZSwgdGhpcy5jcmVhdGVFbnRyeUZvcm1Hcm91cChlbnRyeSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBlbnRyeUZvcm0gPSB0aGlzLmZvcm0uY29udHJvbHNbY29kZV0gYXMgRm9ybUdyb3VwO1xuICAgICAgICAgICAgZW50cnlGb3JtLmNvbnRyb2xzLnF1YW50aXR5LnNldFZhbHVlKGVudHJ5LnF1YW50aXR5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5mb3JtLm1hcmtBc1ByaXN0aW5lKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICBpZiAodGhpcy5maW5pc2hlZExvYWRpbmcpIHtcbiAgICAgIHRoaXMuZmluaXNoZWRMb2FkaW5nID0gZmFsc2U7XG4gICAgICBjb25zdCBlbGVtZW50VG9Gb2N1cyA9IHRoaXMuZGlhbG9nLm5hdGl2ZUVsZW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgYFtuZ2JBdXRvZm9jdXNdYFxuICAgICAgKSBhcyBIVE1MRWxlbWVudDtcbiAgICAgIGlmIChlbGVtZW50VG9Gb2N1cykge1xuICAgICAgICBlbGVtZW50VG9Gb2N1cy5mb2N1cygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUVudHJ5KGl0ZW0pOiB2b2lkIHtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLnJlbW92ZUVudHJ5KGl0ZW0pO1xuICAgIGRlbGV0ZSB0aGlzLmZvcm0uY29udHJvbHNbaXRlbS5wcm9kdWN0LmNvZGVdO1xuICAgIHRoaXMuYWN0aXZlTW9kYWwuZGlzbWlzcygnUmVtb3ZlZCcpO1xuICB9XG5cbiAgdXBkYXRlRW50cnkoeyBpdGVtLCB1cGRhdGVkUXVhbnRpdHkgfSk6IHZvaWQge1xuICAgIHRoaXMuY2FydFNlcnZpY2UudXBkYXRlRW50cnkoaXRlbS5lbnRyeU51bWJlciwgdXBkYXRlZFF1YW50aXR5KTtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlRW50cnlGb3JtR3JvdXAoZW50cnkpOiBGb3JtR3JvdXAge1xuICAgIHJldHVybiB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIGVudHJ5TnVtYmVyOiBlbnRyeS5lbnRyeU51bWJlcixcbiAgICAgIHF1YW50aXR5OiBlbnRyeS5xdWFudGl0eSxcbiAgICB9KTtcbiAgfVxufVxuIl19