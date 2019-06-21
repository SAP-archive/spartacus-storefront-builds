/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { IconLoaderService } from './icon-loader.service';
import { ICON_TYPE } from './icon.model';
var IconComponent = /** @class */ (function () {
    function IconComponent(iconLoader, elementRef) {
        this.iconLoader = iconLoader;
        this.elementRef = elementRef;
        /**
         * Keeps the given style classes so that we can
         * clean them up when the icon changes
         */
        this.styleClasses = '';
    }
    Object.defineProperty(IconComponent.prototype, "type", {
        set: /**
         * @param {?} type
         * @return {?}
         */
        function (type) {
            this._type = type;
            this.addStyleClasses(type);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "useSvg", {
        /**
         * Indicates whether the icon is configured to use SVG or not.
         */
        get: /**
         * Indicates whether the icon is configured to use SVG or not.
         * @return {?}
         */
        function () {
            return this.iconLoader.useSvg(this._type);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "svgPath", {
        /**
         * Returns the path to the svg symbol. The path could include an
         * external URL to an svg (sprite) file, but can also reference
         * an existing SVG symbol in the DOM.
         */
        get: /**
         * Returns the path to the svg symbol. The path could include an
         * external URL to an svg (sprite) file, but can also reference
         * an existing SVG symbol in the DOM.
         * @return {?}
         */
        function () {
            return this.iconLoader.getSvgPath(this._type);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds the style classes and the link resource (if availabe).
     */
    /**
     * Adds the style classes and the link resource (if availabe).
     * @private
     * @param {?} type
     * @return {?}
     */
    IconComponent.prototype.addStyleClasses = /**
     * Adds the style classes and the link resource (if availabe).
     * @private
     * @param {?} type
     * @return {?}
     */
    function (type) {
        if (this.useSvg) {
            return;
        }
        if (this.staticStyleClasses === undefined) {
            this.staticStyleClasses = this.elementRef.nativeElement.classList.value
                ? this.elementRef.nativeElement.classList.value + ' '
                : '';
        }
        this.styleClasses =
            this.staticStyleClasses + this.iconLoader.getStyleClasses(type);
        this.iconLoader.addLinkResource(type);
    };
    IconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-icon',
                    template: "<ng-container *ngIf=\"useSvg\">\n  <svg>\n    <use [attr.xlink:href]=\"svgPath\"></use>\n  </svg>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    IconComponent.ctorParameters = function () { return [
        { type: IconLoaderService },
        { type: ElementRef }
    ]; };
    IconComponent.propDecorators = {
        type: [{ type: Input, args: ['type',] }],
        styleClasses: [{ type: HostBinding, args: ['class',] }]
    };
    return IconComponent;
}());
export { IconComponent };
if (false) {
    /**
     * The type of the icon which maps to the icon link
     * in the svg icon sprite.
     * @type {?}
     */
    IconComponent.prototype._type;
    /**
     * Keeps the given style classes so that we can
     * clean them up when the icon changes
     * @type {?}
     */
    IconComponent.prototype.styleClasses;
    /**
     * Style class names from the host element are taken into account
     * when classes are set dynamically.
     * @type {?}
     * @private
     */
    IconComponent.prototype.staticStyleClasses;
    /**
     * @type {?}
     * @protected
     */
    IconComponent.prototype.iconLoader;
    /**
     * @type {?}
     * @protected
     */
    IconComponent.prototype.elementRef;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QztJQTRCRSx1QkFDWSxVQUE2QixFQUM3QixVQUFtQztRQURuQyxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUF5Qjs7Ozs7UUFWekIsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFXckMsQ0FBQztJQXJCSixzQkFDSSwrQkFBSTs7Ozs7UUFEUixVQUNTLElBQWU7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQXNCRCxzQkFBSSxpQ0FBTTtRQUhWOztXQUVHOzs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsQ0FBQzs7O09BQUE7SUFPRCxzQkFBSSxrQ0FBTztRQUxYOzs7O1dBSUc7Ozs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hELENBQUM7OztPQUFBO0lBRUQ7O09BRUc7Ozs7Ozs7SUFDSyx1Q0FBZTs7Ozs7O0lBQXZCLFVBQXdCLElBQWU7UUFDckMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssU0FBUyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSztnQkFDckUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsR0FBRztnQkFDckQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUNSO1FBRUQsSUFBSSxDQUFDLFlBQVk7WUFDZixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBbkVGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsZ0lBQW9DO2lCQUNyQzs7OztnQkFOUSxpQkFBaUI7Z0JBRE4sVUFBVTs7O3VCQWMzQixLQUFLLFNBQUMsTUFBTTsrQkFVWixXQUFXLFNBQUMsT0FBTzs7SUFnRHRCLG9CQUFDO0NBQUEsQUFwRUQsSUFvRUM7U0FoRVksYUFBYTs7Ozs7OztJQUt4Qiw4QkFBaUI7Ozs7OztJQVdqQixxQ0FBd0M7Ozs7Ozs7SUFNeEMsMkNBQW1DOzs7OztJQUdqQyxtQ0FBdUM7Ozs7O0lBQ3ZDLG1DQUE2QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uTG9hZGVyU2VydmljZSB9IGZyb20gJy4vaWNvbi1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuL2ljb24ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoZSBpY29uIHdoaWNoIG1hcHMgdG8gdGhlIGljb24gbGlua1xuICAgKiBpbiB0aGUgc3ZnIGljb24gc3ByaXRlLlxuICAgKi9cbiAgX3R5cGU6IElDT05fVFlQRTtcbiAgQElucHV0KCd0eXBlJylcbiAgc2V0IHR5cGUodHlwZTogSUNPTl9UWVBFKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgdGhpcy5hZGRTdHlsZUNsYXNzZXModHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogS2VlcHMgdGhlIGdpdmVuIHN0eWxlIGNsYXNzZXMgc28gdGhhdCB3ZSBjYW5cbiAgICogY2xlYW4gdGhlbSB1cCB3aGVuIHRoZSBpY29uIGNoYW5nZXNcbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBzdHlsZUNsYXNzZXMgPSAnJztcblxuICAvKipcbiAgICogU3R5bGUgY2xhc3MgbmFtZXMgZnJvbSB0aGUgaG9zdCBlbGVtZW50IGFyZSB0YWtlbiBpbnRvIGFjY291bnRcbiAgICogd2hlbiBjbGFzc2VzIGFyZSBzZXQgZHluYW1pY2FsbHkuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpY1N0eWxlQ2xhc3Nlczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBpY29uTG9hZGVyOiBJY29uTG9hZGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaWNvbiBpcyBjb25maWd1cmVkIHRvIHVzZSBTVkcgb3Igbm90LlxuICAgKi9cbiAgZ2V0IHVzZVN2ZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pY29uTG9hZGVyLnVzZVN2Zyh0aGlzLl90eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXRoIHRvIHRoZSBzdmcgc3ltYm9sLiBUaGUgcGF0aCBjb3VsZCBpbmNsdWRlIGFuXG4gICAqIGV4dGVybmFsIFVSTCB0byBhbiBzdmcgKHNwcml0ZSkgZmlsZSwgYnV0IGNhbiBhbHNvIHJlZmVyZW5jZVxuICAgKiBhbiBleGlzdGluZyBTVkcgc3ltYm9sIGluIHRoZSBET00uXG4gICAqL1xuICBnZXQgc3ZnUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmljb25Mb2FkZXIuZ2V0U3ZnUGF0aCh0aGlzLl90eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBzdHlsZSBjbGFzc2VzIGFuZCB0aGUgbGluayByZXNvdXJjZSAoaWYgYXZhaWxhYmUpLlxuICAgKi9cbiAgcHJpdmF0ZSBhZGRTdHlsZUNsYXNzZXModHlwZTogSUNPTl9UWVBFKSB7XG4gICAgaWYgKHRoaXMudXNlU3ZnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGljU3R5bGVDbGFzc2VzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc3RhdGljU3R5bGVDbGFzc2VzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnZhbHVlXG4gICAgICAgID8gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnZhbHVlICsgJyAnXG4gICAgICAgIDogJyc7XG4gICAgfVxuXG4gICAgdGhpcy5zdHlsZUNsYXNzZXMgPVxuICAgICAgdGhpcy5zdGF0aWNTdHlsZUNsYXNzZXMgKyB0aGlzLmljb25Mb2FkZXIuZ2V0U3R5bGVDbGFzc2VzKHR5cGUpO1xuXG4gICAgdGhpcy5pY29uTG9hZGVyLmFkZExpbmtSZXNvdXJjZSh0eXBlKTtcbiAgfVxufVxuIl19