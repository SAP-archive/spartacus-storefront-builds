/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, } from '@angular/core';
import { MediaService } from './media.service';
/** @type {?} */
var INITIALIZED_CLS = 'initialized';
/** @type {?} */
var LOADING_CLS = 'loading';
var MediaComponent = /** @class */ (function () {
    function MediaComponent(elRef, renderer, mediaService) {
        this.elRef = elRef;
        this.renderer = renderer;
        this.mediaService = mediaService;
        /**
         * Once the media is loaded, we emit an event.
         */
        this.loaded = new EventEmitter();
    }
    /**
     * @return {?}
     */
    MediaComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.loadImage();
    };
    /**
     * @private
     * @return {?}
     */
    MediaComponent.prototype.loadImage = /**
     * @private
     * @return {?}
     */
    function () {
        this.renderer.addClass((/** @type {?} */ (this.elRef.nativeElement)), LOADING_CLS);
        this.media = this.mediaService.getImage(this.container, this.format, this.alt);
    };
    /**
     * @return {?}
     */
    MediaComponent.prototype.loadHandler = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass((/** @type {?} */ (this.elRef.nativeElement)), INITIALIZED_CLS);
        this.renderer.removeClass((/** @type {?} */ (this.elRef.nativeElement)), LOADING_CLS);
        this.loaded.emit(this.elRef.nativeElement);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MediaComponent.prototype.loadErrorHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.target.src = this.mediaService.getMissingImage();
    };
    MediaComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-media',
                    template: "<img\n  *ngIf=\"media\"\n  [attr.src]=\"media.src\"\n  [attr.srcset]=\"media.srcset\"\n  [attr.alt]=\"media.alt\"\n  (load)=\"loadHandler()\"\n  (error)=\"loadErrorHandler($event)\"\n/>\n",
                    changeDetection: ChangeDetectionStrategy.OnPush
                }] }
    ];
    /** @nocollapse */
    MediaComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: MediaService }
    ]; };
    MediaComponent.propDecorators = {
        container: [{ type: Input }],
        format: [{ type: Input }],
        alt: [{ type: Input }],
        loaded: [{ type: Output }]
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
     * @type {?}
     * @private
     */
    MediaComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    MediaComponent.prototype.renderer;
    /**
     * @type {?}
     * @protected
     */
    MediaComponent.prototype.mediaService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFFekMsZUFBZSxHQUFHLGFBQWE7O0lBQy9CLFdBQVcsR0FBRyxTQUFTO0FBRTdCO0lBb0NFLHdCQUNVLEtBQWlCLEVBQ2pCLFFBQW1CLEVBQ2pCLFlBQTBCO1FBRjVCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBYzs7OztRQVg1QixXQUFNLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7SUFZM0UsQ0FBQzs7OztJQUVKLG9DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLGtDQUFTOzs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsbUJBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUEsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMzRSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUNyQyxJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLEdBQUcsQ0FDVCxDQUFDO0lBQ0osQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixtQkFBYSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBQSxFQUNyQyxlQUFlLENBQ2hCLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FDdkIsbUJBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUEsRUFDckMsV0FBVyxDQUNaLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQseUNBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQUs7UUFDcEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6RCxDQUFDOztnQkFyRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQix1TUFBcUM7b0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2lCQUNoRDs7OztnQkFqQkMsVUFBVTtnQkFLVixTQUFTO2dCQUdGLFlBQVk7Ozs0QkFpQmxCLEtBQUs7eUJBS0wsS0FBSztzQkFNTCxLQUFLO3lCQUtMLE1BQU07O0lBMENULHFCQUFDO0NBQUEsQUF0RUQsSUFzRUM7U0FqRVksY0FBYzs7Ozs7Ozs7O0lBT3pCLG1DQUF3Qjs7Ozs7SUFLeEIsZ0NBQXdCOzs7Ozs7SUFNeEIsNkJBQXFCOzs7OztJQUtyQixnQ0FBOEU7Ozs7OztJQU05RSwrQkFBYTs7Ozs7SUFHWCwrQkFBeUI7Ozs7O0lBQ3pCLGtDQUEyQjs7Ozs7SUFDM0Isc0NBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZWRpYSB9IGZyb20gJy4vbWVkaWEubW9kZWwnO1xuaW1wb3J0IHsgTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi9tZWRpYS5zZXJ2aWNlJztcblxuY29uc3QgSU5JVElBTElaRURfQ0xTID0gJ2luaXRpYWxpemVkJztcbmNvbnN0IExPQURJTkdfQ0xTID0gJ2xvYWRpbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1tZWRpYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZWRpYS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBUaGUgbWVkaWEgY29udGFpbmVyIGNhbiBob2xkIG11bHRpcGxlIG1lZGlhIGl0ZW1zLCBzbyB0aGF0XG4gICAqIGEgc3BlY2lmaWMgbWVkaWEgKGJ5IGZvcm1hdCkgY2FuIGJlIHVzZWQgb3IgbXVsdGlwbGUgbWVkaWFcbiAgICogY2FuIGJlIHByb3ZpZGVkIGluIGEgYHNyY3NldGAgc28gdGhlIGJyb3dzZXIgd2lsbCBmaWd1cmUgb3V0XG4gICAqIHRoZSBiZXN0IG1lZGlhIGZvciB0aGUgZGV2aWNlLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyOiBhbnk7XG5cbiAgLyoqXG4gICAqIGlmIGEgbWVkaWEgZm9ybWF0IGlzIGdpdmVuLCBhIG1lZGlhIGZvciB0aGUgZ2l2ZW4gZm9ybWF0IHdpbGwgYmUgcmVuZGVyZWRcbiAgICovXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHNwZWNpZmljIGFsdCB0ZXh0IGZvciBhbiBpbWFnZSwgd2hpY2ggb3ZlcnJ1bGVzIHRoZSBhbHQgdGV4dFxuICAgKiBmcm9tIHRoZSBjb250YWluZXIgZGF0YS5cbiAgICovXG4gIEBJbnB1dCgpIGFsdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPbmNlIHRoZSBtZWRpYSBpcyBsb2FkZWQsIHdlIGVtaXQgYW4gZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgbG9hZGVkOiBFdmVudEVtaXR0ZXI8SFRNTEVsZW1lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxIVE1MRWxlbWVudD4oKTtcblxuICAvKipcbiAgICogVGhlIG1lZGlhIGNvbnRhaW5zIHRoZSBpbmZvIGZvciB0aGUgVUkgdG8gY3JlYXRlIHRoZSBpbWFnZS4gVGhpcyBtZWRpYVxuICAgKiBvYmplY3QgbWlnaHQgY29udGFpbiBtb3JlIGluZm8gb25jZSBvdGhlciBtZWRpYSB0eXBlcyAoaS5lLiB2aWRlbykgaXMgc3VwcG9ydGVkLlxuICAgKi9cbiAgbWVkaWE6IE1lZGlhO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByb3RlY3RlZCBtZWRpYVNlcnZpY2U6IE1lZGlhU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5sb2FkSW1hZ2UoKTtcbiAgfVxuXG4gIHByaXZhdGUgbG9hZEltYWdlKCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoPEhUTUxFbGVtZW50PnRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCwgTE9BRElOR19DTFMpO1xuICAgIHRoaXMubWVkaWEgPSB0aGlzLm1lZGlhU2VydmljZS5nZXRJbWFnZShcbiAgICAgIHRoaXMuY29udGFpbmVyLFxuICAgICAgdGhpcy5mb3JtYXQsXG4gICAgICB0aGlzLmFsdFxuICAgICk7XG4gIH1cblxuICBsb2FkSGFuZGxlcigpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgPEhUTUxFbGVtZW50PnRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIElOSVRJQUxJWkVEX0NMU1xuICAgICk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhcbiAgICAgIDxIVE1MRWxlbWVudD50aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBMT0FESU5HX0NMU1xuICAgICk7XG4gICAgdGhpcy5sb2FkZWQuZW1pdCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgbG9hZEVycm9ySGFuZGxlcihldmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnRhcmdldC5zcmMgPSB0aGlzLm1lZGlhU2VydmljZS5nZXRNaXNzaW5nSW1hZ2UoKTtcbiAgfVxufVxuIl19