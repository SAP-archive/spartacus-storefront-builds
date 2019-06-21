/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CmsService } from '@spartacus/core';
import { combineLatest } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/index';
export class TabParagraphContainerComponent {
    /**
     * @param {?} componentData
     * @param {?} cmsService
     */
    constructor(componentData, cmsService) {
        this.componentData = componentData;
        this.cmsService = cmsService;
        this.activeTabNum = 0;
        this.components$ = this.componentData.data$.pipe(switchMap((/**
         * @param {?} data
         * @return {?}
         */
        data => combineLatest(data.components.split(' ').map((/**
         * @param {?} component
         * @return {?}
         */
        component => this.cmsService.getComponentData(component).pipe(map((/**
         * @param {?} tab
         * @return {?}
         */
        tab => {
            if (!tab.flexType) {
                tab = Object.assign({}, tab, { flexType: tab.typeCode });
            }
            return Object.assign({}, tab, { title: `CMSTabParagraphContainer.tabs.${tab.uid}` });
        })))))))));
    }
    /**
     * @param {?} tabNum
     * @return {?}
     */
    select(tabNum) {
        this.activeTabNum = tabNum;
    }
}
TabParagraphContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-tab-paragraph-container',
                template: "<ng-container *ngFor=\"let component of (components$ | async); let i = index\">\n  <h3 [class.active]=\"i === activeTabNum\" (click)=\"select(i)\">\n    {{ component.title | cxTranslate }}\n  </h3>\n  <div [class.active]=\"i === activeTabNum\">\n    <ng-template\n      [cxOutlet]=\"component.flexType\"\n      [cxOutletContext]=\"{}\"\n      [cxComponentWrapper]=\"component\"\n    >\n    </ng-template>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
TabParagraphContainerComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: CmsService }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBNEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFPM0UsTUFBTSxPQUFPLDhCQUE4Qjs7Ozs7SUFHekMsWUFDUyxhQUF5RCxFQUN4RCxVQUFzQjtRQUR2QixrQkFBYSxHQUFiLGFBQWEsQ0FBNEM7UUFDeEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUpoQyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQU9qQixnQkFBVyxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzVELFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUNmLGFBQWEsQ0FDWCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUUsQ0FDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBTSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQ25ELEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTtZQUNSLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNqQixHQUFHLHFCQUNFLEdBQUcsSUFDTixRQUFRLEVBQUUsR0FBRyxDQUFDLFFBQVEsR0FDdkIsQ0FBQzthQUNIO1lBQ0QseUJBQ0ssR0FBRyxJQUNOLEtBQUssRUFBRSxpQ0FBaUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUNqRDtRQUNKLENBQUMsRUFBQyxDQUNILEVBQ0YsQ0FDRixFQUNGLENBQ0YsQ0FBQztJQXZCQyxDQUFDOzs7OztJQXlCSixNQUFNLENBQUMsTUFBYztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztJQUM3QixDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSw0QkFBNEI7Z0JBQ3RDLDZiQUF1RDtnQkFDdkQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxnQkFBZ0I7WUFIaEIsVUFBVTs7OztJQVdqQixzREFBaUI7O0lBT2pCLHFEQXFCRTs7SUF6QkEsdURBQWdFOzs7OztJQUNoRSxvREFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNTZXJ2aWNlLCBDTVNUYWJQYXJhZ3JhcGhDb250YWluZXIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgY29tYmluZUxhdGVzdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwLCBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2luZGV4JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtdGFiLXBhcmFncmFwaC1jb250YWluZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vdGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVGFiUGFyYWdyYXBoQ29udGFpbmVyQ29tcG9uZW50IHtcbiAgYWN0aXZlVGFiTnVtID0gMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDTVNUYWJQYXJhZ3JhcGhDb250YWluZXI+LFxuICAgIHByaXZhdGUgY21zU2VydmljZTogQ21zU2VydmljZVxuICApIHt9XG5cbiAgY29tcG9uZW50cyQ6IE9ic2VydmFibGU8YW55W10+ID0gdGhpcy5jb21wb25lbnREYXRhLmRhdGEkLnBpcGUoXG4gICAgc3dpdGNoTWFwKGRhdGEgPT5cbiAgICAgIGNvbWJpbmVMYXRlc3QoXG4gICAgICAgIGRhdGEuY29tcG9uZW50cy5zcGxpdCgnICcpLm1hcChjb21wb25lbnQgPT5cbiAgICAgICAgICB0aGlzLmNtc1NlcnZpY2UuZ2V0Q29tcG9uZW50RGF0YTxhbnk+KGNvbXBvbmVudCkucGlwZShcbiAgICAgICAgICAgIG1hcCh0YWIgPT4ge1xuICAgICAgICAgICAgICBpZiAoIXRhYi5mbGV4VHlwZSkge1xuICAgICAgICAgICAgICAgIHRhYiA9IHtcbiAgICAgICAgICAgICAgICAgIC4uLnRhYixcbiAgICAgICAgICAgICAgICAgIGZsZXhUeXBlOiB0YWIudHlwZUNvZGUsXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnRhYixcbiAgICAgICAgICAgICAgICB0aXRsZTogYENNU1RhYlBhcmFncmFwaENvbnRhaW5lci50YWJzLiR7dGFiLnVpZH1gLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgIClcbiAgICApXG4gICk7XG5cbiAgc2VsZWN0KHRhYk51bTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVUYWJOdW0gPSB0YWJOdW07XG4gIH1cbn1cbiJdfQ==