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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFHMUQ7SUFpQkUsdUJBQ1UsVUFBNkIsRUFDM0IsUUFBbUIsRUFDbkIsV0FBdUI7UUFGekIsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDM0IsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixnQkFBVyxHQUFYLFdBQVcsQ0FBWTs7Ozs7UUFYM0IscUJBQWdCLEdBQUcsRUFBRSxDQUFDO0lBWTNCLENBQUM7Ozs7SUFFSixtQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELHNCQUFJLGlDQUFNOzs7O1FBQVY7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBSTs7OztRQUFSO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0MsQ0FBQzs7O09BQUE7Ozs7O0lBRU8sdUNBQWU7Ozs7SUFBdkI7UUFBQSxpQkFTQztRQVJDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDL0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOzs7OztJQUVPLHlDQUFpQjs7OztJQUF6QjtRQUFBLGlCQUlDO1FBSEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxVQUFBLEdBQUc7WUFDL0IsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDakUsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDOztnQkFsREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQiw2SEFBb0M7aUJBQ3JDOzs7O2dCQU5RLGlCQUFpQjtnQkFGeEIsU0FBUztnQkFIVCxVQUFVOzs7dUJBdUJULEtBQUs7O0lBb0NSLG9CQUFDO0NBQUEsQUFuREQsSUFtREM7U0EvQ1ksYUFBYTs7Ozs7Ozs7SUFLeEIseUNBQThCOzs7Ozs7SUFNOUIsNkJBQW1DOzs7OztJQUdqQyxtQ0FBcUM7Ozs7O0lBQ3JDLGlDQUE2Qjs7Ozs7SUFDN0Isb0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBJbnB1dCxcbiAgT25DaGFuZ2VzLFxuICBSZW5kZXJlcjIsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkxvYWRlclNlcnZpY2UgfSBmcm9tICcuL2ljb24tbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNPTl9UWVBFUyB9IGZyb20gJy4vaWNvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkNoYW5nZXMge1xuICAvKipcbiAgICogS2VlcHMgdGhlIGdpdmVuIHN0eWxlIGNsYXNzZXMgc28gdGhhdCB3ZSBjYW5cbiAgICogY2xlYW4gdGhlbSB1cCB3aGVuIHRoZSBpY29uIGNoYW5nZXNcbiAgICovXG4gIHByaXZhdGUgaWNvblN0eWxlQ2xhc3NlcyA9IFtdO1xuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgaWNvbiB3aGljaCBtYXBzIHRvIHRoZSBpY29uIGxpbmtcbiAgICogaW4gdGhlIHN2ZyBpY29uIHNwcml0ZS5cbiAgICovXG4gIEBJbnB1dCgpIHR5cGU6IElDT05fVFlQRVMgfCBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBpY29uTG9hZGVyOiBJY29uTG9hZGVyU2VydmljZSxcbiAgICBwcm90ZWN0ZWQgcmVuZGVyZXI6IFJlbmRlcmVyMixcbiAgICBwcm90ZWN0ZWQgaG9zdEVsZW1lbnQ6IEVsZW1lbnRSZWZcbiAgKSB7fVxuXG4gIG5nT25DaGFuZ2VzKCkge1xuICAgIHRoaXMuYWRkU3R5bGVDbGFzc2VzKCk7XG4gIH1cblxuICBnZXQgdXNlU3ZnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmljb25Mb2FkZXIudXNlU3ZnKCk7XG4gIH1cblxuICBnZXQgcGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmljb25Mb2FkZXIuZ2V0U3ZnUGF0aCh0aGlzLnR5cGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRTdHlsZUNsYXNzZXMoKSB7XG4gICAgaWYgKHRoaXMudXNlU3ZnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY2xlYXJTdHlsZUNsYXNzZXMoKTtcbiAgICB0aGlzLmljb25TdHlsZUNsYXNzZXMgPSB0aGlzLmljb25Mb2FkZXIuZ2V0U3R5bGVDbGFzc2VzKHRoaXMudHlwZSk7XG4gICAgdGhpcy5pY29uU3R5bGVDbGFzc2VzLmZvckVhY2goY2xzID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5ob3N0RWxlbWVudC5uYXRpdmVFbGVtZW50LCBjbHMpO1xuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjbGVhclN0eWxlQ2xhc3NlcygpIHtcbiAgICB0aGlzLmljb25TdHlsZUNsYXNzZXMuZm9yRWFjaChjbHMgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGNscyk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==