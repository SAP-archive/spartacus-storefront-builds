import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
import * as i0 from "@angular/core";
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
    SplitViewService.ɵprov = i0.ɵɵdefineInjectable({ factory: function SplitViewService_Factory() { return new SplitViewService(); }, token: SplitViewService, providedIn: "root" });
    SplitViewService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], SplitViewService);
    return SplitViewService;
}());
export { SplitViewService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3BsaXQtdmlldy9zcGxpdC12aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOztBQUduRTs7O0dBR0c7QUFJSDtJQUFBO1FBQ1ksWUFBTyxHQUEyQixJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztLQW1FckU7SUFqRUM7O09BRUc7SUFDSCwyQ0FBZ0IsR0FBaEI7UUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUN0QixHQUFHLENBQUMsVUFBQyxLQUFLO1lBQ1IsSUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxVQUFDLElBQWUsSUFBSyxPQUFBLElBQUksQ0FBQyxNQUFNLEVBQVgsQ0FBVyxDQUFDLENBQUM7WUFDakUsT0FBTyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUMvQyxDQUFDLENBQUMsRUFDRixNQUFNLENBQUMsVUFBQyxPQUFPLElBQUssT0FBQSxPQUFPLEdBQUcsQ0FBQyxFQUFYLENBQVcsQ0FBQyxFQUNoQyxvQkFBb0IsRUFBRSxDQUN2QixDQUFDO0lBQ0osQ0FBQztJQUVEOzs7T0FHRztJQUNILDhCQUFHLEdBQUgsVUFBSSxZQUFvQixFQUFFLElBQVk7UUFBWixxQkFBQSxFQUFBLFlBQVk7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQ0FBTSxHQUFOLFVBQU8sWUFBb0I7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILGlDQUFNLEdBQU4sVUFBTyxZQUFvQixFQUFFLEtBQWU7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksS0FBSyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUM3QixLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzVDLHFFQUFxRTtZQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxLQUFLO3FCQUNQLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO3FCQUN2QixHQUFHLENBQUMsVUFBQyxTQUFTLElBQUssT0FBQSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEVBQXpCLENBQXlCLENBQUMsQ0FBQzthQUNsRDtZQUNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILCtDQUFvQixHQUFwQjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQUtELHNCQUFjLG1DQUFLO1FBSG5COztXQUVHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO1FBQzVCLENBQUM7OztPQUFBOztJQW5FVSxnQkFBZ0I7UUFINUIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLGdCQUFnQixDQW9FNUI7MkJBaEZEO0NBZ0ZDLEFBcEVELElBb0VDO1NBcEVZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgVmlld1N0YXRlIH0gZnJvbSAnLi9zcGxpdC9zcGxpdC12aWV3Lm1vZGVsJztcblxuLyoqXG4gKiBTdXBwb3NlZCB0byBiZSBpbmplY3RlZCBpbiB0aGUgc3BsaXQgdmlldyBjb21wb25lbnQsIHNvIHRoYXQgdGhlIHZpZXcgc3RhdGVcbiAqIGlzIG1haW50YWluZWQgaW4gdGhlIGNvbnRleHQgb2YgYSBzaW5nbGUgc3BsaXQgdmlldy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIFNwbGl0Vmlld1NlcnZpY2Uge1xuICBwcm90ZWN0ZWQgX3ZpZXdzJDogQmVoYXZpb3JTdWJqZWN0PGFueVtdPiA9IG5ldyBCZWhhdmlvclN1YmplY3QoW10pO1xuXG4gIC8qKlxuICAgKiBSZXNvbHZlcyB0aGUgbWF4IG51bWJlciBvZiB2aXNpYmxlIHZpZXdzIGZvciB0aGUgc3BsaXQgdmlldy5cbiAgICovXG4gIHZpc2libGVWaWV3Q291bnQoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fdmlld3MkLnBpcGUoXG4gICAgICBtYXAoKHZpZXdzKSA9PiB7XG4gICAgICAgIGNvbnN0IGhpZGRlbiA9IHZpZXdzLmZpbmRJbmRleCgodmlldzogVmlld1N0YXRlKSA9PiB2aWV3LmhpZGRlbik7XG4gICAgICAgIHJldHVybiBoaWRkZW4gPT09IC0xID8gdmlld3MubGVuZ3RoIDogaGlkZGVuO1xuICAgICAgfSksXG4gICAgICBmaWx0ZXIoKHZpc2libGUpID0+IHZpc2libGUgPiAwKSxcbiAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB2aWV3IHRvIHRoZSBsaXN0IG9mIHZpZXdzLiBUaGUgdmlldyBpcyBpbml0aWFsaXplZCB3aXRoIHRoZVxuICAgKiBoaWRlIHN0YXRlLCB3aGljaCBkZWZhdWx0cyB0byBmYWxzZS5cbiAgICovXG4gIGFkZCh2aWV3UG9zaXRpb246IG51bWJlciwgaGlkZSA9IGZhbHNlKSB7XG4gICAgaWYgKCF0aGlzLnZpZXdzW3ZpZXdQb3NpdGlvbl0pIHtcbiAgICAgIHRoaXMudmlld3Nbdmlld1Bvc2l0aW9uXSA9IHsgaGlkZGVuOiBoaWRlIH07XG4gICAgICB0aGlzLl92aWV3cyQubmV4dCh0aGlzLnZpZXdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmVtb3ZlcyBhIHZpZXcgZnJvbSB0aGUgbGlzdCBvZiB2aWV3cy5cbiAgICovXG4gIHJlbW92ZSh2aWV3UG9zaXRpb246IG51bWJlcikge1xuICAgIHRoaXMuX3ZpZXdzJC5uZXh0KHRoaXMudmlld3Muc3BsaWNlKDAsIHZpZXdQb3NpdGlvbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIHZpc2libGUgc3RhdGUgZm9yIHRoZSBnaXZlbiB2aWV3LiBBbiBvcHRpb25hbFxuICAgKiBmb3JjZSBhcmd1bWVudCBjYW4gYmUgdXNlZCB0byBkaWN0YXRlIHRoZSB2aXNpYmlsaXR5LlxuICAgKi9cbiAgdG9nZ2xlKHZpZXdQb3NpdGlvbjogbnVtYmVyLCBmb3JjZT86IGJvb2xlYW4pIHtcbiAgICBpZiAoIXRoaXMudmlld3Nbdmlld1Bvc2l0aW9uXSkge1xuICAgICAgdGhpcy5hZGQodmlld1Bvc2l0aW9uLCBmb3JjZSA/PyBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld3Nbdmlld1Bvc2l0aW9uXS5oaWRkZW4gPVxuICAgICAgICBmb3JjZSA/PyAhdGhpcy52aWV3c1t2aWV3UG9zaXRpb25dLmhpZGRlbjtcbiAgICAgIC8vIFdoZW5ldmVyIGEgdmlldyBpcyBjbG9zaW5nLCB3ZSBjbG9zZSBhbGwgdW5kZXJseWluZyB2aWV3cyBhcyB3ZWxsLlxuICAgICAgaWYgKCF0aGlzLnZpZXdzW3ZpZXdQb3NpdGlvbl0uaGlkZGVuKSB7XG4gICAgICAgIHRoaXMudmlld3NcbiAgICAgICAgICAuc2xpY2Uodmlld1Bvc2l0aW9uICsgMSlcbiAgICAgICAgICAubWFwKCh2aWV3U3RhdGUpID0+ICh2aWV3U3RhdGUuaGlkZGVuID0gdHJ1ZSkpO1xuICAgICAgfVxuICAgICAgdGhpcy5fdmlld3MkLm5leHQodGhpcy52aWV3cyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5leHQgdmlldyBudW1iZXIsIHRoYXQgY2FuIGJlIHVzZWQgYnkgdmlld3MgdG8gcmVnaXN0ZXIgaXRzZWxmLlxuICAgKi9cbiAgZ2VuZXJhdGVOZXh0UG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy52aWV3cy5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl0eSBtZXRob2QgdGhhdCByZXNvbHZlcyBhbGwgdmlld3MuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHZpZXdzKCk6IFZpZXdTdGF0ZVtdIHtcbiAgICByZXR1cm4gdGhpcy5fdmlld3MkLnZhbHVlO1xuICB9XG59XG4iXX0=