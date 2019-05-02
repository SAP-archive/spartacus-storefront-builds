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
    MediaComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.renderer.addClass((/** @type {?} */ (this.elRef.nativeElement)), LOADING_CLS);
    };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsibGliL3VpL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7SUFFekMsZUFBZSxHQUFHLGFBQWE7O0lBQy9CLFdBQVcsR0FBRyxTQUFTO0FBRTdCO0lBb0NFLHdCQUNVLEtBQWlCLEVBQ2pCLFFBQW1CLEVBQ2pCLFlBQTBCO1FBRjVCLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNqQixpQkFBWSxHQUFaLFlBQVksQ0FBYzs7OztRQVg1QixXQUFNLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7SUFZM0UsQ0FBQzs7OztJQUVKLGlDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLG1CQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFBLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7OztJQUVELG9DQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNuQixDQUFDOzs7OztJQUVPLGtDQUFTOzs7O0lBQWpCO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDckMsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxHQUFHLENBQ1QsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxvQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsbUJBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUEsRUFDckMsZUFBZSxDQUNoQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQ3ZCLG1CQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFBLEVBQ3JDLFdBQVcsQ0FDWixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELHlDQUFnQjs7OztJQUFoQixVQUFpQixLQUFLO1FBQ3BCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekQsQ0FBQzs7Z0JBeEVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsdU1BQXFDO29CQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtpQkFDaEQ7Ozs7Z0JBbEJDLFVBQVU7Z0JBTVYsU0FBUztnQkFHRixZQUFZOzs7NEJBaUJsQixLQUFLO3lCQUtMLEtBQUs7c0JBTUwsS0FBSzt5QkFLTCxNQUFNOztJQTZDVCxxQkFBQztDQUFBLEFBekVELElBeUVDO1NBcEVZLGNBQWM7Ozs7Ozs7OztJQU96QixtQ0FBd0I7Ozs7O0lBS3hCLGdDQUF3Qjs7Ozs7O0lBTXhCLDZCQUFxQjs7Ozs7SUFLckIsZ0NBQThFOzs7Ozs7SUFNOUUsK0JBQWE7Ozs7O0lBR1gsK0JBQXlCOzs7OztJQUN6QixrQ0FBMkI7Ozs7O0lBQzNCLHNDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25Jbml0LFxuICBPdXRwdXQsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNZWRpYSB9IGZyb20gJy4vbWVkaWEubW9kZWwnO1xuaW1wb3J0IHsgTWVkaWFTZXJ2aWNlIH0gZnJvbSAnLi9tZWRpYS5zZXJ2aWNlJztcblxuY29uc3QgSU5JVElBTElaRURfQ0xTID0gJ2luaXRpYWxpemVkJztcbmNvbnN0IExPQURJTkdfQ0xTID0gJ2xvYWRpbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1tZWRpYScsXG4gIHRlbXBsYXRlVXJsOiAnLi9tZWRpYS5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBNZWRpYUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25Jbml0IHtcbiAgLyoqXG4gICAqIFRoZSBtZWRpYSBjb250YWluZXIgY2FuIGhvbGQgbXVsdGlwbGUgbWVkaWEgaXRlbXMsIHNvIHRoYXRcbiAgICogYSBzcGVjaWZpYyBtZWRpYSAoYnkgZm9ybWF0KSBjYW4gYmUgdXNlZCBvciBtdWx0aXBsZSBtZWRpYVxuICAgKiBjYW4gYmUgcHJvdmlkZWQgaW4gYSBgc3Jjc2V0YCBzbyB0aGUgYnJvd3NlciB3aWxsIGZpZ3VyZSBvdXRcbiAgICogdGhlIGJlc3QgbWVkaWEgZm9yIHRoZSBkZXZpY2UuXG4gICAqL1xuICBASW5wdXQoKSBjb250YWluZXI6IGFueTtcblxuICAvKipcbiAgICogaWYgYSBtZWRpYSBmb3JtYXQgaXMgZ2l2ZW4sIGEgbWVkaWEgZm9yIHRoZSBnaXZlbiBmb3JtYXQgd2lsbCBiZSByZW5kZXJlZFxuICAgKi9cbiAgQElucHV0KCkgZm9ybWF0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEEgc3BlY2lmaWMgYWx0IHRleHQgZm9yIGFuIGltYWdlLCB3aGljaCBvdmVycnVsZXMgdGhlIGFsdCB0ZXh0XG4gICAqIGZyb20gdGhlIGNvbnRhaW5lciBkYXRhLlxuICAgKi9cbiAgQElucHV0KCkgYWx0OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE9uY2UgdGhlIG1lZGlhIGlzIGxvYWRlZCwgd2UgZW1pdCBhbiBldmVudC5cbiAgICovXG4gIEBPdXRwdXQoKSBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxIVE1MRWxlbWVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEhUTUxFbGVtZW50PigpO1xuXG4gIC8qKlxuICAgKiBUaGUgbWVkaWEgY29udGFpbnMgdGhlIGluZm8gZm9yIHRoZSBVSSB0byBjcmVhdGUgdGhlIGltYWdlLiBUaGlzIG1lZGlhXG4gICAqIG9iamVjdCBtaWdodCBjb250YWluIG1vcmUgaW5mbyBvbmNlIG90aGVyIG1lZGlhIHR5cGVzIChpLmUuIHZpZGVvKSBpcyBzdXBwb3J0ZWQuXG4gICAqL1xuICBtZWRpYTogTWVkaWE7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBlbFJlZjogRWxlbWVudFJlZixcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIG1lZGlhU2VydmljZTogTWVkaWFTZXJ2aWNlXG4gICkge31cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKDxIVE1MRWxlbWVudD50aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsIExPQURJTkdfQ0xTKTtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKCk6IHZvaWQge1xuICAgIHRoaXMubG9hZEltYWdlKCk7XG4gIH1cblxuICBwcml2YXRlIGxvYWRJbWFnZSgpOiB2b2lkIHtcbiAgICB0aGlzLm1lZGlhID0gdGhpcy5tZWRpYVNlcnZpY2UuZ2V0SW1hZ2UoXG4gICAgICB0aGlzLmNvbnRhaW5lcixcbiAgICAgIHRoaXMuZm9ybWF0LFxuICAgICAgdGhpcy5hbHRcbiAgICApO1xuICB9XG5cbiAgbG9hZEhhbmRsZXIoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgIDxIVE1MRWxlbWVudD50aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBJTklUSUFMSVpFRF9DTFNcbiAgICApO1xuICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoXG4gICAgICA8SFRNTEVsZW1lbnQ+dGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgTE9BRElOR19DTFNcbiAgICApO1xuICAgIHRoaXMubG9hZGVkLmVtaXQodGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgfVxuXG4gIGxvYWRFcnJvckhhbmRsZXIoZXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC50YXJnZXQuc3JjID0gdGhpcy5tZWRpYVNlcnZpY2UuZ2V0TWlzc2luZ0ltYWdlKCk7XG4gIH1cbn1cbiJdfQ==