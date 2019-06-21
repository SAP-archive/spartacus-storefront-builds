/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, HostBinding, Input } from '@angular/core';
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
     * @param {?} type
     * @return {?}
     */
    set type(type) {
        this._type = type;
        this.addStyleClasses(type);
    }
    /**
     * Indicates whether the icon is configured to use SVG or not.
     * @return {?}
     */
    get useSvg() {
        return this.iconLoader.useSvg(this._type);
    }
    /**
     * Returns the path to the svg symbol. The path could include an
     * external URL to an svg (sprite) file, but can also reference
     * an existing SVG symbol in the DOM.
     * @return {?}
     */
    get svgPath() {
        return this.iconLoader.getSvgPath(this._type);
    }
    /**
     * Adds the style classes and the link resource (if availabe).
     * @private
     * @param {?} type
     * @return {?}
     */
    addStyleClasses(type) {
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
    type: [{ type: Input, args: ['type',] }],
    styleClasses: [{ type: HostBinding, args: ['class',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQU16QyxNQUFNLE9BQU8sYUFBYTs7Ozs7SUF3QnhCLFlBQ1ksVUFBNkIsRUFDN0IsVUFBbUM7UUFEbkMsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7Ozs7O1FBVnpCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBV3JDLENBQUM7Ozs7O0lBckJKLElBQ0ksSUFBSSxDQUFDLElBQWU7UUFDdEIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDbEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDOzs7OztJQXNCRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7Ozs7O0lBT0QsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDaEQsQ0FBQzs7Ozs7OztJQUtPLGVBQWUsQ0FBQyxJQUFlO1FBQ3JDLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNmLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLGtCQUFrQixLQUFLLFNBQVMsRUFBRTtZQUN6QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUs7Z0JBQ3JFLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLEdBQUc7Z0JBQ3JELENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDUjtRQUVELElBQUksQ0FBQyxZQUFZO1lBQ2YsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRWxFLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7OztZQW5FRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLGdJQUFvQzthQUNyQzs7OztZQU5RLGlCQUFpQjtZQUROLFVBQVU7OzttQkFjM0IsS0FBSyxTQUFDLE1BQU07MkJBVVosV0FBVyxTQUFDLE9BQU87Ozs7Ozs7O0lBWHBCLDhCQUFpQjs7Ozs7O0lBV2pCLHFDQUF3Qzs7Ozs7OztJQU14QywyQ0FBbUM7Ozs7O0lBR2pDLG1DQUF1Qzs7Ozs7SUFDdkMsbUNBQTZDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEljb25Mb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi9pY29uLWxvYWRlci5zZXJ2aWNlJztcbmltcG9ydCB7IElDT05fVFlQRSB9IGZyb20gJy4vaWNvbi5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWljb24nLFxuICB0ZW1wbGF0ZVVybDogJy4vaWNvbi5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEljb25Db21wb25lbnQge1xuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhlIGljb24gd2hpY2ggbWFwcyB0byB0aGUgaWNvbiBsaW5rXG4gICAqIGluIHRoZSBzdmcgaWNvbiBzcHJpdGUuXG4gICAqL1xuICBfdHlwZTogSUNPTl9UWVBFO1xuICBASW5wdXQoJ3R5cGUnKVxuICBzZXQgdHlwZSh0eXBlOiBJQ09OX1RZUEUpIHtcbiAgICB0aGlzLl90eXBlID0gdHlwZTtcbiAgICB0aGlzLmFkZFN0eWxlQ2xhc3Nlcyh0eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBLZWVwcyB0aGUgZ2l2ZW4gc3R5bGUgY2xhc3NlcyBzbyB0aGF0IHdlIGNhblxuICAgKiBjbGVhbiB0aGVtIHVwIHdoZW4gdGhlIGljb24gY2hhbmdlc1xuICAgKi9cbiAgQEhvc3RCaW5kaW5nKCdjbGFzcycpIHN0eWxlQ2xhc3NlcyA9ICcnO1xuXG4gIC8qKlxuICAgKiBTdHlsZSBjbGFzcyBuYW1lcyBmcm9tIHRoZSBob3N0IGVsZW1lbnQgYXJlIHRha2VuIGludG8gYWNjb3VudFxuICAgKiB3aGVuIGNsYXNzZXMgYXJlIHNldCBkeW5hbWljYWxseS5cbiAgICovXG4gIHByaXZhdGUgc3RhdGljU3R5bGVDbGFzc2VzOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJvdGVjdGVkIGljb25Mb2FkZXI6IEljb25Mb2FkZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCBlbGVtZW50UmVmOiBFbGVtZW50UmVmPEhUTUxFbGVtZW50PlxuICApIHt9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyB3aGV0aGVyIHRoZSBpY29uIGlzIGNvbmZpZ3VyZWQgdG8gdXNlIFNWRyBvciBub3QuXG4gICAqL1xuICBnZXQgdXNlU3ZnKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmljb25Mb2FkZXIudXNlU3ZnKHRoaXMuX3R5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHBhdGggdG8gdGhlIHN2ZyBzeW1ib2wuIFRoZSBwYXRoIGNvdWxkIGluY2x1ZGUgYW5cbiAgICogZXh0ZXJuYWwgVVJMIHRvIGFuIHN2ZyAoc3ByaXRlKSBmaWxlLCBidXQgY2FuIGFsc28gcmVmZXJlbmNlXG4gICAqIGFuIGV4aXN0aW5nIFNWRyBzeW1ib2wgaW4gdGhlIERPTS5cbiAgICovXG4gIGdldCBzdmdQYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbkxvYWRlci5nZXRTdmdQYXRoKHRoaXMuX3R5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIHN0eWxlIGNsYXNzZXMgYW5kIHRoZSBsaW5rIHJlc291cmNlIChpZiBhdmFpbGFiZSkuXG4gICAqL1xuICBwcml2YXRlIGFkZFN0eWxlQ2xhc3Nlcyh0eXBlOiBJQ09OX1RZUEUpIHtcbiAgICBpZiAodGhpcy51c2VTdmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0aWNTdHlsZUNsYXNzZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5zdGF0aWNTdHlsZUNsYXNzZXMgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QudmFsdWVcbiAgICAgICAgPyB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5jbGFzc0xpc3QudmFsdWUgKyAnICdcbiAgICAgICAgOiAnJztcbiAgICB9XG5cbiAgICB0aGlzLnN0eWxlQ2xhc3NlcyA9XG4gICAgICB0aGlzLnN0YXRpY1N0eWxlQ2xhc3NlcyArIHRoaXMuaWNvbkxvYWRlci5nZXRTdHlsZUNsYXNzZXModHlwZSk7XG5cbiAgICB0aGlzLmljb25Mb2FkZXIuYWRkTGlua1Jlc291cmNlKHR5cGUpO1xuICB9XG59XG4iXX0=