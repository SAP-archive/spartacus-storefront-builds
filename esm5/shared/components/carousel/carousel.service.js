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
        return fromEvent(this.winRef.nativeWindow, 'resize').pipe(map((/**
         * @param {?} _
         * @return {?}
         */
        function (_) { return ((/** @type {?} */ (nativeElement))).clientWidth; })), startWith(((/** @type {?} */ (nativeElement))).clientWidth), debounceTime(100), map((/**
         * @param {?} totalWidth
         * @return {?}
         */
        function (totalWidth) {
            return Math.round(totalWidth / itemWidth);
        })), distinctUntilChanged());
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakMsT0FBTyxFQUNMLFlBQVksRUFDWixvQkFBb0IsRUFDcEIsR0FBRyxFQUNILFNBQVMsR0FDVixNQUFNLGdCQUFnQixDQUFDOzs7QUFFeEI7SUFJRSx5QkFBb0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFekM7OztPQUdHOzs7Ozs7OztJQUNILGlDQUFPOzs7Ozs7O0lBQVAsVUFBUSxhQUEwQixFQUFFLFNBQWlCO1FBQ25ELE9BQU8sU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDdkQsR0FBRzs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxtQkFBQSxhQUFhLEVBQWUsQ0FBQyxDQUFDLFdBQVcsRUFBMUMsQ0FBMEMsRUFBQyxFQUNwRCxTQUFTLENBQUMsQ0FBQyxtQkFBQSxhQUFhLEVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUNyRCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEdBQUc7Ozs7UUFBQyxVQUFDLFVBQWU7WUFDbEIsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsQ0FBQztRQUM1QyxDQUFDLEVBQUMsRUFDRixvQkFBb0IsRUFBRSxDQUN2QixDQUFDO0lBQ0osQ0FBQzs7Z0JBcEJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBWFEsU0FBUzs7OzBCQURsQjtDQStCQyxBQXJCRCxJQXFCQztTQWxCWSxlQUFlOzs7Ozs7SUFDZCxpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBtYXAsXG4gIHN0YXJ0V2l0aCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZikge31cblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBpdGVtcyBzaG93biBpbiB0aGUgY2Fyb3VzZWwgaXMgY2FsY3VsYXRlZCBkaXZpZGluZ1xuICAgKiB0aGUgaG9zdCBlbGVtZW50IHdpZHRoIHdpdGggdGhlIG1pbmltdW0gaXRlbSB3aWR0aC5cbiAgICovXG4gIGdldFNpemUobmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQsIGl0ZW1XaWR0aDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGZyb21FdmVudCh0aGlzLndpblJlZi5uYXRpdmVXaW5kb3csICdyZXNpemUnKS5waXBlKFxuICAgICAgbWFwKF8gPT4gKG5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsaWVudFdpZHRoKSxcbiAgICAgIHN0YXJ0V2l0aCgobmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xpZW50V2lkdGgpLFxuICAgICAgZGVib3VuY2VUaW1lKDEwMCksXG4gICAgICBtYXAoKHRvdGFsV2lkdGg6IGFueSkgPT4ge1xuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCh0b3RhbFdpZHRoIC8gaXRlbVdpZHRoKTtcbiAgICAgIH0pLFxuICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==