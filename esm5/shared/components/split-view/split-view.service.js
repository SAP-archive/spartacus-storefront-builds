import { __assign, __decorate, __read, __spread } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
/**
 * Supposed to be injected in the split view component, so that the split view state
 * is maintained for a single split view.
 */
var SplitViewService = /** @class */ (function () {
    function SplitViewService() {
        /**
         * Newly added views are hidden by default, unless it is the first view of the split view.
         * The default hide mode can be overridden.
         */
        this.defaultHideMode = true;
        this._splitViewCount = 2;
        this._views$ = new BehaviorSubject([]);
    }
    /**
     * Adds a view to the list of views. The view is initialized with the `SplitViewState`
     * state. If no state is provided, the state is created with the hidden property. The hidden
     * property is provided by the `defaultHideMode`, unless it's the first view (position: 0).
     */
    SplitViewService.prototype.add = function (position, initialState) {
        if (!this.views[position]) {
            this.views[position] = __assign({ hidden: position === 0 ? false : this.defaultHideMode }, initialState);
            this._views$.next(this.views);
        }
    };
    /**
     * Returns an observable with the active view number. The active view number
     * represents the last visible view.
     */
    SplitViewService.prototype.getActiveView = function () {
        var _this = this;
        return this._views$.pipe(map(function (views) { return _this.getActive(views); }), distinctUntilChanged());
    };
    /**
     * Returns an observable with the SplitViewState for the given view position.
     */
    SplitViewService.prototype.getViewState = function (position) {
        return this._views$.pipe(map(function (views) { return views[position]; }), 
        // we must filter here, since outlet driven views will destroyed the view
        filter(function (view) { return Boolean(view); }));
    };
    /**
     * Removes a view from the list of views.
     *
     * Removing a view is different from hiding a view. Removing a view is typically done
     * when a component is destroyed.
     *
     * When the view is removed, the SplitViewState is updated to reflect that new organization
     * of views.
     */
    SplitViewService.prototype.remove = function (position) {
        var activePosition = this.getActive(this.views);
        this._views$.next(this.views.splice(0, position));
        if (activePosition >= position) {
            this.updateState(position - 1);
        }
    };
    Object.defineProperty(SplitViewService.prototype, "nextPosition", {
        /**
         * Returns the next view position. This is useful for views that do not want to be bothered
         * with controlling view numbers.
         */
        get: function () {
            return this.views.length || 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Toggles the visibility of the views based on the given view position. If the view
     * is already visible, we close the view and active the former view. Unless the hide flag
     * is used, to force the view.
     *
     * The view state of other views in the split view are updated as well.
     *
     * @param position The zero-based position number of the view.
     * @param forceHide The (optional) hide state for the view position.
     */
    SplitViewService.prototype.toggle = function (position, forceHide) {
        // add the view if it hasn't been added before.
        if (!this.views[position]) {
            this.add(position, { hidden: forceHide !== null && forceHide !== void 0 ? forceHide : false });
        }
        // If the position is already visible, we move to a previous position. Only if the hide
        // state is forced, we keep the current position.
        if (this.views[position] &&
            forceHide === undefined &&
            !this.views[position].hidden) {
            position--;
        }
        this.updateState(position, forceHide);
    };
    SplitViewService.prototype.updateState = function (position, hide) {
        var views = __spread(this.views);
        var split = this._splitViewCount - 1;
        // toggle the hidden state per view, based on the next position and number of views per split view
        views.forEach(function (view, pos) {
            if (pos === position) {
                view.hidden = hide !== null && hide !== void 0 ? hide : !(pos >= position - split && pos <= position);
            }
            else {
                view.hidden = !(pos >= position - split && pos <= position);
            }
        });
        this._views$.next(views);
    };
    /**
     * Returns the active view count for the list of views.
     */
    SplitViewService.prototype.getActive = function (views) {
        // we reverse the list to find the last visible view
        var l = __spread(views).reverse()
            .findIndex(function (view) { return !view.hidden; });
        var last = l === -1 ? 0 : views.length - l - 1;
        return last;
    };
    Object.defineProperty(SplitViewService.prototype, "splitViewCount", {
        /**
         * Sets the view count for the split view.
         *
         * Defaults to 2.
         */
        set: function (count) {
            this._splitViewCount = count;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SplitViewService.prototype, "views", {
        /**
         * Utility method that resolves all views from the subject.
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3BsaXQtdmlldy9zcGxpdC12aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25FOzs7R0FHRztBQUVIO0lBQUE7UUFDRTs7O1dBR0c7UUFDSCxvQkFBZSxHQUFHLElBQUksQ0FBQztRQUViLG9CQUFlLEdBQUcsQ0FBQyxDQUFDO1FBRXBCLFlBQU8sR0FBMkIsSUFBSSxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7SUFzSXRFLENBQUM7SUFwSUM7Ozs7T0FJRztJQUNILDhCQUFHLEdBQUgsVUFBSSxRQUFnQixFQUFFLFlBQTZCO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQ2YsRUFBRSxNQUFNLEVBQUUsUUFBUSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLEVBQ3pELFlBQVksQ0FDaEIsQ0FBQztZQUNGLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFFRDs7O09BR0c7SUFDSCx3Q0FBYSxHQUFiO1FBQUEsaUJBS0M7UUFKQyxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUN0QixHQUFHLENBQUMsVUFBQyxLQUFLLElBQUss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RCxJQUFNLENBQUMsR0FBRyxTQUFJLEtBQUssRUFDaEIsT0FBTyxFQUFFO2FBQ1QsU0FBUyxDQUFDLFVBQUMsSUFBb0IsSUFBSyxPQUFBLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBWixDQUFZLENBQUMsQ0FBQztRQUNyRCxJQUFNLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQU9ELHNCQUFJLDRDQUFjO1FBTGxCOzs7O1dBSUc7YUFDSCxVQUFtQixLQUFhO1lBQzlCLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUM7OztPQUFBO0lBS0Qsc0JBQWMsbUNBQUs7UUFIbkI7O1dBRUc7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUE5SVUsZ0JBQWdCO1FBRDVCLFVBQVUsRUFBRTtPQUNBLGdCQUFnQixDQStJNUI7SUFBRCx1QkFBQztDQUFBLEFBL0lELElBK0lDO1NBL0lZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuaW1wb3J0IHsgU3BsaXRWaWV3U3RhdGUgfSBmcm9tICcuL3NwbGl0L3NwbGl0LXZpZXcubW9kZWwnO1xuXG4vKipcbiAqIFN1cHBvc2VkIHRvIGJlIGluamVjdGVkIGluIHRoZSBzcGxpdCB2aWV3IGNvbXBvbmVudCwgc28gdGhhdCB0aGUgc3BsaXQgdmlldyBzdGF0ZVxuICogaXMgbWFpbnRhaW5lZCBmb3IgYSBzaW5nbGUgc3BsaXQgdmlldy5cbiAqL1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNwbGl0Vmlld1NlcnZpY2Uge1xuICAvKipcbiAgICogTmV3bHkgYWRkZWQgdmlld3MgYXJlIGhpZGRlbiBieSBkZWZhdWx0LCB1bmxlc3MgaXQgaXMgdGhlIGZpcnN0IHZpZXcgb2YgdGhlIHNwbGl0IHZpZXcuXG4gICAqIFRoZSBkZWZhdWx0IGhpZGUgbW9kZSBjYW4gYmUgb3ZlcnJpZGRlbi5cbiAgICovXG4gIGRlZmF1bHRIaWRlTW9kZSA9IHRydWU7XG5cbiAgcHJvdGVjdGVkIF9zcGxpdFZpZXdDb3VudCA9IDI7XG5cbiAgcHJvdGVjdGVkIF92aWV3cyQ6IEJlaGF2aW9yU3ViamVjdDxhbnlbXT4gPSBuZXcgQmVoYXZpb3JTdWJqZWN0KFtdKTtcblxuICAvKipcbiAgICogQWRkcyBhIHZpZXcgdG8gdGhlIGxpc3Qgb2Ygdmlld3MuIFRoZSB2aWV3IGlzIGluaXRpYWxpemVkIHdpdGggdGhlIGBTcGxpdFZpZXdTdGF0ZWBcbiAgICogc3RhdGUuIElmIG5vIHN0YXRlIGlzIHByb3ZpZGVkLCB0aGUgc3RhdGUgaXMgY3JlYXRlZCB3aXRoIHRoZSBoaWRkZW4gcHJvcGVydHkuIFRoZSBoaWRkZW5cbiAgICogcHJvcGVydHkgaXMgcHJvdmlkZWQgYnkgdGhlIGBkZWZhdWx0SGlkZU1vZGVgLCB1bmxlc3MgaXQncyB0aGUgZmlyc3QgdmlldyAocG9zaXRpb246IDApLlxuICAgKi9cbiAgYWRkKHBvc2l0aW9uOiBudW1iZXIsIGluaXRpYWxTdGF0ZT86IFNwbGl0Vmlld1N0YXRlKSB7XG4gICAgaWYgKCF0aGlzLnZpZXdzW3Bvc2l0aW9uXSkge1xuICAgICAgdGhpcy52aWV3c1twb3NpdGlvbl0gPSB7XG4gICAgICAgIC4uLnsgaGlkZGVuOiBwb3NpdGlvbiA9PT0gMCA/IGZhbHNlIDogdGhpcy5kZWZhdWx0SGlkZU1vZGUgfSxcbiAgICAgICAgLi4uaW5pdGlhbFN0YXRlLFxuICAgICAgfTtcbiAgICAgIHRoaXMuX3ZpZXdzJC5uZXh0KHRoaXMudmlld3MpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgYWN0aXZlIHZpZXcgbnVtYmVyLiBUaGUgYWN0aXZlIHZpZXcgbnVtYmVyXG4gICAqIHJlcHJlc2VudHMgdGhlIGxhc3QgdmlzaWJsZSB2aWV3LlxuICAgKi9cbiAgZ2V0QWN0aXZlVmlldygpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLl92aWV3cyQucGlwZShcbiAgICAgIG1hcCgodmlld3MpID0+IHRoaXMuZ2V0QWN0aXZlKHZpZXdzKSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgU3BsaXRWaWV3U3RhdGUgZm9yIHRoZSBnaXZlbiB2aWV3IHBvc2l0aW9uLlxuICAgKi9cbiAgZ2V0Vmlld1N0YXRlKHBvc2l0aW9uOiBudW1iZXIpOiBPYnNlcnZhYmxlPFNwbGl0Vmlld1N0YXRlPiB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdzJC5waXBlKFxuICAgICAgbWFwKCh2aWV3cykgPT4gdmlld3NbcG9zaXRpb25dKSxcbiAgICAgIC8vIHdlIG11c3QgZmlsdGVyIGhlcmUsIHNpbmNlIG91dGxldCBkcml2ZW4gdmlld3Mgd2lsbCBkZXN0cm95ZWQgdGhlIHZpZXdcbiAgICAgIGZpbHRlcigodmlldykgPT4gQm9vbGVhbih2aWV3KSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSB2aWV3IGZyb20gdGhlIGxpc3Qgb2Ygdmlld3MuXG4gICAqXG4gICAqIFJlbW92aW5nIGEgdmlldyBpcyBkaWZmZXJlbnQgZnJvbSBoaWRpbmcgYSB2aWV3LiBSZW1vdmluZyBhIHZpZXcgaXMgdHlwaWNhbGx5IGRvbmVcbiAgICogd2hlbiBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gICAqXG4gICAqIFdoZW4gdGhlIHZpZXcgaXMgcmVtb3ZlZCwgdGhlIFNwbGl0Vmlld1N0YXRlIGlzIHVwZGF0ZWQgdG8gcmVmbGVjdCB0aGF0IG5ldyBvcmdhbml6YXRpb25cbiAgICogb2Ygdmlld3MuXG4gICAqL1xuICByZW1vdmUocG9zaXRpb246IG51bWJlcikge1xuICAgIGNvbnN0IGFjdGl2ZVBvc2l0aW9uID0gdGhpcy5nZXRBY3RpdmUodGhpcy52aWV3cyk7XG4gICAgdGhpcy5fdmlld3MkLm5leHQodGhpcy52aWV3cy5zcGxpY2UoMCwgcG9zaXRpb24pKTtcbiAgICBpZiAoYWN0aXZlUG9zaXRpb24gPj0gcG9zaXRpb24pIHtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUocG9zaXRpb24gLSAxKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmV4dCB2aWV3IHBvc2l0aW9uLiBUaGlzIGlzIHVzZWZ1bCBmb3Igdmlld3MgdGhhdCBkbyBub3Qgd2FudCB0byBiZSBib3RoZXJlZFxuICAgKiB3aXRoIGNvbnRyb2xsaW5nIHZpZXcgbnVtYmVycy5cbiAgICovXG4gIGdldCBuZXh0UG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy52aWV3cy5sZW5ndGggfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB2aWV3cyBiYXNlZCBvbiB0aGUgZ2l2ZW4gdmlldyBwb3NpdGlvbi4gSWYgdGhlIHZpZXdcbiAgICogaXMgYWxyZWFkeSB2aXNpYmxlLCB3ZSBjbG9zZSB0aGUgdmlldyBhbmQgYWN0aXZlIHRoZSBmb3JtZXIgdmlldy4gVW5sZXNzIHRoZSBoaWRlIGZsYWdcbiAgICogaXMgdXNlZCwgdG8gZm9yY2UgdGhlIHZpZXcuXG4gICAqXG4gICAqIFRoZSB2aWV3IHN0YXRlIG9mIG90aGVyIHZpZXdzIGluIHRoZSBzcGxpdCB2aWV3IGFyZSB1cGRhdGVkIGFzIHdlbGwuXG4gICAqXG4gICAqIEBwYXJhbSBwb3NpdGlvbiBUaGUgemVyby1iYXNlZCBwb3NpdGlvbiBudW1iZXIgb2YgdGhlIHZpZXcuXG4gICAqIEBwYXJhbSBmb3JjZUhpZGUgVGhlIChvcHRpb25hbCkgaGlkZSBzdGF0ZSBmb3IgdGhlIHZpZXcgcG9zaXRpb24uXG4gICAqL1xuICB0b2dnbGUocG9zaXRpb246IG51bWJlciwgZm9yY2VIaWRlPzogYm9vbGVhbikge1xuICAgIC8vIGFkZCB0aGUgdmlldyBpZiBpdCBoYXNuJ3QgYmVlbiBhZGRlZCBiZWZvcmUuXG4gICAgaWYgKCF0aGlzLnZpZXdzW3Bvc2l0aW9uXSkge1xuICAgICAgdGhpcy5hZGQocG9zaXRpb24sIHsgaGlkZGVuOiBmb3JjZUhpZGUgPz8gZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHBvc2l0aW9uIGlzIGFscmVhZHkgdmlzaWJsZSwgd2UgbW92ZSB0byBhIHByZXZpb3VzIHBvc2l0aW9uLiBPbmx5IGlmIHRoZSBoaWRlXG4gICAgLy8gc3RhdGUgaXMgZm9yY2VkLCB3ZSBrZWVwIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgIGlmIChcbiAgICAgIHRoaXMudmlld3NbcG9zaXRpb25dICYmXG4gICAgICBmb3JjZUhpZGUgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgIXRoaXMudmlld3NbcG9zaXRpb25dLmhpZGRlblxuICAgICkge1xuICAgICAgcG9zaXRpb24tLTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHBvc2l0aW9uLCBmb3JjZUhpZGUpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHBvc2l0aW9uOiBudW1iZXIsIGhpZGU/OiBib29sZWFuKSB7XG4gICAgY29uc3Qgdmlld3MgPSBbLi4udGhpcy52aWV3c107XG4gICAgY29uc3Qgc3BsaXQ6IG51bWJlciA9IHRoaXMuX3NwbGl0Vmlld0NvdW50IC0gMTtcbiAgICAvLyB0b2dnbGUgdGhlIGhpZGRlbiBzdGF0ZSBwZXIgdmlldywgYmFzZWQgb24gdGhlIG5leHQgcG9zaXRpb24gYW5kIG51bWJlciBvZiB2aWV3cyBwZXIgc3BsaXQgdmlld1xuICAgIHZpZXdzLmZvckVhY2goKHZpZXcsIHBvcykgPT4ge1xuICAgICAgaWYgKHBvcyA9PT0gcG9zaXRpb24pIHtcbiAgICAgICAgdmlldy5oaWRkZW4gPSBoaWRlID8/ICEocG9zID49IHBvc2l0aW9uIC0gc3BsaXQgJiYgcG9zIDw9IHBvc2l0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZpZXcuaGlkZGVuID0gIShwb3MgPj0gcG9zaXRpb24gLSBzcGxpdCAmJiBwb3MgPD0gcG9zaXRpb24pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX3ZpZXdzJC5uZXh0KHZpZXdzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBhY3RpdmUgdmlldyBjb3VudCBmb3IgdGhlIGxpc3Qgb2Ygdmlld3MuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0QWN0aXZlKHZpZXdzOiBTcGxpdFZpZXdTdGF0ZVtdKTogbnVtYmVyIHtcbiAgICAvLyB3ZSByZXZlcnNlIHRoZSBsaXN0IHRvIGZpbmQgdGhlIGxhc3QgdmlzaWJsZSB2aWV3XG4gICAgY29uc3QgbCA9IFsuLi52aWV3c11cbiAgICAgIC5yZXZlcnNlKClcbiAgICAgIC5maW5kSW5kZXgoKHZpZXc6IFNwbGl0Vmlld1N0YXRlKSA9PiAhdmlldy5oaWRkZW4pO1xuICAgIGNvbnN0IGxhc3QgPSBsID09PSAtMSA/IDAgOiB2aWV3cy5sZW5ndGggLSBsIC0gMTtcbiAgICByZXR1cm4gbGFzdDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHRoZSB2aWV3IGNvdW50IGZvciB0aGUgc3BsaXQgdmlldy5cbiAgICpcbiAgICogRGVmYXVsdHMgdG8gMi5cbiAgICovXG4gIHNldCBzcGxpdFZpZXdDb3VudChjb3VudDogbnVtYmVyKSB7XG4gICAgdGhpcy5fc3BsaXRWaWV3Q291bnQgPSBjb3VudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBVdGlsaXR5IG1ldGhvZCB0aGF0IHJlc29sdmVzIGFsbCB2aWV3cyBmcm9tIHRoZSBzdWJqZWN0LlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldCB2aWV3cygpOiBTcGxpdFZpZXdTdGF0ZVtdIHtcbiAgICByZXR1cm4gdGhpcy5fdmlld3MkLnZhbHVlO1xuICB9XG59XG4iXX0=