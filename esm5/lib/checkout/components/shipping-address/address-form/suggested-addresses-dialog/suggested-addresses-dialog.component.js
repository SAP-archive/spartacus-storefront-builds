/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { ICON_TYPE } from '../../../../../../cms-components/misc/icon/index';
import { ModalService } from '../../../../../../shared/components/modal/index';
var SuggestedAddressDialogComponent = /** @class */ (function () {
    function SuggestedAddressDialogComponent(modalService) {
        this.modalService = modalService;
        this.iconTypes = ICON_TYPE;
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
    /**
     * @param {?=} reason
     * @return {?}
     */
    SuggestedAddressDialogComponent.prototype.closeModal = /**
     * @param {?=} reason
     * @return {?}
     */
    function (reason) {
        this.modalService.closeActiveModal(reason);
    };
    SuggestedAddressDialogComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-suggested-addresses-dialog',
                    template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'checkoutAddress.verifyYourAddress' | cxTranslate }}\n  </div>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n    <span aria-hidden=\"true\">\n      <cx-icon [type]=\"iconTypes.TIMES\"></cx-icon>\n    </span>\n  </button>\n</div>\n<div class=\"cx-dialog-body modal-body\" ngForm>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"cx-dialog-info col-md-12\">\n        <p>\n          {{ 'checkoutAddress.ensureAccuracySuggestChange' | cxTranslate }}\n          {{ 'checkoutAddress.chooseAddressToUse' | cxTranslate }}\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"cx-dialog-options col-md-12\">\n        <div\n          class=\"form-check\"\n          *ngFor=\"let suggestedAddress of suggestedAddresses; let i = index\"\n        >\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"suggestedAddress\"\n            [id]=\"'suggested-addresses--suggested-' + i\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            [for]=\"'suggested-addresses--suggested-' + i\"\n          >\n            {{ 'checkoutAddress.suggestedAddress' | cxTranslate }}\n            {{ suggestedAddresses?.length > 1 ? i + 1 : null }}\n          </label>\n          <div class=\"cx-dialog-suggested\">\n            {{ suggestedAddress?.firstName }} {{ suggestedAddress?.lastName\n            }}<br />\n            {{ suggestedAddress?.line1 }}<br />\n            <span>{{ suggestedAddress?.line2 }}</span\n            ><br />\n            {{ suggestedAddress?.town }} {{ suggestedAddress?.region?.isocode\n            }}<br />\n            {{ suggestedAddress?.postalCode }}\n          </div>\n        </div>\n        <div class=\"form-check\">\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"enteredAddress\"\n            id=\"suggested-addresses--entered\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            for=\"suggested-addresses--entered\"\n          >\n            {{ 'checkoutAddress.enteredAddress' | cxTranslate }}\n          </label>\n          <div class=\"cx-dialog-entered\">\n            {{ enteredAddress?.firstName }} {{ enteredAddress?.lastName }}<br />\n            {{ enteredAddress?.line1 }}<br />\n            <span>{{ enteredAddress?.line2 }}</span\n            ><br />\n            {{ enteredAddress?.town }} {{ enteredAddress?.region?.isocode\n            }}<br />\n            {{ enteredAddress?.postalCode }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"cx-dialog-actions col-sm-12 col-md-6 offset-md-6\">\n        <button\n          class=\"btn btn-secondary btn-block cx-dialog-buttons\"\n          (click)=\"closeModal()\"\n        >\n          {{ 'checkoutAddress.editAddress' | cxTranslate }}\n        </button>\n        <button\n          cxAutoFocus\n          class=\"btn btn-primary btn-block cx-dialog-buttons\"\n          (click)=\"closeModal(selectedAddress)\"\n        >\n          {{ 'checkoutAddress.saveAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    SuggestedAddressDialogComponent.ctorParameters = function () { return [
        { type: ModalService }
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
    SuggestedAddressDialogComponent.prototype.iconTypes;
    /** @type {?} */
    SuggestedAddressDialogComponent.prototype.suggestedAddresses;
    /** @type {?} */
    SuggestedAddressDialogComponent.prototype.enteredAddress;
    /** @type {?} */
    SuggestedAddressDialogComponent.prototype.selectedAddress;
    /**
     * @type {?}
     * @protected
     */
    SuggestedAddressDialogComponent.prototype.modalService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL2NoZWNrb3V0L2NvbXBvbmVudHMvc2hpcHBpbmctYWRkcmVzcy9hZGRyZXNzLWZvcm0vc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cvc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEdBRU4sTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGtEQUFrRCxDQUFDO0FBQzdFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUUvRTtJQVFFLHlDQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUZoRCxjQUFTLEdBQUcsU0FBUyxDQUFDO0lBRTZCLENBQUM7Ozs7SUFTcEQsa0RBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTTtZQUNuRCxDQUFDLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztZQUM1QixDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMxQixDQUFDOzs7OztJQUVELG9EQUFVOzs7O0lBQVYsVUFBVyxNQUFZO1FBQ3JCLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Z0JBekJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsK0JBQStCO29CQUN6QyxzL0dBQTBEO29CQUMxRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBTlEsWUFBWTs7O3FDQVlsQixLQUFLO2lDQUVMLEtBQUs7O0lBY1Isc0NBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXJCWSwrQkFBK0I7OztJQUMxQyxvREFBc0I7O0lBSXRCLDZEQUM4Qjs7SUFDOUIseURBQ3dCOztJQUV4QiwwREFBeUI7Ozs7O0lBUGIsdURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2luZGV4JztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgU3VnZ2VzdGVkQWRkcmVzc0RpYWxvZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbW9kYWxTZXJ2aWNlOiBNb2RhbFNlcnZpY2UpIHt9XG5cbiAgQElucHV0KClcbiAgc3VnZ2VzdGVkQWRkcmVzc2VzOiBBZGRyZXNzW107XG4gIEBJbnB1dCgpXG4gIGVudGVyZWRBZGRyZXNzOiBBZGRyZXNzO1xuXG4gIHNlbGVjdGVkQWRkcmVzczogQWRkcmVzcztcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnNlbGVjdGVkQWRkcmVzcyA9IHRoaXMuc3VnZ2VzdGVkQWRkcmVzc2VzLmxlbmd0aFxuICAgICAgPyB0aGlzLnN1Z2dlc3RlZEFkZHJlc3Nlc1swXVxuICAgICAgOiB0aGlzLmVudGVyZWRBZGRyZXNzO1xuICB9XG5cbiAgY2xvc2VNb2RhbChyZWFzb24/OiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm1vZGFsU2VydmljZS5jbG9zZUFjdGl2ZU1vZGFsKHJlYXNvbik7XG4gIH1cbn1cbiJdfQ==