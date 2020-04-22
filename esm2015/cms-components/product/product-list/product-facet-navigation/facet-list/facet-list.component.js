import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2, } from '@angular/core';
import { map } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../misc/icon/icon.model';
import { FacetGroupCollapsedState } from '../facet.model';
import { FacetService } from '../services/facet.service';
let FacetListComponent = class FacetListComponent {
    constructor(facetService, elementRef, renderer) {
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
    /**
     * Indicates that the facet navigation is rendered in dialog.
     */
    set isDialog(value) {
        this._isDialog = value;
        if (value) {
            this.renderer.addClass(document.body, 'modal-open');
        }
    }
    get isDialog() {
        return this._isDialog;
    }
    handleClick() {
        this.close();
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
        this.renderer.removeClass(document.body, 'modal-open');
        this.closeList.emit(event);
    }
    block(event) {
        event.stopPropagation();
    }
};
FacetListComponent.ctorParameters = () => [
    { type: FacetService },
    { type: ElementRef },
    { type: Renderer2 }
];
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
export { FacetListComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9wcm9kdWN0L3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24vZmFjZXQtbGlzdC9mYWNldC1saXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixTQUFTLEVBQ1QsVUFBVSxFQUNWLFlBQVksRUFDWixZQUFZLEVBQ1osS0FBSyxFQUNMLE1BQU0sRUFDTixTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUM3RCxPQUFPLEVBQUUsd0JBQXdCLEVBQWEsTUFBTSxnQkFBZ0IsQ0FBQztBQUVyRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFPekQsSUFBYSxrQkFBa0IsR0FBL0IsTUFBYSxrQkFBa0I7SUFvQzdCLFlBQ1ksWUFBMEIsRUFDMUIsVUFBc0IsRUFDdEIsUUFBbUI7UUFGbkIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBdEIvQixxQ0FBcUM7UUFDM0IsY0FBUyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7UUFFekMsMkVBQTJFO1FBQzNFLGVBQVUsR0FBMEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7UUFFakUsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUV0QixzQkFBaUIsR0FBZ0I7WUFDL0IsSUFBSSxFQUFFLElBQUk7WUFDVixLQUFLLEVBQUUsSUFBSTtZQUNYLGFBQWEsRUFBRSxJQUFJO1lBQ25CLFNBQVMsRUFBRSxVQUFVO1NBQ3RCLENBQUM7SUFVQyxDQUFDO0lBdENKOztPQUVHO0lBRUgsSUFBSSxRQUFRLENBQUMsS0FBYztRQUN6QixJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLEtBQUssRUFBRTtZQUNULElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDckQ7SUFDSCxDQUFDO0lBRUQsSUFBSSxRQUFRO1FBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ3hCLENBQUM7SUFpQnNCLFdBQVc7UUFDaEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQVFEOztPQUVHO0lBQ0gsZ0JBQWdCLENBQUMsS0FBWSxFQUFFLEdBQW1CO1FBQ2hELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDakQ7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxVQUFVLENBQUMsS0FBWTtRQUNyQixPQUFPLElBQUksQ0FBQyxZQUFZO2FBQ3JCLFFBQVEsQ0FBQyxLQUFLLENBQUM7YUFDZixJQUFJLENBQ0gsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLHdCQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUNwRSxDQUFDO0lBQ04sQ0FBQztJQUVEOztPQUVHO0lBQ0gsV0FBVyxDQUFDLEtBQVk7UUFDdEIsT0FBTyxJQUFJLENBQUMsWUFBWTthQUNyQixRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ2YsSUFBSSxDQUNILEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sS0FBSyx3QkFBd0IsQ0FBQyxTQUFTLENBQUMsQ0FDckUsQ0FBQztJQUNOLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBZTtRQUNuQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLFlBQVksQ0FBQyxDQUFDO1FBQ3ZELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBa0I7UUFDdEIsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzFCLENBQUM7Q0FDRixDQUFBOztZQTVDMkIsWUFBWTtZQUNkLFVBQVU7WUFDWixTQUFTOztBQWpDL0I7SUFEQyxLQUFLLEVBQUU7a0RBTVA7QUFPUztJQUFULE1BQU0sRUFBRTtxREFBZ0M7QUFjbEI7SUFBdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQztxREFFckI7QUFsQ1Usa0JBQWtCO0lBTDlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLG82QkFBMEM7UUFDMUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLGtCQUFrQixDQWlGOUI7U0FqRlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWNldCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBGb2N1c0NvbmZpZyB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xheW91dC9hMTF5L2tleWJvYXJkLWZvY3VzL2luZGV4JztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4uLy4uLy4uLy4uL21pc2MvaWNvbi9pY29uLm1vZGVsJztcbmltcG9ydCB7IEZhY2V0R3JvdXBDb2xsYXBzZWRTdGF0ZSwgRmFjZXRMaXN0IH0gZnJvbSAnLi4vZmFjZXQubW9kZWwnO1xuaW1wb3J0IHsgRmFjZXRDb21wb25lbnQgfSBmcm9tICcuLi9mYWNldC9mYWNldC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRmFjZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmFjZXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWZhY2V0LWxpc3QnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQtbGlzdC5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBGYWNldExpc3RDb21wb25lbnQge1xuICBwcml2YXRlIF9pc0RpYWxvZzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBmYWNldCBuYXZpZ2F0aW9uIGlzIHJlbmRlcmVkIGluIGRpYWxvZy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBpc0RpYWxvZyh2YWx1ZTogYm9vbGVhbikge1xuICAgIHRoaXMuX2lzRGlhbG9nID0gdmFsdWU7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGRvY3VtZW50LmJvZHksICdtb2RhbC1vcGVuJyk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzRGlhbG9nKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9pc0RpYWxvZztcbiAgfVxuXG4gIC8qKiBFbWl0cyB3aGVuIHRoZSBsaXN0IG11c3QgY2xvc2UgKi9cbiAgQE91dHB1dCgpIGNsb3NlTGlzdCA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvKiogVGhlIGxpc3Qgb2YgYWxsIGZhY2V0IGFuZCB2YWx1ZXMgcmVsYXRlZCB0byB0aGUgcHJvZHVjdHMgaW4gdGhlIGxpc3QgKi9cbiAgZmFjZXRMaXN0JDogT2JzZXJ2YWJsZTxGYWNldExpc3Q+ID0gdGhpcy5mYWNldFNlcnZpY2UuZmFjZXRMaXN0JDtcblxuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgZGlhbG9nRm9jdXNDb25maWc6IEZvY3VzQ29uZmlnID0ge1xuICAgIHRyYXA6IHRydWUsXG4gICAgYmxvY2s6IHRydWUsXG4gICAgZm9jdXNPbkVzY2FwZTogdHJ1ZSxcbiAgICBhdXRvZm9jdXM6ICdjeC1mYWNldCcsXG4gIH07XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBoYW5kbGVDbGljaygpIHtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgZmFjZXRTZXJ2aWNlOiBGYWNldFNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjJcbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSBmYWNldCBncm91cCBpbiBjYXNlIGl0IGlzIG5vdCBleHBhbmRlZC5cbiAgICovXG4gIGV4cGFuZEZhY2V0R3JvdXAoZmFjZXQ6IEZhY2V0LCByZWY6IEZhY2V0Q29tcG9uZW50KSB7XG4gICAgaWYgKCFyZWYuaXNFeHBhbmRlZCkge1xuICAgICAgdGhpcy5mYWNldFNlcnZpY2UudG9nZ2xlKGZhY2V0LCByZWYuaXNFeHBhbmRlZCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGF0IHRoZSBmYWNldCBncm91cCBoYXMgYmVlbiBleHBhbmRlZC5cbiAgICovXG4gIGlzRXhwYW5kZWQoZmFjZXQ6IEZhY2V0KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRTZXJ2aWNlXG4gICAgICAuZ2V0U3RhdGUoZmFjZXQpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCh2YWx1ZSkgPT4gdmFsdWUudG9nZ2xlZCA9PT0gRmFjZXRHcm91cENvbGxhcHNlZFN0YXRlLkVYUEFOREVEKVxuICAgICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgZmFjZXQgZ3JvdXAgaGFzIGJlZW4gY29sbGFwc2VkLlxuICAgKi9cbiAgaXNDb2xsYXBzZWQoZmFjZXQ6IEZhY2V0KTogT2JzZXJ2YWJsZTxib29sZWFuPiB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRTZXJ2aWNlXG4gICAgICAuZ2V0U3RhdGUoZmFjZXQpXG4gICAgICAucGlwZShcbiAgICAgICAgbWFwKCh2YWx1ZSkgPT4gdmFsdWUudG9nZ2xlZCA9PT0gRmFjZXRHcm91cENvbGxhcHNlZFN0YXRlLkNPTExBUFNFRClcbiAgICAgICk7XG4gIH1cblxuICBjbG9zZShldmVudD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGRvY3VtZW50LmJvZHksICdtb2RhbC1vcGVuJyk7XG4gICAgdGhpcy5jbG9zZUxpc3QuZW1pdChldmVudCk7XG4gIH1cblxuICBibG9jayhldmVudD86IE1vdXNlRXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuIl19