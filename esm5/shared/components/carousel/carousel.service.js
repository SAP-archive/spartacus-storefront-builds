/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { fromEvent, iif, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, startWith, } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
var CarouselService = /** @class */ (function () {
    function CarouselService(winRef) {
        this.winRef = winRef;
    }
    /**
     * The number of items shown in the carousel is calculated dividing
     * the host element width with the minimum item width.
     */
    /**
     * The number of items shown in the carousel is calculated dividing
     * the host element width with the minimum item width.
     * @param {?} nativeElement
     * @param {?} itemWidth
     * @return {?}
     */
    CarouselService.prototype.getSize = /**
     * The number of items shown in the carousel is calculated dividing
     * the host element width with the minimum item width.
     * @param {?} nativeElement
     * @param {?} itemWidth
     * @return {?}
     */
    function (nativeElement, itemWidth) {
        var _this = this;
        return iif((/**
         * @return {?}
         */
        function () { return Boolean(_this.winRef.nativeWindow); }), fromEvent(this.winRef.nativeWindow, 'resize').pipe(map((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return ((/** @type {?} */ (nativeElement))).clientWidth; })), startWith(((/** @type {?} */ (nativeElement))).clientWidth), debounceTime(100), map((/**
         * @param {?} totalWidth
         * @return {?}
         */
        function (totalWidth) { return Math.round(totalWidth / itemWidth); })), distinctUntilChanged()), of(3));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQ0wsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixHQUFHLEVBQ0gsU0FBUyxHQUNWLE1BQU0sZ0JBQWdCLENBQUM7OztBQUV4QjtJQUlFLHlCQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQztJQUV6Qzs7O09BR0c7Ozs7Ozs7O0lBQ0gsaUNBQU87Ozs7Ozs7SUFBUCxVQUFRLGFBQTBCLEVBQUUsU0FBaUI7UUFBckQsaUJBWUM7UUFYQyxPQUFPLEdBQUc7OztRQUNSLGNBQU0sT0FBQSxPQUFPLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsRUFBakMsQ0FBaUMsR0FDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDaEQsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxtQkFBQSxhQUFhLEVBQWUsQ0FBQyxDQUFDLFdBQVcsRUFBMUMsQ0FBMEMsRUFBQyxFQUNwRCxTQUFTLENBQUMsQ0FBQyxtQkFBQSxhQUFhLEVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUNyRCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEdBQUc7Ozs7UUFBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxFQUFsQyxDQUFrQyxFQUFDLEVBQ3JELG9CQUFvQixFQUFFLENBQ3ZCLEVBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUNOLENBQUM7SUFDSixDQUFDOztnQkF0QkYsVUFBVSxTQUFDO29CQUNWLFVBQVUsRUFBRSxNQUFNO2lCQUNuQjs7OztnQkFYUSxTQUFTOzs7MEJBRGxCO0NBaUNDLEFBdkJELElBdUJDO1NBcEJZLGVBQWU7Ozs7OztJQUNkLGlDQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBmcm9tRXZlbnQsIGlpZiwgT2JzZXJ2YWJsZSwgb2YgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7XG4gIGRlYm91bmNlVGltZSxcbiAgZGlzdGluY3RVbnRpbENoYW5nZWQsXG4gIG1hcCxcbiAgc3RhcnRXaXRoLFxufSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpblJlZjogV2luZG93UmVmKSB7fVxuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHNob3duIGluIHRoZSBjYXJvdXNlbCBpcyBjYWxjdWxhdGVkIGRpdmlkaW5nXG4gICAqIHRoZSBob3N0IGVsZW1lbnQgd2lkdGggd2l0aCB0aGUgbWluaW11bSBpdGVtIHdpZHRoLlxuICAgKi9cbiAgZ2V0U2l6ZShuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCwgaXRlbVdpZHRoOiBudW1iZXIpOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiBpaWYoXG4gICAgICAoKSA9PiBCb29sZWFuKHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdyksXG4gICAgICBmcm9tRXZlbnQodGhpcy53aW5SZWYubmF0aXZlV2luZG93LCAncmVzaXplJykucGlwZShcbiAgICAgICAgbWFwKF8gPT4gKG5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsaWVudFdpZHRoKSxcbiAgICAgICAgc3RhcnRXaXRoKChuYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGllbnRXaWR0aCksXG4gICAgICAgIGRlYm91bmNlVGltZSgxMDApLFxuICAgICAgICBtYXAodG90YWxXaWR0aCA9PiBNYXRoLnJvdW5kKHRvdGFsV2lkdGggLyBpdGVtV2lkdGgpKSxcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICAgKSxcbiAgICAgIG9mKDMpXG4gICAgKTtcbiAgfVxufVxuIl19