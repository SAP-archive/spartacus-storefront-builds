/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        this.components$ = this.componentData.data$.pipe(switchMap(function (data) {
            return combineLatest(data.components.split(' ').map(function (component) {
                return _this.cmsService.getComponentData(component).pipe(map(function (tab) {
                    if (!tab.flexType) {
                        tab.flexType = tab.typeCode;
                    }
                    return tslib_1.__assign({}, tab, { title: "CMSTabParagraphContainer.tabs." + tab.uid });
                }));
            }));
        }));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQTRCLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRWhELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFO0lBUUUsd0NBQ1MsYUFBeUQsRUFDeEQsVUFBc0I7UUFGaEMsaUJBR0k7UUFGSyxrQkFBYSxHQUFiLGFBQWEsQ0FBNEM7UUFDeEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUpoQyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQU9qQixnQkFBVyxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzVELFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDWixPQUFBLGFBQWEsQ0FDWCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBQSxTQUFTO2dCQUN0QyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQU0sU0FBUyxDQUFDLENBQUMsSUFBSSxDQUNuRCxHQUFHLENBQUMsVUFBQSxHQUFHO29CQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO3dCQUNqQixHQUFHLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7cUJBQzdCO29CQUNELDRCQUNLLEdBQUcsSUFDTixLQUFLLEVBQUUsbUNBQWlDLEdBQUcsQ0FBQyxHQUFLLElBQ2pEO2dCQUNKLENBQUMsQ0FBQyxDQUNIO1lBVkQsQ0FVQyxDQUNGLENBQ0Y7UUFkRCxDQWNDLENBQ0YsQ0FDRixDQUFDO0lBcEJDLENBQUM7Ozs7O0lBc0JKLCtDQUFNOzs7O0lBQU4sVUFBTyxNQUFjO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO0lBQzdCLENBQUM7O2dCQW5DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtvQkFDdEMsOFpBQXVEO29CQUN2RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBTlEsZ0JBQWdCO2dCQUpoQixVQUFVOztJQTBDbkIscUNBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQS9CWSw4QkFBOEI7OztJQUN6QyxzREFBaUI7O0lBT2pCLHFEQWtCRTs7SUF0QkEsdURBQWdFOzs7OztJQUNoRSxvREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlLCBDTVNUYWJQYXJhZ3JhcGhDb250YWluZXIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvaW5kZXgnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC10YWItcGFyYWdyYXBoLWNvbnRhaW5lcicsXG4gIHRlbXBsYXRlVXJsOiAnLi90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBUYWJQYXJhZ3JhcGhDb250YWluZXJDb21wb25lbnQge1xuICBhY3RpdmVUYWJOdW0gPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBjb21wb25lbnREYXRhOiBDbXNDb21wb25lbnREYXRhPENNU1RhYlBhcmFncmFwaENvbnRhaW5lcj4sXG4gICAgcHJpdmF0ZSBjbXNTZXJ2aWNlOiBDbXNTZXJ2aWNlXG4gICkge31cblxuICBjb21wb25lbnRzJDogT2JzZXJ2YWJsZTxhbnlbXT4gPSB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICBzd2l0Y2hNYXAoZGF0YSA9PlxuICAgICAgY29tYmluZUxhdGVzdChcbiAgICAgICAgZGF0YS5jb21wb25lbnRzLnNwbGl0KCcgJykubWFwKGNvbXBvbmVudCA9PlxuICAgICAgICAgIHRoaXMuY21zU2VydmljZS5nZXRDb21wb25lbnREYXRhPGFueT4oY29tcG9uZW50KS5waXBlKFxuICAgICAgICAgICAgbWFwKHRhYiA9PiB7XG4gICAgICAgICAgICAgIGlmICghdGFiLmZsZXhUeXBlKSB7XG4gICAgICAgICAgICAgICAgdGFiLmZsZXhUeXBlID0gdGFiLnR5cGVDb2RlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4udGFiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiBgQ01TVGFiUGFyYWdyYXBoQ29udGFpbmVyLnRhYnMuJHt0YWIudWlkfWAsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIClcbiAgICAgICAgKVxuICAgICAgKVxuICAgIClcbiAgKTtcblxuICBzZWxlY3QodGFiTnVtOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZVRhYk51bSA9IHRhYk51bTtcbiAgfVxufVxuIl19