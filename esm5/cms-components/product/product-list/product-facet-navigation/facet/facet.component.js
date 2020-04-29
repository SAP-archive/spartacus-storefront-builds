import { __decorate } from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, HostBinding, Input, QueryList, ViewChild, ViewChildren, } from '@angular/core';
import { ICON_TYPE } from '../../../../../cms-components/misc/icon/icon.model';
import { FocusDirective } from '../../../../../layout/a11y/keyboard-focus/focus.directive';
import { FacetService } from '../services/facet.service';
var FacetComponent = /** @class */ (function () {
    function FacetComponent(facetService, elementRef, cd) {
        this.facetService = facetService;
        this.elementRef = elementRef;
        this.cd = cd;
        /** configurable icon that is used to collapse the facet group  */
        this.expandIcon = ICON_TYPE.EXPAND;
        this.collapseIcon = ICON_TYPE.COLLAPSE;
    }
    Object.defineProperty(FacetComponent.prototype, "facet", {
        get: function () {
            return this._facet;
        },
        set: function (value) {
            this._facet = value;
            this.isMultiSelect = !!value.multiSelect;
            this.state$ = this.facetService.getState(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Handles clicking the heading of the facet group, which means toggling
     * the visibility of the group (collapse / expand) and optionally focusing
     * the group.
     */
    FacetComponent.prototype.toggleGroup = function (event) {
        var _a;
        var host = this.elementRef.nativeElement;
        var isLocked = (_a = this.keyboardFocus) === null || _a === void 0 ? void 0 : _a.isLocked;
        this.facetService.toggle(this.facet, this.isExpanded);
        if (!isLocked || this.isExpanded) {
            host.focus();
            // we stop propagating the event as otherwise the focus on the host will trigger
            // an unlock event from the LockFocus directive.
            event.stopPropagation();
        }
    };
    Object.defineProperty(FacetComponent.prototype, "isExpanded", {
        get: function () {
            return this.values.first.nativeElement.offsetParent !== null;
        },
        enumerable: true,
        configurable: true
    });
    FacetComponent.prototype.openLink = function (event) {
        event.target.click();
        event.preventDefault();
    };
    /**
     * Increases the number of visible values for the facet. This is delegated
     * to `facetService.increaseVisibleValues`.
     */
    FacetComponent.prototype.increaseVisibleValues = function () {
        this.facetService.increaseVisibleValues(this.facet);
    };
    /**
     * Decreases the number of visible values for the facet. This is delegated
     * to `facetService.decreaseVisibleValues`.
     */
    FacetComponent.prototype.decreaseVisibleValues = function () {
        this.facetService.decreaseVisibleValues(this.facet);
    };
    FacetComponent.prototype.getLinkParams = function (value) {
        var _a;
        return this.facetService.getLinkParams((_a = value.query) === null || _a === void 0 ? void 0 : _a.query.value);
    };
    FacetComponent.ctorParameters = function () { return [
        { type: FacetService },
        { type: ElementRef },
        { type: ChangeDetectorRef }
    ]; };
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
    return FacetComponent;
}());
export { FacetComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsiY21zLWNvbXBvbmVudHMvcHJvZHVjdC9wcm9kdWN0LWxpc3QvcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uL2ZhY2V0L2ZhY2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxFQUNMLFNBQVMsRUFDVCxTQUFTLEVBQ1QsWUFBWSxHQUNiLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvREFBb0QsQ0FBQztBQUMvRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMkRBQTJELENBQUM7QUFFM0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBT3pEO0lBMEJFLHdCQUNZLFlBQTBCLEVBQzFCLFVBQW1DLEVBQ25DLEVBQXFCO1FBRnJCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLGVBQVUsR0FBVixVQUFVLENBQXlCO1FBQ25DLE9BQUUsR0FBRixFQUFFLENBQW1CO1FBeEJqQyxrRUFBa0U7UUFDekQsZUFBVSxHQUFjLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDekMsaUJBQVksR0FBYyxTQUFTLENBQUMsUUFBUSxDQUFDO0lBdUJuRCxDQUFDO0lBZEosc0JBQUksaUNBQUs7YUFNVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDO2FBUkQsVUFBVSxLQUFZO1lBQ3BCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUM7WUFDekMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDOzs7T0FBQTtJQVlEOzs7O09BSUc7SUFDSCxvQ0FBVyxHQUFYLFVBQVksS0FBYzs7UUFDeEIsSUFBTSxJQUFJLEdBQWdCLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDO1FBQ3hELElBQU0sUUFBUSxTQUFHLElBQUksQ0FBQyxhQUFhLDBDQUFFLFFBQVEsQ0FBQztRQUU5QyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDaEMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsZ0ZBQWdGO1lBQ2hGLGdEQUFnRDtZQUNoRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDekI7SUFDSCxDQUFDO0lBRUQsc0JBQUksc0NBQVU7YUFBZDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUM7UUFDL0QsQ0FBQzs7O09BQUE7SUFFRCxpQ0FBUSxHQUFSLFVBQVMsS0FBb0I7UUFDMUIsS0FBSyxDQUFDLE1BQXNCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7O09BR0c7SUFDSCw4Q0FBcUIsR0FBckI7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsOENBQXFCLEdBQXJCO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELHNDQUFhLEdBQWIsVUFBYyxLQUFpQjs7UUFDN0IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGFBQWEsT0FBQyxLQUFLLENBQUMsS0FBSywwQ0FBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQzs7Z0JBbkR5QixZQUFZO2dCQUNkLFVBQVU7Z0JBQ2xCLGlCQUFpQjs7SUF2QnhCO1FBQVIsS0FBSyxFQUFFO3NEQUEwQztJQUN6QztRQUFSLEtBQUssRUFBRTt3REFBOEM7SUFFbkI7UUFBbEMsV0FBVyxDQUFDLG9CQUFvQixDQUFDO3lEQUF3QjtJQUU5QjtRQUEzQixZQUFZLENBQUMsWUFBWSxDQUFDO2tEQUE0QztJQUU1QztRQUExQixTQUFTLENBQUMsY0FBYyxDQUFDO3lEQUErQjtJQUd6RDtRQURDLEtBQUssRUFBRTsrQ0FLUDtJQXBCVSxjQUFjO1FBTDFCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxVQUFVO1lBQ3BCLCt1REFBcUM7WUFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07U0FDaEQsQ0FBQztPQUNXLGNBQWMsQ0ErRTFCO0lBQUQscUJBQUM7Q0FBQSxBQS9FRCxJQStFQztTQS9FWSxjQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENoYW5nZURldGVjdG9yUmVmLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgUXVlcnlMaXN0LFxuICBWaWV3Q2hpbGQsXG4gIFZpZXdDaGlsZHJlbixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWNldCwgRmFjZXRWYWx1ZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5tb2RlbCc7XG5pbXBvcnQgeyBGb2N1c0RpcmVjdGl2ZSB9IGZyb20gJy4uLy4uLy4uLy4uLy4uL2xheW91dC9hMTF5L2tleWJvYXJkLWZvY3VzL2ZvY3VzLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBGYWNldENvbGxhcHNlU3RhdGUgfSBmcm9tICcuLi9mYWNldC5tb2RlbCc7XG5pbXBvcnQgeyBGYWNldFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9mYWNldC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZmFjZXQnLFxuICB0ZW1wbGF0ZVVybDogJy4vZmFjZXQuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgRmFjZXRDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgX2ZhY2V0OiBGYWNldDtcblxuICBzdGF0ZSQ6IE9ic2VydmFibGU8RmFjZXRDb2xsYXBzZVN0YXRlPjtcblxuICAvKiogY29uZmlndXJhYmxlIGljb24gdGhhdCBpcyB1c2VkIHRvIGNvbGxhcHNlIHRoZSBmYWNldCBncm91cCAgKi9cbiAgQElucHV0KCkgZXhwYW5kSWNvbjogSUNPTl9UWVBFID0gSUNPTl9UWVBFLkVYUEFORDtcbiAgQElucHV0KCkgY29sbGFwc2VJY29uOiBJQ09OX1RZUEUgPSBJQ09OX1RZUEUuQ09MTEFQU0U7XG5cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5tdWx0aS1zZWxlY3QnKSBpc011bHRpU2VsZWN0OiBib29sZWFuO1xuXG4gIEBWaWV3Q2hpbGRyZW4oJ2ZhY2V0VmFsdWUnKSB2YWx1ZXM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPEhUTUxFbGVtZW50Pj47XG5cbiAgQFZpZXdDaGlsZChGb2N1c0RpcmVjdGl2ZSkga2V5Ym9hcmRGb2N1czogRm9jdXNEaXJlY3RpdmU7XG5cbiAgQElucHV0KClcbiAgc2V0IGZhY2V0KHZhbHVlOiBGYWNldCkge1xuICAgIHRoaXMuX2ZhY2V0ID0gdmFsdWU7XG4gICAgdGhpcy5pc011bHRpU2VsZWN0ID0gISF2YWx1ZS5tdWx0aVNlbGVjdDtcbiAgICB0aGlzLnN0YXRlJCA9IHRoaXMuZmFjZXRTZXJ2aWNlLmdldFN0YXRlKHZhbHVlKTtcbiAgfVxuXG4gIGdldCBmYWNldCgpOiBGYWNldCB7XG4gICAgcmV0dXJuIHRoaXMuX2ZhY2V0O1xuICB9XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGZhY2V0U2VydmljZTogRmFjZXRTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PixcbiAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmXG4gICkge31cblxuICAvKipcbiAgICogSGFuZGxlcyBjbGlja2luZyB0aGUgaGVhZGluZyBvZiB0aGUgZmFjZXQgZ3JvdXAsIHdoaWNoIG1lYW5zIHRvZ2dsaW5nXG4gICAqIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBncm91cCAoY29sbGFwc2UgLyBleHBhbmQpIGFuZCBvcHRpb25hbGx5IGZvY3VzaW5nXG4gICAqIHRoZSBncm91cC5cbiAgICovXG4gIHRvZ2dsZUdyb3VwKGV2ZW50OiBVSUV2ZW50KSB7XG4gICAgY29uc3QgaG9zdDogSFRNTEVsZW1lbnQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudDtcbiAgICBjb25zdCBpc0xvY2tlZCA9IHRoaXMua2V5Ym9hcmRGb2N1cz8uaXNMb2NrZWQ7XG5cbiAgICB0aGlzLmZhY2V0U2VydmljZS50b2dnbGUodGhpcy5mYWNldCwgdGhpcy5pc0V4cGFuZGVkKTtcblxuICAgIGlmICghaXNMb2NrZWQgfHwgdGhpcy5pc0V4cGFuZGVkKSB7XG4gICAgICBob3N0LmZvY3VzKCk7XG4gICAgICAvLyB3ZSBzdG9wIHByb3BhZ2F0aW5nIHRoZSBldmVudCBhcyBvdGhlcndpc2UgdGhlIGZvY3VzIG9uIHRoZSBob3N0IHdpbGwgdHJpZ2dlclxuICAgICAgLy8gYW4gdW5sb2NrIGV2ZW50IGZyb20gdGhlIExvY2tGb2N1cyBkaXJlY3RpdmUuXG4gICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBnZXQgaXNFeHBhbmRlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZXMuZmlyc3QubmF0aXZlRWxlbWVudC5vZmZzZXRQYXJlbnQgIT09IG51bGw7XG4gIH1cblxuICBvcGVuTGluayhldmVudDogS2V5Ym9hcmRFdmVudCkge1xuICAgIChldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQpLmNsaWNrKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmNyZWFzZXMgdGhlIG51bWJlciBvZiB2aXNpYmxlIHZhbHVlcyBmb3IgdGhlIGZhY2V0LiBUaGlzIGlzIGRlbGVnYXRlZFxuICAgKiB0byBgZmFjZXRTZXJ2aWNlLmluY3JlYXNlVmlzaWJsZVZhbHVlc2AuXG4gICAqL1xuICBpbmNyZWFzZVZpc2libGVWYWx1ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5mYWNldFNlcnZpY2UuaW5jcmVhc2VWaXNpYmxlVmFsdWVzKHRoaXMuZmFjZXQpO1xuICB9XG5cbiAgLyoqXG4gICAqIERlY3JlYXNlcyB0aGUgbnVtYmVyIG9mIHZpc2libGUgdmFsdWVzIGZvciB0aGUgZmFjZXQuIFRoaXMgaXMgZGVsZWdhdGVkXG4gICAqIHRvIGBmYWNldFNlcnZpY2UuZGVjcmVhc2VWaXNpYmxlVmFsdWVzYC5cbiAgICovXG4gIGRlY3JlYXNlVmlzaWJsZVZhbHVlcygpOiB2b2lkIHtcbiAgICB0aGlzLmZhY2V0U2VydmljZS5kZWNyZWFzZVZpc2libGVWYWx1ZXModGhpcy5mYWNldCk7XG4gIH1cblxuICBnZXRMaW5rUGFyYW1zKHZhbHVlOiBGYWNldFZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRTZXJ2aWNlLmdldExpbmtQYXJhbXModmFsdWUucXVlcnk/LnF1ZXJ5LnZhbHVlKTtcbiAgfVxufVxuIl19