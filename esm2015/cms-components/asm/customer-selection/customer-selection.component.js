/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Output, ViewChild, } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AsmConfig, AsmService, } from '@spartacus/core';
import { Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
export class CustomerSelectionComponent {
    /**
     * @param {?} fb
     * @param {?} asmService
     * @param {?} config
     */
    constructor(fb, asmService, config) {
        this.fb = fb;
        this.asmService = asmService;
        this.config = config;
        this.subscription = new Subscription();
        this.submitEvent = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
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
        searchTermValue => {
            this.handleSearchTerm(searchTermValue);
        })));
    }
    /**
     * @private
     * @param {?} searchTermValue
     * @return {?}
     */
    handleSearchTerm(searchTermValue) {
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
    }
    /**
     * @param {?} customer
     * @return {?}
     */
    selectCustomerFromList(customer) {
        this.selectedCustomer = customer;
        this.form.controls.searchTerm.setValue(this.selectedCustomer.name);
        this.asmService.customerSearchReset();
    }
    /**
     * @return {?}
     */
    onSubmit() {
        if (Boolean(this.selectedCustomer)) {
            this.submitEvent.emit({ customerId: this.selectedCustomer.customerId });
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDocumentClick(event) {
        if (Boolean(this.resultList)) {
            if (this.resultList.nativeElement.contains(event.target) ||
                this.searchTerm.nativeElement.contains(event.target)) {
                return;
            }
            else {
                this.asmService.customerSearchReset();
            }
        }
    }
    /**
     * @return {?}
     */
    closeResults() {
        this.asmService.customerSearchReset();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
        this.asmService.customerSearchReset();
    }
}
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
CustomerSelectionComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: AsmService },
    { type: AsmConfig }
];
CustomerSelectionComponent.propDecorators = {
    submitEvent: [{ type: Output }],
    resultList: [{ type: ViewChild, args: ['resultList', { static: false },] }],
    searchTerm: [{ type: ViewChild, args: ['searchTerm', { static: false },] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jdXN0b21lci1zZWxlY3Rpb24vY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUdaLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxHQUdYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFTOUMsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBYXJDLFlBQ1UsRUFBZSxFQUNmLFVBQXNCLEVBQ3RCLE1BQWlCO1FBRmpCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFkbkIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBTTFDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7SUFTdEQsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ3hCLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNqQixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLHFCQUFxQixHQUFHLElBQUksQ0FBQyxVQUFVLENB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LE1BQU07eUJBR04sU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUJBQ3pDLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBVjFDLDBDQUFnQjs7Ozs7SUFDaEIsa0RBQTBDOztJQUMxQywyREFBMkM7O0lBQzNDLG1EQUE4Qzs7SUFDOUMsc0RBQXVCOztJQUV2QixpREFDeUQ7O0lBRXpELGdEQUFtRTs7SUFDbkUsZ0RBQW1FOzs7OztJQUdqRSx3Q0FBdUI7Ozs7O0lBQ3ZCLGdEQUE4Qjs7Ozs7SUFDOUIsNENBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQXNtQ29uZmlnLFxuICBBc21TZXJ2aWNlLFxuICBDdXN0b21lclNlYXJjaFBhZ2UsXG4gIFVzZXIsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY3VzdG9tZXItc2VsZWN0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLXNlbGVjdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGhvc3Q6IHtcbiAgICAnKGRvY3VtZW50OmNsaWNrKSc6ICdvbkRvY3VtZW50Q2xpY2soJGV2ZW50KScsXG4gIH0sXG59KVxuZXhwb3J0IGNsYXNzIEN1c3RvbWVyU2VsZWN0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBmb3JtOiBGb3JtR3JvdXA7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBzZWFyY2hSZXN1bHRzTG9hZGluZyQ6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gIHNlYXJjaFJlc3VsdHM6IE9ic2VydmFibGU8Q3VzdG9tZXJTZWFyY2hQYWdlPjtcbiAgc2VsZWN0ZWRDdXN0b21lcjogVXNlcjtcblxuICBAT3V0cHV0KClcbiAgc3VibWl0RXZlbnQgPSBuZXcgRXZlbnRFbWl0dGVyPHsgY3VzdG9tZXJJZDogc3RyaW5nIH0+KCk7XG5cbiAgQFZpZXdDaGlsZCgncmVzdWx0TGlzdCcsIHsgc3RhdGljOiBmYWxzZSB9KSByZXN1bHRMaXN0OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdzZWFyY2hUZXJtJywgeyBzdGF0aWM6IGZhbHNlIH0pIHNlYXJjaFRlcm06IEVsZW1lbnRSZWY7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBmYjogRm9ybUJ1aWxkZXIsXG4gICAgcHJpdmF0ZSBhc21TZXJ2aWNlOiBBc21TZXJ2aWNlLFxuICAgIHByaXZhdGUgY29uZmlnOiBBc21Db25maWdcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuZm9ybSA9IHRoaXMuZmIuZ3JvdXAoe1xuICAgICAgc2VhcmNoVGVybTogWycnXSxcbiAgICB9KTtcbiAgICB0aGlzLmFzbVNlcnZpY2UuY3VzdG9tZXJTZWFyY2hSZXNldCgpO1xuICAgIHRoaXMuc2VhcmNoUmVzdWx0c0xvYWRpbmckID0gdGhpcy5hc21TZXJ2aWNlLmdldEN1c3RvbWVyU2VhcmNoUmVzdWx0c0xvYWRpbmcoKTtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHMgPSB0aGlzLmFzbVNlcnZpY2UuZ2V0Q3VzdG9tZXJTZWFyY2hSZXN1bHRzKCk7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbi5hZGQoXG4gICAgICB0aGlzLmZvcm0uY29udHJvbHMuc2VhcmNoVGVybS52YWx1ZUNoYW5nZXNcbiAgICAgICAgLnBpcGUoZGVib3VuY2VUaW1lKDMwMCkpXG4gICAgICAgIC5zdWJzY3JpYmUoc2VhcmNoVGVybVZhbHVlID0+IHtcbiAgICAgICAgICB0aGlzLmhhbmRsZVNlYXJjaFRlcm0oc2VhcmNoVGVybVZhbHVlKTtcbiAgICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBoYW5kbGVTZWFyY2hUZXJtKHNlYXJjaFRlcm1WYWx1ZTogc3RyaW5nKSB7XG4gICAgaWYgKFxuICAgICAgQm9vbGVhbih0aGlzLnNlbGVjdGVkQ3VzdG9tZXIpICYmXG4gICAgICBzZWFyY2hUZXJtVmFsdWUgIT09IHRoaXMuc2VsZWN0ZWRDdXN0b21lci5uYW1lXG4gICAgKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkQ3VzdG9tZXIgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGlmIChCb29sZWFuKHRoaXMuc2VsZWN0ZWRDdXN0b21lcikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hc21TZXJ2aWNlLmN1c3RvbWVyU2VhcmNoUmVzZXQoKTtcbiAgICBpZiAoc2VhcmNoVGVybVZhbHVlLnRyaW0oKS5sZW5ndGggPj0gMykge1xuICAgICAgdGhpcy5hc21TZXJ2aWNlLmN1c3RvbWVyU2VhcmNoKHtcbiAgICAgICAgcXVlcnk6IHNlYXJjaFRlcm1WYWx1ZSxcbiAgICAgICAgcGFnZVNpemU6IHRoaXMuY29uZmlnLmFzbS5jdXN0b21lU2VhcmNoLm1heFJlc3VsdHMsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RDdXN0b21lckZyb21MaXN0KGN1c3RvbWVyOiBVc2VyKSB7XG4gICAgdGhpcy5zZWxlY3RlZEN1c3RvbWVyID0gY3VzdG9tZXI7XG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzLnNlYXJjaFRlcm0uc2V0VmFsdWUodGhpcy5zZWxlY3RlZEN1c3RvbWVyLm5hbWUpO1xuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICBpZiAoQm9vbGVhbih0aGlzLnNlbGVjdGVkQ3VzdG9tZXIpKSB7XG4gICAgICB0aGlzLnN1Ym1pdEV2ZW50LmVtaXQoeyBjdXN0b21lcklkOiB0aGlzLnNlbGVjdGVkQ3VzdG9tZXIuY3VzdG9tZXJJZCB9KTtcbiAgICB9XG4gIH1cblxuICBvbkRvY3VtZW50Q2xpY2soZXZlbnQpIHtcbiAgICBpZiAoQm9vbGVhbih0aGlzLnJlc3VsdExpc3QpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucmVzdWx0TGlzdC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgfHxcbiAgICAgICAgdGhpcy5zZWFyY2hUZXJtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xvc2VSZXN1bHRzKCkge1xuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gIH1cbn1cbiJdfQ==