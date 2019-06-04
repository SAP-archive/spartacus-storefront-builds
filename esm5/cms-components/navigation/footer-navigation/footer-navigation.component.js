/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { NavigationComponentService } from '../navigation/navigation.component.service';
var FooterNavigationComponent = /** @class */ (function () {
    function FooterNavigationComponent(service) {
        this.service = service;
        this.node$ = this.service.getNavigationNode();
        this.styleClass$ = this.service
            .getComponentData()
            .pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        function (d) { return d.styleClass; })));
    }
    FooterNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-footer-navigation',
                    template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [flyout]=\"false\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n\n<div class=\"notice\" *ngIf=\"(service.getComponentData() | async) as data\">\n  {{ data.notice }}\n</div>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    FooterNavigationComponent.ctorParameters = function () { return [
        { type: NavigationComponentService }
    ]; };
    return FooterNavigationComponent;
}());
export { FooterNavigationComponent };
if (false) {
    /** @type {?} */
    FooterNavigationComponent.prototype.node$;
    /** @type {?} */
    FooterNavigationComponent.prototype.styleClass$;
    /** @type {?} */
    FooterNavigationComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXhGO0lBWUUsbUNBQW1CLE9BQW1DO1FBQW5DLFlBQU8sR0FBUCxPQUFPLENBQTRCO1FBTnRELFVBQUssR0FBK0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXJFLGdCQUFXLEdBQXVCLElBQUksQ0FBQyxPQUFPO2FBQzNDLGdCQUFnQixFQUFFO2FBQ2xCLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsVUFBVSxFQUFaLENBQVksRUFBQyxDQUFDLENBQUM7SUFFeUIsQ0FBQzs7Z0JBWjNELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQywwUEFBaUQ7b0JBQ2pELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFOUSwwQkFBMEI7O0lBZW5DLGdDQUFDO0NBQUEsQUFiRCxJQWFDO1NBUlkseUJBQXlCOzs7SUFDcEMsMENBQXFFOztJQUVyRSxnREFFZ0M7O0lBRXBCLDRDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1mb290ZXItbmF2aWdhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50IHtcbiAgbm9kZSQ6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+ID0gdGhpcy5zZXJ2aWNlLmdldE5hdmlnYXRpb25Ob2RlKCk7XG5cbiAgc3R5bGVDbGFzcyQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuc2VydmljZVxuICAgIC5nZXRDb21wb25lbnREYXRhKClcbiAgICAucGlwZShtYXAoZCA9PiBkLnN0eWxlQ2xhc3MpKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UpIHt9XG59XG4iXX0=