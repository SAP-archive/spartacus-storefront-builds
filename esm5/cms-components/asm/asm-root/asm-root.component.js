/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsmService } from '@spartacus/core';
import { Subscription } from 'rxjs';
var AsmRootComponent = /** @class */ (function () {
    function AsmRootComponent(asmService, activatedRoute) {
        this.asmService = asmService;
        this.activatedRoute = activatedRoute;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    AsmRootComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.asmUi$ = this.asmService.getAsmUiState();
        this.subscription.add(this.activatedRoute.queryParamMap.subscribe((/**
         * @param {?} queryParams
         * @return {?}
         */
        function (queryParams) {
            if (queryParams.get('asm') === 'true') {
                _this.showUi();
            }
        })));
    };
    /**
     * @return {?}
     */
    AsmRootComponent.prototype.expandUi = /**
     * @return {?}
     */
    function () {
        this.asmService.updateAsmUiState({ expanded: true });
    };
    /**
     * @return {?}
     */
    AsmRootComponent.prototype.collapseUi = /**
     * @return {?}
     */
    function () {
        this.asmService.updateAsmUiState({ expanded: false });
    };
    /**
     * @private
     * @return {?}
     */
    AsmRootComponent.prototype.showUi = /**
     * @private
     * @return {?}
     */
    function () {
        this.asmService.updateAsmUiState({ visible: true });
    };
    /**
     * @return {?}
     */
    AsmRootComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.subscription.unsubscribe();
    };
    AsmRootComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-asm',
                    template: "<ng-container *ngIf=\"asmUi$ | async as asmUi\">\n  <ng-container *ngIf=\"asmUi?.visible\">\n    <cx-asm-main-ui [class.collapse]=\"!asmUi?.expanded\"> </cx-asm-main-ui>\n  </ng-container>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    AsmRootComponent.ctorParameters = function () { return [
        { type: AsmService },
        { type: ActivatedRoute }
    ]; };
    return AsmRootComponent;
}());
export { AsmRootComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AsmRootComponent.prototype.subscription;
    /** @type {?} */
    AsmRootComponent.prototype.asmUi$;
    /**
     * @type {?}
     * @protected
     */
    AsmRootComponent.prototype.asmService;
    /**
     * @type {?}
     * @protected
     */
    AsmRootComponent.prototype.activatedRoute;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXJvb3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL2FzbS1yb290L2FzbS1yb290LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhEO0lBUUUsMEJBQ1ksVUFBc0IsRUFDdEIsY0FBOEI7UUFEOUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMbEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXZDLENBQUM7Ozs7SUFFSixtQ0FBUTs7O0lBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsV0FBVztZQUNyRCxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssTUFBTSxFQUFFO2dCQUNyQyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCxxQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFFTyxpQ0FBTTs7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLDJOQUF3QztpQkFDekM7Ozs7Z0JBTlEsVUFBVTtnQkFEVixjQUFjOztJQTRDdkIsdUJBQUM7Q0FBQSxBQXhDRCxJQXdDQztTQXBDWSxnQkFBZ0I7Ozs7OztJQUMzQix3Q0FBMEM7O0lBQzFDLGtDQUEwQjs7Ozs7SUFHeEIsc0NBQWdDOzs7OztJQUNoQywwQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBc21TZXJ2aWNlLCBBc21VaSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYXNtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FzbS1yb290LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtUm9vdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIGFzbVVpJDogT2JzZXJ2YWJsZTxBc21VaT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFzbVNlcnZpY2U6IEFzbVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hc21VaSQgPSB0aGlzLmFzbVNlcnZpY2UuZ2V0QXNtVWlTdGF0ZSgpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtTWFwLnN1YnNjcmliZShxdWVyeVBhcmFtcyA9PiB7XG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5nZXQoJ2FzbScpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICB0aGlzLnNob3dVaSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBleHBhbmRVaSgpOiB2b2lkIHtcbiAgICB0aGlzLmFzbVNlcnZpY2UudXBkYXRlQXNtVWlTdGF0ZSh7IGV4cGFuZGVkOiB0cnVlIH0pO1xuICB9XG5cbiAgY29sbGFwc2VVaSgpOiB2b2lkIHtcbiAgICB0aGlzLmFzbVNlcnZpY2UudXBkYXRlQXNtVWlTdGF0ZSh7IGV4cGFuZGVkOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd1VpKCk6IHZvaWQge1xuICAgIHRoaXMuYXNtU2VydmljZS51cGRhdGVBc21VaVN0YXRlKHsgdmlzaWJsZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==