import { Facet } from '@spartacus/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FacetCollapseState, FacetList } from '../facet.model';
import { ProductFacetService } from './product-facet.service';
/**
 * Provides access to the facets as well as their UI state. The UI state
 * represents user related changes on the facets, such as expanding or
 * collapsing a facet group or expanding the number of _visible_ facet values.
 */
import * as ɵngcc0 from '@angular/core';
export declare class FacetService {
    protected productFacetService: ProductFacetService;
    /**
     * An internal map where we keep the UI state of the facets.
     */
    protected facetState: Map<string, BehaviorSubject<FacetCollapseState>>;
    constructor(productFacetService: ProductFacetService);
    /**
     * Observes the facets for the given page and configures the initial UI state.
     *
     * Facets are configured on each emission so that we keep the facet UI state.
     * This is mainly done to keep the state during usage of the facet, but also
     * benefitial when the facets are rebuild while using them.
     */
    facetList$: Observable<FacetList>;
    /**
     * Returns the observed UI state for the facet.
     *
     * The state is initialized using the `initialize` method.
     */
    getState(facet: Facet): Observable<FacetCollapseState>;
    /**
     * Returns the UI state for the facet.
     *
     * The state is initialized using the `initialize` method.
     */
    protected getStateSnapshot(facet: Facet): FacetCollapseState;
    /**
     * Toggles the facet expanded state. If the expanded state becomes false,
     * the visible values will decrease to the top values only.
     *
     * If the optional value argument is provided the expanded state will be set
     * to this value, regardless of the current `expanded` state.
     */
    toggle(facet: Facet, isExpanded: boolean): void;
    /**
     * Increases the visible values to the maximum values of the facet.
     */
    increaseVisibleValues(facet: Facet): void;
    /**
     * Decreases the visible values to the topValueCount.
     *
     * The topValueCount defaults to 6, but can be controlled in
     * the backend as well.
     */
    decreaseVisibleValues(facet: Facet): void;
    /**
     * Persists the facet state and initializes the default values for the top
     * and max visible values.
     */
    protected initialize(facet: Facet): void;
    /**
     * Updates the state of the facet in the local facet map.
     */
    protected updateState(facet: Facet, property: FacetCollapseState): void;
    protected hasState(facet: Facet): boolean;
    getLinkParams(query: string): {
        [key: string]: string;
    };
    static ɵfac: ɵngcc0.ɵɵFactoryDef<FacetService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJmYWNldC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRmFjZXQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBGYWNldENvbGxhcHNlU3RhdGUsIEZhY2V0TGlzdCB9IGZyb20gJy4uL2ZhY2V0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RGYWNldFNlcnZpY2UgfSBmcm9tICcuL3Byb2R1Y3QtZmFjZXQuc2VydmljZSc7XG4vKipcbiAqIFByb3ZpZGVzIGFjY2VzcyB0byB0aGUgZmFjZXRzIGFzIHdlbGwgYXMgdGhlaXIgVUkgc3RhdGUuIFRoZSBVSSBzdGF0ZVxuICogcmVwcmVzZW50cyB1c2VyIHJlbGF0ZWQgY2hhbmdlcyBvbiB0aGUgZmFjZXRzLCBzdWNoIGFzIGV4cGFuZGluZyBvclxuICogY29sbGFwc2luZyBhIGZhY2V0IGdyb3VwIG9yIGV4cGFuZGluZyB0aGUgbnVtYmVyIG9mIF92aXNpYmxlXyBmYWNldCB2YWx1ZXMuXG4gKi9cbmV4cG9ydCBkZWNsYXJlIGNsYXNzIEZhY2V0U2VydmljZSB7XG4gICAgcHJvdGVjdGVkIHByb2R1Y3RGYWNldFNlcnZpY2U6IFByb2R1Y3RGYWNldFNlcnZpY2U7XG4gICAgLyoqXG4gICAgICogQW4gaW50ZXJuYWwgbWFwIHdoZXJlIHdlIGtlZXAgdGhlIFVJIHN0YXRlIG9mIHRoZSBmYWNldHMuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGZhY2V0U3RhdGU6IE1hcDxzdHJpbmcsIEJlaGF2aW9yU3ViamVjdDxGYWNldENvbGxhcHNlU3RhdGU+PjtcbiAgICBjb25zdHJ1Y3Rvcihwcm9kdWN0RmFjZXRTZXJ2aWNlOiBQcm9kdWN0RmFjZXRTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBPYnNlcnZlcyB0aGUgZmFjZXRzIGZvciB0aGUgZ2l2ZW4gcGFnZSBhbmQgY29uZmlndXJlcyB0aGUgaW5pdGlhbCBVSSBzdGF0ZS5cbiAgICAgKlxuICAgICAqIEZhY2V0cyBhcmUgY29uZmlndXJlZCBvbiBlYWNoIGVtaXNzaW9uIHNvIHRoYXQgd2Uga2VlcCB0aGUgZmFjZXQgVUkgc3RhdGUuXG4gICAgICogVGhpcyBpcyBtYWlubHkgZG9uZSB0byBrZWVwIHRoZSBzdGF0ZSBkdXJpbmcgdXNhZ2Ugb2YgdGhlIGZhY2V0LCBidXQgYWxzb1xuICAgICAqIGJlbmVmaXRpYWwgd2hlbiB0aGUgZmFjZXRzIGFyZSByZWJ1aWxkIHdoaWxlIHVzaW5nIHRoZW0uXG4gICAgICovXG4gICAgZmFjZXRMaXN0JDogT2JzZXJ2YWJsZTxGYWNldExpc3Q+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG9ic2VydmVkIFVJIHN0YXRlIGZvciB0aGUgZmFjZXQuXG4gICAgICpcbiAgICAgKiBUaGUgc3RhdGUgaXMgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGBpbml0aWFsaXplYCBtZXRob2QuXG4gICAgICovXG4gICAgZ2V0U3RhdGUoZmFjZXQ6IEZhY2V0KTogT2JzZXJ2YWJsZTxGYWNldENvbGxhcHNlU3RhdGU+O1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFVJIHN0YXRlIGZvciB0aGUgZmFjZXQuXG4gICAgICpcbiAgICAgKiBUaGUgc3RhdGUgaXMgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGBpbml0aWFsaXplYCBtZXRob2QuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldFN0YXRlU25hcHNob3QoZmFjZXQ6IEZhY2V0KTogRmFjZXRDb2xsYXBzZVN0YXRlO1xuICAgIC8qKlxuICAgICAqIFRvZ2dsZXMgdGhlIGZhY2V0IGV4cGFuZGVkIHN0YXRlLiBJZiB0aGUgZXhwYW5kZWQgc3RhdGUgYmVjb21lcyBmYWxzZSxcbiAgICAgKiB0aGUgdmlzaWJsZSB2YWx1ZXMgd2lsbCBkZWNyZWFzZSB0byB0aGUgdG9wIHZhbHVlcyBvbmx5LlxuICAgICAqXG4gICAgICogSWYgdGhlIG9wdGlvbmFsIHZhbHVlIGFyZ3VtZW50IGlzIHByb3ZpZGVkIHRoZSBleHBhbmRlZCBzdGF0ZSB3aWxsIGJlIHNldFxuICAgICAqIHRvIHRoaXMgdmFsdWUsIHJlZ2FyZGxlc3Mgb2YgdGhlIGN1cnJlbnQgYGV4cGFuZGVkYCBzdGF0ZS5cbiAgICAgKi9cbiAgICB0b2dnbGUoZmFjZXQ6IEZhY2V0LCBpc0V4cGFuZGVkOiBib29sZWFuKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBJbmNyZWFzZXMgdGhlIHZpc2libGUgdmFsdWVzIHRvIHRoZSBtYXhpbXVtIHZhbHVlcyBvZiB0aGUgZmFjZXQuXG4gICAgICovXG4gICAgaW5jcmVhc2VWaXNpYmxlVmFsdWVzKGZhY2V0OiBGYWNldCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogRGVjcmVhc2VzIHRoZSB2aXNpYmxlIHZhbHVlcyB0byB0aGUgdG9wVmFsdWVDb3VudC5cbiAgICAgKlxuICAgICAqIFRoZSB0b3BWYWx1ZUNvdW50IGRlZmF1bHRzIHRvIDYsIGJ1dCBjYW4gYmUgY29udHJvbGxlZCBpblxuICAgICAqIHRoZSBiYWNrZW5kIGFzIHdlbGwuXG4gICAgICovXG4gICAgZGVjcmVhc2VWaXNpYmxlVmFsdWVzKGZhY2V0OiBGYWNldCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogUGVyc2lzdHMgdGhlIGZhY2V0IHN0YXRlIGFuZCBpbml0aWFsaXplcyB0aGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSB0b3BcbiAgICAgKiBhbmQgbWF4IHZpc2libGUgdmFsdWVzLlxuICAgICAqL1xuICAgIHByb3RlY3RlZCBpbml0aWFsaXplKGZhY2V0OiBGYWNldCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgc3RhdGUgb2YgdGhlIGZhY2V0IGluIHRoZSBsb2NhbCBmYWNldCBtYXAuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKGZhY2V0OiBGYWNldCwgcHJvcGVydHk6IEZhY2V0Q29sbGFwc2VTdGF0ZSk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGhhc1N0YXRlKGZhY2V0OiBGYWNldCk6IGJvb2xlYW47XG4gICAgZ2V0TGlua1BhcmFtcyhxdWVyeTogc3RyaW5nKToge1xuICAgICAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XG4gICAgfTtcbn1cbiJdfQ==