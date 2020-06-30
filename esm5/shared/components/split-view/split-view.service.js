import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
/**
 * Supposed to be injected in the split view component, so that the view state
 * is maintained in the context of a single split view.
 */
var SplitViewService = /** @class */ (function () {
    function SplitViewService() {
        this._views$ = new BehaviorSubject([]);
    }
    /**
     * Resolves the max number of visible views for the split view.
     */
    SplitViewService.prototype.visibleViewCount = function () {
        return this._views$.pipe(map(function (views) {
            var hidden = views.findIndex(function (view) { return view.hidden; });
            return hidden === -1 ? views.length : hidden;
        }), filter(function (visible) { return visible > 0; }), distinctUntilChanged());
    };
    /**
     * Adds a view to the list of views. The view is initialized with the
     * hide state, which defaults to false.
     */
    SplitViewService.prototype.add = function (viewPosition, hide) {
        if (hide === void 0) { hide = false; }
        if (!this.views[viewPosition]) {
            this.views[viewPosition] = { hidden: hide };
            this._views$.next(this.views);
        }
    };
    /**
     * Removes a view from the list of views.
     */
    SplitViewService.prototype.remove = function (viewPosition) {
        this._views$.next(this.views.splice(0, viewPosition));
    };
    /**
     * Toggles the visible state for the given view. An optional
     * force argument can be used to dictate the visibility.
     */
    SplitViewService.prototype.toggle = function (viewPosition, force) {
        if (!this.views[viewPosition]) {
            this.add(viewPosition, force !== null && force !== void 0 ? force : false);
        }
        else {
            this.views[viewPosition].hidden = force !== null && force !== void 0 ? force : !this.views[viewPosition].hidden;
            // Whenever a view is closing, we close all underlying views as well.
            if (!this.views[viewPosition].hidden) {
                this.views
                    .slice(viewPosition + 1)
                    .map(function (viewState) { return (viewState.hidden = true); });
            }
            this._views$.next(this.views);
        }
    };
    /**
     * Returns the next view number, that can be used by views to register itself.
     */
    SplitViewService.prototype.generateNextPosition = function () {
        return this.views.length;
    };
    Object.defineProperty(SplitViewService.prototype, "views", {
        /**
         * Utility method that resolves all views.
         */
        get: function () {
            return this._views$.value;
        },
        enumerable: true,
        configurable: true
    });
    SplitViewService = __decorate([
        Injectable()
    ], SplitViewService);
    return SplitViewService;
}());
export { SplitViewService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3BsaXQtdmlldy9zcGxpdC12aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25FOzs7R0FHRztBQUVIO0lBQUE7UUFDWSxZQUFPLEdBQTJCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBbUV0RSxDQUFDO0lBakVDOztPQUVHO0lBQ0gsMkNBQWdCLEdBQWhCO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FDdEIsR0FBRyxDQUFDLFVBQUMsS0FBSztZQUNSLElBQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFlLElBQUssT0FBQSxJQUFJLENBQUMsTUFBTSxFQUFYLENBQVcsQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDL0MsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLFVBQUMsT0FBTyxJQUFLLE9BQUEsT0FBTyxHQUFHLENBQUMsRUFBWCxDQUFXLENBQUMsRUFDaEMsb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7SUFFRDs7O09BR0c7SUFDSCw4QkFBRyxHQUFILFVBQUksWUFBb0IsRUFBRSxJQUFZO1FBQVoscUJBQUEsRUFBQSxZQUFZO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLENBQUM7WUFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsaUNBQU0sR0FBTixVQUFPLFlBQW9CO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3hELENBQUM7SUFFRDs7O09BR0c7SUFDSCxpQ0FBTSxHQUFOLFVBQU8sWUFBb0IsRUFBRSxLQUFlO1FBQzFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLEtBQUssYUFBTCxLQUFLLGNBQUwsS0FBSyxHQUFJLEtBQUssQ0FBQyxDQUFDO1NBQ3hDO2FBQU07WUFDTCxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FDN0IsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sQ0FBQztZQUM1QyxxRUFBcUU7WUFDckUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxFQUFFO2dCQUNwQyxJQUFJLENBQUMsS0FBSztxQkFDUCxLQUFLLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztxQkFDdkIsR0FBRyxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxFQUF6QixDQUF5QixDQUFDLENBQUM7YUFDbEQ7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCwrQ0FBb0IsR0FBcEI7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzNCLENBQUM7SUFLRCxzQkFBYyxtQ0FBSztRQUhuQjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQW5FVSxnQkFBZ0I7UUFENUIsVUFBVSxFQUFFO09BQ0EsZ0JBQWdCLENBb0U1QjtJQUFELHVCQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0FwRVksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBWaWV3U3RhdGUgfSBmcm9tICcuL3NwbGl0L3NwbGl0LXZpZXcubW9kZWwnO1xuXG4vKipcbiAqIFN1cHBvc2VkIHRvIGJlIGluamVjdGVkIGluIHRoZSBzcGxpdCB2aWV3IGNvbXBvbmVudCwgc28gdGhhdCB0aGUgdmlldyBzdGF0ZVxuICogaXMgbWFpbnRhaW5lZCBpbiB0aGUgY29udGV4dCBvZiBhIHNpbmdsZSBzcGxpdCB2aWV3LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3BsaXRWaWV3U2VydmljZSB7XG4gIHByb3RlY3RlZCBfdmlld3MkOiBCZWhhdmlvclN1YmplY3Q8YW55W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBtYXggbnVtYmVyIG9mIHZpc2libGUgdmlld3MgZm9yIHRoZSBzcGxpdCB2aWV3LlxuICAgKi9cbiAgdmlzaWJsZVZpZXdDb3VudCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl92aWV3cyQucGlwZShcbiAgICAgIG1hcCgodmlld3MpID0+IHtcbiAgICAgICAgY29uc3QgaGlkZGVuID0gdmlld3MuZmluZEluZGV4KCh2aWV3OiBWaWV3U3RhdGUpID0+IHZpZXcuaGlkZGVuKTtcbiAgICAgICAgcmV0dXJuIGhpZGRlbiA9PT0gLTEgPyB2aWV3cy5sZW5ndGggOiBoaWRkZW47XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigodmlzaWJsZSkgPT4gdmlzaWJsZSA+IDApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZpZXcgdG8gdGhlIGxpc3Qgb2Ygdmlld3MuIFRoZSB2aWV3IGlzIGluaXRpYWxpemVkIHdpdGggdGhlXG4gICAqIGhpZGUgc3RhdGUsIHdoaWNoIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgYWRkKHZpZXdQb3NpdGlvbjogbnVtYmVyLCBoaWRlID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMudmlld3Nbdmlld1Bvc2l0aW9uXSkge1xuICAgICAgdGhpcy52aWV3c1t2aWV3UG9zaXRpb25dID0geyBoaWRkZW46IGhpZGUgfTtcbiAgICAgIHRoaXMuX3ZpZXdzJC5uZXh0KHRoaXMudmlld3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgdmlldyBmcm9tIHRoZSBsaXN0IG9mIHZpZXdzLlxuICAgKi9cbiAgcmVtb3ZlKHZpZXdQb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmlld3MkLm5leHQodGhpcy52aWV3cy5zcGxpY2UoMCwgdmlld1Bvc2l0aW9uKSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgdmlzaWJsZSBzdGF0ZSBmb3IgdGhlIGdpdmVuIHZpZXcuIEFuIG9wdGlvbmFsXG4gICAqIGZvcmNlIGFyZ3VtZW50IGNhbiBiZSB1c2VkIHRvIGRpY3RhdGUgdGhlIHZpc2liaWxpdHkuXG4gICAqL1xuICB0b2dnbGUodmlld1Bvc2l0aW9uOiBudW1iZXIsIGZvcmNlPzogYm9vbGVhbikge1xuICAgIGlmICghdGhpcy52aWV3c1t2aWV3UG9zaXRpb25dKSB7XG4gICAgICB0aGlzLmFkZCh2aWV3UG9zaXRpb24sIGZvcmNlID8/IGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWV3c1t2aWV3UG9zaXRpb25dLmhpZGRlbiA9XG4gICAgICAgIGZvcmNlID8/ICF0aGlzLnZpZXdzW3ZpZXdQb3NpdGlvbl0uaGlkZGVuO1xuICAgICAgLy8gV2hlbmV2ZXIgYSB2aWV3IGlzIGNsb3NpbmcsIHdlIGNsb3NlIGFsbCB1bmRlcmx5aW5nIHZpZXdzIGFzIHdlbGwuXG4gICAgICBpZiAoIXRoaXMudmlld3Nbdmlld1Bvc2l0aW9uXS5oaWRkZW4pIHtcbiAgICAgICAgdGhpcy52aWV3c1xuICAgICAgICAgIC5zbGljZSh2aWV3UG9zaXRpb24gKyAxKVxuICAgICAgICAgIC5tYXAoKHZpZXdTdGF0ZSkgPT4gKHZpZXdTdGF0ZS5oaWRkZW4gPSB0cnVlKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl92aWV3cyQubmV4dCh0aGlzLnZpZXdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmV4dCB2aWV3IG51bWJlciwgdGhhdCBjYW4gYmUgdXNlZCBieSB2aWV3cyB0byByZWdpc3RlciBpdHNlbGYuXG4gICAqL1xuICBnZW5lcmF0ZU5leHRQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnZpZXdzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IG1ldGhvZCB0aGF0IHJlc29sdmVzIGFsbCB2aWV3cy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgdmlld3MoKTogVmlld1N0YXRlW10ge1xuICAgIHJldHVybiB0aGlzLl92aWV3cyQudmFsdWU7XG4gIH1cbn1cbiJdfQ==