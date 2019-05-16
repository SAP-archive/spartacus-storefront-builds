/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input, } from '@angular/core';
import { IconLoaderService } from './icon-loader.service';
import { ICON_TYPE } from './icon.model';
export class IconComponent {
    /**
     * @param {?} iconLoader
     * @param {?} elementRef
     */
    constructor(iconLoader, elementRef) {
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
    ngOnInit() {
        this.staticStyleClasses = this.elementRef.nativeElement.classList.value;
        this.addStyleClasses();
    }
    /**
     * Indicates whether the icon is configured to use SVG or not.
     * @return {?}
     */
    get useSvg() {
        return this.iconLoader.useSvg(this.type);
    }
    /**
     * Returns the path to the svg symbol. The path could include an
     * external URL to an svg (sprite) file, but can also reference
     * an existing SVG symbol in the DOM.
     * @return {?}
     */
    get svgPath() {
        return this.iconLoader.getSvgPath(this.type);
    }
    /**
     * Adds the style classes and the link resource (if availabe).
     * @private
     * @return {?}
     */
    addStyleClasses() {
        if (this.staticStyleClasses) {
            this.styleClasses = this.staticStyleClasses + ' ';
        }
        if (this.useSvg) {
            return;
        }
        this.styleClasses += this.iconLoader.getStyleClasses(this.type);
        this.iconLoader.addLinkResource(this.type);
    }
}
IconComponent.decorators = [
    { type: Component, args: [{
                selector: 'cx-icon',
                template: "<ng-container *ngIf=\"useSvg\">\n  <svg>\n    <use [attr.xlink:href]=\"svgPath\"></use>\n  </svg>\n</ng-container>\n"
            }] }
];
/** @nocollapse */
IconComponent.ctorParameters = () => [
    { type: IconLoaderService },
    { type: ElementRef }
];
IconComponent.propDecorators = {
    type: [{ type: Input }],
    styleClasses: [{ type: HostBinding, args: ['class',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFdBQVcsRUFDWCxLQUFLLEdBRU4sTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQU16QyxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFleEIsWUFDWSxVQUE2QixFQUM3QixVQUFtQztRQURuQyxlQUFVLEdBQVYsVUFBVSxDQUFtQjtRQUM3QixlQUFVLEdBQVYsVUFBVSxDQUF5Qjs7Ozs7UUFOekIsaUJBQVksR0FBRyxFQUFFLENBQUM7SUFPckMsQ0FBQzs7OztJQUVKLFFBQVE7UUFDTixJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUN4RSxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFLRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7Ozs7O0lBT0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQzs7Ozs7O0lBS08sZUFBZTtRQUNyQixJQUFJLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLENBQUM7U0FDbkQ7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0MsQ0FBQzs7O1lBM0RGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsZ0lBQW9DO2FBQ3JDOzs7O1lBTlEsaUJBQWlCO1lBTHhCLFVBQVU7OzttQkFpQlQsS0FBSzsyQkFNTCxXQUFXLFNBQUMsT0FBTzs7Ozs7Ozs7SUFOcEIsNkJBQXlCOzs7Ozs7SUFNekIscUNBQXdDOzs7OztJQUV4QywyQ0FBbUM7Ozs7O0lBR2pDLG1DQUF1Qzs7Ozs7SUFDdkMsbUNBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBIb3N0QmluZGluZyxcbiAgSW5wdXQsXG4gIE9uSW5pdCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uTG9hZGVyU2VydmljZSB9IGZyb20gJy4vaWNvbi1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEUgfSBmcm9tICcuL2ljb24ubW9kZWwnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1pY29uJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2ljb24uY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBJY29uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoZSBpY29uIHdoaWNoIG1hcHMgdG8gdGhlIGljb24gbGlua1xuICAgKiBpbiB0aGUgc3ZnIGljb24gc3ByaXRlLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZTogSUNPTl9UWVBFO1xuXG4gIC8qKlxuICAgKiBLZWVwcyB0aGUgZ2l2ZW4gc3R5bGUgY2xhc3NlcyBzbyB0aGF0IHdlIGNhblxuICAgKiBjbGVhbiB0aGVtIHVwIHdoZW4gdGhlIGljb24gY2hhbmdlc1xuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHN0eWxlQ2xhc3NlcyA9ICcnO1xuXG4gIHByaXZhdGUgc3RhdGljU3R5bGVDbGFzc2VzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGljb25Mb2FkZXI6IEljb25Mb2FkZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PlxuICApIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5zdGF0aWNTdHlsZUNsYXNzZXMgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QudmFsdWU7XG4gICAgdGhpcy5hZGRTdHlsZUNsYXNzZXMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbmRpY2F0ZXMgd2hldGhlciB0aGUgaWNvbiBpcyBjb25maWd1cmVkIHRvIHVzZSBTVkcgb3Igbm90LlxuICAgKi9cbiAgZ2V0IHVzZVN2ZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pY29uTG9hZGVyLnVzZVN2Zyh0aGlzLnR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBhdGggdG8gdGhlIHN2ZyBzeW1ib2wuIFRoZSBwYXRoIGNvdWxkIGluY2x1ZGUgYW5cbiAgICogZXh0ZXJuYWwgVVJMIHRvIGFuIHN2ZyAoc3ByaXRlKSBmaWxlLCBidXQgY2FuIGFsc28gcmVmZXJlbmNlXG4gICAqIGFuIGV4aXN0aW5nIFNWRyBzeW1ib2wgaW4gdGhlIERPTS5cbiAgICovXG4gIGdldCBzdmdQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbkxvYWRlci5nZXRTdmdQYXRoKHRoaXMudHlwZSk7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyB0aGUgc3R5bGUgY2xhc3NlcyBhbmQgdGhlIGxpbmsgcmVzb3VyY2UgKGlmIGF2YWlsYWJlKS5cbiAgICovXG4gIHByaXZhdGUgYWRkU3R5bGVDbGFzc2VzKCkge1xuICAgIGlmICh0aGlzLnN0YXRpY1N0eWxlQ2xhc3Nlcykge1xuICAgICAgdGhpcy5zdHlsZUNsYXNzZXMgPSB0aGlzLnN0YXRpY1N0eWxlQ2xhc3NlcyArICcgJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy51c2VTdmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLnN0eWxlQ2xhc3NlcyArPSB0aGlzLmljb25Mb2FkZXIuZ2V0U3R5bGVDbGFzc2VzKHRoaXMudHlwZSk7XG4gICAgdGhpcy5pY29uTG9hZGVyLmFkZExpbmtSZXNvdXJjZSh0aGlzLnR5cGUpO1xuICB9XG59XG4iXX0=