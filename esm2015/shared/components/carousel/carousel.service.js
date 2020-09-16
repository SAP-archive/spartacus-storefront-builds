import { Injectable } from '@angular/core';
import { WindowRef } from '@spartacus/core';
import { map } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "@spartacus/core";
export class CarouselService {
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
}
CarouselService.ɵprov = i0.ɵɵdefineInjectable({ factory: function CarouselService_Factory() { return new CarouselService(i0.ɵɵinject(i1.WindowRef)); }, token: CarouselService, providedIn: "root" });
CarouselService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root',
            },] }
];
CarouselService.ctorParameters = () => [
    { type: WindowRef }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3N0b3JlZnJvbnRsaWIvc3JjL3NoYXJlZC9jb21wb25lbnRzL2Nhcm91c2VsL2Nhcm91c2VsLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFNUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7QUFLckMsTUFBTSxPQUFPLGVBQWU7SUFDMUIsWUFBb0IsTUFBaUI7UUFBakIsV0FBTSxHQUFOLE1BQU0sQ0FBVztJQUFHLENBQUM7SUFFekM7Ozs7Ozs7Ozs7T0FVRztJQUNILGdCQUFnQixDQUNkLGFBQTBCLEVBQzFCLFNBQWlCO1FBRWpCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUM3QixHQUFHLENBQUMsR0FBRyxFQUFFLENBQUUsYUFBNkIsQ0FBQyxXQUFXLENBQUMsRUFDckQsR0FBRyxDQUFDLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUNoRSxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLGNBQWMsQ0FBQyxjQUFzQixFQUFFLFNBQWlCO1FBQzlELElBQUksZUFBZSxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDNUIsTUFBTSxHQUFHLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUN6RCxlQUFlLEdBQUcsY0FBYyxHQUFpQixHQUFJLENBQUM7U0FDdkQ7UUFFRCxJQUFJLFNBQVMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsTUFBTSxJQUFJLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztZQUMxRCxlQUFlO2dCQUNiLGNBQWMsR0FBRyxDQUFDLGNBQWMsR0FBRyxDQUFlLElBQUssR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ25FO1FBRUQsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDOzs7O1lBaERGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7O1lBTlEsU0FBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFdpbmRvd1JlZiB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBtYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJvdXNlbFNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHdpblJlZjogV2luZG93UmVmKSB7fVxuXG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGl0ZW1zIHBlciBzbGlkZSBpcyBjYWxjdWxhdGVkIGJ5IHRoZSBoZWxwIG9mXG4gICAqIHRoZSBpdGVtIHdpZHRoIGFuZCB0aGUgYXZhaWxhYmxlIHdpZHRoIG9mIHRoZSBob3N0IGVsZW1lbnQuXG4gICAqIFRoaXMgYXBwb2FjaCBtYWtlcyBpdCBwb3NzaWJsZSB0byBwbGFjZSB0aGUgY2Fyb3VzZWwgaW4gZGlmZmVyZW50XG4gICAqIGxheW91dHMuIEluc3RlYWQgb2YgdXNpbmcgdGhlIHBhZ2UgYnJlYWtwb2ludHMsIHRoZSBob3N0IHNpemUgaXNcbiAgICogdGFrZW4gaW50byBhY2NvdW50LlxuICAgKlxuICAgKiBTaW5jZSB0aGVyZSdzIG5vIGVsZW1lbnQgcmVzaXplIEFQSSBhdmFpbGFibGUsIHdlIHVzZSB0aGVcbiAgICogd2luZG93IGByZXNpemVgIGV2ZW50LCBzbyB0aGF0IHdlIGNhbiBhZGp1c3QgdGhlIG51bWJlciBvZiBpdGVtc1xuICAgKiB3aGVuZXZlciB0aGUgd2luZG93IGdvdCByZXNpemVkLlxuICAgKi9cbiAgZ2V0SXRlbXNQZXJTbGlkZShcbiAgICBuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgICBpdGVtV2lkdGg6IHN0cmluZ1xuICApOiBPYnNlcnZhYmxlPG51bWJlcj4ge1xuICAgIHJldHVybiB0aGlzLndpblJlZi5yZXNpemUkLnBpcGUoXG4gICAgICBtYXAoKCkgPT4gKG5hdGl2ZUVsZW1lbnQgYXMgSFRNTEVsZW1lbnQpLmNsaWVudFdpZHRoKSxcbiAgICAgIG1hcCgodG90YWxXaWR0aCkgPT4gdGhpcy5jYWxjdWxhdGVJdGVtcyh0b3RhbFdpZHRoLCBpdGVtV2lkdGgpKVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgbnVtYmVyIG9mIGl0ZW1zIHBlciBnaXZlbiBob3N0U2l6ZS4gIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGdpdmVuXG4gICAqIGludGVuZGVkIHNpemUgaW4gcGl4ZWxzIG9yIHBlcmNlbnRhZ2VzLiBUaGVcbiAgICpcbiAgICogQHBhcmFtIGF2YWlsYWJsZVdpZHRoIFRoZSBhdmFpbGFibGUgd2lkdGggaW4gcGl4ZWxzIGZvciB0aGUgY2Fyb3VzZWwgaXRlbXMuXG4gICAqIEBwYXJhbSBpdGVtV2lkdGggVGhlIHdpZHRoIHBlciBjYXJvdXNlbCBpdGVtLCBpbiBweCBvciBwZXJjZW50YWdlLlxuICAgKi9cbiAgcHJpdmF0ZSBjYWxjdWxhdGVJdGVtcyhhdmFpbGFibGVXaWR0aDogbnVtYmVyLCBpdGVtV2lkdGg6IHN0cmluZykge1xuICAgIGxldCBjYWxjdWxhdGVkSXRlbXMgPSAwO1xuICAgIGlmIChpdGVtV2lkdGguZW5kc1dpdGgoJ3B4JykpIHtcbiAgICAgIGNvbnN0IG51bSA9IGl0ZW1XaWR0aC5zdWJzdHJpbmcoMCwgaXRlbVdpZHRoLmxlbmd0aCAtIDIpO1xuICAgICAgY2FsY3VsYXRlZEl0ZW1zID0gYXZhaWxhYmxlV2lkdGggLyA8bnVtYmVyPig8YW55Pm51bSk7XG4gICAgfVxuXG4gICAgaWYgKGl0ZW1XaWR0aC5lbmRzV2l0aCgnJScpKSB7XG4gICAgICBjb25zdCBwZXJjID0gaXRlbVdpZHRoLnN1YnN0cmluZygwLCBpdGVtV2lkdGgubGVuZ3RoIC0gMSk7XG4gICAgICBjYWxjdWxhdGVkSXRlbXMgPVxuICAgICAgICBhdmFpbGFibGVXaWR0aCAvIChhdmFpbGFibGVXaWR0aCAqICg8bnVtYmVyPig8YW55PnBlcmMpIC8gMTAwKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoY2FsY3VsYXRlZEl0ZW1zKSB8fCAxO1xuICB9XG59XG4iXX0=