import { EventEmitter, OnChanges } from '@angular/core';
import { Media } from './media.model';
import { MediaService } from './media.service';
import * as ɵngcc0 from '@angular/core';
export declare class MediaComponent implements OnChanges {
    protected mediaService: MediaService;
    /**
     * The media container can hold multiple media items, so that
     * a specific media (by format) can be used or multiple media
     * can be provided in a `srcset` so the browser will figure out
     * the best media for the device.
     */
    container: any;
    /**
     * if a media format is given, a media for the given format will be rendered
     */
    format: string;
    /**
     * A specific alt text for an image, which overrules the alt text
     * from the container data.
     */
    alt: string;
    /**
     * Once the media is loaded, we emit an event.
     */
    loaded: EventEmitter<Boolean>;
    /**
     * The media contains the info for the UI to create the image. This media
     * object might contain more info once other media types (i.e. video) is supported.
     */
    media: Media;
    /**
     * The `cx-media` component has an `is-initialized` class as long as the
     * media is being initialized.
     */
    isInitialized: boolean;
    /**
     * The `cx-media` component has a `is-loading` class as long as the
     * media is loaded. Wehn the media is loaded, the `is-initialized` class
     * is added.
     */
    isLoading: boolean;
    /**
     * When there's no media provided for the content, or in case an error
     * happened during loading, we add the `is-missing` class. Visual effects
     * can be controlled by CSS.
     */
    isMissing: boolean;
    constructor(mediaService: MediaService);
    ngOnChanges(): void;
    /**
     * Creates the `Media` object
     */
    private create;
    /**
     * This handler is called from the UI when the image is loaded.
     */
    loadHandler(): void;
    /**
     * Whenever an error happens during load, we mark the component
     * with css classes to have a missing media.
     */
    errorHandler(): void;
    private handleMissing;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MediaComponent>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MediaComponent, "cx-media", never, {
    "container": "container";
    "format": "format";
    "alt": "alt";
}, {
    "loaded": "loaded";
}, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm1lZGlhLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBOyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RW1pdHRlciwgT25DaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZWRpYSB9IGZyb20gJy4vbWVkaWEubW9kZWwnO1xuaW1wb3J0IHsgTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi9tZWRpYS5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1lZGlhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBwcm90ZWN0ZWQgbWVkaWFTZXJ2aWNlOiBNZWRpYVNlcnZpY2U7XG4gICAgLyoqXG4gICAgICogVGhlIG1lZGlhIGNvbnRhaW5lciBjYW4gaG9sZCBtdWx0aXBsZSBtZWRpYSBpdGVtcywgc28gdGhhdFxuICAgICAqIGEgc3BlY2lmaWMgbWVkaWEgKGJ5IGZvcm1hdCkgY2FuIGJlIHVzZWQgb3IgbXVsdGlwbGUgbWVkaWFcbiAgICAgKiBjYW4gYmUgcHJvdmlkZWQgaW4gYSBgc3Jjc2V0YCBzbyB0aGUgYnJvd3NlciB3aWxsIGZpZ3VyZSBvdXRcbiAgICAgKiB0aGUgYmVzdCBtZWRpYSBmb3IgdGhlIGRldmljZS5cbiAgICAgKi9cbiAgICBjb250YWluZXI6IGFueTtcbiAgICAvKipcbiAgICAgKiBpZiBhIG1lZGlhIGZvcm1hdCBpcyBnaXZlbiwgYSBtZWRpYSBmb3IgdGhlIGdpdmVuIGZvcm1hdCB3aWxsIGJlIHJlbmRlcmVkXG4gICAgICovXG4gICAgZm9ybWF0OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQSBzcGVjaWZpYyBhbHQgdGV4dCBmb3IgYW4gaW1hZ2UsIHdoaWNoIG92ZXJydWxlcyB0aGUgYWx0IHRleHRcbiAgICAgKiBmcm9tIHRoZSBjb250YWluZXIgZGF0YS5cbiAgICAgKi9cbiAgICBhbHQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBPbmNlIHRoZSBtZWRpYSBpcyBsb2FkZWQsIHdlIGVtaXQgYW4gZXZlbnQuXG4gICAgICovXG4gICAgbG9hZGVkOiBFdmVudEVtaXR0ZXI8Qm9vbGVhbj47XG4gICAgLyoqXG4gICAgICogVGhlIG1lZGlhIGNvbnRhaW5zIHRoZSBpbmZvIGZvciB0aGUgVUkgdG8gY3JlYXRlIHRoZSBpbWFnZS4gVGhpcyBtZWRpYVxuICAgICAqIG9iamVjdCBtaWdodCBjb250YWluIG1vcmUgaW5mbyBvbmNlIG90aGVyIG1lZGlhIHR5cGVzIChpLmUuIHZpZGVvKSBpcyBzdXBwb3J0ZWQuXG4gICAgICovXG4gICAgbWVkaWE6IE1lZGlhO1xuICAgIC8qKlxuICAgICAqIFRoZSBgY3gtbWVkaWFgIGNvbXBvbmVudCBoYXMgYW4gYGlzLWluaXRpYWxpemVkYCBjbGFzcyBhcyBsb25nIGFzIHRoZVxuICAgICAqIG1lZGlhIGlzIGJlaW5nIGluaXRpYWxpemVkLlxuICAgICAqL1xuICAgIGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogVGhlIGBjeC1tZWRpYWAgY29tcG9uZW50IGhhcyBhIGBpcy1sb2FkaW5nYCBjbGFzcyBhcyBsb25nIGFzIHRoZVxuICAgICAqIG1lZGlhIGlzIGxvYWRlZC4gV2VobiB0aGUgbWVkaWEgaXMgbG9hZGVkLCB0aGUgYGlzLWluaXRpYWxpemVkYCBjbGFzc1xuICAgICAqIGlzIGFkZGVkLlxuICAgICAqL1xuICAgIGlzTG9hZGluZzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBXaGVuIHRoZXJlJ3Mgbm8gbWVkaWEgcHJvdmlkZWQgZm9yIHRoZSBjb250ZW50LCBvciBpbiBjYXNlIGFuIGVycm9yXG4gICAgICogaGFwcGVuZWQgZHVyaW5nIGxvYWRpbmcsIHdlIGFkZCB0aGUgYGlzLW1pc3NpbmdgIGNsYXNzLiBWaXN1YWwgZWZmZWN0c1xuICAgICAqIGNhbiBiZSBjb250cm9sbGVkIGJ5IENTUy5cbiAgICAgKi9cbiAgICBpc01pc3Npbmc6IGJvb2xlYW47XG4gICAgY29uc3RydWN0b3IobWVkaWFTZXJ2aWNlOiBNZWRpYVNlcnZpY2UpO1xuICAgIG5nT25DaGFuZ2VzKCk6IHZvaWQ7XG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyB0aGUgYE1lZGlhYCBvYmplY3RcbiAgICAgKi9cbiAgICBwcml2YXRlIGNyZWF0ZTtcbiAgICAvKipcbiAgICAgKiBUaGlzIGhhbmRsZXIgaXMgY2FsbGVkIGZyb20gdGhlIFVJIHdoZW4gdGhlIGltYWdlIGlzIGxvYWRlZC5cbiAgICAgKi9cbiAgICBsb2FkSGFuZGxlcigpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFdoZW5ldmVyIGFuIGVycm9yIGhhcHBlbnMgZHVyaW5nIGxvYWQsIHdlIG1hcmsgdGhlIGNvbXBvbmVudFxuICAgICAqIHdpdGggY3NzIGNsYXNzZXMgdG8gaGF2ZSBhIG1pc3NpbmcgbWVkaWEuXG4gICAgICovXG4gICAgZXJyb3JIYW5kbGVyKCk6IHZvaWQ7XG4gICAgcHJpdmF0ZSBoYW5kbGVNaXNzaW5nO1xufVxuIl19