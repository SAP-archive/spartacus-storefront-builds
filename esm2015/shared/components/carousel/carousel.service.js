/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class CarouselService {
    /**
     * @param {?} winRef
     */
    constructor(winRef) {
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
     * @param {?} nativeElement
     * @param {?} itemWidth
     * @return {?}
     */
    getItemsPerSlide(nativeElement, itemWidth) {
        return this.winRef.resize$.pipe(map((/**
         * @return {?}
         */
        () => ((/** @type {?} */ (nativeElement))).clientWidth)), map((/**
         * @param {?} totalWidth
         * @return {?}
         */
        totalWidth => this.calculateItems(totalWidth, itemWidth))));
    }
    /**
     * Calculates the number of items per given hostSize.  calculated based on the given
     * intended size in pixels or percentages. The
     *
     * @private
     * @param {?} availableWidth The available width in pixels for the carousel items.
     * @param {?} itemWidth The width per carousel item, in px or percentage.
     * @return {?}
     */
    calculateItems(availableWidth, itemWidth) {
        /** @type {?} */
        let calculatedItems = 0;
        if (itemWidth.endsWith('px')) {
            /** @type {?} */
            const num = itemWidth.substring(0, itemWidth.length - 2);
            calculatedItems = availableWidth / (/** @type {?} */ (((/** @type {?} */ (num)))));
        }
        if (itemWidth.endsWith('%')) {
            /** @type {?} */
            const perc = itemWidth.substring(0, itemWidth.length - 1);
            calculatedItems =
                availableWidth / (availableWidth * ((/** @type {?} */ (((/** @type {?} */ (perc))))) / 100));
        }
        return Math.floor(calculatedItems) || 1;
    }
}
CarouselService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
/** @nocollapse */
CarouselService.ctorParameters = () => [
    { type: WindowRef }
];
/** @nocollapse */ CarouselService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function CarouselService_Factory() { return new CarouselService(i0.ɵɵinject(i1.WindowRef)); }, token: CarouselService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    CarouselService.prototype.winRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS3JDLE1BQU0sT0FBTyxlQUFlOzs7O0lBQzFCLFlBQW9CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7SUFhekMsZ0JBQWdCLENBQ2QsYUFBMEIsRUFDMUIsU0FBaUI7UUFFakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQzdCLEdBQUc7OztRQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsbUJBQUEsYUFBYSxFQUFlLENBQUMsQ0FBQyxXQUFXLEVBQUMsRUFDckQsR0FBRzs7OztRQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLEVBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7Ozs7Ozs7Ozs7SUFTTyxjQUFjLENBQUMsY0FBc0IsRUFBRSxTQUFpQjs7WUFDMUQsZUFBZSxHQUFHLENBQUM7UUFDdkIsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFOztrQkFDdEIsR0FBRyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3hELGVBQWUsR0FBRyxjQUFjLEdBQUcsbUJBQVEsQ0FBQyxtQkFBSyxHQUFHLEVBQUEsQ0FBQyxFQUFBLENBQUM7U0FDdkQ7UUFFRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7O2tCQUNyQixJQUFJLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDekQsZUFBZTtnQkFDYixjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsQ0FBQyxtQkFBUSxDQUFDLG1CQUFLLElBQUksRUFBQSxDQUFDLEVBQUEsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7WUFoREYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBTlEsU0FBUzs7Ozs7Ozs7SUFRSixpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZikge31cblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBpdGVtcyBwZXIgc2xpZGUgaXMgY2FsY3VsYXRlZCBieSB0aGUgaGVscCBvZlxuICAgKiB0aGUgaXRlbSB3aWR0aCBhbmQgdGhlIGF2YWlsYWJsZSB3aWR0aCBvZiB0aGUgaG9zdCBlbGVtZW50LlxuICAgKiBUaGlzIGFwcG9hY2ggbWFrZXMgaXQgcG9zc2libGUgdG8gcGxhY2UgdGhlIGNhcm91c2VsIGluIGRpZmZlcmVudFxuICAgKiBsYXlvdXRzLiBJbnN0ZWFkIG9mIHVzaW5nIHRoZSBwYWdlIGJyZWFrcG9pbnRzLCB0aGUgaG9zdCBzaXplIGlzXG4gICAqIHRha2VuIGludG8gYWNjb3VudC5cbiAgICpcbiAgICogU2luY2UgdGhlcmUncyBubyBlbGVtZW50IHJlc2l6ZSBBUEkgYXZhaWxhYmxlLCB3ZSB1c2UgdGhlXG4gICAqIHdpbmRvdyBgcmVzaXplYCBldmVudCwgc28gdGhhdCB3ZSBjYW4gYWRqdXN0IHRoZSBudW1iZXIgb2YgaXRlbXNcbiAgICogd2hlbmV2ZXIgdGhlIHdpbmRvdyBnb3QgcmVzaXplZC5cbiAgICovXG4gIGdldEl0ZW1zUGVyU2xpZGUoXG4gICAgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgaXRlbVdpZHRoOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy53aW5SZWYucmVzaXplJC5waXBlKFxuICAgICAgbWFwKCgpID0+IChuYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGllbnRXaWR0aCksXG4gICAgICBtYXAodG90YWxXaWR0aCA9PiB0aGlzLmNhbGN1bGF0ZUl0ZW1zKHRvdGFsV2lkdGgsIGl0ZW1XaWR0aCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBudW1iZXIgb2YgaXRlbXMgcGVyIGdpdmVuIGhvc3RTaXplLiAgY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZ2l2ZW5cbiAgICogaW50ZW5kZWQgc2l6ZSBpbiBwaXhlbHMgb3IgcGVyY2VudGFnZXMuIFRoZVxuICAgKlxuICAgKiBAcGFyYW0gYXZhaWxhYmxlV2lkdGggVGhlIGF2YWlsYWJsZSB3aWR0aCBpbiBwaXhlbHMgZm9yIHRoZSBjYXJvdXNlbCBpdGVtcy5cbiAgICogQHBhcmFtIGl0ZW1XaWR0aCBUaGUgd2lkdGggcGVyIGNhcm91c2VsIGl0ZW0sIGluIHB4IG9yIHBlcmNlbnRhZ2UuXG4gICAqL1xuICBwcml2YXRlIGNhbGN1bGF0ZUl0ZW1zKGF2YWlsYWJsZVdpZHRoOiBudW1iZXIsIGl0ZW1XaWR0aDogc3RyaW5nKSB7XG4gICAgbGV0IGNhbGN1bGF0ZWRJdGVtcyA9IDA7XG4gICAgaWYgKGl0ZW1XaWR0aC5lbmRzV2l0aCgncHgnKSkge1xuICAgICAgY29uc3QgbnVtID0gaXRlbVdpZHRoLnN1YnN0cmluZygwLCBpdGVtV2lkdGgubGVuZ3RoIC0gMik7XG4gICAgICBjYWxjdWxhdGVkSXRlbXMgPSBhdmFpbGFibGVXaWR0aCAvIDxudW1iZXI+KDxhbnk+bnVtKTtcbiAgICB9XG5cbiAgICBpZiAoaXRlbVdpZHRoLmVuZHNXaXRoKCclJykpIHtcbiAgICAgIGNvbnN0IHBlcmMgPSBpdGVtV2lkdGguc3Vic3RyaW5nKDAsIGl0ZW1XaWR0aC5sZW5ndGggLSAxKTtcbiAgICAgIGNhbGN1bGF0ZWRJdGVtcyA9XG4gICAgICAgIGF2YWlsYWJsZVdpZHRoIC8gKGF2YWlsYWJsZVdpZHRoICogKDxudW1iZXI+KDxhbnk+cGVyYykgLyAxMDApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihjYWxjdWxhdGVkSXRlbXMpIHx8IDE7XG4gIH1cbn1cbiJdfQ==