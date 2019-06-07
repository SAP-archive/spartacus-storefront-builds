/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, } from 'rxjs/operators';
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
     * The number of items shown in the carousel is calculated dividing
     * the host element width with the minimum item width.
     * @param {?} nativeElement
     * @param {?} itemWidth
     * @return {?}
     */
    getSize(nativeElement, itemWidth) {
        return fromEvent(this.winRef.nativeWindow, 'resize').pipe(map((/**
         * @param {?} _
         * @return {?}
         */
        _ => ((/** @type {?} */ (nativeElement))).clientWidth)), startWith(((/** @type {?} */ (nativeElement))).clientWidth), debounceTime(100), map((/**
         * @param {?} totalWidth
         * @return {?}
         */
        (totalWidth) => {
            return Math.round(totalWidth / itemWidth);
        })), distinctUntilChanged());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUNMLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsR0FBRyxFQUNILFNBQVMsR0FDVixNQUFNLGdCQUFnQixDQUFDOzs7QUFLeEIsTUFBTSxPQUFPLGVBQWU7Ozs7SUFDMUIsWUFBb0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7Ozs7Ozs7O0lBTXpDLE9BQU8sQ0FBQyxhQUEwQixFQUFFLFNBQWlCO1FBQ25ELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDdkQsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxtQkFBQSxhQUFhLEVBQWUsQ0FBQyxDQUFDLFdBQVcsRUFBQyxFQUNwRCxTQUFTLENBQUMsQ0FBQyxtQkFBQSxhQUFhLEVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUNyRCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEdBQUc7Ozs7UUFBQyxDQUFDLFVBQWUsRUFBRSxFQUFFO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsU0FBUyxDQUFDLENBQUM7UUFDNUMsQ0FBQyxFQUFDLEVBQ0Ysb0JBQW9CLEVBQUUsQ0FDdkIsQ0FBQztJQUNKLENBQUM7OztZQXBCRixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUFYUSxTQUFTOzs7Ozs7OztJQWFKLGlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIG1hcCxcbiAgc3RhcnRXaXRoLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpblJlZjogV2luZG93UmVmKSB7fVxuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHNob3duIGluIHRoZSBjYXJvdXNlbCBpcyBjYWxjdWxhdGVkIGRpdmlkaW5nXG4gICAqIHRoZSBob3N0IGVsZW1lbnQgd2lkdGggd2l0aCB0aGUgbWluaW11bSBpdGVtIHdpZHRoLlxuICAgKi9cbiAgZ2V0U2l6ZShuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCwgaXRlbVdpZHRoOiBudW1iZXIpIHtcbiAgICByZXR1cm4gZnJvbUV2ZW50KHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICBtYXAoXyA9PiAobmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xpZW50V2lkdGgpLFxuICAgICAgc3RhcnRXaXRoKChuYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGllbnRXaWR0aCksXG4gICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgIG1hcCgodG90YWxXaWR0aDogYW55KSA9PiB7XG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHRvdGFsV2lkdGggLyBpdGVtV2lkdGgpO1xuICAgICAgfSksXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpXG4gICAgKTtcbiAgfVxufVxuIl19