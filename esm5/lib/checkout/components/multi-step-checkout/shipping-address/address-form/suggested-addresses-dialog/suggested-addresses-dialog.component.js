/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ChangeDetectionStrategy, Input, } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
var SuggestedAddressDialogComponent = /** @class */ (function () {
    function SuggestedAddressDialogComponent(activeModal) {
        this.activeModal = activeModal;
    }
    /**
     * @return {?}
     */
    SuggestedAddressDialogComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selectedAddress = this.suggestedAddresses.length
            ? this.suggestedAddresses[0]
            : this.enteredAddress;
    };
    SuggestedAddressDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-suggested-addresses-dialog',
                    template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'checkoutAddress.verifyYourAddress' | cxTranslate }}\n  </div>\n  <button\n    type=\"button\"\n    class=\"close\"\n    aria-label=\"Close\"\n    (click)=\"activeModal.close()\"\n  >\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"cx-dialog-body modal-body\" ngForm>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"cx-dialog-info col-md-12\">\n        <p>\n          {{ 'checkoutAddress.ensureAccuracySuggestChange' | cxTranslate }}\n          {{ 'checkoutAddress.chooseAddressToUse' | cxTranslate }}\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"cx-dialog-options col-md-12\">\n        <div\n          class=\"form-check\"\n          *ngFor=\"let suggestedAddress of suggestedAddresses; let i = index\"\n        >\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"suggestedAddress\"\n            [id]=\"'suggested-addresses--suggested-' + i\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            [for]=\"'suggested-addresses--suggested-' + i\"\n          >\n            {{ 'checkoutAddress.suggestedAddress' | cxTranslate }}\n            {{ suggestedAddresses?.length > 1 ? i + 1 : null }}\n          </label>\n          <div class=\"cx-dialog-suggested\">\n            {{ suggestedAddress?.firstName }} {{ suggestedAddress?.lastName\n            }}<br />\n            {{ suggestedAddress?.line1 }}<br />\n            <span>{{ suggestedAddress?.line2 }}</span\n            ><br />\n            {{ suggestedAddress?.town }} {{ suggestedAddress?.region?.isocode\n            }}<br />\n            {{ suggestedAddress?.postalCode }}\n          </div>\n        </div>\n        <div class=\"form-check\">\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"enteredAddress\"\n            id=\"suggested-addresses--entered\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            for=\"suggested-addresses--entered\"\n          >\n            {{ 'checkoutAddress.enteredAddress' | cxTranslate }}\n          </label>\n          <div class=\"cx-dialog-entered\">\n            {{ enteredAddress?.firstName }} {{ enteredAddress?.lastName }}<br />\n            {{ enteredAddress?.line1 }}<br />\n            <span>{{ enteredAddress?.line2 }}</span\n            ><br />\n            {{ enteredAddress?.town }} {{ enteredAddress?.region?.isocode\n            }}<br />\n            {{ enteredAddress?.postalCode }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"cx-dialog-actions col-sm-12 col-md-6 offset-md-6\">\n        <button\n          class=\"btn btn-secondary btn-block cx-dialog-buttons\"\n          (click)=\"activeModal.close()\"\n        >\n          {{ 'common.editAddress' | cxTranslate }}\n        </button>\n        <button\n          ngbAutofocus\n          class=\"btn btn-primary btn-block cx-dialog-buttons\"\n          (click)=\"activeModal.close(selectedAddress)\"\n        >\n          {{ 'checkoutAddress.saveAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SuggestedAddressDialogComponent.ctorParameters = function () { return [
        { type: NgbActiveModal }
    ]; };
    SuggestedAddressDialogComponent.propDecorators = {
        suggestedAddresses: [{ type: Input }],
        enteredAddress: [{ type: Input }]
    };
    return SuggestedAddressDialogComponent;
}());
export { SuggestedAddressDialogComponent };
if (false) {
    /** @type {?} */
    SuggestedAddressDialogComponent.prototype.suggestedAddresses;
    /** @type {?} */
    SuggestedAddressDialogComponent.prototype.enteredAddress;
    /** @type {?} */
    SuggestedAddressDialogComponent.prototype.selectedAddress;
    /** @type {?} */
    SuggestedAddressDialogComponent.prototype.activeModal;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NvbXBvbmVudHMvbXVsdGktc3RlcC1jaGVja291dC9zaGlwcGluZy1hZGRyZXNzL2FkZHJlc3MtZm9ybS9zdWdnZXN0ZWQtYWRkcmVzc2VzLWRpYWxvZy9zdWdnZXN0ZWQtYWRkcmVzc2VzLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsdUJBQXVCLEVBQ3ZCLEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJNUQ7SUFNRSx5Q0FBbUIsV0FBMkI7UUFBM0IsZ0JBQVcsR0FBWCxXQUFXLENBQWdCO0lBQUcsQ0FBQzs7OztJQVNsRCxrREFBUTs7O0lBQVI7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNO1lBQ25ELENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzFCLENBQUM7O2dCQW5CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLCtCQUErQjtvQkFDekMscytHQUEwRDtvQkFDMUQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQVJRLGNBQWM7OztxQ0FZcEIsS0FBSztpQ0FFTCxLQUFLOztJQVVSLHNDQUFDO0NBQUEsQUFwQkQsSUFvQkM7U0FmWSwrQkFBK0I7OztJQUcxQyw2REFDOEI7O0lBQzlCLHlEQUN3Qjs7SUFFeEIsMERBQXlCOztJQVBiLHNEQUFrQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIElucHV0LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOZ2JBY3RpdmVNb2RhbCB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcblxuaW1wb3J0IHsgQWRkcmVzcyB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN1Z2dlc3RlZC1hZGRyZXNzZXMtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Z2dlc3RlZC1hZGRyZXNzZXMtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFN1Z2dlc3RlZEFkZHJlc3NEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgYWN0aXZlTW9kYWw6IE5nYkFjdGl2ZU1vZGFsKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHN1Z2dlc3RlZEFkZHJlc3NlczogQWRkcmVzc1tdO1xuICBASW5wdXQoKVxuICBlbnRlcmVkQWRkcmVzczogQWRkcmVzcztcblxuICBzZWxlY3RlZEFkZHJlc3M6IEFkZHJlc3M7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSB0aGlzLnN1Z2dlc3RlZEFkZHJlc3Nlcy5sZW5ndGhcbiAgICAgID8gdGhpcy5zdWdnZXN0ZWRBZGRyZXNzZXNbMF1cbiAgICAgIDogdGhpcy5lbnRlcmVkQWRkcmVzcztcbiAgfVxufVxuIl19