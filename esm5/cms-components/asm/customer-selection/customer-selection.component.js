/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Output, ViewChild, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AsmConfig, AsmService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
var CustomerSelectionComponent = /** @class */ (function () {
    function CustomerSelectionComponent(fb, asmService, config) {
        this.fb = fb;
        this.asmService = asmService;
        this.config = config;
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
            searchTerm: [''],
        });
        this.asmService.customerSearchReset();
        this.searchResultsLoading$ = this.asmService.getCustomerSearchResultsLoading();
        this.searchResults = this.asmService.getCustomerSearchResults();
        this.subscription.add(this.form.controls.searchTerm.valueChanges
            .pipe(debounceTime(300))
            .subscribe((/**
         * @param {?} searchTermValue
         * @return {?}
         */
        function (searchTermValue) {
            _this.handleSearchTerm(searchTermValue);
        })));
    };
    /**
     * @private
     * @param {?} searchTermValue
     * @return {?}
     */
    CustomerSelectionComponent.prototype.handleSearchTerm = /**
     * @private
     * @param {?} searchTermValue
     * @return {?}
     */
    function (searchTermValue) {
        if (Boolean(this.selectedCustomer) &&
            searchTermValue !== this.selectedCustomer.name) {
            this.selectedCustomer = undefined;
        }
        if (Boolean(this.selectedCustomer)) {
            return;
        }
        this.asmService.customerSearchReset();
        if (searchTermValue.trim().length >= 3) {
            this.asmService.customerSearch({
                query: searchTermValue,
                pageSize: this.config.asm.customeSearch.maxResults,
            });
        }
    };
    /**
     * @param {?} customer
     * @return {?}
     */
    CustomerSelectionComponent.prototype.selectCustomerFromList = /**
     * @param {?} customer
     * @return {?}
     */
    function (customer) {
        this.selectedCustomer = customer;
        this.form.controls.searchTerm.setValue(this.selectedCustomer.name);
        this.asmService.customerSearchReset();
    };
    /**
     * @return {?}
     */
    CustomerSelectionComponent.prototype.onSubmit = /**
     * @return {?}
     */
    function () {
        if (Boolean(this.selectedCustomer)) {
            this.submitEvent.emit({ customerId: this.selectedCustomer.customerId });
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CustomerSelectionComponent.prototype.onDocumentClick = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (Boolean(this.resultList)) {
            if (this.resultList.nativeElement.contains(event.target) ||
                this.searchTerm.nativeElement.contains(event.target)) {
                return;
            }
            else {
                this.asmService.customerSearchReset();
            }
        }
    };
    /**
     * @return {?}
     */
    CustomerSelectionComponent.prototype.closeResults = /**
     * @return {?}
     */
    function () {
        this.asmService.customerSearchReset();
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
                    template: "<form (submit)=\"onSubmit()\" [formGroup]=\"form\">\n  <div class=\"fd-container\">\n    <div class=\"fd-col--6\">\n      <label>\n        <input\n          #searchTerm\n          type=\"text\"\n          class=\"form-control\"\n          formControlName=\"searchTerm\"\n          placeholder=\"{{\n            'asm.customerSearch.searchTerm.label' | cxTranslate\n          }}\"\n        />\n      </label>\n    </div>\n\n    <div class=\"fd-col--3\">\n      <button\n        type=\"submit\"\n        [disabled]=\"!selectedCustomer\"\n        class=\"fd-button--emphasized fd-button--positive sap-icon--media-play\"\n      >\n        {{ 'asm.customerSearch.submit' | cxTranslate }}\n      </button>\n    </div>\n  </div>\n</form>\n\n<div\n  *ngIf=\"searchResults | async as results\"\n  class=\"results fd-popover__body\"\n  #resultList\n>\n  <div>\n    <a\n      *ngFor=\"let result of results.entries\"\n      (click)=\"selectCustomerFromList(result)\"\n      ><span class=\"result-name\">{{ result.name }}</span>\n      <span class=\"result-id\">{{ result.uid }}</span></a\n    >\n    <a\n      (click)=\"closeResults()\"\n      *ngIf=\"\n        !(searchResultsLoading$ | async) &&\n        searchTerm.value.length >= 3 &&\n        (!!results.entries && results.entries.length <= 0)\n      \"\n      >{{ 'asm.customerSearch.noMatch' | cxTranslate }}</a\n    >\n  </div>\n</div>\n<div *ngIf=\"searchResultsLoading$ | async\" class=\"results fd-popover__body\">\n  <div>\n    <a>\n      <div class=\"sap-spinner\">\n        <div class=\"fd-loading-dots\" aria-hidden=\"false\" aria-label=\"Loading\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </a>\n  </div>\n</div>\n",
                    host: {
                        '(document:click)': 'onDocumentClick($event)',
                    }
                }] }
    ];
    /** @nocollapse */
    CustomerSelectionComponent.ctorParameters = function () { return [
        { type: FormBuilder },
        { type: AsmService },
        { type: AsmConfig }
    ]; };
    CustomerSelectionComponent.propDecorators = {
        submitEvent: [{ type: Output }],
        resultList: [{ type: ViewChild, args: ['resultList', { static: false },] }],
        searchTerm: [{ type: ViewChild, args: ['searchTerm', { static: false },] }]
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
    CustomerSelectionComponent.prototype.subscription;
    /** @type {?} */
    CustomerSelectionComponent.prototype.searchResultsLoading$;
    /** @type {?} */
    CustomerSelectionComponent.prototype.searchResults;
    /** @type {?} */
    CustomerSelectionComponent.prototype.selectedCustomer;
    /** @type {?} */
    CustomerSelectionComponent.prototype.submitEvent;
    /** @type {?} */
    CustomerSelectionComponent.prototype.resultList;
    /** @type {?} */
    CustomerSelectionComponent.prototype.searchTerm;
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
     * @private
     */
    CustomerSelectionComponent.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jdXN0b21lci1zZWxlY3Rpb24vY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUdaLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxHQUdYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUM7SUFvQkUsb0NBQ1UsRUFBZSxFQUNmLFVBQXNCLEVBQ3RCLE1BQWlCO1FBRmpCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFkbkIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBTTFDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7SUFTdEQsQ0FBQzs7OztJQUVKLDZDQUFROzs7SUFBUjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLCtCQUErQixFQUFFLENBQUM7UUFDL0UsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHdCQUF3QixFQUFFLENBQUM7UUFFaEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQ25CLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxZQUFZO2FBQ3ZDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDdkIsU0FBUzs7OztRQUFDLFVBQUEsZUFBZTtZQUN4QixLQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDekMsQ0FBQyxFQUFDLENBQ0wsQ0FBQztJQUNKLENBQUM7Ozs7OztJQUVPLHFEQUFnQjs7Ozs7SUFBeEIsVUFBeUIsZUFBdUI7UUFDOUMsSUFDRSxPQUFPLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBQzlCLGVBQWUsS0FBSyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUM5QztZQUNBLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxTQUFTLENBQUM7U0FDbkM7UUFDRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUNsQyxPQUFPO1NBQ1I7UUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDdEMsSUFBSSxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQztnQkFDN0IsS0FBSyxFQUFFLGVBQWU7Z0JBQ3RCLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsVUFBVTthQUNuRCxDQUFDLENBQUM7U0FDSjtJQUNILENBQUM7Ozs7O0lBRUQsMkRBQXNCOzs7O0lBQXRCLFVBQXVCLFFBQWM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELDZDQUFROzs7SUFBUjtRQUNFLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO1NBQ3pFO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxvREFBZTs7OztJQUFmLFVBQWdCLEtBQUs7UUFDbkIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzVCLElBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7Z0JBQ3BELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEVBQ3BEO2dCQUNBLE9BQU87YUFDUjtpQkFBTTtnQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUM7YUFDdkM7U0FDRjtJQUNILENBQUM7Ozs7SUFFRCxpREFBWTs7O0lBQVo7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELGdEQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7Z0JBN0ZGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsdUJBQXVCO29CQUNqQywrc0RBQWtEO29CQUNsRCxJQUFJLEVBQUU7d0JBQ0osa0JBQWtCLEVBQUUseUJBQXlCO3FCQUM5QztpQkFDRjs7OztnQkFoQlEsV0FBVztnQkFHbEIsVUFBVTtnQkFEVixTQUFTOzs7OEJBc0JSLE1BQU07NkJBR04sU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7NkJBQ3pDLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOztJQTRFNUMsaUNBQUM7Q0FBQSxBQTlGRCxJQThGQztTQXZGWSwwQkFBMEI7OztJQUNyQywwQ0FBZ0I7Ozs7O0lBQ2hCLGtEQUEwQzs7SUFDMUMsMkRBQTJDOztJQUMzQyxtREFBOEM7O0lBQzlDLHNEQUF1Qjs7SUFFdkIsaURBQ3lEOztJQUV6RCxnREFBbUU7O0lBQ25FLGdEQUFtRTs7Ozs7SUFHakUsd0NBQXVCOzs7OztJQUN2QixnREFBOEI7Ozs7O0lBQzlCLDRDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBWaWV3Q2hpbGQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEFzbUNvbmZpZyxcbiAgQXNtU2VydmljZSxcbiAgQ3VzdG9tZXJTZWFyY2hQYWdlLFxuICBVc2VyLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWN1c3RvbWVyLXNlbGVjdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1zZWxlY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxuICBob3N0OiB7XG4gICAgJyhkb2N1bWVudDpjbGljayknOiAnb25Eb2N1bWVudENsaWNrKCRldmVudCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lclNlbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgc2VhcmNoUmVzdWx0c0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBzZWFyY2hSZXN1bHRzOiBPYnNlcnZhYmxlPEN1c3RvbWVyU2VhcmNoUGFnZT47XG4gIHNlbGVjdGVkQ3VzdG9tZXI6IFVzZXI7XG5cbiAgQE91dHB1dCgpXG4gIHN1Ym1pdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGN1c3RvbWVySWQ6IHN0cmluZyB9PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3Jlc3VsdExpc3QnLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVzdWx0TGlzdDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2VhcmNoVGVybScsIHsgc3RhdGljOiBmYWxzZSB9KSBzZWFyY2hUZXJtOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgYXNtU2VydmljZTogQXNtU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogQXNtQ29uZmlnXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHNlYXJjaFRlcm06IFsnJ10sXG4gICAgfSk7XG4gICAgdGhpcy5hc21TZXJ2aWNlLmN1c3RvbWVyU2VhcmNoUmVzZXQoKTtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHNMb2FkaW5nJCA9IHRoaXMuYXNtU2VydmljZS5nZXRDdXN0b21lclNlYXJjaFJlc3VsdHNMb2FkaW5nKCk7XG4gICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gdGhpcy5hc21TZXJ2aWNlLmdldEN1c3RvbWVyU2VhcmNoUmVzdWx0cygpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzLnNlYXJjaFRlcm0udmFsdWVDaGFuZ2VzXG4gICAgICAgIC5waXBlKGRlYm91bmNlVGltZSgzMDApKVxuICAgICAgICAuc3Vic2NyaWJlKHNlYXJjaFRlcm1WYWx1ZSA9PiB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2hUZXJtKHNlYXJjaFRlcm1WYWx1ZSk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VhcmNoVGVybShzZWFyY2hUZXJtVmFsdWU6IHN0cmluZykge1xuICAgIGlmIChcbiAgICAgIEJvb2xlYW4odGhpcy5zZWxlY3RlZEN1c3RvbWVyKSAmJlxuICAgICAgc2VhcmNoVGVybVZhbHVlICE9PSB0aGlzLnNlbGVjdGVkQ3VzdG9tZXIubmFtZVxuICAgICkge1xuICAgICAgdGhpcy5zZWxlY3RlZEN1c3RvbWVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoQm9vbGVhbih0aGlzLnNlbGVjdGVkQ3VzdG9tZXIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gICAgaWYgKHNlYXJjaFRlcm1WYWx1ZS50cmltKCkubGVuZ3RoID49IDMpIHtcbiAgICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaCh7XG4gICAgICAgIHF1ZXJ5OiBzZWFyY2hUZXJtVmFsdWUsXG4gICAgICAgIHBhZ2VTaXplOiB0aGlzLmNvbmZpZy5hc20uY3VzdG9tZVNlYXJjaC5tYXhSZXN1bHRzLFxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0Q3VzdG9tZXJGcm9tTGlzdChjdXN0b21lcjogVXNlcikge1xuICAgIHRoaXMuc2VsZWN0ZWRDdXN0b21lciA9IGN1c3RvbWVyO1xuICAgIHRoaXMuZm9ybS5jb250cm9scy5zZWFyY2hUZXJtLnNldFZhbHVlKHRoaXMuc2VsZWN0ZWRDdXN0b21lci5uYW1lKTtcbiAgICB0aGlzLmFzbVNlcnZpY2UuY3VzdG9tZXJTZWFyY2hSZXNldCgpO1xuICB9XG5cbiAgb25TdWJtaXQoKTogdm9pZCB7XG4gICAgaWYgKEJvb2xlYW4odGhpcy5zZWxlY3RlZEN1c3RvbWVyKSkge1xuICAgICAgdGhpcy5zdWJtaXRFdmVudC5lbWl0KHsgY3VzdG9tZXJJZDogdGhpcy5zZWxlY3RlZEN1c3RvbWVyLmN1c3RvbWVySWQgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Eb2N1bWVudENsaWNrKGV2ZW50KSB7XG4gICAgaWYgKEJvb2xlYW4odGhpcy5yZXN1bHRMaXN0KSkge1xuICAgICAgaWYgKFxuICAgICAgICB0aGlzLnJlc3VsdExpc3QubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpIHx8XG4gICAgICAgIHRoaXMuc2VhcmNoVGVybS5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldClcbiAgICAgICkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmFzbVNlcnZpY2UuY3VzdG9tZXJTZWFyY2hSZXNldCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNsb3NlUmVzdWx0cygpIHtcbiAgICB0aGlzLmFzbVNlcnZpY2UuY3VzdG9tZXJTZWFyY2hSZXNldCgpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19