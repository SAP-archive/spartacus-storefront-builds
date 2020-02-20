import { __decorate } from "tslib";
import { Component, ElementRef, HostBinding, Input } from '@angular/core';
import { IconLoaderService } from './icon-loader.service';
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
        set: function (type) {
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
        get: function () {
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
        get: function () {
            return this.iconLoader.getSvgPath(this._type);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Adds the style classes and the link resource (if availabe).
     */
    IconComponent.prototype.addStyleClasses = function (type) {
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
    IconComponent.ctorParameters = function () { return [
        { type: IconLoaderService },
        { type: ElementRef }
    ]; };
    __decorate([
        Input('type')
    ], IconComponent.prototype, "type", null);
    __decorate([
        HostBinding('class')
    ], IconComponent.prototype, "styleClasses", void 0);
    IconComponent = __decorate([
        Component({
            selector: 'cx-icon',
            template: "<ng-container *ngIf=\"useSvg\">\n  <svg>\n    <use [attr.xlink:href]=\"svgPath\"></use>\n  </svg>\n</ng-container>\n"
        })
    ], IconComponent);
    return IconComponent;
}());
export { IconComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFPMUQ7SUF3QkUsdUJBQ1ksVUFBNkIsRUFDN0IsVUFBbUM7UUFEbkMsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7UUFkL0M7OztXQUdHO1FBQ21CLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBV3JDLENBQUM7SUFwQkosc0JBQUksK0JBQUk7YUFBUixVQUFTLElBQWU7WUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQXNCRCxzQkFBSSxpQ0FBTTtRQUhWOztXQUVHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxDQUFDOzs7T0FBQTtJQU9ELHNCQUFJLGtDQUFPO1FBTFg7Ozs7V0FJRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsQ0FBQzs7O09BQUE7SUFFRDs7T0FFRztJQUNLLHVDQUFlLEdBQXZCLFVBQXdCLElBQWU7UUFDckMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsa0JBQWtCLEtBQUssU0FBUyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSztnQkFDckUsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEdBQUcsR0FBRztnQkFDckQsQ0FBQyxDQUFDLEVBQUUsQ0FBQztTQUNSO1FBRUQsSUFBSSxDQUFDLFlBQVk7WUFDZixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFbEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7Z0JBdEN1QixpQkFBaUI7Z0JBQ2pCLFVBQVU7O0lBbkJsQztRQURDLEtBQUssQ0FBQyxNQUFNLENBQUM7NkNBSWI7SUFNcUI7UUFBckIsV0FBVyxDQUFDLE9BQU8sQ0FBQzt1REFBbUI7SUFoQjdCLGFBQWE7UUFKekIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFNBQVM7WUFDbkIsZ0lBQW9DO1NBQ3JDLENBQUM7T0FDVyxhQUFhLENBZ0V6QjtJQUFELG9CQUFDO0NBQUEsQUFoRUQsSUFnRUM7U0FoRVksYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSG9zdEJpbmRpbmcsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uTG9hZGVyU2VydmljZSB9IGZyb20gJy4vaWNvbi1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuL2ljb24ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IHtcbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoZSBpY29uIHdoaWNoIG1hcHMgdG8gdGhlIGljb24gbGlua1xuICAgKiBpbiB0aGUgc3ZnIGljb24gc3ByaXRlLlxuICAgKi9cbiAgX3R5cGU6IElDT05fVFlQRTtcbiAgQElucHV0KCd0eXBlJylcbiAgc2V0IHR5cGUodHlwZTogSUNPTl9UWVBFKSB7XG4gICAgdGhpcy5fdHlwZSA9IHR5cGU7XG4gICAgdGhpcy5hZGRTdHlsZUNsYXNzZXModHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogS2VlcHMgdGhlIGdpdmVuIHN0eWxlIGNsYXNzZXMgc28gdGhhdCB3ZSBjYW5cbiAgICogY2xlYW4gdGhlbSB1cCB3aGVuIHRoZSBpY29uIGNoYW5nZXNcbiAgICovXG4gIEBIb3N0QmluZGluZygnY2xhc3MnKSBzdHlsZUNsYXNzZXMgPSAnJztcblxuICAvKipcbiAgICogU3R5bGUgY2xhc3MgbmFtZXMgZnJvbSB0aGUgaG9zdCBlbGVtZW50IGFyZSB0YWtlbiBpbnRvIGFjY291bnRcbiAgICogd2hlbiBjbGFzc2VzIGFyZSBzZXQgZHluYW1pY2FsbHkuXG4gICAqL1xuICBwcml2YXRlIHN0YXRpY1N0eWxlQ2xhc3Nlczogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBpY29uTG9hZGVyOiBJY29uTG9hZGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgZWxlbWVudFJlZjogRWxlbWVudFJlZjxIVE1MRWxlbWVudD5cbiAgKSB7fVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaWNvbiBpcyBjb25maWd1cmVkIHRvIHVzZSBTVkcgb3Igbm90LlxuICAgKi9cbiAgZ2V0IHVzZVN2ZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pY29uTG9hZGVyLnVzZVN2Zyh0aGlzLl90eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXRoIHRvIHRoZSBzdmcgc3ltYm9sLiBUaGUgcGF0aCBjb3VsZCBpbmNsdWRlIGFuXG4gICAqIGV4dGVybmFsIFVSTCB0byBhbiBzdmcgKHNwcml0ZSkgZmlsZSwgYnV0IGNhbiBhbHNvIHJlZmVyZW5jZVxuICAgKiBhbiBleGlzdGluZyBTVkcgc3ltYm9sIGluIHRoZSBET00uXG4gICAqL1xuICBnZXQgc3ZnUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmljb25Mb2FkZXIuZ2V0U3ZnUGF0aCh0aGlzLl90eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBzdHlsZSBjbGFzc2VzIGFuZCB0aGUgbGluayByZXNvdXJjZSAoaWYgYXZhaWxhYmUpLlxuICAgKi9cbiAgcHJpdmF0ZSBhZGRTdHlsZUNsYXNzZXModHlwZTogSUNPTl9UWVBFKSB7XG4gICAgaWYgKHRoaXMudXNlU3ZnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuc3RhdGljU3R5bGVDbGFzc2VzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuc3RhdGljU3R5bGVDbGFzc2VzID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnZhbHVlXG4gICAgICAgID8gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnZhbHVlICsgJyAnXG4gICAgICAgIDogJyc7XG4gICAgfVxuXG4gICAgdGhpcy5zdHlsZUNsYXNzZXMgPVxuICAgICAgdGhpcy5zdGF0aWNTdHlsZUNsYXNzZXMgKyB0aGlzLmljb25Mb2FkZXIuZ2V0U3R5bGVDbGFzc2VzKHR5cGUpO1xuXG4gICAgdGhpcy5pY29uTG9hZGVyLmFkZExpbmtSZXNvdXJjZSh0eXBlKTtcbiAgfVxufVxuIl19