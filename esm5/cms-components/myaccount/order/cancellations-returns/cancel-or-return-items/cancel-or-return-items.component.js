/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { OrderCancelOrReturnService } from '../cancel-or-return.service';
var CancelOrReturnItemsComponent = /** @class */ (function () {
    function CancelOrReturnItemsComponent(formBuilder, cancelOrReturnService) {
        this.formBuilder = formBuilder;
        this.cancelOrReturnService = cancelOrReturnService;
        this.confirmRequest = false;
        this.cancelOrder = true;
        this.confirm = new EventEmitter();
        this.disableConfirmBtn = true;
    }
    /**
     * @return {?}
     */
    CancelOrReturnItemsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.form = this.formBuilder.group({
            entryInput: this.formBuilder.array([]),
        });
        this.inputsControl = (/** @type {?} */ (this.form.get('entryInput')));
        this.entries.forEach((/**
         * @param {?} entry
         * @return {?}
         */
        function (entry) {
            _this.inputsControl.push(_this.formBuilder.group({
                orderEntryNumber: entry.entryNumber,
                quantity: _this.cancelOrReturnService.getEntryCancelledOrReturnedQty(entry),
            }));
        }));
        this.disableEnableConfirm();
    };
    /**
     * @return {?}
     */
    CancelOrReturnItemsComponent.prototype.setAll = /**
     * @return {?}
     */
    function () {
        for (var i = 0; i < this.entries.length; i++) {
            this.inputsControl.at(i).setValue({
                orderEntryNumber: this.entries[i].entryNumber,
                quantity: this.cancelOrder
                    ? this.entries[i].cancellableQuantity
                    : this.entries[i].returnableQuantity,
            });
        }
        this.disableEnableConfirm();
    };
    /**
     * @return {?}
     */
    CancelOrReturnItemsComponent.prototype.confirmEntryInputs = /**
     * @return {?}
     */
    function () {
        var e_1, _a;
        /** @type {?} */
        var inputs = [];
        try {
            for (var _b = tslib_1.__values(this.form.value.entryInput), _c = _b.next(); !_c.done; _c = _b.next()) {
                var input = _c.value;
                if (input.quantity > 0) {
                    inputs.push(input);
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        this.confirm.emit(inputs);
    };
    /**
     * @return {?}
     */
    CancelOrReturnItemsComponent.prototype.updateQty = /**
     * @return {?}
     */
    function () {
        this.disableEnableConfirm();
    };
    /**
     * @param {?} entry
     * @return {?}
     */
    CancelOrReturnItemsComponent.prototype.getItemPrice = /**
     * @param {?} entry
     * @return {?}
     */
    function (entry) {
        return this.cancelOrReturnService.getCancelledOrReturnedPrice(entry);
    };
    /**
     * @return {?}
     */
    CancelOrReturnItemsComponent.prototype.back = /**
     * @return {?}
     */
    function () {
        this.cancelOrReturnService.backToOrder(this.orderCode);
    };
    /**
     * @protected
     * @return {?}
     */
    CancelOrReturnItemsComponent.prototype.disableEnableConfirm = /**
     * @protected
     * @return {?}
     */
    function () {
        var e_2, _a;
        try {
            for (var _b = tslib_1.__values(this.form.value.entryInput), _c = _b.next(); !_c.done; _c = _b.next()) {
                var input = _c.value;
                if (input.quantity > 0) {
                    this.disableConfirmBtn = false;
                    return;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        this.disableConfirmBtn = true;
    };
    CancelOrReturnItemsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-cancel-or-return-items',
                    template: "<ng-container *ngIf=\"!confirmRequest\">\n  <div class=\"cx-nav row\">\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"disableConfirmBtn\"\n        (click)=\"confirmEntryInputs()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n\n  <button class=\"btn btn-link cx-action-link\" (click)=\"setAll()\">\n    {{ 'orderDetails.cancellationAndReturn.setAll' | cxTranslate }}\n  </button>\n</ng-container>\n\n<div class=\"d-none d-md-block d-lg-block d-xl-block\">\n  <div class=\"cx-item-list-header row\">\n    <div class=\"cx-item-list-desc col-md-5 col-lg-5 col-xl-6\">\n      {{ 'orderDetails.cancellationAndReturn.item' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-price col-md-2 col-lg-2 col-xl-2\">\n      {{ 'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate }}\n    </div>\n    <div\n      *ngIf=\"!confirmRequest\"\n      class=\"cx-item-list-qty col-md-3 col-lg-3 col-xl-2\"\n    >\n      {{ 'orderDetails.cancellationAndReturn.quantity' | cxTranslate }}\n    </div>\n    <div class=\"cx-item-list-qty col-md-2 col-lg-2 col-xl-2\">\n      {{\n        (cancelOrder\n          ? 'orderDetails.cancellationAndReturn.cancelQty'\n          : 'orderDetails.cancellationAndReturn.returnQty') | cxTranslate\n      }}\n    </div>\n    <div\n      *ngIf=\"confirmRequest\"\n      class=\"cx-item-list-total col-md-3 col-lg-3 col-xl-2\"\n    >\n      {{ 'orderDetails.cancellationAndReturn.totalPrice' | cxTranslate }}\n    </div>\n  </div>\n</div>\n\n<div [formGroup]=\"form\">\n  <div formArrayName=\"entryInput\">\n    <div class=\"cx-item-list-row\" *ngFor=\"let item of entries; let i = index\">\n      <div class=\"cx-item-list-items\">\n        <div class=\"row\">\n          <!-- Item Image -->\n          <div class=\"col-2 cx-image-container\">\n            <cx-media\n              [container]=\"item.product.images?.PRIMARY\"\n              format=\"thumbnail\"\n            ></cx-media>\n          </div>\n          <!-- Item Information -->\n          <div class=\"cx-info col-10\">\n            <div class=\"cx-info-container row \">\n              <!-- Item Description -->\n              <div class=\"col-md-3 col-lg-3 col-xl-5\">\n                <div *ngIf=\"item.product.name\" class=\"cx-name\">\n                  {{ item.product.name }}\n                </div>\n                <div *ngIf=\"item.product.code\" class=\"cx-code\">\n                  {{ 'cartItems.id' | cxTranslate }} {{ item.product.code }}\n                </div>\n                <!-- Variants -->\n                <div\n                  *ngFor=\"let variant of item.product.variantOptionQualifiers\"\n                  class=\"cx-property\"\n                >\n                  <div class=\"cx-label\">{{ variant.name }}</div>\n                  <div class=\"cx-value\">{{ variant.value }}</div>\n                </div>\n              </div>\n              <!-- Item Price -->\n              <div\n                *ngIf=\"item.basePrice\"\n                class=\"cx-price col-md-3 col-lg-3 col-xl-2\"\n              >\n                <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n                  {{\n                    'orderDetails.cancellationAndReturn.itemPrice' | cxTranslate\n                  }}\n                </div>\n                <div *ngIf=\"item.basePrice\" class=\"cx-value\">\n                  {{ item.basePrice?.formattedValue }}\n                </div>\n              </div>\n              <!-- item returnable/cancelable Quantity -->\n              <div\n                *ngIf=\"!confirmRequest\"\n                class=\"cx-request-qty col-md-3 col-lg-3 col-xl-3\"\n              >\n                <div\n                  class=\"cx-label d-block d-md-none d-lg-none d-xl-none\"\n                  placement=\"left\"\n                  title=\"{{ 'cartItems.quantityTitle' | cxTranslate }}\"\n                >\n                  {{\n                    'orderDetails.cancellationAndReturn.quantity' | cxTranslate\n                  }}\n                </div>\n                <div class=\"cx-value\">\n                  {{\n                    cancelOrder\n                      ? item.cancellableQuantity\n                      : item.returnableQuantity\n                  }}\n                </div>\n              </div>\n              <!-- Cancel/Return Quantity -->\n              <div class=\"cx-quantity col-md-3 col-lg-3 col-xl-2\">\n                <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n                  {{\n                    (cancelOrder\n                      ? 'orderDetails.cancellationAndReturn.cancelQty'\n                      : 'orderDetails.cancellationAndReturn.returnQty')\n                      | cxTranslate\n                  }}\n                </div>\n                <div [formGroupName]=\"i\">\n                  <cx-item-counter\n                    [step]=\"1\"\n                    [min]=\"0\"\n                    [max]=\"\n                      cancelOrder\n                        ? item.cancellableQuantity\n                        : item.returnableQuantity\n                    \"\n                    [isValueChangeable]=\"!confirmRequest\"\n                    (update)=\"updateQty()\"\n                    formControlName=\"quantity\"\n                  >\n                  </cx-item-counter>\n                </div>\n              </div>\n              <!-- Cancel/Return Total Price -->\n              <div\n                *ngIf=\"confirmRequest\"\n                class=\"cx-total col-md-3 col-lg-3 col-xl-3\"\n              >\n                <div class=\"cx-label d-block d-md-none d-lg-none d-xl-none\">\n                  {{\n                    'orderDetails.cancellationAndReturn.totalPrice'\n                      | cxTranslate\n                  }}\n                </div>\n                <div class=\"cx-value\">\n                  {{ getItemPrice(item)?.formattedValue }}\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-container *ngIf=\"!confirmRequest\">\n  <div class=\"cx-nav row\">\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button class=\"btn btn-block btn-action\" (click)=\"back()\">\n        {{ 'common.back' | cxTranslate }}\n      </button>\n    </div>\n    <div class=\"col-xs-12 col-md-4 col-lg-3\">\n      <button\n        class=\"btn btn-block btn-primary\"\n        [disabled]=\"disableConfirmBtn\"\n        (click)=\"confirmEntryInputs()\"\n      >\n        {{ 'common.continue' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CancelOrReturnItemsComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: OrderCancelOrReturnService }
    ]; };
    CancelOrReturnItemsComponent.propDecorators = {
        entries: [{ type: Input }],
        confirmRequest: [{ type: Input }],
        cancelOrder: [{ type: Input }],
        orderCode: [{ type: Input }],
        confirm: [{ type: Output }]
    };
    return CancelOrReturnItemsComponent;
}());
export { CancelOrReturnItemsComponent };
if (false) {
    /** @type {?} */
    CancelOrReturnItemsComponent.prototype.entries;
    /** @type {?} */
    CancelOrReturnItemsComponent.prototype.confirmRequest;
    /** @type {?} */
    CancelOrReturnItemsComponent.prototype.cancelOrder;
    /** @type {?} */
    CancelOrReturnItemsComponent.prototype.orderCode;
    /** @type {?} */
    CancelOrReturnItemsComponent.prototype.confirm;
    /** @type {?} */
    CancelOrReturnItemsComponent.prototype.form;
    /** @type {?} */
    CancelOrReturnItemsComponent.prototype.inputsControl;
    /** @type {?} */
    CancelOrReturnItemsComponent.prototype.disableConfirmBtn;
    /**
     * @type {?}
     * @private
     */
    CancelOrReturnItemsComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    CancelOrReturnItemsComponent.prototype.cancelOrReturnService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FuY2VsLW9yLXJldHVybi1pdGVtcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9teWFjY291bnQvb3JkZXIvY2FuY2VsbGF0aW9ucy1yZXR1cm5zL2NhbmNlbC1vci1yZXR1cm4taXRlbXMvY2FuY2VsLW9yLXJldHVybi1pdGVtcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBRU4sWUFBWSxFQUNaLHVCQUF1QixHQUN4QixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsV0FBVyxFQUF3QixNQUFNLGdCQUFnQixDQUFDO0FBTW5FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBRXpFO0lBaUJFLHNDQUNVLFdBQXdCLEVBQ3hCLHFCQUFpRDtRQURqRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QiwwQkFBcUIsR0FBckIscUJBQXFCLENBQTRCO1FBWmxELG1CQUFjLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBR2xCLFlBQU8sR0FBRyxJQUFJLFlBQVksRUFBcUMsQ0FBQztRQUkxRSxzQkFBaUIsR0FBRyxJQUFJLENBQUM7SUFLdEIsQ0FBQzs7OztJQUVKLCtDQUFROzs7SUFBUjtRQUFBLGlCQW1CQztRQWxCQyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1lBQ2pDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7U0FDdkMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLGFBQWEsR0FBRyxtQkFBQSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBYSxDQUFDO1FBRTlE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dEZELElBc0ZDO1NBakZZLDRCQUE0Qjs7O0lBQ3ZDLCtDQUErQjs7SUFDL0Isc0RBQWdDOztJQUNoQyxtREFBNEI7O0lBQzVCLGlEQUEyQjs7SUFFM0IsK0NBQTBFOztJQUUxRSw0Q0FBZ0I7O0lBQ2hCLHFEQUF5Qjs7SUFDekIseURBQXlCOzs7OztJQUd2QixtREFBZ0M7Ozs7O0lBQ2hDLDZEQUF5RCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBFdmVudEVtaXR0ZXIsXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIEZvcm1BcnJheSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIE9yZGVyRW50cnksXG4gIENhbmNlbE9yUmV0dXJuUmVxdWVzdEVudHJ5SW5wdXQsXG4gIFByaWNlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT3JkZXJDYW5jZWxPclJldHVyblNlcnZpY2UgfSBmcm9tICcuLi9jYW5jZWwtb3ItcmV0dXJuLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYW5jZWwtb3ItcmV0dXJuLWl0ZW1zJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhbmNlbC1vci1yZXR1cm4taXRlbXMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2FuY2VsT3JSZXR1cm5JdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIEBJbnB1dCgpIGVudHJpZXM6IE9yZGVyRW50cnlbXTtcbiAgQElucHV0KCkgY29uZmlybVJlcXVlc3QgPSBmYWxzZTtcbiAgQElucHV0KCkgY2FuY2VsT3JkZXIgPSB0cnVlO1xuICBASW5wdXQoKSBvcmRlckNvZGU6IHN0cmluZztcblxuICBAT3V0cHV0KCkgY29uZmlybSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dFtdPigpO1xuXG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgaW5wdXRzQ29udHJvbDogRm9ybUFycmF5O1xuICBkaXNhYmxlQ29uZmlybUJ0biA9IHRydWU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmb3JtQnVpbGRlcjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBjYW5jZWxPclJldHVyblNlcnZpY2U6IE9yZGVyQ2FuY2VsT3JSZXR1cm5TZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgIGVudHJ5SW5wdXQ6IHRoaXMuZm9ybUJ1aWxkZXIuYXJyYXkoW10pLFxuICAgIH0pO1xuXG4gICAgdGhpcy5pbnB1dHNDb250cm9sID0gdGhpcy5mb3JtLmdldCgnZW50cnlJbnB1dCcpIGFzIEZvcm1BcnJheTtcblxuICAgIHRoaXMuZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgIHRoaXMuaW5wdXRzQ29udHJvbC5wdXNoKFxuICAgICAgICB0aGlzLmZvcm1CdWlsZGVyLmdyb3VwKHtcbiAgICAgICAgICBvcmRlckVudHJ5TnVtYmVyOiBlbnRyeS5lbnRyeU51bWJlcixcbiAgICAgICAgICBxdWFudGl0eTogdGhpcy5jYW5jZWxPclJldHVyblNlcnZpY2UuZ2V0RW50cnlDYW5jZWxsZWRPclJldHVybmVkUXR5KFxuICAgICAgICAgICAgZW50cnlcbiAgICAgICAgICApLFxuICAgICAgICB9KVxuICAgICAgKTtcbiAgICB9KTtcblxuICAgIHRoaXMuZGlzYWJsZUVuYWJsZUNvbmZpcm0oKTtcbiAgfVxuXG4gIHNldEFsbCgpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5pbnB1dHNDb250cm9sLmF0KGkpLnNldFZhbHVlKHtcbiAgICAgICAgb3JkZXJFbnRyeU51bWJlcjogdGhpcy5lbnRyaWVzW2ldLmVudHJ5TnVtYmVyLFxuICAgICAgICBxdWFudGl0eTogdGhpcy5jYW5jZWxPcmRlclxuICAgICAgICAgID8gdGhpcy5lbnRyaWVzW2ldLmNhbmNlbGxhYmxlUXVhbnRpdHlcbiAgICAgICAgICA6IHRoaXMuZW50cmllc1tpXS5yZXR1cm5hYmxlUXVhbnRpdHksXG4gICAgICB9KTtcbiAgICB9XG4gICAgdGhpcy5kaXNhYmxlRW5hYmxlQ29uZmlybSgpO1xuICB9XG5cbiAgY29uZmlybUVudHJ5SW5wdXRzKCk6IHZvaWQge1xuICAgIGNvbnN0IGlucHV0czogQ2FuY2VsT3JSZXR1cm5SZXF1ZXN0RW50cnlJbnB1dFtdID0gW107XG4gICAgZm9yIChjb25zdCBpbnB1dCBvZiB0aGlzLmZvcm0udmFsdWUuZW50cnlJbnB1dCkge1xuICAgICAgaWYgKGlucHV0LnF1YW50aXR5ID4gMCkge1xuICAgICAgICBpbnB1dHMucHVzaChpbnB1dCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuY29uZmlybS5lbWl0KGlucHV0cyk7XG4gIH1cblxuICB1cGRhdGVRdHkoKTogdm9pZCB7XG4gICAgdGhpcy5kaXNhYmxlRW5hYmxlQ29uZmlybSgpO1xuICB9XG5cbiAgZ2V0SXRlbVByaWNlKGVudHJ5OiBPcmRlckVudHJ5KTogUHJpY2Uge1xuICAgIHJldHVybiB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5nZXRDYW5jZWxsZWRPclJldHVybmVkUHJpY2UoZW50cnkpO1xuICB9XG5cbiAgYmFjaygpOiB2b2lkIHtcbiAgICB0aGlzLmNhbmNlbE9yUmV0dXJuU2VydmljZS5iYWNrVG9PcmRlcih0aGlzLm9yZGVyQ29kZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgZGlzYWJsZUVuYWJsZUNvbmZpcm0oKTogdm9pZCB7XG4gICAgZm9yIChjb25zdCBpbnB1dCBvZiB0aGlzLmZvcm0udmFsdWUuZW50cnlJbnB1dCkge1xuICAgICAgaWYgKGlucHV0LnF1YW50aXR5ID4gMCkge1xuICAgICAgICB0aGlzLmRpc2FibGVDb25maXJtQnRuID0gZmFsc2U7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5kaXNhYmxlQ29uZmlybUJ0biA9IHRydWU7XG4gIH1cbn1cbiJdfQ==