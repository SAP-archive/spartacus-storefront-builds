import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, ViewChild, ViewChildren, } from '@angular/core';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
import { FocusDirective } from '../../../../../layout/a11y/keyboard-focus/focus.directive';
import { FacetService } from '../services/facet.service';
export class FacetComponent {
    constructor(facetService, elementRef, cd) {
        this.facetService = facetService;
        this.elementRef = elementRef;
        this.cd = cd;
        /** configurable icon that is used to collapse the facet group  */
        this.expandIcon = ICON_TYPE.EXPAND;
        this.collapseIcon = ICON_TYPE.COLLAPSE;
    }
    set facet(value) {
        this._facet = value;
        this.isMultiSelect = !!value.multiSelect;
        this.state$ = this.facetService.getState(value);
    }
    get facet() {
        return this._facet;
    }
    /**
     * Handles clicking the heading of the facet group, which means toggling
     * the visibility of the group (collapse / expand) and optionally focusing
     * the group.
     */
    toggleGroup(event) {
        var _a;
        const host = this.elementRef.nativeElement;
        const isLocked = (_a = this.keyboardFocus) === null || _a === void 0 ? void 0 : _a.isLocked;
        this.facetService.toggle(this.facet, this.isExpanded);
        if (!isLocked || this.isExpanded) {
            host.focus();
            // we stop propagating the event as otherwise the focus on the host will trigger
            // an unlock event from the LockFocus directive.
            event.stopPropagation();
        }
    }
    get isExpanded() {
        return this.values.first.nativeElement.offsetParent !== null;
    }
    openLink(event) {
        event.target.click();
        event.preventDefault();
    }
    /**
     * Increases the number of visible values for the facet. This is delegated
     * to `facetService.increaseVisibleValues`.
     */
    increaseVisibleValues() {
        this.facetService.increaseVisibleValues(this.facet);
    }
    /**
     * Decreases the number of visible values for the facet. This is delegated
     * to `facetService.decreaseVisibleValues`.
     */
    decreaseVisibleValues() {
        this.facetService.decreaseVisibleValues(this.facet);
    }
    getLinkParams(value) {
        var _a;
        return this.facetService.getLinkParams((_a = value.query) === null || _a === void 0 ? void 0 : _a.query.value);
    }
}
FacetComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-facet',
                template: "<ng-container *ngIf=\"state$ | async as state\">\n  <button class=\"heading\" (click)=\"toggleGroup($event)\">\n    {{ facet.name }}\n    <cx-icon class=\"collapse-icon\" [type]=\"collapseIcon\"></cx-icon>\n    <cx-icon class=\"expand-icon\" [type]=\"expandIcon\"></cx-icon>\n  </button>\n\n  <a\n    *ngFor=\"let value of facet.values | slice: 0:state.topVisible\"\n    #facetValue\n    routerLink=\"./\"\n    [queryParams]=\"getLinkParams(value)\"\n    class=\"value\"\n    [class.selected]=\"value.selected\"\n    [cxFocus]=\"value.name\"\n    (keydown.space)=\"openLink($event)\"\n  >\n    <span>\n      <span class=\"label\">{{ value.name }}</span>\n      <span class=\"count\">{{ value.count }}</span>\n    </span>\n  </a>\n\n  <div class=\"more\">\n    <a\n      *ngFor=\"\n        let value of facet.values | slice: state.topVisible:state.maxVisible\n      \"\n      #facetValue\n      routerLink=\"./\"\n      [queryParams]=\"getLinkParams(value)\"\n      class=\"value\"\n      [class.selected]=\"value.selected\"\n      [cxFocus]=\"value.name\"\n      (keydown.space)=\"openLink($event)\"\n    >\n      <span\n        >{{ value.name }}<span class=\"count\">{{ value.count }}</span></span\n      >\n    </a>\n\n    <button\n      *ngIf=\"state.maxVisible > state.topVisible\"\n      (click)=\"decreaseVisibleValues()\"\n      class=\"cx-action-link\"\n      cxFocus=\"moreorless\"\n    >\n      {{ 'productList.showLess' | cxTranslate }}\n    </button>\n\n    <button\n      *ngIf=\"state.maxVisible > 0 && state.maxVisible < facet.values.length\"\n      (click)=\"increaseVisibleValues()\"\n      class=\"cx-action-link\"\n      cxFocus=\"moreorless\"\n    >\n      {{ 'productList.showMore' | cxTranslate }}\n    </button>\n  </div>\n</ng-container>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
FacetComponent.ctorParameters = () => [
    { type: FacetService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
FacetComponent.propDecorators = {
    expandIcon: [{ type: Input }],
    collapseIcon: [{ type: Input }],
    isMultiSelect: [{ type: HostBinding, args: ['class.multi-select',] }],
    values: [{ type: ViewChildren, args: ['facetValue',] }],
    keyboardFocus: [{ type: ViewChild, args: [FocusDirective,] }],
    facet: [{ type: Input }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uL2ZhY2V0L2ZhY2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEVBRUwsU0FBUyxFQUNULFlBQVksR0FDYixNQUFNLGVBQWUsQ0FBQztBQUd2QixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFDL0UsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJEQUEyRCxDQUFDO0FBRTNGLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQU96RCxNQUFNLE9BQU8sY0FBYztJQTBCekIsWUFDWSxZQUEwQixFQUMxQixVQUFtQyxFQUNuQyxFQUFxQjtRQUZyQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixlQUFVLEdBQVYsVUFBVSxDQUF5QjtRQUNuQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQXhCakMsa0VBQWtFO1FBQ3pELGVBQVUsR0FBYyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQ3pDLGlCQUFZLEdBQWMsU0FBUyxDQUFDLFFBQVEsQ0FBQztJQXVCbkQsQ0FBQztJQWZKLElBQ0ksS0FBSyxDQUFDLEtBQVk7UUFDcEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQztRQUN6QyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xELENBQUM7SUFFRCxJQUFJLEtBQUs7UUFDUCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDckIsQ0FBQztJQVFEOzs7O09BSUc7SUFDSCxXQUFXLENBQUMsS0FBYzs7UUFDeEIsTUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3hELE1BQU0sUUFBUSxTQUFHLElBQUksQ0FBQyxhQUFhLDBDQUFFLFFBQVEsQ0FBQztRQUU5QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsZ0ZBQWdGO1lBQ2hGLGdEQUFnRDtZQUNoRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsSUFBSSxVQUFVO1FBQ1osT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQztJQUMvRCxDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQW9CO1FBQzFCLEtBQUssQ0FBQyxNQUFzQixDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3RDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRDs7O09BR0c7SUFDSCxxQkFBcUI7UUFDbkIsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELGFBQWEsQ0FBQyxLQUFpQjs7UUFDN0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsT0FBQyxLQUFLLENBQUMsS0FBSywwQ0FBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7O1lBbkZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsK3VEQUFxQztnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7OztZQU5RLFlBQVk7WUFabkIsVUFBVTtZQUZWLGlCQUFpQjs7O3lCQTJCaEIsS0FBSzsyQkFDTCxLQUFLOzRCQUVMLFdBQVcsU0FBQyxvQkFBb0I7cUJBRWhDLFlBQVksU0FBQyxZQUFZOzRCQUV6QixTQUFTLFNBQUMsY0FBYztvQkFFeEIsS0FBSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFjZXQsIEZhY2V0VmFsdWUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmFjZXRDb2xsYXBzZVN0YXRlIH0gZnJvbSAnLi4vZmFjZXQubW9kZWwnO1xuaW1wb3J0IHsgRmFjZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmFjZXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWZhY2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0Q29tcG9uZW50IHtcbiAgcHJvdGVjdGVkIF9mYWNldDogRmFjZXQ7XG5cbiAgc3RhdGUkOiBPYnNlcnZhYmxlPEZhY2V0Q29sbGFwc2VTdGF0ZT47XG5cbiAgLyoqIGNvbmZpZ3VyYWJsZSBpY29uIHRoYXQgaXMgdXNlZCB0byBjb2xsYXBzZSB0aGUgZmFjZXQgZ3JvdXAgICovXG4gIEBJbnB1dCgpIGV4cGFuZEljb246IElDT05fVFlQRSA9IElDT05fVFlQRS5FWFBBTkQ7XG4gIEBJbnB1dCgpIGNvbGxhcHNlSWNvbjogSUNPTl9UWVBFID0gSUNPTl9UWVBFLkNPTExBUFNFO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubXVsdGktc2VsZWN0JykgaXNNdWx0aVNlbGVjdDogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkcmVuKCdmYWNldFZhbHVlJykgdmFsdWVzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZjxIVE1MRWxlbWVudD4+O1xuXG4gIEBWaWV3Q2hpbGQoRm9jdXNEaXJlY3RpdmUpIGtleWJvYXJkRm9jdXM6IEZvY3VzRGlyZWN0aXZlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmYWNldCh2YWx1ZTogRmFjZXQpIHtcbiAgICB0aGlzLl9mYWNldCA9IHZhbHVlO1xuICAgIHRoaXMuaXNNdWx0aVNlbGVjdCA9ICEhdmFsdWUubXVsdGlTZWxlY3Q7XG4gICAgdGhpcy5zdGF0ZSQgPSB0aGlzLmZhY2V0U2VydmljZS5nZXRTdGF0ZSh2YWx1ZSk7XG4gIH1cblxuICBnZXQgZmFjZXQoKTogRmFjZXQge1xuICAgIHJldHVybiB0aGlzLl9mYWNldDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBmYWNldFNlcnZpY2U6IEZhY2V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgY2xpY2tpbmcgdGhlIGhlYWRpbmcgb2YgdGhlIGZhY2V0IGdyb3VwLCB3aGljaCBtZWFucyB0b2dnbGluZ1xuICAgKiB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZ3JvdXAgKGNvbGxhcHNlIC8gZXhwYW5kKSBhbmQgb3B0aW9uYWxseSBmb2N1c2luZ1xuICAgKiB0aGUgZ3JvdXAuXG4gICAqL1xuICB0b2dnbGVHcm91cChldmVudDogVUlFdmVudCkge1xuICAgIGNvbnN0IGhvc3Q6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaXNMb2NrZWQgPSB0aGlzLmtleWJvYXJkRm9jdXM/LmlzTG9ja2VkO1xuXG4gICAgdGhpcy5mYWNldFNlcnZpY2UudG9nZ2xlKHRoaXMuZmFjZXQsIHRoaXMuaXNFeHBhbmRlZCk7XG5cbiAgICBpZiAoIWlzTG9ja2VkIHx8IHRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgaG9zdC5mb2N1cygpO1xuICAgICAgLy8gd2Ugc3RvcCBwcm9wYWdhdGluZyB0aGUgZXZlbnQgYXMgb3RoZXJ3aXNlIHRoZSBmb2N1cyBvbiB0aGUgaG9zdCB3aWxsIHRyaWdnZXJcbiAgICAgIC8vIGFuIHVubG9jayBldmVudCBmcm9tIHRoZSBMb2NrRm9jdXMgZGlyZWN0aXZlLlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzRXhwYW5kZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzLmZpcnN0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0UGFyZW50ICE9PSBudWxsO1xuICB9XG5cbiAgb3BlbkxpbmsoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGljaygpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2VzIHRoZSBudW1iZXIgb2YgdmlzaWJsZSB2YWx1ZXMgZm9yIHRoZSBmYWNldC4gVGhpcyBpcyBkZWxlZ2F0ZWRcbiAgICogdG8gYGZhY2V0U2VydmljZS5pbmNyZWFzZVZpc2libGVWYWx1ZXNgLlxuICAgKi9cbiAgaW5jcmVhc2VWaXNpYmxlVmFsdWVzKCk6IHZvaWQge1xuICAgIHRoaXMuZmFjZXRTZXJ2aWNlLmluY3JlYXNlVmlzaWJsZVZhbHVlcyh0aGlzLmZhY2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNyZWFzZXMgdGhlIG51bWJlciBvZiB2aXNpYmxlIHZhbHVlcyBmb3IgdGhlIGZhY2V0LiBUaGlzIGlzIGRlbGVnYXRlZFxuICAgKiB0byBgZmFjZXRTZXJ2aWNlLmRlY3JlYXNlVmlzaWJsZVZhbHVlc2AuXG4gICAqL1xuICBkZWNyZWFzZVZpc2libGVWYWx1ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5mYWNldFNlcnZpY2UuZGVjcmVhc2VWaXNpYmxlVmFsdWVzKHRoaXMuZmFjZXQpO1xuICB9XG5cbiAgZ2V0TGlua1BhcmFtcyh2YWx1ZTogRmFjZXRWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0U2VydmljZS5nZXRMaW5rUGFyYW1zKHZhbHVlLnF1ZXJ5Py5xdWVyeS52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==