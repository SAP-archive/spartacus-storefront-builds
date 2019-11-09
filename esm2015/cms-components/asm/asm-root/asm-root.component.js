/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsmService } from '@spartacus/core';
import { Subscription } from 'rxjs';
export class AsmRootComponent {
    /**
     * @param {?} asmService
     * @param {?} activatedRoute
     */
    constructor(asmService, activatedRoute) {
        this.asmService = asmService;
        this.activatedRoute = activatedRoute;
        this.subscription = new Subscription();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.asmUi$ = this.asmService.getAsmUiState();
        this.subscription.add(this.activatedRoute.queryParamMap.subscribe((/**
         * @param {?} queryParams
         * @return {?}
         */
        queryParams => {
            if (queryParams.get('asm') === 'true') {
                this.showUi();
            }
        })));
    }
    /**
     * @return {?}
     */
    expandUi() {
        this.asmService.updateAsmUiState({ expanded: true });
    }
    /**
     * @return {?}
     */
    collapseUi() {
        this.asmService.updateAsmUiState({ expanded: false });
    }
    /**
     * @private
     * @return {?}
     */
    showUi() {
        this.asmService.updateAsmUiState({ visible: true });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AsmRootComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-asm',
                template: "<ng-container *ngIf=\"asmUi$ | async as asmUi\">\n  <ng-container *ngIf=\"asmUi?.visible\">\n    <cx-asm-main-ui [class.collapse]=\"!asmUi?.expanded\"> </cx-asm-main-ui>\n  </ng-container>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
AsmRootComponent.ctorParameters = () => [
    { type: AsmService },
    { type: ActivatedRoute }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXJvb3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL2FzbS1yb290L2FzbS1yb290LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBTWhELE1BQU0sT0FBTyxnQkFBZ0I7Ozs7O0lBSTNCLFlBQ1ksVUFBc0IsRUFDdEIsY0FBOEI7UUFEOUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMbEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXZDLENBQUM7Ozs7SUFFSixRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTlDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxTQUFTOzs7O1FBQUMsV0FBVyxDQUFDLEVBQUU7WUFDeEQsSUFBSSxXQUFXLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxLQUFLLE1BQU0sRUFBRTtnQkFDckMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ2Y7UUFDSCxDQUFDLEVBQUMsQ0FDSCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdkQsQ0FBQzs7OztJQUVELFVBQVU7UUFDUixJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFFTyxNQUFNO1FBQ1osSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7WUF2Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxRQUFRO2dCQUNsQiwyTkFBd0M7YUFDekM7Ozs7WUFOUSxVQUFVO1lBRFYsY0FBYzs7Ozs7OztJQVNyQix3Q0FBMEM7O0lBQzFDLGtDQUEwQjs7Ozs7SUFHeEIsc0NBQWdDOzs7OztJQUNoQywwQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBc21TZXJ2aWNlLCBBc21VaSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYXNtJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FzbS1yb290LmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgQXNtUm9vdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJpdmF0ZSBzdWJzY3JpcHRpb24gPSBuZXcgU3Vic2NyaXB0aW9uKCk7XG4gIGFzbVVpJDogT2JzZXJ2YWJsZTxBc21VaT47XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGFzbVNlcnZpY2U6IEFzbVNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5hc21VaSQgPSB0aGlzLmFzbVNlcnZpY2UuZ2V0QXNtVWlTdGF0ZSgpO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5hY3RpdmF0ZWRSb3V0ZS5xdWVyeVBhcmFtTWFwLnN1YnNjcmliZShxdWVyeVBhcmFtcyA9PiB7XG4gICAgICAgIGlmIChxdWVyeVBhcmFtcy5nZXQoJ2FzbScpID09PSAndHJ1ZScpIHtcbiAgICAgICAgICB0aGlzLnNob3dVaSgpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICk7XG4gIH1cblxuICBleHBhbmRVaSgpOiB2b2lkIHtcbiAgICB0aGlzLmFzbVNlcnZpY2UudXBkYXRlQXNtVWlTdGF0ZSh7IGV4cGFuZGVkOiB0cnVlIH0pO1xuICB9XG5cbiAgY29sbGFwc2VVaSgpOiB2b2lkIHtcbiAgICB0aGlzLmFzbVNlcnZpY2UudXBkYXRlQXNtVWlTdGF0ZSh7IGV4cGFuZGVkOiBmYWxzZSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc2hvd1VpKCk6IHZvaWQge1xuICAgIHRoaXMuYXNtU2VydmljZS51cGRhdGVBc21VaVN0YXRlKHsgdmlzaWJsZTogdHJ1ZSB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==