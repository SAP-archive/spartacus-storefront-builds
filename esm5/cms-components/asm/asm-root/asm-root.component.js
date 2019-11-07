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
                    template: "<ng-container *ngIf=\"asmUi$ | async as asmUi\">\n  <ng-container *ngIf=\"asmUi?.visible\">\n    <cx-asm-main-ui [class.collapse]=\"!asmUi?.expanded\"> </cx-asm-main-ui>\n    <div class=\"expand-ui\" *ngIf=\"asmUi?.expanded; else collapse\">\n      <button class=\"expand-ui-btn\" (click)=\"collapseUi()\">\n        <svg\n          height=\"14\"\n          width=\"14\"\n          viewBox=\"0 0 512 512\"\n          xmlns=\"http://www.w3.org/2000/svg\"\n        >\n          <path\n            d=\"M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z\"\n          ></path>\n        </svg>\n      </button>\n    </div>\n\n    <ng-template #collapse>\n      <div class=\"expand-ui\">\n        <button class=\"expand-ui-btn\" (click)=\"expandUi()\">\n          <svg\n            height=\"14\"\n            width=\"14\"\n            aria-hidden=\"true\"\n            data-icon=\"stop-circle\"\n            data-prefix=\"far\"\n            focusable=\"false\"\n            role=\"img\"\n            viewBox=\"0 0 512 512\"\n            xmlns=\"http://www.w3.org/2000/svg\"\n          >\n            <path\n              fill=\"currentColor\"\n              d=\"M143 256.3L7 120.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0L313 86.3c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.4 9.5-24.6 9.5-34 .1zm34 192l136-136c9.4-9.4 9.4-24.6 0-33.9l-22.6-22.6c-9.4-9.4-24.6-9.4-33.9 0L160 352.1l-96.4-96.4c-9.4-9.4-24.6-9.4-33.9 0L7 278.3c-9.4 9.4-9.4 24.6 0 33.9l136 136c9.4 9.5 24.6 9.5 34 .1z\"\n            ></path>\n          </svg>\n        </button>\n      </div>\n    </ng-template>\n  </ng-container>\n</ng-container>\n"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNtLXJvb3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvYXNtL2FzbS1yb290L2FzbS1yb290LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsTUFBTSxlQUFlLENBQUM7QUFDN0QsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxVQUFVLEVBQVMsTUFBTSxpQkFBaUIsQ0FBQztBQUNwRCxPQUFPLEVBQWMsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRWhEO0lBUUUsMEJBQ1ksVUFBc0IsRUFDdEIsY0FBOEI7UUFEOUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFMbEMsaUJBQVksR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBTXZDLENBQUM7Ozs7SUFFSixtQ0FBUTs7O0lBQVI7UUFBQSxpQkFVQztRQVRDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUU5QyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FDbkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLENBQUMsU0FBUzs7OztRQUFDLFVBQUEsV0FBVztZQUNyRCxJQUFJLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssTUFBTSxFQUFFO2dCQUNyQyxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7YUFDZjtRQUNILENBQUMsRUFBQyxDQUNILENBQUM7SUFDSixDQUFDOzs7O0lBRUQsbUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Ozs7SUFFRCxxQ0FBVTs7O0lBQVY7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDeEQsQ0FBQzs7Ozs7SUFFTyxpQ0FBTTs7OztJQUFkO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQ3RELENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ2xDLENBQUM7O2dCQXZDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFFBQVE7b0JBQ2xCLGc5REFBd0M7aUJBQ3pDOzs7O2dCQU5RLFVBQVU7Z0JBRFYsY0FBYzs7SUE0Q3ZCLHVCQUFDO0NBQUEsQUF4Q0QsSUF3Q0M7U0FwQ1ksZ0JBQWdCOzs7Ozs7SUFDM0Isd0NBQTBDOztJQUMxQyxrQ0FBMEI7Ozs7O0lBR3hCLHNDQUFnQzs7Ozs7SUFDaEMsMENBQXdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3ksIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgQXNtU2VydmljZSwgQXNtVWkgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFzbScsXG4gIHRlbXBsYXRlVXJsOiAnLi9hc20tcm9vdC5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEFzbVJvb3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uID0gbmV3IFN1YnNjcmlwdGlvbigpO1xuICBhc21VaSQ6IE9ic2VydmFibGU8QXNtVWk+O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBhc21TZXJ2aWNlOiBBc21TZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBhY3RpdmF0ZWRSb3V0ZTogQWN0aXZhdGVkUm91dGVcbiAgKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuYXNtVWkkID0gdGhpcy5hc21TZXJ2aWNlLmdldEFzbVVpU3RhdGUoKTtcblxuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuYWN0aXZhdGVkUm91dGUucXVlcnlQYXJhbU1hcC5zdWJzY3JpYmUocXVlcnlQYXJhbXMgPT4ge1xuICAgICAgICBpZiAocXVlcnlQYXJhbXMuZ2V0KCdhc20nKSA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgdGhpcy5zaG93VWkoKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZXhwYW5kVWkoKTogdm9pZCB7XG4gICAgdGhpcy5hc21TZXJ2aWNlLnVwZGF0ZUFzbVVpU3RhdGUoeyBleHBhbmRlZDogdHJ1ZSB9KTtcbiAgfVxuXG4gIGNvbGxhcHNlVWkoKTogdm9pZCB7XG4gICAgdGhpcy5hc21TZXJ2aWNlLnVwZGF0ZUFzbVVpU3RhdGUoeyBleHBhbmRlZDogZmFsc2UgfSk7XG4gIH1cblxuICBwcml2YXRlIHNob3dVaSgpOiB2b2lkIHtcbiAgICB0aGlzLmFzbVNlcnZpY2UudXBkYXRlQXNtVWlTdGF0ZSh7IHZpc2libGU6IHRydWUgfSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=