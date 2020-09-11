import { BehaviorSubject, Observable } from 'rxjs';
import { SplitViewState } from './split/split-view.model';
/**
 * Supposed to be injected in the split view component, so that the split view state
 * is maintained for a single split view.
 */
import * as ɵngcc0 from '@angular/core';
export declare class SplitViewService {
    /**
     * Newly added views are hidden by default, unless it is the first view of the split view.
     * The default hide mode can be overridden.
     */
    defaultHideMode: boolean;
    protected _splitViewCount: number;
    protected _views$: BehaviorSubject<any[]>;
    /**
     * Adds a view to the list of views. The view is initialized with the `SplitViewState`
     * state. If no state is provided, the state is created with the hidden property. The hidden
     * property is provided by the `defaultHideMode`, unless it's the first view (position: 0).
     */
    add(position: number, initialState?: SplitViewState): void;
    /**
     * Returns an observable with the active view number. The active view number
     * represents the last visible view.
     */
    getActiveView(): Observable<number>;
    /**
     * Returns an observable with the SplitViewState for the given view position.
     */
    getViewState(position: number): Observable<SplitViewState>;
    /**
     * Removes a view from the list of views.
     *
     * Removing a view is different from hiding a view. Removing a view is typically done
     * when a component is destroyed.
     *
     * When the view is removed, the SplitViewState is updated to reflect that new organization
     * of views.
     */
    remove(position: number): void;
    /**
     * Returns the next view position. This is useful for views that do not want to be bothered
     * with controlling view numbers.
     */
    get nextPosition(): number;
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
    toggle(position: number, forceHide?: boolean): void;
    protected updateState(position: number, hide?: boolean): void;
    /**
     * Returns the active view count for the list of views.
     */
    protected getActive(views: SplitViewState[]): number;
    /**
     * Sets the view count for the split view.
     *
     * Defaults to 2.
     */
    set splitViewCount(count: number);
    /**
     * Utility method that resolves all views from the subject.
     */
    protected get views(): SplitViewState[];
    static ɵfac: ɵngcc0.ɵɵFactoryDef<SplitViewService, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<SplitViewService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsaXQtdmlldy5zZXJ2aWNlLmQudHMiLCJzb3VyY2VzIjpbInNwbGl0LXZpZXcuc2VydmljZS5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0FBTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdFQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJlaGF2aW9yU3ViamVjdCwgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgU3BsaXRWaWV3U3RhdGUgfSBmcm9tICcuL3NwbGl0L3NwbGl0LXZpZXcubW9kZWwnO1xuLyoqXG4gKiBTdXBwb3NlZCB0byBiZSBpbmplY3RlZCBpbiB0aGUgc3BsaXQgdmlldyBjb21wb25lbnQsIHNvIHRoYXQgdGhlIHNwbGl0IHZpZXcgc3RhdGVcbiAqIGlzIG1haW50YWluZWQgZm9yIGEgc2luZ2xlIHNwbGl0IHZpZXcuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIFNwbGl0Vmlld1NlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIE5ld2x5IGFkZGVkIHZpZXdzIGFyZSBoaWRkZW4gYnkgZGVmYXVsdCwgdW5sZXNzIGl0IGlzIHRoZSBmaXJzdCB2aWV3IG9mIHRoZSBzcGxpdCB2aWV3LlxuICAgICAqIFRoZSBkZWZhdWx0IGhpZGUgbW9kZSBjYW4gYmUgb3ZlcnJpZGRlbi5cbiAgICAgKi9cbiAgICBkZWZhdWx0SGlkZU1vZGU6IGJvb2xlYW47XG4gICAgcHJvdGVjdGVkIF9zcGxpdFZpZXdDb3VudDogbnVtYmVyO1xuICAgIHByb3RlY3RlZCBfdmlld3MkOiBCZWhhdmlvclN1YmplY3Q8YW55W10+O1xuICAgIC8qKlxuICAgICAqIEFkZHMgYSB2aWV3IHRvIHRoZSBsaXN0IG9mIHZpZXdzLiBUaGUgdmlldyBpcyBpbml0aWFsaXplZCB3aXRoIHRoZSBgU3BsaXRWaWV3U3RhdGVgXG4gICAgICogc3RhdGUuIElmIG5vIHN0YXRlIGlzIHByb3ZpZGVkLCB0aGUgc3RhdGUgaXMgY3JlYXRlZCB3aXRoIHRoZSBoaWRkZW4gcHJvcGVydHkuIFRoZSBoaWRkZW5cbiAgICAgKiBwcm9wZXJ0eSBpcyBwcm92aWRlZCBieSB0aGUgYGRlZmF1bHRIaWRlTW9kZWAsIHVubGVzcyBpdCdzIHRoZSBmaXJzdCB2aWV3IChwb3NpdGlvbjogMCkuXG4gICAgICovXG4gICAgYWRkKHBvc2l0aW9uOiBudW1iZXIsIGluaXRpYWxTdGF0ZT86IFNwbGl0Vmlld1N0YXRlKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIG9ic2VydmFibGUgd2l0aCB0aGUgYWN0aXZlIHZpZXcgbnVtYmVyLiBUaGUgYWN0aXZlIHZpZXcgbnVtYmVyXG4gICAgICogcmVwcmVzZW50cyB0aGUgbGFzdCB2aXNpYmxlIHZpZXcuXG4gICAgICovXG4gICAgZ2V0QWN0aXZlVmlldygpOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbiBvYnNlcnZhYmxlIHdpdGggdGhlIFNwbGl0Vmlld1N0YXRlIGZvciB0aGUgZ2l2ZW4gdmlldyBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICBnZXRWaWV3U3RhdGUocG9zaXRpb246IG51bWJlcik6IE9ic2VydmFibGU8U3BsaXRWaWV3U3RhdGU+O1xuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSB2aWV3IGZyb20gdGhlIGxpc3Qgb2Ygdmlld3MuXG4gICAgICpcbiAgICAgKiBSZW1vdmluZyBhIHZpZXcgaXMgZGlmZmVyZW50IGZyb20gaGlkaW5nIGEgdmlldy4gUmVtb3ZpbmcgYSB2aWV3IGlzIHR5cGljYWxseSBkb25lXG4gICAgICogd2hlbiBhIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuXG4gICAgICpcbiAgICAgKiBXaGVuIHRoZSB2aWV3IGlzIHJlbW92ZWQsIHRoZSBTcGxpdFZpZXdTdGF0ZSBpcyB1cGRhdGVkIHRvIHJlZmxlY3QgdGhhdCBuZXcgb3JnYW5pemF0aW9uXG4gICAgICogb2Ygdmlld3MuXG4gICAgICovXG4gICAgcmVtb3ZlKHBvc2l0aW9uOiBudW1iZXIpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgdmlldyBwb3NpdGlvbi4gVGhpcyBpcyB1c2VmdWwgZm9yIHZpZXdzIHRoYXQgZG8gbm90IHdhbnQgdG8gYmUgYm90aGVyZWRcbiAgICAgKiB3aXRoIGNvbnRyb2xsaW5nIHZpZXcgbnVtYmVycy5cbiAgICAgKi9cbiAgICBnZXQgbmV4dFBvc2l0aW9uKCk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBUb2dnbGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSB2aWV3cyBiYXNlZCBvbiB0aGUgZ2l2ZW4gdmlldyBwb3NpdGlvbi4gSWYgdGhlIHZpZXdcbiAgICAgKiBpcyBhbHJlYWR5IHZpc2libGUsIHdlIGNsb3NlIHRoZSB2aWV3IGFuZCBhY3RpdmUgdGhlIGZvcm1lciB2aWV3LiBVbmxlc3MgdGhlIGhpZGUgZmxhZ1xuICAgICAqIGlzIHVzZWQsIHRvIGZvcmNlIHRoZSB2aWV3LlxuICAgICAqXG4gICAgICogVGhlIHZpZXcgc3RhdGUgb2Ygb3RoZXIgdmlld3MgaW4gdGhlIHNwbGl0IHZpZXcgYXJlIHVwZGF0ZWQgYXMgd2VsbC5cbiAgICAgKlxuICAgICAqIEBwYXJhbSBwb3NpdGlvbiBUaGUgemVyby1iYXNlZCBwb3NpdGlvbiBudW1iZXIgb2YgdGhlIHZpZXcuXG4gICAgICogQHBhcmFtIGZvcmNlSGlkZSBUaGUgKG9wdGlvbmFsKSBoaWRlIHN0YXRlIGZvciB0aGUgdmlldyBwb3NpdGlvbi5cbiAgICAgKi9cbiAgICB0b2dnbGUocG9zaXRpb246IG51bWJlciwgZm9yY2VIaWRlPzogYm9vbGVhbik6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKHBvc2l0aW9uOiBudW1iZXIsIGhpZGU/OiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBhY3RpdmUgdmlldyBjb3VudCBmb3IgdGhlIGxpc3Qgb2Ygdmlld3MuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEFjdGl2ZSh2aWV3czogU3BsaXRWaWV3U3RhdGVbXSk6IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSB2aWV3IGNvdW50IGZvciB0aGUgc3BsaXQgdmlldy5cbiAgICAgKlxuICAgICAqIERlZmF1bHRzIHRvIDIuXG4gICAgICovXG4gICAgc2V0IHNwbGl0Vmlld0NvdW50KGNvdW50OiBudW1iZXIpO1xuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgbWV0aG9kIHRoYXQgcmVzb2x2ZXMgYWxsIHZpZXdzIGZyb20gdGhlIHN1YmplY3QuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldCB2aWV3cygpOiBTcGxpdFZpZXdTdGF0ZVtdO1xufVxuIl19