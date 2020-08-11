import { __decorate } from "tslib";
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
let SplitViewComponent = class SplitViewComponent {
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
};
SplitViewComponent.ctorParameters = () => [
    { type: SplitViewService }
];
__decorate([
    Input()
], SplitViewComponent.prototype, "hideMode", null);
__decorate([
    HostBinding('style.--cx-active-view')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9zcGxpdC12aWV3L3NwbGl0L3NwbGl0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxXQUFXLEVBQ1gsS0FBSyxHQUVOLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXpEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQkc7QUFPSCxJQUFhLGtCQUFrQixHQUEvQixNQUFhLGtCQUFrQjtJQXdCN0IsWUFBc0IsWUFBOEI7UUFBOUIsaUJBQVksR0FBWixZQUFZLENBQWtCO1FBZHBEOzs7O1dBSUc7UUFFSCxvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUVWLGlCQUFZLEdBQWlCLElBQUksQ0FBQyxZQUFZO2FBQ3JELGFBQWEsRUFBRTthQUNmLFNBQVMsQ0FDUixDQUFDLFdBQW1CLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxXQUFXLEdBQUcsQ0FBQyxDQUFDLENBQ2xFLENBQUM7SUFFbUQsQ0FBQztJQXZCeEQ7OztPQUdHO0lBRUgsSUFBSSxRQUFRLENBQUMsSUFBYTtRQUN4QixJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDM0MsQ0FBQztJQWtCRCxXQUFXOztRQUNULE1BQUEsSUFBSSxDQUFDLFlBQVksMENBQUUsV0FBVyxHQUFHO0lBQ25DLENBQUM7Q0FDRixDQUFBOztZQUxxQyxnQkFBZ0I7O0FBbEJwRDtJQURDLEtBQUssRUFBRTtrREFHUDtBQVFEO0lBREMsV0FBVyxDQUFDLHdCQUF3QixDQUFDOzJEQUNsQjtBQWhCVCxrQkFBa0I7SUFOOUIsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGVBQWU7UUFDekIsdUNBQTBDO1FBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1FBQy9DLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO0tBQzlCLENBQUM7R0FDVyxrQkFBa0IsQ0E2QjlCO1NBN0JZLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25EZXN0cm95LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3BsaXRWaWV3U2VydmljZSB9IGZyb20gJy4uL3NwbGl0LXZpZXcuc2VydmljZSc7XG5cbi8qKlxuICogVGhlIHNwbGl0LXZpZXcgY29tcG9uZW50IHN1cHBvcnRzIGFuIHVubGltaXRlZCBudW1iZXIgb2YgbmVzdGVkIHZpZXdzLiBUaGUgY29tcG9uZW50XG4gKiBpcyBhIGhvc3QgdG8gdGhvc2UgdmlldyBjb21wb25lbnRzIGFuZCBkb2Vzbid0IGFkZCBhbnkgcmVzdHJpY3Rpb25zIHRvIGl0J3MgY29udGVudDtcbiAqIGNvbnRlbnQgaXMgcHJvamVjdGVkIGFzLWlzLlxuICpcbiAqIGBgYGh0bWxcbiAqIDxjeC1zcGxpdC12aWV3PlxuICogICA8Y3gtdmlldz48L2N4LXZpZXc+XG4gKiAgIDxjeC12aWV3PjwvY3gtdmlldz5cbiAqICAgPGFueS13cmFwcGVyPlxuICogICAgIDxjeC12aWV3PjwvY3gtdmlldz5cbiAqICAgPC9hbnktd3JhcHBlcj5cbiAqIDwvY3gtc3BsaXQtdmlldz5cbiAqIGBgYFxuICpcbiAqIFRoZSBzcGxpdCB2aWV3IGNvbXBvbmVudCBpcyBvbmx5IGNvbmNlcm5lZCB3aXRoIHRyYWNraW5nIHRoZSB1bmRlcmx5aW5nIF92aXNpYmxlX1xuICogdmlldyBjb21wb25lbnRzLCBzbyB0aGF0IHRoZSBgbGFzdFZpc2libGVWaWV3YCBjYW4gYmUgdXBkYXRlZCBhY2NvcmRpbmdseS4gVGhlIGFjdHVhbFxuICogdmlzaWJpbGl0eSBvZiB2aWV3cyBpcyBjb250cm9sbGVkIGJ5IENTUy4gVG8gYWxsb3cgZm9yIG1heGltdW0gZmxleGliaWxpdHksIHRoZSBDU1NcbiAqIGltcGxlbWVudGF0aW9uIGlzIHVzaW5nIENTUyB2YXJpYWJsZXMuIFRoZSBgbGFzdFZpc2libGVWaWV3YCBpcyBiaW5kIHRvIHRoZVxuICogYC0tY3gtYWN0aXZlLXZpZXdgIG9uIHRoZSBob3N0LCBzbyB0aGF0IGFsbCBkZXNjZW5kYW50cyB2aWV3cyB3aWxsIGluaGVyaXQgdGhlXG4gKiBwcm9wZXJ0eSBjb252ZW5pZW50bHkuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXNwbGl0LXZpZXcnLFxuICB0ZW1wbGF0ZVVybDogJy4vc3BsaXQtdmlldy5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBwcm92aWRlcnM6IFtTcGxpdFZpZXdTZXJ2aWNlXSxcbn0pXG5leHBvcnQgY2xhc3MgU3BsaXRWaWV3Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcbiAgLyoqXG4gICAqIFNldHMgdGhlIGRlZmF1bHQgaGlkZSBtb2RlIGZvciB2aWV3cy4gVGhpcyBtb2RlIGlzIHVzZWZ1bCBpbiBjYXNlIHZpZXdzIGFyZSBkeW5hbWljYWxseSBiZWluZyBjcmVhdGVkLFxuICAgKiBmb3IgZXhhbXBsZSB3aGVuIHRoZXkgYXJlIGNyZWF0ZWQgYnkgcm91dGVyIGNvbXBvbmVudHMuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgaGlkZU1vZGUobW9kZTogYm9vbGVhbikge1xuICAgIHRoaXMuc3BsaXRTZXJ2aWNlLmRlZmF1bHRIaWRlTW9kZSA9IG1vZGU7XG4gIH1cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHRoZSBsYXN0IHZpc2libGUgdmlldyBpbiB0aGUgcmFuZ2Ugb2Ygdmlld3MgdGhhdCBpcyB2aXNpYmxlLiBUaGlzXG4gICAqIGlzIGJpbmQgdG8gYSBjc3MgdmFyaWFibGUgYC0tY3gtYWN0aXZlLXZpZXdgIHNvIHRoYXQgdGhlIGV4cGVyaWVuY2VcbiAgICogY2FuIGJlIGZ1bGx5IGNvbnRyb2xsZWQgYnkgY3NzLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS4tLWN4LWFjdGl2ZS12aWV3JylcbiAgbGFzdFZpc2libGVWaWV3ID0gMTtcblxuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSB0aGlzLnNwbGl0U2VydmljZVxuICAgIC5nZXRBY3RpdmVWaWV3KClcbiAgICAuc3Vic2NyaWJlKFxuICAgICAgKGxhc3RWaXNpYmxlOiBudW1iZXIpID0+ICh0aGlzLmxhc3RWaXNpYmxlVmlldyA9IGxhc3RWaXNpYmxlICsgMSlcbiAgICApO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzcGxpdFNlcnZpY2U6IFNwbGl0Vmlld1NlcnZpY2UpIHt9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24/LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==