/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
        /**
         * The type of the icon which maps to the icon link
         * in the svg icon sprite.
         */
        set: /**
         * The type of the icon which maps to the icon link
         * in the svg icon sprite.
         * @param {?} type
         * @return {?}
         */
        function (type) {
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
            return this.iconLoader.useSvg(this.type);
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
            return this.iconLoader.getSvgPath(this.type);
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
        if (!this.staticStyleClasses) {
            // add static styles only once
            this.staticStyleClasses =
                this.elementRef.nativeElement.classList.value || '';
        }
        this.styleClasses =
            this.staticStyleClasses + ' ' + this.iconLoader.getStyleClasses(type);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QztJQTBCRSx1QkFDWSxVQUE2QixFQUM3QixVQUFtQztRQURuQyxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUF5Qjs7Ozs7UUFWekIsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFXckMsQ0FBQztJQXBCSixzQkFDSSwrQkFBSTtRQUxSOzs7V0FHRzs7Ozs7OztRQUNILFVBQ1MsSUFBZTtZQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdCLENBQUM7OztPQUFBO0lBc0JELHNCQUFJLGlDQUFNO1FBSFY7O1dBRUc7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMzQyxDQUFDOzs7T0FBQTtJQU9ELHNCQUFJLGtDQUFPO1FBTFg7Ozs7V0FJRzs7Ozs7OztRQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7SUFFRDs7T0FFRzs7Ozs7OztJQUNLLHVDQUFlOzs7Ozs7SUFBdkIsVUFBd0IsSUFBZTtRQUNyQyxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLDhCQUE4QjtZQUM5QixJQUFJLENBQUMsa0JBQWtCO2dCQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxJQUFJLEVBQUUsQ0FBQztTQUN2RDtRQUVELElBQUksQ0FBQyxZQUFZO1lBQ2YsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUV4RSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QyxDQUFDOztnQkFqRUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQixnSUFBb0M7aUJBQ3JDOzs7O2dCQU5RLGlCQUFpQjtnQkFETixVQUFVOzs7dUJBYTNCLEtBQUssU0FBQyxNQUFNOytCQVNaLFdBQVcsU0FBQyxPQUFPOztJQWdEdEIsb0JBQUM7Q0FBQSxBQWxFRCxJQWtFQztTQTlEWSxhQUFhOzs7Ozs7O0lBY3hCLHFDQUF3Qzs7Ozs7OztJQU14QywyQ0FBbUM7Ozs7O0lBR2pDLG1DQUF1Qzs7Ozs7SUFDdkMsbUNBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25Mb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9pY29uLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4vaWNvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQge1xuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhlIGljb24gd2hpY2ggbWFwcyB0byB0aGUgaWNvbiBsaW5rXG4gICAqIGluIHRoZSBzdmcgaWNvbiBzcHJpdGUuXG4gICAqL1xuICBASW5wdXQoJ3R5cGUnKVxuICBzZXQgdHlwZSh0eXBlOiBJQ09OX1RZUEUpIHtcbiAgICB0aGlzLmFkZFN0eWxlQ2xhc3Nlcyh0eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBLZWVwcyB0aGUgZ2l2ZW4gc3R5bGUgY2xhc3NlcyBzbyB0aGF0IHdlIGNhblxuICAgKiBjbGVhbiB0aGVtIHVwIHdoZW4gdGhlIGljb24gY2hhbmdlc1xuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHN0eWxlQ2xhc3NlcyA9ICcnO1xuXG4gIC8qKlxuICAgKiBTdHlsZSBjbGFzcyBuYW1lcyBmcm9tIHRoZSBob3N0IGVsZW1lbnQgYXJlIHRha2VuIGludG8gYWNjb3VudFxuICAgKiB3aGVuIGNsYXNzZXMgYXJlIHNldCBkeW5hbWljYWxseS5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljU3R5bGVDbGFzc2VzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGljb25Mb2FkZXI6IEljb25Mb2FkZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PlxuICApIHt9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpY29uIGlzIGNvbmZpZ3VyZWQgdG8gdXNlIFNWRyBvciBub3QuXG4gICAqL1xuICBnZXQgdXNlU3ZnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmljb25Mb2FkZXIudXNlU3ZnKHRoaXMudHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGF0aCB0byB0aGUgc3ZnIHN5bWJvbC4gVGhlIHBhdGggY291bGQgaW5jbHVkZSBhblxuICAgKiBleHRlcm5hbCBVUkwgdG8gYW4gc3ZnIChzcHJpdGUpIGZpbGUsIGJ1dCBjYW4gYWxzbyByZWZlcmVuY2VcbiAgICogYW4gZXhpc3RpbmcgU1ZHIHN5bWJvbCBpbiB0aGUgRE9NLlxuICAgKi9cbiAgZ2V0IHN2Z1BhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pY29uTG9hZGVyLmdldFN2Z1BhdGgodGhpcy50eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBzdHlsZSBjbGFzc2VzIGFuZCB0aGUgbGluayByZXNvdXJjZSAoaWYgYXZhaWxhYmUpLlxuICAgKi9cbiAgcHJpdmF0ZSBhZGRTdHlsZUNsYXNzZXModHlwZTogSUNPTl9UWVBFKSB7XG4gICAgaWYgKHRoaXMudXNlU3ZnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnN0YXRpY1N0eWxlQ2xhc3Nlcykge1xuICAgICAgLy8gYWRkIHN0YXRpYyBzdHlsZXMgb25seSBvbmNlXG4gICAgICB0aGlzLnN0YXRpY1N0eWxlQ2xhc3NlcyA9XG4gICAgICAgIHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC52YWx1ZSB8fCAnJztcbiAgICB9XG5cbiAgICB0aGlzLnN0eWxlQ2xhc3NlcyA9XG4gICAgICB0aGlzLnN0YXRpY1N0eWxlQ2xhc3NlcyArICcgJyArIHRoaXMuaWNvbkxvYWRlci5nZXRTdHlsZUNsYXNzZXModHlwZSk7XG5cbiAgICB0aGlzLmljb25Mb2FkZXIuYWRkTGlua1Jlc291cmNlKHR5cGUpO1xuICB9XG59XG4iXX0=