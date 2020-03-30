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
    static ɵfac: ɵngcc0.ɵɵFactoryDef<IntersectionService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJzZWN0aW9uLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiaW50ZXJzZWN0aW9uLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7O0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJzZWN0aW9uLm1vZGVsJztcbi8qKlxuICogVGhlIEludGVyc2VjdGlvblNlcnZpY2UgdXNlcyB0aGUgbmF0aXZlIEludGVyc2VjdGlvbk9ic2VydmVyICh2MiksIHdoaWNoXG4gKiBjYW4gYmUgdXNlZCB0byBpbXBsZW1lbnQgcHJlLWxvYWRpbmcgYW5kIGRlZmVycmVkIGxvYWRpbmcgb2YgRE9NIGNvbnRlbnQuXG4gKlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBJbnRlcnNlY3Rpb25TZXJ2aWNlIHtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBMYXlvdXRDb25maWc7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBMYXlvdXRDb25maWcpO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gT2JzZXJ2YWJsZSB0aGF0IGVtaXRzIG9ubHkgb25jZSBhIGJvb2xlYW4gdmFsdWUgd2hlbmV2ZXJcbiAgICAgKiB0aGUgZ2l2ZW4gZWxlbWVudCBoYXMgc2hvd24gaW4gdGhlIHZpZXcgcG9ydC5cbiAgICAgKlxuICAgICAqIFRoZSByZXR1cm5lZCBvYmVydmFibGUgd2lsbCBvbmx5IGVtaXQgdGhlIGZpcnN0IHZhbHVlLiBUaGVcbiAgICAgKiBvYnNlcnZhYmxlIG11c3QgYmUgY2xlYW5lZCB1cCBlaXRoZXIgd2F5LCBzaW5jZSB0aGUgdmFsdWUgbWlnaHQgbmV2ZXIgZW1pdDsgaXRcbiAgICAgKiAgZGVwZW5kcyBvbiB3aGV0aGVyIHRoZSBlbGVtZW50IGFwcGVhcnMgaW4gdGhlIHZpZXcgcG9ydC5cbiAgICAgKi9cbiAgICBpc0ludGVyc2VjdGVkKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBvcHRpb25zPzogSW50ZXJzZWN0aW9uT3B0aW9ucyk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgLyoqXG4gICAgICogSW5kaWNhdGVzIHdoZW5ldmVyIHRoZSBlbGVtZW50IGludGVyc2VjdHMgdGhlIHZpZXcgcG9ydC4gQW4gb3B0aW9uYWwgbWFyZ2luXG4gICAgICogaXMgdXNlZCB0byBpbnRlcnNlY3RzIGJlZm9yZSB0aGUgZWxlbWVudCBzaG93cyB1cCBpbiB0aGUgdmlld3BvcnQuXG4gICAgICogQSB2YWx1ZSBpcyBlbWl0dGVkIGVhY2ggdGltZSB0aGUgZWxlbWVudCBpbnRlcnNlY3RzLlxuICAgICAqXG4gICAgICogVGhpcyBpcyBwcml2YXRlIGZvciBub3csIGJ1dCBjb3VsZCBiZSBleHBvc2VkIGFzIGEgcHVibGljIEFQSVxuICAgICAqIHRvIGludHJvZHVjZSBhZGRpdGlvbmFsIChjc3MpIHJlbmRlciBlZmZlY3RzIHRvIHRoZSBVSS5cbiAgICAgKi9cbiAgICBwcml2YXRlIGludGVyc2VjdHM7XG4gICAgcHJpdmF0ZSBnZXRSb290TWFyZ2luO1xufVxuIl19