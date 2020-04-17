import { __decorate } from "tslib";
import { HttpUrlEncodingCodec } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FacetGroupCollapsedState, } from '../facet.model';
import { ProductFacetService } from './product-facet.service';
import * as i0 from "@angular/core";
import * as i1 from "./product-facet.service";
/**
 * Provides access to the facets as well as their UI state. The UI state
 * represents user related changes on the facets, such as expanding or
 * collapsing a facet group or expanding the number of _visible_ facet values.
 */
let FacetService = class FacetService {
    constructor(productFacetService) {
        this.productFacetService = productFacetService;
        /**
         * An internal map where we keep the UI state of the facets.
         */
        this.facetState = new Map();
        /**
         * Observes the facets for the given page and configures the initial UI state.
         *
         * Facets are configured on each emission so that we keep the facet UI state.
         * This is mainly done to keep the state during usage of the facet, but also
         * benefitial when the facets are rebuild while using them.
         */
        this.facetList$ = this.productFacetService.facetList$.pipe(tap((facetList) => {
            facetList.facets.forEach((facet) => this.initialize(facet));
        }));
    }
    /**
     * Returns the observed UI state for the facet.
     *
     * The state is initialized using the `initialize` method.
     */
    getState(facet) {
        this.initialize(facet);
        return this.facetState.get(facet.name);
    }
    /**
     * Returns the UI state for the facet.
     *
     * The state is initialized using the `initialize` method.
     */
    getStateSnapshot(facet) {
        return this.getState(facet).value;
    }
    /**
     * Toggles the facet expanded state. If the expanded state becomes false,
     * the visible values will decrease to the top values only.
     *
     * If the optional value argument is provided the expanded state will be set
     * to this value, regardless of the current `expanded` state.
     */
    toggle(facet, isExpanded) {
        const state = this.getStateSnapshot(facet);
        const toggledState = {
            toggled: isExpanded
                ? FacetGroupCollapsedState.COLLAPSED
                : FacetGroupCollapsedState.EXPANDED,
        };
        if (toggledState.toggled === FacetGroupCollapsedState.COLLAPSED) {
            toggledState.maxVisible = state.topVisible;
        }
        this.updateState(facet, toggledState);
    }
    /**
     * Increases the visible values to the maximum values of the facet.
     */
    increaseVisibleValues(facet) {
        this.updateState(facet, { maxVisible: facet.values.length });
    }
    /**
     * Decreases the visible values to the topValueCount.
     *
     * The topValueCount defaults to 6, but can be controlled in
     * the backend as well.
     */
    decreaseVisibleValues(facet) {
        this.updateState(facet, { maxVisible: facet.topValueCount });
    }
    /**
     * Persists the facet state and initializes the default values for the top
     * and max visible values.
     */
    initialize(facet) {
        if (!this.hasState(facet)) {
            this.facetState.set(facet.name, new BehaviorSubject({
                topVisible: facet.topValueCount || 0,
                maxVisible: facet.topValueCount || 0,
            }));
        }
    }
    /**
     * Updates the state of the facet in the local facet map.
     */
    updateState(facet, property) {
        const state = Object.assign(Object.assign({}, this.getStateSnapshot(facet)), property);
        this.facetState.get(facet.name).next(state);
    }
    hasState(facet) {
        return this.facetState.has(facet.name);
    }
    getLinkParams(query) {
        return { query: new HttpUrlEncodingCodec().decodeValue(query) };
    }
};
FacetService.ctorParameters = () => [
    { type: ProductFacetService }
];
FacetService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FacetService_Factory() { return new FacetService(i0.ɵɵinject(i1.ProductFacetService)); }, token: FacetService, providedIn: "root" });
FacetService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], FacetService);
export { FacetService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9zZXJ2aWNlcy9mYWNldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFFTCx3QkFBd0IsR0FFekIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBRTlEOzs7O0dBSUc7QUFJSCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBTXZCLFlBQXNCLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBTDlEOztXQUVHO1FBQ08sZUFBVSxHQUFHLElBQUksR0FBRyxFQUErQyxDQUFDO1FBSTlFOzs7Ozs7V0FNRztRQUNILGVBQVUsR0FBMEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQzFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2hCLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQWIrRCxDQUFDO0lBZWxFOzs7O09BSUc7SUFDSCxRQUFRLENBQUMsS0FBWTtRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFFRDs7OztPQUlHO0lBQ08sZ0JBQWdCLENBQUMsS0FBWTtRQUNyQyxPQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUF5QyxDQUFDLEtBQUssQ0FBQztJQUM3RSxDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0gsTUFBTSxDQUFDLEtBQVksRUFBRSxVQUFtQjtRQUN0QyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFM0MsTUFBTSxZQUFZLEdBQUc7WUFDbkIsT0FBTyxFQUFFLFVBQVU7Z0JBQ2pCLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQyxTQUFTO2dCQUNwQyxDQUFDLENBQUMsd0JBQXdCLENBQUMsUUFBUTtTQUNoQixDQUFDO1FBRXhCLElBQUksWUFBWSxDQUFDLE9BQU8sS0FBSyx3QkFBd0IsQ0FBQyxTQUFTLEVBQUU7WUFDL0QsWUFBWSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDO1NBQzVDO1FBRUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUVEOztPQUVHO0lBQ0gscUJBQXFCLENBQUMsS0FBWTtRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDL0QsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gscUJBQXFCLENBQUMsS0FBWTtRQUNoQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztJQUMvRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ08sVUFBVSxDQUFDLEtBQVk7UUFDL0IsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDekIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQ2pCLEtBQUssQ0FBQyxJQUFJLEVBQ1YsSUFBSSxlQUFlLENBQUM7Z0JBQ2xCLFVBQVUsRUFBRSxLQUFLLENBQUMsYUFBYSxJQUFJLENBQUM7Z0JBQ3BDLFVBQVUsRUFBRSxLQUFLLENBQUMsYUFBYSxJQUFJLENBQUM7YUFDZixDQUFDLENBQ3pCLENBQUM7U0FDSDtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNPLFdBQVcsQ0FBQyxLQUFZLEVBQUUsUUFBNEI7UUFDOUQsTUFBTSxLQUFLLG1DQUFRLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsR0FBSyxRQUFRLENBQUUsQ0FBQztRQUMvRCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzlDLENBQUM7SUFFUyxRQUFRLENBQUMsS0FBWTtRQUM3QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBRUQsYUFBYSxDQUFDLEtBQWE7UUFDekIsT0FBTyxFQUFFLEtBQUssRUFBRSxJQUFJLG9CQUFvQixFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7SUFDbEUsQ0FBQztDQUNGLENBQUE7O1lBekc0QyxtQkFBbUI7OztBQU5uRCxZQUFZO0lBSHhCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxZQUFZLENBK0d4QjtTQS9HWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFVybEVuY29kaW5nQ29kZWMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWNldCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEZhY2V0Q29sbGFwc2VTdGF0ZSxcbiAgRmFjZXRHcm91cENvbGxhcHNlZFN0YXRlLFxuICBGYWNldExpc3QsXG59IGZyb20gJy4uL2ZhY2V0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RGYWNldFNlcnZpY2UgfSBmcm9tICcuL3Byb2R1Y3QtZmFjZXQuc2VydmljZSc7XG5cbi8qKlxuICogUHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBmYWNldHMgYXMgd2VsbCBhcyB0aGVpciBVSSBzdGF0ZS4gVGhlIFVJIHN0YXRlXG4gKiByZXByZXNlbnRzIHVzZXIgcmVsYXRlZCBjaGFuZ2VzIG9uIHRoZSBmYWNldHMsIHN1Y2ggYXMgZXhwYW5kaW5nIG9yXG4gKiBjb2xsYXBzaW5nIGEgZmFjZXQgZ3JvdXAgb3IgZXhwYW5kaW5nIHRoZSBudW1iZXIgb2YgX3Zpc2libGVfIGZhY2V0IHZhbHVlcy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0U2VydmljZSB7XG4gIC8qKlxuICAgKiBBbiBpbnRlcm5hbCBtYXAgd2hlcmUgd2Uga2VlcCB0aGUgVUkgc3RhdGUgb2YgdGhlIGZhY2V0cy5cbiAgICovXG4gIHByb3RlY3RlZCBmYWNldFN0YXRlID0gbmV3IE1hcDxzdHJpbmcsIEJlaGF2aW9yU3ViamVjdDxGYWNldENvbGxhcHNlU3RhdGU+PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBwcm9kdWN0RmFjZXRTZXJ2aWNlOiBQcm9kdWN0RmFjZXRTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBPYnNlcnZlcyB0aGUgZmFjZXRzIGZvciB0aGUgZ2l2ZW4gcGFnZSBhbmQgY29uZmlndXJlcyB0aGUgaW5pdGlhbCBVSSBzdGF0ZS5cbiAgICpcbiAgICogRmFjZXRzIGFyZSBjb25maWd1cmVkIG9uIGVhY2ggZW1pc3Npb24gc28gdGhhdCB3ZSBrZWVwIHRoZSBmYWNldCBVSSBzdGF0ZS5cbiAgICogVGhpcyBpcyBtYWlubHkgZG9uZSB0byBrZWVwIHRoZSBzdGF0ZSBkdXJpbmcgdXNhZ2Ugb2YgdGhlIGZhY2V0LCBidXQgYWxzb1xuICAgKiBiZW5lZml0aWFsIHdoZW4gdGhlIGZhY2V0cyBhcmUgcmVidWlsZCB3aGlsZSB1c2luZyB0aGVtLlxuICAgKi9cbiAgZmFjZXRMaXN0JDogT2JzZXJ2YWJsZTxGYWNldExpc3Q+ID0gdGhpcy5wcm9kdWN0RmFjZXRTZXJ2aWNlLmZhY2V0TGlzdCQucGlwZShcbiAgICB0YXAoKGZhY2V0TGlzdCkgPT4ge1xuICAgICAgZmFjZXRMaXN0LmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gdGhpcy5pbml0aWFsaXplKGZhY2V0KSk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2JzZXJ2ZWQgVUkgc3RhdGUgZm9yIHRoZSBmYWNldC5cbiAgICpcbiAgICogVGhlIHN0YXRlIGlzIGluaXRpYWxpemVkIHVzaW5nIHRoZSBgaW5pdGlhbGl6ZWAgbWV0aG9kLlxuICAgKi9cbiAgZ2V0U3RhdGUoZmFjZXQ6IEZhY2V0KTogT2JzZXJ2YWJsZTxGYWNldENvbGxhcHNlU3RhdGU+IHtcbiAgICB0aGlzLmluaXRpYWxpemUoZmFjZXQpO1xuICAgIHJldHVybiB0aGlzLmZhY2V0U3RhdGUuZ2V0KGZhY2V0Lm5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIFVJIHN0YXRlIGZvciB0aGUgZmFjZXQuXG4gICAqXG4gICAqIFRoZSBzdGF0ZSBpcyBpbml0aWFsaXplZCB1c2luZyB0aGUgYGluaXRpYWxpemVgIG1ldGhvZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRTdGF0ZVNuYXBzaG90KGZhY2V0OiBGYWNldCk6IEZhY2V0Q29sbGFwc2VTdGF0ZSB7XG4gICAgcmV0dXJuICh0aGlzLmdldFN0YXRlKGZhY2V0KSBhcyBCZWhhdmlvclN1YmplY3Q8RmFjZXRDb2xsYXBzZVN0YXRlPikudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZmFjZXQgZXhwYW5kZWQgc3RhdGUuIElmIHRoZSBleHBhbmRlZCBzdGF0ZSBiZWNvbWVzIGZhbHNlLFxuICAgKiB0aGUgdmlzaWJsZSB2YWx1ZXMgd2lsbCBkZWNyZWFzZSB0byB0aGUgdG9wIHZhbHVlcyBvbmx5LlxuICAgKlxuICAgKiBJZiB0aGUgb3B0aW9uYWwgdmFsdWUgYXJndW1lbnQgaXMgcHJvdmlkZWQgdGhlIGV4cGFuZGVkIHN0YXRlIHdpbGwgYmUgc2V0XG4gICAqIHRvIHRoaXMgdmFsdWUsIHJlZ2FyZGxlc3Mgb2YgdGhlIGN1cnJlbnQgYGV4cGFuZGVkYCBzdGF0ZS5cbiAgICovXG4gIHRvZ2dsZShmYWNldDogRmFjZXQsIGlzRXhwYW5kZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGVTbmFwc2hvdChmYWNldCk7XG5cbiAgICBjb25zdCB0b2dnbGVkU3RhdGUgPSB7XG4gICAgICB0b2dnbGVkOiBpc0V4cGFuZGVkXG4gICAgICAgID8gRmFjZXRHcm91cENvbGxhcHNlZFN0YXRlLkNPTExBUFNFRFxuICAgICAgICA6IEZhY2V0R3JvdXBDb2xsYXBzZWRTdGF0ZS5FWFBBTkRFRCxcbiAgICB9IGFzIEZhY2V0Q29sbGFwc2VTdGF0ZTtcblxuICAgIGlmICh0b2dnbGVkU3RhdGUudG9nZ2xlZCA9PT0gRmFjZXRHcm91cENvbGxhcHNlZFN0YXRlLkNPTExBUFNFRCkge1xuICAgICAgdG9nZ2xlZFN0YXRlLm1heFZpc2libGUgPSBzdGF0ZS50b3BWaXNpYmxlO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU3RhdGUoZmFjZXQsIHRvZ2dsZWRTdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2VzIHRoZSB2aXNpYmxlIHZhbHVlcyB0byB0aGUgbWF4aW11bSB2YWx1ZXMgb2YgdGhlIGZhY2V0LlxuICAgKi9cbiAgaW5jcmVhc2VWaXNpYmxlVmFsdWVzKGZhY2V0OiBGYWNldCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoZmFjZXQsIHsgbWF4VmlzaWJsZTogZmFjZXQudmFsdWVzLmxlbmd0aCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNyZWFzZXMgdGhlIHZpc2libGUgdmFsdWVzIHRvIHRoZSB0b3BWYWx1ZUNvdW50LlxuICAgKlxuICAgKiBUaGUgdG9wVmFsdWVDb3VudCBkZWZhdWx0cyB0byA2LCBidXQgY2FuIGJlIGNvbnRyb2xsZWQgaW5cbiAgICogdGhlIGJhY2tlbmQgYXMgd2VsbC5cbiAgICovXG4gIGRlY3JlYXNlVmlzaWJsZVZhbHVlcyhmYWNldDogRmFjZXQpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKGZhY2V0LCB7IG1heFZpc2libGU6IGZhY2V0LnRvcFZhbHVlQ291bnQgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGVyc2lzdHMgdGhlIGZhY2V0IHN0YXRlIGFuZCBpbml0aWFsaXplcyB0aGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSB0b3BcbiAgICogYW5kIG1heCB2aXNpYmxlIHZhbHVlcy5cbiAgICovXG4gIHByb3RlY3RlZCBpbml0aWFsaXplKGZhY2V0OiBGYWNldCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNTdGF0ZShmYWNldCkpIHtcbiAgICAgIHRoaXMuZmFjZXRTdGF0ZS5zZXQoXG4gICAgICAgIGZhY2V0Lm5hbWUsXG4gICAgICAgIG5ldyBCZWhhdmlvclN1YmplY3Qoe1xuICAgICAgICAgIHRvcFZpc2libGU6IGZhY2V0LnRvcFZhbHVlQ291bnQgfHwgMCxcbiAgICAgICAgICBtYXhWaXNpYmxlOiBmYWNldC50b3BWYWx1ZUNvdW50IHx8IDAsXG4gICAgICAgIH0gYXMgRmFjZXRDb2xsYXBzZVN0YXRlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgc3RhdGUgb2YgdGhlIGZhY2V0IGluIHRoZSBsb2NhbCBmYWNldCBtYXAuXG4gICAqL1xuICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoZmFjZXQ6IEZhY2V0LCBwcm9wZXJ0eTogRmFjZXRDb2xsYXBzZVN0YXRlKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhdGUgPSB7IC4uLnRoaXMuZ2V0U3RhdGVTbmFwc2hvdChmYWNldCksIC4uLnByb3BlcnR5IH07XG4gICAgdGhpcy5mYWNldFN0YXRlLmdldChmYWNldC5uYW1lKS5uZXh0KHN0YXRlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYXNTdGF0ZShmYWNldDogRmFjZXQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldFN0YXRlLmhhcyhmYWNldC5uYW1lKTtcbiAgfVxuXG4gIGdldExpbmtQYXJhbXMocXVlcnk6IHN0cmluZykge1xuICAgIHJldHVybiB7IHF1ZXJ5OiBuZXcgSHR0cFVybEVuY29kaW5nQ29kZWMoKS5kZWNvZGVWYWx1ZShxdWVyeSkgfTtcbiAgfVxufVxuIl19