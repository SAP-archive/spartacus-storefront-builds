/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
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
                pageSize: this.config.asm.customerSearch.maxResults,
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
                template: "<form (submit)=\"onSubmit()\" [formGroup]=\"form\">\n  <input\n    #searchTerm\n    type=\"text\"\n    formControlName=\"searchTerm\"\n    placeholder=\"{{ 'asm.customerSearch.searchTerm.label' | cxTranslate }}\"\n  />\n  <button type=\"submit\" [disabled]=\"!selectedCustomer\">\n    {{ 'asm.customerSearch.submit' | cxTranslate }}\n  </button>\n</form>\n\n<div *ngIf=\"searchResults | async as results\" class=\"asm-results\" #resultList>\n  <a\n    *ngFor=\"let result of results.entries\"\n    (click)=\"selectCustomerFromList(result)\"\n    ><span class=\"result-name\">{{ result.name }}</span>\n    <span class=\"result-id\">{{ result.uid }}</span></a\n  >\n  <a\n    (click)=\"closeResults()\"\n    *ngIf=\"\n      !(searchResultsLoading$ | async) &&\n      searchTerm.value.length >= 3 &&\n      (!!results.entries && results.entries.length <= 0)\n    \"\n    >{{ 'asm.customerSearch.noMatch' | cxTranslate }}</a\n  >\n</div>\n\n<div class=\"asm-results\" *ngIf=\"searchResultsLoading$ | async\">\n  <div class=\"spinner\" aria-hidden=\"false\" aria-label=\"Loading\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</div>\n",
                encapsulation: ViewEncapsulation.None,
                host: {
                    '(document:click)': 'onDocumentClick($event)',
                },
                styles: ["cx-customer-selection button[type=submit]{border-color:#0a7e3e;color:#fff;padding-left:35px;background:url(data:image/png;base64,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6vkQdN2HukEeqklQD5uKewDY1lbq/zZxsq3NTC1yCypNSicn36GaBW8MwLe+ycmJlsnJb9Vosw8AaP8wo+GnTGcMlfreU9SdM5H3n1r6X/dYEDmGJmdAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGL2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIyNSIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjI3IiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wOS0yNVQxMjoyODo1MS0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iRGlzcGxheSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZTIyOTVhMC0yYWY0LTQ2Y2UtOThlNy0zZTU2YTM0YjFkZjUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozYmMzNWI0YS0wNjkxLTRmNDEtODk5OC1lYWFmOTI2NGQ2NmMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZWE4Y2FhMC0yMGU1LTQzN2ItYmQ5YS03YjlmMGZiNmYyZTYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZWE4Y2FhMC0yMGU1LTQzN2ItYmQ5YS03YjlmMGZiNmYyZTYiIHN0RXZ0OndoZW49IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZTIyOTVhMC0yYWY0LTQ2Y2UtOThlNy0zZTU2YTM0YjFkZjUiIHN0RXZ0OndoZW49IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuzZx/kAAAEoSURBVDjLY/z//z8DNQATA5UAhkGNe+f8f/757f+09e2kORXkNWR86P75/zCw7cax/6o9If/R1WDDOA368/cvmH7/7dP/tHXt/8k2KGlNy/8dN4/DXbf95rH/anhch9Mgz/kFYE3p6zv+f/j+GSwGokF8sgwCYZBLQC6CAZBL0V1HlEEwnLquDRxmMNfFrmyAqyEpHd1+85jh5Zd3YDYfOzeDlrgi4ehHdpFYi8f/KcdW///7DxKTQAP/e8zLJ81rfgtL/j949wws9vvvn/+9h5f9F212/090YEetqP2/+Nx2eABfeHbrv/WMNNKj/8fvX2D6+++f/+t3z/ov2Ojyn6wECQJHHlz8bzgplrws0rBn9v9XX97/L9zS/5+vwYkoQ0CYcdCVRwBmUrSjUTYI3gAAAABJRU5ErkJggg==) 10px center no-repeat #0a7e3e}cx-customer-selection form{display:flex;width:100%}@media (min-width:575px){cx-customer-selection button[type=submit]{-webkit-margin-start:8px;margin-inline-start:8px}cx-customer-selection form input{flex:1}}@media (max-width:575px){cx-customer-selection form{flex-direction:column}cx-customer-selection form>*{margin-bottom:12px}}cx-customer-selection .spinner{height:42px;align-items:center}cx-customer-selection .asm-results{width:calc(100vw - 4rem);border:1px solid #89919a;position:absolute;z-index:11;margin-top:40px;box-shadow:0 5px 20px 0 #d9d9d9,0 2px 8px 0 #ededed;background-color:#fff;border-radius:4px;min-height:50px}cx-customer-selection .asm-results a{color:#51555a;display:flex;flex-direction:column;cursor:pointer;padding:10px}@media (min-width:767px){cx-customer-selection .asm-results,cx-customer-selection form{width:50vw}cx-customer-selection .asm-results a{flex-direction:row}}cx-customer-selection .asm-results a *{flex:1}cx-customer-selection .asm-results a:hover{color:#32363a;background-color:#fafafa}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jdXN0b21lci1zZWxlY3Rpb24vY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUdaLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsR0FHWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBVzlDLE1BQU0sT0FBTywwQkFBMEI7Ozs7OztJQWFyQyxZQUNVLEVBQWUsRUFDZixVQUFzQixFQUN0QixNQUFpQjtRQUZqQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBZG5CLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU0xQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO0lBU3RELENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztZQUN4QixVQUFVLEVBQUUsQ0FBQyxFQUFFLENBQUM7U0FDakIsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxJQUFJ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YUFDRjs7OztZQWxCUSxXQUFXO1lBR2xCLFVBQVU7WUFEVixTQUFTOzs7MEJBd0JSLE1BQU07eUJBR04sU0FBUyxTQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7eUJBQ3pDLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzs7O0lBVjFDLDBDQUFnQjs7Ozs7SUFDaEIsa0RBQTBDOztJQUMxQywyREFBMkM7O0lBQzNDLG1EQUE4Qzs7SUFDOUMsc0RBQXVCOztJQUV2QixpREFDeUQ7O0lBRXpELGdEQUFtRTs7SUFDbkUsZ0RBQW1FOzs7OztJQUdqRSx3Q0FBdUI7Ozs7O0lBQ3ZCLGdEQUE4Qjs7Ozs7SUFDOUIsNENBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFZpZXdDaGlsZCxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7XG4gIEFzbUNvbmZpZyxcbiAgQXNtU2VydmljZSxcbiAgQ3VzdG9tZXJTZWFyY2hQYWdlLFxuICBVc2VyLFxufSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWJvdW5jZVRpbWUgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWN1c3RvbWVyLXNlbGVjdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9jdXN0b21lci1zZWxlY3Rpb24uY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9jdXN0b21lci1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MnXSxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgaG9zdDoge1xuICAgICcoZG9jdW1lbnQ6Y2xpY2spJzogJ29uRG9jdW1lbnRDbGljaygkZXZlbnQpJyxcbiAgfSxcbn0pXG5leHBvcnQgY2xhc3MgQ3VzdG9tZXJTZWxlY3Rpb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIGZvcm06IEZvcm1Hcm91cDtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIHNlYXJjaFJlc3VsdHNMb2FkaW5nJDogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgc2VhcmNoUmVzdWx0czogT2JzZXJ2YWJsZTxDdXN0b21lclNlYXJjaFBhZ2U+O1xuICBzZWxlY3RlZEN1c3RvbWVyOiBVc2VyO1xuXG4gIEBPdXRwdXQoKVxuICBzdWJtaXRFdmVudCA9IG5ldyBFdmVudEVtaXR0ZXI8eyBjdXN0b21lcklkOiBzdHJpbmcgfT4oKTtcblxuICBAVmlld0NoaWxkKCdyZXN1bHRMaXN0JywgeyBzdGF0aWM6IGZhbHNlIH0pIHJlc3VsdExpc3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3NlYXJjaFRlcm0nLCB7IHN0YXRpYzogZmFsc2UgfSkgc2VhcmNoVGVybTogRWxlbWVudFJlZjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGZiOiBGb3JtQnVpbGRlcixcbiAgICBwcml2YXRlIGFzbVNlcnZpY2U6IEFzbVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IEFzbUNvbmZpZ1xuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBzZWFyY2hUZXJtOiBbJyddLFxuICAgIH0pO1xuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gICAgdGhpcy5zZWFyY2hSZXN1bHRzTG9hZGluZyQgPSB0aGlzLmFzbVNlcnZpY2UuZ2V0Q3VzdG9tZXJTZWFyY2hSZXN1bHRzTG9hZGluZygpO1xuICAgIHRoaXMuc2VhcmNoUmVzdWx0cyA9IHRoaXMuYXNtU2VydmljZS5nZXRDdXN0b21lclNlYXJjaFJlc3VsdHMoKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuZm9ybS5jb250cm9scy5zZWFyY2hUZXJtLnZhbHVlQ2hhbmdlc1xuICAgICAgICAucGlwZShkZWJvdW5jZVRpbWUoMzAwKSlcbiAgICAgICAgLnN1YnNjcmliZShzZWFyY2hUZXJtVmFsdWUgPT4ge1xuICAgICAgICAgIHRoaXMuaGFuZGxlU2VhcmNoVGVybShzZWFyY2hUZXJtVmFsdWUpO1xuICAgICAgICB9KVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGhhbmRsZVNlYXJjaFRlcm0oc2VhcmNoVGVybVZhbHVlOiBzdHJpbmcpIHtcbiAgICBpZiAoXG4gICAgICBCb29sZWFuKHRoaXMuc2VsZWN0ZWRDdXN0b21lcikgJiZcbiAgICAgIHNlYXJjaFRlcm1WYWx1ZSAhPT0gdGhpcy5zZWxlY3RlZEN1c3RvbWVyLm5hbWVcbiAgICApIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRDdXN0b21lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgaWYgKEJvb2xlYW4odGhpcy5zZWxlY3RlZEN1c3RvbWVyKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmFzbVNlcnZpY2UuY3VzdG9tZXJTZWFyY2hSZXNldCgpO1xuICAgIGlmIChzZWFyY2hUZXJtVmFsdWUudHJpbSgpLmxlbmd0aCA+PSAzKSB7XG4gICAgICB0aGlzLmFzbVNlcnZpY2UuY3VzdG9tZXJTZWFyY2goe1xuICAgICAgICBxdWVyeTogc2VhcmNoVGVybVZhbHVlLFxuICAgICAgICBwYWdlU2l6ZTogdGhpcy5jb25maWcuYXNtLmN1c3RvbWVyU2VhcmNoLm1heFJlc3VsdHMsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZWxlY3RDdXN0b21lckZyb21MaXN0KGN1c3RvbWVyOiBVc2VyKSB7XG4gICAgdGhpcy5zZWxlY3RlZEN1c3RvbWVyID0gY3VzdG9tZXI7XG4gICAgdGhpcy5mb3JtLmNvbnRyb2xzLnNlYXJjaFRlcm0uc2V0VmFsdWUodGhpcy5zZWxlY3RlZEN1c3RvbWVyLm5hbWUpO1xuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gIH1cblxuICBvblN1Ym1pdCgpOiB2b2lkIHtcbiAgICBpZiAoQm9vbGVhbih0aGlzLnNlbGVjdGVkQ3VzdG9tZXIpKSB7XG4gICAgICB0aGlzLnN1Ym1pdEV2ZW50LmVtaXQoeyBjdXN0b21lcklkOiB0aGlzLnNlbGVjdGVkQ3VzdG9tZXIuY3VzdG9tZXJJZCB9KTtcbiAgICB9XG4gIH1cblxuICBvbkRvY3VtZW50Q2xpY2soZXZlbnQpIHtcbiAgICBpZiAoQm9vbGVhbih0aGlzLnJlc3VsdExpc3QpKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMucmVzdWx0TGlzdC5uYXRpdmVFbGVtZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgfHxcbiAgICAgICAgdGhpcy5zZWFyY2hUZXJtLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xvc2VSZXN1bHRzKCkge1xuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gIH1cbn1cbiJdfQ==