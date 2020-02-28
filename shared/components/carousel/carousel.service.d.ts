import { WindowRef } from '@spartacus/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export declare class CarouselService {
    private winRef;
    constructor(winRef: WindowRef);
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
    getItemsPerSlide(nativeElement: HTMLElement, itemWidth: string): Observable<number>;
    /**
     * Calculates the number of items per given hostSize.  calculated based on the given
     * intended size in pixels or percentages. The
     *
     * @param availableWidth The available width in pixels for the carousel items.
     * @param itemWidth The width per carousel item, in px or percentage.
     */
    private calculateItems;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CarouselService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjYXJvdXNlbC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkE7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgV2luZG93UmVmIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIENhcm91c2VsU2VydmljZSB7XG4gICAgcHJpdmF0ZSB3aW5SZWY7XG4gICAgY29uc3RydWN0b3Iod2luUmVmOiBXaW5kb3dSZWYpO1xuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgcGVyIHNsaWRlIGlzIGNhbGN1bGF0ZWQgYnkgdGhlIGhlbHAgb2ZcbiAgICAgKiB0aGUgaXRlbSB3aWR0aCBhbmQgdGhlIGF2YWlsYWJsZSB3aWR0aCBvZiB0aGUgaG9zdCBlbGVtZW50LlxuICAgICAqIFRoaXMgYXBwb2FjaCBtYWtlcyBpdCBwb3NzaWJsZSB0byBwbGFjZSB0aGUgY2Fyb3VzZWwgaW4gZGlmZmVyZW50XG4gICAgICogbGF5b3V0cy4gSW5zdGVhZCBvZiB1c2luZyB0aGUgcGFnZSBicmVha3BvaW50cywgdGhlIGhvc3Qgc2l6ZSBpc1xuICAgICAqIHRha2VuIGludG8gYWNjb3VudC5cbiAgICAgKlxuICAgICAqIFNpbmNlIHRoZXJlJ3Mgbm8gZWxlbWVudCByZXNpemUgQVBJIGF2YWlsYWJsZSwgd2UgdXNlIHRoZVxuICAgICAqIHdpbmRvdyBgcmVzaXplYCBldmVudCwgc28gdGhhdCB3ZSBjYW4gYWRqdXN0IHRoZSBudW1iZXIgb2YgaXRlbXNcbiAgICAgKiB3aGVuZXZlciB0aGUgd2luZG93IGdvdCByZXNpemVkLlxuICAgICAqL1xuICAgIGdldEl0ZW1zUGVyU2xpZGUobmF0aXZlRWxlbWVudDogSFRNTEVsZW1lbnQsIGl0ZW1XaWR0aDogc3RyaW5nKTogT2JzZXJ2YWJsZTxudW1iZXI+O1xuICAgIC8qKlxuICAgICAqIENhbGN1bGF0ZXMgdGhlIG51bWJlciBvZiBpdGVtcyBwZXIgZ2l2ZW4gaG9zdFNpemUuICBjYWxjdWxhdGVkIGJhc2VkIG9uIHRoZSBnaXZlblxuICAgICAqIGludGVuZGVkIHNpemUgaW4gcGl4ZWxzIG9yIHBlcmNlbnRhZ2VzLiBUaGVcbiAgICAgKlxuICAgICAqIEBwYXJhbSBhdmFpbGFibGVXaWR0aCBUaGUgYXZhaWxhYmxlIHdpZHRoIGluIHBpeGVscyBmb3IgdGhlIGNhcm91c2VsIGl0ZW1zLlxuICAgICAqIEBwYXJhbSBpdGVtV2lkdGggVGhlIHdpZHRoIHBlciBjYXJvdXNlbCBpdGVtLCBpbiBweCBvciBwZXJjZW50YWdlLlxuICAgICAqL1xuICAgIHByaXZhdGUgY2FsY3VsYXRlSXRlbXM7XG59XG4iXX0=