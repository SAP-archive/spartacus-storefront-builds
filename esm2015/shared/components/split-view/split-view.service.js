import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { distinctUntilChanged, filter, map } from 'rxjs/operators';
/**
 * Supposed to be injected in the split view component, so that the split view state
 * is maintained for a single split view.
 */
export class SplitViewService {
    constructor() {
        /**
         * Newly added views are hidden by default, unless it is the first view of the split view.
         * The default hide mode can be overridden.
         */
        this.defaultHideMode = true;
        this.splitViewCount = 1;
        this._views$ = new BehaviorSubject([]);
    }
    /**
     * Adds a view to the list of views. The view is initialized with the `SplitViewState`
     * state. If no state is provided, the state is created with the hidden property. The hidden
     * property is provided by the `defaultHideMode`, unless it's the first view (position: 0).
     */
    add(position, initialState) {
        const state = Object.assign({ hidden: position === 0 ? false : this.defaultHideMode }, initialState);
        if (!this.views[position]) {
            this.views[position] = state;
            this.updateState(position, state.hidden);
            this._views$.next(this.views);
        }
    }
    /**
     * The split view is based on a number of views that can be used next to each other.
     * When the number changes (i.e. if the screen goes from wide to small), the visibility state
     * of the views should be updated.
     */
    updateSplitView(splitViewCount) {
        if (splitViewCount !== this.splitViewCount) {
            this.splitViewCount = splitViewCount;
            this.updateState();
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
            this.updateState(position);
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
        this.updateState(position, forceHide === true);
    }
    /**
     * Updates the hidden state of all the views.
     */
    updateState(position, hide) {
        const views = [...this.views];
        if (hide !== undefined && views[position]) {
            views[position].hidden = hide;
        }
        let lastVisible = views.length - [...views].reverse().findIndex((view) => !view.hidden) - 1;
        if (lastVisible === views.length) {
            if (position) {
                // When there's only 1 view (mobile), we might not find any active
                // if the user navigates back.
                lastVisible = position - 1;
            }
            else {
                lastVisible = views.length - 1;
            }
        }
        views.forEach((view, pos) => {
            if (view && pos !== position) {
                // hide other views that are outside the split view
                view.hidden =
                    pos > lastVisible || pos < lastVisible - (this.splitViewCount - 1);
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
     * Utility method that resolves all views from the subject.
     */
    get views() {
        return this._views$.value;
    }
}
SplitViewService.decorators = [
    { type: Injectable }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvc3RvcmVmcm9udGxpYi9zcmMvc2hhcmVkL2NvbXBvbmVudHMvc3BsaXQtdmlldy9zcGxpdC12aWV3LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsZUFBZSxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBQ25ELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbkU7OztHQUdHO0FBRUgsTUFBTSxPQUFPLGdCQUFnQjtJQUQ3QjtRQUVFOzs7V0FHRztRQUNILG9CQUFlLEdBQUcsSUFBSSxDQUFDO1FBRWIsbUJBQWMsR0FBRyxDQUFDLENBQUM7UUFFbkIsWUFBTyxHQUEyQixJQUFJLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQTZKdEUsQ0FBQztJQTNKQzs7OztPQUlHO0lBQ0gsR0FBRyxDQUFDLFFBQWdCLEVBQUUsWUFBNkI7UUFDakQsTUFBTSxLQUFLLGlCQUNOLEVBQUUsTUFBTSxFQUFFLFFBQVEsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsRUFBRSxFQUN6RCxZQUFZLENBQ2hCLENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRTtZQUN6QixJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUM3QixJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDekMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFD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cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBkaXN0aW5jdFVudGlsQ2hhbmdlZCwgZmlsdGVyLCBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTcGxpdFZpZXdTdGF0ZSB9IGZyb20gJy4vc3BsaXQvc3BsaXQtdmlldy5tb2RlbCc7XG5cbi8qKlxuICogU3VwcG9zZWQgdG8gYmUgaW5qZWN0ZWQgaW4gdGhlIHNwbGl0IHZpZXcgY29tcG9uZW50LCBzbyB0aGF0IHRoZSBzcGxpdCB2aWV3IHN0YXRlXG4gKiBpcyBtYWludGFpbmVkIGZvciBhIHNpbmdsZSBzcGxpdCB2aWV3LlxuICovXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3BsaXRWaWV3U2VydmljZSB7XG4gIC8qKlxuICAgKiBOZXdseSBhZGRlZCB2aWV3cyBhcmUgaGlkZGVuIGJ5IGRlZmF1bHQsIHVubGVzcyBpdCBpcyB0aGUgZmlyc3QgdmlldyBvZiB0aGUgc3BsaXQgdmlldy5cbiAgICogVGhlIGRlZmF1bHQgaGlkZSBtb2RlIGNhbiBiZSBvdmVycmlkZGVuLlxuICAgKi9cbiAgZGVmYXVsdEhpZGVNb2RlID0gdHJ1ZTtcblxuICBwcm90ZWN0ZWQgc3BsaXRWaWV3Q291bnQgPSAxO1xuXG4gIHByb3RlY3RlZCBfdmlld3MkOiBCZWhhdmlvclN1YmplY3Q8YW55W10+ID0gbmV3IEJlaGF2aW9yU3ViamVjdChbXSk7XG5cbiAgLyoqXG4gICAqIEFkZHMgYSB2aWV3IHRvIHRoZSBsaXN0IG9mIHZpZXdzLiBUaGUgdmlldyBpcyBpbml0aWFsaXplZCB3aXRoIHRoZSBgU3BsaXRWaWV3U3RhdGVgXG4gICAqIHN0YXRlLiBJZiBubyBzdGF0ZSBpcyBwcm92aWRlZCwgdGhlIHN0YXRlIGlzIGNyZWF0ZWQgd2l0aCB0aGUgaGlkZGVuIHByb3BlcnR5LiBUaGUgaGlkZGVuXG4gICAqIHByb3BlcnR5IGlzIHByb3ZpZGVkIGJ5IHRoZSBgZGVmYXVsdEhpZGVNb2RlYCwgdW5sZXNzIGl0J3MgdGhlIGZpcnN0IHZpZXcgKHBvc2l0aW9uOiAwKS5cbiAgICovXG4gIGFkZChwb3NpdGlvbjogbnVtYmVyLCBpbml0aWFsU3RhdGU/OiBTcGxpdFZpZXdTdGF0ZSkge1xuICAgIGNvbnN0IHN0YXRlOiBTcGxpdFZpZXdTdGF0ZSA9IHtcbiAgICAgIC4uLnsgaGlkZGVuOiBwb3NpdGlvbiA9PT0gMCA/IGZhbHNlIDogdGhpcy5kZWZhdWx0SGlkZU1vZGUgfSxcbiAgICAgIC4uLmluaXRpYWxTdGF0ZSxcbiAgICB9O1xuICAgIGlmICghdGhpcy52aWV3c1twb3NpdGlvbl0pIHtcbiAgICAgIHRoaXMudmlld3NbcG9zaXRpb25dID0gc3RhdGU7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKHBvc2l0aW9uLCBzdGF0ZS5oaWRkZW4pO1xuICAgICAgdGhpcy5fdmlld3MkLm5leHQodGhpcy52aWV3cyk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBzcGxpdCB2aWV3IGlzIGJhc2VkIG9uIGEgbnVtYmVyIG9mIHZpZXdzIHRoYXQgY2FuIGJlIHVzZWQgbmV4dCB0byBlYWNoIG90aGVyLlxuICAgKiBXaGVuIHRoZSBudW1iZXIgY2hhbmdlcyAoaS5lLiBpZiB0aGUgc2NyZWVuIGdvZXMgZnJvbSB3aWRlIHRvIHNtYWxsKSwgdGhlIHZpc2liaWxpdHkgc3RhdGVcbiAgICogb2YgdGhlIHZpZXdzIHNob3VsZCBiZSB1cGRhdGVkLlxuICAgKi9cbiAgdXBkYXRlU3BsaXRWaWV3KHNwbGl0Vmlld0NvdW50OiBudW1iZXIpIHtcbiAgICBpZiAoc3BsaXRWaWV3Q291bnQgIT09IHRoaXMuc3BsaXRWaWV3Q291bnQpIHtcbiAgICAgIHRoaXMuc3BsaXRWaWV3Q291bnQgPSBzcGxpdFZpZXdDb3VudDtcbiAgICAgIHRoaXMudXBkYXRlU3RhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIGFjdGl2ZSB2aWV3IG51bWJlci4gVGhlIGFjdGl2ZSB2aWV3IG51bWJlclxuICAgKiByZXByZXNlbnRzIHRoZSBsYXN0IHZpc2libGUgdmlldy5cbiAgICovXG4gIGdldEFjdGl2ZVZpZXcoKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy5fdmlld3MkLnBpcGUoXG4gICAgICBtYXAoKHZpZXdzKSA9PiB0aGlzLmdldEFjdGl2ZSh2aWV3cykpLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIFNwbGl0Vmlld1N0YXRlIGZvciB0aGUgZ2l2ZW4gdmlldyBwb3NpdGlvbi5cbiAgICovXG4gIGdldFZpZXdTdGF0ZShwb3NpdGlvbjogbnVtYmVyKTogT2JzZXJ2YWJsZTxTcGxpdFZpZXdTdGF0ZT4ge1xuICAgIHJldHVybiB0aGlzLl92aWV3cyQucGlwZShcbiAgICAgIG1hcCgodmlld3MpID0+IHZpZXdzW3Bvc2l0aW9uXSksXG4gICAgICAvLyB3ZSBtdXN0IGZpbHRlciBoZXJlLCBzaW5jZSBvdXRsZXQgZHJpdmVuIHZpZXdzIHdpbGwgZGVzdHJveWVkIHRoZSB2aWV3XG4gICAgICBmaWx0ZXIoKHZpZXcpID0+IEJvb2xlYW4odmlldykpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIGEgdmlldyBmcm9tIHRoZSBsaXN0IG9mIHZpZXdzLlxuICAgKlxuICAgKiBSZW1vdmluZyBhIHZpZXcgaXMgZGlmZmVyZW50IGZyb20gaGlkaW5nIGEgdmlldy4gUmVtb3ZpbmcgYSB2aWV3IGlzIHR5cGljYWxseSBkb25lXG4gICAqIHdoZW4gYSBjb21wb25lbnQgaXMgZGVzdHJveWVkLlxuICAgKlxuICAgKiBXaGVuIHRoZSB2aWV3IGlzIHJlbW92ZWQsIHRoZSBTcGxpdFZpZXdTdGF0ZSBpcyB1cGRhdGVkIHRvIHJlZmxlY3QgdGhhdCBuZXcgb3JnYW5pemF0aW9uXG4gICAqIG9mIHZpZXdzLlxuICAgKi9cbiAgcmVtb3ZlKHBvc2l0aW9uOiBudW1iZXIpIHtcbiAgICBjb25zdCBhY3RpdmVQb3NpdGlvbiA9IHRoaXMuZ2V0QWN0aXZlKHRoaXMudmlld3MpO1xuICAgIHRoaXMuX3ZpZXdzJC5uZXh0KHRoaXMudmlld3Muc3BsaWNlKDAsIHBvc2l0aW9uKSk7XG4gICAgaWYgKGFjdGl2ZVBvc2l0aW9uID49IHBvc2l0aW9uKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0YXRlKHBvc2l0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmV4dCB2aWV3IHBvc2l0aW9uLiBUaGlzIGlzIHVzZWZ1bCBmb3Igdmlld3MgdGhhdCBkbyBub3Qgd2FudCB0byBiZSBib3RoZXJlZFxuICAgKiB3aXRoIGNvbnRyb2xsaW5nIHZpZXcgbnVtYmVycy5cbiAgICovXG4gIGdldCBuZXh0UG9zaXRpb24oKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy52aWV3cy5sZW5ndGggfHwgMDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB2aWV3cyBiYXNlZCBvbiB0aGUgZ2l2ZW4gdmlldyBwb3NpdGlvbi4gSWYgdGhlIHZpZXdcbiAgICogaXMgYWxyZWFkeSB2aXNpYmxlLCB3ZSBjbG9zZSB0aGUgdmlldyBhbmQgYWN0aXZlIHRoZSBmb3JtZXIgdmlldy4gVW5sZXNzIHRoZSBoaWRlIGZsYWdcbiAgICogaXMgdXNlZCwgdG8gZm9yY2UgdGhlIHZpZXcuXG4gICAqXG4gICAqIFRoZSB2aWV3IHN0YXRlIG9mIG90aGVyIHZpZXdzIGluIHRoZSBzcGxpdCB2aWV3IGFyZSB1cGRhdGVkIGFzIHdlbGwuXG4gICAqXG4gICAqIEBwYXJhbSBwb3NpdGlvbiBUaGUgemVyby1iYXNlZCBwb3NpdGlvbiBudW1iZXIgb2YgdGhlIHZpZXcuXG4gICAqIEBwYXJhbSBmb3JjZUhpZGUgVGhlIChvcHRpb25hbCkgaGlkZSBzdGF0ZSBmb3IgdGhlIHZpZXcgcG9zaXRpb24uXG4gICAqL1xuICB0b2dnbGUocG9zaXRpb246IG51bWJlciwgZm9yY2VIaWRlPzogYm9vbGVhbikge1xuICAgIC8vIGFkZCB0aGUgdmlldyBpZiBpdCBoYXNuJ3QgYmVlbiBhZGRlZCBiZWZvcmUuXG4gICAgaWYgKCF0aGlzLnZpZXdzW3Bvc2l0aW9uXSkge1xuICAgICAgdGhpcy5hZGQocG9zaXRpb24sIHsgaGlkZGVuOiBmb3JjZUhpZGUgPz8gZmFsc2UgfSk7XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHBvc2l0aW9uIGlzIGFscmVhZHkgdmlzaWJsZSwgd2UgbW92ZSB0byBhIHByZXZpb3VzIHBvc2l0aW9uLiBPbmx5IGlmIHRoZSBoaWRlXG4gICAgLy8gc3RhdGUgaXMgZm9yY2VkLCB3ZSBrZWVwIHRoZSBjdXJyZW50IHBvc2l0aW9uLlxuICAgIGlmIChcbiAgICAgIHRoaXMudmlld3NbcG9zaXRpb25dICYmXG4gICAgICBmb3JjZUhpZGUgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgIXRoaXMudmlld3NbcG9zaXRpb25dLmhpZGRlblxuICAgICkge1xuICAgICAgcG9zaXRpb24tLTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVN0YXRlKHBvc2l0aW9uLCBmb3JjZUhpZGUgPT09IHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGhpZGRlbiBzdGF0ZSBvZiBhbGwgdGhlIHZpZXdzLlxuICAgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHBvc2l0aW9uPzogbnVtYmVyLCBoaWRlPzogYm9vbGVhbikge1xuICAgIGNvbnN0IHZpZXdzID0gWy4uLnRoaXMudmlld3NdO1xuICAgIGlmIChoaWRlICE9PSB1bmRlZmluZWQgJiYgdmlld3NbcG9zaXRpb25dKSB7XG4gICAgICB2aWV3c1twb3NpdGlvbl0uaGlkZGVuID0gaGlkZTtcbiAgICB9XG4gICAgbGV0IGxhc3RWaXNpYmxlID1cbiAgICAgIHZpZXdzLmxlbmd0aCAtIFsuLi52aWV3c10ucmV2ZXJzZSgpLmZpbmRJbmRleCgodmlldykgPT4gIXZpZXcuaGlkZGVuKSAtIDE7XG5cbiAgICBpZiAobGFzdFZpc2libGUgPT09IHZpZXdzLmxlbmd0aCkge1xuICAgICAgaWYgKHBvc2l0aW9uKSB7XG4gICAgICAgIC8vIFdoZW4gdGhlcmUncyBvbmx5IDEgdmlldyAobW9iaWxlKSwgd2UgbWlnaHQgbm90IGZpbmQgYW55IGFjdGl2ZVxuICAgICAgICAvLyBpZiB0aGUgdXNlciBuYXZpZ2F0ZXMgYmFjay5cbiAgICAgICAgbGFzdFZpc2libGUgPSBwb3NpdGlvbiAtIDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBsYXN0VmlzaWJsZSA9IHZpZXdzLmxlbmd0aCAtIDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdmlld3MuZm9yRWFjaCgodmlldywgcG9zKSA9PiB7XG4gICAgICBpZiAodmlldyAmJiBwb3MgIT09IHBvc2l0aW9uKSB7XG4gICAgICAgIC8vIGhpZGUgb3RoZXIgdmlld3MgdGhhdCBhcmUgb3V0c2lkZSB0aGUgc3BsaXQgdmlld1xuICAgICAgICB2aWV3LmhpZGRlbiA9XG4gICAgICAgICAgcG9zID4gbGFzdFZpc2libGUgfHwgcG9zIDwgbGFzdFZpc2libGUgLSAodGhpcy5zcGxpdFZpZXdDb3VudCAtIDEpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5fdmlld3MkLm5leHQodmlld3MpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGFjdGl2ZSB2aWV3IGNvdW50IGZvciB0aGUgbGlzdCBvZiB2aWV3cy5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRBY3RpdmUodmlld3M6IFNwbGl0Vmlld1N0YXRlW10pOiBudW1iZXIge1xuICAgIC8vIHdlIHJldmVyc2UgdGhlIGxpc3QgdG8gZmluZCB0aGUgbGFzdCB2aXNpYmxlIHZpZXdcbiAgICBjb25zdCBsID0gWy4uLnZpZXdzXVxuICAgICAgLnJldmVyc2UoKVxuICAgICAgLmZpbmRJbmRleCgodmlldzogU3BsaXRWaWV3U3RhdGUpID0+ICF2aWV3LmhpZGRlbik7XG4gICAgY29uc3QgbGFzdCA9IGwgPT09IC0xID8gMCA6IHZpZXdzLmxlbmd0aCAtIGwgLSAxO1xuICAgIHJldHVybiBsYXN0O1xuICB9XG5cbiAgLyoqXG4gICAqIFV0aWxpdHkgbWV0aG9kIHRoYXQgcmVzb2x2ZXMgYWxsIHZpZXdzIGZyb20gdGhlIHN1YmplY3QuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0IHZpZXdzKCk6IFNwbGl0Vmlld1N0YXRlW10ge1xuICAgIHJldHVybiB0aGlzLl92aWV3cyQudmFsdWU7XG4gIH1cbn1cbiJdfQ==