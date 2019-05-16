/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, } from '@angular/core';
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
    /**
     * @return {?}
     */
    IconComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.staticStyleClasses = this.elementRef.nativeElement.classList.value;
        this.addStyleClasses();
    };
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
     * @return {?}
     */
    IconComponent.prototype.addStyleClasses = /**
     * Adds the style classes and the link resource (if availabe).
     * @private
     * @return {?}
     */
    function () {
        if (this.staticStyleClasses) {
            this.styleClasses = this.staticStyleClasses + ' ';
        }
        if (this.useSvg) {
            return;
        }
        this.styleClasses += this.iconLoader.getStyleClasses(this.type);
        this.iconLoader.addLinkResource(this.type);
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
        type: [{ type: Input }],
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
    IconComponent.prototype.type;
    /**
     * Keeps the given style classes so that we can
     * clean them up when the icon changes
     * @type {?}
     */
    IconComponent.prototype.styleClasses;
    /**
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEdBRU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUV6QztJQW1CRSx1QkFDWSxVQUE2QixFQUM3QixVQUFtQztRQURuQyxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUF5Qjs7Ozs7UUFOekIsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFPckMsQ0FBQzs7OztJQUVKLGdDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBS0Qsc0JBQUksaUNBQU07UUFIVjs7V0FFRzs7Ozs7UUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNDLENBQUM7OztPQUFBO0lBT0Qsc0JBQUksa0NBQU87UUFMWDs7OztXQUlHOzs7Ozs7O1FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUMvQyxDQUFDOzs7T0FBQTtJQUVEOztPQUVHOzs7Ozs7SUFDSyx1Q0FBZTs7Ozs7SUFBdkI7UUFDRSxJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUM7U0FDbkQ7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7Z0JBM0RGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsZ0lBQW9DO2lCQUNyQzs7OztnQkFOUSxpQkFBaUI7Z0JBTHhCLFVBQVU7Ozt1QkFpQlQsS0FBSzsrQkFNTCxXQUFXLFNBQUMsT0FBTzs7SUE2Q3RCLG9CQUFDO0NBQUEsQUE1REQsSUE0REM7U0F4RFksYUFBYTs7Ozs7OztJQUt4Qiw2QkFBeUI7Ozs7OztJQU16QixxQ0FBd0M7Ozs7O0lBRXhDLDJDQUFtQzs7Ozs7SUFHakMsbUNBQXVDOzs7OztJQUN2QyxtQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RCaW5kaW5nLFxuICBJbnB1dCxcbiAgT25Jbml0LFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25Mb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9pY29uLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4vaWNvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhlIGljb24gd2hpY2ggbWFwcyB0byB0aGUgaWNvbiBsaW5rXG4gICAqIGluIHRoZSBzdmcgaWNvbiBzcHJpdGUuXG4gICAqL1xuICBASW5wdXQoKSB0eXBlOiBJQ09OX1RZUEU7XG5cbiAgLyoqXG4gICAqIEtlZXBzIHRoZSBnaXZlbiBzdHlsZSBjbGFzc2VzIHNvIHRoYXQgd2UgY2FuXG4gICAqIGNsZWFuIHRoZW0gdXAgd2hlbiB0aGUgaWNvbiBjaGFuZ2VzXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgc3R5bGVDbGFzc2VzID0gJyc7XG5cbiAgcHJpdmF0ZSBzdGF0aWNTdHlsZUNsYXNzZXM6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaWNvbkxvYWRlcjogSWNvbkxvYWRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+XG4gICkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLnN0YXRpY1N0eWxlQ2xhc3NlcyA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC52YWx1ZTtcbiAgICB0aGlzLmFkZFN0eWxlQ2xhc3NlcygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpY29uIGlzIGNvbmZpZ3VyZWQgdG8gdXNlIFNWRyBvciBub3QuXG4gICAqL1xuICBnZXQgdXNlU3ZnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmljb25Mb2FkZXIudXNlU3ZnKHRoaXMudHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcGF0aCB0byB0aGUgc3ZnIHN5bWJvbC4gVGhlIHBhdGggY291bGQgaW5jbHVkZSBhblxuICAgKiBleHRlcm5hbCBVUkwgdG8gYW4gc3ZnIChzcHJpdGUpIGZpbGUsIGJ1dCBjYW4gYWxzbyByZWZlcmVuY2VcbiAgICogYW4gZXhpc3RpbmcgU1ZHIHN5bWJvbCBpbiB0aGUgRE9NLlxuICAgKi9cbiAgZ2V0IHN2Z1BhdGgoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5pY29uTG9hZGVyLmdldFN2Z1BhdGgodGhpcy50eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBzdHlsZSBjbGFzc2VzIGFuZCB0aGUgbGluayByZXNvdXJjZSAoaWYgYXZhaWxhYmUpLlxuICAgKi9cbiAgcHJpdmF0ZSBhZGRTdHlsZUNsYXNzZXMoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGljU3R5bGVDbGFzc2VzKSB7XG4gICAgICB0aGlzLnN0eWxlQ2xhc3NlcyA9IHRoaXMuc3RhdGljU3R5bGVDbGFzc2VzICsgJyAnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnVzZVN2Zykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3R5bGVDbGFzc2VzICs9IHRoaXMuaWNvbkxvYWRlci5nZXRTdHlsZUNsYXNzZXModGhpcy50eXBlKTtcbiAgICB0aGlzLmljb25Mb2FkZXIuYWRkTGlua1Jlc291cmNlKHRoaXMudHlwZSk7XG4gIH1cbn1cbiJdfQ==