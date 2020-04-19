import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
import { FacetService } from '../services/facet.service';
/**
 * Active facets render the applied facet values as a list of focusable buttons
 * which can be used to remove the applied facet value.
 */
var ActiveFacetsComponent = /** @class */ (function () {
    function ActiveFacetsComponent(facetService) {
        this.facetService = facetService;
        /** Active facets which are applied to the product results. */
        this.facetList$ = this.facetService.facetList$;
        /** Configurable icon which is used for the active facet close button */
        this.closeIcon = ICON_TYPE.CLOSE;
    }
    ActiveFacetsComponent.prototype.getLinkParams = function (facet) {
        var _a, _b;
        return this.facetService.getLinkParams((_b = (_a = facet.removeQuery) === null || _a === void 0 ? void 0 : _a.query) === null || _b === void 0 ? void 0 : _b.value);
    };
    /**
     * The focus key is used to persist the focus on the facet when the DOM is being
     * recreated. We only apply the focus key for the given facet when there are no
     * facets available. This is a great experience for the keyboard user, who keep the
     * focus on the activated facet all the time.
     */
    ActiveFacetsComponent.prototype.getFocusKey = function (facetList, facet) {
        var _a;
        return !((_a = facetList.facets) === null || _a === void 0 ? void 0 : _a.length) ? facet.facetValueName : '';
    };
    ActiveFacetsComponent.ctorParameters = function () { return [
        { type: FacetService }
    ]; };
    __decorate([
        Input()
    ], ActiveFacetsComponent.prototype, "closeIcon", void 0);
    ActiveFacetsComponent = __decorate([
        Component({
            selector: 'cx-active-facets',
            template: "<ng-container *ngIf=\"facetList$ | async as facetList\">\n  <h4 *ngIf=\"facetList?.activeFacets?.length > 0\">\n    {{ 'productList.appliedFilter' | cxTranslate }}\n  </h4>\n\n  <a\n    *ngFor=\"let facet of facetList?.activeFacets\"\n    routerLink=\"./\"\n    [queryParams]=\"getLinkParams(facet)\"\n    [cxFocus]=\"getFocusKey(facetList, facet)\"\n  >\n    <span>{{ facet.facetValueName }}</span>\n    <cx-icon aria-hidden=\"true\" [type]=\"closeIcon\"></cx-icon>\n  </a>\n</ng-container>\n",
            changeDetection: ChangeDetectionStrategy.Default
        })
    ], ActiveFacetsComponent);
    return ActiveFacetsComponent;
}());
export { ActiveFacetsComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZhY2V0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24vYWN0aXZlLWZhY2V0cy9hY3RpdmUtZmFjZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRS9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUd6RDs7O0dBR0c7QUFNSDtJQU9FLCtCQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU5oRCw4REFBOEQ7UUFDOUQsZUFBVSxHQUEwQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUVqRSx3RUFBd0U7UUFDL0QsY0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFFYyxDQUFDO0lBRXBELDZDQUFhLEdBQWIsVUFBYyxLQUFpQjs7UUFDN0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsYUFBQyxLQUFLLENBQUMsV0FBVywwQ0FBRSxLQUFLLDBDQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDJDQUFXLEdBQVgsVUFBWSxTQUFvQixFQUFFLEtBQWlCOztRQUNqRCxPQUFPLFFBQUMsU0FBUyxDQUFDLE1BQU0sMENBQUUsTUFBTSxDQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvRCxDQUFDOztnQkFkbUMsWUFBWTs7SUFGdkM7UUFBUixLQUFLLEVBQUU7NERBQTZCO0lBTDFCLHFCQUFxQjtRQUxqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLHlmQUE2QztZQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsT0FBTztTQUNqRCxDQUFDO09BQ1cscUJBQXFCLENBc0JqQztJQUFELDRCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0F0QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyZWFkY3J1bWIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuXG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBGYWNldExpc3QgfSBmcm9tICcuLi9mYWNldC5tb2RlbCc7XG5pbXBvcnQgeyBGYWNldFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYWNldC5zZXJ2aWNlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcblxuLyoqXG4gKiBBY3RpdmUgZmFjZXRzIHJlbmRlciB0aGUgYXBwbGllZCBmYWNldCB2YWx1ZXMgYXMgYSBsaXN0IG9mIGZvY3VzYWJsZSBidXR0b25zXG4gKiB3aGljaCBjYW4gYmUgdXNlZCB0byByZW1vdmUgdGhlIGFwcGxpZWQgZmFjZXQgdmFsdWUuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWFjdGl2ZS1mYWNldHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aXZlLWZhY2V0cy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdCxcbn0pXG5leHBvcnQgY2xhc3MgQWN0aXZlRmFjZXRzQ29tcG9uZW50IHtcbiAgLyoqIEFjdGl2ZSBmYWNldHMgd2hpY2ggYXJlIGFwcGxpZWQgdG8gdGhlIHByb2R1Y3QgcmVzdWx0cy4gKi9cbiAgZmFjZXRMaXN0JDogT2JzZXJ2YWJsZTxGYWNldExpc3Q+ID0gdGhpcy5mYWNldFNlcnZpY2UuZmFjZXRMaXN0JDtcblxuICAvKiogQ29uZmlndXJhYmxlIGljb24gd2hpY2ggaXMgdXNlZCBmb3IgdGhlIGFjdGl2ZSBmYWNldCBjbG9zZSBidXR0b24gKi9cbiAgQElucHV0KCkgY2xvc2VJY29uID0gSUNPTl9UWVBFLkNMT1NFO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBmYWNldFNlcnZpY2U6IEZhY2V0U2VydmljZSkge31cblxuICBnZXRMaW5rUGFyYW1zKGZhY2V0OiBCcmVhZGNydW1iKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRTZXJ2aWNlLmdldExpbmtQYXJhbXMoZmFjZXQucmVtb3ZlUXVlcnk/LnF1ZXJ5Py52YWx1ZSk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIGZvY3VzIGtleSBpcyB1c2VkIHRvIHBlcnNpc3QgdGhlIGZvY3VzIG9uIHRoZSBmYWNldCB3aGVuIHRoZSBET00gaXMgYmVpbmdcbiAgICogcmVjcmVhdGVkLiBXZSBvbmx5IGFwcGx5IHRoZSBmb2N1cyBrZXkgZm9yIHRoZSBnaXZlbiBmYWNldCB3aGVuIHRoZXJlIGFyZSBub1xuICAgKiBmYWNldHMgYXZhaWxhYmxlLiBUaGlzIGlzIGEgZ3JlYXQgZXhwZXJpZW5jZSBmb3IgdGhlIGtleWJvYXJkIHVzZXIsIHdobyBrZWVwIHRoZVxuICAgKiBmb2N1cyBvbiB0aGUgYWN0aXZhdGVkIGZhY2V0IGFsbCB0aGUgdGltZS5cbiAgICovXG4gIGdldEZvY3VzS2V5KGZhY2V0TGlzdDogRmFjZXRMaXN0LCBmYWNldDogQnJlYWRjcnVtYikge1xuICAgIHJldHVybiAhZmFjZXRMaXN0LmZhY2V0cz8ubGVuZ3RoID8gZmFjZXQuZmFjZXRWYWx1ZU5hbWUgOiAnJztcbiAgfVxufVxuIl19