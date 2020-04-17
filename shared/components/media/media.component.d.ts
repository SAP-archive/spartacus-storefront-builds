import { EventEmitter, OnChanges } from '@angular/core';
import { Media, MediaContainer } from './media.model';
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
    container: MediaContainer;
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
    protected create(): void;
    /**
     * This handler is called from the UI when the image is loaded.
     */
    loadHandler(): void;
    /**
     * Whenever an error happens during load, we mark the component
     * with css classes to have a missing media.
     */
    errorHandler(): void;
    protected handleMissing(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<MediaComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDefWithMeta<MediaComponent, "cx-media", never, { "container": "container"; "format": "format"; "alt": "alt"; }, { "loaded": "loaded"; }, never, never>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmQudHMiLCJzb3VyY2VzIjpbIm1lZGlhLmNvbXBvbmVudC5kLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnRFbWl0dGVyLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lZGlhLCBNZWRpYUNvbnRhaW5lciB9IGZyb20gJy4vbWVkaWEubW9kZWwnO1xuaW1wb3J0IHsgTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi9tZWRpYS5zZXJ2aWNlJztcbmV4cG9ydCBkZWNsYXJlIGNsYXNzIE1lZGlhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgICBwcm90ZWN0ZWQgbWVkaWFTZXJ2aWNlOiBNZWRpYVNlcnZpY2U7XG4gICAgLyoqXG4gICAgICogVGhlIG1lZGlhIGNvbnRhaW5lciBjYW4gaG9sZCBtdWx0aXBsZSBtZWRpYSBpdGVtcywgc28gdGhhdFxuICAgICAqIGEgc3BlY2lmaWMgbWVkaWEgKGJ5IGZvcm1hdCkgY2FuIGJlIHVzZWQgb3IgbXVsdGlwbGUgbWVkaWFcbiAgICAgKiBjYW4gYmUgcHJvdmlkZWQgaW4gYSBgc3Jjc2V0YCBzbyB0aGUgYnJvd3NlciB3aWxsIGZpZ3VyZSBvdXRcbiAgICAgKiB0aGUgYmVzdCBtZWRpYSBmb3IgdGhlIGRldmljZS5cbiAgICAgKi9cbiAgICBjb250YWluZXI6IE1lZGlhQ29udGFpbmVyO1xuICAgIC8qKlxuICAgICAqIGlmIGEgbWVkaWEgZm9ybWF0IGlzIGdpdmVuLCBhIG1lZGlhIGZvciB0aGUgZ2l2ZW4gZm9ybWF0IHdpbGwgYmUgcmVuZGVyZWRcbiAgICAgKi9cbiAgICBmb3JtYXQ6IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBBIHNwZWNpZmljIGFsdCB0ZXh0IGZvciBhbiBpbWFnZSwgd2hpY2ggb3ZlcnJ1bGVzIHRoZSBhbHQgdGV4dFxuICAgICAqIGZyb20gdGhlIGNvbnRhaW5lciBkYXRhLlxuICAgICAqL1xuICAgIGFsdDogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIE9uY2UgdGhlIG1lZGlhIGlzIGxvYWRlZCwgd2UgZW1pdCBhbiBldmVudC5cbiAgICAgKi9cbiAgICBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxCb29sZWFuPjtcbiAgICAvKipcbiAgICAgKiBUaGUgbWVkaWEgY29udGFpbnMgdGhlIGluZm8gZm9yIHRoZSBVSSB0byBjcmVhdGUgdGhlIGltYWdlLiBUaGlzIG1lZGlhXG4gICAgICogb2JqZWN0IG1pZ2h0IGNvbnRhaW4gbW9yZSBpbmZvIG9uY2Ugb3RoZXIgbWVkaWEgdHlwZXMgKGkuZS4gdmlkZW8pIGlzIHN1cHBvcnRlZC5cbiAgICAgKi9cbiAgICBtZWRpYTogTWVkaWE7XG4gICAgLyoqXG4gICAgICogVGhlIGBjeC1tZWRpYWAgY29tcG9uZW50IGhhcyBhbiBgaXMtaW5pdGlhbGl6ZWRgIGNsYXNzIGFzIGxvbmcgYXMgdGhlXG4gICAgICogbWVkaWEgaXMgYmVpbmcgaW5pdGlhbGl6ZWQuXG4gICAgICovXG4gICAgaXNJbml0aWFsaXplZDogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBUaGUgYGN4LW1lZGlhYCBjb21wb25lbnQgaGFzIGEgYGlzLWxvYWRpbmdgIGNsYXNzIGFzIGxvbmcgYXMgdGhlXG4gICAgICogbWVkaWEgaXMgbG9hZGVkLiBXZWhuIHRoZSBtZWRpYSBpcyBsb2FkZWQsIHRoZSBgaXMtaW5pdGlhbGl6ZWRgIGNsYXNzXG4gICAgICogaXMgYWRkZWQuXG4gICAgICovXG4gICAgaXNMb2FkaW5nOiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIFdoZW4gdGhlcmUncyBubyBtZWRpYSBwcm92aWRlZCBmb3IgdGhlIGNvbnRlbnQsIG9yIGluIGNhc2UgYW4gZXJyb3JcbiAgICAgKiBoYXBwZW5lZCBkdXJpbmcgbG9hZGluZywgd2UgYWRkIHRoZSBgaXMtbWlzc2luZ2AgY2xhc3MuIFZpc3VhbCBlZmZlY3RzXG4gICAgICogY2FuIGJlIGNvbnRyb2xsZWQgYnkgQ1NTLlxuICAgICAqL1xuICAgIGlzTWlzc2luZzogYm9vbGVhbjtcbiAgICBjb25zdHJ1Y3RvcihtZWRpYVNlcnZpY2U6IE1lZGlhU2VydmljZSk7XG4gICAgbmdPbkNoYW5nZXMoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIHRoZSBgTWVkaWFgIG9iamVjdFxuICAgICAqL1xuICAgIHByb3RlY3RlZCBjcmVhdGUoKTogdm9pZDtcbiAgICAvKipcbiAgICAgKiBUaGlzIGhhbmRsZXIgaXMgY2FsbGVkIGZyb20gdGhlIFVJIHdoZW4gdGhlIGltYWdlIGlzIGxvYWRlZC5cbiAgICAgKi9cbiAgICBsb2FkSGFuZGxlcigpOiB2b2lkO1xuICAgIC8qKlxuICAgICAqIFdoZW5ldmVyIGFuIGVycm9yIGhhcHBlbnMgZHVyaW5nIGxvYWQsIHdlIG1hcmsgdGhlIGNvbXBvbmVudFxuICAgICAqIHdpdGggY3NzIGNsYXNzZXMgdG8gaGF2ZSBhIG1pc3NpbmcgbWVkaWEuXG4gICAgICovXG4gICAgZXJyb3JIYW5kbGVyKCk6IHZvaWQ7XG4gICAgcHJvdGVjdGVkIGhhbmRsZU1pc3NpbmcoKTogdm9pZDtcbn1cbiJdfQ==