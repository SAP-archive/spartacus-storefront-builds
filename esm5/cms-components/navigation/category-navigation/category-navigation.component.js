/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { NavigationComponentService } from '../navigation/navigation.component.service';
var CategoryNavigationComponent = /** @class */ (function () {
    function CategoryNavigationComponent(service) {
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
    CategoryNavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-category-navigation',
                    template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    CategoryNavigationComponent.ctorParameters = function () { return [
        { type: NavigationComponentService }
    ]; };
    return CategoryNavigationComponent;
}());
export { CategoryNavigationComponent };
if (false) {
    /** @type {?} */
    CategoryNavigationComponent.prototype.node$;
    /** @type {?} */
    CategoryNavigationComponent.prototype.styleClass$;
    /** @type {?} */
    CategoryNavigationComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NhdGVnb3J5LW5hdmlnYXRpb24vY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBRXhGO0lBWUUscUNBQW1CLE9BQW1DO1FBQW5DLFlBQU8sR0FBUCxPQUFPLENBQTRCO1FBTnRELFVBQUssR0FBK0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRXJFLGdCQUFXLEdBQXVCLElBQUksQ0FBQyxPQUFPO2FBQzNDLGdCQUFnQixFQUFFO2FBQ2xCLElBQUksQ0FBQyxHQUFHOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsVUFBVSxFQUFaLENBQVksRUFBQyxDQUFDLENBQUM7SUFFeUIsQ0FBQzs7Z0JBWjNELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsd0JBQXdCO29CQUNsQyxzSEFBbUQ7b0JBQ25ELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFOUSwwQkFBMEI7O0lBZW5DLGtDQUFDO0NBQUEsQUFiRCxJQWFDO1NBUlksMkJBQTJCOzs7SUFDdEMsNENBQXFFOztJQUVyRSxrREFFZ0M7O0lBRXBCLDhDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1jYXRlZ29yeS1uYXZpZ2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NhdGVnb3J5LW5hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgQ2F0ZWdvcnlOYXZpZ2F0aW9uQ29tcG9uZW50IHtcbiAgbm9kZSQ6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+ID0gdGhpcy5zZXJ2aWNlLmdldE5hdmlnYXRpb25Ob2RlKCk7XG5cbiAgc3R5bGVDbGFzcyQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuc2VydmljZVxuICAgIC5nZXRDb21wb25lbnREYXRhKClcbiAgICAucGlwZShtYXAoZCA9PiBkLnN0eWxlQ2xhc3MpKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UpIHt9XG59XG4iXX0=