/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                        tab = tslib_1.__assign({}, tab, { flexType: tab.typeCode });
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
                    template: "<ng-container *ngFor=\"let component of components$ | async; let i = index\">\n  <h3 [class.active]=\"i === activeTabNum\" (click)=\"select(i)\">\n    {{ component.title | cxTranslate }}\n  </h3>\n  <div [class.active]=\"i === activeTabNum\">\n    <ng-template [cxOutlet]=\"component.flexType\" [cxOutletContext]=\"{}\">\n      <ng-container [cxComponentWrapper]=\"component\"></ng-container>\n    </ng-template>\n  </div>\n</ng-container>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQTRCLE1BQU0saUJBQWlCLENBQUM7QUFDdkUsT0FBTyxFQUFFLGFBQWEsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNqRCxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRTNFO0lBUUUsd0NBQ1MsYUFBeUQsRUFDeEQsVUFBc0I7UUFGaEMsaUJBR0k7UUFGSyxrQkFBYSxHQUFiLGFBQWEsQ0FBNEM7UUFDeEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUpoQyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQU9qQixnQkFBVyxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzVELFNBQVM7Ozs7UUFBQyxVQUFBLElBQUk7WUFDWixPQUFBLGFBQWEsQ0FDWCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7O1lBQUMsVUFBQSxTQUFTO2dCQUN0QyxPQUFBLEtBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQU0sU0FBUyxDQUFDLENBQUMsSUFBSSxDQUNuRCxHQUFHOzs7O2dCQUFDLFVBQUEsR0FBRztvQkFDTCxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTt3QkFDakIsR0FBRyx3QkFDRSxHQUFHLElBQ04sUUFBUSxFQUFFLEdBQUcsQ0FBQyxRQUFRLEdBQ3ZCLENBQUM7cUJBQ0g7b0JBQ0QsNEJBQ0ssR0FBRyxJQUNOLEtBQUssRUFBRSxtQ0FBaUMsR0FBRyxDQUFDLEdBQUssSUFDakQ7Z0JBQ0osQ0FBQyxFQUFDLENBQ0g7WUFiRCxDQWFDLEVBQ0YsQ0FDRjtRQWpCRCxDQWlCQyxFQUNGLENBQ0YsQ0FBQztJQXZCQyxDQUFDOzs7OztJQXlCSiwrQ0FBTTs7OztJQUFOLFVBQU8sTUFBYztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUM3QixDQUFDOztnQkF0Q0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSw0QkFBNEI7b0JBQ3RDLHFjQUF1RDtvQkFDdkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQU5RLGdCQUFnQjtnQkFIaEIsVUFBVTs7SUE0Q25CLHFDQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0FsQ1ksOEJBQThCOzs7SUFDekMsc0RBQWlCOztJQU9qQixxREFxQkU7O0lBekJBLHVEQUFnRTs7Ozs7SUFDaEUsb0RBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zU2VydmljZSwgQ01TVGFiUGFyYWdyYXBoQ29udGFpbmVyIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IGNvbWJpbmVMYXRlc3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXRhYi1wYXJhZ3JhcGgtY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1wYXJhZ3JhcGgtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRhYlBhcmFncmFwaENvbnRhaW5lckNvbXBvbmVudCB7XG4gIGFjdGl2ZVRhYk51bSA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q01TVGFiUGFyYWdyYXBoQ29udGFpbmVyPixcbiAgICBwcml2YXRlIGNtc1NlcnZpY2U6IENtc1NlcnZpY2VcbiAgKSB7fVxuXG4gIGNvbXBvbmVudHMkOiBPYnNlcnZhYmxlPGFueVtdPiA9IHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgIHN3aXRjaE1hcChkYXRhID0+XG4gICAgICBjb21iaW5lTGF0ZXN0KFxuICAgICAgICBkYXRhLmNvbXBvbmVudHMuc3BsaXQoJyAnKS5tYXAoY29tcG9uZW50ID0+XG4gICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldENvbXBvbmVudERhdGE8YW55Pihjb21wb25lbnQpLnBpcGUoXG4gICAgICAgICAgICBtYXAodGFiID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0YWIuZmxleFR5cGUpIHtcbiAgICAgICAgICAgICAgICB0YWIgPSB7XG4gICAgICAgICAgICAgICAgICAuLi50YWIsXG4gICAgICAgICAgICAgICAgICBmbGV4VHlwZTogdGFiLnR5cGVDb2RlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi50YWIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IGBDTVNUYWJQYXJhZ3JhcGhDb250YWluZXIudGFicy4ke3RhYi51aWR9YCxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIHNlbGVjdCh0YWJOdW06IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlVGFiTnVtID0gdGFiTnVtO1xuICB9XG59XG4iXX0=