import { ChangeDetectionStrategy, Component, ViewChild, } from '@angular/core';
import { asapScheduler, BehaviorSubject, interval, of } from 'rxjs';
import { delayWhen, observeOn, switchMap } from 'rxjs/operators';
import { ICON_TYPE } from '../../../../cms-components/misc/icon/icon.model';
import { BreakpointService } from '../../../../layout/breakpoint/breakpoint.service';
export class ProductFacetNavigationComponent {
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
}
ProductFacetNavigationComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-product-facet-navigation',
                template: "<button\n  #trigger\n  class=\"btn btn-action btn-block dialog-trigger\"\n  (click)=\"launch()\"\n>\n  <cx-icon [type]=\"iconTypes.FILTER\"></cx-icon>\n  {{ 'productList.filterBy.label' | cxTranslate }}\n</button>\n\n<cx-active-facets></cx-active-facets>\n\n<cx-facet-list\n  *ngIf=\"isOpen$ | async\"\n  [isDialog]=\"hasTrigger\"\n  (closeList)=\"close()\"\n  [class.active]=\"isActive$ | async\"\n  [class.dialog]=\"hasTrigger\"\n></cx-facet-list>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            },] }
];
ProductFacetNavigationComponent.ctorParameters = () => [
    { type: BreakpointService }
];
ProductFacetNavigationComponent.propDecorators = {
    trigger: [{ type: ViewChild, args: ['trigger',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL2Ntcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULFNBQVMsR0FDVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBRSxRQUFRLEVBQWMsRUFBRSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUM1RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxrREFBa0QsQ0FBQztBQU9yRixNQUFNLE9BQU8sK0JBQStCO0lBZ0QxQyxZQUFzQixpQkFBb0M7UUFBcEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQS9DMUQsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUV0Qjs7OztXQUlHO1FBQ08sZ0JBQVcsR0FBRyxHQUFHLENBQUM7UUFVbEIsVUFBSyxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRTdDOzs7Ozs7OztXQVFHO1FBQ0gsWUFBTyxHQUF3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUk7UUFDcEUscUZBQXFGO1FBQ3JGLHlDQUF5QztRQUN6QyxTQUFTLENBQUMsYUFBYSxDQUFDLEVBQ3hCLFNBQVMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQzFELFNBQVMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FDbkUsQ0FBQztRQUVGOzs7O1dBSUc7UUFDSCxjQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJO1FBQ3pCLG1GQUFtRjtRQUNuRixvQ0FBb0M7UUFDcEMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUN6QixDQUFDO0lBRTJELENBQUM7SUFFOUQsTUFBTTtRQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDckMsQ0FBQztJQUVEOzs7O09BSUc7SUFDSCxJQUFJLFVBQVU7UUFDWixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFlBQVksS0FBSyxJQUFJLENBQUM7SUFDMUQsQ0FBQzs7O1lBdkVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QywrY0FBd0Q7Z0JBQ3hELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2hEOzs7WUFOUSxpQkFBaUI7OztzQkF1QnZCLFNBQVMsU0FBQyxTQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgVmlld0NoaWxkLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGFzYXBTY2hlZHVsZXIsIEJlaGF2aW9yU3ViamVjdCwgaW50ZXJ2YWwsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkZWxheVdoZW4sIG9ic2VydmVPbiwgc3dpdGNoTWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi4vLi4vLi4vLi4vY21zLWNvbXBvbmVudHMvbWlzYy9pY29uL2ljb24ubW9kZWwnO1xuaW1wb3J0IHsgQnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9sYXlvdXQvYnJlYWtwb2ludC9icmVha3BvaW50LnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1wcm9kdWN0LWZhY2V0LW5hdmlnYXRpb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvZHVjdC1mYWNldC1uYXZpZ2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIFByb2R1Y3RGYWNldE5hdmlnYXRpb25Db21wb25lbnQge1xuICBpY29uVHlwZXMgPSBJQ09OX1RZUEU7XG5cbiAgLyoqXG4gICAqIFdlIGRlbGF5IHRoZSByZW1vdmFsIG9mIERPTSBzbyB0aGF0IGFuaW1hdGlvbnMgY2FuIGZpbmlzaCBwbGF5aW5nIGJlZm9yZSB0aGVcbiAgICogRE9NIGlzIHJlbW92ZWQuIFJlbW92aW5nIHRoZSBET00sIGFzIGhpZGRpbmcgaXMgbm90IGVub3VnaCB0byBzdG9wIGVsZW1lbnRzXG4gICAqIHRvIGJlIGZvY3VzZWQuXG4gICAqL1xuICBwcm90ZWN0ZWQgQ0xPU0VfREVMQVkgPSAzMDA7XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gb3BlbiB0aGUgZmFjZXQgbmF2aWdhdGlvbiBpbiBhIGRpYWxvZy4gVGhlIHVzYWdlIG9mIHRoZSBkaWFsb2cgZGVwZW5kc1xuICAgKiBvbiB0aGUgYXZhaWxhYmlsaXR5IG9mIHRoZSB0cmlnZ2VyIGVsZW1lbnQsIHdoaWNoIGlzIGRyaXZlbiBieSBDU1MuXG4gICAqXG4gICAqIFRoZSByZWZlcmVuY2UgaXMgYWxzbyB1c2VkIHRvIHJlZm9jdXMgdGhlIHRyaWdnZXIgYWZ0ZXIgdGhlIGRpYWxvZyBpcyBjbG9zZWQuXG4gICAqL1xuICBAVmlld0NoaWxkKCd0cmlnZ2VyJykgdHJpZ2dlcjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD47XG5cbiAgcHJvdGVjdGVkIG9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdChmYWxzZSk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBvcGVuIHN0YXRlIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGZhY2V0IGxpc3Qgc2hvdWxkIGJlIHJlbmRlcmVkLlxuICAgKiBUaGlzIGlzIGVpdGhlciBkb25lIGluc3RhbnRseSwgb3IgYWZ0ZXIgdGhlIHVzZXIgdHJpZ2dlcnMgdGhpcyBieSB1c2luZyB0aGUgdHJpZ2dlclxuICAgKiBidXR0b24uIFRoaXMgZHJpdmVuIGJ5IHRoZSB2aXNpaWJpbGl0eSBvZiB0aGUgdHJpZ2dlciwgc28gdGhhdCB0aGUgQ1NTIGRyaXZlc1xuICAgKiB0aGUgYmVoYXZpb3VyLiBUaGlzIGNhbiBkaWZmZXIgcGVyIGJyZWFrcG9pbnQuXG4gICAqXG4gICAqIFRoZXJlJ3MgYSBjb25maWd1cmFibGUgZGVsYXkgZm9yIHRoZSBjbG9zZWQgc3RhdGUsIHNvIHRoYXQgdGhlIERPTSBpcyBub3QgcmVtb3ZlZFxuICAgKiBiZWZvcmUgc29tZSBDU1MgYW5pbWF0aW9ucyBhcmUgZG9uZS5cbiAgICovXG4gIGlzT3BlbiQ6IE9ic2VydmFibGU8Ym9vbGVhbj4gPSB0aGlzLmJyZWFrcG9pbnRTZXJ2aWNlLmJyZWFrcG9pbnQkLnBpcGUoXG4gICAgLy8gZGVmZmVyIGVtaXR0aW5nIGEgbmV3IHZhbHVlIHRvIHRoZSBuZXh0IG1pY3JvLXRhc2sgdG8gZW5zdXJlIHRoYXQgdGhlIGBoYXNUcmlnZ2VyYFxuICAgIC8vIG1ldGhvZCByZXByZXNlbnRzIHRoZSBhY3R1YWwgVUkgc3RhdGUuXG4gICAgb2JzZXJ2ZU9uKGFzYXBTY2hlZHVsZXIpLFxuICAgIHN3aXRjaE1hcCgoKSA9PiAodGhpcy5oYXNUcmlnZ2VyID8gdGhpcy5vcGVuJCA6IG9mKHRydWUpKSksXG4gICAgZGVsYXlXaGVuKChsYXVuY2hlZCkgPT4gaW50ZXJ2YWwobGF1bmNoZWQgPyAwIDogdGhpcy5DTE9TRV9ERUxBWSkpXG4gICk7XG5cbiAgLyoqXG4gICAqIEVtaXRzIHRoZSBhY3RpdmUgc3RhdGUgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciB0aGUgZmFjZXQgbGlzdCBpcyBhY3RpdmF0ZWQuIEFjdGl2YXRpb25cbiAgICogaXMgcmVsYXRlZCB0byB0aGUgY3NzLCBzbyB0aGF0IGEgYW5pbWF0aW9uIG9yIHRyYW5zaXRpb24gY2FuIHZpc3VhbGl6ZSBvcGVuaW5nL2Nsb3NpbmdcbiAgICogdGhlIGxpc3QgKGkuZS4gZGlhbG9nKS5cbiAgICovXG4gIGlzQWN0aXZlJCA9IHRoaXMub3BlbiQucGlwZShcbiAgICAvLyBkZWZmZXIgZW1pdHRpbmcgYSBuZXcgdmFsdWUgdG8gdGhlIG5leHQgbWljcm8tdGFzayB0byBlbnN1cmUgdGhlIGFjdGl2ZSBjbGFzcyBpc1xuICAgIC8vICBhcHBsaWVkIGFmdGVyIHRoZSBET00gaXMgY3JlYXRlZFxuICAgIG9ic2VydmVPbihhc2FwU2NoZWR1bGVyKVxuICApO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBicmVha3BvaW50U2VydmljZTogQnJlYWtwb2ludFNlcnZpY2UpIHt9XG5cbiAgbGF1bmNoKCkge1xuICAgIHRoaXMub3BlbiQubmV4dCh0cnVlKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMub3BlbiQubmV4dChmYWxzZSk7XG4gICAgdGhpcy50cmlnZ2VyLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhhdCB0aGUgZmFjZXQgbmF2aWdhdGlvbiBzaG91bGQgYmUgb3BlbiBleHBsaWNpdGVseSBieSBhIHRyaWdnZXIuXG4gICAqIFRoaXMgaXMgZnVsbHkgY29udHJvbGxlZCBieSBDU1MsIHdoZXJlIHRoZSB0cmlnZ2VyIGJ1dHRvbiBjYW4gYmUgaGlkZGVuXG4gICAqIChkaXNwbGF5Om5vbmUpIGZvciBjZXJ0YWluIHNjcmVlbiBzaXplcy5cbiAgICovXG4gIGdldCBoYXNUcmlnZ2VyKCkge1xuICAgIHJldHVybiB0aGlzLnRyaWdnZXIubmF0aXZlRWxlbWVudC5vZmZzZXRQYXJlbnQgIT09IG51bGw7XG4gIH1cbn1cbiJdfQ==