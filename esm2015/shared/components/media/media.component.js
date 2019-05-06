/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, ElementRef, EventEmitter, Input, Output, Renderer2, } from '@angular/core';
import { MediaService } from './media.service';
/** @type {?} */
const INITIALIZED_CLS = 'initialized';
/** @type {?} */
const LOADING_CLS = 'loading';
export class MediaComponent {
    /**
     * @param {?} elRef
     * @param {?} renderer
     * @param {?} mediaService
     */
    constructor(elRef, renderer, mediaService) {
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
    ngOnInit() {
        this.renderer.addClass((/** @type {?} */ (this.elRef.nativeElement)), LOADING_CLS);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.loadImage();
    }
    /**
     * @private
     * @return {?}
     */
    loadImage() {
        this.media = this.mediaService.getImage(this.container, this.format, this.alt);
    }
    /**
     * @return {?}
     */
    loadHandler() {
        this.renderer.addClass((/** @type {?} */ (this.elRef.nativeElement)), INITIALIZED_CLS);
        this.renderer.removeClass((/** @type {?} */ (this.elRef.nativeElement)), LOADING_CLS);
        this.loaded.emit(this.elRef.nativeElement);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    loadErrorHandler(event) {
        event.target.src = this.mediaService.getMissingImage();
    }
}
MediaComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-media',
                template: "<img\n  *ngIf=\"media\"\n  [attr.src]=\"media.src\"\n  [attr.srcset]=\"media.srcset\"\n  [attr.alt]=\"media.alt\"\n  (load)=\"loadHandler()\"\n  (error)=\"loadErrorHandler($event)\"\n/>\n",
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
MediaComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: MediaService }
];
MediaComponent.propDecorators = {
    container: [{ type: Input }],
    format: [{ type: Input }],
    alt: [{ type: Input }],
    loaded: [{ type: Output }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVkaWEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNwYXJ0YWN1cy9zdG9yZWZyb250LyIsInNvdXJjZXMiOlsic2hhcmVkL2NvbXBvbmVudHMvbWVkaWEvbWVkaWEuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFHTCxNQUFNLEVBQ04sU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7TUFFekMsZUFBZSxHQUFHLGFBQWE7O01BQy9CLFdBQVcsR0FBRyxTQUFTO0FBTzdCLE1BQU0sT0FBTyxjQUFjOzs7Ozs7SUErQnpCLFlBQ1UsS0FBaUIsRUFDakIsUUFBbUIsRUFDakIsWUFBMEI7UUFGNUIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ2pCLGlCQUFZLEdBQVosWUFBWSxDQUFjOzs7O1FBWDVCLFdBQU0sR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztJQVkzRSxDQUFDOzs7O0lBRUosUUFBUTtRQUNOLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLG1CQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFBLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDN0UsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7Ozs7SUFFTyxTQUFTO1FBQ2YsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FDckMsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsTUFBTSxFQUNYLElBQUksQ0FBQyxHQUFHLENBQ1QsQ0FBQztJQUNKLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLG1CQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFBLEVBQ3JDLGVBQWUsQ0FDaEIsQ0FBQztRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUN2QixtQkFBYSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBQSxFQUNyQyxXQUFXLENBQ1osQ0FBQztRQUNGLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Ozs7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFLO1FBQ3BCLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekQsQ0FBQzs7O1lBeEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsVUFBVTtnQkFDcEIsdU1BQXFDO2dCQUNyQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTthQUNoRDs7OztZQWxCQyxVQUFVO1lBTVYsU0FBUztZQUdGLFlBQVk7Ozt3QkFpQmxCLEtBQUs7cUJBS0wsS0FBSztrQkFNTCxLQUFLO3FCQUtMLE1BQU07Ozs7Ozs7Ozs7SUFoQlAsbUNBQXdCOzs7OztJQUt4QixnQ0FBd0I7Ozs7OztJQU14Qiw2QkFBcUI7Ozs7O0lBS3JCLGdDQUE4RTs7Ozs7O0lBTTlFLCtCQUFhOzs7OztJQUdYLCtCQUF5Qjs7Ozs7SUFDekIsa0NBQTJCOzs7OztJQUMzQixzQ0FBb0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIE9uSW5pdCxcbiAgT3V0cHV0LFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTWVkaWEgfSBmcm9tICcuL21lZGlhLm1vZGVsJztcbmltcG9ydCB7IE1lZGlhU2VydmljZSB9IGZyb20gJy4vbWVkaWEuc2VydmljZSc7XG5cbmNvbnN0IElOSVRJQUxJWkVEX0NMUyA9ICdpbml0aWFsaXplZCc7XG5jb25zdCBMT0FESU5HX0NMUyA9ICdsb2FkaW5nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtbWVkaWEnLFxuICB0ZW1wbGF0ZVVybDogJy4vbWVkaWEuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbn0pXG5leHBvcnQgY2xhc3MgTWVkaWFDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uSW5pdCB7XG4gIC8qKlxuICAgKiBUaGUgbWVkaWEgY29udGFpbmVyIGNhbiBob2xkIG11bHRpcGxlIG1lZGlhIGl0ZW1zLCBzbyB0aGF0XG4gICAqIGEgc3BlY2lmaWMgbWVkaWEgKGJ5IGZvcm1hdCkgY2FuIGJlIHVzZWQgb3IgbXVsdGlwbGUgbWVkaWFcbiAgICogY2FuIGJlIHByb3ZpZGVkIGluIGEgYHNyY3NldGAgc28gdGhlIGJyb3dzZXIgd2lsbCBmaWd1cmUgb3V0XG4gICAqIHRoZSBiZXN0IG1lZGlhIGZvciB0aGUgZGV2aWNlLlxuICAgKi9cbiAgQElucHV0KCkgY29udGFpbmVyOiBhbnk7XG5cbiAgLyoqXG4gICAqIGlmIGEgbWVkaWEgZm9ybWF0IGlzIGdpdmVuLCBhIG1lZGlhIGZvciB0aGUgZ2l2ZW4gZm9ybWF0IHdpbGwgYmUgcmVuZGVyZWRcbiAgICovXG4gIEBJbnB1dCgpIGZvcm1hdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBBIHNwZWNpZmljIGFsdCB0ZXh0IGZvciBhbiBpbWFnZSwgd2hpY2ggb3ZlcnJ1bGVzIHRoZSBhbHQgdGV4dFxuICAgKiBmcm9tIHRoZSBjb250YWluZXIgZGF0YS5cbiAgICovXG4gIEBJbnB1dCgpIGFsdDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBPbmNlIHRoZSBtZWRpYSBpcyBsb2FkZWQsIHdlIGVtaXQgYW4gZXZlbnQuXG4gICAqL1xuICBAT3V0cHV0KCkgbG9hZGVkOiBFdmVudEVtaXR0ZXI8SFRNTEVsZW1lbnQ+ID0gbmV3IEV2ZW50RW1pdHRlcjxIVE1MRWxlbWVudD4oKTtcblxuICAvKipcbiAgICogVGhlIG1lZGlhIGNvbnRhaW5zIHRoZSBpbmZvIGZvciB0aGUgVUkgdG8gY3JlYXRlIHRoZSBpbWFnZS4gVGhpcyBtZWRpYVxuICAgKiBvYmplY3QgbWlnaHQgY29udGFpbiBtb3JlIGluZm8gb25jZSBvdGhlciBtZWRpYSB0eXBlcyAoaS5lLiB2aWRlbykgaXMgc3VwcG9ydGVkLlxuICAgKi9cbiAgbWVkaWE6IE1lZGlhO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByb3RlY3RlZCBtZWRpYVNlcnZpY2U6IE1lZGlhU2VydmljZVxuICApIHt9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyg8SFRNTEVsZW1lbnQ+dGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LCBMT0FESU5HX0NMUyk7XG4gIH1cblxuICBuZ09uQ2hhbmdlcygpOiB2b2lkIHtcbiAgICB0aGlzLmxvYWRJbWFnZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBsb2FkSW1hZ2UoKTogdm9pZCB7XG4gICAgdGhpcy5tZWRpYSA9IHRoaXMubWVkaWFTZXJ2aWNlLmdldEltYWdlKFxuICAgICAgdGhpcy5jb250YWluZXIsXG4gICAgICB0aGlzLmZvcm1hdCxcbiAgICAgIHRoaXMuYWx0XG4gICAgKTtcbiAgfVxuXG4gIGxvYWRIYW5kbGVyKCk6IHZvaWQge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICA8SFRNTEVsZW1lbnQ+dGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgSU5JVElBTElaRURfQ0xTXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKFxuICAgICAgPEhUTUxFbGVtZW50PnRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIExPQURJTkdfQ0xTXG4gICAgKTtcbiAgICB0aGlzLmxvYWRlZC5lbWl0KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBsb2FkRXJyb3JIYW5kbGVyKGV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQudGFyZ2V0LnNyYyA9IHRoaXMubWVkaWFTZXJ2aWNlLmdldE1pc3NpbmdJbWFnZSgpO1xuICB9XG59XG4iXX0=