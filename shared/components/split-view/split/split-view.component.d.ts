import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
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
import * as ɵngcc0 from '@angular/core';
export declare class SplitViewComponent implements OnDestroy {
    protected splitService: SplitViewService;
    /**
     * Sets the default hide mode for views. This mode is useful in case views are dynamically being created,
     * for example when they are created by router components.
     */
    set hideMode(mode: boolean);
    /**
     * Indicates the last visible view in the range of views that is visible. This
     * is bind to a css variable `--cx-active-view` so that the experience
     * can be fully controlled by css.
     */
    lastVisibleView: number;
    protected subscription: Subscription;
    constructor(splitService: SplitViewService);
    ngOnDestroy(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SplitViewComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<SplitViewComponent, "cx-split-view", never, { "hideMode": "hideMode"; }, {}, never, ["*"]>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5jb21wb25lbnQuZC50cyIsInNvdXJjZXMiOlsic3BsaXQtdmlldy5jb21wb25lbnQuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5QkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTcGxpdFZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vc3BsaXQtdmlldy5zZXJ2aWNlJztcbi8qKlxuICogVGhlIHNwbGl0LXZpZXcgY29tcG9uZW50IHN1cHBvcnRzIGFuIHVubGltaXRlZCBudW1iZXIgb2YgbmVzdGVkIHZpZXdzLiBUaGUgY29tcG9uZW50XG4gKiBpcyBhIGhvc3QgdG8gdGhvc2UgdmlldyBjb21wb25lbnRzIGFuZCBkb2Vzbid0IGFkZCBhbnkgcmVzdHJpY3Rpb25zIHRvIGl0J3MgY29udGVudDtcbiAqIGNvbnRlbnQgaXMgcHJvamVjdGVkIGFzLWlzLlxuICpcbiAqIGBgYGh0bWxcbiAqIDxjeC1zcGxpdC12aWV3PlxuICogICA8Y3gtdmlldz48L2N4LXZpZXc+XG4gKiAgIDxjeC12aWV3PjwvY3gtdmlldz5cbiAqICAgPGFueS13cmFwcGVyPlxuICogICAgIDxjeC12aWV3PjwvY3gtdmlldz5cbiAqICAgPC9hbnktd3JhcHBlcj5cbiAqIDwvY3gtc3BsaXQtdmlldz5cbiAqIGBgYFxuICpcbiAqIFRoZSBzcGxpdCB2aWV3IGNvbXBvbmVudCBpcyBvbmx5IGNvbmNlcm5lZCB3aXRoIHRyYWNraW5nIHRoZSB1bmRlcmx5aW5nIF92aXNpYmxlX1xuICogdmlldyBjb21wb25lbnRzLCBzbyB0aGF0IHRoZSBgbGFzdFZpc2libGVWaWV3YCBjYW4gYmUgdXBkYXRlZCBhY2NvcmRpbmdseS4gVGhlIGFjdHVhbFxuICogdmlzaWJpbGl0eSBvZiB2aWV3cyBpcyBjb250cm9sbGVkIGJ5IENTUy4gVG8gYWxsb3cgZm9yIG1heGltdW0gZmxleGliaWxpdHksIHRoZSBDU1NcbiAqIGltcGxlbWVudGF0aW9uIGlzIHVzaW5nIENTUyB2YXJpYWJsZXMuIFRoZSBgbGFzdFZpc2libGVWaWV3YCBpcyBiaW5kIHRvIHRoZVxuICogYC0tY3gtYWN0aXZlLXZpZXdgIG9uIHRoZSBob3N0LCBzbyB0aGF0IGFsbCBkZXNjZW5kYW50cyB2aWV3cyB3aWxsIGluaGVyaXQgdGhlXG4gKiBwcm9wZXJ0eSBjb252ZW5pZW50bHkuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNwbGl0Vmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XG4gICAgcHJvdGVjdGVkIHNwbGl0U2VydmljZTogU3BsaXRWaWV3U2VydmljZTtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBkZWZhdWx0IGhpZGUgbW9kZSBmb3Igdmlld3MuIFRoaXMgbW9kZSBpcyB1c2VmdWwgaW4gY2FzZSB2aWV3cyBhcmUgZHluYW1pY2FsbHkgYmVpbmcgY3JlYXRlZCxcbiAgICAgKiBmb3IgZXhhbXBsZSB3aGVuIHRoZXkgYXJlIGNyZWF0ZWQgYnkgcm91dGVyIGNvbXBvbmVudHMuXG4gICAgICovXG4gICAgc2V0IGhpZGVNb2RlKG1vZGU6IGJvb2xlYW4pO1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB0aGUgbGFzdCB2aXNpYmxlIHZpZXcgaW4gdGhlIHJhbmdlIG9mIHZpZXdzIHRoYXQgaXMgdmlzaWJsZS4gVGhpc1xuICAgICAqIGlzIGJpbmQgdG8gYSBjc3MgdmFyaWFibGUgYC0tY3gtYWN0aXZlLXZpZXdgIHNvIHRoYXQgdGhlIGV4cGVyaWVuY2VcbiAgICAgKiBjYW4gYmUgZnVsbHkgY29udHJvbGxlZCBieSBjc3MuXG4gICAgICovXG4gICAgbGFzdFZpc2libGVWaWV3OiBudW1iZXI7XG4gICAgcHJvdGVjdGVkIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xuICAgIGNvbnN0cnVjdG9yKHNwbGl0U2VydmljZTogU3BsaXRWaWV3U2VydmljZSk7XG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZDtcbn1cbiJdfQ==