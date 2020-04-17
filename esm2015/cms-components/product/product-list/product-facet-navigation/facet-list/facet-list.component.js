import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, } from '@angular/core';
import { map } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../misc/icon/icon.model';
import { FacetGroupCollapsedState } from '../facet.model';
import { FacetService } from '../services/facet.service';
let FacetListComponent = class FacetListComponent {
    constructor(facetService, elementRef) {
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
    expandFacetGroup(facet, ref) {
        if (!ref.isExpanded) {
            this.facetService.toggle(facet, ref.isExpanded);
        }
    }
    /**
     * Indicates that the facet group has been expanded.
     */
    isExpanded(facet) {
        return this.facetService
            .getState(facet)
            .pipe(map((value) => value.toggled === FacetGroupCollapsedState.EXPANDED));
    }
    /**
     * Indicates that the facet group has been collapsed.
     */
    isCollapsed(facet) {
        return this.facetService
            .getState(facet)
            .pipe(map((value) => value.toggled === FacetGroupCollapsedState.COLLAPSED));
    }
    close(event) {
        this.closeList.emit(event);
    }
};
FacetListComponent.ctorParameters = () => [
    { type: FacetService },
    { type: ElementRef }
];
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
export { FacetListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24vZmFjZXQtbGlzdC9mYWNldC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsTUFBTSxHQUNQLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDN0QsT0FBTyxFQUFFLHdCQUF3QixFQUFhLE1BQU0sZ0JBQWdCLENBQUM7QUFFckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBT3pELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBcUI3QixZQUNZLFlBQTBCLEVBQzFCLFVBQXNCO1FBRHRCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFqQmxDLHFDQUFxQztRQUMzQixjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUV6QywyRUFBMkU7UUFDM0UsZUFBVSxHQUEwQixJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztRQUVqRSxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBRXRCLHNCQUFpQixHQUFnQjtZQUMvQixJQUFJLEVBQUUsSUFBSTtZQUNWLEtBQUssRUFBRSxJQUFJO1lBQ1gsYUFBYSxFQUFFLElBQUk7WUFDbkIsU0FBUyxFQUFFLFVBQVU7U0FDdEIsQ0FBQztJQUtDLENBQUM7SUFFSjs7T0FFRztJQUNILGdCQUFnQixDQUFDLEtBQVksRUFBRSxHQUFtQjtRQUNoRCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRTtZQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsVUFBVSxDQUFDLEtBQVk7UUFDckIsT0FBTyxJQUFJLENBQUMsWUFBWTthQUNyQixRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ2YsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FDcEUsQ0FBQztJQUNOLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVcsQ0FBQyxLQUFZO1FBQ3RCLE9BQU8sSUFBSSxDQUFDLFlBQVk7YUFDckIsUUFBUSxDQUFDLEtBQUssQ0FBQzthQUNmLElBQUksQ0FDSCxHQUFHLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxPQUFPLEtBQUssd0JBQXdCLENBQUMsU0FBUyxDQUFDLENBQ3JFLENBQUM7SUFDTixDQUFDO0lBRUQsS0FBSyxDQUFDLEtBQWU7UUFDbkIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQztDQUNGLENBQUE7O1lBdEMyQixZQUFZO1lBQ2QsVUFBVTs7QUFuQnpCO0lBQVIsS0FBSyxFQUFFO29EQUFtQjtBQUdqQjtJQUFULE1BQU0sRUFBRTtxREFBZ0M7QUFQOUIsa0JBQWtCO0lBTDlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLHc2QkFBMEM7UUFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLGtCQUFrQixDQTREOUI7U0E1RFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZhY2V0IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEZvY3VzQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vbGF5b3V0L2ExMXkva2V5Ym9hcmQtZm9jdXMvaW5kZXgnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgRmFjZXRHcm91cENvbGxhcHNlZFN0YXRlLCBGYWNldExpc3QgfSBmcm9tICcuLi9mYWNldC5tb2RlbCc7XG5pbXBvcnQgeyBGYWNldENvbXBvbmVudCB9IGZyb20gJy4uL2ZhY2V0L2ZhY2V0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGYWNldFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYWNldC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZmFjZXQtbGlzdCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9mYWNldC1saXN0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0TGlzdENvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgZmFjZXQgbmF2aWdhdGlvbiBpcyByZW5kZXJlZCBpbiBkaWFsb2cuXG4gICAqL1xuICBASW5wdXQoKSBpc0RpYWxvZzogYm9vbGVhbjtcblxuICAvKiogRW1pdHMgd2hlbiB0aGUgbGlzdCBtdXN0IGNsb3NlICovXG4gIEBPdXRwdXQoKSBjbG9zZUxpc3QgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLyoqIFRoZSBsaXN0IG9mIGFsbCBmYWNldCBhbmQgdmFsdWVzIHJlbGF0ZWQgdG8gdGhlIHByb2R1Y3RzIGluIHRoZSBsaXN0ICovXG4gIGZhY2V0TGlzdCQ6IE9ic2VydmFibGU8RmFjZXRMaXN0PiA9IHRoaXMuZmFjZXRTZXJ2aWNlLmZhY2V0TGlzdCQ7XG5cbiAgaWNvblR5cGVzID0gSUNPTl9UWVBFO1xuXG4gIGRpYWxvZ0ZvY3VzQ29uZmlnOiBGb2N1c0NvbmZpZyA9IHtcbiAgICB0cmFwOiB0cnVlLFxuICAgIGJsb2NrOiB0cnVlLFxuICAgIGZvY3VzT25Fc2NhcGU6IHRydWUsXG4gICAgYXV0b2ZvY3VzOiAnY3gtZmFjZXQnLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBmYWNldFNlcnZpY2U6IEZhY2V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGZhY2V0IGdyb3VwIGluIGNhc2UgaXQgaXMgbm90IGV4cGFuZGVkLlxuICAgKi9cbiAgZXhwYW5kRmFjZXRHcm91cChmYWNldDogRmFjZXQsIHJlZjogRmFjZXRDb21wb25lbnQpIHtcbiAgICBpZiAoIXJlZi5pc0V4cGFuZGVkKSB7XG4gICAgICB0aGlzLmZhY2V0U2VydmljZS50b2dnbGUoZmFjZXQsIHJlZi5pc0V4cGFuZGVkKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoYXQgdGhlIGZhY2V0IGdyb3VwIGhhcyBiZWVuIGV4cGFuZGVkLlxuICAgKi9cbiAgaXNFeHBhbmRlZChmYWNldDogRmFjZXQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5mYWNldFNlcnZpY2VcbiAgICAgIC5nZXRTdGF0ZShmYWNldClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHZhbHVlKSA9PiB2YWx1ZS50b2dnbGVkID09PSBGYWNldEdyb3VwQ29sbGFwc2VkU3RhdGUuRVhQQU5ERUQpXG4gICAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBmYWNldCBncm91cCBoYXMgYmVlbiBjb2xsYXBzZWQuXG4gICAqL1xuICBpc0NvbGxhcHNlZChmYWNldDogRmFjZXQpOiBPYnNlcnZhYmxlPGJvb2xlYW4+IHtcbiAgICByZXR1cm4gdGhpcy5mYWNldFNlcnZpY2VcbiAgICAgIC5nZXRTdGF0ZShmYWNldClcbiAgICAgIC5waXBlKFxuICAgICAgICBtYXAoKHZhbHVlKSA9PiB2YWx1ZS50b2dnbGVkID09PSBGYWNldEdyb3VwQ29sbGFwc2VkU3RhdGUuQ09MTEFQU0VEKVxuICAgICAgKTtcbiAgfVxuXG4gIGNsb3NlKGV2ZW50PzogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuY2xvc2VMaXN0LmVtaXQoZXZlbnQpO1xuICB9XG59XG4iXX0=