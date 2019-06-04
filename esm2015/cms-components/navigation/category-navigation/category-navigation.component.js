/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { NavigationComponentService } from '../navigation/navigation.component.service';
export class CategoryNavigationComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.node$ = this.service.getNavigationNode();
        this.styleClass$ = this.service
            .getComponentData()
            .pipe(map(d => d.styleClass));
    }
}
CategoryNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-category-navigation',
                template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
CategoryNavigationComponent.ctorParameters = () => [
    { type: NavigationComponentService }
];
if (false) {
    /** @type {?} */
    CategoryNavigationComponent.prototype.node$;
    /** @type {?} */
    CategoryNavigationComponent.prototype.styleClass$;
    /** @type {?} */
    CategoryNavigationComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL2NhdGVnb3J5LW5hdmlnYXRpb24vY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBT3hGLE1BQU0sT0FBTywyQkFBMkI7Ozs7SUFPdEMsWUFBbUIsT0FBbUM7UUFBbkMsWUFBTyxHQUFQLE9BQU8sQ0FBNEI7UUFOdEQsVUFBSyxHQUErQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFckUsZ0JBQVcsR0FBdUIsSUFBSSxDQUFDLE9BQU87YUFDM0MsZ0JBQWdCLEVBQUU7YUFDbEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBRXlCLENBQUM7OztZQVozRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsc0hBQW1EO2dCQUNuRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQU5RLDBCQUEwQjs7OztJQVFqQyw0Q0FBcUU7O0lBRXJFLGtEQUVnQzs7SUFFcEIsOENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWNhdGVnb3J5LW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vY2F0ZWdvcnktbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBDYXRlZ29yeU5hdmlnYXRpb25Db21wb25lbnQge1xuICBub2RlJDogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4gPSB0aGlzLnNlcnZpY2UuZ2V0TmF2aWdhdGlvbk5vZGUoKTtcblxuICBzdHlsZUNsYXNzJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5zZXJ2aWNlXG4gICAgLmdldENvbXBvbmVudERhdGEoKVxuICAgIC5waXBlKG1hcChkID0+IGQuc3R5bGVDbGFzcykpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBOYXZpZ2F0aW9uQ29tcG9uZW50U2VydmljZSkge31cbn1cbiJdfQ==