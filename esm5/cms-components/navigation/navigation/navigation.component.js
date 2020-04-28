import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { NavigationService } from './navigation.service';
var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.createNavigation(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map(function (d) { return d === null || d === void 0 ? void 0 : d.styleClass; }));
    }
    NavigationComponent.ctorParameters = function () { return [
        { type: CmsComponentData },
        { type: NavigationService }
    ]; };
    NavigationComponent = __decorate([
        Component({
            selector: 'cx-navigation',
            template: "<cx-navigation-ui [node]=\"node$ | async\" [ngClass]=\"styleClass$ | async\">\n</cx-navigation-ui>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], NavigationComponent);
    return NavigationComponent;
}());
export { NavigationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2aWdhdGlvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9uYXZpZ2F0aW9uL25hdmlnYXRpb24vbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXhGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBT3pEO0lBU0UsNkJBQ1ksYUFBdUQsRUFDdkQsT0FBMEI7UUFEMUIsa0JBQWEsR0FBYixhQUFhLENBQTBDO1FBQ3ZELFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBVnRDLFVBQUssR0FBK0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FDL0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQ3pCLENBQUM7UUFFRixnQkFBVyxHQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzdELEdBQUcsQ0FBQyxVQUFDLENBQUMsV0FBSyxDQUFDLGFBQUQsQ0FBQyx1QkFBRCxDQUFDLENBQUUsVUFBVSxHQUFBLENBQUMsQ0FDMUIsQ0FBQztJQUtDLENBQUM7O2dCQUZ1QixnQkFBZ0I7Z0JBQ3RCLGlCQUFpQjs7SUFYM0IsbUJBQW1CO1FBTC9CLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLGdIQUEwQztZQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtTQUNoRCxDQUFDO09BQ1csbUJBQW1CLENBYS9CO0lBQUQsMEJBQUM7Q0FBQSxBQWJELElBYUM7U0FiWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDbXNOYXZpZ2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IENtc0NvbXBvbmVudERhdGEgfSBmcm9tICcuLi8uLi8uLi9jbXMtc3RydWN0dXJlL3BhZ2UvbW9kZWwvY21zLWNvbXBvbmVudC1kYXRhJztcbmltcG9ydCB7IE5hdmlnYXRpb25Ob2RlIH0gZnJvbSAnLi9uYXZpZ2F0aW9uLW5vZGUubW9kZWwnO1xuaW1wb3J0IHsgTmF2aWdhdGlvblNlcnZpY2UgfSBmcm9tICcuL25hdmlnYXRpb24uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYXZpZ2F0aW9uQ29tcG9uZW50IHtcbiAgbm9kZSQ6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+ID0gdGhpcy5zZXJ2aWNlLmNyZWF0ZU5hdmlnYXRpb24oXG4gICAgdGhpcy5jb21wb25lbnREYXRhLmRhdGEkXG4gICk7XG5cbiAgc3R5bGVDbGFzcyQ6IE9ic2VydmFibGU8c3RyaW5nPiA9IHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJC5waXBlKFxuICAgIG1hcCgoZCkgPT4gZD8uc3R5bGVDbGFzcylcbiAgKTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgY29tcG9uZW50RGF0YTogQ21zQ29tcG9uZW50RGF0YTxDbXNOYXZpZ2F0aW9uQ29tcG9uZW50PixcbiAgICBwcm90ZWN0ZWQgc2VydmljZTogTmF2aWdhdGlvblNlcnZpY2VcbiAgKSB7fVxufVxuIl19