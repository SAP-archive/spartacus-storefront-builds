import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, ViewChild, } from '@angular/core';
import { asapScheduler, BehaviorSubject, interval, of } from 'rxjs';
import { delayWhen, observeOn, switchMap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/icon.model';
import { BreakpointService } from '../../../../layout/breakpoint/breakpoint.service';
let ProductFacetNavigationComponent = class ProductFacetNavigationComponent {
    constructor(breakpointService) {
        this.breakpointService = breakpointService;
        this.iconTypes = ICON_TYPE;
        /**
         * We delay the removal of DOM so that animations can finish playing before the
         * DOM is removed. Removing the DOM, as hidding is not enough to stop elements
         * to be focused.
         */
        this.CLOSE_DELAY = 300;
        this.open$ = new BehaviorSubject(false);
        /**
         * Emits the open state that indicates whether the facet list should be rendered.
         * This is either done instantly, or after the user triggers this by using the trigger
         * button. This driven by the visiibility of the trigger, so that the CSS drives
         * the behaviour. This can differ per breakpoint.
         *
         * There's a configurable delay for the closed state, so that the DOM is not removed
         * before some CSS animations are done.
         */
        this.isOpen$ = this.breakpointService.breakpoint$.pipe(
        // deffer emitting a new value to the next micro-task to ensure that the `hasTrigger`
        // method represents the actual UI state.
        observeOn(asapScheduler), switchMap(() => (this.hasTrigger ? this.open$ : of(true))), delayWhen((launched) => interval(launched ? 0 : this.CLOSE_DELAY)));
        /**
         * Emits the active state that indicates whether the facet list is activated. Activation
         * is related to the css, so that a animation or transition can visualize opening/closing
         * the list (i.e. dialog).
         */
        this.isActive$ = this.open$.pipe(
        // deffer emitting a new value to the next micro-task to ensure the active class is
        //  applied after the DOM is created
        observeOn(asapScheduler));
    }
    launch() {
        this.open$.next(true);
    }
    close() {
        this.open$.next(false);
        this.trigger.nativeElement.focus();
    }
    /**
     * Indicates that the facet navigation should be open explicitely by a trigger.
     * This is fully controlled by CSS, where the trigger button can be hidden
     * (display:none) for certain screen sizes.
     */
    get hasTrigger() {
        return this.trigger.nativeElement.offsetParent !== null;
    }
};
ProductFacetNavigationComponent.ctorParameters = () => [
    { type: BreakpointService }
];
__decorate([
    ViewChild('trigger')
], ProductFacetNavigationComponent.prototype, "trigger", void 0);
ProductFacetNavigationComponent = __decorate([
    Component({
        selector: 'cx-product-facet-navigation',
        template: "<button\n  #trigger\n  class=\"btn btn-action btn-block dialog-trigger\"\n  (click)=\"launch()\"\n>\n  <cx-icon [type]=\"iconTypes.FILTER\"></cx-icon>\n  {{ 'productList.filterBy.label' | cxTranslate }}\n</button>\n\n<cx-active-facets></cx-active-facets>\n\n<cx-facet-list\n  *ngIf=\"isOpen$ | async\"\n  [isDialog]=\"hasTrigger\"\n  (closeList)=\"close()\"\n  [class.active]=\"isActive$ | async\"\n></cx-facet-list>\n",
        changeDetection: ChangeDetectionStrategy.OnPush
    })
], ProductFacetNavigationComponent);
export { ProductFacetNavigationComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGFBQWEsRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNoRixPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saURBQWlELENBQUM7QUFDNUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFPckYsSUFBYSwrQkFBK0IsR0FBNUMsTUFBYSwrQkFBK0I7SUFnRDFDLFlBQXNCLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBL0MxRCxjQUFTLEdBQUcsU0FBUyxDQUFDO1FBRXRCOzs7O1dBSUc7UUFDTyxnQkFBVyxHQUFHLEdBQUcsQ0FBQztRQVVsQixVQUFLLEdBQUcsSUFBSSxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFN0M7Ozs7Ozs7O1dBUUc7UUFDSCxZQUFPLEdBQXdCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsSUFBSTtRQUNwRSxxRkFBcUY7UUFDckYseUNBQXlDO1FBQ3pDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFDeEIsU0FBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFDMUQsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUNuRSxDQUFDO1FBRUY7Ozs7V0FJRztRQUNILGNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUk7UUFDekIsbUZBQW1GO1FBQ25GLG9DQUFvQztRQUNwQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQ3pCLENBQUM7SUFFMkQsQ0FBQztJQUU5RCxNQUFNO1FBQ0osSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILElBQUksVUFBVTtRQUNaLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxLQUFLLElBQUksQ0FBQztJQUMxRCxDQUFDO0NBQ0YsQ0FBQTs7WUFuQjBDLGlCQUFpQjs7QUFoQ3BDO0lBQXJCLFNBQVMsQ0FBQyxTQUFTLENBQUM7Z0VBQWtDO0FBaEI1QywrQkFBK0I7SUFMM0MsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDZCQUE2QjtRQUN2Qyw4YUFBd0Q7UUFDeEQsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLCtCQUErQixDQW1FM0M7U0FuRVksK0JBQStCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFzYXBTY2hlZHVsZXIsIEJlaGF2aW9yU3ViamVjdCwgaW50ZXJ2YWwsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheVdoZW4sIG9ic2VydmVPbiwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgQnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9sYXlvdXQvYnJlYWtwb2ludC9icmVha3BvaW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgLyoqXG4gICAqIFdlIGRlbGF5IHRoZSByZW1vdmFsIG9mIERPTSBzbyB0aGF0IGFuaW1hdGlvbnMgY2FuIGZpbmlzaCBwbGF5aW5nIGJlZm9yZSB0aGVcbiAgICogRE9NIGlzIHJlbW92ZWQuIFJlbW92aW5nIHRoZSBET00sIGFzIGhpZGRpbmcgaXMgbm90IGVub3VnaCB0byBzdG9wIGVsZW1lbnRzXG4gICAqIHRvIGJlIGZvY3VzZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgQ0xPU0VfREVMQVkgPSAzMDA7XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gb3BlbiB0aGUgZmFjZXQgbmF2aWdhdGlvbiBpbiBhIGRpYWxvZy4gVGhlIHVzYWdlIG9mIHRoZSBkaWFsb2cgZGVwZW5kc1xuICAgKiBvbiB0aGUgYXZhaWxhYmlsaXR5IG9mIHRoZSB0cmlnZ2VyIGVsZW1lbnQsIHdoaWNoIGlzIGRyaXZlbiBieSBDU1MuXG4gICAqXG4gICAqIFRoZSByZWZlcmVuY2UgaXMgYWxzbyB1c2VkIHRvIHJlZm9jdXMgdGhlIHRyaWdnZXIgYWZ0ZXIgdGhlIGRpYWxvZyBpcyBjbG9zZWQuXG4gICAqL1xuICBAVmlld0NoaWxkKCd0cmlnZ2VyJykgdHJpZ2dlcjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgcHJvdGVjdGVkIG9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBvcGVuIHN0YXRlIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGZhY2V0IGxpc3Qgc2hvdWxkIGJlIHJlbmRlcmVkLlxuICAgKiBUaGlzIGlzIGVpdGhlciBkb25lIGluc3RhbnRseSwgb3IgYWZ0ZXIgdGhlIHVzZXIgdHJpZ2dlcnMgdGhpcyBieSB1c2luZyB0aGUgdHJpZ2dlclxuICAgKiBidXR0b24uIFRoaXMgZHJpdmVuIGJ5IHRoZSB2aXNpaWJpbGl0eSBvZiB0aGUgdHJpZ2dlciwgc28gdGhhdCB0aGUgQ1NTIGRyaXZlc1xuICAgKiB0aGUgYmVoYXZpb3VyLiBUaGlzIGNhbiBkaWZmZXIgcGVyIGJyZWFrcG9pbnQuXG4gICAqXG4gICAqIFRoZXJlJ3MgYSBjb25maWd1cmFibGUgZGVsYXkgZm9yIHRoZSBjbG9zZWQgc3RhdGUsIHNvIHRoYXQgdGhlIERPTSBpcyBub3QgcmVtb3ZlZFxuICAgKiBiZWZvcmUgc29tZSBDU1MgYW5pbWF0aW9ucyBhcmUgZG9uZS5cbiAgICovXG4gIGlzT3BlbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnQkLnBpcGUoXG4gICAgLy8gZGVmZmVyIGVtaXR0aW5nIGEgbmV3IHZhbHVlIHRvIHRoZSBuZXh0IG1pY3JvLXRhc2sgdG8gZW5zdXJlIHRoYXQgdGhlIGBoYXNUcmlnZ2VyYFxuICAgIC8vIG1ldGhvZCByZXByZXNlbnRzIHRoZSBhY3R1YWwgVUkgc3RhdGUuXG4gICAgb2JzZXJ2ZU9uKGFzYXBTY2hlZHVsZXIpLFxuICAgIHN3aXRjaE1hcCgoKSA9PiAodGhpcy5oYXNUcmlnZ2VyID8gdGhpcy5vcGVuJCA6IG9mKHRydWUpKSksXG4gICAgZGVsYXlXaGVuKChsYXVuY2hlZCkgPT4gaW50ZXJ2YWwobGF1bmNoZWQgPyAwIDogdGhpcy5DTE9TRV9ERUxBWSkpXG4gICk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBhY3RpdmUgc3RhdGUgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZmFjZXQgbGlzdCBpcyBhY3RpdmF0ZWQuIEFjdGl2YXRpb25cbiAgICogaXMgcmVsYXRlZCB0byB0aGUgY3NzLCBzbyB0aGF0IGEgYW5pbWF0aW9uIG9yIHRyYW5zaXRpb24gY2FuIHZpc3VhbGl6ZSBvcGVuaW5nL2Nsb3NpbmdcbiAgICogdGhlIGxpc3QgKGkuZS4gZGlhbG9nKS5cbiAgICovXG4gIGlzQWN0aXZlJCA9IHRoaXMub3BlbiQucGlwZShcbiAgICAvLyBkZWZmZXIgZW1pdHRpbmcgYSBuZXcgdmFsdWUgdG8gdGhlIG5leHQgbWljcm8tdGFzayB0byBlbnN1cmUgdGhlIGFjdGl2ZSBjbGFzcyBpc1xuICAgIC8vICBhcHBsaWVkIGFmdGVyIHRoZSBET00gaXMgY3JlYXRlZFxuICAgIG9ic2VydmVPbihhc2FwU2NoZWR1bGVyKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBicmVha3BvaW50U2VydmljZTogQnJlYWtwb2ludFNlcnZpY2UpIHt9XG5cbiAgbGF1bmNoKCkge1xuICAgIHRoaXMub3BlbiQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMub3BlbiQubmV4dChmYWxzZSk7XG4gICAgdGhpcy50cmlnZ2VyLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgZmFjZXQgbmF2aWdhdGlvbiBzaG91bGQgYmUgb3BlbiBleHBsaWNpdGVseSBieSBhIHRyaWdnZXIuXG4gICAqIFRoaXMgaXMgZnVsbHkgY29udHJvbGxlZCBieSBDU1MsIHdoZXJlIHRoZSB0cmlnZ2VyIGJ1dHRvbiBjYW4gYmUgaGlkZGVuXG4gICAqIChkaXNwbGF5Om5vbmUpIGZvciBjZXJ0YWluIHNjcmVlbiBzaXplcy5cbiAgICovXG4gIGdldCBoYXNUcmlnZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLnRyaWdnZXIubmF0aXZlRWxlbWVudC5vZmZzZXRQYXJlbnQgIT09IG51bGw7XG4gIH1cbn1cbiJdfQ==