/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { NavigationComponentService } from './navigation.component.service';
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(service) {
        this.service = service;
        this.node$ = this.service.createNavigation();
        this.styleClass$ = this.service
            .getComponentData()
            .pipe(map(function (d) { return d.styleClass; }));
    }
    NavigationComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-navigation',
                    template: "<cx-navigation-ui [node]=\"node$ | async\" [ngClass]=\"styleClass$ | async\">\n</cx-navigation-ui>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    NavigationComponent.ctorParameters = function () { return [
        { type: NavigationComponentService }
    ]; };
    return NavigationComponent;
}());
export { NavigationComponent };
if (false) {
    /** @type {?} */
    NavigationComponent.prototype.node$;
    /** @type {?} */
    NavigationComponent.prototype.styleClass$;
    /** @type {?} */
    NavigationComponent.prototype.service;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRTVFO0lBWUUsNkJBQW1CLE9BQW1DO1FBQW5DLFlBQU8sR0FBUCxPQUFPLENBQTRCO1FBTnRELFVBQUssR0FBK0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1FBRXBFLGdCQUFXLEdBQXVCLElBQUksQ0FBQyxPQUFPO2FBQzNDLGdCQUFnQixFQUFFO2FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsVUFBVSxFQUFaLENBQVksQ0FBQyxDQUFDLENBQUM7SUFFeUIsQ0FBQzs7Z0JBWjNELFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsZ0hBQTBDO29CQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBTlEsMEJBQTBCOztJQWVuQywwQkFBQztDQUFBLEFBYkQsSUFhQztTQVJZLG1CQUFtQjs7O0lBQzlCLG9DQUFvRTs7SUFFcEUsMENBRWdDOztJQUVwQixzQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcbmltcG9ydCB7IE5hdmlnYXRpb25Db21wb25lbnRTZXJ2aWNlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbmF2aWdhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE5hdmlnYXRpb25Db21wb25lbnQge1xuICBub2RlJDogT2JzZXJ2YWJsZTxOYXZpZ2F0aW9uTm9kZT4gPSB0aGlzLnNlcnZpY2UuY3JlYXRlTmF2aWdhdGlvbigpO1xuXG4gIHN0eWxlQ2xhc3MkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLnNlcnZpY2VcbiAgICAuZ2V0Q29tcG9uZW50RGF0YSgpXG4gICAgLnBpcGUobWFwKGQgPT4gZC5zdHlsZUNsYXNzKSk7XG5cbiAgY29uc3RydWN0b3IocHVibGljIHNlcnZpY2U6IE5hdmlnYXRpb25Db21wb25lbnRTZXJ2aWNlKSB7fVxufVxuIl19