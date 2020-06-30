import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, HostBinding, } from '@angular/core';
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
 * `--cx-last-visible-view` on the host, so that all descendants views will inherit the
 * property conveniently.
 */
let SplitViewComponent = class SplitViewComponent {
    constructor(splitService) {
        this.splitService = splitService;
        /**
         * Indicates the last visible view in the range of views that is visible. This
         * is bind to a css variable `--cx-last-visible-view` so that the experience
         * can be fully controlled by css.
         */
        this.lastVisibleView = 1;
    }
    ngOnInit() {
        this.subscription$ = this.splitService
            .visibleViewCount()
            .subscribe((lastVisible) => (this.lastVisibleView = lastVisible));
    }
    ngOnDestroy() {
        var _a;
        (_a = this.subscription$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    }
};
SplitViewComponent.ctorParameters = () => [
    { type: SplitViewService }
];
__decorate([
    HostBinding('style.--cx-last-visible-view')
], SplitViewComponent.prototype, "lastVisibleView", void 0);
SplitViewComponent = __decorate([
    Component({
        selector: 'cx-split-view',
        template: "<ng-content></ng-content>\n",
        changeDetection: ChangeDetectionStrategy.OnPush,
        providers: [SplitViewService]
    })
], SplitViewComponent);
export { SplitViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9zcGxpdC12aWV3L3NwbGl0L3NwbGl0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxXQUFXLEdBR1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQU9ILElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBWTdCLFlBQXNCLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQVhwRDs7OztXQUlHO1FBRUgsb0JBQWUsR0FBRyxDQUFDLENBQUM7SUFLbUMsQ0FBQztJQUV4RCxRQUFRO1FBQ04sSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWTthQUNuQyxnQkFBZ0IsRUFBRTthQUNsQixTQUFTLENBQUMsQ0FBQyxXQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsV0FBVzs7UUFDVCxNQUFBLElBQUksQ0FBQyxhQUFhLDBDQUFFLFdBQVcsR0FBRztJQUNwQyxDQUFDO0NBQ0YsQ0FBQTs7WUFYcUMsZ0JBQWdCOztBQUxwRDtJQURDLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQzsyREFDeEI7QUFQVCxrQkFBa0I7SUFOOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFDekIsdUNBQTBDO1FBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO0tBQzlCLENBQUM7R0FDVyxrQkFBa0IsQ0F1QjlCO1NBdkJZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFNwbGl0Vmlld1NlcnZpY2UgfSBmcm9tICcuLi9zcGxpdC12aWV3LnNlcnZpY2UnO1xuXG4vKipcbiAqIFRoZSBzcGxpdC12aWV3IGNvbXBvbmVudCBzdXBwb3J0cyBhbiB1bmxpbWl0ZWQgbnVtYmVyIG9mIG5lc3RlZCB2aWV3cy4gVGhlIGNvbXBvbmVudFxuICogaXMgYSBob3N0IHRvIHRob3NlIHZpZXcgY29tcG9uZW50cyBhbmQgZG9lc24ndCBhZGQgYW55IHJlc3RyaWN0aW9ucyB0byBpdCdzIGNvbnRlbnQ7XG4gKiBjb250ZW50IGlzIHByb2plY3RlZCBhcy1pcy5cbiAqXG4gKiBgYGBodG1sXG4gKiA8Y3gtc3BsaXQtdmlldz5cbiAqICAgPGN4LXZpZXc+PC9jeC12aWV3PlxuICogICA8Y3gtdmlldz48L2N4LXZpZXc+XG4gKiAgIDxhbnktd3JhcHBlcj5cbiAqICAgICA8Y3gtdmlldz48L2N4LXZpZXc+XG4gKiAgIDwvYW55LXdyYXBwZXI+XG4gKiA8L2N4LXNwbGl0LXZpZXc+XG4gKiBgYGBcbiAqXG4gKiBUaGUgc3BsaXQgdmlldyBjb21wb25lbnQgaXMgb25seSBjb25jZXJuZWQgd2l0aCB0cmFja2luZyB0aGUgdW5kZXJseWluZyBfdmlzaWJsZV9cbiAqIHZpZXcgY29tcG9uZW50cywgc28gdGhhdCB0aGUgYGxhc3RWaXNpYmxlVmlld2AgY2FuIGJlIHVwZGF0ZWQgYWNjb3JkaW5nbHkuIFRoZSBhY3R1YWxcbiAqIHZpc2liaWxpdHkgb2Ygdmlld3MgaXMgY29udHJvbGxlZCBieSBDU1MuIFRvIGFsbG93IGZvciBtYXhpbXVtIGZsZXhpYmlsaXR5LCB0aGUgQ1NTXG4gKiBpbXBsZW1lbnRhdGlvbiBpcyB1c2luZyBDU1MgdmFyaWFibGVzLiBUaGUgYGxhc3RWaXNpYmxlVmlld2AgaXMgYmluZCB0byB0aGVcbiAqIGAtLWN4LWxhc3QtdmlzaWJsZS12aWV3YCBvbiB0aGUgaG9zdCwgc28gdGhhdCBhbGwgZGVzY2VuZGFudHMgdmlld3Mgd2lsbCBpbmhlcml0IHRoZVxuICogcHJvcGVydHkgY29udmVuaWVudGx5LlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1zcGxpdC12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3NwbGl0LXZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgcHJvdmlkZXJzOiBbU3BsaXRWaWV3U2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIFNwbGl0Vmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGUgbGFzdCB2aXNpYmxlIHZpZXcgaW4gdGhlIHJhbmdlIG9mIHZpZXdzIHRoYXQgaXMgdmlzaWJsZS4gVGhpc1xuICAgKiBpcyBiaW5kIHRvIGEgY3NzIHZhcmlhYmxlIGAtLWN4LWxhc3QtdmlzaWJsZS12aWV3YCBzbyB0aGF0IHRoZSBleHBlcmllbmNlXG4gICAqIGNhbiBiZSBmdWxseSBjb250cm9sbGVkIGJ5IGNzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuLS1jeC1sYXN0LXZpc2libGUtdmlldycpXG4gIGxhc3RWaXNpYmxlVmlldyA9IDE7XG5cbiAgLy8gbWFpbnRhaW4gc3Vic2NyaXB0aW9uIHNvIHdlIGNhbiBjbGVhbnVwXG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb24kOiBTdWJzY3JpcHRpb247XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNwbGl0U2VydmljZTogU3BsaXRWaWV3U2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiQgPSB0aGlzLnNwbGl0U2VydmljZVxuICAgICAgLnZpc2libGVWaWV3Q291bnQoKVxuICAgICAgLnN1YnNjcmliZSgobGFzdFZpc2libGU6IG51bWJlcikgPT4gKHRoaXMubGFzdFZpc2libGVWaWV3ID0gbGFzdFZpc2libGUpKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uJD8udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19