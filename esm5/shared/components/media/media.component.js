/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, EventEmitter, HostBinding, Input, Output, } from '@angular/core';
import { MediaService } from './media.service';
var MediaComponent = /** @class */ (function () {
    function MediaComponent(mediaService) {
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
    MediaComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.create();
    };
    /**
     * Creates the `Media` object
     */
    /**
     * Creates the `Media` object
     * @private
     * @return {?}
     */
    MediaComponent.prototype.create = /**
     * Creates the `Media` object
     * @private
     * @return {?}
     */
    function () {
        this.media = this.mediaService.getMedia(this.container, this.format, this.alt);
    };
    /**
     * This handler is called from the UI when the image is loaded.
     * The
     */
    /**
     * This handler is called from the UI when the image is loaded.
     * The
     * @return {?}
     */
    MediaComponent.prototype.loadHandler = /**
     * This handler is called from the UI when the image is loaded.
     * The
     * @return {?}
     */
    function () {
        this.isLoading = false;
        this.isInitialized = true;
        this.loaded.emit(true);
    };
    /**
     * Whenever an error happens during load, we fall back to a missing image.
     * This means we need to update the local media object. In this scenario we
     * do not provide a `srcset` for responsive images.
     */
    /**
     * Whenever an error happens during load, we fall back to a missing image.
     * This means we need to update the local media object. In this scenario we
     * do not provide a `srcset` for responsive images.
     * @return {?}
     */
    MediaComponent.prototype.errorHandler = /**
     * Whenever an error happens during load, we fall back to a missing image.
     * This means we need to update the local media object. In this scenario we
     * do not provide a `srcset` for responsive images.
     * @return {?}
     */
    function () {
        this.media = this.mediaService.getMissingImage();
    };
    MediaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-media',
                    template: "<img\n  *ngIf=\"media\"\n  [attr.src]=\"media.src\"\n  [attr.srcset]=\"media.srcset\"\n  [attr.alt]=\"media.alt\"\n  (load)=\"loadHandler()\"\n  (error)=\"errorHandler()\"\n/>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MediaComponent.ctorParameters = function () { return [
        { type: MediaService }
    ]; };
    MediaComponent.propDecorators = {
        container: [{ type: Input }],
        format: [{ type: Input }],
        alt: [{ type: Input }],
        loaded: [{ type: Output }],
        isLoading: [{ type: HostBinding, args: ['class.loading',] }],
        isInitialized: [{ type: HostBinding, args: ['class.initialized',] }]
    };
    return MediaComponent;
}());
export { MediaComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DO0lBNENFLHdCQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYzs7OztRQWhCdEMsV0FBTSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDOzs7Ozs7UUFheEMsY0FBUyxHQUFHLElBQUksQ0FBQztRQUNiLGtCQUFhLEdBQUcsS0FBSyxDQUFDO0lBRUwsQ0FBQzs7OztJQUVwRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSywrQkFBTTs7Ozs7SUFBZDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQ3JDLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsR0FBRyxDQUNULENBQUM7SUFDSixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxvQ0FBVzs7Ozs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gscUNBQVk7Ozs7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQ25ELENBQUM7O2dCQTlFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLDZMQUFxQztvQkFDckMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07aUJBQ2hEOzs7O2dCQU5RLFlBQVk7Ozs0QkFjbEIsS0FBSzt5QkFLTCxLQUFLO3NCQU1MLEtBQUs7eUJBS0wsTUFBTTs0QkFhTixXQUFXLFNBQUMsZUFBZTtnQ0FDM0IsV0FBVyxTQUFDLG1CQUFtQjs7SUFxQ2xDLHFCQUFDO0NBQUEsQUEvRUQsSUErRUM7U0ExRVksY0FBYzs7Ozs7Ozs7O0lBT3pCLG1DQUF3Qjs7Ozs7SUFLeEIsZ0NBQXdCOzs7Ozs7SUFNeEIsNkJBQXFCOzs7OztJQUtyQixnQ0FBc0U7Ozs7OztJQU10RSwrQkFBYTs7Ozs7OztJQU9iLG1DQUErQzs7SUFDL0MsdUNBQXdEOzs7OztJQUU1QyxzQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWEgfSBmcm9tICcuL21lZGlhLm1vZGVsJztcbmltcG9ydCB7IE1lZGlhU2VydmljZSB9IGZyb20gJy4vbWVkaWEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW1lZGlhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lZGlhLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIFRoZSBtZWRpYSBjb250YWluZXIgY2FuIGhvbGQgbXVsdGlwbGUgbWVkaWEgaXRlbXMsIHNvIHRoYXRcbiAgICogYSBzcGVjaWZpYyBtZWRpYSAoYnkgZm9ybWF0KSBjYW4gYmUgdXNlZCBvciBtdWx0aXBsZSBtZWRpYVxuICAgKiBjYW4gYmUgcHJvdmlkZWQgaW4gYSBgc3Jjc2V0YCBzbyB0aGUgYnJvd3NlciB3aWxsIGZpZ3VyZSBvdXRcbiAgICogdGhlIGJlc3QgbWVkaWEgZm9yIHRoZSBkZXZpY2UuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI6IGFueTtcblxuICAvKipcbiAgICogaWYgYSBtZWRpYSBmb3JtYXQgaXMgZ2l2ZW4sIGEgbWVkaWEgZm9yIHRoZSBnaXZlbiBmb3JtYXQgd2lsbCBiZSByZW5kZXJlZFxuICAgKi9cbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3BlY2lmaWMgYWx0IHRleHQgZm9yIGFuIGltYWdlLCB3aGljaCBvdmVycnVsZXMgdGhlIGFsdCB0ZXh0XG4gICAqIGZyb20gdGhlIGNvbnRhaW5lciBkYXRhLlxuICAgKi9cbiAgQElucHV0KCkgYWx0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9uY2UgdGhlIG1lZGlhIGlzIGxvYWRlZCwgd2UgZW1pdCBhbiBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoKSBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxCb29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4oKTtcblxuICAvKipcbiAgICogVGhlIG1lZGlhIGNvbnRhaW5zIHRoZSBpbmZvIGZvciB0aGUgVUkgdG8gY3JlYXRlIHRoZSBpbWFnZS4gVGhpcyBtZWRpYVxuICAgKiBvYmplY3QgbWlnaHQgY29udGFpbiBtb3JlIGluZm8gb25jZSBvdGhlciBtZWRpYSB0eXBlcyAoaS5lLiB2aWRlbykgaXMgc3VwcG9ydGVkLlxuICAgKi9cbiAgbWVkaWE6IE1lZGlhO1xuXG4gIC8qKlxuICAgKiBUaGUgYGN4LW1lZGlhYCBjb21wb25lbnQgaGFzIGEgYGxvYWRpbmdgIGNsYXNzIGFzIGxvbmcgYXMgdGhlXG4gICAqIG1lZGlhIGlzIGxvYWRlZC4gV2VobiB0aGUgbWVkaWEgaXMgbG9hZGVkLCB0aGUgYGluaXRpYWxpemVkYCBjbGFzc1xuICAgKiBpcyBhZGRlZC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MubG9hZGluZycpIGlzTG9hZGluZyA9IHRydWU7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuaW5pdGlhbGl6ZWQnKSBpc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIG1lZGlhU2VydmljZTogTWVkaWFTZXJ2aWNlKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMuY3JlYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyB0aGUgYE1lZGlhYCBvYmplY3RcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlKCk6IHZvaWQge1xuICAgIHRoaXMubWVkaWEgPSB0aGlzLm1lZGlhU2VydmljZS5nZXRNZWRpYShcbiAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgdGhpcy5mb3JtYXQsXG4gICAgICB0aGlzLmFsdFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBoYW5kbGVyIGlzIGNhbGxlZCBmcm9tIHRoZSBVSSB3aGVuIHRoZSBpbWFnZSBpcyBsb2FkZWQuXG4gICAqIFRoZVxuICAgKi9cbiAgbG9hZEhhbmRsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmlzSW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMubG9hZGVkLmVtaXQodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbmV2ZXIgYW4gZXJyb3IgaGFwcGVucyBkdXJpbmcgbG9hZCwgd2UgZmFsbCBiYWNrIHRvIGEgbWlzc2luZyBpbWFnZS5cbiAgICogVGhpcyBtZWFucyB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgbG9jYWwgbWVkaWEgb2JqZWN0LiBJbiB0aGlzIHNjZW5hcmlvIHdlXG4gICAqIGRvIG5vdCBwcm92aWRlIGEgYHNyY3NldGAgZm9yIHJlc3BvbnNpdmUgaW1hZ2VzLlxuICAgKi9cbiAgZXJyb3JIYW5kbGVyKCk6IHZvaWQge1xuICAgIHRoaXMubWVkaWEgPSB0aGlzLm1lZGlhU2VydmljZS5nZXRNaXNzaW5nSW1hZ2UoKTtcbiAgfVxufVxuIl19