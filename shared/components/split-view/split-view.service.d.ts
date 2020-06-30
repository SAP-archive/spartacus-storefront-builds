import { BehaviorSubject, Observable } from 'rxjs';
import { ViewState } from './split/split-view.model';
/**
 * Supposed to be injected in the split view component, so that the view state
 * is maintained in the context of a single split view.
 */
export declare class SplitViewService {
    protected _views$: BehaviorSubject<any[]>;
    /**
     * Resolves the max number of visible views for the split view.
     */
    visibleViewCount(): Observable<number>;
    /**
     * Adds a view to the list of views. The view is initialized with the
     * hide state, which defaults to false.
     */
    add(viewPosition: number, hide?: boolean): void;
    /**
     * Removes a view from the list of views.
     */
    remove(viewPosition: number): void;
    /**
     * Toggles the visible state for the given view. An optional
     * force argument can be used to dictate the visibility.
     */
    toggle(viewPosition: number, force?: boolean): void;
    /**
     * Returns the next view number, that can be used by views to register itself.
     */
    generateNextPosition(): number;
    /**
     * Utility method that resolves all views.
     */
    protected get views(): ViewState[];
}
