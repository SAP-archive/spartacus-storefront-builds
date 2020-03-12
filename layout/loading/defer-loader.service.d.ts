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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmZXItbG9hZGVyLnNlcnZpY2UuZC50cyIsInNvdXJjZXMiOlsiZGVmZXItbG9hZGVyLnNlcnZpY2UuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQVNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGVmZXJMb2FkaW5nU3RyYXRlZ3kgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgTGF5b3V0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2xheW91dC1jb25maWcnO1xuaW1wb3J0IHsgSW50ZXJzZWN0aW9uT3B0aW9ucyB9IGZyb20gJy4vaW50ZXJzZWN0aW9uLm1vZGVsJztcbmltcG9ydCB7IEludGVyc2VjdGlvblNlcnZpY2UgfSBmcm9tICcuL2ludGVyc2VjdGlvbi5zZXJ2aWNlJztcbi8qKlxuICogVGhlIGRlZmVyIGxvYWRpbmcgc2VyaXZjZSBpcyB1c2VkIHRvIGRlZmVyIGxvYWRpbmcgb2YgRE9NIGVsZW1lbnRzXG4gKiB1bnRpbCB0aGUgZWxlbWVudHMgYXJlIHJlcXVpcmVkIGZvciB0aGUgdXNlciBleHBlcmllbmNlLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBEZWZlckxvYWRlclNlcnZpY2Uge1xuICAgIHByaXZhdGUgcGxhdGZvcm1JZDtcbiAgICBwcm90ZWN0ZWQgY29uZmlnOiBMYXlvdXRDb25maWc7XG4gICAgcHJvdGVjdGVkIGludGVyc2VjdGlvblNlcnZpY2U6IEludGVyc2VjdGlvblNlcnZpY2U7XG4gICAgZ2xvYmFsTG9hZFN0cmF0ZWd5OiBEZWZlckxvYWRpbmdTdHJhdGVneTtcbiAgICBjb25zdHJ1Y3RvcihwbGF0Zm9ybUlkOiBPYmplY3QsIGNvbmZpZzogTGF5b3V0Q29uZmlnLCBpbnRlcnNlY3Rpb25TZXJ2aWNlOiBJbnRlcnNlY3Rpb25TZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBEZWZlciBsb2FkaW5nIHRpbGwgdGhlIGVsZW1lbnQgaW50ZXJzZWN0cyB0aGUgdmlld3BvcnQuXG4gICAgICpcbiAgICAgKiBXZSBldmFsdXRlcyB3aGV0aGVyIHdlIGluc3RhbnRseSBsb2FkIHRoZSBlbGVtZW50IGZvciBkaWZmZXJlbnQgcmVhc29uczpcbiAgICAgKiAtIHdlIHJ1biBpbiBTU1IgbW9kZVxuICAgICAqIC0gdGhlcmUncyBubyBnbG9iYWwgc3RyYXRlZ3kgZ2l2ZW5cbiAgICAgKiAtIHRoZSBnbG9iYWwgbG9hZGluZyBzdHJhdGVneSBpcyBzZXQgdG8gSU5TVEFOVCBsb2FkaW5nLFxuICAgICAqICAgYW5kIHRoZSBsb2FkaW5nIHN0cmF0ZWd5IGluIHRoZSBnaXZlbiBpcyBub3Qgc2V0IHRvIERFRkVSXG4gICAgICogLSB0aGUgbG9hZGluZyBzdHJhdGVneSBpbiB0aGUgZ2l2ZW4gb3B0aW9ucyBpcyBzZXQgdG8gSU5TVEFOVFxuICAgICAqL1xuICAgIGxvYWQoZWxlbWVudDogSFRNTEVsZW1lbnQsIG9wdGlvbnM/OiBJbnRlcnNlY3Rpb25PcHRpb25zKTogT2JzZXJ2YWJsZTxib29sZWFuPjtcbiAgICBwcml2YXRlIHNob3VsZExvYWRJbnN0YW50bHk7XG59XG4iXX0=