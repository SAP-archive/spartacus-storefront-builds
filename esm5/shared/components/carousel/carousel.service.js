import { __decorate } from "tslib";
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
    CarouselService.prototype.getItemsPerSlide = function (nativeElement, itemWidth) {
        var _this = this;
        return this.winRef.resize$.pipe(map(function () { return nativeElement.clientWidth; }), map(function (totalWidth) { return _this.calculateItems(totalWidth, itemWidth); }));
    };
    /**
     * Calculates the number of items per given hostSize.  calculated based on the given
     * intended size in pixels or percentages. The
     *
     * @param availableWidth The available width in pixels for the carousel items.
     * @param itemWidth The width per carousel item, in px or percentage.
     */
    CarouselService.prototype.calculateItems = function (availableWidth, itemWidth) {
        var calculatedItems = 0;
        if (itemWidth.endsWith('px')) {
            var num = itemWidth.substring(0, itemWidth.length - 2);
            calculatedItems = availableWidth / num;
        }
        if (itemWidth.endsWith('%')) {
            var perc = itemWidth.substring(0, itemWidth.length - 1);
            calculatedItems =
                availableWidth / (availableWidth * (perc / 100));
        }
        return Math.floor(calculatedItems) || 1;
    };
    CarouselService.ctorParameters = function () { return [
        { type: WindowRef }
    ]; };
    CarouselService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CarouselService_Factory() { return new CarouselService(i0.ɵɵinject(i1.WindowRef)); }, token: CarouselService, providedIn: "root" });
    CarouselService = __decorate([
        Injectable({
            providedIn: 'root',
        })
    ], CarouselService);
    return CarouselService;
}());
export { CarouselService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS3JDO0lBQ0UseUJBQW9CLE1BQWlCO1FBQWpCLFdBQU0sR0FBTixNQUFNLENBQVc7SUFBRyxDQUFDO0lBRXpDOzs7Ozs7Ozs7O09BVUc7SUFDSCwwQ0FBZ0IsR0FBaEIsVUFDRSxhQUEwQixFQUMxQixTQUFpQjtRQUZuQixpQkFRQztRQUpDLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM3QixHQUFHLENBQUMsY0FBTSxPQUFDLGFBQTZCLENBQUMsV0FBVyxFQUExQyxDQUEwQyxDQUFDLEVBQ3JELEdBQUcsQ0FBQyxVQUFBLFVBQVUsSUFBSSxPQUFBLEtBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxFQUExQyxDQUEwQyxDQUFDLENBQzlELENBQUM7SUFDSixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0ssd0NBQWMsR0FBdEIsVUFBdUIsY0FBc0IsRUFBRSxTQUFpQjtRQUM5RCxJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLElBQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekQsZUFBZSxHQUFHLGNBQWMsR0FBaUIsR0FBSSxDQUFDO1NBQ3ZEO1FBRUQsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLElBQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUQsZUFBZTtnQkFDYixjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsQ0FBZSxJQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuRTtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7Z0JBNUMyQixTQUFTOzs7SUFEMUIsZUFBZTtRQUgzQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csZUFBZSxDQThDM0I7MEJBdEREO0NBc0RDLEFBOUNELElBOENDO1NBOUNZLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgbWFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290Jyxcbn0pXG5leHBvcnQgY2xhc3MgQ2Fyb3VzZWxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSB3aW5SZWY6IFdpbmRvd1JlZikge31cblxuICAvKipcbiAgICogVGhlIG51bWJlciBvZiBpdGVtcyBwZXIgc2xpZGUgaXMgY2FsY3VsYXRlZCBieSB0aGUgaGVscCBvZlxuICAgKiB0aGUgaXRlbSB3aWR0aCBhbmQgdGhlIGF2YWlsYWJsZSB3aWR0aCBvZiB0aGUgaG9zdCBlbGVtZW50LlxuICAgKiBUaGlzIGFwcG9hY2ggbWFrZXMgaXQgcG9zc2libGUgdG8gcGxhY2UgdGhlIGNhcm91c2VsIGluIGRpZmZlcmVudFxuICAgKiBsYXlvdXRzLiBJbnN0ZWFkIG9mIHVzaW5nIHRoZSBwYWdlIGJyZWFrcG9pbnRzLCB0aGUgaG9zdCBzaXplIGlzXG4gICAqIHRha2VuIGludG8gYWNjb3VudC5cbiAgICpcbiAgICogU2luY2UgdGhlcmUncyBubyBlbGVtZW50IHJlc2l6ZSBBUEkgYXZhaWxhYmxlLCB3ZSB1c2UgdGhlXG4gICAqIHdpbmRvdyBgcmVzaXplYCBldmVudCwgc28gdGhhdCB3ZSBjYW4gYWRqdXN0IHRoZSBudW1iZXIgb2YgaXRlbXNcbiAgICogd2hlbmV2ZXIgdGhlIHdpbmRvdyBnb3QgcmVzaXplZC5cbiAgICovXG4gIGdldEl0ZW1zUGVyU2xpZGUoXG4gICAgbmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQsXG4gICAgaXRlbVdpZHRoOiBzdHJpbmdcbiAgKTogT2JzZXJ2YWJsZTxudW1iZXI+IHtcbiAgICByZXR1cm4gdGhpcy53aW5SZWYucmVzaXplJC5waXBlKFxuICAgICAgbWFwKCgpID0+IChuYXRpdmVFbGVtZW50IGFzIEhUTUxFbGVtZW50KS5jbGllbnRXaWR0aCksXG4gICAgICBtYXAodG90YWxXaWR0aCA9PiB0aGlzLmNhbGN1bGF0ZUl0ZW1zKHRvdGFsV2lkdGgsIGl0ZW1XaWR0aCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBudW1iZXIgb2YgaXRlbXMgcGVyIGdpdmVuIGhvc3RTaXplLiAgY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZ2l2ZW5cbiAgICogaW50ZW5kZWQgc2l6ZSBpbiBwaXhlbHMgb3IgcGVyY2VudGFnZXMuIFRoZVxuICAgKlxuICAgKiBAcGFyYW0gYXZhaWxhYmxlV2lkdGggVGhlIGF2YWlsYWJsZSB3aWR0aCBpbiBwaXhlbHMgZm9yIHRoZSBjYXJvdXNlbCBpdGVtcy5cbiAgICogQHBhcmFtIGl0ZW1XaWR0aCBUaGUgd2lkdGggcGVyIGNhcm91c2VsIGl0ZW0sIGluIHB4IG9yIHBlcmNlbnRhZ2UuXG4gICAqL1xuICBwcml2YXRlIGNhbGN1bGF0ZUl0ZW1zKGF2YWlsYWJsZVdpZHRoOiBudW1iZXIsIGl0ZW1XaWR0aDogc3RyaW5nKSB7XG4gICAgbGV0IGNhbGN1bGF0ZWRJdGVtcyA9IDA7XG4gICAgaWYgKGl0ZW1XaWR0aC5lbmRzV2l0aCgncHgnKSkge1xuICAgICAgY29uc3QgbnVtID0gaXRlbVdpZHRoLnN1YnN0cmluZygwLCBpdGVtV2lkdGgubGVuZ3RoIC0gMik7XG4gICAgICBjYWxjdWxhdGVkSXRlbXMgPSBhdmFpbGFibGVXaWR0aCAvIDxudW1iZXI+KDxhbnk+bnVtKTtcbiAgICB9XG5cbiAgICBpZiAoaXRlbVdpZHRoLmVuZHNXaXRoKCclJykpIHtcbiAgICAgIGNvbnN0IHBlcmMgPSBpdGVtV2lkdGguc3Vic3RyaW5nKDAsIGl0ZW1XaWR0aC5sZW5ndGggLSAxKTtcbiAgICAgIGNhbGN1bGF0ZWRJdGVtcyA9XG4gICAgICAgIGF2YWlsYWJsZVdpZHRoIC8gKGF2YWlsYWJsZVdpZHRoICogKDxudW1iZXI+KDxhbnk+cGVyYykgLyAxMDApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihjYWxjdWxhdGVkSXRlbXMpIHx8IDE7XG4gIH1cbn1cbiJdfQ==