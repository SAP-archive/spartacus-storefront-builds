import { ChangeDetectionStrategy, Component, HostBinding, Input, } from '@angular/core';
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
    constructor(splitService) {
        this.splitService = splitService;
        /**
         * Indicates the last visible view in the range of views that is visible. This
         * is bind to a css variable `--cx-active-view` so that the experience
         * can be fully controlled by css.
         */
        this.lastVisibleView = 1;
        this.subscription = this.splitService
            .getActiveView()
            .subscribe((lastVisible) => (this.lastVisibleView = lastVisible + 1));
    }
    /**
     * Sets the default hide mode for views. This mode is useful in case views are dynamically being created,
     * for example when they are created by router components.
     */
    set hideMode(mode) {
        this.splitService.defaultHideMode = mode;
    }
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
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
    { type: SplitViewService }
];
SplitViewComponent.propDecorators = {
    hideMode: [{ type: Input }],
    lastVisibleView: [{ type: HostBinding, args: ['style.--cx-active-view',] }]
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9zdG9yZWZyb250bGliL3NyYy9zaGFyZWQvY29tcG9uZW50cy9zcGxpdC12aWV3L3NwbGl0L3NwbGl0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFdBQVcsRUFDWCxLQUFLLEdBRU4sTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQU9ILE1BQU0sT0FBTyxrQkFBa0I7SUF3QjdCLFlBQXNCLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQWRwRDs7OztXQUlHO1FBRUgsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFFVixpQkFBWSxHQUFpQixJQUFJLENBQUMsWUFBWTthQUNyRCxhQUFhLEVBQUU7YUFDZixTQUFTLENBQ1IsQ0FBQyxXQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxHQUFHLENBQUMsQ0FBQyxDQUNsRSxDQUFDO0lBRW1ELENBQUM7SUF2QnhEOzs7T0FHRztJQUNILElBQ0ksUUFBUSxDQUFDLElBQWE7UUFDeEIsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO0lBQzNDLENBQUM7SUFrQkQsV0FBVzs7UUFDVCxNQUFBLElBQUksQ0FBQyxZQUFZLDBDQUFFLFdBQVcsR0FBRztJQUNuQyxDQUFDOzs7WUFsQ0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxlQUFlO2dCQUN6Qix1Q0FBMEM7Z0JBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQzthQUM5Qjs7O1lBN0JRLGdCQUFnQjs7O3VCQW1DdEIsS0FBSzs4QkFVTCxXQUFXLFNBQUMsd0JBQXdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTcGxpdFZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vc3BsaXQtdmlldy5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGUgc3BsaXQtdmlldyBjb21wb25lbnQgc3VwcG9ydHMgYW4gdW5saW1pdGVkIG51bWJlciBvZiBuZXN0ZWQgdmlld3MuIFRoZSBjb21wb25lbnRcbiAqIGlzIGEgaG9zdCB0byB0aG9zZSB2aWV3IGNvbXBvbmVudHMgYW5kIGRvZXNuJ3QgYWRkIGFueSByZXN0cmljdGlvbnMgdG8gaXQncyBjb250ZW50O1xuICogY29udGVudCBpcyBwcm9qZWN0ZWQgYXMtaXMuXG4gKlxuICogYGBgaHRtbFxuICogPGN4LXNwbGl0LXZpZXc+XG4gKiAgIDxjeC12aWV3PjwvY3gtdmlldz5cbiAqICAgPGN4LXZpZXc+PC9jeC12aWV3PlxuICogICA8YW55LXdyYXBwZXI+XG4gKiAgICAgPGN4LXZpZXc+PC9jeC12aWV3PlxuICogICA8L2FueS13cmFwcGVyPlxuICogPC9jeC1zcGxpdC12aWV3PlxuICogYGBgXG4gKlxuICogVGhlIHNwbGl0IHZpZXcgY29tcG9uZW50IGlzIG9ubHkgY29uY2VybmVkIHdpdGggdHJhY2tpbmcgdGhlIHVuZGVybHlpbmcgX3Zpc2libGVfXG4gKiB2aWV3IGNvbXBvbmVudHMsIHNvIHRoYXQgdGhlIGBsYXN0VmlzaWJsZVZpZXdgIGNhbiBiZSB1cGRhdGVkIGFjY29yZGluZ2x5LiBUaGUgYWN0dWFsXG4gKiB2aXNpYmlsaXR5IG9mIHZpZXdzIGlzIGNvbnRyb2xsZWQgYnkgQ1NTLiBUbyBhbGxvdyBmb3IgbWF4aW11bSBmbGV4aWJpbGl0eSwgdGhlIENTU1xuICogaW1wbGVtZW50YXRpb24gaXMgdXNpbmcgQ1NTIHZhcmlhYmxlcy4gVGhlIGBsYXN0VmlzaWJsZVZpZXdgIGlzIGJpbmQgdG8gdGhlXG4gKiBgLS1jeC1hY3RpdmUtdmlld2Agb24gdGhlIGhvc3QsIHNvIHRoYXQgYWxsIGRlc2NlbmRhbnRzIHZpZXdzIHdpbGwgaW5oZXJpdCB0aGVcbiAqIHByb3BlcnR5IGNvbnZlbmllbnRseS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3BsaXQtdmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zcGxpdC12aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1NwbGl0Vmlld1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBTcGxpdFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvKipcbiAgICogU2V0cyB0aGUgZGVmYXVsdCBoaWRlIG1vZGUgZm9yIHZpZXdzLiBUaGlzIG1vZGUgaXMgdXNlZnVsIGluIGNhc2Ugdmlld3MgYXJlIGR5bmFtaWNhbGx5IGJlaW5nIGNyZWF0ZWQsXG4gICAqIGZvciBleGFtcGxlIHdoZW4gdGhleSBhcmUgY3JlYXRlZCBieSByb3V0ZXIgY29tcG9uZW50cy5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBoaWRlTW9kZShtb2RlOiBib29sZWFuKSB7XG4gICAgdGhpcy5zcGxpdFNlcnZpY2UuZGVmYXVsdEhpZGVNb2RlID0gbW9kZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIGxhc3QgdmlzaWJsZSB2aWV3IGluIHRoZSByYW5nZSBvZiB2aWV3cyB0aGF0IGlzIHZpc2libGUuIFRoaXNcbiAgICogaXMgYmluZCB0byBhIGNzcyB2YXJpYWJsZSBgLS1jeC1hY3RpdmUtdmlld2Agc28gdGhhdCB0aGUgZXhwZXJpZW5jZVxuICAgKiBjYW4gYmUgZnVsbHkgY29udHJvbGxlZCBieSBjc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi0tY3gtYWN0aXZlLXZpZXcnKVxuICBsYXN0VmlzaWJsZVZpZXcgPSAxO1xuXG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbiA9IHRoaXMuc3BsaXRTZXJ2aWNlXG4gICAgLmdldEFjdGl2ZVZpZXcoKVxuICAgIC5zdWJzY3JpYmUoXG4gICAgICAobGFzdFZpc2libGU6IG51bWJlcikgPT4gKHRoaXMubGFzdFZpc2libGVWaWV3ID0gbGFzdFZpc2libGUgKyAxKVxuICAgICk7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNwbGl0U2VydmljZTogU3BsaXRWaWV3U2VydmljZSkge31cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19