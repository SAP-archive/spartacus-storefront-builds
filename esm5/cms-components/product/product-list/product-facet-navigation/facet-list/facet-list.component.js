import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, } from '@angular/core';
import { map } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../misc/icon/icon.model';
import { FacetGroupCollapsedState } from '../facet.model';
import { FacetService } from '../services/facet.service';
var FacetListComponent = /** @class */ (function () {
    function FacetListComponent(facetService, elementRef) {
        this.facetService = facetService;
        this.elementRef = elementRef;
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
        this.closeList.emit(event);
    };
    FacetListComponent.ctorParameters = function () { return [
        { type: FacetService },
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], FacetListComponent.prototype, "isDialog", void 0);
    __decorate([
        Output()
    ], FacetListComponent.prototype, "closeList", void 0);
    FacetListComponent = __decorate([
        Component({
            selector: 'cx-facet-list',
            template: "<div\n  *ngIf=\"(facetList$ | async)?.facets as facets\"\n  [cxFocus]=\"isDialog ? dialogFocusConfig : {}\"\n  (esc)=\"closeList.emit($event)\"\n>\n  <h4>\n    {{ 'productList.filterBy.label' | cxTranslate }}\n    <button\n      type=\"button\"\n      class=\"close\"\n      aria-label=\"Close\"\n      (click)=\"closeList.emit()\"\n    >\n      <cx-icon aria-hidden=\"true\" [type]=\"iconTypes.CLOSE\"></cx-icon>\n    </button>\n  </h4>\n\n  <!-- \n      Here we'd like to introduce configurable facet components, \n      either by using specific configuration or generic sproutlets \n  -->\n  <cx-facet\n    *ngFor=\"let facet of facets\"\n    #facetRef\n    [facet]=\"facet\"\n    [cxFocus]=\"{ lock: true, trap: true, autofocus: 'a' }\"\n    (unlock)=\"expandFacetGroup(facet, facetRef)\"\n    [class.expanded]=\"isExpanded(facet) | async\"\n    [class.collapsed]=\"isCollapsed(facet) | async\"\n  ></cx-facet>\n</div>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], FacetListComponent);
    return FacetListComponent;
}());
export { FacetListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24vZmFjZXQtbGlzdC9mYWNldC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFFckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBT3pEO0lBcUJFLDRCQUNZLFlBQTBCLEVBQzFCLFVBQXNCO1FBRHRCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFqQmxDLHFDQUFxQztRQUMzQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6QywyRUFBMkU7UUFDM0UsZUFBVSxHQUEwQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUVqRSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBRXRCLHNCQUFpQixHQUFnQjtZQUMvQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1lBQ1gsYUFBYSxFQUFFLElBQUk7WUFDbkIsU0FBUyxFQUFFLFVBQVU7U0FDdEIsQ0FBQztJQUtDLENBQUM7SUFFSjs7T0FFRztJQUNILDZDQUFnQixHQUFoQixVQUFpQixLQUFZLEVBQUUsR0FBbUI7UUFDaEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUNqRDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILHVDQUFVLEdBQVYsVUFBVyxLQUFZO1FBQ3JCLE9BQU8sSUFBSSxDQUFDLFlBQVk7YUFDckIsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUNmLElBQUksQ0FDSCxHQUFHLENBQUMsVUFBQyxLQUFLLElBQUssT0FBQSxLQUFLLENBQUMsT0FBTyxLQUFLLHdCQUF3QixDQUFDLFFBQVEsRUFBbkQsQ0FBbUQsQ0FBQyxDQUNwRSxDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0NBQVcsR0FBWCxVQUFZLEtBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsWUFBWTthQUNyQixRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ2YsSUFBSSxDQUNILEdBQUcsQ0FBQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyxPQUFPLEtBQUssd0JBQXdCLENBQUMsU0FBUyxFQUFwRCxDQUFvRCxDQUFDLENBQ3JFLENBQUM7SUFDTixDQUFDO0lBRUQsa0NBQUssR0FBTCxVQUFNLEtBQWU7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzs7Z0JBckN5QixZQUFZO2dCQUNkLFVBQVU7O0lBbkJ6QjtRQUFSLEtBQUssRUFBRTt3REFBbUI7SUFHakI7UUFBVCxNQUFNLEVBQUU7eURBQWdDO0lBUDlCLGtCQUFrQjtRQUw5QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6Qix3NkJBQTBDO1lBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxrQkFBa0IsQ0E0RDlCO0lBQUQseUJBQUM7Q0FBQSxBQTVERCxJQTREQztTQTVEWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFjZXQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgRm9jdXNDb25maWcgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9pbmRleCc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBGYWNldEdyb3VwQ29sbGFwc2VkU3RhdGUsIEZhY2V0TGlzdCB9IGZyb20gJy4uL2ZhY2V0Lm1vZGVsJztcbmltcG9ydCB7IEZhY2V0Q29tcG9uZW50IH0gZnJvbSAnLi4vZmFjZXQvZmFjZXQuY29tcG9uZW50JztcbmltcG9ydCB7IEZhY2V0U2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2ZhY2V0LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1mYWNldC1saXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0LWxpc3QuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRmFjZXRMaXN0Q29tcG9uZW50IHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBmYWNldCBuYXZpZ2F0aW9uIGlzIHJlbmRlcmVkIGluIGRpYWxvZy5cbiAgICovXG4gIEBJbnB1dCgpIGlzRGlhbG9nOiBib29sZWFuO1xuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBsaXN0IG11c3QgY2xvc2UgKi9cbiAgQE91dHB1dCgpIGNsb3NlTGlzdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKiogVGhlIGxpc3Qgb2YgYWxsIGZhY2V0IGFuZCB2YWx1ZXMgcmVsYXRlZCB0byB0aGUgcHJvZHVjdHMgaW4gdGhlIGxpc3QgKi9cbiAgZmFjZXRMaXN0JDogT2JzZXJ2YWJsZTxGYWNldExpc3Q+ID0gdGhpcy5mYWNldFNlcnZpY2UuZmFjZXRMaXN0JDtcblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgZGlhbG9nRm9jdXNDb25maWc6IEZvY3VzQ29uZmlnID0ge1xuICAgIHRyYXA6IHRydWUsXG4gICAgYmxvY2s6IHRydWUsXG4gICAgZm9jdXNPbkVzY2FwZTogdHJ1ZSxcbiAgICBhdXRvZm9jdXM6ICdjeC1mYWNldCcsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGZhY2V0U2VydmljZTogRmFjZXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmXG4gICkge31cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZmFjZXQgZ3JvdXAgaW4gY2FzZSBpdCBpcyBub3QgZXhwYW5kZWQuXG4gICAqL1xuICBleHBhbmRGYWNldEdyb3VwKGZhY2V0OiBGYWNldCwgcmVmOiBGYWNldENvbXBvbmVudCkge1xuICAgIGlmICghcmVmLmlzRXhwYW5kZWQpIHtcbiAgICAgIHRoaXMuZmFjZXRTZXJ2aWNlLnRvZ2dsZShmYWNldCwgcmVmLmlzRXhwYW5kZWQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgZmFjZXQgZ3JvdXAgaGFzIGJlZW4gZXhwYW5kZWQuXG4gICAqL1xuICBpc0V4cGFuZGVkKGZhY2V0OiBGYWNldCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmZhY2V0U2VydmljZVxuICAgICAgLmdldFN0YXRlKGZhY2V0KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgodmFsdWUpID0+IHZhbHVlLnRvZ2dsZWQgPT09IEZhY2V0R3JvdXBDb2xsYXBzZWRTdGF0ZS5FWFBBTkRFRClcbiAgICAgICk7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGZhY2V0IGdyb3VwIGhhcyBiZWVuIGNvbGxhcHNlZC5cbiAgICovXG4gIGlzQ29sbGFwc2VkKGZhY2V0OiBGYWNldCk6IE9ic2VydmFibGU8Ym9vbGVhbj4ge1xuICAgIHJldHVybiB0aGlzLmZhY2V0U2VydmljZVxuICAgICAgLmdldFN0YXRlKGZhY2V0KVxuICAgICAgLnBpcGUoXG4gICAgICAgIG1hcCgodmFsdWUpID0+IHZhbHVlLnRvZ2dsZWQgPT09IEZhY2V0R3JvdXBDb2xsYXBzZWRTdGF0ZS5DT0xMQVBTRUQpXG4gICAgICApO1xuICB9XG5cbiAgY2xvc2UoZXZlbnQ/OiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5jbG9zZUxpc3QuZW1pdChldmVudCk7XG4gIH1cbn1cbiJdfQ==