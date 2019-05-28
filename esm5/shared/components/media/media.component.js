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
        if (!this.media.src) {
            this.handleMissing();
        }
    };
    /**
     * This handler is called from the UI when the image is loaded.
     */
    /**
     * This handler is called from the UI when the image is loaded.
     * @return {?}
     */
    MediaComponent.prototype.loadHandler = /**
     * This handler is called from the UI when the image is loaded.
     * @return {?}
     */
    function () {
        this.isLoading = false;
        this.isInitialized = true;
        this.loaded.emit(true);
    };
    /**
     * Whenever an error happens during load, we mark the component
     * with css classes to have a missing media.
     */
    /**
     * Whenever an error happens during load, we mark the component
     * with css classes to have a missing media.
     * @return {?}
     */
    MediaComponent.prototype.errorHandler = /**
     * Whenever an error happens during load, we mark the component
     * with css classes to have a missing media.
     * @return {?}
     */
    function () {
        this.handleMissing();
    };
    /**
     * @private
     * @return {?}
     */
    MediaComponent.prototype.handleMissing = /**
     * @private
     * @return {?}
     */
    function () {
        this.isLoading = false;
        this.isInitialized = true;
        this.isMissing = true;
        this.loaded.emit(false);
    };
    MediaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-media',
                    template: "<img\n  *ngIf=\"media?.src\"\n  [attr.src]=\"media.src\"\n  [attr.srcset]=\"media.srcset\"\n  [attr.alt]=\"media.alt\"\n  (load)=\"loadHandler()\"\n  (error)=\"errorHandler()\"\n/>\n",
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
        isInitialized: [{ type: HostBinding, args: ['class.is-initialized',] }],
        isLoading: [{ type: HostBinding, args: ['class.is-loading',] }],
        isMissing: [{ type: HostBinding, args: ['class.is-missing',] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxZQUFZLEVBQ1osV0FBVyxFQUNYLEtBQUssRUFFTCxNQUFNLEdBQ1AsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBRS9DO0lBd0RFLHdCQUFzQixZQUEwQjtRQUExQixpQkFBWSxHQUFaLFlBQVksQ0FBYzs7OztRQTVCdEMsV0FBTSxHQUEwQixJQUFJLFlBQVksRUFBVyxDQUFDOzs7OztRQVlqQyxrQkFBYSxHQUFHLEtBQUssQ0FBQzs7Ozs7O1FBTzFCLGNBQVMsR0FBRyxJQUFJLENBQUM7Ozs7OztRQU9qQixjQUFTLEdBQUcsS0FBSyxDQUFDO0lBRUEsQ0FBQzs7OztJQUVwRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSywrQkFBTTs7Ozs7SUFBZDtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQ3JDLElBQUksQ0FBQyxTQUFTLEVBQ2QsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsR0FBRyxDQUNULENBQUM7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO1NBQ3RCO0lBQ0gsQ0FBQztJQUVEOztPQUVHOzs7OztJQUNILG9DQUFXOzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxxQ0FBWTs7Ozs7SUFBWjtRQUNFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDOzs7OztJQUVPLHNDQUFhOzs7O0lBQXJCO1FBQ0UsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFDdEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Z0JBbEdGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsa01BQXFDO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBTlEsWUFBWTs7OzRCQWNsQixLQUFLO3lCQUtMLEtBQUs7c0JBTUwsS0FBSzt5QkFLTCxNQUFNO2dDQVlOLFdBQVcsU0FBQyxzQkFBc0I7NEJBT2xDLFdBQVcsU0FBQyxrQkFBa0I7NEJBTzlCLFdBQVcsU0FBQyxrQkFBa0I7O0lBNkNqQyxxQkFBQztDQUFBLEFBbkdELElBbUdDO1NBOUZZLGNBQWM7Ozs7Ozs7OztJQU96QixtQ0FBd0I7Ozs7O0lBS3hCLGdDQUF3Qjs7Ozs7O0lBTXhCLDZCQUFxQjs7Ozs7SUFLckIsZ0NBQXNFOzs7Ozs7SUFNdEUsK0JBQWE7Ozs7OztJQU1iLHVDQUEyRDs7Ozs7OztJQU8zRCxtQ0FBa0Q7Ozs7Ozs7SUFPbEQsbUNBQW1EOzs7OztJQUV2QyxzQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFdmVudEVtaXR0ZXIsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWEgfSBmcm9tICcuL21lZGlhLm1vZGVsJztcbmltcG9ydCB7IE1lZGlhU2VydmljZSB9IGZyb20gJy4vbWVkaWEuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LW1lZGlhJyxcbiAgdGVtcGxhdGVVcmw6ICcuL21lZGlhLmNvbXBvbmVudC5odG1sJyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG59KVxuZXhwb3J0IGNsYXNzIE1lZGlhQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIFRoZSBtZWRpYSBjb250YWluZXIgY2FuIGhvbGQgbXVsdGlwbGUgbWVkaWEgaXRlbXMsIHNvIHRoYXRcbiAgICogYSBzcGVjaWZpYyBtZWRpYSAoYnkgZm9ybWF0KSBjYW4gYmUgdXNlZCBvciBtdWx0aXBsZSBtZWRpYVxuICAgKiBjYW4gYmUgcHJvdmlkZWQgaW4gYSBgc3Jjc2V0YCBzbyB0aGUgYnJvd3NlciB3aWxsIGZpZ3VyZSBvdXRcbiAgICogdGhlIGJlc3QgbWVkaWEgZm9yIHRoZSBkZXZpY2UuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI6IGFueTtcblxuICAvKipcbiAgICogaWYgYSBtZWRpYSBmb3JtYXQgaXMgZ2l2ZW4sIGEgbWVkaWEgZm9yIHRoZSBnaXZlbiBmb3JtYXQgd2lsbCBiZSByZW5kZXJlZFxuICAgKi9cbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3BlY2lmaWMgYWx0IHRleHQgZm9yIGFuIGltYWdlLCB3aGljaCBvdmVycnVsZXMgdGhlIGFsdCB0ZXh0XG4gICAqIGZyb20gdGhlIGNvbnRhaW5lciBkYXRhLlxuICAgKi9cbiAgQElucHV0KCkgYWx0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9uY2UgdGhlIG1lZGlhIGlzIGxvYWRlZCwgd2UgZW1pdCBhbiBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoKSBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxCb29sZWFuPiA9IG5ldyBFdmVudEVtaXR0ZXI8Qm9vbGVhbj4oKTtcblxuICAvKipcbiAgICogVGhlIG1lZGlhIGNvbnRhaW5zIHRoZSBpbmZvIGZvciB0aGUgVUkgdG8gY3JlYXRlIHRoZSBpbWFnZS4gVGhpcyBtZWRpYVxuICAgKiBvYmplY3QgbWlnaHQgY29udGFpbiBtb3JlIGluZm8gb25jZSBvdGhlciBtZWRpYSB0eXBlcyAoaS5lLiB2aWRlbykgaXMgc3VwcG9ydGVkLlxuICAgKi9cbiAgbWVkaWE6IE1lZGlhO1xuXG4gIC8qKlxuICAgKiBUaGUgYGN4LW1lZGlhYCBjb21wb25lbnQgaGFzIGFuIGBpcy1pbml0aWFsaXplZGAgY2xhc3MgYXMgbG9uZyBhcyB0aGVcbiAgICogbWVkaWEgaXMgYmVpbmcgaW5pdGlhbGl6ZWQuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLWluaXRpYWxpemVkJykgaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gIC8qKlxuICAgKiBUaGUgYGN4LW1lZGlhYCBjb21wb25lbnQgaGFzIGEgYGlzLWxvYWRpbmdgIGNsYXNzIGFzIGxvbmcgYXMgdGhlXG4gICAqIG1lZGlhIGlzIGxvYWRlZC4gV2VobiB0aGUgbWVkaWEgaXMgbG9hZGVkLCB0aGUgYGlzLWluaXRpYWxpemVkYCBjbGFzc1xuICAgKiBpcyBhZGRlZC5cbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MuaXMtbG9hZGluZycpIGlzTG9hZGluZyA9IHRydWU7XG5cbiAgLyoqXG4gICAqIFdoZW4gdGhlcmUncyBubyBtZWRpYSBwcm92aWRlZCBmb3IgdGhlIGNvbnRlbnQsIG9yIGluIGNhc2UgYW4gZXJyb3JcbiAgICogaGFwcGVuZWQgZHVyaW5nIGxvYWRpbmcsIHdlIGFkZCB0aGUgYGlzLW1pc3NpbmdgIGNsYXNzLiBWaXN1YWwgZWZmZWN0c1xuICAgKiBjYW4gYmUgY29udHJvbGxlZCBieSBDU1MuXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLmlzLW1pc3NpbmcnKSBpc01pc3NpbmcgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbWVkaWFTZXJ2aWNlOiBNZWRpYVNlcnZpY2UpIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdGVzIHRoZSBgTWVkaWFgIG9iamVjdFxuICAgKi9cbiAgcHJpdmF0ZSBjcmVhdGUoKTogdm9pZCB7XG4gICAgdGhpcy5tZWRpYSA9IHRoaXMubWVkaWFTZXJ2aWNlLmdldE1lZGlhKFxuICAgICAgdGhpcy5jb250YWluZXIsXG4gICAgICB0aGlzLmZvcm1hdCxcbiAgICAgIHRoaXMuYWx0XG4gICAgKTtcbiAgICBpZiAoIXRoaXMubWVkaWEuc3JjKSB7XG4gICAgICB0aGlzLmhhbmRsZU1pc3NpbmcoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhpcyBoYW5kbGVyIGlzIGNhbGxlZCBmcm9tIHRoZSBVSSB3aGVuIHRoZSBpbWFnZSBpcyBsb2FkZWQuXG4gICAqL1xuICBsb2FkSGFuZGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5sb2FkZWQuZW1pdCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuZXZlciBhbiBlcnJvciBoYXBwZW5zIGR1cmluZyBsb2FkLCB3ZSBtYXJrIHRoZSBjb21wb25lbnRcbiAgICogd2l0aCBjc3MgY2xhc3NlcyB0byBoYXZlIGEgbWlzc2luZyBtZWRpYS5cbiAgICovXG4gIGVycm9ySGFuZGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLmhhbmRsZU1pc3NpbmcoKTtcbiAgfVxuXG4gIHByaXZhdGUgaGFuZGxlTWlzc2luZygpIHtcbiAgICB0aGlzLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XG4gICAgdGhpcy5pc01pc3NpbmcgPSB0cnVlO1xuICAgIHRoaXMubG9hZGVkLmVtaXQoZmFsc2UpO1xuICB9XG59XG4iXX0=