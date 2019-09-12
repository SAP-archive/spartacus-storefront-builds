/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CarouselService = /** @class */ (function () {
    function CarouselService(winRef) {
        this.winRef = winRef;
    }
    /**
     * The number of items per slide is calculated by the help of
     * the item width and the available width of the host element.
     * This appoach makes it possible to place the carousel in different
     * layouts. Instead of using the page breakpoints, the host size is
     * taken into account.
     *
     * Since there's no element resize API available, we use the
     * window `resize` event, so that we can adjust the number of items
     * whenever the window got resized.
     */
    /**
     * The number of items per slide is calculated by the help of
     * the item width and the available width of the host element.
     * This appoach makes it possible to place the carousel in different
     * layouts. Instead of using the page breakpoints, the host size is
     * taken into account.
     *
     * Since there's no element resize API available, we use the
     * window `resize` event, so that we can adjust the number of items
     * whenever the window got resized.
     * @param {?} nativeElement
     * @param {?} itemWidth
     * @return {?}
     */
    CarouselService.prototype.getItemsPerSlide = /**
     * The number of items per slide is calculated by the help of
     * the item width and the available width of the host element.
     * This appoach makes it possible to place the carousel in different
     * layouts. Instead of using the page breakpoints, the host size is
     * taken into account.
     *
     * Since there's no element resize API available, we use the
     * window `resize` event, so that we can adjust the number of items
     * whenever the window got resized.
     * @param {?} nativeElement
     * @param {?} itemWidth
     * @return {?}
     */
    function (nativeElement, itemWidth) {
        var _this = this;
        return this.winRef.resize$.pipe(map((/**
         * @return {?}
         */
        function () { return ((/** @type {?} */ (nativeElement))).clientWidth; })), map((/**
         * @param {?} totalWidth
         * @return {?}
         */
        function (totalWidth) { return _this.calculateItems(totalWidth, itemWidth); })));
    };
    /**
     * Calculates the number of items per given hostSize.  calculated based on the given
     * intended size in pixels or percentages. The
     *
     * @param availableWidth The available width in pixels for the carousel items.
     * @param itemWidth The width per carousel item, in px or percentage.
     */
    /**
     * Calculates the number of items per given hostSize.  calculated based on the given
     * intended size in pixels or percentages. The
     *
     * @private
     * @param {?} availableWidth The available width in pixels for the carousel items.
     * @param {?} itemWidth The width per carousel item, in px or percentage.
     * @return {?}
     */
    CarouselService.prototype.calculateItems = /**
     * Calculates the number of items per given hostSize.  calculated based on the given
     * intended size in pixels or percentages. The
     *
     * @private
     * @param {?} availableWidth The available width in pixels for the carousel items.
     * @param {?} itemWidth The width per carousel item, in px or percentage.
     * @return {?}
     */
    function (availableWidth, itemWidth) {
        /** @type {?} */
        var calculatedItems = 0;
        if (itemWidth.endsWith('px')) {
            /** @type {?} */
            var num = itemWidth.substring(0, itemWidth.length - 2);
            calculatedItems = availableWidth / (/** @type {?} */ (((/** @type {?} */ (num)))));
        }
        if (itemWidth.endsWith('%')) {
            /** @type {?} */
            var perc = itemWidth.substring(0, itemWidth.length - 1);
            calculatedItems =
                availableWidth / (availableWidth * ((/** @type {?} */ (((/** @type {?} */ (perc))))) / 100));
        }
        return Math.floor(calculatedItems) || 1;
    };
    CarouselService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root',
                },] }
    ];
    /** @nocollapse */
    CarouselService.ctorParameters = function () { return [
        { type: WindowRef }
    ]; };
    /** @nocollapse */ CarouselService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CarouselService_Factory() { return new CarouselService(i0.ɵɵinject(i1.WindowRef)); }, token: CarouselService, providedIn: "root" });
    return CarouselService;
}());
export { CarouselService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CarouselService.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBRXJDO0lBSUUseUJBQW9CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDO0lBRXpDOzs7Ozs7Ozs7O09BVUc7Ozs7Ozs7Ozs7Ozs7OztJQUNILDBDQUFnQjs7Ozs7Ozs7Ozs7Ozs7SUFBaEIsVUFDRSxhQUEwQixFQUMxQixTQUFpQjtRQUZuQixpQkFRQztRQUpDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM3QixHQUFHOzs7UUFBQyxjQUFNLE9BQUEsQ0FBQyxtQkFBQSxhQUFhLEVBQWUsQ0FBQyxDQUFDLFdBQVcsRUFBMUMsQ0FBMEMsRUFBQyxFQUNyRCxHQUFHOzs7O1FBQUMsVUFBQSxVQUFVLElBQUksT0FBQSxLQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsRUFBMUMsQ0FBMEMsRUFBQyxDQUM5RCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRzs7Ozs7Ozs7OztJQUNLLHdDQUFjOzs7Ozs7Ozs7SUFBdEIsVUFBdUIsY0FBc0IsRUFBRSxTQUFpQjs7WUFDMUQsZUFBZSxHQUFHLENBQUM7UUFDdkIsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFOztnQkFDdEIsR0FBRyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3hELGVBQWUsR0FBRyxjQUFjLEdBQUcsbUJBQVEsQ0FBQyxtQkFBSyxHQUFHLEVBQUEsQ0FBQyxFQUFBLENBQUM7U0FDdkQ7UUFFRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7O2dCQUNyQixJQUFJLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDekQsZUFBZTtnQkFDYixjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxtQkFBUSxDQUFDLG1CQUFLLElBQUksRUFBQSxDQUFDLEVBQUEsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDOztnQkFoREYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFOUSxTQUFTOzs7MEJBRGxCO0NBc0RDLEFBakRELElBaURDO1NBOUNZLGVBQWU7Ozs7OztJQUNkLGlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpblJlZjogV2luZG93UmVmKSB7fVxuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHBlciBzbGlkZSBpcyBjYWxjdWxhdGVkIGJ5IHRoZSBoZWxwIG9mXG4gICAqIHRoZSBpdGVtIHdpZHRoIGFuZCB0aGUgYXZhaWxhYmxlIHdpZHRoIG9mIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqIFRoaXMgYXBwb2FjaCBtYWtlcyBpdCBwb3NzaWJsZSB0byBwbGFjZSB0aGUgY2Fyb3VzZWwgaW4gZGlmZmVyZW50XG4gICAqIGxheW91dHMuIEluc3RlYWQgb2YgdXNpbmcgdGhlIHBhZ2UgYnJlYWtwb2ludHMsIHRoZSBob3N0IHNpemUgaXNcbiAgICogdGFrZW4gaW50byBhY2NvdW50LlxuICAgKlxuICAgKiBTaW5jZSB0aGVyZSdzIG5vIGVsZW1lbnQgcmVzaXplIEFQSSBhdmFpbGFibGUsIHdlIHVzZSB0aGVcbiAgICogd2luZG93IGByZXNpemVgIGV2ZW50LCBzbyB0aGF0IHdlIGNhbiBhZGp1c3QgdGhlIG51bWJlciBvZiBpdGVtc1xuICAgKiB3aGVuZXZlciB0aGUgd2luZG93IGdvdCByZXNpemVkLlxuICAgKi9cbiAgZ2V0SXRlbXNQZXJTbGlkZShcbiAgICBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBpdGVtV2lkdGg6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLndpblJlZi5yZXNpemUkLnBpcGUoXG4gICAgICBtYXAoKCkgPT4gKG5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsaWVudFdpZHRoKSxcbiAgICAgIG1hcCh0b3RhbFdpZHRoID0+IHRoaXMuY2FsY3VsYXRlSXRlbXModG90YWxXaWR0aCwgaXRlbVdpZHRoKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBpdGVtcyBwZXIgZ2l2ZW4gaG9zdFNpemUuICBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBnaXZlblxuICAgKiBpbnRlbmRlZCBzaXplIGluIHBpeGVscyBvciBwZXJjZW50YWdlcy4gVGhlXG4gICAqXG4gICAqIEBwYXJhbSBhdmFpbGFibGVXaWR0aCBUaGUgYXZhaWxhYmxlIHdpZHRoIGluIHBpeGVscyBmb3IgdGhlIGNhcm91c2VsIGl0ZW1zLlxuICAgKiBAcGFyYW0gaXRlbVdpZHRoIFRoZSB3aWR0aCBwZXIgY2Fyb3VzZWwgaXRlbSwgaW4gcHggb3IgcGVyY2VudGFnZS5cbiAgICovXG4gIHByaXZhdGUgY2FsY3VsYXRlSXRlbXMoYXZhaWxhYmxlV2lkdGg6IG51bWJlciwgaXRlbVdpZHRoOiBzdHJpbmcpIHtcbiAgICBsZXQgY2FsY3VsYXRlZEl0ZW1zID0gMDtcbiAgICBpZiAoaXRlbVdpZHRoLmVuZHNXaXRoKCdweCcpKSB7XG4gICAgICBjb25zdCBudW0gPSBpdGVtV2lkdGguc3Vic3RyaW5nKDAsIGl0ZW1XaWR0aC5sZW5ndGggLSAyKTtcbiAgICAgIGNhbGN1bGF0ZWRJdGVtcyA9IGF2YWlsYWJsZVdpZHRoIC8gPG51bWJlcj4oPGFueT5udW0pO1xuICAgIH1cblxuICAgIGlmIChpdGVtV2lkdGguZW5kc1dpdGgoJyUnKSkge1xuICAgICAgY29uc3QgcGVyYyA9IGl0ZW1XaWR0aC5zdWJzdHJpbmcoMCwgaXRlbVdpZHRoLmxlbmd0aCAtIDEpO1xuICAgICAgY2FsY3VsYXRlZEl0ZW1zID1cbiAgICAgICAgYXZhaWxhYmxlV2lkdGggLyAoYXZhaWxhYmxlV2lkdGggKiAoPG51bWJlcj4oPGFueT5wZXJjKSAvIDEwMCkpO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLmZsb29yKGNhbGN1bGF0ZWRJdGVtcykgfHwgMTtcbiAgfVxufVxuIl19