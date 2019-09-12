/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { MediaService } from './media.service';
export class MediaComponent {
    /**
     * @param {?} mediaService
     */
    constructor(mediaService) {
        this.mediaService = mediaService;
        /**
         * Once the media is loaded, we emit an event.
         */
        this.loaded = new EventEmitter();
        /**
         * The `cx-media` component has an `is-initialized` class as long as the
         * media is being initialized.
         */
        this.isInitialized = false;
        /**
         * The `cx-media` component has a `is-loading` class as long as the
         * media is loaded. Wehn the media is loaded, the `is-initialized` class
         * is added.
         */
        this.isLoading = true;
        /**
         * When there's no media provided for the content, or in case an error
         * happened during loading, we add the `is-missing` class. Visual effects
         * can be controlled by CSS.
         */
        this.isMissing = false;
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.create();
    }
    /**
     * Creates the `Media` object
     * @private
     * @return {?}
     */
    create() {
        this.media = this.mediaService.getMedia(this.container, this.format, this.alt);
        if (!this.media.src) {
            this.handleMissing();
        }
    }
    /**
     * This handler is called from the UI when the image is loaded.
     * @return {?}
     */
    loadHandler() {
        this.isLoading = false;
        this.isInitialized = true;
        this.isMissing = false;
        this.loaded.emit(true);
    }
    /**
     * Whenever an error happens during load, we mark the component
     * with css classes to have a missing media.
     * @return {?}
     */
    errorHandler() {
        this.handleMissing();
    }
    /**
     * @private
     * @return {?}
     */
    handleMissing() {
        this.isLoading = false;
        this.isInitialized = true;
        this.isMissing = true;
        this.loaded.emit(false);
    }
}
MediaComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-media',
                template: "<img\n  *ngIf=\"media?.src\"\n  [attr.src]=\"media.src\"\n  [attr.srcset]=\"media.srcset\"\n  [attr.alt]=\"media.alt\"\n  (load)=\"loadHandler()\"\n  (error)=\"errorHandler()\"\n/>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MediaComponent.ctorParameters = () => [
    { type: MediaService }
];
MediaComponent.propDecorators = {
    container: [{ type: Input }],
    format: [{ type: Input }],
    alt: [{ type: Input }],
    loaded: [{ type: Output }],
    isInitialized: [{ type: HostBinding, args: ['class.is-initialized',] }],
    isLoading: [{ type: HostBinding, args: ['class.is-loading',] }],
    isMissing: [{ type: HostBinding, args: ['class.is-missing',] }]
};
if (false) {
    /**
     * The media container can hold multiple media items, so that
     * a specific media (by format) can be used or multiple media
     * can be provided in a `srcset` so the browser will figure out
     * the best media for the device.
     * @type {?}
     */
    MediaComponent.prototype.container;
    /**
     * if a media format is given, a media for the given format will be rendered
     * @type {?}
     */
    MediaComponent.prototype.format;
    /**
     * A specific alt text for an image, which overrules the alt text
     * from the container data.
     * @type {?}
     */
    MediaComponent.prototype.alt;
    /**
     * Once the media is loaded, we emit an event.
     * @type {?}
     */
    MediaComponent.prototype.loaded;
    /**
     * The media contains the info for the UI to create the image. This media
     * object might contain more info once other media types (i.e. video) is supported.
     * @type {?}
     */
    MediaComponent.prototype.media;
    /**
     * The `cx-media` component has an `is-initialized` class as long as the
     * media is being initialized.
     * @type {?}
     */
    MediaComponent.prototype.isInitialized;
    /**
     * The `cx-media` component has a `is-loading` class as long as the
     * media is loaded. Wehn the media is loaded, the `is-initialized` class
     * is added.
     * @type {?}
     */
    MediaComponent.prototype.isLoading;
    /**
     * When there's no media provided for the content, or in case an error
     * happened during loading, we add the `is-missing` class. Visual effects
     * can be controlled by CSS.
     * @type {?}
     */
    MediaComponent.prototype.isMissing;
    /**
     * @type {?}
     * @protected
     */
    MediaComponent.prototype.mediaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTy9DLE1BQU0sT0FBTyxjQUFjOzs7O0lBbUR6QixZQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYzs7OztRQTVCdEMsV0FBTSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDOzs7OztRQVlqQyxrQkFBYSxHQUFHLEtBQUssQ0FBQzs7Ozs7O1FBTzFCLGNBQVMsR0FBRyxJQUFJLENBQUM7Ozs7OztRQU9qQixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBRUEsQ0FBQzs7OztJQUVwRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUtPLE1BQU07UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUNyQyxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FDVCxDQUFDO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ25CLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7Ozs7O0lBS0QsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7OztJQU1ELFlBQVk7UUFDVixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQzs7Ozs7SUFFTyxhQUFhO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7OztZQW5HRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLGtNQUFxQztnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxZQUFZOzs7d0JBY2xCLEtBQUs7cUJBS0wsS0FBSztrQkFNTCxLQUFLO3FCQUtMLE1BQU07NEJBWU4sV0FBVyxTQUFDLHNCQUFzQjt3QkFPbEMsV0FBVyxTQUFDLGtCQUFrQjt3QkFPOUIsV0FBVyxTQUFDLGtCQUFrQjs7Ozs7Ozs7OztJQTFDL0IsbUNBQXdCOzs7OztJQUt4QixnQ0FBd0I7Ozs7OztJQU14Qiw2QkFBcUI7Ozs7O0lBS3JCLGdDQUFzRTs7Ozs7O0lBTXRFLCtCQUFhOzs7Ozs7SUFNYix1Q0FBMkQ7Ozs7Ozs7SUFPM0QsbUNBQWtEOzs7Ozs7O0lBT2xELG1DQUFtRDs7Ozs7SUFFdkMsc0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRXZlbnRFbWl0dGVyLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT3V0cHV0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1lZGlhIH0gZnJvbSAnLi9tZWRpYS5tb2RlbCc7XG5pbXBvcnQgeyBNZWRpYVNlcnZpY2UgfSBmcm9tICcuL21lZGlhLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1tZWRpYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZWRpYS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBUaGUgbWVkaWEgY29udGFpbmVyIGNhbiBob2xkIG11bHRpcGxlIG1lZGlhIGl0ZW1zLCBzbyB0aGF0XG4gICAqIGEgc3BlY2lmaWMgbWVkaWEgKGJ5IGZvcm1hdCkgY2FuIGJlIHVzZWQgb3IgbXVsdGlwbGUgbWVkaWFcbiAgICogY2FuIGJlIHByb3ZpZGVkIGluIGEgYHNyY3NldGAgc28gdGhlIGJyb3dzZXIgd2lsbCBmaWd1cmUgb3V0XG4gICAqIHRoZSBiZXN0IG1lZGlhIGZvciB0aGUgZGV2aWNlLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyOiBhbnk7XG5cbiAgLyoqXG4gICAqIGlmIGEgbWVkaWEgZm9ybWF0IGlzIGdpdmVuLCBhIG1lZGlhIGZvciB0aGUgZ2l2ZW4gZm9ybWF0IHdpbGwgYmUgcmVuZGVyZWRcbiAgICovXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHNwZWNpZmljIGFsdCB0ZXh0IGZvciBhbiBpbWFnZSwgd2hpY2ggb3ZlcnJ1bGVzIHRoZSBhbHQgdGV4dFxuICAgKiBmcm9tIHRoZSBjb250YWluZXIgZGF0YS5cbiAgICovXG4gIEBJbnB1dCgpIGFsdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPbmNlIHRoZSBtZWRpYSBpcyBsb2FkZWQsIHdlIGVtaXQgYW4gZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgbG9hZGVkOiBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4gPSBuZXcgRXZlbnRFbWl0dGVyPEJvb2xlYW4+KCk7XG5cbiAgLyoqXG4gICAqIFRoZSBtZWRpYSBjb250YWlucyB0aGUgaW5mbyBmb3IgdGhlIFVJIHRvIGNyZWF0ZSB0aGUgaW1hZ2UuIFRoaXMgbWVkaWFcbiAgICogb2JqZWN0IG1pZ2h0IGNvbnRhaW4gbW9yZSBpbmZvIG9uY2Ugb3RoZXIgbWVkaWEgdHlwZXMgKGkuZS4gdmlkZW8pIGlzIHN1cHBvcnRlZC5cbiAgICovXG4gIG1lZGlhOiBNZWRpYTtcblxuICAvKipcbiAgICogVGhlIGBjeC1tZWRpYWAgY29tcG9uZW50IGhhcyBhbiBgaXMtaW5pdGlhbGl6ZWRgIGNsYXNzIGFzIGxvbmcgYXMgdGhlXG4gICAqIG1lZGlhIGlzIGJlaW5nIGluaXRpYWxpemVkLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1pbml0aWFsaXplZCcpIGlzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGBjeC1tZWRpYWAgY29tcG9uZW50IGhhcyBhIGBpcy1sb2FkaW5nYCBjbGFzcyBhcyBsb25nIGFzIHRoZVxuICAgKiBtZWRpYSBpcyBsb2FkZWQuIFdlaG4gdGhlIG1lZGlhIGlzIGxvYWRlZCwgdGhlIGBpcy1pbml0aWFsaXplZGAgY2xhc3NcbiAgICogaXMgYWRkZWQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWxvYWRpbmcnKSBpc0xvYWRpbmcgPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBXaGVuIHRoZXJlJ3Mgbm8gbWVkaWEgcHJvdmlkZWQgZm9yIHRoZSBjb250ZW50LCBvciBpbiBjYXNlIGFuIGVycm9yXG4gICAqIGhhcHBlbmVkIGR1cmluZyBsb2FkaW5nLCB3ZSBhZGQgdGhlIGBpcy1taXNzaW5nYCBjbGFzcy4gVmlzdWFsIGVmZmVjdHNcbiAgICogY2FuIGJlIGNvbnRyb2xsZWQgYnkgQ1NTLlxuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcy5pcy1taXNzaW5nJykgaXNNaXNzaW5nID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1lZGlhU2VydmljZTogTWVkaWFTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgYE1lZGlhYCBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlKCk6IHZvaWQge1xuICAgIHRoaXMubWVkaWEgPSB0aGlzLm1lZGlhU2VydmljZS5nZXRNZWRpYShcbiAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgdGhpcy5mb3JtYXQsXG4gICAgICB0aGlzLmFsdFxuICAgICk7XG4gICAgaWYgKCF0aGlzLm1lZGlhLnNyYykge1xuICAgICAgdGhpcy5oYW5kbGVNaXNzaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgaGFuZGxlciBpcyBjYWxsZWQgZnJvbSB0aGUgVUkgd2hlbiB0aGUgaW1hZ2UgaXMgbG9hZGVkLlxuICAgKi9cbiAgbG9hZEhhbmRsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuaXNNaXNzaW5nID0gZmFsc2U7XG4gICAgdGhpcy5sb2FkZWQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuZXZlciBhbiBlcnJvciBoYXBwZW5zIGR1cmluZyBsb2FkLCB3ZSBtYXJrIHRoZSBjb21wb25lbnRcbiAgICogd2l0aCBjc3MgY2xhc3NlcyB0byBoYXZlIGEgbWlzc2luZyBtZWRpYS5cbiAgICovXG4gIGVycm9ySGFuZGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZU1pc3NpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTWlzc2luZygpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5pc01pc3NpbmcgPSB0cnVlO1xuICAgIHRoaXMubG9hZGVkLmVtaXQoZmFsc2UpO1xuICB9XG59XG4iXX0=