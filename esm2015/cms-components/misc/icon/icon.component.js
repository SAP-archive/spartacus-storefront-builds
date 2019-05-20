/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
     * The type of the icon which maps to the icon link
     * in the svg icon sprite.
     * @param {?} type
     * @return {?}
     */
    set type(type) {
        this.addStyleClasses(type);
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
     * @param {?} type
     * @return {?}
     */
    addStyleClasses(type) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFdBQVcsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQU16QyxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFzQnhCLFlBQ1ksVUFBNkIsRUFDN0IsVUFBbUM7UUFEbkMsZUFBVSxHQUFWLFVBQVUsQ0FBbUI7UUFDN0IsZUFBVSxHQUFWLFVBQVUsQ0FBeUI7Ozs7O1FBVnpCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO0lBV3JDLENBQUM7Ozs7Ozs7SUFwQkosSUFDSSxJQUFJLENBQUMsSUFBZTtRQUN0QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzdCLENBQUM7Ozs7O0lBc0JELElBQUksTUFBTTtRQUNSLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7Ozs7Ozs7SUFPRCxJQUFJLE9BQU87UUFDVCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7Ozs7O0lBS08sZUFBZSxDQUFDLElBQWU7UUFDckMsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUM1Qiw4QkFBOEI7WUFDOUIsSUFBSSxDQUFDLGtCQUFrQjtnQkFDckIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEtBQUssSUFBSSxFQUFFLENBQUM7U0FDdkQ7UUFFRCxJQUFJLENBQUMsWUFBWTtZQUNmLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFeEUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7O1lBakVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsU0FBUztnQkFDbkIsZ0lBQW9DO2FBQ3JDOzs7O1lBTlEsaUJBQWlCO1lBRE4sVUFBVTs7O21CQWEzQixLQUFLLFNBQUMsTUFBTTsyQkFTWixXQUFXLFNBQUMsT0FBTzs7Ozs7Ozs7SUFBcEIscUNBQXdDOzs7Ozs7O0lBTXhDLDJDQUFtQzs7Ozs7SUFHakMsbUNBQXVDOzs7OztJQUN2QyxtQ0FBNkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgSWNvbkxvYWRlclNlcnZpY2UgfSBmcm9tICcuL2ljb24tbG9hZGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgSUNPTl9UWVBFIH0gZnJvbSAnLi9pY29uLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCB7XG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgaWNvbiB3aGljaCBtYXBzIHRvIHRoZSBpY29uIGxpbmtcbiAgICogaW4gdGhlIHN2ZyBpY29uIHNwcml0ZS5cbiAgICovXG4gIEBJbnB1dCgndHlwZScpXG4gIHNldCB0eXBlKHR5cGU6IElDT05fVFlQRSkge1xuICAgIHRoaXMuYWRkU3R5bGVDbGFzc2VzKHR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEtlZXBzIHRoZSBnaXZlbiBzdHlsZSBjbGFzc2VzIHNvIHRoYXQgd2UgY2FuXG4gICAqIGNsZWFuIHRoZW0gdXAgd2hlbiB0aGUgaWNvbiBjaGFuZ2VzXG4gICAqL1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzJykgc3R5bGVDbGFzc2VzID0gJyc7XG5cbiAgLyoqXG4gICAqIFN0eWxlIGNsYXNzIG5hbWVzIGZyb20gdGhlIGhvc3QgZWxlbWVudCBhcmUgdGFrZW4gaW50byBhY2NvdW50XG4gICAqIHdoZW4gY2xhc3NlcyBhcmUgc2V0IGR5bmFtaWNhbGx5LlxuICAgKi9cbiAgcHJpdmF0ZSBzdGF0aWNTdHlsZUNsYXNzZXM6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQgaWNvbkxvYWRlcjogSWNvbkxvYWRlclNlcnZpY2UsXG4gICAgcHJvdGVjdGVkIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTEVsZW1lbnQ+XG4gICkge31cblxuICAvKipcbiAgICogSW5kaWNhdGVzIHdoZXRoZXIgdGhlIGljb24gaXMgY29uZmlndXJlZCB0byB1c2UgU1ZHIG9yIG5vdC5cbiAgICovXG4gIGdldCB1c2VTdmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbkxvYWRlci51c2VTdmcodGhpcy50eXBlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBwYXRoIHRvIHRoZSBzdmcgc3ltYm9sLiBUaGUgcGF0aCBjb3VsZCBpbmNsdWRlIGFuXG4gICAqIGV4dGVybmFsIFVSTCB0byBhbiBzdmcgKHNwcml0ZSkgZmlsZSwgYnV0IGNhbiBhbHNvIHJlZmVyZW5jZVxuICAgKiBhbiBleGlzdGluZyBTVkcgc3ltYm9sIGluIHRoZSBET00uXG4gICAqL1xuICBnZXQgc3ZnUGF0aCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLmljb25Mb2FkZXIuZ2V0U3ZnUGF0aCh0aGlzLnR5cGUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkZHMgdGhlIHN0eWxlIGNsYXNzZXMgYW5kIHRoZSBsaW5rIHJlc291cmNlIChpZiBhdmFpbGFiZSkuXG4gICAqL1xuICBwcml2YXRlIGFkZFN0eWxlQ2xhc3Nlcyh0eXBlOiBJQ09OX1RZUEUpIHtcbiAgICBpZiAodGhpcy51c2VTdmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuc3RhdGljU3R5bGVDbGFzc2VzKSB7XG4gICAgICAvLyBhZGQgc3RhdGljIHN0eWxlcyBvbmx5IG9uY2VcbiAgICAgIHRoaXMuc3RhdGljU3R5bGVDbGFzc2VzID1cbiAgICAgICAgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY2xhc3NMaXN0LnZhbHVlIHx8ICcnO1xuICAgIH1cblxuICAgIHRoaXMuc3R5bGVDbGFzc2VzID1cbiAgICAgIHRoaXMuc3RhdGljU3R5bGVDbGFzc2VzICsgJyAnICsgdGhpcy5pY29uTG9hZGVyLmdldFN0eWxlQ2xhc3Nlcyh0eXBlKTtcblxuICAgIHRoaXMuaWNvbkxvYWRlci5hZGRMaW5rUmVzb3VyY2UodHlwZSk7XG4gIH1cbn1cbiJdfQ==