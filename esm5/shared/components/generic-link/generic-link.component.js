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
                    template: "<!-- https://github.com/angular/angular/issues/24567 -->\n\n<ng-container *ngIf=\"isExternalUrl(); else isLocalUrl\">\n  <a\n    role=\"link\"\n    [href]=\"url\"\n    [attr.target]=\"target\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-content></ng-content>\n  </a>\n</ng-container>\n\n<ng-template #isLocalUrl>\n  <a\n    role=\"link\"\n    [routerLink]=\"routerUrl\"\n    [attr.target]=\"target\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-content></ng-content>\n  </a>\n</ng-template>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2dlbmVyaWMtbGluay9nZW5lcmljLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUtqRDtJQUFBO1FBTW1CLGtCQUFhLEdBQVcsZUFBZSxDQUFDO0lBdUIzRCxDQUFDO0lBZEMsc0JBQUksMkNBQVM7Ozs7UUFBYjtZQUNFLElBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxLQUFLLFFBQVEsRUFBRTtnQkFDaEMsT0FBTyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDeEM7WUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7Ozs7SUFFRCw0Q0FBYTs7O0lBQWI7UUFDRSxPQUFPLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxRQUFRLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzNFLENBQUM7Ozs7OztJQUVPLDZDQUFjOzs7OztJQUF0QixVQUF1QixHQUFXO1FBQ2hDLE9BQU8sR0FBRyxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDekQsQ0FBQzs7Z0JBNUJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQiwrb0JBQTRDOztpQkFFN0M7OztzQkFJRSxLQUFLO3lCQUNMLEtBQUs7d0JBQ0wsS0FBSztxQkFDTCxLQUFLO3dCQUNMLEtBQUs7d0JBQ0wsS0FBSzs7SUFnQlIsMkJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQXhCWSxvQkFBb0I7Ozs7OztJQUMvQiw2Q0FBeUQ7O0lBRXpELG1DQUE2Qjs7SUFDN0Isc0NBQXdCOztJQUN4QixxQ0FBdUI7O0lBQ3ZCLGtDQUFvQjs7SUFDcEIscUNBQXVCOztJQUN2QixxQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgbmF2aWdhdGVzIHVzaW5nIFtyb3V0ZXJMaW5rXSBhdHRyaWJ1dGUgd2hlbiBpbnB1dCAndXJsJyBpcyBhIHJlbGF0aXZlIHVybC4gT3RoZXJ3aXNlICh3aGVuIGl0J3MgYWJzb2x1dGUpLCBbaHJlZl0gaXMgdXNlZC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZ2VuZXJpYy1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dlbmVyaWMtbGluay5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2dlbmVyaWMtbGluay5jb21wb25lbnQuc2NzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBHZW5lcmljTGlua0NvbXBvbmVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgcHJvdG9jb2xSZWdleDogUmVnRXhwID0gL15odHRwcz86XFwvXFwvL2k7XG5cbiAgQElucHV0KCkgdXJsOiBzdHJpbmcgfCBhbnlbXTtcbiAgQElucHV0KCkgdGFyZ2V0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0eWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgZ2V0IHJvdXRlclVybCgpOiBhbnlbXSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBbdGhpcy5nZXRBYnNvbHV0ZVVybCh0aGlzLnVybCldO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy51cmw7XG4gIH1cblxuICBpc0V4dGVybmFsVXJsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy51cmwgPT09ICdzdHJpbmcnICYmIHRoaXMucHJvdG9jb2xSZWdleC50ZXN0KHRoaXMudXJsKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWJzb2x1dGVVcmwodXJsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgoJy8nKSA/IHRoaXMudXJsIDogJy8nICsgdGhpcy51cmw7XG4gIH1cbn1cbiJdfQ==