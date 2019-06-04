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
                tab.flexType = tab.typeCode;
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
                template: "<ng-container *ngFor=\"let component of (components$ | async); let i = index\">\n  <h3 [class.active]=\"i === activeTabNum\" (click)=\"select(i)\">\n    {{ component.title | cxTranslate }}\n  </h3>\n  <div [class.active]=\"i === activeTabNum\">\n    <ng-container\n      *cxOutlet=\"component.flexType\"\n      [cxComponentWrapper]=\"component\"\n    >\n    </ng-container>\n  </div>\n</ng-container>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFiLXBhcmFncmFwaC1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvY29udGVudC90YWItcGFyYWdyYXBoLWNvbnRhaW5lci90YWItcGFyYWdyYXBoLWNvbnRhaW5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkUsT0FBTyxFQUFFLFVBQVUsRUFBNEIsTUFBTSxpQkFBaUIsQ0FBQztBQUN2RSxPQUFPLEVBQUUsYUFBYSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ2pELE9BQU8sRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFPM0UsTUFBTSxPQUFPLDhCQUE4Qjs7Ozs7SUFHekMsWUFDUyxhQUF5RCxFQUN4RCxVQUFzQjtRQUR2QixrQkFBYSxHQUFiLGFBQWEsQ0FBNEM7UUFDeEQsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUpoQyxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQU9qQixnQkFBVyxHQUFzQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzVELFNBQVM7Ozs7UUFBQyxJQUFJLENBQUMsRUFBRSxDQUNmLGFBQWEsQ0FDWCxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHOzs7O1FBQUMsU0FBUyxDQUFDLEVBQUUsQ0FDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBTSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQ25ELEdBQUc7Ozs7UUFBQyxHQUFHLENBQUMsRUFBRTtZQUNSLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO2dCQUNqQixHQUFHLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7YUFDN0I7WUFDRCx5QkFDSyxHQUFHLElBQ04sS0FBSyxFQUFFLGlDQUFpQyxHQUFHLENBQUMsR0FBRyxFQUFFLElBQ2pEO1FBQ0osQ0FBQyxFQUFDLENBQ0gsRUFDRixDQUNGLEVBQ0YsQ0FDRixDQUFDO0lBcEJDLENBQUM7Ozs7O0lBc0JKLE1BQU0sQ0FBQyxNQUFjO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUcsTUFBTSxDQUFDO0lBQzdCLENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDRCQUE0QjtnQkFDdEMsOFpBQXVEO2dCQUN2RCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQU5RLGdCQUFnQjtZQUpoQixVQUFVOzs7O0lBWWpCLHNEQUFpQjs7SUFPakIscURBa0JFOztJQXRCQSx1REFBZ0U7Ozs7O0lBQ2hFLG9EQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENtc1NlcnZpY2UsIENNU1RhYlBhcmFncmFwaENvbnRhaW5lciB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBjb21iaW5lTGF0ZXN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAsIHN3aXRjaE1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHsgQ21zQ29tcG9uZW50RGF0YSB9IGZyb20gJy4uLy4uLy4uL2Ntcy1zdHJ1Y3R1cmUvcGFnZS9tb2RlbC9pbmRleCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXRhYi1wYXJhZ3JhcGgtY29udGFpbmVyJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3RhYi1wYXJhZ3JhcGgtY29udGFpbmVyLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFRhYlBhcmFncmFwaENvbnRhaW5lckNvbXBvbmVudCB7XG4gIGFjdGl2ZVRhYk51bSA9IDA7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q01TVGFiUGFyYWdyYXBoQ29udGFpbmVyPixcbiAgICBwcml2YXRlIGNtc1NlcnZpY2U6IENtc1NlcnZpY2VcbiAgKSB7fVxuXG4gIGNvbXBvbmVudHMkOiBPYnNlcnZhYmxlPGFueVtdPiA9IHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgIHN3aXRjaE1hcChkYXRhID0+XG4gICAgICBjb21iaW5lTGF0ZXN0KFxuICAgICAgICBkYXRhLmNvbXBvbmVudHMuc3BsaXQoJyAnKS5tYXAoY29tcG9uZW50ID0+XG4gICAgICAgICAgdGhpcy5jbXNTZXJ2aWNlLmdldENvbXBvbmVudERhdGE8YW55Pihjb21wb25lbnQpLnBpcGUoXG4gICAgICAgICAgICBtYXAodGFiID0+IHtcbiAgICAgICAgICAgICAgaWYgKCF0YWIuZmxleFR5cGUpIHtcbiAgICAgICAgICAgICAgICB0YWIuZmxleFR5cGUgPSB0YWIudHlwZUNvZGU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAuLi50YWIsXG4gICAgICAgICAgICAgICAgdGl0bGU6IGBDTVNUYWJQYXJhZ3JhcGhDb250YWluZXIudGFicy4ke3RhYi51aWR9YCxcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApXG4gICAgKVxuICApO1xuXG4gIHNlbGVjdCh0YWJOdW06IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlVGFiTnVtID0gdGFiTnVtO1xuICB9XG59XG4iXX0=