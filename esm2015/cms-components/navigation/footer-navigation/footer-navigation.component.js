/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { NavigationService } from '../navigation/navigation.service';
export class FooterNavigationComponent {
    /**
     * @param {?} componentData
     * @param {?} service
     */
    constructor(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        d => d.styleClass)));
        this.data$ = this.componentData.data$;
    }
}
FooterNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-footer-navigation',
                template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [flyout]=\"false\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n\n<div class=\"notice\" *ngIf=\"(data$ | async) as data\">\n  {{ data.notice }}\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
FooterNavigationComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: NavigationService }
];
if (false) {
    /** @type {?} */
    FooterNavigationComponent.prototype.node$;
    /** @type {?} */
    FooterNavigationComponent.prototype.styleClass$;
    /** @type {?} */
    FooterNavigationComponent.prototype.data$;
    /**
     * @type {?}
     * @protected
     */
    FooterNavigationComponent.prototype.componentData;
    /**
     * @type {?}
     * @protected
     */
    FooterNavigationComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXhGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBT3JFLE1BQU0sT0FBTyx5QkFBeUI7Ozs7O0lBV3BDLFlBQ1ksYUFBdUQsRUFDdkQsT0FBMEI7UUFEMUIsa0JBQWEsR0FBYixhQUFhLENBQTBDO1FBQ3ZELFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBWnRDLFVBQUssR0FBK0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQ3pCLENBQUM7UUFFRixnQkFBVyxHQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzdELEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUMsQ0FDdkIsQ0FBQztRQUVGLFVBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztJQUs5QixDQUFDOzs7WUFuQkwsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxzQkFBc0I7Z0JBQ2hDLHFPQUFpRDtnQkFDakQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFSUSxnQkFBZ0I7WUFFaEIsaUJBQWlCOzs7O0lBUXhCLDBDQUVFOztJQUVGLGdEQUVFOztJQUVGLDBDQUFpQzs7Ozs7SUFHL0Isa0RBQWlFOzs7OztJQUNqRSw0Q0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWZvb3Rlci1uYXZpZ2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvb3Rlck5hdmlnYXRpb25Db21wb25lbnQge1xuICBub2RlJDogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4gPSB0aGlzLnNlcnZpY2UuZ2V0TmF2aWdhdGlvbk5vZGUoXG4gICAgdGhpcy5jb21wb25lbnREYXRhLmRhdGEkXG4gICk7XG5cbiAgc3R5bGVDbGFzcyQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgIG1hcChkID0+IGQuc3R5bGVDbGFzcylcbiAgKTtcblxuICBkYXRhJCA9IHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogTmF2aWdhdGlvblNlcnZpY2VcbiAgKSB7fVxufVxuIl19