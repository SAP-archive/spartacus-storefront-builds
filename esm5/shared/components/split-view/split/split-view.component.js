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
var SplitViewComponent = /** @class */ (function () {
    function SplitViewComponent(splitService) {
        this.splitService = splitService;
        /**
         * Indicates the last visible view in the range of views that is visible. This
         * is bind to a css variable `--cx-last-visible-view` so that the experience
         * can be fully controlled by css.
         */
        this.lastVisibleView = 1;
    }
    SplitViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription$ = this.splitService
            .visibleViewCount()
            .subscribe(function (lastVisible) { return (_this.lastVisibleView = lastVisible); });
    };
    SplitViewComponent.prototype.ngOnDestroy = function () {
        var _a;
        (_a = this.subscription$) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    };
    SplitViewComponent.ctorParameters = function () { return [
        { type: SplitViewService }
    ]; };
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
    return SplitViewComponent;
}());
export { SplitViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9zcGxpdC12aWV3L3NwbGl0L3NwbGl0LXZpZXcuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxXQUFXLEdBR1osTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFFekQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQXFCRztBQU9IO0lBWUUsNEJBQXNCLFlBQThCO1FBQTlCLGlCQUFZLEdBQVosWUFBWSxDQUFrQjtRQVhwRDs7OztXQUlHO1FBRUgsb0JBQWUsR0FBRyxDQUFDLENBQUM7SUFLbUMsQ0FBQztJQUV4RCxxQ0FBUSxHQUFSO1FBQUEsaUJBSUM7UUFIQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZO2FBQ25DLGdCQUFnQixFQUFFO2FBQ2xCLFNBQVMsQ0FBQyxVQUFDLFdBQW1CLElBQUssT0FBQSxDQUFDLEtBQUksQ0FBQyxlQUFlLEdBQUcsV0FBVyxDQUFDLEVBQXBDLENBQW9DLENBQUMsQ0FBQztJQUM5RSxDQUFDO0lBRUQsd0NBQVcsR0FBWDs7UUFDRSxNQUFBLElBQUksQ0FBQyxhQUFhLDBDQUFFLFdBQVcsR0FBRztJQUNwQyxDQUFDOztnQkFWbUMsZ0JBQWdCOztJQUxwRDtRQURDLFdBQVcsQ0FBQyw4QkFBOEIsQ0FBQzsrREFDeEI7SUFQVCxrQkFBa0I7UUFOOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGVBQWU7WUFDekIsdUNBQTBDO1lBQzFDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1lBQy9DLFNBQVMsRUFBRSxDQUFDLGdCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxrQkFBa0IsQ0F1QjlCO0lBQUQseUJBQUM7Q0FBQSxBQXZCRCxJQXVCQztTQXZCWSxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBIb3N0QmluZGluZyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBTcGxpdFZpZXdTZXJ2aWNlIH0gZnJvbSAnLi4vc3BsaXQtdmlldy5zZXJ2aWNlJztcblxuLyoqXG4gKiBUaGUgc3BsaXQtdmlldyBjb21wb25lbnQgc3VwcG9ydHMgYW4gdW5saW1pdGVkIG51bWJlciBvZiBuZXN0ZWQgdmlld3MuIFRoZSBjb21wb25lbnRcbiAqIGlzIGEgaG9zdCB0byB0aG9zZSB2aWV3IGNvbXBvbmVudHMgYW5kIGRvZXNuJ3QgYWRkIGFueSByZXN0cmljdGlvbnMgdG8gaXQncyBjb250ZW50O1xuICogY29udGVudCBpcyBwcm9qZWN0ZWQgYXMtaXMuXG4gKlxuICogYGBgaHRtbFxuICogPGN4LXNwbGl0LXZpZXc+XG4gKiAgIDxjeC12aWV3PjwvY3gtdmlldz5cbiAqICAgPGN4LXZpZXc+PC9jeC12aWV3PlxuICogICA8YW55LXdyYXBwZXI+XG4gKiAgICAgPGN4LXZpZXc+PC9jeC12aWV3PlxuICogICA8L2FueS13cmFwcGVyPlxuICogPC9jeC1zcGxpdC12aWV3PlxuICogYGBgXG4gKlxuICogVGhlIHNwbGl0IHZpZXcgY29tcG9uZW50IGlzIG9ubHkgY29uY2VybmVkIHdpdGggdHJhY2tpbmcgdGhlIHVuZGVybHlpbmcgX3Zpc2libGVfXG4gKiB2aWV3IGNvbXBvbmVudHMsIHNvIHRoYXQgdGhlIGBsYXN0VmlzaWJsZVZpZXdgIGNhbiBiZSB1cGRhdGVkIGFjY29yZGluZ2x5LiBUaGUgYWN0dWFsXG4gKiB2aXNpYmlsaXR5IG9mIHZpZXdzIGlzIGNvbnRyb2xsZWQgYnkgQ1NTLiBUbyBhbGxvdyBmb3IgbWF4aW11bSBmbGV4aWJpbGl0eSwgdGhlIENTU1xuICogaW1wbGVtZW50YXRpb24gaXMgdXNpbmcgQ1NTIHZhcmlhYmxlcy4gVGhlIGBsYXN0VmlzaWJsZVZpZXdgIGlzIGJpbmQgdG8gdGhlXG4gKiBgLS1jeC1sYXN0LXZpc2libGUtdmlld2Agb24gdGhlIGhvc3QsIHNvIHRoYXQgYWxsIGRlc2NlbmRhbnRzIHZpZXdzIHdpbGwgaW5oZXJpdCB0aGVcbiAqIHByb3BlcnR5IGNvbnZlbmllbnRseS5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtc3BsaXQtdmlldycsXG4gIHRlbXBsYXRlVXJsOiAnLi9zcGxpdC12aWV3LmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHByb3ZpZGVyczogW1NwbGl0Vmlld1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBTcGxpdFZpZXdDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgdGhlIGxhc3QgdmlzaWJsZSB2aWV3IGluIHRoZSByYW5nZSBvZiB2aWV3cyB0aGF0IGlzIHZpc2libGUuIFRoaXNcbiAgICogaXMgYmluZCB0byBhIGNzcyB2YXJpYWJsZSBgLS1jeC1sYXN0LXZpc2libGUtdmlld2Agc28gdGhhdCB0aGUgZXhwZXJpZW5jZVxuICAgKiBjYW4gYmUgZnVsbHkgY29udHJvbGxlZCBieSBjc3MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ3N0eWxlLi0tY3gtbGFzdC12aXNpYmxlLXZpZXcnKVxuICBsYXN0VmlzaWJsZVZpZXcgPSAxO1xuXG4gIC8vIG1haW50YWluIHN1YnNjcmlwdGlvbiBzbyB3ZSBjYW4gY2xlYW51cFxuICBwcm90ZWN0ZWQgc3Vic2NyaXB0aW9uJDogU3Vic2NyaXB0aW9uO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBzcGxpdFNlcnZpY2U6IFNwbGl0Vmlld1NlcnZpY2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdWJzY3JpcHRpb24kID0gdGhpcy5zcGxpdFNlcnZpY2VcbiAgICAgIC52aXNpYmxlVmlld0NvdW50KClcbiAgICAgIC5zdWJzY3JpYmUoKGxhc3RWaXNpYmxlOiBudW1iZXIpID0+ICh0aGlzLmxhc3RWaXNpYmxlVmlldyA9IGxhc3RWaXNpYmxlKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbiQ/LnVuc3Vic2NyaWJlKCk7XG4gIH1cbn1cbiJdfQ==