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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaWNvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtY29tcG9uZW50cy9taXNjL2ljb24vaWNvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFFTCxTQUFTLEdBQ1YsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFPMUQsTUFBTSxPQUFPLGFBQWE7Ozs7OztJQWF4QixZQUNVLFVBQTZCLEVBQzNCLFFBQW1CLEVBQ25CLFdBQXVCO1FBRnpCLGVBQVUsR0FBVixVQUFVLENBQW1CO1FBQzNCLGFBQVEsR0FBUixRQUFRLENBQVc7UUFDbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVk7Ozs7O1FBWDNCLHFCQUFnQixHQUFHLEVBQUUsQ0FBQztJQVkzQixDQUFDOzs7O0lBRUosV0FBVztRQUNULElBQUksQ0FBQyxlQUFlLEVBQUUsQ0FBQztJQUN6QixDQUFDOzs7O0lBRUQsSUFBSSxNQUFNO1FBQ1IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xDLENBQUM7Ozs7SUFFRCxJQUFJLElBQUk7UUFDTixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQyxDQUFDOzs7OztJQUVPLGVBQWU7UUFDckIsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ2YsT0FBTztTQUNSO1FBQ0QsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlELENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7SUFFTyxpQkFBaUI7UUFDdkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNqRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7OztZQWxERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLDZIQUFvQzthQUNyQzs7OztZQU5RLGlCQUFpQjtZQUZ4QixTQUFTO1lBSFQsVUFBVTs7O21CQXVCVCxLQUFLOzs7Ozs7Ozs7SUFOTix5Q0FBOEI7Ozs7OztJQU05Qiw2QkFBbUM7Ozs7O0lBR2pDLG1DQUFxQzs7Ozs7SUFDckMsaUNBQTZCOzs7OztJQUM3QixvQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIElucHV0LFxuICBPbkNoYW5nZXMsXG4gIFJlbmRlcmVyMixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBJY29uTG9hZGVyU2VydmljZSB9IGZyb20gJy4vaWNvbi1sb2FkZXIuc2VydmljZSc7XG5pbXBvcnQgeyBJQ09OX1RZUEVTIH0gZnJvbSAnLi9pY29uLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtaWNvbicsXG4gIHRlbXBsYXRlVXJsOiAnLi9pY29uLmNvbXBvbmVudC5odG1sJyxcbn0pXG5leHBvcnQgY2xhc3MgSWNvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIC8qKlxuICAgKiBLZWVwcyB0aGUgZ2l2ZW4gc3R5bGUgY2xhc3NlcyBzbyB0aGF0IHdlIGNhblxuICAgKiBjbGVhbiB0aGVtIHVwIHdoZW4gdGhlIGljb24gY2hhbmdlc1xuICAgKi9cbiAgcHJpdmF0ZSBpY29uU3R5bGVDbGFzc2VzID0gW107XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoZSBpY29uIHdoaWNoIG1hcHMgdG8gdGhlIGljb24gbGlua1xuICAgKiBpbiB0aGUgc3ZnIGljb24gc3ByaXRlLlxuICAgKi9cbiAgQElucHV0KCkgdHlwZTogSUNPTl9UWVBFUyB8IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIGljb25Mb2FkZXI6IEljb25Mb2FkZXJTZXJ2aWNlLFxuICAgIHByb3RlY3RlZCByZW5kZXJlcjogUmVuZGVyZXIyLFxuICAgIHByb3RlY3RlZCBob3N0RWxlbWVudDogRWxlbWVudFJlZlxuICApIHt9XG5cbiAgbmdPbkNoYW5nZXMoKSB7XG4gICAgdGhpcy5hZGRTdHlsZUNsYXNzZXMoKTtcbiAgfVxuXG4gIGdldCB1c2VTdmcoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbkxvYWRlci51c2VTdmcoKTtcbiAgfVxuXG4gIGdldCBwYXRoKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbkxvYWRlci5nZXRTdmdQYXRoKHRoaXMudHlwZSk7XG4gIH1cblxuICBwcml2YXRlIGFkZFN0eWxlQ2xhc3NlcygpIHtcbiAgICBpZiAodGhpcy51c2VTdmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jbGVhclN0eWxlQ2xhc3NlcygpO1xuICAgIHRoaXMuaWNvblN0eWxlQ2xhc3NlcyA9IHRoaXMuaWNvbkxvYWRlci5nZXRTdHlsZUNsYXNzZXModGhpcy50eXBlKTtcbiAgICB0aGlzLmljb25TdHlsZUNsYXNzZXMuZm9yRWFjaChjbHMgPT4ge1xuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyh0aGlzLmhvc3RFbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIGNscyk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGNsZWFyU3R5bGVDbGFzc2VzKCkge1xuICAgIHRoaXMuaWNvblN0eWxlQ2xhc3Nlcy5mb3JFYWNoKGNscyA9PiB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKHRoaXMuaG9zdEVsZW1lbnQubmF0aXZlRWxlbWVudCwgY2xzKTtcbiAgICB9KTtcbiAgfVxufVxuIl19