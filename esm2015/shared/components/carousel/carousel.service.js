import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
let CarouselService = class CarouselService {
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
     */
    getItemsPerSlide(nativeElement, itemWidth) {
        return this.winRef.resize$.pipe(map(() => nativeElement.clientWidth), map((totalWidth) => this.calculateItems(totalWidth, itemWidth)));
    }
    /**
     * Calculates the number of items per given hostSize.  calculated based on the given
     * intended size in pixels or percentages. The
     *
     * @param availableWidth The available width in pixels for the carousel items.
     * @param itemWidth The width per carousel item, in px or percentage.
     */
    calculateItems(availableWidth, itemWidth) {
        let calculatedItems = 0;
        if (itemWidth.endsWith('px')) {
            const num = itemWidth.substring(0, itemWidth.length - 2);
            calculatedItems = availableWidth / num;
        }
        if (itemWidth.endsWith('%')) {
            const perc = itemWidth.substring(0, itemWidth.length - 1);
            calculatedItems =
                availableWidth / (availableWidth * (perc / 100));
        }
        return Math.floor(calculatedItems) || 1;
    }
};
CarouselService.ctorParameters = () => [
    { type: WindowRef }
];
CarouselService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CarouselService_Factory() { return new CarouselService(i0.ɵɵinject(i1.WindowRef)); }, token: CarouselService, providedIn: "root" });
CarouselService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], CarouselService);
export { CarouselService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS3JDLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDMUIsWUFBb0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFekM7Ozs7Ozs7Ozs7T0FVRztJQUNILGdCQUFnQixDQUNkLGFBQTBCLEVBQzFCLFNBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM3QixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUUsYUFBNkIsQ0FBQyxXQUFXLENBQUMsRUFDckQsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUNoRSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLGNBQWMsQ0FBQyxjQUFzQixFQUFFLFNBQWlCO1FBQzlELElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6RCxlQUFlLEdBQUcsY0FBYyxHQUFpQixHQUFJLENBQUM7U0FDdkQ7UUFFRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxRCxlQUFlO2dCQUNiLGNBQWMsR0FBRyxDQUFDLGNBQWMsR0FBRyxDQUFlLElBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0NBQ0YsQ0FBQTs7WUE3QzZCLFNBQVM7OztBQUQxQixlQUFlO0lBSDNCLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7R0FDVyxlQUFlLENBOEMzQjtTQTlDWSxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCcsXG59KVxuZXhwb3J0IGNsYXNzIENhcm91c2VsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgd2luUmVmOiBXaW5kb3dSZWYpIHt9XG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgcGVyIHNsaWRlIGlzIGNhbGN1bGF0ZWQgYnkgdGhlIGhlbHAgb2ZcbiAgICogdGhlIGl0ZW0gd2lkdGggYW5kIHRoZSBhdmFpbGFibGUgd2lkdGggb2YgdGhlIGhvc3QgZWxlbWVudC5cbiAgICogVGhpcyBhcHBvYWNoIG1ha2VzIGl0IHBvc3NpYmxlIHRvIHBsYWNlIHRoZSBjYXJvdXNlbCBpbiBkaWZmZXJlbnRcbiAgICogbGF5b3V0cy4gSW5zdGVhZCBvZiB1c2luZyB0aGUgcGFnZSBicmVha3BvaW50cywgdGhlIGhvc3Qgc2l6ZSBpc1xuICAgKiB0YWtlbiBpbnRvIGFjY291bnQuXG4gICAqXG4gICAqIFNpbmNlIHRoZXJlJ3Mgbm8gZWxlbWVudCByZXNpemUgQVBJIGF2YWlsYWJsZSwgd2UgdXNlIHRoZVxuICAgKiB3aW5kb3cgYHJlc2l6ZWAgZXZlbnQsIHNvIHRoYXQgd2UgY2FuIGFkanVzdCB0aGUgbnVtYmVyIG9mIGl0ZW1zXG4gICAqIHdoZW5ldmVyIHRoZSB3aW5kb3cgZ290IHJlc2l6ZWQuXG4gICAqL1xuICBnZXRJdGVtc1BlclNsaWRlKFxuICAgIG5hdGl2ZUVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICAgIGl0ZW1XaWR0aDogc3RyaW5nXG4gICk6IE9ic2VydmFibGU8bnVtYmVyPiB7XG4gICAgcmV0dXJuIHRoaXMud2luUmVmLnJlc2l6ZSQucGlwZShcbiAgICAgIG1hcCgoKSA9PiAobmF0aXZlRWxlbWVudCBhcyBIVE1MRWxlbWVudCkuY2xpZW50V2lkdGgpLFxuICAgICAgbWFwKCh0b3RhbFdpZHRoKSA9PiB0aGlzLmNhbGN1bGF0ZUl0ZW1zKHRvdGFsV2lkdGgsIGl0ZW1XaWR0aCkpXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxjdWxhdGVzIHRoZSBudW1iZXIgb2YgaXRlbXMgcGVyIGdpdmVuIGhvc3RTaXplLiAgY2FsY3VsYXRlZCBiYXNlZCBvbiB0aGUgZ2l2ZW5cbiAgICogaW50ZW5kZWQgc2l6ZSBpbiBwaXhlbHMgb3IgcGVyY2VudGFnZXMuIFRoZVxuICAgKlxuICAgKiBAcGFyYW0gYXZhaWxhYmxlV2lkdGggVGhlIGF2YWlsYWJsZSB3aWR0aCBpbiBwaXhlbHMgZm9yIHRoZSBjYXJvdXNlbCBpdGVtcy5cbiAgICogQHBhcmFtIGl0ZW1XaWR0aCBUaGUgd2lkdGggcGVyIGNhcm91c2VsIGl0ZW0sIGluIHB4IG9yIHBlcmNlbnRhZ2UuXG4gICAqL1xuICBwcml2YXRlIGNhbGN1bGF0ZUl0ZW1zKGF2YWlsYWJsZVdpZHRoOiBudW1iZXIsIGl0ZW1XaWR0aDogc3RyaW5nKSB7XG4gICAgbGV0IGNhbGN1bGF0ZWRJdGVtcyA9IDA7XG4gICAgaWYgKGl0ZW1XaWR0aC5lbmRzV2l0aCgncHgnKSkge1xuICAgICAgY29uc3QgbnVtID0gaXRlbVdpZHRoLnN1YnN0cmluZygwLCBpdGVtV2lkdGgubGVuZ3RoIC0gMik7XG4gICAgICBjYWxjdWxhdGVkSXRlbXMgPSBhdmFpbGFibGVXaWR0aCAvIDxudW1iZXI+KDxhbnk+bnVtKTtcbiAgICB9XG5cbiAgICBpZiAoaXRlbVdpZHRoLmVuZHNXaXRoKCclJykpIHtcbiAgICAgIGNvbnN0IHBlcmMgPSBpdGVtV2lkdGguc3Vic3RyaW5nKDAsIGl0ZW1XaWR0aC5sZW5ndGggLSAxKTtcbiAgICAgIGNhbGN1bGF0ZWRJdGVtcyA9XG4gICAgICAgIGF2YWlsYWJsZVdpZHRoIC8gKGF2YWlsYWJsZVdpZHRoICogKDxudW1iZXI+KDxhbnk+cGVyYykgLyAxMDApKTtcbiAgICB9XG5cbiAgICByZXR1cm4gTWF0aC5mbG9vcihjYWxjdWxhdGVkSXRlbXMpIHx8IDE7XG4gIH1cbn1cbiJdfQ==