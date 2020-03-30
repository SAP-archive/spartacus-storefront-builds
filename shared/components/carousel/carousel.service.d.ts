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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<CarouselService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJjYXJvdXNlbC5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1QkEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBXaW5kb3dSZWYgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgQ2Fyb3VzZWxTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHdpblJlZjtcbiAgICBjb25zdHJ1Y3Rvcih3aW5SZWY6IFdpbmRvd1JlZik7XG4gICAgLyoqXG4gICAgICogVGhlIG51bWJlciBvZiBpdGVtcyBwZXIgc2xpZGUgaXMgY2FsY3VsYXRlZCBieSB0aGUgaGVscCBvZlxuICAgICAqIHRoZSBpdGVtIHdpZHRoIGFuZCB0aGUgYXZhaWxhYmxlIHdpZHRoIG9mIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgICogVGhpcyBhcHBvYWNoIG1ha2VzIGl0IHBvc3NpYmxlIHRvIHBsYWNlIHRoZSBjYXJvdXNlbCBpbiBkaWZmZXJlbnRcbiAgICAgKiBsYXlvdXRzLiBJbnN0ZWFkIG9mIHVzaW5nIHRoZSBwYWdlIGJyZWFrcG9pbnRzLCB0aGUgaG9zdCBzaXplIGlzXG4gICAgICogdGFrZW4gaW50byBhY2NvdW50LlxuICAgICAqXG4gICAgICogU2luY2UgdGhlcmUncyBubyBlbGVtZW50IHJlc2l6ZSBBUEkgYXZhaWxhYmxlLCB3ZSB1c2UgdGhlXG4gICAgICogd2luZG93IGByZXNpemVgIGV2ZW50LCBzbyB0aGF0IHdlIGNhbiBhZGp1c3QgdGhlIG51bWJlciBvZiBpdGVtc1xuICAgICAqIHdoZW5ldmVyIHRoZSB3aW5kb3cgZ290IHJlc2l6ZWQuXG4gICAgICovXG4gICAgZ2V0SXRlbXNQZXJTbGlkZShuYXRpdmVFbGVtZW50OiBIVE1MRWxlbWVudCwgaXRlbVdpZHRoOiBzdHJpbmcpOiBPYnNlcnZhYmxlPG51bWJlcj47XG4gICAgLyoqXG4gICAgICogQ2FsY3VsYXRlcyB0aGUgbnVtYmVyIG9mIGl0ZW1zIHBlciBnaXZlbiBob3N0U2l6ZS4gIGNhbGN1bGF0ZWQgYmFzZWQgb24gdGhlIGdpdmVuXG4gICAgICogaW50ZW5kZWQgc2l6ZSBpbiBwaXhlbHMgb3IgcGVyY2VudGFnZXMuIFRoZVxuICAgICAqXG4gICAgICogQHBhcmFtIGF2YWlsYWJsZVdpZHRoIFRoZSBhdmFpbGFibGUgd2lkdGggaW4gcGl4ZWxzIGZvciB0aGUgY2Fyb3VzZWwgaXRlbXMuXG4gICAgICogQHBhcmFtIGl0ZW1XaWR0aCBUaGUgd2lkdGggcGVyIGNhcm91c2VsIGl0ZW0sIGluIHB4IG9yIHBlcmNlbnRhZ2UuXG4gICAgICovXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVJdGVtcztcbn1cbiJdfQ==