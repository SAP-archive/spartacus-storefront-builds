import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { CmsComponentData } from '../../../cms-structure/page/model/cms-component-data';
import { NavigationService } from '../navigation/navigation.service';
let FooterNavigationComponent = class FooterNavigationComponent {
    constructor(componentData, service) {
        this.componentData = componentData;
        this.service = service;
        this.node$ = this.service.getNavigationNode(this.componentData.data$);
        this.styleClass$ = this.componentData.data$.pipe(map((d) => d === null || d === void 0 ? void 0 : d.styleClass));
    }
};
FooterNavigationComponent.ctorParameters = () => [
    { type: CmsComponentData },
    { type: NavigationService }
];
FooterNavigationComponent = __decorate([
    Component({
        selector: 'cx-footer-navigation',
        template: "<cx-navigation-ui\n  [node]=\"node$ | async\"\n  [flyout]=\"false\"\n  [ngClass]=\"styleClass$ | async\"\n></cx-navigation-ui>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FooterNavigationComponent);
export { FooterNavigationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLW5hdmlnYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHbkUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNEQUFzRCxDQUFDO0FBRXhGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBT3JFLElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBU3BDLFlBQ1ksYUFBdUQsRUFDdkQsT0FBMEI7UUFEMUIsa0JBQWEsR0FBYixhQUFhLENBQTBDO1FBQ3ZELFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBVnRDLFVBQUssR0FBK0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FDaEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQ3pCLENBQUM7UUFFRixnQkFBVyxHQUF1QixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQzdELEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxhQUFELENBQUMsdUJBQUQsQ0FBQyxDQUFFLFVBQVUsQ0FBQyxDQUMxQixDQUFDO0lBS0MsQ0FBQztDQUNMLENBQUE7O1lBSDRCLGdCQUFnQjtZQUN0QixpQkFBaUI7O0FBWDNCLHlCQUF5QjtJQUxyQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO1FBQ2hDLDRJQUFpRDtRQUNqRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1cseUJBQXlCLENBYXJDO1NBYlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ21zTmF2aWdhdGlvbkNvbXBvbmVudCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBDbXNDb21wb25lbnREYXRhIH0gZnJvbSAnLi4vLi4vLi4vY21zLXN0cnVjdHVyZS9wYWdlL21vZGVsL2Ntcy1jb21wb25lbnQtZGF0YSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uTm9kZSB9IGZyb20gJy4uL25hdmlnYXRpb24vbmF2aWdhdGlvbi1ub2RlLm1vZGVsJztcbmltcG9ydCB7IE5hdmlnYXRpb25TZXJ2aWNlIH0gZnJvbSAnLi4vbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1mb290ZXItbmF2aWdhdGlvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9mb290ZXItbmF2aWdhdGlvbi5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGb290ZXJOYXZpZ2F0aW9uQ29tcG9uZW50IHtcbiAgbm9kZSQ6IE9ic2VydmFibGU8TmF2aWdhdGlvbk5vZGU+ID0gdGhpcy5zZXJ2aWNlLmdldE5hdmlnYXRpb25Ob2RlKFxuICAgIHRoaXMuY29tcG9uZW50RGF0YS5kYXRhJFxuICApO1xuXG4gIHN0eWxlQ2xhc3MkOiBPYnNlcnZhYmxlPHN0cmluZz4gPSB0aGlzLmNvbXBvbmVudERhdGEuZGF0YSQucGlwZShcbiAgICBtYXAoKGQpID0+IGQ/LnN0eWxlQ2xhc3MpXG4gICk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGNvbXBvbmVudERhdGE6IENtc0NvbXBvbmVudERhdGE8Q21zTmF2aWdhdGlvbkNvbXBvbmVudD4sXG4gICAgcHJvdGVjdGVkIHNlcnZpY2U6IE5hdmlnYXRpb25TZXJ2aWNlXG4gICkge31cbn1cbiJdfQ==