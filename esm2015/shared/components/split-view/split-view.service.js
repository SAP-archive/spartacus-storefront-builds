import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
/**
 * Supposed to be injected in the split view component, so that the view state
 * is maintained in the context of a single split view.
 */
let SplitViewService = class SplitViewService {
    constructor() {
        this._views$ = new BehaviorSubject([]);
    }
    /**
     * Resolves the max number of visible views for the split view.
     */
    visibleViewCount() {
        return this._views$.pipe(map((views) => {
            const hidden = views.findIndex((view) => view.hidden);
            return hidden === -1 ? views.length : hidden;
        }), filter((visible) => visible > 0), distinctUntilChanged());
    }
    /**
     * Adds a view to the list of views. The view is initialized with the
     * hide state, which defaults to false.
     */
    add(viewPosition, hide = false) {
        if (!this.views[viewPosition]) {
            this.views[viewPosition] = { hidden: hide };
            this._views$.next(this.views);
        }
    }
    /**
     * Removes a view from the list of views.
     */
    remove(viewPosition) {
        this._views$.next(this.views.splice(0, viewPosition));
    }
    /**
     * Toggles the visible state for the given view. An optional
     * force argument can be used to dictate the visibility.
     */
    toggle(viewPosition, force) {
        if (!this.views[viewPosition]) {
            this.add(viewPosition, force !== null && force !== void 0 ? force : false);
        }
        else {
            this.views[viewPosition].hidden = force !== null && force !== void 0 ? force : !this.views[viewPosition].hidden;
            // Whenever a view is closing, we close all underlying views as well.
            if (!this.views[viewPosition].hidden) {
                this.views
                    .slice(viewPosition + 1)
                    .map((viewState) => (viewState.hidden = true));
            }
            this._views$.next(this.views);
        }
    }
    /**
     * Returns the next view number, that can be used by views to register itself.
     */
    generateNextPosition() {
        return this.views.length;
    }
    /**
     * Utility method that resolves all views.
     */
    get views() {
        return this._views$.value;
    }
};
SplitViewService = __decorate([
    Injectable()
], SplitViewService);
export { SplitViewService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3BsaXQtdmlldy9zcGxpdC12aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25FOzs7R0FHRztBQUVILElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQTdCO1FBQ1ksWUFBTyxHQUEyQixJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQW1FdEUsQ0FBQztJQWpFQzs7T0FFRztJQUNILGdCQUFnQjtRQUNkLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQ3RCLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQ1osTUFBTSxNQUFNLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQWUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pFLE9BQU8sTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDL0MsQ0FBQyxDQUFDLEVBQ0YsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQ2hDLG9CQUFvQixFQUFFLENBQ3ZCLENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsR0FBRyxDQUFDLFlBQW9CLEVBQUUsSUFBSSxHQUFHLEtBQUs7UUFDcEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQztZQUM1QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDL0I7SUFDSCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxNQUFNLENBQUMsWUFBb0I7UUFDekIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVEOzs7T0FHRztJQUNILE1BQU0sQ0FBQyxZQUFvQixFQUFFLEtBQWU7UUFDMUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLEVBQUU7WUFDN0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsS0FBSyxhQUFMLEtBQUssY0FBTCxLQUFLLEdBQUksS0FBSyxDQUFDLENBQUM7U0FDeEM7YUFBTTtZQUNMLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUM3QixLQUFLLGFBQUwsS0FBSyxjQUFMLEtBQUssR0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDO1lBQzVDLHFFQUFxRTtZQUNyRSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3BDLElBQUksQ0FBQyxLQUFLO3FCQUNQLEtBQUssQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO3FCQUN2QixHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsb0JBQW9CO1FBQ2xCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDM0IsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBYyxLQUFLO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7SUFDNUIsQ0FBQztDQUNGLENBQUE7QUFwRVksZ0JBQWdCO0lBRDVCLFVBQVUsRUFBRTtHQUNBLGdCQUFnQixDQW9FNUI7U0FwRVksZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBWaWV3U3RhdGUgfSBmcm9tICcuL3NwbGl0L3NwbGl0LXZpZXcubW9kZWwnO1xuXG4vKipcbiAqIFN1cHBvc2VkIHRvIGJlIGluamVjdGVkIGluIHRoZSBzcGxpdCB2aWV3IGNvbXBvbmVudCwgc28gdGhhdCB0aGUgdmlldyBzdGF0ZVxuICogaXMgbWFpbnRhaW5lZCBpbiB0aGUgY29udGV4dCBvZiBhIHNpbmdsZSBzcGxpdCB2aWV3LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3BsaXRWaWV3U2VydmljZSB7XG4gIHByb3RlY3RlZCBfdmlld3MkOiBCZWhhdmlvclN1YmplY3Q8YW55W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cbiAgLyoqXG4gICAqIFJlc29sdmVzIHRoZSBtYXggbnVtYmVyIG9mIHZpc2libGUgdmlld3MgZm9yIHRoZSBzcGxpdCB2aWV3LlxuICAgKi9cbiAgdmlzaWJsZVZpZXdDb3VudCgpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl92aWV3cyQucGlwZShcbiAgICAgIG1hcCgodmlld3MpID0+IHtcbiAgICAgICAgY29uc3QgaGlkZGVuID0gdmlld3MuZmluZEluZGV4KCh2aWV3OiBWaWV3U3RhdGUpID0+IHZpZXcuaGlkZGVuKTtcbiAgICAgICAgcmV0dXJuIGhpZGRlbiA9PT0gLTEgPyB2aWV3cy5sZW5ndGggOiBoaWRkZW47XG4gICAgICB9KSxcbiAgICAgIGZpbHRlcigodmlzaWJsZSkgPT4gdmlzaWJsZSA+IDApLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhIHZpZXcgdG8gdGhlIGxpc3Qgb2Ygdmlld3MuIFRoZSB2aWV3IGlzIGluaXRpYWxpemVkIHdpdGggdGhlXG4gICAqIGhpZGUgc3RhdGUsIHdoaWNoIGRlZmF1bHRzIHRvIGZhbHNlLlxuICAgKi9cbiAgYWRkKHZpZXdQb3NpdGlvbjogbnVtYmVyLCBoaWRlID0gZmFsc2UpIHtcbiAgICBpZiAoIXRoaXMudmlld3Nbdmlld1Bvc2l0aW9uXSkge1xuICAgICAgdGhpcy52aWV3c1t2aWV3UG9zaXRpb25dID0geyBoaWRkZW46IGhpZGUgfTtcbiAgICAgIHRoaXMuX3ZpZXdzJC5uZXh0KHRoaXMudmlld3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgdmlldyBmcm9tIHRoZSBsaXN0IG9mIHZpZXdzLlxuICAgKi9cbiAgcmVtb3ZlKHZpZXdQb3NpdGlvbjogbnVtYmVyKSB7XG4gICAgdGhpcy5fdmlld3MkLm5leHQodGhpcy52aWV3cy5zcGxpY2UoMCwgdmlld1Bvc2l0aW9uKSk7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgdmlzaWJsZSBzdGF0ZSBmb3IgdGhlIGdpdmVuIHZpZXcuIEFuIG9wdGlvbmFsXG4gICAqIGZvcmNlIGFyZ3VtZW50IGNhbiBiZSB1c2VkIHRvIGRpY3RhdGUgdGhlIHZpc2liaWxpdHkuXG4gICAqL1xuICB0b2dnbGUodmlld1Bvc2l0aW9uOiBudW1iZXIsIGZvcmNlPzogYm9vbGVhbikge1xuICAgIGlmICghdGhpcy52aWV3c1t2aWV3UG9zaXRpb25dKSB7XG4gICAgICB0aGlzLmFkZCh2aWV3UG9zaXRpb24sIGZvcmNlID8/IGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWV3c1t2aWV3UG9zaXRpb25dLmhpZGRlbiA9XG4gICAgICAgIGZvcmNlID8/ICF0aGlzLnZpZXdzW3ZpZXdQb3NpdGlvbl0uaGlkZGVuO1xuICAgICAgLy8gV2hlbmV2ZXIgYSB2aWV3IGlzIGNsb3NpbmcsIHdlIGNsb3NlIGFsbCB1bmRlcmx5aW5nIHZpZXdzIGFzIHdlbGwuXG4gICAgICBpZiAoIXRoaXMudmlld3Nbdmlld1Bvc2l0aW9uXS5oaWRkZW4pIHtcbiAgICAgICAgdGhpcy52aWV3c1xuICAgICAgICAgIC5zbGljZSh2aWV3UG9zaXRpb24gKyAxKVxuICAgICAgICAgIC5tYXAoKHZpZXdTdGF0ZSkgPT4gKHZpZXdTdGF0ZS5oaWRkZW4gPSB0cnVlKSk7XG4gICAgICB9XG4gICAgICB0aGlzLl92aWV3cyQubmV4dCh0aGlzLnZpZXdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmV4dCB2aWV3IG51bWJlciwgdGhhdCBjYW4gYmUgdXNlZCBieSB2aWV3cyB0byByZWdpc3RlciBpdHNlbGYuXG4gICAqL1xuICBnZW5lcmF0ZU5leHRQb3NpdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLnZpZXdzLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IG1ldGhvZCB0aGF0IHJlc29sdmVzIGFsbCB2aWV3cy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgdmlld3MoKTogVmlld1N0YXRlW10ge1xuICAgIHJldHVybiB0aGlzLl92aWV3cyQudmFsdWU7XG4gIH1cbn1cbiJdfQ==