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
        return iif((/**
         * @return {?}
         */
        () => Boolean(this.winRef.nativeWindow)), fromEvent(this.winRef.nativeWindow, 'resize').pipe(map((/**
         * @param {?} _
         * @return {?}
         */
        _ => ((/** @type {?} */ (nativeElement))).clientWidth)), startWith(((/** @type {?} */ (nativeElement))).clientWidth), debounceTime(100), map((/**
         * @param {?} totalWidth
         * @return {?}
         */
        totalWidth => Math.round(totalWidth / itemWidth))), distinctUntilChanged()), of(3));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzVDLE9BQU8sRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFjLEVBQUUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN0RCxPQUFPLEVBQ0wsWUFBWSxFQUNaLG9CQUFvQixFQUNwQixHQUFHLEVBQ0gsU0FBUyxHQUNWLE1BQU0sZ0JBQWdCLENBQUM7OztBQUt4QixNQUFNLE9BQU8sZUFBZTs7OztJQUMxQixZQUFvQixNQUFpQjtRQUFqQixXQUFNLEdBQU4sTUFBTSxDQUFXO0lBQUcsQ0FBQzs7Ozs7Ozs7SUFNekMsT0FBTyxDQUFDLGFBQTBCLEVBQUUsU0FBaUI7UUFDbkQsT0FBTyxHQUFHOzs7UUFDUixHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsR0FDdkMsU0FBUyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxFQUFFLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FDaEQsR0FBRzs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxtQkFBQSxhQUFhLEVBQWUsQ0FBQyxDQUFDLFdBQVcsRUFBQyxFQUNwRCxTQUFTLENBQUMsQ0FBQyxtQkFBQSxhQUFhLEVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxFQUNyRCxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQ2pCLEdBQUc7Ozs7UUFBQyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQyxFQUFDLEVBQ3JELG9CQUFvQixFQUFFLENBQ3ZCLEVBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUNOLENBQUM7SUFDSixDQUFDOzs7WUF0QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBWFEsU0FBUzs7Ozs7Ozs7SUFhSixpQ0FBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBpaWYsIE9ic2VydmFibGUsIG9mIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQge1xuICBkZWJvdW5jZVRpbWUsXG4gIGRpc3RpbmN0VW50aWxDaGFuZ2VkLFxuICBtYXAsXG4gIHN0YXJ0V2l0aCxcbn0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZikge31cblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBpdGVtcyBzaG93biBpbiB0aGUgY2Fyb3VzZWwgaXMgY2FsY3VsYXRlZCBkaXZpZGluZ1xuICAgKiB0aGUgaG9zdCBlbGVtZW50IHdpZHRoIHdpdGggdGhlIG1pbmltdW0gaXRlbSB3aWR0aC5cbiAgICovXG4gIGdldFNpemUobmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQsIGl0ZW1XaWR0aDogbnVtYmVyKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gaWlmKFxuICAgICAgKCkgPT4gQm9vbGVhbih0aGlzLndpblJlZi5uYXRpdmVXaW5kb3cpLFxuICAgICAgZnJvbUV2ZW50KHRoaXMud2luUmVmLm5hdGl2ZVdpbmRvdywgJ3Jlc2l6ZScpLnBpcGUoXG4gICAgICAgIG1hcChfID0+IChuYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGllbnRXaWR0aCksXG4gICAgICAgIHN0YXJ0V2l0aCgobmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xpZW50V2lkdGgpLFxuICAgICAgICBkZWJvdW5jZVRpbWUoMTAwKSxcbiAgICAgICAgbWFwKHRvdGFsV2lkdGggPT4gTWF0aC5yb3VuZCh0b3RhbFdpZHRoIC8gaXRlbVdpZHRoKSksXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKClcbiAgICAgICksXG4gICAgICBvZigzKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==