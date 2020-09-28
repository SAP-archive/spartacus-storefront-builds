import { ChangeDetectionStrategy, Component, ElementRef, HostBinding, Input, } from '@angular/core';
import { Subscription } from 'rxjs';
import { BreakpointService } from '../../../../layout/breakpoint/breakpoint.service';
import { SplitViewService } from '../split-view.service';
/**
 * The split-view component supports an unlimited number of nested views. The component
 * is a host to those view components and doesn't add any restrictions to it's content;
 * content is projected as-is.
 *
 * ```html
 * <cx-split-view>
 *   <cx-view></cx-view>
 *   <cx-view></cx-view>
 *   <any-wrapper>
 *     <cx-view></cx-view>
 *   </any-wrapper>
 * </cx-split-view>
 * ```
 *
 * The split view component is only concerned with tracking the underlying _visible_
 * view components, so that the `lastVisibleView` can be updated accordingly. The actual
 * visibility of views is controlled by CSS. To allow for maximum flexibility, the CSS
 * implementation is using CSS variables. The `lastVisibleView` is bind to the
 * `--cx-active-view` on the host, so that all descendants views will inherit the
 * property conveniently.
 */
export class SplitViewComponent {
    constructor(splitService, breakpointService, elementRef) {
        this.splitService = splitService;
        this.breakpointService = breakpointService;
        this.elementRef = elementRef;
        this.subscription = new Subscription();
        /**
         * Indicates the last visible view in the range of views that is visible. This
         * is bind to a css variable `--cx-active-view` so that the experience
         * can be fully controlled by css.
         */
        this.lastVisibleView = 1;
    }
    /**
     * Sets the default hide mode for views. This mode is useful in case views are dynamically being created,
     * for example when they are created by router components.
     *
     * The mode defaults to true, unless this is the first view; the first view is never hidden.
     */
    set hideMode(mode) {
        this.splitService.defaultHideMode = mode;
    }
    ngOnInit() {
        this.subscription.add(this.splitService
            .getActiveView()
            .subscribe((lastVisible) => (this.lastVisibleView = lastVisible + 1)));
        this.subscription.add(this.breakpointService.breakpoint$.subscribe(() => {
            this.splitService.updateSplitView(this.splitViewCount);
        }));
    }
    /**
     * Returns the maximum number of views per split-view. The number is based on the
     * CSS custom property `--cx-max-views`.
     */
    get splitViewCount() {
        return Number(getComputedStyle(this.elementRef.nativeElement).getPropertyValue('--cx-max-views'));
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
SplitViewComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-split-view',
                template: "<ng-content></ng-content>\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                providers: [SplitViewService]
            },] }
];
SplitViewComponent.ctorParameters = () => [
    { type: SplitViewService },
    { type: BreakpointService },
    { type: ElementRef }
];
SplitViewComponent.propDecorators = {
    hideMode: [{ type: Input }],
    lastVisibleView: [{ type: HostBinding, args: ['style.--cx-active-view',] }, { type: HostBinding, args: ['attr.active-view',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9zaGFyZWQvY29tcG9uZW50cy9zcGxpdC12aWV3L3NwbGl0L3NwbGl0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFVBQVUsRUFDVixXQUFXLEVBQ1gsS0FBSyxHQUdOLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQU9ILE1BQU0sT0FBTyxrQkFBa0I7SUF1QjdCLFlBQ1ksWUFBOEIsRUFDOUIsaUJBQW9DLEVBQ3BDLFVBQXNCO1FBRnRCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQUM5QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGVBQVUsR0FBVixVQUFVLENBQVk7UUF6QjFCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQWExQzs7OztXQUlHO1FBR0gsb0JBQWUsR0FBRyxDQUFDLENBQUM7SUFNakIsQ0FBQztJQXhCSjs7Ozs7T0FLRztJQUNILElBQ0ksUUFBUSxDQUFDLElBQWE7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzNDLENBQUM7SUFpQkQsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsWUFBWTthQUNkLGFBQWEsRUFBRTthQUNmLFNBQVMsQ0FDUixDQUFDLFdBQW1CLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQ2xFLENBQ0osQ0FBQztRQUNGLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUNuQixJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEVBQUU7WUFDaEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pELENBQUMsQ0FBQyxDQUNILENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsSUFBYyxjQUFjO1FBQzFCLE9BQU8sTUFBTSxDQUNYLGdCQUFnQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLENBQUMsZ0JBQWdCLENBQzlELGdCQUFnQixDQUNqQixDQUNGLENBQUM7SUFDSixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEMsQ0FBQzs7O1lBaEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsdUNBQTBDO2dCQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsU0FBUyxFQUFFLENBQUMsZ0JBQWdCLENBQUM7YUFDOUI7OztZQTdCUSxnQkFBZ0I7WUFEaEIsaUJBQWlCO1lBUHhCLFVBQVU7Ozt1QkErQ1QsS0FBSzs4QkFVTCxXQUFXLFNBQUMsd0JBQXdCLGNBQ3BDLFdBQVcsU0FBQyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uRGVzdHJveSxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgQnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9sYXlvdXQvYnJlYWtwb2ludC9icmVha3BvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3BsaXRWaWV3U2VydmljZSB9IGZyb20gJy4uL3NwbGl0LXZpZXcuc2VydmljZSc7XG5cbi8qKlxuICogVGhlIHNwbGl0LXZpZXcgY29tcG9uZW50IHN1cHBvcnRzIGFuIHVubGltaXRlZCBudW1iZXIgb2YgbmVzdGVkIHZpZXdzLiBUaGUgY29tcG9uZW50XG4gKiBpcyBhIGhvc3QgdG8gdGhvc2UgdmlldyBjb21wb25lbnRzIGFuZCBkb2Vzbid0IGFkZCBhbnkgcmVzdHJpY3Rpb25zIHRvIGl0J3MgY29udGVudDtcbiAqIGNvbnRlbnQgaXMgcHJvamVjdGVkIGFzLWlzLlxuICpcbiAqIGBgYGh0bWxcbiAqIDxjeC1zcGxpdC12aWV3PlxuICogICA8Y3gtdmlldz48L2N4LXZpZXc+XG4gKiAgIDxjeC12aWV3PjwvY3gtdmlldz5cbiAqICAgPGFueS13cmFwcGVyPlxuICogICAgIDxjeC12aWV3PjwvY3gtdmlldz5cbiAqICAgPC9hbnktd3JhcHBlcj5cbiAqIDwvY3gtc3BsaXQtdmlldz5cbiAqIGBgYFxuICpcbiAqIFRoZSBzcGxpdCB2aWV3IGNvbXBvbmVudCBpcyBvbmx5IGNvbmNlcm5lZCB3aXRoIHRyYWNraW5nIHRoZSB1bmRlcmx5aW5nIF92aXNpYmxlX1xuICogdmlldyBjb21wb25lbnRzLCBzbyB0aGF0IHRoZSBgbGFzdFZpc2libGVWaWV3YCBjYW4gYmUgdXBkYXRlZCBhY2NvcmRpbmdseS4gVGhlIGFjdHVhbFxuICogdmlzaWJpbGl0eSBvZiB2aWV3cyBpcyBjb250cm9sbGVkIGJ5IENTUy4gVG8gYWxsb3cgZm9yIG1heGltdW0gZmxleGliaWxpdHksIHRoZSBDU1NcbiAqIGltcGxlbWVudGF0aW9uIGlzIHVzaW5nIENTUyB2YXJpYWJsZXMuIFRoZSBgbGFzdFZpc2libGVWaWV3YCBpcyBiaW5kIHRvIHRoZVxuICogYC0tY3gtYWN0aXZlLXZpZXdgIG9uIHRoZSBob3N0LCBzbyB0aGF0IGFsbCBkZXNjZW5kYW50cyB2aWV3cyB3aWxsIGluaGVyaXQgdGhlXG4gKiBwcm9wZXJ0eSBjb252ZW5pZW50bHkuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNwbGl0LXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3BsaXQtdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtTcGxpdFZpZXdTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgU3BsaXRWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xuICBwcml2YXRlIHN1YnNjcmlwdGlvbiA9IG5ldyBTdWJzY3JpcHRpb24oKTtcblxuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCBoaWRlIG1vZGUgZm9yIHZpZXdzLiBUaGlzIG1vZGUgaXMgdXNlZnVsIGluIGNhc2Ugdmlld3MgYXJlIGR5bmFtaWNhbGx5IGJlaW5nIGNyZWF0ZWQsXG4gICAqIGZvciBleGFtcGxlIHdoZW4gdGhleSBhcmUgY3JlYXRlZCBieSByb3V0ZXIgY29tcG9uZW50cy5cbiAgICpcbiAgICogVGhlIG1vZGUgZGVmYXVsdHMgdG8gdHJ1ZSwgdW5sZXNzIHRoaXMgaXMgdGhlIGZpcnN0IHZpZXc7IHRoZSBmaXJzdCB2aWV3IGlzIG5ldmVyIGhpZGRlbi5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBoaWRlTW9kZShtb2RlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zcGxpdFNlcnZpY2UuZGVmYXVsdEhpZGVNb2RlID0gbW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIGxhc3QgdmlzaWJsZSB2aWV3IGluIHRoZSByYW5nZSBvZiB2aWV3cyB0aGF0IGlzIHZpc2libGUuIFRoaXNcbiAgICogaXMgYmluZCB0byBhIGNzcyB2YXJpYWJsZSBgLS1jeC1hY3RpdmUtdmlld2Agc28gdGhhdCB0aGUgZXhwZXJpZW5jZVxuICAgKiBjYW4gYmUgZnVsbHkgY29udHJvbGxlZCBieSBjc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi0tY3gtYWN0aXZlLXZpZXcnKVxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYWN0aXZlLXZpZXcnKVxuICBsYXN0VmlzaWJsZVZpZXcgPSAxO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBzcGxpdFNlcnZpY2U6IFNwbGl0Vmlld1NlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGJyZWFrcG9pbnRTZXJ2aWNlOiBCcmVha3BvaW50U2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24uYWRkKFxuICAgICAgdGhpcy5zcGxpdFNlcnZpY2VcbiAgICAgICAgLmdldEFjdGl2ZVZpZXcoKVxuICAgICAgICAuc3Vic2NyaWJlKFxuICAgICAgICAgIChsYXN0VmlzaWJsZTogbnVtYmVyKSA9PiAodGhpcy5sYXN0VmlzaWJsZVZpZXcgPSBsYXN0VmlzaWJsZSArIDEpXG4gICAgICAgIClcbiAgICApO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uLmFkZChcbiAgICAgIHRoaXMuYnJlYWtwb2ludFNlcnZpY2UuYnJlYWtwb2ludCQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgdGhpcy5zcGxpdFNlcnZpY2UudXBkYXRlU3BsaXRWaWV3KHRoaXMuc3BsaXRWaWV3Q291bnQpO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG1heGltdW0gbnVtYmVyIG9mIHZpZXdzIHBlciBzcGxpdC12aWV3LiBUaGUgbnVtYmVyIGlzIGJhc2VkIG9uIHRoZVxuICAgKiBDU1MgY3VzdG9tIHByb3BlcnR5IGAtLWN4LW1heC12aWV3c2AuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHNwbGl0Vmlld0NvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE51bWJlcihcbiAgICAgIGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoXG4gICAgICAgICctLWN4LW1heC12aWV3cydcbiAgICAgIClcbiAgICApO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19