/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { NavigationComponentService } from '../navigation/navigation.component.service';
export class FooterNavigationComponent {
    /**
     * @param {?} service
     */
    constructor(service) {
        this.service = service;
        this.node$ = this.service.getNavigationNode();
        this.styleClass$ = this.service
            .getComponentData()
            .pipe(map((/**
         * @param {?} d
         * @return {?}
         */
        d => d.styleClass)));
    }
}
FooterNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-footer-navigation',
                template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [flyout]=\"false\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n\n<div class=\"notice\" *ngIf=\"(service.getComponentData() | async) as data\">\n  {{ data.notice }}\n</div>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
FooterNavigationComponent.ctorParameters = () => [
    { type: NavigationComponentService }
];
if (false) {
    /** @type {?} */
    FooterNavigationComponent.prototype.node$;
    /** @type {?} */
    FooterNavigationComponent.prototype.styleClass$;
    /** @type {?} */
    FooterNavigationComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLDRDQUE0QyxDQUFDO0FBT3hGLE1BQU0sT0FBTyx5QkFBeUI7Ozs7SUFPcEMsWUFBbUIsT0FBbUM7UUFBbkMsWUFBTyxHQUFQLE9BQU8sQ0FBNEI7UUFOdEQsVUFBSyxHQUErQixJQUFJLENBQUMsT0FBTyxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFckUsZ0JBQVcsR0FBdUIsSUFBSSxDQUFDLE9BQU87YUFDM0MsZ0JBQWdCLEVBQUU7YUFDbEIsSUFBSSxDQUFDLEdBQUc7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDO0lBRXlCLENBQUM7OztZQVozRCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsMFBBQWlEO2dCQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQU5RLDBCQUEwQjs7OztJQVFqQywwQ0FBcUU7O0lBRXJFLGdEQUVnQzs7SUFFcEIsNENBQTBDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbk5vZGUgfSBmcm9tICcuLi9uYXZpZ2F0aW9uL25hdmlnYXRpb24tbm9kZS5tb2RlbCc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uQ29tcG9uZW50U2VydmljZSB9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWZvb3Rlci1uYXZpZ2F0aW9uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2Zvb3Rlci1uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZvb3Rlck5hdmlnYXRpb25Db21wb25lbnQge1xuICBub2RlJDogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4gPSB0aGlzLnNlcnZpY2UuZ2V0TmF2aWdhdGlvbk5vZGUoKTtcblxuICBzdHlsZUNsYXNzJDogT2JzZXJ2YWJsZTxzdHJpbmc+ID0gdGhpcy5zZXJ2aWNlXG4gICAgLmdldENvbXBvbmVudERhdGEoKVxuICAgIC5waXBlKG1hcChkID0+IGQuc3R5bGVDbGFzcykpO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzZXJ2aWNlOiBOYXZpZ2F0aW9uQ29tcG9uZW50U2VydmljZSkge31cbn1cbiJdfQ==