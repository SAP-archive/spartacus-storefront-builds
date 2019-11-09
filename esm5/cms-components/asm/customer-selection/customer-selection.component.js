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
                pageSize: this.config.asm.customerSearch.maxResults,
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
        this.asmService.customerSearchReset();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jdXN0b21lci1zZWxlY3Rpb24vY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUdaLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFdBQVcsRUFBYSxNQUFNLGdCQUFnQixDQUFDO0FBQ3hELE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxHQUdYLE1BQU0saUJBQWlCLENBQUM7QUFDekIsT0FBTyxFQUFjLFlBQVksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFOUM7SUFvQkUsb0NBQ1UsRUFBZSxFQUNmLFVBQXNCLEVBQ3RCLE1BQWlCO1FBRmpCLE9BQUUsR0FBRixFQUFFLENBQWE7UUFDZixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFkbkIsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO1FBTTFDLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQTBCLENBQUM7SUFTdEQsQ0FBQzs7OztJQUVKLDZDQUFROzs7SUFBUjtRQUFBLGlCQWVDO1FBZEMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFD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aUJBQ0Y7Ozs7Z0JBaEJRLFdBQVc7Z0JBR2xCLFVBQVU7Z0JBRFYsU0FBUzs7OzhCQXNCUixNQUFNOzZCQUdOLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzZCQUN6QyxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUE2RTVDLGlDQUFDO0NBQUEsQUEvRkQsSUErRkM7U0F4RlksMEJBQTBCOzs7SUFDckMsMENBQWdCOzs7OztJQUNoQixrREFBMEM7O0lBQzFDLDJEQUEyQzs7SUFDM0MsbURBQThDOztJQUM5QyxzREFBdUI7O0lBRXZCLGlEQUN5RDs7SUFFekQsZ0RBQW1FOztJQUNuRSxnREFBbUU7Ozs7O0lBR2pFLHdDQUF1Qjs7Ozs7SUFDdkIsZ0RBQThCOzs7OztJQUM5Qiw0Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQge1xuICBBc21Db25maWcsXG4gIEFzbVNlcnZpY2UsXG4gIEN1c3RvbWVyU2VhcmNoUGFnZSxcbiAgVXNlcixcbn0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGVib3VuY2VUaW1lIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jdXN0b21lci1zZWxlY3Rpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgaG9zdDoge1xuICAgICcoZG9jdW1lbnQ6Y2xpY2spJzogJ29uRG9jdW1lbnRDbGljaygkZXZlbnQpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTZWxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHNlYXJjaFJlc3VsdHNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgc2VhcmNoUmVzdWx0czogT2JzZXJ2YWJsZTxDdXN0b21lclNlYXJjaFBhZ2U+O1xuICBzZWxlY3RlZEN1c3RvbWVyOiBVc2VyO1xuXG4gIEBPdXRwdXQoKVxuICBzdWJtaXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBjdXN0b21lcklkOiBzdHJpbmcgfT4oKTtcblxuICBAVmlld0NoaWxkKCdyZXN1bHRMaXN0JywgeyBzdGF0aWM6IGZhbHNlIH0pIHJlc3VsdExpc3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaFRlcm0nLCB7IHN0YXRpYzogZmFsc2UgfSkgc2VhcmNoVGVybTogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGFzbVNlcnZpY2U6IEFzbVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IEFzbUNvbmZpZ1xuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBzZWFyY2hUZXJtOiBbJyddLFxuICAgIH0pO1xuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gICAgdGhpcy5zZWFyY2hSZXN1bHRzTG9hZGluZyQgPSB0aGlzLmFzbVNlcnZpY2UuZ2V0Q3VzdG9tZXJTZWFyY2hSZXN1bHRzTG9hZGluZygpO1xuICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuYXNtU2VydmljZS5nZXRDdXN0b21lclNlYXJjaFJlc3VsdHMoKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9scy5zZWFyY2hUZXJtLnZhbHVlQ2hhbmdlc1xuICAgICAgICAucGlwZShkZWJvdW5jZVRpbWUoMzAwKSlcbiAgICAgICAgLnN1YnNjcmliZShzZWFyY2hUZXJtVmFsdWUgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlU2VhcmNoVGVybShzZWFyY2hUZXJtVmFsdWUpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlYXJjaFRlcm0oc2VhcmNoVGVybVZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoXG4gICAgICBCb29sZWFuKHRoaXMuc2VsZWN0ZWRDdXN0b21lcikgJiZcbiAgICAgIHNlYXJjaFRlcm1WYWx1ZSAhPT0gdGhpcy5zZWxlY3RlZEN1c3RvbWVyLm5hbWVcbiAgICApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDdXN0b21lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKEJvb2xlYW4odGhpcy5zZWxlY3RlZEN1c3RvbWVyKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmFzbVNlcnZpY2UuY3VzdG9tZXJTZWFyY2hSZXNldCgpO1xuICAgIGlmIChzZWFyY2hUZXJtVmFsdWUudHJpbSgpLmxlbmd0aCA+PSAzKSB7XG4gICAgICB0aGlzLmFzbVNlcnZpY2UuY3VzdG9tZXJTZWFyY2goe1xuICAgICAgICBxdWVyeTogc2VhcmNoVGVybVZhbHVlLFxuICAgICAgICBwYWdlU2l6ZTogdGhpcy5jb25maWcuYXNtLmN1c3RvbWVyU2VhcmNoLm1heFJlc3VsdHMsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RDdXN0b21lckZyb21MaXN0KGN1c3RvbWVyOiBVc2VyKSB7XG4gICAgdGhpcy5zZWxlY3RlZEN1c3RvbWVyID0gY3VzdG9tZXI7XG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzLnNlYXJjaFRlcm0uc2V0VmFsdWUodGhpcy5zZWxlY3RlZEN1c3RvbWVyLm5hbWUpO1xuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICBpZiAoQm9vbGVhbih0aGlzLnNlbGVjdGVkQ3VzdG9tZXIpKSB7XG4gICAgICB0aGlzLnN1Ym1pdEV2ZW50LmVtaXQoeyBjdXN0b21lcklkOiB0aGlzLnNlbGVjdGVkQ3VzdG9tZXIuY3VzdG9tZXJJZCB9KTtcbiAgICB9XG4gIH1cblxuICBvbkRvY3VtZW50Q2xpY2soZXZlbnQpIHtcbiAgICBpZiAoQm9vbGVhbih0aGlzLnJlc3VsdExpc3QpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucmVzdWx0TGlzdC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgfHxcbiAgICAgICAgdGhpcy5zZWFyY2hUZXJtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xvc2VSZXN1bHRzKCkge1xuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gIH1cbn1cbiJdfQ==