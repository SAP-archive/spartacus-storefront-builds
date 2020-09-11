import { Image } from '@spartacus/core';
import { BreakpointService } from '../../../layout/breakpoint/breakpoint.service';
import { StorefrontConfig } from '../../../storefront-config';
import { Media, MediaContainer, MediaFormatSize } from './media.model';
/**
 * Service which generates media URLs. It leverage the MediaContainer and MediaFormats so
 * that URLs and sizes are generated for the same media. This helps to improve performance
 * across difference devices and layouts.
 *
 * Media formats are optional, but highly recommended. The format will help the browser to
 * identify the right media for the right experience.
 *
 * The MediaService will generate absolute URLs in case relative URLs are provided for the Media.
 * The baseUrl is read from the `occConfig.backend.media.baseUrl` or
 * `occConfig.backend.occ.baseUrl`.
 */
import * as ɵngcc0 from '@angular/core';
export declare class MediaService {
    protected config: StorefrontConfig;
    /**
     * The BreakpointService is no longer used in version 2.0 as the different size formats are
     * driven by configuration only. There's however a change that this service will play a role
     * in the near future, which is why we keep the constructor as-is.
     */
    protected breakpointService: BreakpointService;
    /**
     * The media formats sorted by size. The media format representing the smallest
     * size is sorted on top.
     */
    private _sortedFormats;
    private _reversedFormats;
    constructor(config: StorefrontConfig, 
    /**
     * The BreakpointService is no longer used in version 2.0 as the different size formats are
     * driven by configuration only. There's however a change that this service will play a role
     * in the near future, which is why we keep the constructor as-is.
     */
    breakpointService: BreakpointService);
    /**
     * Returns a `Media` object with the main media (`src`) and various media (`src`)
     * for specific formats.
     */
    getMedia(mediaContainer: MediaContainer | Image, format?: string, alt?: string): Media;
    /**
     * Creates the media formats in a logical sorted order. The map contains the
     * format key and the format size information. We do this only once for performance
     * benefits.
     */
    protected get sortedFormats(): {
        code: string;
        size: MediaFormatSize;
    }[];
    /**
     * Creates the media formats in a reversed sorted order.
     */
    protected get reversedFormats(): {
        code: string;
        size: MediaFormatSize;
    }[];
    /**
     * Resolves the right media for the given format. The fo
     */
    protected resolveMedia(media: MediaContainer, format?: string): Image;
    /**
     * Validates the format against the given mediaContainer. If there is no format available,
     * or if the mediaContainer doesn't contain a media for the given media, the most optimal
     * format is resolved. If even that is not possible, the first format is returned.
     */
    protected resolveFormat(mediaContainer: MediaContainer, format?: string): string;
    /**
     * Returns the media format code with the best size.
     */
    protected resolveBestFormat(media: MediaContainer | Image): string;
    /**
     * Returns a set of media for the available media formats. Additionally, the congiured media
     * format width is added to the srcset, so that browsers can select the appropriate media.
     */
    protected resolveSrcSet(media: MediaContainer | Image): string;
    /**
     * Resolves the absolute URL for the given url. In most cases, this URL represents
     * the relative URL on the backend. In that case, we prefix the url with the baseUrl.
     */
    protected resolveAbsoluteUrl(url: string): string;
    /**
     * The base URL is either driven by a specific `backend.media.baseUrl`, or by the
     * `backend.occ.baseUrl`.
     *
     * The `backend.media.baseUrl` can be used to load media from a different location.
     *
     * In Commerce Cloud, a differnt location could mean a different "aspect".
     */
    protected getBaseUrl(): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MediaService, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuc2VydmljZS5kLnRzIiwic291cmNlcyI6WyJtZWRpYS5zZXJ2aWNlLmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkVBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICdAc3BhcnRhY3VzL2NvcmUnO1xuaW1wb3J0IHsgQnJlYWtwb2ludFNlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi9sYXlvdXQvYnJlYWtwb2ludC9icmVha3BvaW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgU3RvcmVmcm9udENvbmZpZyB9IGZyb20gJy4uLy4uLy4uL3N0b3JlZnJvbnQtY29uZmlnJztcbmltcG9ydCB7IE1lZGlhLCBNZWRpYUNvbnRhaW5lciwgTWVkaWFGb3JtYXRTaXplIH0gZnJvbSAnLi9tZWRpYS5tb2RlbCc7XG4vKipcbiAqIFNlcnZpY2Ugd2hpY2ggZ2VuZXJhdGVzIG1lZGlhIFVSTHMuIEl0IGxldmVyYWdlIHRoZSBNZWRpYUNvbnRhaW5lciBhbmQgTWVkaWFGb3JtYXRzIHNvXG4gKiB0aGF0IFVSTHMgYW5kIHNpemVzIGFyZSBnZW5lcmF0ZWQgZm9yIHRoZSBzYW1lIG1lZGlhLiBUaGlzIGhlbHBzIHRvIGltcHJvdmUgcGVyZm9ybWFuY2VcbiAqIGFjcm9zcyBkaWZmZXJlbmNlIGRldmljZXMgYW5kIGxheW91dHMuXG4gKlxuICogTWVkaWEgZm9ybWF0cyBhcmUgb3B0aW9uYWwsIGJ1dCBoaWdobHkgcmVjb21tZW5kZWQuIFRoZSBmb3JtYXQgd2lsbCBoZWxwIHRoZSBicm93c2VyIHRvXG4gKiBpZGVudGlmeSB0aGUgcmlnaHQgbWVkaWEgZm9yIHRoZSByaWdodCBleHBlcmllbmNlLlxuICpcbiAqIFRoZSBNZWRpYVNlcnZpY2Ugd2lsbCBnZW5lcmF0ZSBhYnNvbHV0ZSBVUkxzIGluIGNhc2UgcmVsYXRpdmUgVVJMcyBhcmUgcHJvdmlkZWQgZm9yIHRoZSBNZWRpYS5cbiAqIFRoZSBiYXNlVXJsIGlzIHJlYWQgZnJvbSB0aGUgYG9jY0NvbmZpZy5iYWNrZW5kLm1lZGlhLmJhc2VVcmxgIG9yXG4gKiBgb2NjQ29uZmlnLmJhY2tlbmQub2NjLmJhc2VVcmxgLlxuICovXG5leHBvcnQgZGVjbGFyZSBjbGFzcyBNZWRpYVNlcnZpY2Uge1xuICAgIHByb3RlY3RlZCBjb25maWc6IFN0b3JlZnJvbnRDb25maWc7XG4gICAgLyoqXG4gICAgICogVGhlIEJyZWFrcG9pbnRTZXJ2aWNlIGlzIG5vIGxvbmdlciB1c2VkIGluIHZlcnNpb24gMi4wIGFzIHRoZSBkaWZmZXJlbnQgc2l6ZSBmb3JtYXRzIGFyZVxuICAgICAqIGRyaXZlbiBieSBjb25maWd1cmF0aW9uIG9ubHkuIFRoZXJlJ3MgaG93ZXZlciBhIGNoYW5nZSB0aGF0IHRoaXMgc2VydmljZSB3aWxsIHBsYXkgYSByb2xlXG4gICAgICogaW4gdGhlIG5lYXIgZnV0dXJlLCB3aGljaCBpcyB3aHkgd2Uga2VlcCB0aGUgY29uc3RydWN0b3IgYXMtaXMuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGJyZWFrcG9pbnRTZXJ2aWNlOiBCcmVha3BvaW50U2VydmljZTtcbiAgICAvKipcbiAgICAgKiBUaGUgbWVkaWEgZm9ybWF0cyBzb3J0ZWQgYnkgc2l6ZS4gVGhlIG1lZGlhIGZvcm1hdCByZXByZXNlbnRpbmcgdGhlIHNtYWxsZXN0XG4gICAgICogc2l6ZSBpcyBzb3J0ZWQgb24gdG9wLlxuICAgICAqL1xuICAgIHByaXZhdGUgX3NvcnRlZEZvcm1hdHM7XG4gICAgcHJpdmF0ZSBfcmV2ZXJzZWRGb3JtYXRzO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogU3RvcmVmcm9udENvbmZpZywgXG4gICAgLyoqXG4gICAgICogVGhlIEJyZWFrcG9pbnRTZXJ2aWNlIGlzIG5vIGxvbmdlciB1c2VkIGluIHZlcnNpb24gMi4wIGFzIHRoZSBkaWZmZXJlbnQgc2l6ZSBmb3JtYXRzIGFyZVxuICAgICAqIGRyaXZlbiBieSBjb25maWd1cmF0aW9uIG9ubHkuIFRoZXJlJ3MgaG93ZXZlciBhIGNoYW5nZSB0aGF0IHRoaXMgc2VydmljZSB3aWxsIHBsYXkgYSByb2xlXG4gICAgICogaW4gdGhlIG5lYXIgZnV0dXJlLCB3aGljaCBpcyB3aHkgd2Uga2VlcCB0aGUgY29uc3RydWN0b3IgYXMtaXMuXG4gICAgICovXG4gICAgYnJlYWtwb2ludFNlcnZpY2U6IEJyZWFrcG9pbnRTZXJ2aWNlKTtcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgYE1lZGlhYCBvYmplY3Qgd2l0aCB0aGUgbWFpbiBtZWRpYSAoYHNyY2ApIGFuZCB2YXJpb3VzIG1lZGlhIChgc3JjYClcbiAgICAgKiBmb3Igc3BlY2lmaWMgZm9ybWF0cy5cbiAgICAgKi9cbiAgICBnZXRNZWRpYShtZWRpYUNvbnRhaW5lcjogTWVkaWFDb250YWluZXIgfCBJbWFnZSwgZm9ybWF0Pzogc3RyaW5nLCBhbHQ/OiBzdHJpbmcpOiBNZWRpYTtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBtZWRpYSBmb3JtYXRzIGluIGEgbG9naWNhbCBzb3J0ZWQgb3JkZXIuIFRoZSBtYXAgY29udGFpbnMgdGhlXG4gICAgICogZm9ybWF0IGtleSBhbmQgdGhlIGZvcm1hdCBzaXplIGluZm9ybWF0aW9uLiBXZSBkbyB0aGlzIG9ubHkgb25jZSBmb3IgcGVyZm9ybWFuY2VcbiAgICAgKiBiZW5lZml0cy5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IHNvcnRlZEZvcm1hdHMoKToge1xuICAgICAgICBjb2RlOiBzdHJpbmc7XG4gICAgICAgIHNpemU6IE1lZGlhRm9ybWF0U2l6ZTtcbiAgICB9W107XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgbWVkaWEgZm9ybWF0cyBpbiBhIHJldmVyc2VkIHNvcnRlZCBvcmRlci5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgZ2V0IHJldmVyc2VkRm9ybWF0cygpOiB7XG4gICAgICAgIGNvZGU6IHN0cmluZztcbiAgICAgICAgc2l6ZTogTWVkaWFGb3JtYXRTaXplO1xuICAgIH1bXTtcbiAgICAvKipcbiAgICAgKiBSZXNvbHZlcyB0aGUgcmlnaHQgbWVkaWEgZm9yIHRoZSBnaXZlbiBmb3JtYXQuIFRoZSBmb1xuICAgICAqL1xuICAgIHByb3RlY3RlZCByZXNvbHZlTWVkaWEobWVkaWE6IE1lZGlhQ29udGFpbmVyLCBmb3JtYXQ/OiBzdHJpbmcpOiBJbWFnZTtcbiAgICAvKipcbiAgICAgKiBWYWxpZGF0ZXMgdGhlIGZvcm1hdCBhZ2FpbnN0IHRoZSBnaXZlbiBtZWRpYUNvbnRhaW5lci4gSWYgdGhlcmUgaXMgbm8gZm9ybWF0IGF2YWlsYWJsZSxcbiAgICAgKiBvciBpZiB0aGUgbWVkaWFDb250YWluZXIgZG9lc24ndCBjb250YWluIGEgbWVkaWEgZm9yIHRoZSBnaXZlbiBtZWRpYSwgdGhlIG1vc3Qgb3B0aW1hbFxuICAgICAqIGZvcm1hdCBpcyByZXNvbHZlZC4gSWYgZXZlbiB0aGF0IGlzIG5vdCBwb3NzaWJsZSwgdGhlIGZpcnN0IGZvcm1hdCBpcyByZXR1cm5lZC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZUZvcm1hdChtZWRpYUNvbnRhaW5lcjogTWVkaWFDb250YWluZXIsIGZvcm1hdD86IHN0cmluZyk6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtZWRpYSBmb3JtYXQgY29kZSB3aXRoIHRoZSBiZXN0IHNpemUuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlc29sdmVCZXN0Rm9ybWF0KG1lZGlhOiBNZWRpYUNvbnRhaW5lciB8IEltYWdlKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBzZXQgb2YgbWVkaWEgZm9yIHRoZSBhdmFpbGFibGUgbWVkaWEgZm9ybWF0cy4gQWRkaXRpb25hbGx5LCB0aGUgY29uZ2l1cmVkIG1lZGlhXG4gICAgICogZm9ybWF0IHdpZHRoIGlzIGFkZGVkIHRvIHRoZSBzcmNzZXQsIHNvIHRoYXQgYnJvd3NlcnMgY2FuIHNlbGVjdCB0aGUgYXBwcm9wcmlhdGUgbWVkaWEuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIHJlc29sdmVTcmNTZXQobWVkaWE6IE1lZGlhQ29udGFpbmVyIHwgSW1hZ2UpOiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogUmVzb2x2ZXMgdGhlIGFic29sdXRlIFVSTCBmb3IgdGhlIGdpdmVuIHVybC4gSW4gbW9zdCBjYXNlcywgdGhpcyBVUkwgcmVwcmVzZW50c1xuICAgICAqIHRoZSByZWxhdGl2ZSBVUkwgb24gdGhlIGJhY2tlbmQuIEluIHRoYXQgY2FzZSwgd2UgcHJlZml4IHRoZSB1cmwgd2l0aCB0aGUgYmFzZVVybC5cbiAgICAgKi9cbiAgICBwcm90ZWN0ZWQgcmVzb2x2ZUFic29sdXRlVXJsKHVybDogc3RyaW5nKTogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIFRoZSBiYXNlIFVSTCBpcyBlaXRoZXIgZHJpdmVuIGJ5IGEgc3BlY2lmaWMgYGJhY2tlbmQubWVkaWEuYmFzZVVybGAsIG9yIGJ5IHRoZVxuICAgICAqIGBiYWNrZW5kLm9jYy5iYXNlVXJsYC5cbiAgICAgKlxuICAgICAqIFRoZSBgYmFja2VuZC5tZWRpYS5iYXNlVXJsYCBjYW4gYmUgdXNlZCB0byBsb2FkIG1lZGlhIGZyb20gYSBkaWZmZXJlbnQgbG9jYXRpb24uXG4gICAgICpcbiAgICAgKiBJbiBDb21tZXJjZSBDbG91ZCwgYSBkaWZmZXJudCBsb2NhdGlvbiBjb3VsZCBtZWFuIGEgZGlmZmVyZW50IFwiYXNwZWN0XCIuXG4gICAgICovXG4gICAgcHJvdGVjdGVkIGdldEJhc2VVcmwoKTogc3RyaW5nO1xufVxuIl19