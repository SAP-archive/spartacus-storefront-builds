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
     * recreated. We only apply the focus key for the given _active_ facet when there
     * the original facets is not available. This happens for non multi-valued facets.
     *
     * With this approach, the we keep the focus, either at the facet list or on the
     * active facets.
     */
    ActiveFacetsComponent.prototype.getFocusKey = function (facetList, facet) {
        var _a;
        return ((_a = facetList.facets) === null || _a === void 0 ? void 0 : _a.find(function (f) { var _a; return (_a = f.values) === null || _a === void 0 ? void 0 : _a.find(function (val) { return val.name === facet.facetValueName; }); })) ? ''
            : facet.facetValueName;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aXZlLWZhY2V0cy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24vYWN0aXZlLWZhY2V0cy9hY3RpdmUtZmFjZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHVCQUF1QixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHMUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBRS9FLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV6RDs7O0dBR0c7QUFNSDtJQU9FLCtCQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQU5oRCw4REFBOEQ7UUFDOUQsZUFBVSxHQUEwQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUVqRSx3RUFBd0U7UUFDL0QsY0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUM7SUFFYyxDQUFDO0lBRXBELDZDQUFhLEdBQWIsVUFBYyxLQUFpQjs7UUFDN0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsYUFBQyxLQUFLLENBQUMsV0FBVywwQ0FBRSxLQUFLLDBDQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0gsMkNBQVcsR0FBWCxVQUFZLFNBQW9CLEVBQUUsS0FBaUI7O1FBQ2pELE9BQU8sT0FBQSxTQUFTLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUMsVUFBQyxDQUFDLHlCQUM5QixDQUFDLENBQUMsTUFBTSwwQ0FBRSxJQUFJLENBQUMsVUFBQyxHQUFHLElBQUssT0FBQSxHQUFHLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxjQUFjLEVBQWpDLENBQWlDLElBQUMsR0FFMUQsQ0FBQyxDQUFDLEVBQUU7WUFDSixDQUFDLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQztJQUMzQixDQUFDOztnQkFwQm1DLFlBQVk7O0lBRnZDO1FBQVIsS0FBSyxFQUFFOzREQUE2QjtJQUwxQixxQkFBcUI7UUFMakMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGtCQUFrQjtZQUM1Qix5ZkFBNkM7WUFDN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE9BQU87U0FDakQsQ0FBQztPQUNXLHFCQUFxQixDQTRCakM7SUFBRCw0QkFBQztDQUFBLEFBNUJELElBNEJDO1NBNUJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCcmVhZGNydW1iIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2Ntcy1jb21wb25lbnRzL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IEZhY2V0TGlzdCB9IGZyb20gJy4uL2ZhY2V0Lm1vZGVsJztcbmltcG9ydCB7IEZhY2V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZhY2V0LnNlcnZpY2UnO1xuXG4vKipcbiAqIEFjdGl2ZSBmYWNldHMgcmVuZGVyIHRoZSBhcHBsaWVkIGZhY2V0IHZhbHVlcyBhcyBhIGxpc3Qgb2YgZm9jdXNhYmxlIGJ1dHRvbnNcbiAqIHdoaWNoIGNhbiBiZSB1c2VkIHRvIHJlbW92ZSB0aGUgYXBwbGllZCBmYWNldCB2YWx1ZS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtYWN0aXZlLWZhY2V0cycsXG4gIHRlbXBsYXRlVXJsOiAnLi9hY3RpdmUtZmFjZXRzLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0LFxufSlcbmV4cG9ydCBjbGFzcyBBY3RpdmVGYWNldHNDb21wb25lbnQge1xuICAvKiogQWN0aXZlIGZhY2V0cyB3aGljaCBhcmUgYXBwbGllZCB0byB0aGUgcHJvZHVjdCByZXN1bHRzLiAqL1xuICBmYWNldExpc3QkOiBPYnNlcnZhYmxlPEZhY2V0TGlzdD4gPSB0aGlzLmZhY2V0U2VydmljZS5mYWNldExpc3QkO1xuXG4gIC8qKiBDb25maWd1cmFibGUgaWNvbiB3aGljaCBpcyB1c2VkIGZvciB0aGUgYWN0aXZlIGZhY2V0IGNsb3NlIGJ1dHRvbiAqL1xuICBASW5wdXQoKSBjbG9zZUljb24gPSBJQ09OX1RZUEUuQ0xPU0U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIGZhY2V0U2VydmljZTogRmFjZXRTZXJ2aWNlKSB7fVxuXG4gIGdldExpbmtQYXJhbXMoZmFjZXQ6IEJyZWFkY3J1bWIpIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldFNlcnZpY2UuZ2V0TGlua1BhcmFtcyhmYWNldC5yZW1vdmVRdWVyeT8ucXVlcnk/LnZhbHVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgZm9jdXMga2V5IGlzIHVzZWQgdG8gcGVyc2lzdCB0aGUgZm9jdXMgb24gdGhlIGZhY2V0IHdoZW4gdGhlIERPTSBpcyBiZWluZ1xuICAgKiByZWNyZWF0ZWQuIFdlIG9ubHkgYXBwbHkgdGhlIGZvY3VzIGtleSBmb3IgdGhlIGdpdmVuIF9hY3RpdmVfIGZhY2V0IHdoZW4gdGhlcmVcbiAgICogdGhlIG9yaWdpbmFsIGZhY2V0cyBpcyBub3QgYXZhaWxhYmxlLiBUaGlzIGhhcHBlbnMgZm9yIG5vbiBtdWx0aS12YWx1ZWQgZmFjZXRzLlxuICAgKlxuICAgKiBXaXRoIHRoaXMgYXBwcm9hY2gsIHRoZSB3ZSBrZWVwIHRoZSBmb2N1cywgZWl0aGVyIGF0IHRoZSBmYWNldCBsaXN0IG9yIG9uIHRoZVxuICAgKiBhY3RpdmUgZmFjZXRzLlxuICAgKi9cbiAgZ2V0Rm9jdXNLZXkoZmFjZXRMaXN0OiBGYWNldExpc3QsIGZhY2V0OiBCcmVhZGNydW1iKSB7XG4gICAgcmV0dXJuIGZhY2V0TGlzdC5mYWNldHM/LmZpbmQoKGYpID0+XG4gICAgICBmLnZhbHVlcz8uZmluZCgodmFsKSA9PiB2YWwubmFtZSA9PT0gZmFjZXQuZmFjZXRWYWx1ZU5hbWUpXG4gICAgKVxuICAgICAgPyAnJ1xuICAgICAgOiBmYWNldC5mYWNldFZhbHVlTmFtZTtcbiAgfVxufVxuIl19