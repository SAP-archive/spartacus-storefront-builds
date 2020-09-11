import { BehaviorSubject, Observable } from 'rxjs';
import { SplitViewState } from './split/split-view.model';
/**
 * Supposed to be injected in the split view component, so that the split view state
 * is maintained for a single split view.
 */
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
}
