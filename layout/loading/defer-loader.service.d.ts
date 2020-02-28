import { DeferLoadingStrategy } from '@spartacus/core';
import { Observable } from 'rxjs';
import { LayoutConfig } from '../config/layout-config';
import { IntersectionOptions } from './intersection.model';
import { IntersectionService } from './intersection.service';
/**
 * The defer loading serivce is used to defer loading of DOM elements
 * until the elements are required for the user experience.
 */
import * as ɵngcc0 from '@angular/core';
export declare class DeferLoaderService {
    private platformId;
    protected config: LayoutConfig;
    protected intersectionService: IntersectionService;
    globalLoadStrategy: DeferLoadingStrategy;
    constructor(platformId: Object, config: LayoutConfig, intersectionService: IntersectionService);
    /**
     * Defer loading till the element intersects the viewport.
     *
     * We evalutes whether we instantly load the element for different reasons:
     * - we run in SSR mode
     * - there's no global strategy given
     * - the global loading strategy is set to INSTANT loading,
     *   and the loading strategy in the given is not set to DEFER
     * - the loading strategy in the given options is set to INSTANT
     */
    load(element: HTMLElement, options?: IntersectionOptions): Observable<boolean>;
    private shouldLoadInstantly;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<DeferLoaderService>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmZXItbG9hZGVyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZGVmZXItbG9hZGVyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERlZmVyTG9hZGluZ1N0cmF0ZWd5IH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IExheW91dENvbmZpZyB9IGZyb20gJy4uL2NvbmZpZy9sYXlvdXQtY29uZmlnJztcbmltcG9ydCB7IEludGVyc2VjdGlvbk9wdGlvbnMgfSBmcm9tICcuL2ludGVyc2VjdGlvbi5tb2RlbCc7XG5pbXBvcnQgeyBJbnRlcnNlY3Rpb25TZXJ2aWNlIH0gZnJvbSAnLi9pbnRlcnNlY3Rpb24uc2VydmljZSc7XG4vKipcbiAqIFRoZSBkZWZlciBsb2FkaW5nIHNlcml2Y2UgaXMgdXNlZCB0byBkZWZlciBsb2FkaW5nIG9mIERPTSBlbGVtZW50c1xuICogdW50aWwgdGhlIGVsZW1lbnRzIGFyZSByZXF1aXJlZCBmb3IgdGhlIHVzZXIgZXhwZXJpZW5jZS5cbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgRGVmZXJMb2FkZXJTZXJ2aWNlIHtcbiAgICBwcml2YXRlIHBsYXRmb3JtSWQ7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogTGF5b3V0Q29uZmlnO1xuICAgIHByb3RlY3RlZCBpbnRlcnNlY3Rpb25TZXJ2aWNlOiBJbnRlcnNlY3Rpb25TZXJ2aWNlO1xuICAgIGdsb2JhbExvYWRTdHJhdGVneTogRGVmZXJMb2FkaW5nU3RyYXRlZ3k7XG4gICAgY29uc3RydWN0b3IocGxhdGZvcm1JZDogT2JqZWN0LCBjb25maWc6IExheW91dENvbmZpZywgaW50ZXJzZWN0aW9uU2VydmljZTogSW50ZXJzZWN0aW9uU2VydmljZSk7XG4gICAgLyoqXG4gICAgICogRGVmZXIgbG9hZGluZyB0aWxsIHRoZSBlbGVtZW50IGludGVyc2VjdHMgdGhlIHZpZXdwb3J0LlxuICAgICAqXG4gICAgICogV2UgZXZhbHV0ZXMgd2hldGhlciB3ZSBpbnN0YW50bHkgbG9hZCB0aGUgZWxlbWVudCBmb3IgZGlmZmVyZW50IHJlYXNvbnM6XG4gICAgICogLSB3ZSBydW4gaW4gU1NSIG1vZGVcbiAgICAgKiAtIHRoZXJlJ3Mgbm8gZ2xvYmFsIHN0cmF0ZWd5IGdpdmVuXG4gICAgICogLSB0aGUgZ2xvYmFsIGxvYWRpbmcgc3RyYXRlZ3kgaXMgc2V0IHRvIElOU1RBTlQgbG9hZGluZyxcbiAgICAgKiAgIGFuZCB0aGUgbG9hZGluZyBzdHJhdGVneSBpbiB0aGUgZ2l2ZW4gaXMgbm90IHNldCB0byBERUZFUlxuICAgICAqIC0gdGhlIGxvYWRpbmcgc3RyYXRlZ3kgaW4gdGhlIGdpdmVuIG9wdGlvbnMgaXMgc2V0IHRvIElOU1RBTlRcbiAgICAgKi9cbiAgICBsb2FkKGVsZW1lbnQ6IEhUTUxFbGVtZW50LCBvcHRpb25zPzogSW50ZXJzZWN0aW9uT3B0aW9ucyk6IE9ic2VydmFibGU8Ym9vbGVhbj47XG4gICAgcHJpdmF0ZSBzaG91bGRMb2FkSW5zdGFudGx5O1xufVxuIl19