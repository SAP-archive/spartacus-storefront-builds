import { __assign, __decorate } from "tslib";
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
var FacetService = /** @class */ (function () {
    function FacetService(productFacetService) {
        var _this = this;
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
        this.facetList$ = this.productFacetService.facetList$.pipe(tap(function (facetList) {
            facetList.facets.forEach(function (facet) { return _this.initialize(facet); });
        }));
    }
    /**
     * Returns the observed UI state for the facet.
     *
     * The state is initialized using the `initialize` method.
     */
    FacetService.prototype.getState = function (facet) {
        this.initialize(facet);
        return this.facetState.get(facet.name);
    };
    /**
     * Returns the UI state for the facet.
     *
     * The state is initialized using the `initialize` method.
     */
    FacetService.prototype.getStateSnapshot = function (facet) {
        return this.getState(facet).value;
    };
    /**
     * Toggles the facet expanded state. If the expanded state becomes false,
     * the visible values will decrease to the top values only.
     *
     * If the optional value argument is provided the expanded state will be set
     * to this value, regardless of the current `expanded` state.
     */
    FacetService.prototype.toggle = function (facet, isExpanded) {
        var state = this.getStateSnapshot(facet);
        var toggledState = {
            toggled: isExpanded
                ? FacetGroupCollapsedState.COLLAPSED
                : FacetGroupCollapsedState.EXPANDED,
        };
        if (toggledState.toggled === FacetGroupCollapsedState.COLLAPSED) {
            toggledState.maxVisible = state.topVisible;
        }
        this.updateState(facet, toggledState);
    };
    /**
     * Increases the visible values to the maximum values of the facet.
     */
    FacetService.prototype.increaseVisibleValues = function (facet) {
        this.updateState(facet, { maxVisible: facet.values.length });
    };
    /**
     * Decreases the visible values to the topValueCount.
     *
     * The topValueCount defaults to 6, but can be controlled in
     * the backend as well.
     */
    FacetService.prototype.decreaseVisibleValues = function (facet) {
        this.updateState(facet, { maxVisible: facet.topValueCount });
    };
    /**
     * Persists the facet state and initializes the default values for the top
     * and max visible values.
     */
    FacetService.prototype.initialize = function (facet) {
        var _a;
        var topFacets = facet.topValueCount > 0 ? facet.topValueCount : ((_a = facet.values) === null || _a === void 0 ? void 0 : _a.length) || 0;
        if (!this.hasState(facet)) {
            this.facetState.set(facet.name, new BehaviorSubject({
                topVisible: topFacets,
                maxVisible: topFacets,
            }));
        }
    };
    /**
     * Updates the state of the facet in the local facet map.
     */
    FacetService.prototype.updateState = function (facet, property) {
        var state = __assign(__assign({}, this.getStateSnapshot(facet)), property);
        this.facetState.get(facet.name).next(state);
    };
    FacetService.prototype.hasState = function (facet) {
        return this.facetState.has(facet.name);
    };
    FacetService.prototype.getLinkParams = function (query) {
        return {
            // to avoid encoding issues with facets that have space (' ') in their name,
            // we replace the decoded '+' back to empty space ' '.
            // For more, see https://github.com/SAP/spartacus/issues/7348
            query: new HttpUrlEncodingCodec().decodeValue(query).replace(/\+/g, ' '),
        };
    };
    FacetService.ctorParameters = function () { return [
        { type: ProductFacetService }
    ]; };
    FacetService.ɵprov = i0.ɵɵdefineInjectable({ factory: function FacetService_Factory() { return new FacetService(i0.ɵɵinject(i1.ProductFacetService)); }, token: FacetService, providedIn: "root" });
    FacetService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], FacetService);
    return FacetService;
}());
export { FacetService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjZXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImNtcy1jb21wb25lbnRzL3Byb2R1Y3QvcHJvZHVjdC1saXN0L3Byb2R1Y3QtZmFjZXQtbmF2aWdhdGlvbi9zZXJ2aWNlcy9mYWNldC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTNDLE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFDbkQsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFFTCx3QkFBd0IsR0FFekIsTUFBTSxnQkFBZ0IsQ0FBQztBQUN4QixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7O0FBRTlEOzs7O0dBSUc7QUFJSDtJQU1FLHNCQUFzQixtQkFBd0M7UUFBOUQsaUJBQWtFO1FBQTVDLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBcUI7UUFMOUQ7O1dBRUc7UUFDTyxlQUFVLEdBQUcsSUFBSSxHQUFHLEVBQStDLENBQUM7UUFJOUU7Ozs7OztXQU1HO1FBQ0gsZUFBVSxHQUEwQixJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FDMUUsR0FBRyxDQUFDLFVBQUMsU0FBUztZQUNaLFNBQVMsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxJQUFLLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUNILENBQUM7SUFiK0QsQ0FBQztJQWVsRTs7OztPQUlHO0lBQ0gsK0JBQVEsR0FBUixVQUFTLEtBQVk7UUFDbkIsSUFBSSxDQUFDLFVBQVUs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LFlBQVk7UUFIeEIsVUFBVSxDQUFDO1lBQ1YsVUFBVSxFQUFFLE1BQU07U0FDbkIsQ0FBQztPQUNXLFlBQVksQ0FzSHhCO3VCQTFJRDtDQTBJQyxBQXRIRCxJQXNIQztTQXRIWSxZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cFVybEVuY29kaW5nQ29kZWMgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBGYWNldCB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7XG4gIEZhY2V0Q29sbGFwc2VTdGF0ZSxcbiAgRmFjZXRHcm91cENvbGxhcHNlZFN0YXRlLFxuICBGYWNldExpc3QsXG59IGZyb20gJy4uL2ZhY2V0Lm1vZGVsJztcbmltcG9ydCB7IFByb2R1Y3RGYWNldFNlcnZpY2UgfSBmcm9tICcuL3Byb2R1Y3QtZmFjZXQuc2VydmljZSc7XG5cbi8qKlxuICogUHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBmYWNldHMgYXMgd2VsbCBhcyB0aGVpciBVSSBzdGF0ZS4gVGhlIFVJIHN0YXRlXG4gKiByZXByZXNlbnRzIHVzZXIgcmVsYXRlZCBjaGFuZ2VzIG9uIHRoZSBmYWNldHMsIHN1Y2ggYXMgZXhwYW5kaW5nIG9yXG4gKiBjb2xsYXBzaW5nIGEgZmFjZXQgZ3JvdXAgb3IgZXhwYW5kaW5nIHRoZSBudW1iZXIgb2YgX3Zpc2libGVfIGZhY2V0IHZhbHVlcy5cbiAqL1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIEZhY2V0U2VydmljZSB7XG4gIC8qKlxuICAgKiBBbiBpbnRlcm5hbCBtYXAgd2hlcmUgd2Uga2VlcCB0aGUgVUkgc3RhdGUgb2YgdGhlIGZhY2V0cy5cbiAgICovXG4gIHByb3RlY3RlZCBmYWNldFN0YXRlID0gbmV3IE1hcDxzdHJpbmcsIEJlaGF2aW9yU3ViamVjdDxGYWNldENvbGxhcHNlU3RhdGU+PigpO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBwcm9kdWN0RmFjZXRTZXJ2aWNlOiBQcm9kdWN0RmFjZXRTZXJ2aWNlKSB7fVxuXG4gIC8qKlxuICAgKiBPYnNlcnZlcyB0aGUgZmFjZXRzIGZvciB0aGUgZ2l2ZW4gcGFnZSBhbmQgY29uZmlndXJlcyB0aGUgaW5pdGlhbCBVSSBzdGF0ZS5cbiAgICpcbiAgICogRmFjZXRzIGFyZSBjb25maWd1cmVkIG9uIGVhY2ggZW1pc3Npb24gc28gdGhhdCB3ZSBrZWVwIHRoZSBmYWNldCBVSSBzdGF0ZS5cbiAgICogVGhpcyBpcyBtYWlubHkgZG9uZSB0byBrZWVwIHRoZSBzdGF0ZSBkdXJpbmcgdXNhZ2Ugb2YgdGhlIGZhY2V0LCBidXQgYWxzb1xuICAgKiBiZW5lZml0aWFsIHdoZW4gdGhlIGZhY2V0cyBhcmUgcmVidWlsZCB3aGlsZSB1c2luZyB0aGVtLlxuICAgKi9cbiAgZmFjZXRMaXN0JDogT2JzZXJ2YWJsZTxGYWNldExpc3Q+ID0gdGhpcy5wcm9kdWN0RmFjZXRTZXJ2aWNlLmZhY2V0TGlzdCQucGlwZShcbiAgICB0YXAoKGZhY2V0TGlzdCkgPT4ge1xuICAgICAgZmFjZXRMaXN0LmZhY2V0cy5mb3JFYWNoKChmYWNldCkgPT4gdGhpcy5pbml0aWFsaXplKGZhY2V0KSk7XG4gICAgfSlcbiAgKTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgb2JzZXJ2ZWQgVUkgc3RhdGUgZm9yIHRoZSBmYWNldC5cbiAgICpcbiAgICogVGhlIHN0YXRlIGlzIGluaXRpYWxpemVkIHVzaW5nIHRoZSBgaW5pdGlhbGl6ZWAgbWV0aG9kLlxuICAgKi9cbiAgZ2V0U3RhdGUoZmFjZXQ6IEZhY2V0KTogT2JzZXJ2YWJsZTxGYWNldENvbGxhcHNlU3RhdGU+IHtcbiAgICB0aGlzLmluaXRpYWxpemUoZmFjZXQpO1xuICAgIHJldHVybiB0aGlzLmZhY2V0U3RhdGUuZ2V0KGZhY2V0Lm5hbWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIFVJIHN0YXRlIGZvciB0aGUgZmFjZXQuXG4gICAqXG4gICAqIFRoZSBzdGF0ZSBpcyBpbml0aWFsaXplZCB1c2luZyB0aGUgYGluaXRpYWxpemVgIG1ldGhvZC5cbiAgICovXG4gIHByb3RlY3RlZCBnZXRTdGF0ZVNuYXBzaG90KGZhY2V0OiBGYWNldCk6IEZhY2V0Q29sbGFwc2VTdGF0ZSB7XG4gICAgcmV0dXJuICh0aGlzLmdldFN0YXRlKGZhY2V0KSBhcyBCZWhhdmlvclN1YmplY3Q8RmFjZXRDb2xsYXBzZVN0YXRlPikudmFsdWU7XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZmFjZXQgZXhwYW5kZWQgc3RhdGUuIElmIHRoZSBleHBhbmRlZCBzdGF0ZSBiZWNvbWVzIGZhbHNlLFxuICAgKiB0aGUgdmlzaWJsZSB2YWx1ZXMgd2lsbCBkZWNyZWFzZSB0byB0aGUgdG9wIHZhbHVlcyBvbmx5LlxuICAgKlxuICAgKiBJZiB0aGUgb3B0aW9uYWwgdmFsdWUgYXJndW1lbnQgaXMgcHJvdmlkZWQgdGhlIGV4cGFuZGVkIHN0YXRlIHdpbGwgYmUgc2V0XG4gICAqIHRvIHRoaXMgdmFsdWUsIHJlZ2FyZGxlc3Mgb2YgdGhlIGN1cnJlbnQgYGV4cGFuZGVkYCBzdGF0ZS5cbiAgICovXG4gIHRvZ2dsZShmYWNldDogRmFjZXQsIGlzRXhwYW5kZWQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuZ2V0U3RhdGVTbmFwc2hvdChmYWNldCk7XG5cbiAgICBjb25zdCB0b2dnbGVkU3RhdGUgPSB7XG4gICAgICB0b2dnbGVkOiBpc0V4cGFuZGVkXG4gICAgICAgID8gRmFjZXRHcm91cENvbGxhcHNlZFN0YXRlLkNPTExBUFNFRFxuICAgICAgICA6IEZhY2V0R3JvdXBDb2xsYXBzZWRTdGF0ZS5FWFBBTkRFRCxcbiAgICB9IGFzIEZhY2V0Q29sbGFwc2VTdGF0ZTtcblxuICAgIGlmICh0b2dnbGVkU3RhdGUudG9nZ2xlZCA9PT0gRmFjZXRHcm91cENvbGxhcHNlZFN0YXRlLkNPTExBUFNFRCkge1xuICAgICAgdG9nZ2xlZFN0YXRlLm1heFZpc2libGUgPSBzdGF0ZS50b3BWaXNpYmxlO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU3RhdGUoZmFjZXQsIHRvZ2dsZWRTdGF0ZSk7XG4gIH1cblxuICAvKipcbiAgICogSW5jcmVhc2VzIHRoZSB2aXNpYmxlIHZhbHVlcyB0byB0aGUgbWF4aW11bSB2YWx1ZXMgb2YgdGhlIGZhY2V0LlxuICAgKi9cbiAgaW5jcmVhc2VWaXNpYmxlVmFsdWVzKGZhY2V0OiBGYWNldCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU3RhdGUoZmFjZXQsIHsgbWF4VmlzaWJsZTogZmFjZXQudmFsdWVzLmxlbmd0aCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWNyZWFzZXMgdGhlIHZpc2libGUgdmFsdWVzIHRvIHRoZSB0b3BWYWx1ZUNvdW50LlxuICAgKlxuICAgKiBUaGUgdG9wVmFsdWVDb3VudCBkZWZhdWx0cyB0byA2LCBidXQgY2FuIGJlIGNvbnRyb2xsZWQgaW5cbiAgICogdGhlIGJhY2tlbmQgYXMgd2VsbC5cbiAgICovXG4gIGRlY3JlYXNlVmlzaWJsZVZhbHVlcyhmYWNldDogRmFjZXQpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZVN0YXRlKGZhY2V0LCB7IG1heFZpc2libGU6IGZhY2V0LnRvcFZhbHVlQ291bnQgfSk7XG4gIH1cblxuICAvKipcbiAgICogUGVyc2lzdHMgdGhlIGZhY2V0IHN0YXRlIGFuZCBpbml0aWFsaXplcyB0aGUgZGVmYXVsdCB2YWx1ZXMgZm9yIHRoZSB0b3BcbiAgICogYW5kIG1heCB2aXNpYmxlIHZhbHVlcy5cbiAgICovXG4gIHByb3RlY3RlZCBpbml0aWFsaXplKGZhY2V0OiBGYWNldCk6IHZvaWQge1xuICAgIGNvbnN0IHRvcEZhY2V0cyA9XG4gICAgICBmYWNldC50b3BWYWx1ZUNvdW50ID4gMCA/IGZhY2V0LnRvcFZhbHVlQ291bnQgOiBmYWNldC52YWx1ZXM/Lmxlbmd0aCB8fCAwO1xuICAgIGlmICghdGhpcy5oYXNTdGF0ZShmYWNldCkpIHtcbiAgICAgIHRoaXMuZmFjZXRTdGF0ZS5zZXQoXG4gICAgICAgIGZhY2V0Lm5hbWUsXG4gICAgICAgIG5ldyBCZWhhdmlvclN1YmplY3Qoe1xuICAgICAgICAgIHRvcFZpc2libGU6IHRvcEZhY2V0cyxcbiAgICAgICAgICBtYXhWaXNpYmxlOiB0b3BGYWNldHMsXG4gICAgICAgIH0gYXMgRmFjZXRDb2xsYXBzZVN0YXRlKVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgc3RhdGUgb2YgdGhlIGZhY2V0IGluIHRoZSBsb2NhbCBmYWNldCBtYXAuXG4gICAqL1xuICBwcm90ZWN0ZWQgdXBkYXRlU3RhdGUoZmFjZXQ6IEZhY2V0LCBwcm9wZXJ0eTogRmFjZXRDb2xsYXBzZVN0YXRlKTogdm9pZCB7XG4gICAgY29uc3Qgc3RhdGUgPSB7IC4uLnRoaXMuZ2V0U3RhdGVTbmFwc2hvdChmYWNldCksIC4uLnByb3BlcnR5IH07XG4gICAgdGhpcy5mYWNldFN0YXRlLmdldChmYWNldC5uYW1lKS5uZXh0KHN0YXRlKTtcbiAgfVxuXG4gIHByb3RlY3RlZCBoYXNTdGF0ZShmYWNldDogRmFjZXQpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5mYWNldFN0YXRlLmhhcyhmYWNldC5uYW1lKTtcbiAgfVxuXG4gIGdldExpbmtQYXJhbXMocXVlcnk6IHN0cmluZyk6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0ge1xuICAgIHJldHVybiB7XG4gICAgICAvLyB0byBhdm9pZCBlbmNvZGluZyBpc3N1ZXMgd2l0aCBmYWNldHMgdGhhdCBoYXZlIHNwYWNlICgnICcpIGluIHRoZWlyIG5hbWUsXG4gICAgICAvLyB3ZSByZXBsYWNlIHRoZSBkZWNvZGVkICcrJyBiYWNrIHRvIGVtcHR5IHNwYWNlICcgJy5cbiAgICAgIC8vIEZvciBtb3JlLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL1NBUC9zcGFydGFjdXMvaXNzdWVzLzczNDhcbiAgICAgIHF1ZXJ5OiBuZXcgSHR0cFVybEVuY29kaW5nQ29kZWMoKS5kZWNvZGVWYWx1ZShxdWVyeSkucmVwbGFjZSgvXFwrL2csICcgJyksXG4gICAgfTtcbiAgfVxufVxuIl19