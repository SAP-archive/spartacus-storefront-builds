/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, } from '@angular/core';
import { ModalService } from '../../../../../../shared/components/modal/index';
import { ICON_TYPE } from '../../../../../misc/icon/index';
export class SuggestedAddressDialogComponent {
    /**
     * @param {?} modalService
     */
    constructor(modalService) {
        this.modalService = modalService;
        this.iconTypes = ICON_TYPE;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selectedAddress = this.suggestedAddresses.length
            ? this.suggestedAddresses[0]
            : this.enteredAddress;
    }
    /**
     * @param {?=} reason
     * @return {?}
     */
    closeModal(reason) {
        this.modalService.closeActiveModal(reason);
    }
}
SuggestedAddressDialogComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-suggested-addresses-dialog',
                template: "<div class=\"cx-dialog-header modal-header\">\n  <div class=\"cx-dialog-title modal-title\">\n    {{ 'checkoutAddress.verifyYourAddress' | cxTranslate }}\n  </div>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"closeModal()\">\n    <span aria-hidden=\"true\">\n      <cx-icon [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </span>\n  </button>\n</div>\n<div class=\"cx-dialog-body modal-body\" ngForm>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"cx-dialog-info col-md-12\">\n        <p>\n          {{ 'checkoutAddress.ensureAccuracySuggestChange' | cxTranslate }}\n          {{ 'checkoutAddress.chooseAddressToUse' | cxTranslate }}\n        </p>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"cx-dialog-options col-md-12\">\n        <div\n          class=\"form-check\"\n          *ngFor=\"let suggestedAddress of suggestedAddresses; let i = index\"\n        >\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"suggestedAddress\"\n            [id]=\"'suggested-addresses--suggested-' + i\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            [for]=\"'suggested-addresses--suggested-' + i\"\n          >\n            {{ 'checkoutAddress.suggestedAddress' | cxTranslate }}\n            {{ suggestedAddresses?.length > 1 ? i + 1 : null }}\n          </label>\n          <div class=\"cx-dialog-suggested\">\n            {{ suggestedAddress?.firstName }} {{ suggestedAddress?.lastName\n            }}<br />\n            {{ suggestedAddress?.line1 }}<br />\n            <span>{{ suggestedAddress?.line2 }}</span\n            ><br />\n            {{ suggestedAddress?.town }} {{ suggestedAddress?.region?.isocode\n            }}<br />\n            {{ suggestedAddress?.postalCode }}\n          </div>\n        </div>\n        <div class=\"form-check\">\n          <input\n            class=\"form-check-input\"\n            type=\"radio\"\n            name=\"selectedAddress\"\n            [(ngModel)]=\"selectedAddress\"\n            [value]=\"enteredAddress\"\n            id=\"suggested-addresses--entered\"\n          />\n          <label\n            class=\"form-check-label cx-dialog-label\"\n            for=\"suggested-addresses--entered\"\n          >\n            {{ 'checkoutAddress.enteredAddress' | cxTranslate }}\n          </label>\n          <div class=\"cx-dialog-entered\">\n            {{ enteredAddress?.firstName }} {{ enteredAddress?.lastName }}<br />\n            {{ enteredAddress?.line1 }}<br />\n            <span>{{ enteredAddress?.line2 }}</span\n            ><br />\n            {{ enteredAddress?.town }} {{ enteredAddress?.region?.isocode\n            }}<br />\n            {{ enteredAddress?.postalCode }}\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"cx-dialog-actions col-sm-12 col-md-6 offset-md-6\">\n        <button\n          class=\"btn btn-secondary btn-block cx-dialog-buttons\"\n          (click)=\"closeModal()\"\n        >\n          {{ 'checkoutAddress.editAddress' | cxTranslate }}\n        </button>\n        <button\n          cxAutoFocus\n          class=\"btn btn-primary btn-block cx-dialog-buttons\"\n          (click)=\"closeModal(selectedAddress)\"\n        >\n          {{ 'checkoutAddress.saveAddress' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </div>\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
SuggestedAddressDialogComponent.ctorParameters = () => [
    { type: ModalService }
];
SuggestedAddressDialogComponent.propDecorators = {
    suggestedAddresses: [{ type: Input }],
    enteredAddress: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VnZ2VzdGVkLWFkZHJlc3Nlcy1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY2hlY2tvdXQvY29tcG9uZW50cy9zaGlwcGluZy1hZGRyZXNzL2FkZHJlc3MtZm9ybS9zdWdnZXN0ZWQtYWRkcmVzc2VzLWRpYWxvZy9zdWdnZXN0ZWQtYWRkcmVzc2VzLWRpYWxvZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULEtBQUssR0FFTixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTzNELE1BQU0sT0FBTywrQkFBK0I7Ozs7SUFHMUMsWUFBc0IsWUFBMEI7UUFBMUIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFGaEQsY0FBUyxHQUFHLFNBQVMsQ0FBQztJQUU2QixDQUFDOzs7O0lBU3BELFFBQVE7UUFDTixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNO1lBQ25ELENBQUMsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO1lBQzVCLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQzFCLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLE1BQVk7UUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7WUF6QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLHMvR0FBMEQ7Z0JBQzFELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7O1lBUFEsWUFBWTs7O2lDQWFsQixLQUFLOzZCQUVMLEtBQUs7Ozs7SUFOTixvREFBc0I7O0lBSXRCLDZEQUM4Qjs7SUFDOUIseURBQ3dCOztJQUV4QiwwREFBeUI7Ozs7O0lBUGIsdURBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBZGRyZXNzIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE1vZGFsU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uLy4uL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL2luZGV4JztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL21pc2MvaWNvbi9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXN1Z2dlc3RlZC1hZGRyZXNzZXMtZGlhbG9nJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3N1Z2dlc3RlZC1hZGRyZXNzZXMtZGlhbG9nLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFN1Z2dlc3RlZEFkZHJlc3NEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1vZGFsU2VydmljZTogTW9kYWxTZXJ2aWNlKSB7fVxuXG4gIEBJbnB1dCgpXG4gIHN1Z2dlc3RlZEFkZHJlc3NlczogQWRkcmVzc1tdO1xuICBASW5wdXQoKVxuICBlbnRlcmVkQWRkcmVzczogQWRkcmVzcztcblxuICBzZWxlY3RlZEFkZHJlc3M6IEFkZHJlc3M7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zZWxlY3RlZEFkZHJlc3MgPSB0aGlzLnN1Z2dlc3RlZEFkZHJlc3Nlcy5sZW5ndGhcbiAgICAgID8gdGhpcy5zdWdnZXN0ZWRBZGRyZXNzZXNbMF1cbiAgICAgIDogdGhpcy5lbnRlcmVkQWRkcmVzcztcbiAgfVxuXG4gIGNsb3NlTW9kYWwocmVhc29uPzogYW55KTogdm9pZCB7XG4gICAgdGhpcy5tb2RhbFNlcnZpY2UuY2xvc2VBY3RpdmVNb2RhbChyZWFzb24pO1xuICB9XG59XG4iXX0=