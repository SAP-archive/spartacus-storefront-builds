import { __decorate } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
import { FocusDirective } from '../../../../../layout/a11y/keyboard-focus/focus.directive';
import { FacetService } from '../services/facet.service';
let FacetComponent = class FacetComponent {
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
};
FacetComponent.ctorParameters = () => [
    { type: FacetService },
    { type: ElementRef },
    { type: ChangeDetectorRef }
];
__decorate([
    Input()
], FacetComponent.prototype, "expandIcon", void 0);
__decorate([
    Input()
], FacetComponent.prototype, "collapseIcon", void 0);
__decorate([
    HostBinding('class.multi-select')
], FacetComponent.prototype, "isMultiSelect", void 0);
__decorate([
    ViewChildren('facetValue')
], FacetComponent.prototype, "values", void 0);
__decorate([
    ViewChild(FocusDirective)
], FacetComponent.prototype, "keyboardFocus", void 0);
__decorate([
    Input()
], FacetComponent.prototype, "facet", null);
FacetComponent = __decorate([
    Component({
        selector: 'cx-facet',
        template: "<ng-container *ngIf=\"state$ | async as state\">\n  <button class=\"heading\" (click)=\"toggleGroup($event)\">\n    {{ facet.name }}\n    <cx-icon class=\"collapse-icon\" [type]=\"collapseIcon\"></cx-icon>\n    <cx-icon class=\"expand-icon\" [type]=\"expandIcon\"></cx-icon>\n  </button>\n\n  <a\n    *ngFor=\"let value of facet.values | slice: 0:state.topVisible\"\n    #facetValue\n    routerLink=\"./\"\n    [queryParams]=\"getLinkParams(value)\"\n    class=\"value\"\n    [class.selected]=\"value.selected\"\n    [cxFocus]=\"value.name\"\n    (keydown.space)=\"openLink($event)\"\n  >\n    <span>\n      <span class=\"label\">{{ value.name }}</span>\n      <span class=\"count\">{{ value.count }}</span>\n    </span>\n  </a>\n\n  <div class=\"more\">\n    <a\n      *ngFor=\"\n        let value of facet.values | slice: state.topVisible:state.maxVisible\n      \"\n      #facetValue\n      routerLink=\"./\"\n      [queryParams]=\"getLinkParams(value)\"\n      class=\"value\"\n      [class.selected]=\"value.selected\"\n      [cxFocus]=\"value.name\"\n      (keydown.space)=\"openLink($event)\"\n    >\n      <span\n        >{{ value.name }}<span class=\"count\">{{ value.count }}</span></span\n      >\n    </a>\n\n    <button\n      *ngIf=\"state.maxVisible > state.topVisible\"\n      (click)=\"decreaseVisibleValues()\"\n      class=\"cx-action-link\"\n      cxFocus=\"moreorless\"\n    >\n      {{ 'productList.showLess' | cxTranslate }}\n    </button>\n\n    <button\n      *ngIf=\"state.maxVisible > 0 && state.maxVisible < facet.values.length\"\n      (click)=\"increaseVisibleValues()\"\n      class=\"cx-action-link\"\n      cxFocus=\"moreorless\"\n    >\n      {{ 'productList.showMore' | cxTranslate }}\n    </button>\n  </div>\n</ng-container>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], FacetComponent);
export { FacetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uL2ZhY2V0L2ZhY2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFFM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBT3pELElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUEwQnpCLFlBQ1ksWUFBMEIsRUFDMUIsVUFBbUMsRUFDbkMsRUFBcUI7UUFGckIsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFDbkMsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUF4QmpDLGtFQUFrRTtRQUN6RCxlQUFVLEdBQWMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUN6QyxpQkFBWSxHQUFjLFNBQVMsQ0FBQyxRQUFRLENBQUM7SUF1Qm5ELENBQUM7SUFkSixJQUFJLEtBQUssQ0FBQyxLQUFZO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7UUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsRCxDQUFDO0lBRUQsSUFBSSxLQUFLO1FBQ1AsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JCLENBQUM7SUFRRDs7OztPQUlHO0lBQ0gsV0FBVyxDQUFDLEtBQWM7O1FBQ3hCLE1BQU0sSUFBSSxHQUFnQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQUN4RCxNQUFNLFFBQVEsU0FBRyxJQUFJLENBQUMsYUFBYSwwQ0FBRSxRQUFRLENBQUM7UUFFOUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFFdEQsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2hDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLGdGQUFnRjtZQUNoRixnREFBZ0Q7WUFDaEQsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1NBQ3pCO0lBQ0gsQ0FBQztJQUVELElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUM7SUFDL0QsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFvQjtRQUMxQixLQUFLLENBQUMsTUFBc0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN0QyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVEOzs7T0FHRztJQUNILHFCQUFxQjtRQUNuQixJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gscUJBQXFCO1FBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxhQUFhLENBQUMsS0FBaUI7O1FBQzdCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLE9BQUMsS0FBSyxDQUFDLEtBQUssMENBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25FLENBQUM7Q0FDRixDQUFBOztZQXBEMkIsWUFBWTtZQUNkLFVBQVU7WUFDbEIsaUJBQWlCOztBQXZCeEI7SUFBUixLQUFLLEVBQUU7a0RBQTBDO0FBQ3pDO0lBQVIsS0FBSyxFQUFFO29EQUE4QztBQUVuQjtJQUFsQyxXQUFXLENBQUMsb0JBQW9CLENBQUM7cURBQXdCO0FBRTlCO0lBQTNCLFlBQVksQ0FBQyxZQUFZLENBQUM7OENBQTRDO0FBRTVDO0lBQTFCLFNBQVMsQ0FBQyxjQUFjLENBQUM7cURBQStCO0FBR3pEO0lBREMsS0FBSyxFQUFFOzJDQUtQO0FBcEJVLGNBQWM7SUFMMUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsK3VEQUFxQztRQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csY0FBYyxDQStFMUI7U0EvRVksY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIFF1ZXJ5TGlzdCxcbiAgVmlld0NoaWxkLFxuICBWaWV3Q2hpbGRyZW4sXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFjZXQsIEZhY2V0VmFsdWUgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgRm9jdXNEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9sYXlvdXQvYTExeS9rZXlib2FyZC1mb2N1cy9mb2N1cy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgRmFjZXRDb2xsYXBzZVN0YXRlIH0gZnJvbSAnLi4vZmFjZXQubW9kZWwnO1xuaW1wb3J0IHsgRmFjZXRTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvZmFjZXQuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWZhY2V0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ZhY2V0LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0Q29tcG9uZW50IHtcbiAgcHJvdGVjdGVkIF9mYWNldDogRmFjZXQ7XG5cbiAgc3RhdGUkOiBPYnNlcnZhYmxlPEZhY2V0Q29sbGFwc2VTdGF0ZT47XG5cbiAgLyoqIGNvbmZpZ3VyYWJsZSBpY29uIHRoYXQgaXMgdXNlZCB0byBjb2xsYXBzZSB0aGUgZmFjZXQgZ3JvdXAgICovXG4gIEBJbnB1dCgpIGV4cGFuZEljb246IElDT05fVFlQRSA9IElDT05fVFlQRS5FWFBBTkQ7XG4gIEBJbnB1dCgpIGNvbGxhcHNlSWNvbjogSUNPTl9UWVBFID0gSUNPTl9UWVBFLkNPTExBUFNFO1xuXG4gIEBIb3N0QmluZGluZygnY2xhc3MubXVsdGktc2VsZWN0JykgaXNNdWx0aVNlbGVjdDogYm9vbGVhbjtcblxuICBAVmlld0NoaWxkcmVuKCdmYWNldFZhbHVlJykgdmFsdWVzOiBRdWVyeUxpc3Q8RWxlbWVudFJlZjxIVE1MRWxlbWVudD4+O1xuXG4gIEBWaWV3Q2hpbGQoRm9jdXNEaXJlY3RpdmUpIGtleWJvYXJkRm9jdXM6IEZvY3VzRGlyZWN0aXZlO1xuXG4gIEBJbnB1dCgpXG4gIHNldCBmYWNldCh2YWx1ZTogRmFjZXQpIHtcbiAgICB0aGlzLl9mYWNldCA9IHZhbHVlO1xuICAgIHRoaXMuaXNNdWx0aVNlbGVjdCA9ICEhdmFsdWUubXVsdGlTZWxlY3Q7XG4gICAgdGhpcy5zdGF0ZSQgPSB0aGlzLmZhY2V0U2VydmljZS5nZXRTdGF0ZSh2YWx1ZSk7XG4gIH1cblxuICBnZXQgZmFjZXQoKTogRmFjZXQge1xuICAgIHJldHVybiB0aGlzLl9mYWNldDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBmYWNldFNlcnZpY2U6IEZhY2V0U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD4sXG4gICAgcHJvdGVjdGVkIGNkOiBDaGFuZ2VEZXRlY3RvclJlZlxuICApIHt9XG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgY2xpY2tpbmcgdGhlIGhlYWRpbmcgb2YgdGhlIGZhY2V0IGdyb3VwLCB3aGljaCBtZWFucyB0b2dnbGluZ1xuICAgKiB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZ3JvdXAgKGNvbGxhcHNlIC8gZXhwYW5kKSBhbmQgb3B0aW9uYWxseSBmb2N1c2luZ1xuICAgKiB0aGUgZ3JvdXAuXG4gICAqL1xuICB0b2dnbGVHcm91cChldmVudDogVUlFdmVudCkge1xuICAgIGNvbnN0IGhvc3Q6IEhUTUxFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29uc3QgaXNMb2NrZWQgPSB0aGlzLmtleWJvYXJkRm9jdXM/LmlzTG9ja2VkO1xuXG4gICAgdGhpcy5mYWNldFNlcnZpY2UudG9nZ2xlKHRoaXMuZmFjZXQsIHRoaXMuaXNFeHBhbmRlZCk7XG5cbiAgICBpZiAoIWlzTG9ja2VkIHx8IHRoaXMuaXNFeHBhbmRlZCkge1xuICAgICAgaG9zdC5mb2N1cygpO1xuICAgICAgLy8gd2Ugc3RvcCBwcm9wYWdhdGluZyB0aGUgZXZlbnQgYXMgb3RoZXJ3aXNlIHRoZSBmb2N1cyBvbiB0aGUgaG9zdCB3aWxsIHRyaWdnZXJcbiAgICAgIC8vIGFuIHVubG9jayBldmVudCBmcm9tIHRoZSBMb2NrRm9jdXMgZGlyZWN0aXZlLlxuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGlzRXhwYW5kZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMudmFsdWVzLmZpcnN0Lm5hdGl2ZUVsZW1lbnQub2Zmc2V0UGFyZW50ICE9PSBudWxsO1xuICB9XG5cbiAgb3BlbkxpbmsoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcbiAgICAoZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50KS5jbGljaygpO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2VzIHRoZSBudW1iZXIgb2YgdmlzaWJsZSB2YWx1ZXMgZm9yIHRoZSBmYWNldC4gVGhpcyBpcyBkZWxlZ2F0ZWRcbiAgICogdG8gYGZhY2V0U2VydmljZS5pbmNyZWFzZVZpc2libGVWYWx1ZXNgLlxuICAgKi9cbiAgaW5jcmVhc2VWaXNpYmxlVmFsdWVzKCk6IHZvaWQge1xuICAgIHRoaXMuZmFjZXRTZXJ2aWNlLmluY3JlYXNlVmlzaWJsZVZhbHVlcyh0aGlzLmZhY2V0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNyZWFzZXMgdGhlIG51bWJlciBvZiB2aXNpYmxlIHZhbHVlcyBmb3IgdGhlIGZhY2V0LiBUaGlzIGlzIGRlbGVnYXRlZFxuICAgKiB0byBgZmFjZXRTZXJ2aWNlLmRlY3JlYXNlVmlzaWJsZVZhbHVlc2AuXG4gICAqL1xuICBkZWNyZWFzZVZpc2libGVWYWx1ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5mYWNldFNlcnZpY2UuZGVjcmVhc2VWaXNpYmxlVmFsdWVzKHRoaXMuZmFjZXQpO1xuICB9XG5cbiAgZ2V0TGlua1BhcmFtcyh2YWx1ZTogRmFjZXRWYWx1ZSkge1xuICAgIHJldHVybiB0aGlzLmZhY2V0U2VydmljZS5nZXRMaW5rUGFyYW1zKHZhbHVlLnF1ZXJ5Py5xdWVyeS52YWx1ZSk7XG4gIH1cbn1cbiJdfQ==