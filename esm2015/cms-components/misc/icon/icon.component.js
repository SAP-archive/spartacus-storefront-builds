/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { IconLoaderService } from './icon-loader.service';
export class IconComponent {
    /**
     * @param {?} iconLoader
     * @param {?} renderer
     * @param {?} hostElement
     */
    constructor(iconLoader, renderer, hostElement) {
        this.iconLoader = iconLoader;
        this.renderer = renderer;
        this.hostElement = hostElement;
        /**
         * Keeps the given style classes so that we can
         * clean them up when the icon changes
         */
        this.iconStyleClasses = [];
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        this.addStyleClasses();
    }
    /**
     * @return {?}
     */
    get useSvg() {
        return this.iconLoader.useSvg();
    }
    /**
     * @return {?}
     */
    get path() {
        return this.iconLoader.getSvgPath(this.type);
    }
    /**
     * @private
     * @return {?}
     */
    addStyleClasses() {
        if (this.useSvg) {
            return;
        }
        this.clearStyleClasses();
        this.iconStyleClasses = this.iconLoader.getStyleClasses(this.type);
        this.iconStyleClasses.forEach(cls => {
            this.renderer.addClass(this.hostElement.nativeElement, cls);
        });
    }
    /**
     * @private
     * @return {?}
     */
    clearStyleClasses() {
        this.iconStyleClasses.forEach(cls => {
            this.renderer.removeClass(this.hostElement.nativeElement, cls);
        });
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-icon',
                template: "<ng-container *ngIf=\"useSvg\">\n  <svg>\n    <use [attr.xlink:href]=\"path\"></use>\n  </svg>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
IconComponent.ctorParameters = () => [
    { type: IconLoaderService },
    { type: Renderer2 },
    { type: ElementRef }
];
IconComponent.propDecorators = {
    type: [{ type: Input }]
};
if (false) {
    /**
     * Keeps the given style classes so that we can
     * clean them up when the icon changes
     * @type {?}
     * @private
     */
    IconComponent.prototype.iconStyleClasses;
    /**
     * The type of the icon which maps to the icon link
     * in the svg icon sprite.
     * @type {?}
     */
    IconComponent.prototype.type;
    /**
     * @type {?}
     * @private
     */
    IconComponent.prototype.iconLoader;
    /**
     * @type {?}
     * @protected
     */
    IconComponent.prototype.renderer;
    /**
     * @type {?}
     * @protected
     */
    IconComponent.prototype.hostElement;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFPMUQsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQWF4QixZQUNVLFVBQTZCLEVBQzNCLFFBQW1CLEVBQ25CLFdBQXVCO1FBRnpCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7Ozs7O1FBWDNCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztJQVkzQixDQUFDOzs7O0lBRUosV0FBVztRQUNULElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVPLGVBQWU7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLDZIQUFvQzthQUNyQzs7OztZQU5RLGlCQUFpQjtZQUZ4QixTQUFTO1lBSFQsVUFBVTs7O21CQXVCVCxLQUFLOzs7Ozs7Ozs7SUFOTix5Q0FBOEI7Ozs7OztJQU05Qiw2QkFBbUM7Ozs7O0lBR2pDLG1DQUFxQzs7Ozs7SUFDckMsaUNBQTZCOzs7OztJQUM3QixvQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uTG9hZGVyU2VydmljZSB9IGZyb20gJy4vaWNvbi1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEVTIH0gZnJvbSAnLi9pY29uLmNvbmZpZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKipcbiAgICogS2VlcHMgdGhlIGdpdmVuIHN0eWxlIGNsYXNzZXMgc28gdGhhdCB3ZSBjYW5cbiAgICogY2xlYW4gdGhlbSB1cCB3aGVuIHRoZSBpY29uIGNoYW5nZXNcbiAgICovXG4gIHByaXZhdGUgaWNvblN0eWxlQ2xhc3NlcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgaWNvbiB3aGljaCBtYXBzIHRvIHRoZSBpY29uIGxpbmtcbiAgICogaW4gdGhlIHN2ZyBpY29uIHNwcml0ZS5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGU6IElDT05fVFlQRVMgfCBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpY29uTG9hZGVyOiBJY29uTG9hZGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuYWRkU3R5bGVDbGFzc2VzKCk7XG4gIH1cblxuICBnZXQgdXNlU3ZnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmljb25Mb2FkZXIudXNlU3ZnKCk7XG4gIH1cblxuICBnZXQgcGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmljb25Mb2FkZXIuZ2V0U3ZnUGF0aCh0aGlzLnR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTdHlsZUNsYXNzZXMoKSB7XG4gICAgaWYgKHRoaXMudXNlU3ZnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xlYXJTdHlsZUNsYXNzZXMoKTtcbiAgICB0aGlzLmljb25TdHlsZUNsYXNzZXMgPSB0aGlzLmljb25Mb2FkZXIuZ2V0U3R5bGVDbGFzc2VzKHRoaXMudHlwZSk7XG4gICAgdGhpcy5pY29uU3R5bGVDbGFzc2VzLmZvckVhY2goY2xzID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBjbHMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhclN0eWxlQ2xhc3NlcygpIHtcbiAgICB0aGlzLmljb25TdHlsZUNsYXNzZXMuZm9yRWFjaChjbHMgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGNscyk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==