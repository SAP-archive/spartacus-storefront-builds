/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
 */
var GenericLinkComponent = /** @class */ (function () {
    function GenericLinkComponent() {
        this.protocolRegex = /^https?:\/\//i;
    }
    Object.defineProperty(GenericLinkComponent.prototype, "routerUrl", {
        get: /**
         * @return {?}
         */
        function () {
            if (typeof this.url === 'string') {
                return [this.getAbsoluteUrl(this.url)];
            }
            return this.url;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    GenericLinkComponent.prototype.isExternalUrl = /**
     * @return {?}
     */
    function () {
        return typeof this.url === 'string' && this.protocolRegex.test(this.url);
    };
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    GenericLinkComponent.prototype.getAbsoluteUrl = /**
     * @private
     * @param {?} url
     * @return {?}
     */
    function (url) {
        return url.startsWith('/') ? this.url : '/' + this.url;
    };
    GenericLinkComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cx-generic-link',
                    template: "<ng-container *ngIf=\"isExternalUrl(); else isLocalUrl\">\n  <a\n    role=\"link\"\n    [href]=\"url\"\n    [target]=\"target\"\n    [class]=\"class ? class : ''\"\n    [id]=\"id ? id : ''\"\n    [style]=\"style\"\n    [title]=\"title ? title : ''\"\n  >\n    <ng-container *ngTemplateOutlet=\"templateOutlet\"></ng-container>\n  </a>\n</ng-container>\n<ng-template #isLocalUrl>\n  <a\n    role=\"link\"\n    [routerLink]=\"routerUrl\"\n    [target]=\"target\"\n    [class]=\"class ? class : ''\"\n    [id]=\"id ? id : ''\"\n    [style]=\"style\"\n    [title]=\"title ? title : ''\"\n  >\n    <ng-container *ngTemplateOutlet=\"templateOutlet\"></ng-container>\n  </a>\n</ng-template>\n<ng-template #templateOutlet> <ng-content></ng-content> </ng-template>\n",
                    styles: [""]
                }] }
    ];
    GenericLinkComponent.propDecorators = {
        url: [{ type: Input }],
        target: [{ type: Input }],
        class: [{ type: Input }],
        id: [{ type: Input }],
        style: [{ type: Input }],
        title: [{ type: Input }]
    };
    return GenericLinkComponent;
}());
export { GenericLinkComponent };
if (false) {
    /**
     * @type {?}
     * @private
     */
    GenericLinkComponent.prototype.protocolRegex;
    /** @type {?} */
    GenericLinkComponent.prototype.url;
    /** @type {?} */
    GenericLinkComponent.prototype.target;
    /** @type {?} */
    GenericLinkComponent.prototype.class;
    /** @type {?} */
    GenericLinkComponent.prototype.id;
    /** @type {?} */
    GenericLinkComponent.prototype.style;
    /** @type {?} */
    GenericLinkComponent.prototype.title;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9jb21wb25lbnRzL2dlbmVyaWMtbGluay9nZW5lcmljLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUtqRDtJQUFBO1FBTW1CLGtCQUFhLEdBQVcsZUFBZSxDQUFDO0lBOEIzRCxDQUFDO0lBZEMsc0JBQUksMkNBQVM7Ozs7UUFBYjtZQUNFLElBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDeEM7WUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7Ozs7SUFFRCw0Q0FBYTs7O0lBQWI7UUFDRSxPQUFPLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7OztJQUVPLDZDQUFjOzs7OztJQUF0QixVQUF1QixHQUFXO1FBQ2hDLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDekQsQ0FBQzs7Z0JBbkNGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQixpd0JBQTRDOztpQkFFN0M7OztzQkFJRSxLQUFLO3lCQUdMLEtBQUs7d0JBRUwsS0FBSztxQkFFTCxLQUFLO3dCQUVMLEtBQUs7d0JBRUwsS0FBSzs7SUFpQlIsMkJBQUM7Q0FBQSxBQXBDRCxJQW9DQztTQS9CWSxvQkFBb0I7Ozs7OztJQUMvQiw2Q0FBeUQ7O0lBRXpELG1DQUNvQjs7SUFFcEIsc0NBQ2U7O0lBQ2YscUNBQ2M7O0lBQ2Qsa0NBQ1c7O0lBQ1gscUNBQ2M7O0lBQ2QscUNBQ2MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgbmF2aWdhdGVzIHVzaW5nIFtyb3V0ZXJMaW5rXSBhdHRyaWJ1dGUgd2hlbiBpbnB1dCAndXJsJyBpcyBhIHJlbGF0aXZlIHVybC4gT3RoZXJ3aXNlICh3aGVuIGl0J3MgYWJzb2x1dGUpLCBbaHJlZl0gaXMgdXNlZC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZ2VuZXJpYy1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dlbmVyaWMtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dlbmVyaWMtbGluay5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBHZW5lcmljTGlua0NvbXBvbmVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcHJvdG9jb2xSZWdleDogUmVnRXhwID0gL15odHRwcz86XFwvXFwvL2k7XG5cbiAgQElucHV0KClcbiAgdXJsOiBzdHJpbmcgfCBhbnlbXTtcblxuICBASW5wdXQoKVxuICB0YXJnZXQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KClcbiAgaWQ6IHN0cmluZztcbiAgQElucHV0KClcbiAgc3R5bGU6IHN0cmluZztcbiAgQElucHV0KClcbiAgdGl0bGU6IHN0cmluZztcblxuICBnZXQgcm91dGVyVXJsKCk6IGFueVtdIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudXJsID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIFt0aGlzLmdldEFic29sdXRlVXJsKHRoaXMudXJsKV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVybDtcbiAgfVxuXG4gIGlzRXh0ZXJuYWxVcmwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnVybCA9PT0gJ3N0cmluZycgJiYgdGhpcy5wcm90b2NvbFJlZ2V4LnRlc3QodGhpcy51cmwpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBYnNvbHV0ZVVybCh1cmw6IHN0cmluZykge1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aCgnLycpID8gdGhpcy51cmwgOiAnLycgKyB0aGlzLnVybDtcbiAgfVxufVxuIl19