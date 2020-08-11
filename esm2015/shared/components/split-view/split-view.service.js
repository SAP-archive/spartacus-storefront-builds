import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
/**
 * Supposed to be injected in the split view component, so that the split view state
 * is maintained for a single split view.
 */
let SplitViewService = class SplitViewService {
    constructor() {
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
    add(position, initialState) {
        if (!this.views[position]) {
            this.views[position] = Object.assign({ hidden: position === 0 ? false : this.defaultHideMode }, initialState);
            this._views$.next(this.views);
        }
    }
    /**
     * Returns an observable with the active view number. The active view number
     * represents the last visible view.
     */
    getActiveView() {
        return this._views$.pipe(map((views) => this.getActive(views)), distinctUntilChanged());
    }
    /**
     * Returns an observable with the SplitViewState for the given view position.
     */
    getViewState(position) {
        return this._views$.pipe(map((views) => views[position]), 
        // we must filter here, since outlet driven views will destroyed the view
        filter((view) => Boolean(view)));
    }
    /**
     * Removes a view from the list of views.
     *
     * Removing a view is different from hiding a view. Removing a view is typically done
     * when a component is destroyed.
     *
     * When the view is removed, the SplitViewState is updated to reflect that new organization
     * of views.
     */
    remove(position) {
        const activePosition = this.getActive(this.views);
        this._views$.next(this.views.splice(0, position));
        if (activePosition >= position) {
            this.updateState(position - 1);
        }
    }
    /**
     * Returns the next view position. This is useful for views that do not want to be bothered
     * with controlling view numbers.
     */
    get nextPosition() {
        return this.views.length || 0;
    }
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
    toggle(position, forceHide) {
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
    }
    updateState(position, hide) {
        const views = [...this.views];
        const split = this._splitViewCount - 1;
        // toggle the hidden state per view, based on the next position and number of views per split view
        views.forEach((view, pos) => {
            if (pos === position) {
                view.hidden = hide !== null && hide !== void 0 ? hide : !(pos >= position - split && pos <= position);
            }
            else {
                view.hidden = !(pos >= position - split && pos <= position);
            }
        });
        this._views$.next(views);
    }
    /**
     * Returns the active view count for the list of views.
     */
    getActive(views) {
        // we reverse the list to find the last visible view
        const l = [...views]
            .reverse()
            .findIndex((view) => !view.hidden);
        const last = l === -1 ? 0 : views.length - l - 1;
        return last;
    }
    /**
     * Sets the view count for the split view.
     *
     * Defaults to 2.
     */
    set splitViewCount(count) {
        this._splitViewCount = count;
    }
    /**
     * Utility method that resolves all views from the subject.
     */
    get views() {
        return this._views$.value;
    }
};
SplitViewService = __decorate([
    Injectable()
], SplitViewService);
export { SplitViewService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvc3BsaXQtdmlldy9zcGxpdC12aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLGVBQWUsRUFBYyxNQUFNLE1BQU0sQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR25FOzs7R0FHRztBQUVILElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQTdCO1FBQ0U7OztXQUdHO1FBQ0gsb0JBQWUsR0FBRyxJQUFJLENBQUM7UUFFYixvQkFBZSxHQUFHLENBQUMsQ0FBQztRQUVwQixZQUFPLEdBQTJCLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBc0l0RSxDQUFDO0lBcElDOzs7O09BSUc7SUFDSCxHQUFHLENBQUMsUUFBZ0IsRUFBRSxZQUE2QjtRQUNqRCxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxpQkFDZixFQUFFLE1BQU0sRUFBRSxRQUFRLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEVBQUUsRUFDekQsWUFBWSxDQUNoQixDQUFDO1lBQ0YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQy9CO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWE7UUFDWCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUN0QixHQUFHLENBQUMsQ0FBQyxL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YUFDakIsT0FBTyxFQUFFO2FBQ1QsU0FBUyxDQUFDLENBQUMsSUFBb0IsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsTUFBTSxJQUFJLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsSUFBSSxjQUFjLENBQUMsS0FBYTtRQUM5QixJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztJQUMvQixDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFjLEtBQUs7UUFDakIsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQztJQUM1QixDQUFDO0NBQ0YsQ0FBQTtBQS9JWSxnQkFBZ0I7SUFENUIsVUFBVSxFQUFFO0dBQ0EsZ0JBQWdCLENBK0k1QjtTQS9JWSxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IFNwbGl0Vmlld1N0YXRlIH0gZnJvbSAnLi9zcGxpdC9zcGxpdC12aWV3Lm1vZGVsJztcblxuLyoqXG4gKiBTdXBwb3NlZCB0byBiZSBpbmplY3RlZCBpbiB0aGUgc3BsaXQgdmlldyBjb21wb25lbnQsIHNvIHRoYXQgdGhlIHNwbGl0IHZpZXcgc3RhdGVcbiAqIGlzIG1haW50YWluZWQgZm9yIGEgc2luZ2xlIHNwbGl0IHZpZXcuXG4gKi9cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTcGxpdFZpZXdTZXJ2aWNlIHtcbiAgLyoqXG4gICAqIE5ld2x5IGFkZGVkIHZpZXdzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCwgdW5sZXNzIGl0IGlzIHRoZSBmaXJzdCB2aWV3IG9mIHRoZSBzcGxpdCB2aWV3LlxuICAgKiBUaGUgZGVmYXVsdCBoaWRlIG1vZGUgY2FuIGJlIG92ZXJyaWRkZW4uXG4gICAqL1xuICBkZWZhdWx0SGlkZU1vZGUgPSB0cnVlO1xuXG4gIHByb3RlY3RlZCBfc3BsaXRWaWV3Q291bnQgPSAyO1xuXG4gIHByb3RlY3RlZCBfdmlld3MkOiBCZWhhdmlvclN1YmplY3Q8YW55W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB2aWV3IHRvIHRoZSBsaXN0IG9mIHZpZXdzLiBUaGUgdmlldyBpcyBpbml0aWFsaXplZCB3aXRoIHRoZSBgU3BsaXRWaWV3U3RhdGVgXG4gICAqIHN0YXRlLiBJZiBubyBzdGF0ZSBpcyBwcm92aWRlZCwgdGhlIHN0YXRlIGlzIGNyZWF0ZWQgd2l0aCB0aGUgaGlkZGVuIHByb3BlcnR5LiBUaGUgaGlkZGVuXG4gICAqIHByb3BlcnR5IGlzIHByb3ZpZGVkIGJ5IHRoZSBgZGVmYXVsdEhpZGVNb2RlYCwgdW5sZXNzIGl0J3MgdGhlIGZpcnN0IHZpZXcgKHBvc2l0aW9uOiAwKS5cbiAgICovXG4gIGFkZChwb3NpdGlvbjogbnVtYmVyLCBpbml0aWFsU3RhdGU/OiBTcGxpdFZpZXdTdGF0ZSkge1xuICAgIGlmICghdGhpcy52aWV3c1twb3NpdGlvbl0pIHtcbiAgICAgIHRoaXMudmlld3NbcG9zaXRpb25dID0ge1xuICAgICAgICAuLi57IGhpZGRlbjogcG9zaXRpb24gPT09IDAgPyBmYWxzZSA6IHRoaXMuZGVmYXVsdEhpZGVNb2RlIH0sXG4gICAgICAgIC4uLmluaXRpYWxTdGF0ZSxcbiAgICAgIH07XG4gICAgICB0aGlzLl92aWV3cyQubmV4dCh0aGlzLnZpZXdzKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIGFjdGl2ZSB2aWV3IG51bWJlci4gVGhlIGFjdGl2ZSB2aWV3IG51bWJlclxuICAgKiByZXByZXNlbnRzIHRoZSBsYXN0IHZpc2libGUgdmlldy5cbiAgICovXG4gIGdldEFjdGl2ZVZpZXcoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fdmlld3MkLnBpcGUoXG4gICAgICBtYXAoKHZpZXdzKSA9PiB0aGlzLmdldEFjdGl2ZSh2aWV3cykpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIFNwbGl0Vmlld1N0YXRlIGZvciB0aGUgZ2l2ZW4gdmlldyBwb3NpdGlvbi5cbiAgICovXG4gIGdldFZpZXdTdGF0ZShwb3NpdGlvbjogbnVtYmVyKTogT2JzZXJ2YWJsZTxTcGxpdFZpZXdTdGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLl92aWV3cyQucGlwZShcbiAgICAgIG1hcCgodmlld3MpID0+IHZpZXdzW3Bvc2l0aW9uXSksXG4gICAgICAvLyB3ZSBtdXN0IGZpbHRlciBoZXJlLCBzaW5jZSBvdXRsZXQgZHJpdmVuIHZpZXdzIHdpbGwgZGVzdHJveWVkIHRoZSB2aWV3XG4gICAgICBmaWx0ZXIoKHZpZXcpID0+IEJvb2xlYW4odmlldykpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgdmlldyBmcm9tIHRoZSBsaXN0IG9mIHZpZXdzLlxuICAgKlxuICAgKiBSZW1vdmluZyBhIHZpZXcgaXMgZGlmZmVyZW50IGZyb20gaGlkaW5nIGEgdmlldy4gUmVtb3ZpbmcgYSB2aWV3IGlzIHR5cGljYWxseSBkb25lXG4gICAqIHdoZW4gYSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICAgKlxuICAgKiBXaGVuIHRoZSB2aWV3IGlzIHJlbW92ZWQsIHRoZSBTcGxpdFZpZXdTdGF0ZSBpcyB1cGRhdGVkIHRvIHJlZmxlY3QgdGhhdCBuZXcgb3JnYW5pemF0aW9uXG4gICAqIG9mIHZpZXdzLlxuICAgKi9cbiAgcmVtb3ZlKHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICBjb25zdCBhY3RpdmVQb3NpdGlvbiA9IHRoaXMuZ2V0QWN0aXZlKHRoaXMudmlld3MpO1xuICAgIHRoaXMuX3ZpZXdzJC5uZXh0KHRoaXMudmlld3Muc3BsaWNlKDAsIHBvc2l0aW9uKSk7XG4gICAgaWYgKGFjdGl2ZVBvc2l0aW9uID49IHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKHBvc2l0aW9uIC0gMSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5leHQgdmlldyBwb3NpdGlvbi4gVGhpcyBpcyB1c2VmdWwgZm9yIHZpZXdzIHRoYXQgZG8gbm90IHdhbnQgdG8gYmUgYm90aGVyZWRcbiAgICogd2l0aCBjb250cm9sbGluZyB2aWV3IG51bWJlcnMuXG4gICAqL1xuICBnZXQgbmV4dFBvc2l0aW9uKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMudmlld3MubGVuZ3RoIHx8IDA7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgdmlld3MgYmFzZWQgb24gdGhlIGdpdmVuIHZpZXcgcG9zaXRpb24uIElmIHRoZSB2aWV3XG4gICAqIGlzIGFscmVhZHkgdmlzaWJsZSwgd2UgY2xvc2UgdGhlIHZpZXcgYW5kIGFjdGl2ZSB0aGUgZm9ybWVyIHZpZXcuIFVubGVzcyB0aGUgaGlkZSBmbGFnXG4gICAqIGlzIHVzZWQsIHRvIGZvcmNlIHRoZSB2aWV3LlxuICAgKlxuICAgKiBUaGUgdmlldyBzdGF0ZSBvZiBvdGhlciB2aWV3cyBpbiB0aGUgc3BsaXQgdmlldyBhcmUgdXBkYXRlZCBhcyB3ZWxsLlxuICAgKlxuICAgKiBAcGFyYW0gcG9zaXRpb24gVGhlIHplcm8tYmFzZWQgcG9zaXRpb24gbnVtYmVyIG9mIHRoZSB2aWV3LlxuICAgKiBAcGFyYW0gZm9yY2VIaWRlIFRoZSAob3B0aW9uYWwpIGhpZGUgc3RhdGUgZm9yIHRoZSB2aWV3IHBvc2l0aW9uLlxuICAgKi9cbiAgdG9nZ2xlKHBvc2l0aW9uOiBudW1iZXIsIGZvcmNlSGlkZT86IGJvb2xlYW4pIHtcbiAgICAvLyBhZGQgdGhlIHZpZXcgaWYgaXQgaGFzbid0IGJlZW4gYWRkZWQgYmVmb3JlLlxuICAgIGlmICghdGhpcy52aWV3c1twb3NpdGlvbl0pIHtcbiAgICAgIHRoaXMuYWRkKHBvc2l0aW9uLCB7IGhpZGRlbjogZm9yY2VIaWRlID8/IGZhbHNlIH0pO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBwb3NpdGlvbiBpcyBhbHJlYWR5IHZpc2libGUsIHdlIG1vdmUgdG8gYSBwcmV2aW91cyBwb3NpdGlvbi4gT25seSBpZiB0aGUgaGlkZVxuICAgIC8vIHN0YXRlIGlzIGZvcmNlZCwgd2Uga2VlcCB0aGUgY3VycmVudCBwb3NpdGlvbi5cbiAgICBpZiAoXG4gICAgICB0aGlzLnZpZXdzW3Bvc2l0aW9uXSAmJlxuICAgICAgZm9yY2VIaWRlID09PSB1bmRlZmluZWQgJiZcbiAgICAgICF0aGlzLnZpZXdzW3Bvc2l0aW9uXS5oaWRkZW5cbiAgICApIHtcbiAgICAgIHBvc2l0aW9uLS07XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVTdGF0ZShwb3NpdGlvbiwgZm9yY2VIaWRlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVTdGF0ZShwb3NpdGlvbjogbnVtYmVyLCBoaWRlPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHZpZXdzID0gWy4uLnRoaXMudmlld3NdO1xuICAgIGNvbnN0IHNwbGl0OiBudW1iZXIgPSB0aGlzLl9zcGxpdFZpZXdDb3VudCAtIDE7XG4gICAgLy8gdG9nZ2xlIHRoZSBoaWRkZW4gc3RhdGUgcGVyIHZpZXcsIGJhc2VkIG9uIHRoZSBuZXh0IHBvc2l0aW9uIGFuZCBudW1iZXIgb2Ygdmlld3MgcGVyIHNwbGl0IHZpZXdcbiAgICB2aWV3cy5mb3JFYWNoKCh2aWV3LCBwb3MpID0+IHtcbiAgICAgIGlmIChwb3MgPT09IHBvc2l0aW9uKSB7XG4gICAgICAgIHZpZXcuaGlkZGVuID0gaGlkZSA/PyAhKHBvcyA+PSBwb3NpdGlvbiAtIHNwbGl0ICYmIHBvcyA8PSBwb3NpdGlvbik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2aWV3LmhpZGRlbiA9ICEocG9zID49IHBvc2l0aW9uIC0gc3BsaXQgJiYgcG9zIDw9IHBvc2l0aW9uKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLl92aWV3cyQubmV4dCh2aWV3cyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYWN0aXZlIHZpZXcgY291bnQgZm9yIHRoZSBsaXN0IG9mIHZpZXdzLlxuICAgKi9cbiAgcHJvdGVjdGVkIGdldEFjdGl2ZSh2aWV3czogU3BsaXRWaWV3U3RhdGVbXSk6IG51bWJlciB7XG4gICAgLy8gd2UgcmV2ZXJzZSB0aGUgbGlzdCB0byBmaW5kIHRoZSBsYXN0IHZpc2libGUgdmlld1xuICAgIGNvbnN0IGwgPSBbLi4udmlld3NdXG4gICAgICAucmV2ZXJzZSgpXG4gICAgICAuZmluZEluZGV4KCh2aWV3OiBTcGxpdFZpZXdTdGF0ZSkgPT4gIXZpZXcuaGlkZGVuKTtcbiAgICBjb25zdCBsYXN0ID0gbCA9PT0gLTEgPyAwIDogdmlld3MubGVuZ3RoIC0gbCAtIDE7XG4gICAgcmV0dXJuIGxhc3Q7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgdmlldyBjb3VudCBmb3IgdGhlIHNwbGl0IHZpZXcuXG4gICAqXG4gICAqIERlZmF1bHRzIHRvIDIuXG4gICAqL1xuICBzZXQgc3BsaXRWaWV3Q291bnQoY291bnQ6IG51bWJlcikge1xuICAgIHRoaXMuX3NwbGl0Vmlld0NvdW50ID0gY291bnQ7XG4gIH1cblxuICAvKipcbiAgICogVXRpbGl0eSBtZXRob2QgdGhhdCByZXNvbHZlcyBhbGwgdmlld3MgZnJvbSB0aGUgc3ViamVjdC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXQgdmlld3MoKTogU3BsaXRWaWV3U3RhdGVbXSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpZXdzJC52YWx1ZTtcbiAgfVxufVxuIl19