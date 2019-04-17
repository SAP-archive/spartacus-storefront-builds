/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, ChangeDetectorRef, Output, EventEmitter, Renderer2, } from '@angular/core';
import { missingProductImgSrc, missingProductImageAlt, } from '../../../images/missingProduct';
/** @type {?} */
const DEFAULT_FORMAT = 'product';
/** @type {?} */
const INITIALIZED_CLS = 'initialized';
/** @type {?} */
const LOADING_CLS = 'loading';
export class PictureComponent {
    /**
     * @param {?} elRef
     * @param {?} cd
     * @param {?} renderer
     */
    constructor(elRef, cd, renderer) {
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
    ngOnChanges() {
        this.loadImage();
    }
    /**
     * @return {?}
     */
    loadImage() {
        if (this.imageContainer) {
            /** @type {?} */
            const image = this.imageContainer[this.imageFormat || DEFAULT_FORMAT];
            if (image && image.url) {
                this.renderer.addClass((/** @type {?} */ (this.elRef.nativeElement)), LOADING_CLS);
                this.mainImage = image.url;
                this.cd.detectChanges();
            }
        }
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
        event.target.src = missingProductImgSrc;
    }
}
PictureComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-picture',
                template: "<picture>\n  <!--\n    <source *ngIf=\"xsImage\" [srcset]=\"xsImage\" media=\"(max-width: 500px)\" />\n    <source *ngIf=\"smImage\" [srcset]=\"smImage\" media=\"(max-width: 800px)\" />\n    <source *ngIf=\"mdImage\" [srcset]=\"mdImage\" media=\"(max-width: 1200px)\" />\n    <source *ngIf=\"lgImage\" [srcset]=\"lgImage\" media=\"(min-width: 1200px)\" />\n  -->\n  <img\n    *ngIf=\"mainImage\"\n    [src]=\"mainImage || missingProductImgSrc\"\n    (load)=\"loadHandler()\"\n    (error)=\"loadErrorHandler($event)\"\n    [alt]=\"imageAlt\"\n  />\n\n  <img\n    *ngIf=\"!imageContainer\"\n    [src]=\"missingProductImgSrc\"\n    [alt]=\"missingProductImageAlt\"\n  />\n</picture>\n",
                styles: ["img{max-width:100%;max-height:100%;-webkit-transform:scale(var(--cx-zoom,1));transform:scale(var(--cx-zoom,1));opacity:var(--cx-zoom,1);transition:all var(--cx-g-transition-duration,.6s);border-radius:var(--cx-border-radius)}"]
            }] }
];
/** @nocollapse */
PictureComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: Renderer2 }
];
PictureComponent.propDecorators = {
    imageContainer: [{ type: Input }],
    imageFormat: [{ type: Input }],
    imagePosition: [{ type: Input }],
    imageAlt: [{ type: Input }],
    loaded: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGljdHVyZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJsaWIvdWkvY29tcG9uZW50cy9tZWRpYS9waWN0dXJlL3BpY3R1cmUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFFTCxVQUFVLEVBQ1YsaUJBQWlCLEVBQ2pCLE1BQU0sRUFDTixZQUFZLEVBQ1osU0FBUyxHQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFDTCxvQkFBb0IsRUFDcEIsc0JBQXNCLEdBQ3ZCLE1BQU0sZ0NBQWdDLENBQUM7O01BR2xDLGNBQWMsR0FBRyxTQUFTOztNQUMxQixlQUFlLEdBQUcsYUFBYTs7TUFDL0IsV0FBVyxHQUFHLFNBQVM7QUFPN0IsTUFBTSxPQUFPLGdCQUFnQjs7Ozs7O0lBaUIzQixZQUNVLEtBQWlCLEVBQ2pCLEVBQXFCLEVBQ3JCLFFBQW1CO1FBRm5CLFVBQUssR0FBTCxLQUFLLENBQVk7UUFDakIsT0FBRSxHQUFGLEVBQUUsQ0FBbUI7UUFDckIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQVQ3QixXQUFNLEdBQThCLElBQUksWUFBWSxFQUFlLENBQUM7UUFHcEUseUJBQW9CLEdBQUcsb0JBQW9CLENBQUM7UUFDNUMsMkJBQXNCLEdBQUcsc0JBQXNCLENBQUM7SUFNN0MsQ0FBQzs7OztJQUVKLFdBQVc7UUFDVCxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDbkIsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7O2tCQUNqQixLQUFLLEdBQVUsSUFBSSxDQUFDLGNBQWMsQ0FDdEMsSUFBSSxDQUFDLFdBQVcsSUFBSSxjQUFjLENBQ25DO1lBQ0QsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLEdBQUcsRUFBRTtnQkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQ3BCLG1CQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFBLEVBQ3JDLFdBQVcsQ0FDWixDQUFDO2dCQUNGLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQztnQkFDM0IsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsQ0FBQzthQUN6QjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FDcEIsbUJBQWEsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUEsRUFDckMsZUFBZSxDQUNoQixDQUFDO1FBQ0YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQ3ZCLG1CQUFhLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFBLEVBQ3JDLFdBQVcsQ0FDWixDQUFDO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUM3QyxDQUFDOzs7OztJQUVELGdCQUFnQixDQUFDLEtBQUs7UUFDcEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsb0JBQW9CLENBQUM7SUFDMUMsQ0FBQzs7O1lBOURGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIscXJCQUF1Qzs7YUFFeEM7Ozs7WUFwQkMsVUFBVTtZQUNWLGlCQUFpQjtZQUdqQixTQUFTOzs7NkJBa0JSLEtBQUs7MEJBRUwsS0FBSzs0QkFFTCxLQUFLO3VCQUVMLEtBQUs7cUJBR0wsTUFBTTs7OztJQVRQLDBDQUNlOztJQUNmLHVDQUNvQjs7SUFDcEIseUNBQ3NCOztJQUN0QixvQ0FDaUI7O0lBRWpCLGtDQUNvRTs7SUFFcEUscUNBQWtCOztJQUNsQixnREFBNEM7O0lBQzVDLGtEQUFnRDs7Ozs7SUFHOUMsaUNBQXlCOzs7OztJQUN6Qiw4QkFBNkI7Ozs7O0lBQzdCLG9DQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE9uQ2hhbmdlcyxcbiAgRWxlbWVudFJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtcbiAgbWlzc2luZ1Byb2R1Y3RJbWdTcmMsXG4gIG1pc3NpbmdQcm9kdWN0SW1hZ2VBbHQsXG59IGZyb20gJy4uLy4uLy4uL2ltYWdlcy9taXNzaW5nUHJvZHVjdCc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ0BzcGFydGFjdXMvY29yZSc7XG5cbmNvbnN0IERFRkFVTFRfRk9STUFUID0gJ3Byb2R1Y3QnO1xuY29uc3QgSU5JVElBTElaRURfQ0xTID0gJ2luaXRpYWxpemVkJztcbmNvbnN0IExPQURJTkdfQ0xTID0gJ2xvYWRpbmcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1waWN0dXJlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL3BpY3R1cmUuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9waWN0dXJlLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFBpY3R1cmVDb21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICBASW5wdXQoKVxuICBpbWFnZUNvbnRhaW5lcjtcbiAgQElucHV0KClcbiAgaW1hZ2VGb3JtYXQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgaW1hZ2VQb3NpdGlvbjogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpbWFnZUFsdDogc3RyaW5nO1xuXG4gIEBPdXRwdXQoKVxuICBsb2FkZWQ6IEV2ZW50RW1pdHRlcjxIVE1MRWxlbWVudD4gPSBuZXcgRXZlbnRFbWl0dGVyPEhUTUxFbGVtZW50PigpO1xuXG4gIG1haW5JbWFnZTogc3RyaW5nO1xuICBtaXNzaW5nUHJvZHVjdEltZ1NyYyA9IG1pc3NpbmdQcm9kdWN0SW1nU3JjO1xuICBtaXNzaW5nUHJvZHVjdEltYWdlQWx0ID0gbWlzc2luZ1Byb2R1Y3RJbWFnZUFsdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGVsUmVmOiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMlxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5sb2FkSW1hZ2UoKTtcbiAgfVxuXG4gIGxvYWRJbWFnZSgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5pbWFnZUNvbnRhaW5lcikge1xuICAgICAgY29uc3QgaW1hZ2U6IEltYWdlID0gdGhpcy5pbWFnZUNvbnRhaW5lcltcbiAgICAgICAgdGhpcy5pbWFnZUZvcm1hdCB8fCBERUZBVUxUX0ZPUk1BVFxuICAgICAgXTtcbiAgICAgIGlmIChpbWFnZSAmJiBpbWFnZS51cmwpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhcbiAgICAgICAgICA8SFRNTEVsZW1lbnQ+dGhpcy5lbFJlZi5uYXRpdmVFbGVtZW50LFxuICAgICAgICAgIExPQURJTkdfQ0xTXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMubWFpbkltYWdlID0gaW1hZ2UudXJsO1xuICAgICAgICB0aGlzLmNkLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBsb2FkSGFuZGxlcigpIHtcbiAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKFxuICAgICAgPEhUTUxFbGVtZW50PnRoaXMuZWxSZWYubmF0aXZlRWxlbWVudCxcbiAgICAgIElOSVRJQUxJWkVEX0NMU1xuICAgICk7XG4gICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhcbiAgICAgIDxIVE1MRWxlbWVudD50aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQsXG4gICAgICBMT0FESU5HX0NMU1xuICAgICk7XG4gICAgdGhpcy5sb2FkZWQuZW1pdCh0aGlzLmVsUmVmLm5hdGl2ZUVsZW1lbnQpO1xuICB9XG5cbiAgbG9hZEVycm9ySGFuZGxlcihldmVudCkge1xuICAgIGV2ZW50LnRhcmdldC5zcmMgPSBtaXNzaW5nUHJvZHVjdEltZ1NyYztcbiAgfVxufVxuIl19