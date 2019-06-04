/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/index';
var TabParagraphContainerComponent = /** @class */ (function () {
    function TabParagraphContainerComponent(componentData, cmsService) {
        var _this = this;
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.activeTabNum = 0;
        this.components$ = this.componentData.data$.pipe(switchMap((/**
         * @param {?} data
         * @return {?}
         */
        function (data) {
            return combineLatest(data.components.split(' ').map((/**
             * @param {?} component
             * @return {?}
             */
            function (component) {
                return _this.cmsService.getComponentData(component).pipe(map((/**
                 * @param {?} tab
                 * @return {?}
                 */
                function (tab) {
                    if (!tab.flexType) {
                        tab.flexType = tab.typeCode;
                    }
                    return tslib_1.__assign({}, tab, { title: "CMSTabParagraphContainer.tabs." + tab.uid });
                })));
            })));
        })));
    }
    /**
     * @param {?} tabNum
     * @return {?}
     */
    TabParagraphContainerComponent.prototype.select = /**
     * @param {?} tabNum
     * @return {?}
     */
    function (tabNum) {
        this.activeTabNum = tabNum;
    };
    TabParagraphContainerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-tab-paragraph-container',
                    template: "<ng-container *ngFor=\"let component of (components$ | async); let i = index\">\n  <h3 [class.active]=\"i === activeTabNum\" (click)=\"select(i)\">\n    {{ component.title | cxTranslate }}\n  </h3>\n  <div [class.active]=\"i === activeTabNum\">\n    <ng-container\n      *cxOutlet=\"component.flexType\"\n      [cxComponentWrapper]=\"component\"\n    >\n    </ng-container>\n  </div>\n</ng-container>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    TabParagraphContainerComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: CmsService }
    ]; };
    return TabParagraphContainerComponent;
}());
export { TabParagraphContainerComponent };
if (false) {
    /** @type {?} */
    TabParagraphContainerComponent.prototype.activeTabNum;
    /** @type {?} */
    TabParagraphContainerComponent.prototype.components$;
    /** @type {?} */
    TabParagraphContainerComponent.prototype.componentData;
    /**
     * @type {?}
     * @private
     */
    TabParagraphContainerComponent.prototype.cmsService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQTRCLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFO0lBUUUsd0NBQ1MsYUFBeUQsRUFDeEQsVUFBc0I7UUFGaEMsaUJBR0k7UUFGSyxrQkFBYSxHQUFiLGFBQWEsQ0FBNEM7UUFDeEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUpoQyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQU9qQixnQkFBVyxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzVELFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDWixPQUFBLGFBQWEsQ0FDWCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxTQUFTO2dCQUN0QyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQU0sU0FBUyxDQUFDLENBQUMsSUFBSSxDQUNuRCxHQUFHOzs7O2dCQUFDLFVBQUEsR0FBRztvQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTt3QkFDakIsR0FBRyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDO3FCQUM3QjtvQkFDRCw0QkFDSyxHQUFHLElBQ04sS0FBSyxFQUFFLG1DQUFpQyxHQUFHLENBQUMsR0FBSyxJQUNqRDtnQkFDSixDQUFDLEVBQUMsQ0FDSDtZQVZELENBVUMsRUFDRixDQUNGO1FBZEQsQ0FjQyxFQUNGLENBQ0YsQ0FBQztJQXBCQyxDQUFDOzs7OztJQXNCSiwrQ0FBTTs7OztJQUFOLFVBQU8sTUFBYztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUM3QixDQUFDOztnQkFuQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLDhaQUF1RDtvQkFDdkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQU5RLGdCQUFnQjtnQkFKaEIsVUFBVTs7SUEwQ25CLHFDQUFDO0NBQUEsQUFwQ0QsSUFvQ0M7U0EvQlksOEJBQThCOzs7SUFDekMsc0RBQWlCOztJQU9qQixxREFrQkU7O0lBdEJBLHVEQUFnRTs7Ozs7SUFDaEUsb0RBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zU2VydmljZSwgQ01TVGFiUGFyYWdyYXBoQ29udGFpbmVyIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdGFiLXBhcmFncmFwaC1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGFiUGFyYWdyYXBoQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgYWN0aXZlVGFiTnVtID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDTVNUYWJQYXJhZ3JhcGhDb250YWluZXI+LFxuICAgIHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZVxuICApIHt9XG5cbiAgY29tcG9uZW50cyQ6IE9ic2VydmFibGU8YW55W10+ID0gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgc3dpdGNoTWFwKGRhdGEgPT5cbiAgICAgIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgIGRhdGEuY29tcG9uZW50cy5zcGxpdCgnICcpLm1hcChjb21wb25lbnQgPT5cbiAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0Q29tcG9uZW50RGF0YTxhbnk+KGNvbXBvbmVudCkucGlwZShcbiAgICAgICAgICAgIG1hcCh0YWIgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRhYi5mbGV4VHlwZSkge1xuICAgICAgICAgICAgICAgIHRhYi5mbGV4VHlwZSA9IHRhYi50eXBlQ29kZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnRhYixcbiAgICAgICAgICAgICAgICB0aXRsZTogYENNU1RhYlBhcmFncmFwaENvbnRhaW5lci50YWJzLiR7dGFiLnVpZH1gLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgc2VsZWN0KHRhYk51bTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVUYWJOdW0gPSB0YWJOdW07XG4gIH1cbn1cbiJdfQ==