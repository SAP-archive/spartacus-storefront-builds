import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, } from '@angular/core';
import { map } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../misc/icon/icon.model';
import { FacetGroupCollapsedState } from '../facet.model';
import { FacetService } from '../services/facet.service';
var FacetListComponent = /** @class */ (function () {
    function FacetListComponent(facetService, elementRef, renderer) {
        this.facetService = facetService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        /** Emits when the list must close */
        this.closeList = new EventEmitter();
        /** The list of all facet and values related to the products in the list */
        this.facetList$ = this.facetService.facetList$;
        this.iconTypes = ICON_TYPE;
        this.dialogFocusConfig = {
            trap: true,
            block: true,
            focusOnEscape: true,
            autofocus: 'cx-facet',
        };
    }
    Object.defineProperty(FacetListComponent.prototype, "isDialog", {
        get: function () {
            return this._isDialog;
        },
        /**
         * Indicates that the facet navigation is rendered in dialog.
         */
        set: function (value) {
            this._isDialog = value;
            if (value) {
                this.renderer.addClass(document.body, 'modal-open');
            }
        },
        enumerable: true,
        configurable: true
    });
    FacetListComponent.prototype.handleClick = function () {
        this.close();
    };
    /**
     * Toggles the facet group in case it is not expanded.
     */
    FacetListComponent.prototype.expandFacetGroup = function (facet, ref) {
        if (!ref.isExpanded) {
            this.facetService.toggle(facet, ref.isExpanded);
        }
    };
    /**
     * Indicates that the facet group has been expanded.
     */
    FacetListComponent.prototype.isExpanded = function (facet) {
        return this.facetService
            .getState(facet)
            .pipe(map(function (value) { return value.toggled === FacetGroupCollapsedState.EXPANDED; }));
    };
    /**
     * Indicates that the facet group has been collapsed.
     */
    FacetListComponent.prototype.isCollapsed = function (facet) {
        return this.facetService
            .getState(facet)
            .pipe(map(function (value) { return value.toggled === FacetGroupCollapsedState.COLLAPSED; }));
    };
    FacetListComponent.prototype.close = function (event) {
        this.renderer.removeClass(document.body, 'modal-open');
        this.closeList.emit(event);
    };
    FacetListComponent.prototype.block = function (event) {
        event.stopPropagation();
    };
    FacetListComponent.ctorParameters = function () { return [
        { type: FacetService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    __decorate([
        Input()
    ], FacetListComponent.prototype, "isDialog", null);
    __decorate([
        Output()
    ], FacetListComponent.prototype, "closeList", void 0);
    __decorate([
        HostListener('click')
    ], FacetListComponent.prototype, "handleClick", null);
    FacetListComponent = __decorate([
        Component({
            selector: 'cx-facet-list',
            template: "<div\n  class=\"inner\"\n  *ngIf=\"(facetList$ | async)?.facets as facets\"\n  [cxFocus]=\"isDialog ? dialogFocusConfig : {}\"\n  (esc)=\"close($event)\"\n  (click)=\"block($event)\"\n>\n  <h4>\n    {{ 'productList.filterBy.label' | cxTranslate }}\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"close()\">\n      <cx-icon aria-hidden=\"true\" [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </h4>\n\n  <!-- \n      Here we'd like to introduce configurable facet components, \n      either by using specific configuration or generic sproutlets \n  -->\n  <cx-facet\n    *ngFor=\"let facet of facets\"\n    #facetRef\n    [facet]=\"facet\"\n    [cxFocus]=\"{ lock: true, trap: true, autofocus: 'a' }\"\n    (unlock)=\"expandFacetGroup(facet, facetRef)\"\n    [class.expanded]=\"isExpanded(facet) | async\"\n    [class.collapsed]=\"isCollapsed(facet) | async\"\n  ></cx-facet>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FacetListComponent);
    return FacetListComponent;
}());
export { FacetListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24vZmFjZXQtbGlzdC9mYWNldC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsd0JBQXdCLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPekQ7SUFvQ0UsNEJBQ1ksWUFBMEIsRUFDMUIsVUFBc0IsRUFDdEIsUUFBbUI7UUFGbkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBdEIvQixxQ0FBcUM7UUFDM0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekMsMkVBQTJFO1FBQzNFLGVBQVUsR0FBMEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFFakUsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUV0QixzQkFBaUIsR0FBZ0I7WUFDL0IsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsSUFBSTtZQUNYLGFBQWEsRUFBRSxJQUFJO1lBQ25CLFNBQVMsRUFBRSxVQUFVO1NBQ3RCLENBQUM7SUFVQyxDQUFDO0lBbENKLHNCQUFJLHdDQUFRO2FBT1o7WUFDRSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDeEIsQ0FBQztRQWJEOztXQUVHO2FBRUgsVUFBYSxLQUFjO1lBQ3pCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7YUFDckQ7UUFDSCxDQUFDOzs7T0FBQTtJQXFCc0Isd0NBQVcsR0FBWDtRQUNyQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDZixDQUFDO0lBUUQ7O09BRUc7SUFDSCw2Q0FBZ0IsR0FBaEIsVUFBaUIsS0FBWSxFQUFFLEdBQW1CO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCx1Q0FBVSxHQUFWLFVBQVcsS0FBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxZQUFZO2FBQ3JCLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDZixJQUFJLENBQ0gsR0FBRyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSyxDQUFDLE9BQU8sS0FBSyx3QkFBd0IsQ0FBQyxRQUFRLEVBQW5ELENBQW1ELENBQUMsQ0FDcEUsQ0FBQztJQUNOLENBQUM7SUFFRDs7T0FFRztJQUNILHdDQUFXLEdBQVgsVUFBWSxLQUFZO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVk7YUFDckIsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUNmLElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxLQUFLLHdCQUF3QixDQUFDLFNBQVMsRUFBcEQsQ0FBb0QsQ0FBQyxDQUNyRSxDQUFDO0lBQ04sQ0FBQztJQUVELGtDQUFLLEdBQUwsVUFBTSxLQUFlO1FBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELGtDQUFLLEdBQUwsVUFBTSxLQUFrQjtRQUN0QixLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBM0N5QixZQUFZO2dCQUNkLFVBQVU7Z0JBQ1osU0FBUzs7SUFqQy9CO1FBREMsS0FBSyxFQUFFO3NEQU1QO0lBT1M7UUFBVCxNQUFNLEVBQUU7eURBQWdDO0lBY2xCO1FBQXRCLFlBQVksQ0FBQyxPQUFPLENBQUM7eURBRXJCO0lBbENVLGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixvNkJBQTBDO1lBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxrQkFBa0IsQ0FpRjlCO0lBQUQseUJBQUM7Q0FBQSxBQWpGRCxJQWlGQztTQWpGWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgUmVuZGVyZXIyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhY2V0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZvY3VzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvaW5kZXgnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgRmFjZXRHcm91cENvbGxhcHNlZFN0YXRlLCBGYWNldExpc3QgfSBmcm9tICcuLi9mYWNldC5tb2RlbCc7XG5pbXBvcnQgeyBGYWNldENvbXBvbmVudCB9IGZyb20gJy4uL2ZhY2V0L2ZhY2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWNldFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYWNldC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZmFjZXQtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNldC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0TGlzdENvbXBvbmVudCB7XG4gIHByaXZhdGUgX2lzRGlhbG9nOiBib29sZWFuO1xuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGZhY2V0IG5hdmlnYXRpb24gaXMgcmVuZGVyZWQgaW4gZGlhbG9nLlxuICAgKi9cbiAgQElucHV0KClcbiAgc2V0IGlzRGlhbG9nKHZhbHVlOiBib29sZWFuKSB7XG4gICAgdGhpcy5faXNEaWFsb2cgPSB2YWx1ZTtcbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ21vZGFsLW9wZW4nKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNEaWFsb2coKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRGlhbG9nO1xuICB9XG5cbiAgLyoqIEVtaXRzIHdoZW4gdGhlIGxpc3QgbXVzdCBjbG9zZSAqL1xuICBAT3V0cHV0KCkgY2xvc2VMaXN0ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8qKiBUaGUgbGlzdCBvZiBhbGwgZmFjZXQgYW5kIHZhbHVlcyByZWxhdGVkIHRvIHRoZSBwcm9kdWN0cyBpbiB0aGUgbGlzdCAqL1xuICBmYWNldExpc3QkOiBPYnNlcnZhYmxlPEZhY2V0TGlzdD4gPSB0aGlzLmZhY2V0U2VydmljZS5mYWNldExpc3QkO1xuXG4gIGljb25UeXBlcyA9IElDT05fVFlQRTtcblxuICBkaWFsb2dGb2N1c0NvbmZpZzogRm9jdXNDb25maWcgPSB7XG4gICAgdHJhcDogdHJ1ZSxcbiAgICBibG9jazogdHJ1ZSxcbiAgICBmb2N1c09uRXNjYXBlOiB0cnVlLFxuICAgIGF1dG9mb2N1czogJ2N4LWZhY2V0JyxcbiAgfTtcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIGhhbmRsZUNsaWNrKCkge1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBmYWNldFNlcnZpY2U6IEZhY2V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGZhY2V0IGdyb3VwIGluIGNhc2UgaXQgaXMgbm90IGV4cGFuZGVkLlxuICAgKi9cbiAgZXhwYW5kRmFjZXRHcm91cChmYWNldDogRmFjZXQsIHJlZjogRmFjZXRDb21wb25lbnQpIHtcbiAgICBpZiAoIXJlZi5pc0V4cGFuZGVkKSB7XG4gICAgICB0aGlzLmZhY2V0U2VydmljZS50b2dnbGUoZmFjZXQsIHJlZi5pc0V4cGFuZGVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGZhY2V0IGdyb3VwIGhhcyBiZWVuIGV4cGFuZGVkLlxuICAgKi9cbiAgaXNFeHBhbmRlZChmYWNldDogRmFjZXQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5mYWNldFNlcnZpY2VcbiAgICAgIC5nZXRTdGF0ZShmYWNldClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHZhbHVlKSA9PiB2YWx1ZS50b2dnbGVkID09PSBGYWNldEdyb3VwQ29sbGFwc2VkU3RhdGUuRVhQQU5ERUQpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBmYWNldCBncm91cCBoYXMgYmVlbiBjb2xsYXBzZWQuXG4gICAqL1xuICBpc0NvbGxhcHNlZChmYWNldDogRmFjZXQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5mYWNldFNlcnZpY2VcbiAgICAgIC5nZXRTdGF0ZShmYWNldClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHZhbHVlKSA9PiB2YWx1ZS50b2dnbGVkID09PSBGYWNldEdyb3VwQ29sbGFwc2VkU3RhdGUuQ09MTEFQU0VEKVxuICAgICAgKTtcbiAgfVxuXG4gIGNsb3NlKGV2ZW50PzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZG9jdW1lbnQuYm9keSwgJ21vZGFsLW9wZW4nKTtcbiAgICB0aGlzLmNsb3NlTGlzdC5lbWl0KGV2ZW50KTtcbiAgfVxuXG4gIGJsb2NrKGV2ZW50PzogTW91c2VFdmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG4iXX0=