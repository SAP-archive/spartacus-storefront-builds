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
        var _a;
        const topFacets = facet.topValueCount > 0 ? facet.topValueCount : ((_a = facet.values) === null || _a === void 0 ? void 0 : _a.length) || 0;
        if (!this.hasState(facet)) {
            this.facetState.set(facet.name, new BehaviorSubject({
                topVisible: topFacets,
                maxVisible: topFacets,
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
        return {
            // to avoid encoding issues with facets that have space (' ') in their name,
            // we replace the decoded '+' back to empty space ' '.
            // For more, see https://github.com/SAP/spartacus/issues/7348
            query: new HttpUrlEncodingCodec().decodeValue(query).replace(/\+/g, ' '),
        };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9zZXJ2aWNlcy9mYWNldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFFTCx3QkFBd0IsR0FFekIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBRTlEOzs7O0dBSUc7QUFJSCxJQUFhLFlBQVksR0FBekIsTUFBYSxZQUFZO0lBTXZCLFlBQXNCLG1CQUF3QztRQUF4Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBTDlEOztXQUVHO1FBQ08sZUFBVSxHQUFHLElBQUksR0FBRyxFQUErQyxDQUFDO1FBSTlFOzs7Ozs7V0FNRztRQUNILGVBQVUsR0FBMEIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQzFFLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxFQUFFO1lBQ2hCLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQ0gsQ0FBQztJQWIrRCxDQUFDO0lBZWxFOzs7O09BSUc7SUFDSCxRQUFRLENBQUMsS0FBWTtRQUNuQixJQUFJ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TUFBTTtLQUNuQixDQUFDO0dBQ1csWUFBWSxDQXNIeEI7U0F0SFksWUFBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBVcmxFbmNvZGluZ0NvZGVjIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRmFjZXQgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQge1xuICBGYWNldENvbGxhcHNlU3RhdGUsXG4gIEZhY2V0R3JvdXBDb2xsYXBzZWRTdGF0ZSxcbiAgRmFjZXRMaXN0LFxufSBmcm9tICcuLi9mYWNldC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9kdWN0RmFjZXRTZXJ2aWNlIH0gZnJvbSAnLi9wcm9kdWN0LWZhY2V0LnNlcnZpY2UnO1xuXG4vKipcbiAqIFByb3ZpZGVzIGFjY2VzcyB0byB0aGUgZmFjZXRzIGFzIHdlbGwgYXMgdGhlaXIgVUkgc3RhdGUuIFRoZSBVSSBzdGF0ZVxuICogcmVwcmVzZW50cyB1c2VyIHJlbGF0ZWQgY2hhbmdlcyBvbiB0aGUgZmFjZXRzLCBzdWNoIGFzIGV4cGFuZGluZyBvclxuICogY29sbGFwc2luZyBhIGZhY2V0IGdyb3VwIG9yIGV4cGFuZGluZyB0aGUgbnVtYmVyIG9mIF92aXNpYmxlXyBmYWNldCB2YWx1ZXMuXG4gKi9cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBGYWNldFNlcnZpY2Uge1xuICAvKipcbiAgICogQW4gaW50ZXJuYWwgbWFwIHdoZXJlIHdlIGtlZXAgdGhlIFVJIHN0YXRlIG9mIHRoZSBmYWNldHMuXG4gICAqL1xuICBwcm90ZWN0ZWQgZmFjZXRTdGF0ZSA9IG5ldyBNYXA8c3RyaW5nLCBCZWhhdmlvclN1YmplY3Q8RmFjZXRDb2xsYXBzZVN0YXRlPj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcHJvZHVjdEZhY2V0U2VydmljZTogUHJvZHVjdEZhY2V0U2VydmljZSkge31cblxuICAvKipcbiAgICogT2JzZXJ2ZXMgdGhlIGZhY2V0cyBmb3IgdGhlIGdpdmVuIHBhZ2UgYW5kIGNvbmZpZ3VyZXMgdGhlIGluaXRpYWwgVUkgc3RhdGUuXG4gICAqXG4gICAqIEZhY2V0cyBhcmUgY29uZmlndXJlZCBvbiBlYWNoIGVtaXNzaW9uIHNvIHRoYXQgd2Uga2VlcCB0aGUgZmFjZXQgVUkgc3RhdGUuXG4gICAqIFRoaXMgaXMgbWFpbmx5IGRvbmUgdG8ga2VlcCB0aGUgc3RhdGUgZHVyaW5nIHVzYWdlIG9mIHRoZSBmYWNldCwgYnV0IGFsc29cbiAgICogYmVuZWZpdGlhbCB3aGVuIHRoZSBmYWNldHMgYXJlIHJlYnVpbGQgd2hpbGUgdXNpbmcgdGhlbS5cbiAgICovXG4gIGZhY2V0TGlzdCQ6IE9ic2VydmFibGU8RmFjZXRMaXN0PiA9IHRoaXMucHJvZHVjdEZhY2V0U2VydmljZS5mYWNldExpc3QkLnBpcGUoXG4gICAgdGFwKChmYWNldExpc3QpID0+IHtcbiAgICAgIGZhY2V0TGlzdC5mYWNldHMuZm9yRWFjaCgoZmFjZXQpID0+IHRoaXMuaW5pdGlhbGl6ZShmYWNldCkpO1xuICAgIH0pXG4gICk7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG9ic2VydmVkIFVJIHN0YXRlIGZvciB0aGUgZmFjZXQuXG4gICAqXG4gICAqIFRoZSBzdGF0ZSBpcyBpbml0aWFsaXplZCB1c2luZyB0aGUgYGluaXRpYWxpemVgIG1ldGhvZC5cbiAgICovXG4gIGdldFN0YXRlKGZhY2V0OiBGYWNldCk6IE9ic2VydmFibGU8RmFjZXRDb2xsYXBzZVN0YXRlPiB7XG4gICAgdGhpcy5pbml0aWFsaXplKGZhY2V0KTtcbiAgICByZXR1cm4gdGhpcy5mYWNldFN0YXRlLmdldChmYWNldC5uYW1lKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBVSSBzdGF0ZSBmb3IgdGhlIGZhY2V0LlxuICAgKlxuICAgKiBUaGUgc3RhdGUgaXMgaW5pdGlhbGl6ZWQgdXNpbmcgdGhlIGBpbml0aWFsaXplYCBtZXRob2QuXG4gICAqL1xuICBwcm90ZWN0ZWQgZ2V0U3RhdGVTbmFwc2hvdChmYWNldDogRmFjZXQpOiBGYWNldENvbGxhcHNlU3RhdGUge1xuICAgIHJldHVybiAodGhpcy5nZXRTdGF0ZShmYWNldCkgYXMgQmVoYXZpb3JTdWJqZWN0PEZhY2V0Q29sbGFwc2VTdGF0ZT4pLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvZ2dsZXMgdGhlIGZhY2V0IGV4cGFuZGVkIHN0YXRlLiBJZiB0aGUgZXhwYW5kZWQgc3RhdGUgYmVjb21lcyBmYWxzZSxcbiAgICogdGhlIHZpc2libGUgdmFsdWVzIHdpbGwgZGVjcmVhc2UgdG8gdGhlIHRvcCB2YWx1ZXMgb25seS5cbiAgICpcbiAgICogSWYgdGhlIG9wdGlvbmFsIHZhbHVlIGFyZ3VtZW50IGlzIHByb3ZpZGVkIHRoZSBleHBhbmRlZCBzdGF0ZSB3aWxsIGJlIHNldFxuICAgKiB0byB0aGlzIHZhbHVlLCByZWdhcmRsZXNzIG9mIHRoZSBjdXJyZW50IGBleHBhbmRlZGAgc3RhdGUuXG4gICAqL1xuICB0b2dnbGUoZmFjZXQ6IEZhY2V0LCBpc0V4cGFuZGVkOiBib29sZWFuKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLmdldFN0YXRlU25hcHNob3QoZmFjZXQpO1xuXG4gICAgY29uc3QgdG9nZ2xlZFN0YXRlID0ge1xuICAgICAgdG9nZ2xlZDogaXNFeHBhbmRlZFxuICAgICAgICA/IEZhY2V0R3JvdXBDb2xsYXBzZWRTdGF0ZS5DT0xMQVBTRURcbiAgICAgICAgOiBGYWNldEdyb3VwQ29sbGFwc2VkU3RhdGUuRVhQQU5ERUQsXG4gICAgfSBhcyBGYWNldENvbGxhcHNlU3RhdGU7XG5cbiAgICBpZiAodG9nZ2xlZFN0YXRlLnRvZ2dsZWQgPT09IEZhY2V0R3JvdXBDb2xsYXBzZWRTdGF0ZS5DT0xMQVBTRUQpIHtcbiAgICAgIHRvZ2dsZWRTdGF0ZS5tYXhWaXNpYmxlID0gc3RhdGUudG9wVmlzaWJsZTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVN0YXRlKGZhY2V0LCB0b2dnbGVkU3RhdGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluY3JlYXNlcyB0aGUgdmlzaWJsZSB2YWx1ZXMgdG8gdGhlIG1heGltdW0gdmFsdWVzIG9mIHRoZSBmYWNldC5cbiAgICovXG4gIGluY3JlYXNlVmlzaWJsZVZhbHVlcyhmYWNldDogRmFjZXQpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKGZhY2V0LCB7IG1heFZpc2libGU6IGZhY2V0LnZhbHVlcy5sZW5ndGggfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVjcmVhc2VzIHRoZSB2aXNpYmxlIHZhbHVlcyB0byB0aGUgdG9wVmFsdWVDb3VudC5cbiAgICpcbiAgICogVGhlIHRvcFZhbHVlQ291bnQgZGVmYXVsdHMgdG8gNiwgYnV0IGNhbiBiZSBjb250cm9sbGVkIGluXG4gICAqIHRoZSBiYWNrZW5kIGFzIHdlbGwuXG4gICAqL1xuICBkZWNyZWFzZVZpc2libGVWYWx1ZXMoZmFjZXQ6IEZhY2V0KTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVTdGF0ZShmYWNldCwgeyBtYXhWaXNpYmxlOiBmYWNldC50b3BWYWx1ZUNvdW50IH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFBlcnNpc3RzIHRoZSBmYWNldCBzdGF0ZSBhbmQgaW5pdGlhbGl6ZXMgdGhlIGRlZmF1bHQgdmFsdWVzIGZvciB0aGUgdG9wXG4gICAqIGFuZCBtYXggdmlzaWJsZSB2YWx1ZXMuXG4gICAqL1xuICBwcm90ZWN0ZWQgaW5pdGlhbGl6ZShmYWNldDogRmFjZXQpOiB2b2lkIHtcbiAgICBjb25zdCB0b3BGYWNldHMgPVxuICAgICAgZmFjZXQudG9wVmFsdWVDb3VudCA+IDAgPyBmYWNldC50b3BWYWx1ZUNvdW50IDogZmFjZXQudmFsdWVzPy5sZW5ndGggfHwgMDtcbiAgICBpZiAoIXRoaXMuaGFzU3RhdGUoZmFjZXQpKSB7XG4gICAgICB0aGlzLmZhY2V0U3RhdGUuc2V0KFxuICAgICAgICBmYWNldC5uYW1lLFxuICAgICAgICBuZXcgQmVoYXZpb3JTdWJqZWN0KHtcbiAgICAgICAgICB0b3BWaXNpYmxlOiB0b3BGYWNldHMsXG4gICAgICAgICAgbWF4VmlzaWJsZTogdG9wRmFjZXRzLFxuICAgICAgICB9IGFzIEZhY2V0Q29sbGFwc2VTdGF0ZSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHN0YXRlIG9mIHRoZSBmYWNldCBpbiB0aGUgbG9jYWwgZmFjZXQgbWFwLlxuICAgKi9cbiAgcHJvdGVjdGVkIHVwZGF0ZVN0YXRlKGZhY2V0OiBGYWNldCwgcHJvcGVydHk6IEZhY2V0Q29sbGFwc2VTdGF0ZSk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXRlID0geyAuLi50aGlzLmdldFN0YXRlU25hcHNob3QoZmFjZXQpLCAuLi5wcm9wZXJ0eSB9O1xuICAgIHRoaXMuZmFjZXRTdGF0ZS5nZXQoZmFjZXQubmFtZSkubmV4dChzdGF0ZSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgaGFzU3RhdGUoZmFjZXQ6IEZhY2V0KTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZmFjZXRTdGF0ZS5oYXMoZmFjZXQubmFtZSk7XG4gIH1cblxuICBnZXRMaW5rUGFyYW1zKHF1ZXJ5OiBzdHJpbmcpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcbiAgICByZXR1cm4ge1xuICAgICAgLy8gdG8gYXZvaWQgZW5jb2RpbmcgaXNzdWVzIHdpdGggZmFjZXRzIHRoYXQgaGF2ZSBzcGFjZSAoJyAnKSBpbiB0aGVpciBuYW1lLFxuICAgICAgLy8gd2UgcmVwbGFjZSB0aGUgZGVjb2RlZCAnKycgYmFjayB0byBlbXB0eSBzcGFjZSAnICcuXG4gICAgICAvLyBGb3IgbW9yZSwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9TQVAvc3BhcnRhY3VzL2lzc3Vlcy83MzQ4XG4gICAgICBxdWVyeTogbmV3IEh0dHBVcmxFbmNvZGluZ0NvZGVjKCkuZGVjb2RlVmFsdWUocXVlcnkpLnJlcGxhY2UoL1xcKy9nLCAnICcpLFxuICAgIH07XG4gIH1cbn1cbiJdfQ==