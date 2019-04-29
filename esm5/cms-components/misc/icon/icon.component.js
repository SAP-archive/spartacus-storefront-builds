/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2, } from '@angular/core';
import { IconLoaderService } from './icon-loader.service';
var IconComponent = /** @class */ (function () {
    function IconComponent(iconLoader, renderer, hostElement) {
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
    IconComponent.prototype.ngOnChanges = /**
     * @return {?}
     */
    function () {
        this.addStyleClasses();
    };
    Object.defineProperty(IconComponent.prototype, "useSvg", {
        get: /**
         * @return {?}
         */
        function () {
            return this.iconLoader.useSvg();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IconComponent.prototype, "path", {
        get: /**
         * @return {?}
         */
        function () {
            return this.iconLoader.getSvgPath(this.type);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @return {?}
     */
    IconComponent.prototype.addStyleClasses = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.useSvg) {
            return;
        }
        this.clearStyleClasses();
        this.iconStyleClasses = this.iconLoader.getStyleClasses(this.type);
        this.iconStyleClasses.forEach(function (cls) {
            _this.renderer.addClass(_this.hostElement.nativeElement, cls);
        });
    };
    /**
     * @private
     * @return {?}
     */
    IconComponent.prototype.clearStyleClasses = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.iconStyleClasses.forEach(function (cls) {
            _this.renderer.removeClass(_this.hostElement.nativeElement, cls);
        });
    };
    IconComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-icon',
                    template: "<ng-container *ngIf=\"useSvg\">\n  <svg>\n    <use [attr.xlink:href]=\"path\"></use>\n  </svg>\n</ng-container>\n"
                }] }
    ];
    /** @nocollapse */
    IconComponent.ctorParameters = function () { return [
        { type: IconLoaderService },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    IconComponent.propDecorators = {
        type: [{ type: Input }]
    };
    return IconComponent;
}());
export { IconComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHMUQ7SUFpQkUsdUJBQ1UsVUFBNkIsRUFDM0IsUUFBbUIsRUFDbkIsV0FBdUI7UUFGekIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDM0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTs7Ozs7UUFYM0IscUJBQWdCLEdBQUcsRUFBRSxDQUFDO0lBWTNCLENBQUM7Ozs7SUFFSixtQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHNCQUFJLGlDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBSTs7OztRQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7Ozs7O0lBRU8sdUNBQWU7Ozs7SUFBdkI7UUFBQSxpQkFTQztRQVJDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDL0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLHlDQUFpQjs7OztJQUF6QjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDL0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQiw2SEFBb0M7aUJBQ3JDOzs7O2dCQU5RLGlCQUFpQjtnQkFGeEIsU0FBUztnQkFIVCxVQUFVOzs7dUJBdUJULEtBQUs7O0lBb0NSLG9CQUFDO0NBQUEsQUFuREQsSUFtREM7U0EvQ1ksYUFBYTs7Ozs7Ozs7SUFLeEIseUNBQThCOzs7Ozs7SUFNOUIsNkJBQW1DOzs7OztJQUdqQyxtQ0FBcUM7Ozs7O0lBQ3JDLGlDQUE2Qjs7Ozs7SUFDN0Isb0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkxvYWRlclNlcnZpY2UgfSBmcm9tICcuL2ljb24tbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNPTl9UWVBFUyB9IGZyb20gJy4vaWNvbi5jb25maWcnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgLyoqXG4gICAqIEtlZXBzIHRoZSBnaXZlbiBzdHlsZSBjbGFzc2VzIHNvIHRoYXQgd2UgY2FuXG4gICAqIGNsZWFuIHRoZW0gdXAgd2hlbiB0aGUgaWNvbiBjaGFuZ2VzXG4gICAqL1xuICBwcml2YXRlIGljb25TdHlsZUNsYXNzZXMgPSBbXTtcblxuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhlIGljb24gd2hpY2ggbWFwcyB0byB0aGUgaWNvbiBsaW5rXG4gICAqIGluIHRoZSBzdmcgaWNvbiBzcHJpdGUuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlOiBJQ09OX1RZUEVTIHwgc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgaWNvbkxvYWRlcjogSWNvbkxvYWRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJvdGVjdGVkIGhvc3RFbGVtZW50OiBFbGVtZW50UmVmXG4gICkge31cblxuICBuZ09uQ2hhbmdlcygpIHtcbiAgICB0aGlzLmFkZFN0eWxlQ2xhc3NlcygpO1xuICB9XG5cbiAgZ2V0IHVzZVN2ZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pY29uTG9hZGVyLnVzZVN2ZygpO1xuICB9XG5cbiAgZ2V0IHBhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pY29uTG9hZGVyLmdldFN2Z1BhdGgodGhpcy50eXBlKTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkU3R5bGVDbGFzc2VzKCkge1xuICAgIGlmICh0aGlzLnVzZVN2Zykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmNsZWFyU3R5bGVDbGFzc2VzKCk7XG4gICAgdGhpcy5pY29uU3R5bGVDbGFzc2VzID0gdGhpcy5pY29uTG9hZGVyLmdldFN0eWxlQ2xhc3Nlcyh0aGlzLnR5cGUpO1xuICAgIHRoaXMuaWNvblN0eWxlQ2xhc3Nlcy5mb3JFYWNoKGNscyA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgY2xzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgY2xlYXJTdHlsZUNsYXNzZXMoKSB7XG4gICAgdGhpcy5pY29uU3R5bGVDbGFzc2VzLmZvckVhY2goY2xzID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBjbHMpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=