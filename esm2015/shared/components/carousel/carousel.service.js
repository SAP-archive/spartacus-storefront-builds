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
        return this.winRef.resize$.pipe(map(() => nativeElement.clientWidth), map(totalWidth => this.calculateItems(totalWidth, itemWidth)));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRTVDLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBS3JDLElBQWEsZUFBZSxHQUE1QixNQUFhLGVBQWU7SUFDMUIsWUFBb0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFekM7Ozs7Ozs7Ozs7T0FVRztJQUNILGdCQUFnQixDQUNkLGFBQTBCLEVBQzFCLFNBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM3QixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUUsYUFBNkIsQ0FBQyxXQUFXLENBQUMsRUFDckQsR0FBRyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FDOUQsQ0FBQztJQUNKLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSyxjQUFjLENBQUMsY0FBc0IsRUFBRSxTQUFpQjtRQUM5RCxJQUFJLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDeEIsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLE1BQU0sR0FBRyxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDekQsZUFBZSxHQUFHLGNBQWMsR0FBaUIsR0FBSSxDQUFDO1NBQ3ZEO1FBRUQsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNCLE1BQU0sSUFBSSxHQUFHLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDMUQsZUFBZTtnQkFDYixjQUFjLEdBQUcsQ0FBQyxjQUFjLEdBQUcsQ0FBZSxJQUFLLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUNuRTtRQUVELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDMUMsQ0FBQztDQUNGLENBQUE7O1lBN0M2QixTQUFTOzs7QUFEMUIsZUFBZTtJQUgzQixVQUFVLENBQUM7UUFDVixVQUFVLEVBQUUsTUFBTTtLQUNuQixDQUFDO0dBQ1csZUFBZSxDQThDM0I7U0E5Q1ksZUFBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpblJlZjogV2luZG93UmVmKSB7fVxuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHBlciBzbGlkZSBpcyBjYWxjdWxhdGVkIGJ5IHRoZSBoZWxwIG9mXG4gICAqIHRoZSBpdGVtIHdpZHRoIGFuZCB0aGUgYXZhaWxhYmxlIHdpZHRoIG9mIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqIFRoaXMgYXBwb2FjaCBtYWtlcyBpdCBwb3NzaWJsZSB0byBwbGFjZSB0aGUgY2Fyb3VzZWwgaW4gZGlmZmVyZW50XG4gICAqIGxheW91dHMuIEluc3RlYWQgb2YgdXNpbmcgdGhlIHBhZ2UgYnJlYWtwb2ludHMsIHRoZSBob3N0IHNpemUgaXNcbiAgICogdGFrZW4gaW50byBhY2NvdW50LlxuICAgKlxuICAgKiBTaW5jZSB0aGVyZSdzIG5vIGVsZW1lbnQgcmVzaXplIEFQSSBhdmFpbGFibGUsIHdlIHVzZSB0aGVcbiAgICogd2luZG93IGByZXNpemVgIGV2ZW50LCBzbyB0aGF0IHdlIGNhbiBhZGp1c3QgdGhlIG51bWJlciBvZiBpdGVtc1xuICAgKiB3aGVuZXZlciB0aGUgd2luZG93IGdvdCByZXNpemVkLlxuICAgKi9cbiAgZ2V0SXRlbXNQZXJTbGlkZShcbiAgICBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBpdGVtV2lkdGg6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLndpblJlZi5yZXNpemUkLnBpcGUoXG4gICAgICBtYXAoKCkgPT4gKG5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsaWVudFdpZHRoKSxcbiAgICAgIG1hcCh0b3RhbFdpZHRoID0+IHRoaXMuY2FsY3VsYXRlSXRlbXModG90YWxXaWR0aCwgaXRlbVdpZHRoKSlcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBpdGVtcyBwZXIgZ2l2ZW4gaG9zdFNpemUuICBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBnaXZlblxuICAgKiBpbnRlbmRlZCBzaXplIGluIHBpeGVscyBvciBwZXJjZW50YWdlcy4gVGhlXG4gICAqXG4gICAqIEBwYXJhbSBhdmFpbGFibGVXaWR0aCBUaGUgYXZhaWxhYmxlIHdpZHRoIGluIHBpeGVscyBmb3IgdGhlIGNhcm91c2VsIGl0ZW1zLlxuICAgKiBAcGFyYW0gaXRlbVdpZHRoIFRoZSB3aWR0aCBwZXIgY2Fyb3VzZWwgaXRlbSwgaW4gcHggb3IgcGVyY2VudGFnZS5cbiAgICovXG4gIHByaXZhdGUgY2FsY3VsYXRlSXRlbXMoYXZhaWxhYmxlV2lkdGg6IG51bWJlciwgaXRlbVdpZHRoOiBzdHJpbmcpIHtcbiAgICBsZXQgY2FsY3VsYXRlZEl0ZW1zID0gMDtcbiAgICBpZiAoaXRlbVdpZHRoLmVuZHNXaXRoKCdweCcpKSB7XG4gICAgICBjb25zdCBudW0gPSBpdGVtV2lkdGguc3Vic3RyaW5nKDAsIGl0ZW1XaWR0aC5sZW5ndGggLSAyKTtcbiAgICAgIGNhbGN1bGF0ZWRJdGVtcyA9IGF2YWlsYWJsZVdpZHRoIC8gPG51bWJlcj4oPGFueT5udW0pO1xuICAgIH1cblxuICAgIGlmIChpdGVtV2lkdGguZW5kc1dpdGgoJyUnKSkge1xuICAgICAgY29uc3QgcGVyYyA9IGl0ZW1XaWR0aC5zdWJzdHJpbmcoMCwgaXRlbVdpZHRoLmxlbmd0aCAtIDEpO1xuICAgICAgY2FsY3VsYXRlZEl0ZW1zID1cbiAgICAgICAgYXZhaWxhYmxlV2lkdGggLyAoYXZhaWxhYmxlV2lkdGggKiAoPG51bWJlcj4oPGFueT5wZXJjKSAvIDEwMCkpO1xuICAgIH1cblxuICAgIHJldHVybiBNYXRoLmZsb29yKGNhbGN1bGF0ZWRJdGVtcykgfHwgMTtcbiAgfVxufVxuIl19