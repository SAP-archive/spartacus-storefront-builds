/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, EventEmitter, Output, ViewChild, ViewEncapsulation, } from '@angular/core';
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
                    template: "<form (submit)=\"onSubmit()\" [formGroup]=\"form\">\n  <input\n    #searchTerm\n    type=\"text\"\n    formControlName=\"searchTerm\"\n    placeholder=\"{{ 'asm.customerSearch.searchTerm.label' | cxTranslate }}\"\n  />\n  <button type=\"submit\" [disabled]=\"!selectedCustomer\">\n    {{ 'asm.customerSearch.submit' | cxTranslate }}\n  </button>\n</form>\n\n<div *ngIf=\"searchResults | async as results\" class=\"asm-results\" #resultList>\n  <a\n    *ngFor=\"let result of results.entries\"\n    (click)=\"selectCustomerFromList(result)\"\n    ><span class=\"result-name\">{{ result.name }}</span>\n    <span class=\"result-id\">{{ result.uid }}</span></a\n  >\n  <a\n    (click)=\"closeResults()\"\n    *ngIf=\"\n      !(searchResultsLoading$ | async) &&\n      searchTerm.value.length >= 3 &&\n      (!!results.entries && results.entries.length <= 0)\n    \"\n    >{{ 'asm.customerSearch.noMatch' | cxTranslate }}</a\n  >\n</div>\n\n<div class=\"asm-results\" *ngIf=\"searchResultsLoading$ | async\">\n  <div class=\"spinner\" aria-hidden=\"false\" aria-label=\"Loading\">\n    <div></div>\n    <div></div>\n    <div></div>\n  </div>\n</div>\n",
                    encapsulation: ViewEncapsulation.None,
                    host: {
                        '(document:click)': 'onDocumentClick($event)',
                    },
                    styles: ["cx-customer-selection button[type=submit]{border-color:#0a7e3e;color:#fff;padding-left:35px;background:url(data:image/png;base64,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6vkQdN2HukEeqklQD5uKewDY1lbq/zZxsq3NTC1yCypNSicn36GaBW8MwLe+ycmJlsnJb9Vosw8AaP8wo+GnTGcMlfreU9SdM5H3n1r6X/dYEDmGJmdAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAGL2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIGV4aWY6UGl4ZWxYRGltZW5zaW9uPSIyNSIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjI3IiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOS0wOS0yNVQxMjoyODo1MS0wNDowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHhtcDpNZXRhZGF0YURhdGU9IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiBwaG90b3Nob3A6Q29sb3JNb2RlPSIzIiBwaG90b3Nob3A6SUNDUHJvZmlsZT0iRGlzcGxheSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowZTIyOTVhMC0yYWY0LTQ2Y2UtOThlNy0zZTU2YTM0YjFkZjUiIHhtcE1NOkRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDozYmMzNWI0YS0wNjkxLTRmNDEtODk5OC1lYWFmOTI2NGQ2NmMiIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjZWE4Y2FhMC0yMGU1LTQzN2ItYmQ5YS03YjlmMGZiNmYyZTYiPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpjZWE4Y2FhMC0yMGU1LTQzN2ItYmQ5YS03YjlmMGZiNmYyZTYiIHN0RXZ0OndoZW49IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDowZTIyOTVhMC0yYWY0LTQ2Y2UtOThlNy0zZTU2YTM0YjFkZjUiIHN0RXZ0OndoZW49IjIwMTktMDktMjVUMTI6MzI6MjAtMDQ6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChNYWNpbnRvc2gpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuzZx/kAAAEoSURBVDjLY/z//z8DNQATA5UAhkGNe+f8f/757f+09e2kORXkNWR86P75/zCw7cax/6o9If/R1WDDOA368/cvmH7/7dP/tHXt/8k2KGlNy/8dN4/DXbf95rH/anhch9Mgz/kFYE3p6zv+f/j+GSwGokF8sgwCYZBLQC6CAZBL0V1HlEEwnLquDRxmMNfFrmyAqyEpHd1+85jh5Zd3YDYfOzeDlrgi4ehHdpFYi8f/KcdW///7DxKTQAP/e8zLJ81rfgtL/j949wws9vvvn/+9h5f9F212/090YEetqP2/+Nx2eABfeHbrv/WMNNKj/8fvX2D6+++f/+t3z/ov2Ojyn6wECQJHHlz8bzgplrws0rBn9v9XX97/L9zS/5+vwYkoQ0CYcdCVRwBmUrSjUTYI3gAAAABJRU5ErkJggg==) 10px center no-repeat #0a7e3e}cx-customer-selection form{display:flex;width:100%}@media (min-width:575px){cx-customer-selection button[type=submit]{-webkit-margin-start:8px;margin-inline-start:8px}cx-customer-selection form input{flex:1}}@media (max-width:575px){cx-customer-selection form{flex-direction:column}cx-customer-selection form>*{margin-bottom:12px}}cx-customer-selection .spinner{height:42px;align-items:center}cx-customer-selection .asm-results{width:calc(100vw - 4rem);border:1px solid #89919a;position:absolute;z-index:11;margin-top:40px;box-shadow:0 5px 20px 0 #d9d9d9,0 2px 8px 0 #ededed;background-color:#fff;border-radius:4px;min-height:50px}cx-customer-selection .asm-results a{color:#51555a;display:flex;flex-direction:column;cursor:pointer;padding:10px}@media (min-width:767px){cx-customer-selection .asm-results,cx-customer-selection form{width:50vw}cx-customer-selection .asm-results a{flex-direction:row}}cx-customer-selection .asm-results a *{flex:1}cx-customer-selection .asm-results a:hover{color:#32363a;background-color:#fafafa}"]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL2FzbS9jdXN0b21lci1zZWxlY3Rpb24vY3VzdG9tZXItc2VsZWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUdaLE1BQU0sRUFDTixTQUFTLEVBQ1QsaUJBQWlCLEdBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxXQUFXLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4RCxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsR0FHWCxNQUFNLGlCQUFpQixDQUFDO0FBQ3pCLE9BQU8sRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDaEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTlDO0lBc0JFLG9DQUNVLEVBQWUsRUFDZixVQUFzQixFQUN0QixNQUFpQjtRQUZqQixPQUFFLEdBQUYsRUFBRSxDQUFhO1FBQ2YsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFXO1FBZG5CLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQU0xQyxnQkFBVyxHQUFHLElBQUksWUFBWSxFQUEwQixDQUFDO0lBU3RELENBQUM7Ozs7SUFFSiw2Q0FBUTs7O0lBQVI7UUFBQSxpQkFlQztRQWRDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDeEIsVUFBVSxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ2pCLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN0QyxJQUFJLENBQUMscUJBQXFCLEdBQUcsSUFBSSxD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QUNyQyxJQUFJLEVBQUU7d0JBQ0osa0JBQWtCLEVBQUUseUJBQXlCO3FCQUM5Qzs7aUJBQ0Y7Ozs7Z0JBbEJRLFdBQVc7Z0JBR2xCLFVBQVU7Z0JBRFYsU0FBUzs7OzhCQXdCUixNQUFNOzZCQUdOLFNBQVMsU0FBQyxZQUFZLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFOzZCQUN6QyxTQUFTLFNBQUMsWUFBWSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTs7SUE2RTVDLGlDQUFDO0NBQUEsQUFqR0QsSUFpR0M7U0F4RlksMEJBQTBCOzs7SUFDckMsMENBQWdCOzs7OztJQUNoQixrREFBMEM7O0lBQzFDLDJEQUEyQzs7SUFDM0MsbURBQThDOztJQUM5QyxzREFBdUI7O0lBRXZCLGlEQUN5RDs7SUFFekQsZ0RBQW1FOztJQUNuRSxnREFBbUU7Ozs7O0lBR2pFLHdDQUF1Qjs7Ozs7SUFDdkIsZ0RBQThCOzs7OztJQUM5Qiw0Q0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgVmlld0NoaWxkLFxuICBWaWV3RW5jYXBzdWxhdGlvbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgRm9ybUdyb3VwIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHtcbiAgQXNtQ29uZmlnLFxuICBBc21TZXJ2aWNlLFxuICBDdXN0b21lclNlYXJjaFBhZ2UsXG4gIFVzZXIsXG59IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRlYm91bmNlVGltZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtY3VzdG9tZXItc2VsZWN0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1c3RvbWVyLXNlbGVjdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2N1c3RvbWVyLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyddLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBob3N0OiB7XG4gICAgJyhkb2N1bWVudDpjbGljayknOiAnb25Eb2N1bWVudENsaWNrKCRldmVudCknLFxuICB9LFxufSlcbmV4cG9ydCBjbGFzcyBDdXN0b21lclNlbGVjdGlvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgZm9ybTogRm9ybUdyb3VwO1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcbiAgc2VhcmNoUmVzdWx0c0xvYWRpbmckOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICBzZWFyY2hSZXN1bHRzOiBPYnNlcnZhYmxlPEN1c3RvbWVyU2VhcmNoUGFnZT47XG4gIHNlbGVjdGVkQ3VzdG9tZXI6IFVzZXI7XG5cbiAgQE91dHB1dCgpXG4gIHN1Ym1pdEV2ZW50ID0gbmV3IEV2ZW50RW1pdHRlcjx7IGN1c3RvbWVySWQ6IHN0cmluZyB9PigpO1xuXG4gIEBWaWV3Q2hpbGQoJ3Jlc3VsdExpc3QnLCB7IHN0YXRpYzogZmFsc2UgfSkgcmVzdWx0TGlzdDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnc2VhcmNoVGVybScsIHsgc3RhdGljOiBmYWxzZSB9KSBzZWFyY2hUZXJtOiBFbGVtZW50UmVmO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyLFxuICAgIHByaXZhdGUgYXNtU2VydmljZTogQXNtU2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogQXNtQ29uZmlnXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmZvcm0gPSB0aGlzLmZiLmdyb3VwKHtcbiAgICAgIHNlYXJjaFRlcm06IFsnJ10sXG4gICAgfSk7XG4gICAgdGhpcy5hc21TZXJ2aWNlLmN1c3RvbWVyU2VhcmNoUmVzZXQoKTtcbiAgICB0aGlzLnNlYXJjaFJlc3VsdHNMb2FkaW5nJCA9IHRoaXMuYXNtU2VydmljZS5nZXRDdXN0b21lclNlYXJjaFJlc3VsdHNMb2FkaW5nKCk7XG4gICAgdGhpcy5zZWFyY2hSZXN1bHRzID0gdGhpcy5hc21TZXJ2aWNlLmdldEN1c3RvbWVyU2VhcmNoUmVzdWx0cygpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5mb3JtLmNvbnRyb2xzLnNlYXJjaFRlcm0udmFsdWVDaGFuZ2VzXG4gICAgICAgIC5waXBlKGRlYm91bmNlVGltZSgzMDApKVxuICAgICAgICAuc3Vic2NyaWJlKHNlYXJjaFRlcm1WYWx1ZSA9PiB7XG4gICAgICAgICAgdGhpcy5oYW5kbGVTZWFyY2hUZXJtKHNlYXJjaFRlcm1WYWx1ZSk7XG4gICAgICAgIH0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlU2VhcmNoVGVybShzZWFyY2hUZXJtVmFsdWU6IHN0cmluZykge1xuICAgIGlmIChcbiAgICAgIEJvb2xlYW4odGhpcy5zZWxlY3RlZEN1c3RvbWVyKSAmJlxuICAgICAgc2VhcmNoVGVybVZhbHVlICE9PSB0aGlzLnNlbGVjdGVkQ3VzdG9tZXIubmFtZVxuICAgICkge1xuICAgICAgdGhpcy5zZWxlY3RlZEN1c3RvbWVyID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBpZiAoQm9vbGVhbih0aGlzLnNlbGVjdGVkQ3VzdG9tZXIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaFJlc2V0KCk7XG4gICAgaWYgKHNlYXJjaFRlcm1WYWx1ZS50cmltKCkubGVuZ3RoID49IDMpIHtcbiAgICAgIHRoaXMuYXNtU2VydmljZS5jdXN0b21lclNlYXJjaCh7XG4gICAgICAgIHF1ZXJ5OiBzZWFyY2hUZXJtVmFsdWUsXG4gICAgICAgIHBhZ2VTaXplOiB0aGlzLmNvbmZpZy5hc20uY3VzdG9tZXJTZWFyY2gubWF4UmVzdWx0cyxcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHNlbGVjdEN1c3RvbWVyRnJvbUxpc3QoY3VzdG9tZXI6IFVzZXIpIHtcbiAgICB0aGlzLnNlbGVjdGVkQ3VzdG9tZXIgPSBjdXN0b21lcjtcbiAgICB0aGlzLmZvcm0uY29udHJvbHMuc2VhcmNoVGVybS5zZXRWYWx1ZSh0aGlzLnNlbGVjdGVkQ3VzdG9tZXIubmFtZSk7XG4gICAgdGhpcy5hc21TZXJ2aWNlLmN1c3RvbWVyU2VhcmNoUmVzZXQoKTtcbiAgfVxuXG4gIG9uU3VibWl0KCk6IHZvaWQge1xuICAgIGlmIChCb29sZWFuKHRoaXMuc2VsZWN0ZWRDdXN0b21lcikpIHtcbiAgICAgIHRoaXMuc3VibWl0RXZlbnQuZW1pdCh7IGN1c3RvbWVySWQ6IHRoaXMuc2VsZWN0ZWRDdXN0b21lci5jdXN0b21lcklkIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRG9jdW1lbnRDbGljayhldmVudCkge1xuICAgIGlmIChCb29sZWFuKHRoaXMucmVzdWx0TGlzdCkpIHtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5yZXN1bHRMaXN0Lm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSB8fFxuICAgICAgICB0aGlzLnNlYXJjaFRlcm0ubmF0aXZlRWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hc21TZXJ2aWNlLmN1c3RvbWVyU2VhcmNoUmVzZXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjbG9zZVJlc3VsdHMoKSB7XG4gICAgdGhpcy5hc21TZXJ2aWNlLmN1c3RvbWVyU2VhcmNoUmVzZXQoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgdGhpcy5hc21TZXJ2aWNlLmN1c3RvbWVyU2VhcmNoUmVzZXQoKTtcbiAgfVxufVxuIl19