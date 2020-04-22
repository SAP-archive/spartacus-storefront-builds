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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZhY2V0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24vYWN0aXZlLWZhY2V0cy9hY3RpdmUtZmFjZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRS9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RDs7O0dBR0c7QUFNSDtJQU9FLCtCQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU5oRCw4REFBOEQ7UUFDOUQsZUFBVSxHQUEwQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUVqRSx3RUFBd0U7UUFDL0QsY0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFFYyxDQUFDO0lBRXBELDZDQUFhLEdBQWIsVUFBYyxLQUFpQjs7UUFDN0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsYUFBQyxLQUFLLENBQUMsV0FBVywwQ0FBRSxLQUFLLDBDQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILDJDQUFXLEdBQVgsVUFBWSxTQUFvQixFQUFFLEtBQWlCOztRQUNqRCxPQUFPLFFBQUMsU0FBUyxDQUFDLE1BQU0sMENBQUUsTUFBTSxDQUFBLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUMvRCxDQUFDOztnQkFkbUMsWUFBWTs7SUFGdkM7UUFBUixLQUFLLEVBQUU7NERBQTZCO0lBTDFCLHFCQUFxQjtRQUxqQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLHlmQUE2QztZQUM3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsT0FBTztTQUNqRCxDQUFDO09BQ1cscUJBQXFCLENBc0JqQztJQUFELDRCQUFDO0NBQUEsQUF0QkQsSUFzQkM7U0F0QlkscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJyZWFkY3J1bWIgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgRmFjZXRMaXN0IH0gZnJvbSAnLi4vZmFjZXQubW9kZWwnO1xuaW1wb3J0IHsgRmFjZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmFjZXQuc2VydmljZSc7XG5cbi8qKlxuICogQWN0aXZlIGZhY2V0cyByZW5kZXIgdGhlIGFwcGxpZWQgZmFjZXQgdmFsdWVzIGFzIGEgbGlzdCBvZiBmb2N1c2FibGUgYnV0dG9uc1xuICogd2hpY2ggY2FuIGJlIHVzZWQgdG8gcmVtb3ZlIHRoZSBhcHBsaWVkIGZhY2V0IHZhbHVlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1hY3RpdmUtZmFjZXRzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FjdGl2ZS1mYWNldHMuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHQsXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2ZUZhY2V0c0NvbXBvbmVudCB7XG4gIC8qKiBBY3RpdmUgZmFjZXRzIHdoaWNoIGFyZSBhcHBsaWVkIHRvIHRoZSBwcm9kdWN0IHJlc3VsdHMuICovXG4gIGZhY2V0TGlzdCQ6IE9ic2VydmFibGU8RmFjZXRMaXN0PiA9IHRoaXMuZmFjZXRTZXJ2aWNlLmZhY2V0TGlzdCQ7XG5cbiAgLyoqIENvbmZpZ3VyYWJsZSBpY29uIHdoaWNoIGlzIHVzZWQgZm9yIHRoZSBhY3RpdmUgZmFjZXQgY2xvc2UgYnV0dG9uICovXG4gIEBJbnB1dCgpIGNsb3NlSWNvbiA9IElDT05fVFlQRS5DTE9TRTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZmFjZXRTZXJ2aWNlOiBGYWNldFNlcnZpY2UpIHt9XG5cbiAgZ2V0TGlua1BhcmFtcyhmYWNldDogQnJlYWRjcnVtYikge1xuICAgIHJldHVybiB0aGlzLmZhY2V0U2VydmljZS5nZXRMaW5rUGFyYW1zKGZhY2V0LnJlbW92ZVF1ZXJ5Py5xdWVyeT8udmFsdWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBmb2N1cyBrZXkgaXMgdXNlZCB0byBwZXJzaXN0IHRoZSBmb2N1cyBvbiB0aGUgZmFjZXQgd2hlbiB0aGUgRE9NIGlzIGJlaW5nXG4gICAqIHJlY3JlYXRlZC4gV2Ugb25seSBhcHBseSB0aGUgZm9jdXMga2V5IGZvciB0aGUgZ2l2ZW4gZmFjZXQgd2hlbiB0aGVyZSBhcmUgbm9cbiAgICogZmFjZXRzIGF2YWlsYWJsZS4gVGhpcyBpcyBhIGdyZWF0IGV4cGVyaWVuY2UgZm9yIHRoZSBrZXlib2FyZCB1c2VyLCB3aG8ga2VlcCB0aGVcbiAgICogZm9jdXMgb24gdGhlIGFjdGl2YXRlZCBmYWNldCBhbGwgdGhlIHRpbWUuXG4gICAqL1xuICBnZXRGb2N1c0tleShmYWNldExpc3Q6IEZhY2V0TGlzdCwgZmFjZXQ6IEJyZWFkY3J1bWIpIHtcbiAgICByZXR1cm4gIWZhY2V0TGlzdC5mYWNldHM/Lmxlbmd0aCA/IGZhY2V0LmZhY2V0VmFsdWVOYW1lIDogJyc7XG4gIH1cbn1cbiJdfQ==