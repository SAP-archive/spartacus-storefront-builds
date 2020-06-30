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
        this.subscription = this.splitService
            .visibleViewCount()
            .subscribe((lastVisible) => (this.lastVisibleView = lastVisible));
    }
    ngOnDestroy() {
        var _a;
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9zcGxpdC12aWV3L3NwbGl0L3NwbGl0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxXQUFXLEdBRVosTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQU9ILElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBYTdCLFlBQXNCLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQVpwRDs7OztXQUlHO1FBRUgsb0JBQWUsR0FBRyxDQUFDLENBQUM7UUFFVixpQkFBWSxHQUFpQixJQUFJLENBQUMsWUFBWTthQUNyRCxnQkFBZ0IsRUFBRTthQUNsQixTQUFTLENBQUMsQ0FBQyxXQUFtQixFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUVyQixDQUFDO0lBRXhELFdBQVc7O1FBQ1QsTUFBQSxJQUFJLENBQUMsWUFBWSwwQ0FBRSxXQUFXLEdBQUc7SUFDbkMsQ0FBQztDQUNGLENBQUE7O1lBTHFDLGdCQUFnQjs7QUFOcEQ7SUFEQyxXQUFXLENBQUMsOEJBQThCLENBQUM7MkRBQ3hCO0FBUFQsa0JBQWtCO0lBTjlCLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxlQUFlO1FBQ3pCLHVDQUEwQztRQUMxQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtRQUMvQyxTQUFTLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQztLQUM5QixDQUFDO0dBQ1csa0JBQWtCLENBa0I5QjtTQWxCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3BsaXRWaWV3U2VydmljZSB9IGZyb20gJy4uL3NwbGl0LXZpZXcuc2VydmljZSc7XG5cbi8qKlxuICogVGhlIHNwbGl0LXZpZXcgY29tcG9uZW50IHN1cHBvcnRzIGFuIHVubGltaXRlZCBudW1iZXIgb2YgbmVzdGVkIHZpZXdzLiBUaGUgY29tcG9uZW50XG4gKiBpcyBhIGhvc3QgdG8gdGhvc2UgdmlldyBjb21wb25lbnRzIGFuZCBkb2Vzbid0IGFkZCBhbnkgcmVzdHJpY3Rpb25zIHRvIGl0J3MgY29udGVudDtcbiAqIGNvbnRlbnQgaXMgcHJvamVjdGVkIGFzLWlzLlxuICpcbiAqIGBgYGh0bWxcbiAqIDxjeC1zcGxpdC12aWV3PlxuICogICA8Y3gtdmlldz48L2N4LXZpZXc+XG4gKiAgIDxjeC12aWV3PjwvY3gtdmlldz5cbiAqICAgPGFueS13cmFwcGVyPlxuICogICAgIDxjeC12aWV3PjwvY3gtdmlldz5cbiAqICAgPC9hbnktd3JhcHBlcj5cbiAqIDwvY3gtc3BsaXQtdmlldz5cbiAqIGBgYFxuICpcbiAqIFRoZSBzcGxpdCB2aWV3IGNvbXBvbmVudCBpcyBvbmx5IGNvbmNlcm5lZCB3aXRoIHRyYWNraW5nIHRoZSB1bmRlcmx5aW5nIF92aXNpYmxlX1xuICogdmlldyBjb21wb25lbnRzLCBzbyB0aGF0IHRoZSBgbGFzdFZpc2libGVWaWV3YCBjYW4gYmUgdXBkYXRlZCBhY2NvcmRpbmdseS4gVGhlIGFjdHVhbFxuICogdmlzaWJpbGl0eSBvZiB2aWV3cyBpcyBjb250cm9sbGVkIGJ5IENTUy4gVG8gYWxsb3cgZm9yIG1heGltdW0gZmxleGliaWxpdHksIHRoZSBDU1NcbiAqIGltcGxlbWVudGF0aW9uIGlzIHVzaW5nIENTUyB2YXJpYWJsZXMuIFRoZSBgbGFzdFZpc2libGVWaWV3YCBpcyBiaW5kIHRvIHRoZVxuICogYC0tY3gtbGFzdC12aXNpYmxlLXZpZXdgIG9uIHRoZSBob3N0LCBzbyB0aGF0IGFsbCBkZXNjZW5kYW50cyB2aWV3cyB3aWxsIGluaGVyaXQgdGhlXG4gKiBwcm9wZXJ0eSBjb252ZW5pZW50bHkuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNwbGl0LXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3BsaXQtdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtTcGxpdFZpZXdTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgU3BsaXRWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIEluZGljYXRlcyB0aGUgbGFzdCB2aXNpYmxlIHZpZXcgaW4gdGhlIHJhbmdlIG9mIHZpZXdzIHRoYXQgaXMgdmlzaWJsZS4gVGhpc1xuICAgKiBpcyBiaW5kIHRvIGEgY3NzIHZhcmlhYmxlIGAtLWN4LWxhc3QtdmlzaWJsZS12aWV3YCBzbyB0aGF0IHRoZSBleHBlcmllbmNlXG4gICAqIGNhbiBiZSBmdWxseSBjb250cm9sbGVkIGJ5IGNzcy5cbiAgICovXG4gIEBIb3N0QmluZGluZygnc3R5bGUuLS1jeC1sYXN0LXZpc2libGUtdmlldycpXG4gIGxhc3RWaXNpYmxlVmlldyA9IDE7XG5cbiAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gdGhpcy5zcGxpdFNlcnZpY2VcbiAgICAudmlzaWJsZVZpZXdDb3VudCgpXG4gICAgLnN1YnNjcmliZSgobGFzdFZpc2libGU6IG51bWJlcikgPT4gKHRoaXMubGFzdFZpc2libGVWaWV3ID0gbGFzdFZpc2libGUpKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3BsaXRTZXJ2aWNlOiBTcGxpdFZpZXdTZXJ2aWNlKSB7fVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uPy51bnN1YnNjcmliZSgpO1xuICB9XG59XG4iXX0=