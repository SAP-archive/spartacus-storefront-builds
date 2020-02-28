import { Observable } from 'rxjs';
import { LayoutConfig } from '../config/layout-config';
import { IntersectionOptions } from './intersection.model';
/**
 * The IntersectionService uses the native IntersectionObserver (v2), which
 * can be used to implement pre-loading and deferred loading of DOM content.
 *
 */
import * as ɵngcc0 from '@angular/core';
export declare class IntersectionService {
    protected config: LayoutConfig;
    constructor(config: LayoutConfig);
    /**
     * Returns an Observable that emits only once a boolean value whenever
     * the given element has shown in the view port.
     *
     * The returned obervable will only emit the first value. The
     * observable must be cleaned up either way, since the value might never emit; it
     *  depends on whether the element appears in the view port.
     */
    isIntersected(element: HTMLElement, options?: IntersectionOptions): Observable<boolean>;
    /**
     * Indicates whenever the element intersects the view port. An optional margin
     * is used to intersects before the element shows up in the viewport.
     * A value is emitted each time the element intersects.
     *
     * This is private for now, but could be exposed as a public API
     * to introduce additional (css) render effects to the UI.
     */
    private intersects;
    private getRootMargin;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IntersectionService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0aW9uLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiaW50ZXJzZWN0aW9uLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyc2VjdGlvbi5tb2RlbCc7XG4vKipcbiAqIFRoZSBJbnRlcnNlY3Rpb25TZXJ2aWNlIHVzZXMgdGhlIG5hdGl2ZSBJbnRlcnNlY3Rpb25PYnNlcnZlciAodjIpLCB3aGljaFxuICogY2FuIGJlIHVzZWQgdG8gaW1wbGVtZW50IHByZS1sb2FkaW5nIGFuZCBkZWZlcnJlZCBsb2FkaW5nIG9mIERPTSBjb250ZW50LlxuICpcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgSW50ZXJzZWN0aW9uU2VydmljZSB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogTGF5b3V0Q29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogTGF5b3V0Q29uZmlnKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFuIE9ic2VydmFibGUgdGhhdCBlbWl0cyBvbmx5IG9uY2UgYSBib29sZWFuIHZhbHVlIHdoZW5ldmVyXG4gICAgICogdGhlIGdpdmVuIGVsZW1lbnQgaGFzIHNob3duIGluIHRoZSB2aWV3IHBvcnQuXG4gICAgICpcbiAgICAgKiBUaGUgcmV0dXJuZWQgb2JlcnZhYmxlIHdpbGwgb25seSBlbWl0IHRoZSBmaXJzdCB2YWx1ZS4gVGhlXG4gICAgICogb2JzZXJ2YWJsZSBtdXN0IGJlIGNsZWFuZWQgdXAgZWl0aGVyIHdheSwgc2luY2UgdGhlIHZhbHVlIG1pZ2h0IG5ldmVyIGVtaXQ7IGl0XG4gICAgICogIGRlcGVuZHMgb24gd2hldGhlciB0aGUgZWxlbWVudCBhcHBlYXJzIGluIHRoZSB2aWV3IHBvcnQuXG4gICAgICovXG4gICAgaXNJbnRlcnNlY3RlZChlbGVtZW50OiBIVE1MRWxlbWVudCwgb3B0aW9ucz86IEludGVyc2VjdGlvbk9wdGlvbnMpOiBPYnNlcnZhYmxlPGJvb2xlYW4+O1xuICAgIC8qKlxuICAgICAqIEluZGljYXRlcyB3aGVuZXZlciB0aGUgZWxlbWVudCBpbnRlcnNlY3RzIHRoZSB2aWV3IHBvcnQuIEFuIG9wdGlvbmFsIG1hcmdpblxuICAgICAqIGlzIHVzZWQgdG8gaW50ZXJzZWN0cyBiZWZvcmUgdGhlIGVsZW1lbnQgc2hvd3MgdXAgaW4gdGhlIHZpZXdwb3J0LlxuICAgICAqIEEgdmFsdWUgaXMgZW1pdHRlZCBlYWNoIHRpbWUgdGhlIGVsZW1lbnQgaW50ZXJzZWN0cy5cbiAgICAgKlxuICAgICAqIFRoaXMgaXMgcHJpdmF0ZSBmb3Igbm93LCBidXQgY291bGQgYmUgZXhwb3NlZCBhcyBhIHB1YmxpYyBBUElcbiAgICAgKiB0byBpbnRyb2R1Y2UgYWRkaXRpb25hbCAoY3NzKSByZW5kZXIgZWZmZWN0cyB0byB0aGUgVUkuXG4gICAgICovXG4gICAgcHJpdmF0ZSBpbnRlcnNlY3RzO1xuICAgIHByaXZhdGUgZ2V0Um9vdE1hcmdpbjtcbn1cbiJdfQ==