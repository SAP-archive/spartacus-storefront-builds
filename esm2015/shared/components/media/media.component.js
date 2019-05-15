/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
         * The `cx-media` component has a `loading` class as long as the
         * media is loaded. Wehn the media is loaded, the `initialized` class
         * is added.
         */
        this.isLoading = true;
        this.isInitialized = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.create();
    }
    /**
     * Creates the `Media` object
     * @private
     * @return {?}
     */
    create() {
        this.media = this.mediaService.getImage(this.container, this.format, this.alt);
    }
    /**
     * This handler is called from the UI when the image is loaded.
     * The
     * @return {?}
     */
    loadHandler() {
        this.isLoading = false;
        this.isInitialized = true;
        this.loaded.emit(true);
    }
    /**
     * Whenever an error happens during load, we fall back to a missing image.
     * This means we need to update the local media object. In this scenario we
     * do not provide a `srcset` for responsive images.
     * @return {?}
     */
    errorHandler() {
        this.media = this.mediaService.getMissingImage();
    }
}
MediaComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-media',
                template: "<img\n  *ngIf=\"media\"\n  [attr.src]=\"media.src\"\n  [attr.srcset]=\"media.srcset\"\n  [attr.alt]=\"media.alt\"\n  (load)=\"loadHandler()\"\n  (error)=\"errorHandler()\"\n/>\n",
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
    isLoading: [{ type: HostBinding, args: ['class.loading',] }],
    isInitialized: [{ type: HostBinding, args: ['class.initialized',] }]
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
     * The `cx-media` component has a `loading` class as long as the
     * media is loaded. Wehn the media is loaded, the `initialized` class
     * is added.
     * @type {?}
     */
    MediaComponent.prototype.isLoading;
    /** @type {?} */
    MediaComponent.prototype.isInitialized;
    /**
     * @type {?}
     * @protected
     */
    MediaComponent.prototype.mediaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBTy9DLE1BQU0sT0FBTyxjQUFjOzs7O0lBdUN6QixZQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYzs7OztRQWhCdEMsV0FBTSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDOzs7Ozs7UUFheEMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNiLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBRUwsQ0FBQzs7OztJQUVwRCxRQUFRO1FBQ04sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2hCLENBQUM7Ozs7OztJQUtPLE1BQU07UUFDWixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUNyQyxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FDVCxDQUFDO0lBQ0osQ0FBQzs7Ozs7O0lBTUQsV0FBVztRQUNULElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7Ozs7Ozs7SUFPRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ25ELENBQUM7OztZQTlFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLDZMQUFxQztnQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07YUFDaEQ7Ozs7WUFOUSxZQUFZOzs7d0JBY2xCLEtBQUs7cUJBS0wsS0FBSztrQkFNTCxLQUFLO3FCQUtMLE1BQU07d0JBYU4sV0FBVyxTQUFDLGVBQWU7NEJBQzNCLFdBQVcsU0FBQyxtQkFBbUI7Ozs7Ozs7Ozs7SUE5QmhDLG1DQUF3Qjs7Ozs7SUFLeEIsZ0NBQXdCOzs7Ozs7SUFNeEIsNkJBQXFCOzs7OztJQUtyQixnQ0FBc0U7Ozs7OztJQU10RSwrQkFBYTs7Ozs7OztJQU9iLG1DQUErQzs7SUFDL0MsdUNBQXdEOzs7OztJQUU1QyxzQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWEgfSBmcm9tICcuL21lZGlhLm1vZGVsJztcbmltcG9ydCB7IE1lZGlhU2VydmljZSB9IGZyb20gJy4vbWVkaWEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW1lZGlhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lZGlhLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIFRoZSBtZWRpYSBjb250YWluZXIgY2FuIGhvbGQgbXVsdGlwbGUgbWVkaWEgaXRlbXMsIHNvIHRoYXRcbiAgICogYSBzcGVjaWZpYyBtZWRpYSAoYnkgZm9ybWF0KSBjYW4gYmUgdXNlZCBvciBtdWx0aXBsZSBtZWRpYVxuICAgKiBjYW4gYmUgcHJvdmlkZWQgaW4gYSBgc3Jjc2V0YCBzbyB0aGUgYnJvd3NlciB3aWxsIGZpZ3VyZSBvdXRcbiAgICogdGhlIGJlc3QgbWVkaWEgZm9yIHRoZSBkZXZpY2UuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI6IGFueTtcblxuICAvKipcbiAgICogaWYgYSBtZWRpYSBmb3JtYXQgaXMgZ2l2ZW4sIGEgbWVkaWEgZm9yIHRoZSBnaXZlbiBmb3JtYXQgd2lsbCBiZSByZW5kZXJlZFxuICAgKi9cbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3BlY2lmaWMgYWx0IHRleHQgZm9yIGFuIGltYWdlLCB3aGljaCBvdmVycnVsZXMgdGhlIGFsdCB0ZXh0XG4gICAqIGZyb20gdGhlIGNvbnRhaW5lciBkYXRhLlxuICAgKi9cbiAgQElucHV0KCkgYWx0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9uY2UgdGhlIG1lZGlhIGlzIGxvYWRlZCwgd2UgZW1pdCBhbiBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoKSBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxCb29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4oKTtcblxuICAvKipcbiAgICogVGhlIG1lZGlhIGNvbnRhaW5zIHRoZSBpbmZvIGZvciB0aGUgVUkgdG8gY3JlYXRlIHRoZSBpbWFnZS4gVGhpcyBtZWRpYVxuICAgKiBvYmplY3QgbWlnaHQgY29udGFpbiBtb3JlIGluZm8gb25jZSBvdGhlciBtZWRpYSB0eXBlcyAoaS5lLiB2aWRlbykgaXMgc3VwcG9ydGVkLlxuICAgKi9cbiAgbWVkaWE6IE1lZGlhO1xuXG4gIC8qKlxuICAgKiBUaGUgYGN4LW1lZGlhYCBjb21wb25lbnQgaGFzIGEgYGxvYWRpbmdgIGNsYXNzIGFzIGxvbmcgYXMgdGhlXG4gICAqIG1lZGlhIGlzIGxvYWRlZC4gV2VobiB0aGUgbWVkaWEgaXMgbG9hZGVkLCB0aGUgYGluaXRpYWxpemVkYCBjbGFzc1xuICAgKiBpcyBhZGRlZC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubG9hZGluZycpIGlzTG9hZGluZyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW5pdGlhbGl6ZWQnKSBpc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1lZGlhU2VydmljZTogTWVkaWFTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgYE1lZGlhYCBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlKCk6IHZvaWQge1xuICAgIHRoaXMubWVkaWEgPSB0aGlzLm1lZGlhU2VydmljZS5nZXRJbWFnZShcbiAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgdGhpcy5mb3JtYXQsXG4gICAgICB0aGlzLmFsdFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBoYW5kbGVyIGlzIGNhbGxlZCBmcm9tIHRoZSBVSSB3aGVuIHRoZSBpbWFnZSBpcyBsb2FkZWQuXG4gICAqIFRoZVxuICAgKi9cbiAgbG9hZEhhbmRsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMubG9hZGVkLmVtaXQodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbmV2ZXIgYW4gZXJyb3IgaGFwcGVucyBkdXJpbmcgbG9hZCwgd2UgZmFsbCBiYWNrIHRvIGEgbWlzc2luZyBpbWFnZS5cbiAgICogVGhpcyBtZWFucyB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgbG9jYWwgbWVkaWEgb2JqZWN0LiBJbiB0aGlzIHNjZW5hcmlvIHdlXG4gICAqIGRvIG5vdCBwcm92aWRlIGEgYHNyY3NldGAgZm9yIHJlc3BvbnNpdmUgaW1hZ2VzLlxuICAgKi9cbiAgZXJyb3JIYW5kbGVyKCk6IHZvaWQge1xuICAgIHRoaXMubWVkaWEgPSB0aGlzLm1lZGlhU2VydmljZS5nZXRNaXNzaW5nSW1hZ2UoKTtcbiAgfVxufVxuIl19