/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { NavigationComponentService } from './navigation.component.service';
export class NavigationComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.node$ = this.service.createNavigation();
        this.styleClass$ = this.service
            .getComponentData()
            .pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        d => d.styleClass)));
    }
}
NavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-navigation',
                template: "<cx-navigation-ui [node]=\"node$ | async\" [ngClass]=\"styleClass$ | async\">\n</cx-navigation-ui>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NavigationComponent.ctorParameters = () => [
    { type: NavigationComponentService }
];
if (false) {
    /** @type {?} */
    NavigationComponent.prototype.node$;
    /** @type {?} */
    NavigationComponent.prototype.styleClass$;
    /** @type {?} */
    NavigationComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBTzVFLE1BQU0sT0FBTyxtQkFBbUI7Ozs7SUFPOUIsWUFBbUIsT0FBbUM7UUFBbkMsWUFBTyxHQUFQLE9BQU8sQ0FBNEI7UUFOdEQsVUFBSyxHQUErQixJQUFJLENBQUMsT0FBTyxDQUFDLGdCQUFnQixFQUFFLENBQUM7UUFFcEUsZ0JBQVcsR0FBdUIsSUFBSSxDQUFDLE9BQU87YUFDM0MsZ0JBQWdCLEVBQUU7YUFDbEIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBRXlCLENBQUM7OztZQVozRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLGdIQUEwQztnQkFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSwwQkFBMEI7Ozs7SUFRakMsb0NBQW9FOztJQUVwRSwwQ0FFZ0M7O0lBRXBCLHNDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UgfSBmcm9tICcuL25hdmlnYXRpb24uY29tcG9uZW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1uYXZpZ2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL25hdmlnYXRpb24uY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTmF2aWdhdGlvbkNvbXBvbmVudCB7XG4gIG5vZGUkOiBPYnNlcnZhYmxlPE5hdmlnYXRpb25Ob2RlPiA9IHRoaXMuc2VydmljZS5jcmVhdGVOYXZpZ2F0aW9uKCk7XG5cbiAgc3R5bGVDbGFzcyQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuc2VydmljZVxuICAgIC5nZXRDb21wb25lbnREYXRhKClcbiAgICAucGlwZShtYXAoZCA9PiBkLnN0eWxlQ2xhc3MpKTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc2VydmljZTogTmF2aWdhdGlvbkNvbXBvbmVudFNlcnZpY2UpIHt9XG59XG4iXX0=