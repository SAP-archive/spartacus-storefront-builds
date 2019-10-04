/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, EventEmitter, Output, } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AsmService, GlobalMessageService, GlobalMessageType, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { FormUtils } from '../../../shared/utils/forms/form-utils';
var CustomerSelectionComponent = /** @class */ (function () {
    function CustomerSelectionComponent(fb, asmService, globalMessageService) {
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
    CustomerSelectionComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.form = this.fb.group({
            searchTerm: ['', [Validators.required]],
        });
        this.searchResultsLoading$ = this.asmService.getCustomerSearchResultsLoading();
        this.asmService.customerSearchReset();
        this.subscription.add(this.asmService.getCustomerSearchResults().subscribe((/**
         * @param {?} results
         * @return {?}
         */
        function (results) {
            _this.handleSearchResults(results);
        })));
    };
    /**
     * @private
     * @param {?} results
     * @return {?}
     */
    CustomerSelectionComponent.prototype.handleSearchResults = /**
     * @private
     * @param {?} results
     * @return {?}
     */
    function (results) {
        var _this = this;
        if (!!results && results.entries) {
            /** @type {?} */
            var customerHit = results.entries.find((/**
             * @param {?} element
             * @return {?}
             */
            function (element) {
                return element.uid.toLowerCase() ===
                    _this.form.controls.searchTerm.value.toLowerCase();
            }));
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
    };
    /**
     * @return {?}
     */
    CustomerSelectionComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        this.submitClicked = true;
        if (this.form.invalid) {
            return;
        }
        this.asmService.customerSearch({
            query: this.form.controls.searchTerm.value,
        });
    };
    /**
     * @param {?} formControlName
     * @return {?}
     */
    CustomerSelectionComponent.prototype.isNotValid = /**
     * @param {?} formControlName
     * @return {?}
     */
    function (formControlName) {
        return FormUtils.isNotValidField(this.form, formControlName, this.submitClicked);
    };
    /**
     * @return {?}
     */
    CustomerSelectionComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    CustomerSelectionComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-customer-selection',
                    template: "<ng-container *ngIf=\"!(searchResultsLoading$ | async); else spinner\">\n  <form (submit)=\"onSubmit()\" [formGroup]=\"form\">\n    <div class=\"fd-container\">\n      <div class=\"fd-col--6\">\n        <label>\n          <input\n            type=\"text\"\n            class=\"form-control\"\n            [class.is-invalid]=\"isNotValid('searchTerm')\"\n            formControlName=\"searchTerm\"\n            placeholder=\"{{\n              'asm.customerSearch.searchTerm.label' | cxTranslate\n            }}\"\n          />\n          <div class=\"invalid-feedback\" *ngIf=\"isNotValid('searchTerm')\">\n            <span>{{\n              'asm.customerSearch.searchTerm.required' | cxTranslate\n            }}</span>\n          </div>\n        </label>\n      </div>\n\n      <div class=\"fd-col--3\">\n        <button\n          type=\"submit\"\n          class=\"fd-button--emphasized fd-button--positive sap-icon--media-play\"\n        >\n          {{ 'asm.customerSearch.submit' | cxTranslate }}\n        </button>\n      </div>\n    </div>\n  </form>\n</ng-container>\n<ng-template #spinner>\n  <div class=\"sap-spinner\">\n    <div class=\"fd-loading-dots\" aria-hidden=\"false\" aria-label=\"Loading\">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n  </div>\n</ng-template>\n"
                }] }
    ];
    /** @nocollapse */
    CustomerSelectionComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: AsmService },
        { type: GlobalMessageService }
    ]; };
    CustomerSelectionComponent.propDecorators = {
        submitEvent: [{ type: Output }]
    };
    return CustomerSelectionComponent;
}());
export { CustomerSelectionComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jdXN0b21lci1zZWxlY3Rpb24vY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxZQUFZLEVBR1osTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsVUFBVSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEUsT0FBTyxFQUNMLFVBQVUsRUFFVixvQkFBb0IsRUFDcEIsaUJBQWlCLEdBQ2xCLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFbkU7SUFZRSxvQ0FDVSxFQUFlLEVBQ2YsVUFBc0IsRUFDcEIsb0JBQTBDO1FBRjVDLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3BCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFUOUMsa0JBQWEsR0FBRyxLQUFLLENBQUM7UUFDdEIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzFDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7SUFNdEQsQ0FBQzs7OztJQUVKLDZDQUFROzs7SUFBUjtRQUFBLGlCQVdDO1FBVkMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixVQUFVLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDeEMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsK0JBQStCLEVBQUUsQ0FBQztRQUMvRSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsd0JBQXdCLEVBQUUsQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQSxPQUFPO1lBQzFELEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBRU8sd0RBQW1COzs7OztJQUEzQixVQUE0QixPQUEyQjtRQUF2RCxpQkFtQkM7UUFsQkMsSUFBSSxDQUFDLENBQUMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxPQUFPLEVBQUU7O2dCQUMxQixXQUFXLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJOzs7O1lBQ3RDLFVBQUEsT0FBTztnQkFDTCxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFO29CQUN6QixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRTtZQURqRCxDQUNpRCxFQUNwRDtZQUNELElBQUksV0FBVyxFQUFFO2dCQUNmLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLFdBQVcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO2FBQy9EO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxHQUFHLENBQzNCO29CQUNFLEdBQUcsRUFBRSw0QkFBNEI7b0JBQ2pDLE1BQU0sRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFO2lCQUNyRCxFQUNELGlCQUFpQixDQUFDLGNBQWMsQ0FDakMsQ0FBQzthQUNIO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsNkNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztZQUM3QixLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLEtBQUs7U0FDM0MsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFRCwrQ0FBVTs7OztJQUFWLFVBQVcsZUFBdUI7UUFDaEMsT0FBTyxTQUFTLENBQUMsZUFBZSxDQUM5QixJQUFJLENBQUMsSUFBSSxFQUNULGVBQWUsRUFDZixJQUFJLENBQUMsYUFBYSxDQUNuQixDQUFDO0lBQ0osQ0FBQzs7OztJQUNELGdEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Z0JBdkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQyx5eUNBQWtEO2lCQUNuRDs7OztnQkFiUSxXQUFXO2dCQUVsQixVQUFVO2dCQUVWLG9CQUFvQjs7OzhCQWVuQixNQUFNOztJQStEVCxpQ0FBQztDQUFBLEFBeEVELElBd0VDO1NBcEVZLDBCQUEwQjs7O0lBQ3JDLDBDQUFnQjs7Ozs7SUFDaEIsbURBQThCOzs7OztJQUM5QixrREFBMEM7O0lBQzFDLDJEQUEyQzs7SUFDM0MsaURBQ3lEOzs7OztJQUd2RCx3Q0FBdUI7Ozs7O0lBQ3ZCLGdEQUE4Qjs7Ozs7SUFDOUIsMERBQW9EIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEFzbVNlcnZpY2UsXG4gIEN1c3RvbWVyU2VhcmNoUGFnZSxcbiAgR2xvYmFsTWVzc2FnZVNlcnZpY2UsXG4gIEdsb2JhbE1lc3NhZ2VUeXBlLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGb3JtVXRpbHMgfSBmcm9tICcuLi8uLi8uLi9zaGFyZWQvdXRpbHMvZm9ybXMvZm9ybS11dGlscyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWN1c3RvbWVyLXNlbGVjdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1zZWxlY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lclNlbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBwcml2YXRlIHN1Ym1pdENsaWNrZWQgPSBmYWxzZTtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHNlYXJjaFJlc3VsdHNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgQE91dHB1dCgpXG4gIHN1Ym1pdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGN1c3RvbWVySWQ6IHN0cmluZyB9PigpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgYXNtU2VydmljZTogQXNtU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZ2xvYmFsTWVzc2FnZVNlcnZpY2U6IEdsb2JhbE1lc3NhZ2VTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHNlYXJjaFRlcm06IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWRdXSxcbiAgICB9KTtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHNMb2FkaW5nJCA9IHRoaXMuYXNtU2VydmljZS5nZXRDdXN0b21lclNlYXJjaFJlc3VsdHNMb2FkaW5nKCk7XG4gICAgdGhpcy5hc21TZXJ2aWNlLmN1c3RvbWVyU2VhcmNoUmVzZXQoKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmFzbVNlcnZpY2UuZ2V0Q3VzdG9tZXJTZWFyY2hSZXN1bHRzKCkuc3Vic2NyaWJlKHJlc3VsdHMgPT4ge1xuICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaFJlc3VsdHMocmVzdWx0cyk7XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlYXJjaFJlc3VsdHMocmVzdWx0czogQ3VzdG9tZXJTZWFyY2hQYWdlKTogdm9pZCB7XG4gICAgaWYgKCEhcmVzdWx0cyAmJiByZXN1bHRzLmVudHJpZXMpIHtcbiAgICAgIGNvbnN0IGN1c3RvbWVySGl0ID0gcmVzdWx0cy5lbnRyaWVzLmZpbmQoXG4gICAgICAgIGVsZW1lbnQgPT5cbiAgICAgICAgICBlbGVtZW50LnVpZC50b0xvd2VyQ2FzZSgpID09PVxuICAgICAgICAgIHRoaXMuZm9ybS5jb250cm9scy5zZWFyY2hUZXJtLnZhbHVlLnRvTG93ZXJDYXNlKClcbiAgICAgICk7XG4gICAgICBpZiAoY3VzdG9tZXJIaXQpIHtcbiAgICAgICAgdGhpcy5zdWJtaXRFdmVudC5lbWl0KHsgY3VzdG9tZXJJZDogY3VzdG9tZXJIaXQuY3VzdG9tZXJJZCB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2xvYmFsTWVzc2FnZVNlcnZpY2UuYWRkKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogJ2FzbS5jdXN0b21lclNlYXJjaC5ub01hdGNoJyxcbiAgICAgICAgICAgIHBhcmFtczogeyB1aWQ6IHRoaXMuZm9ybS5jb250cm9scy5zZWFyY2hUZXJtLnZhbHVlIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBHbG9iYWxNZXNzYWdlVHlwZS5NU0dfVFlQRV9FUlJPUlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIHRoaXMuc3VibWl0Q2xpY2tlZCA9IHRydWU7XG4gICAgaWYgKHRoaXMuZm9ybS5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaCh7XG4gICAgICBxdWVyeTogdGhpcy5mb3JtLmNvbnRyb2xzLnNlYXJjaFRlcm0udmFsdWUsXG4gICAgfSk7XG4gIH1cblxuICBpc05vdFZhbGlkKGZvcm1Db250cm9sTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIEZvcm1VdGlscy5pc05vdFZhbGlkRmllbGQoXG4gICAgICB0aGlzLmZvcm0sXG4gICAgICBmb3JtQ29udHJvbE5hbWUsXG4gICAgICB0aGlzLnN1Ym1pdENsaWNrZWRcbiAgICApO1xuICB9XG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==