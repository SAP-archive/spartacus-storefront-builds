/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, ViewChild, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { tap } from 'rxjs/operators';
import { CartService } from '@spartacus/core';
import { ICON_TYPES } from '../../../../../cms-components/misc/icon/index';
var AddedToCartDialogComponent = /** @class */ (function () {
    function AddedToCartDialogComponent(activeModal, cartService, fb) {
        this.activeModal = activeModal;
        this.cartService = cartService;
        this.fb = fb;
        this.iconTypes = ICON_TYPES;
        this.quantity = 0;
        this.firstUpdate = true;
        this.form = this.fb.group({});
    }
    /**
     * @return {?}
     */
    AddedToCartDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.loaded$ = this.loaded$.pipe(tap(function (res) {
            if (_this.previousLoaded !== res) {
                _this.finishedLoading = _this.previousLoaded === false;
                _this.previousLoaded = res;
            }
        }));
        this.entry$ = this.entry$.pipe(tap(function (entry) {
            if (entry) {
                var code = entry.product.code;
                if (!_this.form.controls[code]) {
                    _this.form.setControl(code, _this.createEntryFormGroup(entry));
                }
                else {
                    /** @type {?} */
                    var entryForm = (/** @type {?} */ (_this.form.controls[code]));
                    entryForm.controls.quantity.setValue(entry.quantity);
                }
                _this.form.markAsPristine();
                // Announce in header if Add To Cart button has incremented product
                _this.showItemIncrLabel = _this.firstUpdate && entry.quantity > 1;
                // Any updates after the first will be flagged as false
                _this.firstUpdate = false;
            }
        }));
    };
    /**
     * @return {?}
     */
    AddedToCartDialogComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (this.finishedLoading) {
            this.finishedLoading = false;
            /** @type {?} */
            var elementToFocus = (/** @type {?} */ (this.dialog.nativeElement.querySelector("[ngbAutofocus]")));
            if (elementToFocus) {
                elementToFocus.focus();
            }
        }
    };
    /**
     * @param {?} item
     * @return {?}
     */
    AddedToCartDialogComponent.prototype.removeEntry = /**
     * @param {?} item
     * @return {?}
     */
    function (item) {
        this.cartService.removeEntry(item);
        delete this.form.controls[item.product.code];
        this.activeModal.dismiss('Removed');
    };
    /**
     * @param {?} __0
     * @return {?}
     */
    AddedToCartDialogComponent.prototype.updateEntry = /**
     * @param {?} __0
     * @return {?}
     */
    function (_a) {
        var item = _a.item, updatedQuantity = _a.updatedQuantity;
        this.cartService.updateEntry(item.entryNumber, updatedQuantity);
    };
    /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    AddedToCartDialogComponent.prototype.createEntryFormGroup = /**
     * @private
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        return this.fb.group({
            entryNumber: entry.entryNumber,
            quantity: entry.quantity,
        });
    };
    AddedToCartDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-added-to-cart-dialog',
                    template: "<div #dialog>\n  <!-- Modal Header -->\n  <ng-container *ngIf=\"(loaded$ | async) as loaded; else loading\">\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{\n          (showItemIncrLabel\n            ? 'addToCart.itemsIncrementedInYourCart'\n            : 'addToCart.itemsAddedToYourCart') | cxTranslate\n        }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\" *ngIf=\"(entry$ | async) as entry\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"cx-dialog-item col-sm-12 col-md-6\">\n          <cx-cart-item\n            [item]=\"entry\"\n            [compact]=\"true\"\n            [isReadOnly]=\"false\"\n            [parent]=\"form.controls[entry.product.code]\"\n            [cartIsLoading]=\"!loaded\"\n            (remove)=\"removeEntry($event)\"\n            (update)=\"updateEntry($event)\"\n          ></cx-cart-item>\n        </div>\n        <!-- Separator -->\n        <div\n          class=\"cx-dialog-separator col-sm-12 d-xs-block d-sm-block d-md-none\"\n        ></div>\n        <!-- Total container -->\n        <div class=\"cx-dialog-actions col-sm-12 col-md-6\">\n          <div class=\"cx-dialog-total\" *ngIf=\"(cart$ | async) as cart\">\n            <div>\n              {{\n                'cartItems.cartTotal'\n                  | cxTranslate: { count: cart.deliveryItemsQuantity }\n              }}\n            </div>\n            <div>{{ cart.totalPrice.formattedValue }}</div>\n          </div>\n          <!-- Actions -->\n          <div class=\"cx-dialog-buttons\">\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'cart' } | cxUrl\"\n              class=\"btn btn-primary\"\n              ngbAutoFocus\n              (click)=\"!form.dirty && activeModal.dismiss('View Cart click')\"\n              >{{ 'addToCart.viewCart' | cxTranslate }}</a\n            >\n            <a\n              [class.disabled]=\"form.dirty\"\n              [routerLink]=\"{ cxRoute: 'checkout' } | cxUrl\"\n              class=\"btn btn-secondary\"\n              (click)=\"\n                !form.dirty && activeModal.dismiss('Proceed To Checkout click')\n              \"\n              >{{ 'addToCart.proceedToCheckout' | cxTranslate }}</a\n            >\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <ng-template #loading>\n    <div class=\"cx-dialog-header modal-header\">\n      <div class=\"cx-dialog-title modal-title\">\n        {{ 'addToCart.updatingCart' | cxTranslate }}\n      </div>\n      <button\n        type=\"button\"\n        class=\"close\"\n        aria-label=\"Close\"\n        (click)=\"activeModal.dismiss('Cross click')\"\n      >\n        <span aria-hidden=\"true\">\n          <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n        </span>\n      </button>\n    </div>\n    <!-- Modal Body -->\n    <div class=\"cx-dialog-body modal-body\">\n      <div class=\"cx-dialog-row\">\n        <div class=\"col-sm-12\"><cx-spinner></cx-spinner></div>\n      </div>\n    </div>\n  </ng-template>\n</div>\n"
                }] }
    ];
    /** @nocollapse */
    AddedToCartDialogComponent.ctorParameters = function () { return [
        { type: NgbActiveModal },
        { type: CartService },
        { type: FormBuilder }
    ]; };
    AddedToCartDialogComponent.propDecorators = {
        dialog: [{ type: ViewChild, args: ['dialog', { read: ElementRef },] }]
    };
    return AddedToCartDialogComponent;
}());
export { AddedToCartDialogComponent };
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
    AddedToCartDialogComponent.prototype.cartLoaded$;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.quantity;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.previousLoaded;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.finishedLoading;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.firstUpdate;
    /** @type {?} */
    AddedToCartDialogComponent.prototype.showItemIncrLabel;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkZWQtdG8tY2FydC1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY2FydC9hZGQtdG8tY2FydC9hZGRlZC10by1jYXJ0LWRpYWxvZy9hZGRlZC10by1jYXJ0LWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBQ1QsVUFBVSxFQUVWLFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEQsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBRTVELE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNyQyxPQUFPLEVBQUUsV0FBVyxFQUFvQixNQUFNLGlCQUFpQixDQUFDO0FBQ2hFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUUzRTtJQXVCRSxvQ0FDUyxXQUEyQixFQUN4QixXQUF3QixFQUN4QixFQUFlO1FBRmxCLGdCQUFXLEdBQVgsV0FBVyxDQUFnQjtRQUN4QixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBckIzQixjQUFTLEdBQUcsVUFBVSxDQUFDO1FBT3ZCLGFBQVEsR0FBRyxDQUFDLENBQUM7UUFHYixnQkFBVyxHQUFHLElBQUksQ0FBQztRQU1uQixTQUFJLEdBQWMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFNakMsQ0FBQzs7OztJQUVKLDZDQUFROzs7SUFBUjtRQUFBLGlCQTZCQztRQTVCQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM5QixHQUFHLENBQUMsVUFBQSxHQUFH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O0lBRXZCLDRDQUErQjs7SUFDL0IsMkNBQXdCOztJQUN4Qiw2Q0FBNkI7O0lBQzdCLGlEQUFpQzs7SUFFakMsOENBQWE7O0lBQ2Isb0RBQXdCOztJQUN4QixxREFBeUI7O0lBQ3pCLGlEQUFtQjs7SUFDbkIsdURBQTJCOztJQUUzQiw0Q0FDbUI7O0lBRW5CLDBDQUFvQzs7SUFHbEMsaURBQWtDOzs7OztJQUNsQyxpREFBa0M7Ozs7O0lBQ2xDLHdDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE5nYkFjdGl2ZU1vZGFsIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ2FydFNlcnZpY2UsIENhcnQsIE9yZGVyRW50cnkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgSUNPTl9UWVBFUyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFkZGVkLXRvLWNhcnQtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FkZGVkLXRvLWNhcnQtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQWRkZWRUb0NhcnREaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0NoZWNrZWQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEVTO1xuXG4gIGVudHJ5JDogT2JzZXJ2YWJsZTxPcmRlckVudHJ5PjtcbiAgY2FydCQ6IE9ic2VydmFibGU8Q2FydD47XG4gIGxvYWRlZCQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIGNhcnRMb2FkZWQkOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuXG4gIHF1YW50aXR5ID0gMDtcbiAgcHJldmlvdXNMb2FkZWQ6IGJvb2xlYW47XG4gIGZpbmlzaGVkTG9hZGluZzogYm9vbGVhbjtcbiAgZmlyc3RVcGRhdGUgPSB0cnVlO1xuICBzaG93SXRlbUluY3JMYWJlbDogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkKCdkaWFsb2cnLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSlcbiAgZGlhbG9nOiBFbGVtZW50UmVmO1xuXG4gIGZvcm06IEZvcm1Hcm91cCA9IHRoaXMuZmIuZ3JvdXAoe30pO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBhY3RpdmVNb2RhbDogTmdiQWN0aXZlTW9kYWwsXG4gICAgcHJvdGVjdGVkIGNhcnRTZXJ2aWNlOiBDYXJ0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZmI6IEZvcm1CdWlsZGVyXG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRlZCQgPSB0aGlzLmxvYWRlZCQucGlwZShcbiAgICAgIHRhcChyZXMgPT4ge1xuICAgICAgICBpZiAodGhpcy5wcmV2aW91c0xvYWRlZCAhPT0gcmVzKSB7XG4gICAgICAgICAgdGhpcy5maW5pc2hlZExvYWRpbmcgPSB0aGlzLnByZXZpb3VzTG9hZGVkID09PSBmYWxzZTtcbiAgICAgICAgICB0aGlzLnByZXZpb3VzTG9hZGVkID0gcmVzO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG5cbiAgICB0aGlzLmVudHJ5JCA9IHRoaXMuZW50cnkkLnBpcGUoXG4gICAgICB0YXAoZW50cnkgPT4ge1xuICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICBjb25zdCB7IGNvZGUgfSA9IGVudHJ5LnByb2R1Y3Q7XG4gICAgICAgICAgaWYgKCF0aGlzLmZvcm0uY29udHJvbHNbY29kZV0pIHtcbiAgICAgICAgICAgIHRoaXMuZm9ybS5zZXRDb250cm9sKGNvZGUsIHRoaXMuY3JlYXRlRW50cnlGb3JtR3JvdXAoZW50cnkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZW50cnlGb3JtID0gdGhpcy5mb3JtLmNvbnRyb2xzW2NvZGVdIGFzIEZvcm1Hcm91cDtcbiAgICAgICAgICAgIGVudHJ5Rm9ybS5jb250cm9scy5xdWFudGl0eS5zZXRWYWx1ZShlbnRyeS5xdWFudGl0eSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuZm9ybS5tYXJrQXNQcmlzdGluZSgpO1xuXG4gICAgICAgICAgLy8gQW5ub3VuY2UgaW4gaGVhZGVyIGlmIEFkZCBUbyBDYXJ0IGJ1dHRvbiBoYXMgaW5jcmVtZW50ZWQgcHJvZHVjdFxuICAgICAgICAgIHRoaXMuc2hvd0l0ZW1JbmNyTGFiZWwgPSB0aGlzLmZpcnN0VXBkYXRlICYmIGVudHJ5LnF1YW50aXR5ID4gMTtcbiAgICAgICAgICAvLyBBbnkgdXBkYXRlcyBhZnRlciB0aGUgZmlyc3Qgd2lsbCBiZSBmbGFnZ2VkIGFzIGZhbHNlXG4gICAgICAgICAgdGhpcy5maXJzdFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuZmluaXNoZWRMb2FkaW5nKSB7XG4gICAgICB0aGlzLmZpbmlzaGVkTG9hZGluZyA9IGZhbHNlO1xuICAgICAgY29uc3QgZWxlbWVudFRvRm9jdXMgPSB0aGlzLmRpYWxvZy5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgIGBbbmdiQXV0b2ZvY3VzXWBcbiAgICAgICkgYXMgSFRNTEVsZW1lbnQ7XG4gICAgICBpZiAoZWxlbWVudFRvRm9jdXMpIHtcbiAgICAgICAgZWxlbWVudFRvRm9jdXMuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZW1vdmVFbnRyeShpdGVtKTogdm9pZCB7XG4gICAgdGhpcy5jYXJ0U2VydmljZS5yZW1vdmVFbnRyeShpdGVtKTtcbiAgICBkZWxldGUgdGhpcy5mb3JtLmNvbnRyb2xzW2l0ZW0ucHJvZHVjdC5jb2RlXTtcbiAgICB0aGlzLmFjdGl2ZU1vZGFsLmRpc21pc3MoJ1JlbW92ZWQnKTtcbiAgfVxuXG4gIHVwZGF0ZUVudHJ5KHsgaXRlbSwgdXBkYXRlZFF1YW50aXR5IH0pOiB2b2lkIHtcbiAgICB0aGlzLmNhcnRTZXJ2aWNlLnVwZGF0ZUVudHJ5KGl0ZW0uZW50cnlOdW1iZXIsIHVwZGF0ZWRRdWFudGl0eSk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZUVudHJ5Rm9ybUdyb3VwKGVudHJ5KTogRm9ybUdyb3VwIHtcbiAgICByZXR1cm4gdGhpcy5mYi5ncm91cCh7XG4gICAgICBlbnRyeU51bWJlcjogZW50cnkuZW50cnlOdW1iZXIsXG4gICAgICBxdWFudGl0eTogZW50cnkucXVhbnRpdHksXG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==