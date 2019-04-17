/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, ChangeDetectorRef, Output, EventEmitter, Renderer2, } from '@angular/core';
import { missingProductImgSrc, missingProductImageAlt, } from '../../../images/missingProduct';
/** @type {?} */
var DEFAULT_FORMAT = 'product';
/** @type {?} */
var INITIALIZED_CLS = 'initialized';
/** @type {?} */
var LOADING_CLS = 'loading';
var PictureComponent = /** @class */ (function () {
    function PictureComponent(elRef, cd, renderer) {
        this.elRef = elRef;
        this.cd = cd;
        this.renderer = renderer;
        this.loaded = new EventEmitter();
        this.missingProductImgSrc = missingProductImgSrc;
        this.missingProductImageAlt = missingProductImageAlt;
    }
    /**
     * @return {?}
     */
    PictureComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.loadImage();
    };
    /**
     * @return {?}
     */
    PictureComponent.prototype.loadImage = /**
     * @return {?}
     */
    function () {
        if (this.imageContainer) {
            /** @type {?} */
            var image = this.imageContainer[this.imageFormat || DEFAULT_FORMAT];
            if (image && image.url) {
                this.renderer.addClass((/** @type {?} */ (this.elRef.nativeElement)), LOADING_CLS);
                this.mainImage = image.url;
                this.cd.detectChanges();
            }
        }
    };
    /**
     * @return {?}
     */
    PictureComponent.prototype.loadHandler = /**
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
    PictureComponent.prototype.loadErrorHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.target.src = missingProductImgSrc;
    };
    PictureComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-picture',
                    template: "<picture>\n  <!--\n    <source *ngIf=\"xsImage\" [srcset]=\"xsImage\" media=\"(max-width: 500px)\" />\n    <source *ngIf=\"smImage\" [srcset]=\"smImage\" media=\"(max-width: 800px)\" />\n    <source *ngIf=\"mdImage\" [srcset]=\"mdImage\" media=\"(max-width: 1200px)\" />\n    <source *ngIf=\"lgImage\" [srcset]=\"lgImage\" media=\"(min-width: 1200px)\" />\n  -->\n  <img\n    *ngIf=\"mainImage\"\n    [src]=\"mainImage || missingProductImgSrc\"\n    (load)=\"loadHandler()\"\n    (error)=\"loadErrorHandler($event)\"\n    [alt]=\"imageAlt\"\n  />\n\n  <img\n    *ngIf=\"!imageContainer\"\n    [src]=\"missingProductImgSrc\"\n    [alt]=\"missingProductImageAlt\"\n  />\n</picture>\n",
                    styles: ["img{max-width:100%;max-height:100%;-webkit-transform:scale(var(--cx-zoom,1));transform:scale(var(--cx-zoom,1));opacity:var(--cx-zoom,1);transition:all var(--cx-g-transition-duration,.6s);border-radius:var(--cx-border-radius)}"]
                }] }
    ];
    /** @nocollapse */
    PictureComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ChangeDetectorRef },
        { type: Renderer2 }
    ]; };
    PictureComponent.propDecorators = {
        imageContainer: [{ type: Input }],
        imageFormat: [{ type: Input }],
        imagePosition: [{ type: Input }],
        imageAlt: [{ type: Input }],
        loaded: [{ type: Output }]
    };
    return PictureComponent;
}());
export { PictureComponent };
if (false) {
    /** @type {?} */
    PictureComponent.prototype.imageContainer;
    /** @type {?} */
    PictureComponent.prototype.imageFormat;
    /** @type {?} */
    PictureComponent.prototype.imagePosition;
    /** @type {?} */
    PictureComponent.prototype.imageAlt;
    /** @type {?} */
    PictureComponent.prototype.loaded;
    /** @type {?} */
    PictureComponent.prototype.mainImage;
    /** @type {?} */
    PictureComponent.prototype.missingProductImgSrc;
    /** @type {?} */
    PictureComponent.prototype.missingProductImageAlt;
    /**
     * @type {?}
     * @private
     */
    PictureComponent.prototype.elRef;
    /**
     * @type {?}
     * @private
     */
    PictureComponent.prototype.cd;
    /**
     * @type {?}
     * @private
     */
    PictureComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvdWkvY29tcG9uZW50cy9tZWRpYS9waWN0dXJlL3BpY3R1cmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsc0JBQXNCLEdBQ3ZCLE1BQU0sZ0NBQWdDLENBQUM7O0lBR2xDLGNBQWMsR0FBRyxTQUFTOztJQUMxQixlQUFlLEdBQUcsYUFBYTs7SUFDL0IsV0FBVyxHQUFHLFNBQVM7QUFFN0I7SUFzQkUsMEJBQ1UsS0FBaUIsRUFDakIsRUFBcUIsRUFDckIsUUFBbUI7UUFGbkIsVUFBSyxHQUFMLEtBQUssQ0FBWTtRQUNqQixPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBVDdCLFdBQU0sR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUdwRSx5QkFBb0IsR0FBRyxvQkFBb0IsQ0FBQztRQUM1QywyQkFBc0IsR0FBRyxzQkFBc0IsQ0FBQztJQU03QyxDQUFDOzs7O0lBRUosc0NBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ25CLENBQUM7Ozs7SUFFRCxvQ0FBUzs7O0lBQVQ7UUFDRSxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7O2dCQUNqQixLQUFLLEdBQVUsSUFBSSxDQUFDLGNBQWMsQ0FDdEMsSUFBSSxDQUFDLFdBQVcsSUFBSSxjQUFjLENBQ25DO1lBQ0QsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLG1CQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFBLEVBQ3JDLFdBQVcsQ0FDWixDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN6QjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELHNDQUFXOzs7SUFBWDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUNwQixtQkFBYSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBQSxFQUNyQyxlQUFlLENBQ2hCLENBQUM7UUFDRixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FDdkIsbUJBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUEsRUFDckMsV0FBVyxDQUNaLENBQUM7UUFDRixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQzdDLENBQUM7Ozs7O0lBRUQsMkNBQWdCOzs7O0lBQWhCLFVBQWlCLEtBQUs7UUFDcEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsb0JBQW9CLENBQUM7SUFDMUMsQ0FBQzs7Z0JBOURGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIscXJCQUF1Qzs7aUJBRXhDOzs7O2dCQXBCQyxVQUFVO2dCQUNWLGlCQUFpQjtnQkFHakIsU0FBUzs7O2lDQWtCUixLQUFLOzhCQUVMLEtBQUs7Z0NBRUwsS0FBSzsyQkFFTCxLQUFLO3lCQUdMLE1BQU07O0lBZ0RULHVCQUFDO0NBQUEsQUEvREQsSUErREM7U0ExRFksZ0JBQWdCOzs7SUFDM0IsMENBQ2U7O0lBQ2YsdUNBQ29COztJQUNwQix5Q0FDc0I7O0lBQ3RCLG9DQUNpQjs7SUFFakIsa0NBQ29FOztJQUVwRSxxQ0FBa0I7O0lBQ2xCLGdEQUE0Qzs7SUFDNUMsa0RBQWdEOzs7OztJQUc5QyxpQ0FBeUI7Ozs7O0lBQ3pCLDhCQUE2Qjs7Ozs7SUFDN0Isb0NBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBFbGVtZW50UmVmLFxuICBDaGFuZ2VEZXRlY3RvclJlZixcbiAgT3V0cHV0LFxuICBFdmVudEVtaXR0ZXIsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1xuICBtaXNzaW5nUHJvZHVjdEltZ1NyYyxcbiAgbWlzc2luZ1Byb2R1Y3RJbWFnZUFsdCxcbn0gZnJvbSAnLi4vLi4vLi4vaW1hZ2VzL21pc3NpbmdQcm9kdWN0JztcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnQHNwYXJ0YWN1cy9jb3JlJztcblxuY29uc3QgREVGQVVMVF9GT1JNQVQgPSAncHJvZHVjdCc7XG5jb25zdCBJTklUSUFMSVpFRF9DTFMgPSAnaW5pdGlhbGl6ZWQnO1xuY29uc3QgTE9BRElOR19DTFMgPSAnbG9hZGluZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LXBpY3R1cmUnLFxuICB0ZW1wbGF0ZVVybDogJy4vcGljdHVyZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL3BpY3R1cmUuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgUGljdHVyZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpXG4gIGltYWdlQ29udGFpbmVyO1xuICBASW5wdXQoKVxuICBpbWFnZUZvcm1hdDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpbWFnZVBvc2l0aW9uOiBzdHJpbmc7XG4gIEBJbnB1dCgpXG4gIGltYWdlQWx0OiBzdHJpbmc7XG5cbiAgQE91dHB1dCgpXG4gIGxvYWRlZDogRXZlbnRFbWl0dGVyPEhUTUxFbGVtZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8SFRNTEVsZW1lbnQ+KCk7XG5cbiAgbWFpbkltYWdlOiBzdHJpbmc7XG4gIG1pc3NpbmdQcm9kdWN0SW1nU3JjID0gbWlzc2luZ1Byb2R1Y3RJbWdTcmM7XG4gIG1pc3NpbmdQcm9kdWN0SW1hZ2VBbHQgPSBtaXNzaW5nUHJvZHVjdEltYWdlQWx0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgZWxSZWY6IEVsZW1lbnRSZWYsXG4gICAgcHJpdmF0ZSBjZDogQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyXG4gICkge31cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmxvYWRJbWFnZSgpO1xuICB9XG5cbiAgbG9hZEltYWdlKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmltYWdlQ29udGFpbmVyKSB7XG4gICAgICBjb25zdCBpbWFnZTogSW1hZ2UgPSB0aGlzLmltYWdlQ29udGFpbmVyW1xuICAgICAgICB0aGlzLmltYWdlRm9ybWF0IHx8IERFRkFVTFRfRk9STUFUXG4gICAgICBdO1xuICAgICAgaWYgKGltYWdlICYmIGltYWdlLnVybCkge1xuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgICAgIDxIVE1MRWxlbWVudD50aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICAgICAgTE9BRElOR19DTFNcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5tYWluSW1hZ2UgPSBpbWFnZS51cmw7XG4gICAgICAgIHRoaXMuY2QuZGV0ZWN0Q2hhbmdlcygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGxvYWRIYW5kbGVyKCkge1xuICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoXG4gICAgICA8SFRNTEVsZW1lbnQ+dGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgSU5JVElBTElaRURfQ0xTXG4gICAgKTtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKFxuICAgICAgPEhUTUxFbGVtZW50PnRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIExPQURJTkdfQ0xTXG4gICAgKTtcbiAgICB0aGlzLmxvYWRlZC5lbWl0KHRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCk7XG4gIH1cblxuICBsb2FkRXJyb3JIYW5kbGVyKGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0LnNyYyA9IG1pc3NpbmdQcm9kdWN0SW1nU3JjO1xuICB9XG59XG4iXX0=