import { __decorate } from "tslib";
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { SplitViewService } from '../split-view.service';
/**
 * The view component is part of the `SplitViewComponent`. The view
 * contains the navigable content that should be split up. It maintains
 * a view position and allows to show or hide the view.
 *
 * The ViewComponent interacts with the `SplitViewService` for handing over the
 * view state, so that the overarching `SplitViewComponent` can manage the
 * overall experience.
 */
var ViewComponent = /** @class */ (function () {
    function ViewComponent(splitService) {
        this.splitService = splitService;
        /**
         * An update of the view visibility is emitted to the hiddenChange output.
         */
        this.hiddenChange = new EventEmitter();
    }
    Object.defineProperty(ViewComponent.prototype, "hidden", {
        /**
         * The hidden input is used to set the initial visible state of the view.
         * The hidden state defaults to false.
         *
         * The hidden input supports 2-way binding, see `hiddenChange` property.
         */
        set: function (hidden) {
            this.splitService.toggle(this.viewPosition, hidden);
        },
        enumerable: true,
        configurable: true
    });
    ViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.splitService.add(this.viewPosition, this.hidden);
        this.subscription = this.splitService
            .visibleViewCount()
            .subscribe(function (visible) {
            if (_this.hidden !== _this.viewPosition >= visible) {
                _this.hiddenChange.emit(_this.viewPosition >= visible);
            }
        });
    };
    /**
     * Toggles the visibility of the view.
     *
     * An optional force flag can be used to explicitly show or hide view component.
     */
    ViewComponent.prototype.toggle = function (force) {
        this.splitService.toggle(this.viewPosition, force);
    };
    Object.defineProperty(ViewComponent.prototype, "viewPosition", {
        /**
         * Returns the position for the view.
         *
         * The position is either taken from the input `position` or generated by the `SplitService`.
         */
        get: function () {
            if (this.position === undefined) {
                this.position = this.splitService.generateNextPosition();
            }
            return this.position;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * The view is removed from the `SplitService` so that the view no longer
     * plays a role in the overall split view.
     */
    ViewComponent.prototype.ngOnDestroy = function () {
        var _a;
        this.splitService.remove(this.viewPosition);
        (_a = this.subscription) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    };
    ViewComponent.ctorParameters = function () { return [
        { type: SplitViewService }
    ]; };
    __decorate([
        Input(),
        HostBinding('attr.position')
    ], ViewComponent.prototype, "position", void 0);
    __decorate([
        Input()
    ], ViewComponent.prototype, "hidden", null);
    __decorate([
        Output()
    ], ViewComponent.prototype, "hiddenChange", void 0);
    ViewComponent = __decorate([
        Component({
            selector: 'cx-view',
            template: "<ng-content></ng-content>\n",
            changeDetection: ChangeDetectionStrategy.OnPush
        })
    ], ViewComponent);
    return ViewComponent;
}());
export { ViewComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlldy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJzaGFyZWQvY29tcG9uZW50cy9zcGxpdC12aWV3L3ZpZXcvdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUNULFlBQVksRUFDWixXQUFXLEVBQ1gsS0FBSyxFQUdMLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUV6RDs7Ozs7Ozs7R0FRRztBQU1IO0lBd0JFLHVCQUFzQixZQUE4QjtRQUE5QixpQkFBWSxHQUFaLFlBQVksQ0FBa0I7UUFScEQ7O1dBRUc7UUFFSCxpQkFBWSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFJcUIsQ0FBQztJQVp4RCxzQkFBSSxpQ0FBTTtRQVBWOzs7OztXQUtHO2FBRUgsVUFBVyxNQUFlO1lBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFDdEQsQ0FBQzs7O09BQUE7SUFZRCxnQ0FBUSxHQUFSO1FBQUEsaUJBVUM7UUFUQyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUV0RCxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxZQUFZO2FBQ2xDLGdCQUFnQixFQUFFO2FBQ2xCLFNBQVMsQ0FBQyxVQUFDLE9BQU87WUFDakIsSUFBSSxLQUFJLENBQUMsTUFBTSxLQUFLLEtBQUksQ0FBQyxZQUFZLElBQUksT0FBTyxFQUFFO2dCQUNoRCxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsWUFBWSxJQUFJLE9BQU8sQ0FBQyxDQUFDO2FBQ3REO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILDhCQUFNLEdBQU4sVUFBTyxLQUFlO1FBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQU9ELHNCQUFjLHVDQUFZO1FBTDFCOzs7O1dBSUc7YUFDSDtZQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO2FBQzFEO1lBQ0QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQ7OztPQUdHO0lBQ0gsbUNBQVcsR0FBWDs7UUFDRSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDNUMsTUFBQSxJQUFJLENBQUMsWUFBWSwwQ0FBRSxXQUFXLEdBQUc7SUFDbkMsQ0FBQzs7Z0JBMUNtQyxnQkFBZ0I7O0lBckJwRDtRQUZDLEtBQUssRUFBRTtRQUNQLFdBQVcsQ0FBQyxlQUFlLENBQUM7bURBQ1o7SUFTakI7UUFEQyxLQUFLLEVBQUU7K0NBR1A7SUFNRDtRQURDLE1BQU0sRUFBRTt1REFDeUI7SUFwQnZCLGFBQWE7UUFMekIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsdUNBQW9DO1lBQ3BDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO1NBQ2hELENBQUM7T0FDVyxhQUFhLENBbUV6QjtJQUFELG9CQUFDO0NBQUEsQUFuRUQsSUFtRUM7U0FuRVksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEV2ZW50RW1pdHRlcixcbiAgSG9zdEJpbmRpbmcsXG4gIElucHV0LFxuICBPbkRlc3Ryb3ksXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3BsaXRWaWV3U2VydmljZSB9IGZyb20gJy4uL3NwbGl0LXZpZXcuc2VydmljZSc7XG5cbi8qKlxuICogVGhlIHZpZXcgY29tcG9uZW50IGlzIHBhcnQgb2YgdGhlIGBTcGxpdFZpZXdDb21wb25lbnRgLiBUaGUgdmlld1xuICogY29udGFpbnMgdGhlIG5hdmlnYWJsZSBjb250ZW50IHRoYXQgc2hvdWxkIGJlIHNwbGl0IHVwLiBJdCBtYWludGFpbnNcbiAqIGEgdmlldyBwb3NpdGlvbiBhbmQgYWxsb3dzIHRvIHNob3cgb3IgaGlkZSB0aGUgdmlldy5cbiAqXG4gKiBUaGUgVmlld0NvbXBvbmVudCBpbnRlcmFjdHMgd2l0aCB0aGUgYFNwbGl0Vmlld1NlcnZpY2VgIGZvciBoYW5kaW5nIG92ZXIgdGhlXG4gKiB2aWV3IHN0YXRlLCBzbyB0aGF0IHRoZSBvdmVyYXJjaGluZyBgU3BsaXRWaWV3Q29tcG9uZW50YCBjYW4gbWFuYWdlIHRoZVxuICogb3ZlcmFsbCBleHBlcmllbmNlLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC12aWV3JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3ZpZXcuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgVmlld0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgQElucHV0KClcbiAgQEhvc3RCaW5kaW5nKCdhdHRyLnBvc2l0aW9uJylcbiAgcG9zaXRpb246IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIGhpZGRlbiBpbnB1dCBpcyB1c2VkIHRvIHNldCB0aGUgaW5pdGlhbCB2aXNpYmxlIHN0YXRlIG9mIHRoZSB2aWV3LlxuICAgKiBUaGUgaGlkZGVuIHN0YXRlIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgKlxuICAgKiBUaGUgaGlkZGVuIGlucHV0IHN1cHBvcnRzIDItd2F5IGJpbmRpbmcsIHNlZSBgaGlkZGVuQ2hhbmdlYCBwcm9wZXJ0eS5cbiAgICovXG4gIEBJbnB1dCgpXG4gIHNldCBoaWRkZW4oaGlkZGVuOiBib29sZWFuKSB7XG4gICAgdGhpcy5zcGxpdFNlcnZpY2UudG9nZ2xlKHRoaXMudmlld1Bvc2l0aW9uLCBoaWRkZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuIHVwZGF0ZSBvZiB0aGUgdmlldyB2aXNpYmlsaXR5IGlzIGVtaXR0ZWQgdG8gdGhlIGhpZGRlbkNoYW5nZSBvdXRwdXQuXG4gICAqL1xuICBAT3V0cHV0KClcbiAgaGlkZGVuQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHByb3RlY3RlZCBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgc3BsaXRTZXJ2aWNlOiBTcGxpdFZpZXdTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc3BsaXRTZXJ2aWNlLmFkZCh0aGlzLnZpZXdQb3NpdGlvbiwgdGhpcy5oaWRkZW4pO1xuXG4gICAgdGhpcy5zdWJzY3JpcHRpb24gPSB0aGlzLnNwbGl0U2VydmljZVxuICAgICAgLnZpc2libGVWaWV3Q291bnQoKVxuICAgICAgLnN1YnNjcmliZSgodmlzaWJsZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5oaWRkZW4gIT09IHRoaXMudmlld1Bvc2l0aW9uID49IHZpc2libGUpIHtcbiAgICAgICAgICB0aGlzLmhpZGRlbkNoYW5nZS5lbWl0KHRoaXMudmlld1Bvc2l0aW9uID49IHZpc2libGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB2aWV3LlxuICAgKlxuICAgKiBBbiBvcHRpb25hbCBmb3JjZSBmbGFnIGNhbiBiZSB1c2VkIHRvIGV4cGxpY2l0bHkgc2hvdyBvciBoaWRlIHZpZXcgY29tcG9uZW50LlxuICAgKi9cbiAgdG9nZ2xlKGZvcmNlPzogYm9vbGVhbikge1xuICAgIHRoaXMuc3BsaXRTZXJ2aWNlLnRvZ2dsZSh0aGlzLnZpZXdQb3NpdGlvbiwgZm9yY2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBvc2l0aW9uIGZvciB0aGUgdmlldy5cbiAgICpcbiAgICogVGhlIHBvc2l0aW9uIGlzIGVpdGhlciB0YWtlbiBmcm9tIHRoZSBpbnB1dCBgcG9zaXRpb25gIG9yIGdlbmVyYXRlZCBieSB0aGUgYFNwbGl0U2VydmljZWAuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHZpZXdQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMucG9zaXRpb24gPSB0aGlzLnNwbGl0U2VydmljZS5nZW5lcmF0ZU5leHRQb3NpdGlvbigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5wb3NpdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgdmlldyBpcyByZW1vdmVkIGZyb20gdGhlIGBTcGxpdFNlcnZpY2VgIHNvIHRoYXQgdGhlIHZpZXcgbm8gbG9uZ2VyXG4gICAqIHBsYXlzIGEgcm9sZSBpbiB0aGUgb3ZlcmFsbCBzcGxpdCB2aWV3LlxuICAgKi9cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5zcGxpdFNlcnZpY2UucmVtb3ZlKHRoaXMudmlld1Bvc2l0aW9uKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvbj8udW5zdWJzY3JpYmUoKTtcbiAgfVxufVxuIl19