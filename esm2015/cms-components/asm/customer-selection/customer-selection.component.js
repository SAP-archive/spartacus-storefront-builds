/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AsmService, GlobalMessageService, GlobalMessageType, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { FormUtils } from '../../../shared/utils/forms/form-utils';
export class CustomerSelectionComponent {
    /**
     * @param {?} fb
     * @param {?} asmService
     * @param {?} globalMessageService
     */
    constructor(fb, asmService, globalMessageService) {
        this.fb = fb;
        this.asmService = asmService;
        this.globalMessageService = globalMessageService;
        this.submitClicked = false;
        this.subscription = new Subscription();
        this.submitEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.form = this.fb.group({
            searchTerm: ['', [Validators.required]],
        });
        this.searchResultsLoading$ = this.asmService.getCustomerSearchResultsLoading();
        this.asmService.customerSearchReset();
        this.subscription.add(this.asmService.getCustomerSearchResults().subscribe((/**
         * @param {?} results
         * @return {?}
         */
        results => {
            this.handleSearchResults(results);
        })));
    }
    /**
     * @private
     * @param {?} results
     * @return {?}
     */
    handleSearchResults(results) {
        if (!!results && results.entries) {
            /** @type {?} */
            const customerHit = results.entries.find((/**
             * @param {?} element
             * @return {?}
             */
            element => element.uid.toLowerCase() ===
                this.form.controls.searchTerm.value.toLowerCase()));
            if (customerHit) {
                this.submitEvent.emit({ customerId: customerHit.customerId });
            }
            else {
                this.globalMessageService.add({
                    key: 'asm.customerSearch.noMatch',
                    params: { uid: this.form.controls.searchTerm.value },
                }, GlobalMessageType.MSG_TYPE_ERROR);
            }
        }
    }
    /**
     * @return {?}
     */
    onSubmit() {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.asmService.customerSearch({
            query: this.form.controls.searchTerm.value,
        });
    }
    /**
     * @param {?} formControlName
     * @return {?}
     */
    isNotValid(formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
CustomerSelectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-customer-selection',
                template: "<ng-container *ngIf=\"!(searchResultsLoading$ | async); else spinner\">\n  <form (submit)=\"onSubmit()\" [formGroup]=\"form\">\n    <div class=\"fd-container\">\n      <div class=\"fd-col--6\">\n        <label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            [class.is-invalid]=\"isNotValid('searchTerm')\"\n            formControlName=\"searchTerm\"\n            placeholder=\"{{\n              'asm.customerSearch.searchTerm.label' | cxTranslate\n            }}\"\n          />\n          <div class=\"invalid-feedback\" *ngIf=\"isNotValid('searchTerm')\">\n            <span>{{\n              'asm.customerSearch.searchTerm.required' | cxTranslate\n            }}</span>\n          </div>\n        </label>\n      </div>\n\n      <div class=\"fd-col--3\">\n        <button\n          type=\"submit\"\n          class=\"fd-button--emphasized fd-button--positive sap-icon--media-play\"\n        >\n          {{ 'asm.customerSearch.submit' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </form>\n</ng-container>\n<ng-template #spinner>\n  <div class=\"sap-spinner\">\n    <div class=\"fd-loading-dots\" aria-hidden=\"false\" aria-label=\"Loading\">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  </div>\n</ng-template>\n"
            }] }
];
/** @nocollapse */
CustomerSelectionComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: AsmService },
    { type: GlobalMessageService }
];
CustomerSelectionComponent.propDecorators = {
    submitEvent: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    CustomerSelectionComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    CustomerSelectionComponent.prototype.submitClicked;
    /**
     * @type {?}
     * @private
     */
    CustomerSelectionComponent.prototype.subscription;
    /** @type {?} */
    CustomerSelectionComponent.prototype.searchResultsLoading$;
    /** @type {?} */
    CustomerSelectionComponent.prototype.submitEvent;
    /**
     * @type {?}
     * @private
     */
    CustomerSelectionComponent.prototype.fb;
    /**
     * @type {?}
     * @private
     */
    CustomerSelectionComponent.prototype.asmService;
    /**
     * @type {?}
     * @protected
     */
    CustomerSelectionComponent.prototype.globalMessageService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jdXN0b21lci1zZWxlY3Rpb24vY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBR1osTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUNMLFVBQVUsRUFFVixvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFNbkUsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBUXJDLFlBQ1UsRUFBZSxFQUNmLFVBQXNCLEVBQ3BCLG9CQUEwQztRQUY1QyxPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNwQix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBVDlDLGtCQUFhLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUcxQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO0lBTXRELENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsK0JBQStCLEVBQUUsQ0FBQztRQUMvRSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsT0FBTyxDQUFDLEVBQUU7WUFDN0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3BDLENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7Ozs7SUFFTyxtQkFBbUIsQ0FBQyxPQUEyQjtRQUNyRCxJQUFJLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sRUFBRTs7a0JBQzFCLFdBQVcsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUk7Ozs7WUFDdEMsT0FBTyxDQUFDLEVBQUUsQ0FDUixPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRTtnQkFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsRUFDcEQ7WUFDRCxJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQzthQUMvRDtpQkFBTTtnQkFDTCxJQUFJLENBQUMsb0JBQW9CLENBQUMsR0FBRyxDQUMzQjtvQkFDRSxHQUFHLEVBQUUsNEJBQTRCO29CQUNqQyxNQUFNLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRTtpQkFDckQsRUFDRCxpQkFBaUIsQ0FBQyxjQUFjLENBQ2pDLENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3JCLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDO1lBQzdCLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSztTQUMzQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVELFVBQVUsQ0FBQyxlQUF1QjtRQUNoQyxPQUFPLFNBQVMsQ0FBQyxlQUFlLENBQzlCLElBQUksQ0FBQyxJQUFJLEVBQ1QsZUFBZSxFQUNmLElBQUksQ0FBQyxhQUFhLENBQ25CLENBQUM7SUFDSixDQUFDOzs7O0lBQ0QsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBdkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsdUJBQXVCO2dCQUNqQyx5eUNBQWtEO2FBQ25EOzs7O1lBYlEsV0FBVztZQUVsQixVQUFVO1lBRVYsb0JBQW9COzs7MEJBZW5CLE1BQU07Ozs7SUFKUCwwQ0FBZ0I7Ozs7O0lBQ2hCLG1EQUE4Qjs7Ozs7SUFDOUIsa0RBQTBDOztJQUMxQywyREFBMkM7O0lBQzNDLGlEQUN5RDs7Ozs7SUFHdkQsd0NBQXVCOzs7OztJQUN2QixnREFBOEI7Ozs7O0lBQzlCLDBEQUFvRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBc21TZXJ2aWNlLFxuICBDdXN0b21lclNlYXJjaFBhZ2UsXG4gIEdsb2JhbE1lc3NhZ2VTZXJ2aWNlLFxuICBHbG9iYWxNZXNzYWdlVHlwZSxcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgRm9ybVV0aWxzIH0gZnJvbSAnLi4vLi4vLi4vc2hhcmVkL3V0aWxzL2Zvcm1zL2Zvcm0tdXRpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jdXN0b21lci1zZWxlY3Rpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTZWxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgcHJpdmF0ZSBzdWJtaXRDbGlja2VkID0gZmFsc2U7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBzZWFyY2hSZXN1bHRzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIEBPdXRwdXQoKVxuICBzdWJtaXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBjdXN0b21lcklkOiBzdHJpbmcgfT4oKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGFzbVNlcnZpY2U6IEFzbVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGdsb2JhbE1lc3NhZ2VTZXJ2aWNlOiBHbG9iYWxNZXNzYWdlU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBzZWFyY2hUZXJtOiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkXV0sXG4gICAgfSk7XG4gICAgdGhpcy5zZWFyY2hSZXN1bHRzTG9hZGluZyQgPSB0aGlzLmFzbVNlcnZpY2UuZ2V0Q3VzdG9tZXJTZWFyY2hSZXN1bHRzTG9hZGluZygpO1xuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5hc21TZXJ2aWNlLmdldEN1c3RvbWVyU2VhcmNoUmVzdWx0cygpLnN1YnNjcmliZShyZXN1bHRzID0+IHtcbiAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2hSZXN1bHRzKHJlc3VsdHMpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTZWFyY2hSZXN1bHRzKHJlc3VsdHM6IEN1c3RvbWVyU2VhcmNoUGFnZSk6IHZvaWQge1xuICAgIGlmICghIXJlc3VsdHMgJiYgcmVzdWx0cy5lbnRyaWVzKSB7XG4gICAgICBjb25zdCBjdXN0b21lckhpdCA9IHJlc3VsdHMuZW50cmllcy5maW5kKFxuICAgICAgICBlbGVtZW50ID0+XG4gICAgICAgICAgZWxlbWVudC51aWQudG9Mb3dlckNhc2UoKSA9PT1cbiAgICAgICAgICB0aGlzLmZvcm0uY29udHJvbHMuc2VhcmNoVGVybS52YWx1ZS50b0xvd2VyQ2FzZSgpXG4gICAgICApO1xuICAgICAgaWYgKGN1c3RvbWVySGl0KSB7XG4gICAgICAgIHRoaXMuc3VibWl0RXZlbnQuZW1pdCh7IGN1c3RvbWVySWQ6IGN1c3RvbWVySGl0LmN1c3RvbWVySWQgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmdsb2JhbE1lc3NhZ2VTZXJ2aWNlLmFkZChcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6ICdhc20uY3VzdG9tZXJTZWFyY2gubm9NYXRjaCcsXG4gICAgICAgICAgICBwYXJhbXM6IHsgdWlkOiB0aGlzLmZvcm0uY29udHJvbHMuc2VhcmNoVGVybS52YWx1ZSB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgR2xvYmFsTWVzc2FnZVR5cGUuTVNHX1RZUEVfRVJST1JcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN1Ym1pdENsaWNrZWQgPSB0cnVlO1xuICAgIGlmICh0aGlzLmZvcm0uaW52YWxpZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmFzbVNlcnZpY2UuY3VzdG9tZXJTZWFyY2goe1xuICAgICAgcXVlcnk6IHRoaXMuZm9ybS5jb250cm9scy5zZWFyY2hUZXJtLnZhbHVlLFxuICAgIH0pO1xuICB9XG5cbiAgaXNOb3RWYWxpZChmb3JtQ29udHJvbE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBGb3JtVXRpbHMuaXNOb3RWYWxpZEZpZWxkKFxuICAgICAgdGhpcy5mb3JtLFxuICAgICAgZm9ybUNvbnRyb2xOYW1lLFxuICAgICAgdGhpcy5zdWJtaXRDbGlja2VkXG4gICAgKTtcbiAgfVxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=