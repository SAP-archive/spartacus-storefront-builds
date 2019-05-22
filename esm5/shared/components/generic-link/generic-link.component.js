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
    Object.defineProperty(GenericLinkComponent.prototype, "rel", {
        get: /**
         * @return {?}
         */
        function () {
            return this.target === '_blank' ? 'noopener' : null;
        },
        enumerable: true,
        configurable: true
    });
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
                    template: "<!-- https://github.com/angular/angular/issues/24567 -->\n\n<ng-container *ngIf=\"isExternalUrl(); else isLocalUrl\">\n  <a\n    role=\"link\"\n    [href]=\"url\"\n    [attr.target]=\"target\"\n    [attr.rel]=\"rel\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-content></ng-content>\n  </a>\n</ng-container>\n\n<ng-template #isLocalUrl>\n  <a\n    role=\"link\"\n    [routerLink]=\"routerUrl\"\n    [attr.target]=\"target\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-content></ng-content>\n  </a>\n</ng-template>\n",
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2dlbmVyaWMtbGluay9nZW5lcmljLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQUtqRDtJQUFBO1FBTW1CLGtCQUFhLEdBQVcsZUFBZSxDQUFDO0lBMkIzRCxDQUFDO0lBbEJDLHNCQUFJLHFDQUFHOzs7O1FBQVA7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN0RCxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDJDQUFTOzs7O1FBQWI7WUFDRSxJQUFJLE9BQU8sSUFBSSxDQUFDLEdBQUcsS0FBSyxRQUFRLEVBQUU7Z0JBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ3hDO1lBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO1FBQ2xCLENBQUM7OztPQUFBOzs7O0lBRUQsNENBQWE7OztJQUFiO1FBQ0UsT0FBTyxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7Ozs7SUFFTyw2Q0FBYzs7Ozs7SUFBdEIsVUFBdUIsR0FBVztRQUNoQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3pELENBQUM7O2dCQWhDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtvQkFDM0IsdXFCQUE0Qzs7aUJBRTdDOzs7c0JBSUUsS0FBSzt5QkFDTCxLQUFLO3dCQUNMLEtBQUs7cUJBQ0wsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7O0lBb0JSLDJCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7U0E1Qlksb0JBQW9COzs7Ozs7SUFDL0IsNkNBQXlEOztJQUV6RCxtQ0FBNkI7O0lBQzdCLHNDQUF3Qjs7SUFDeEIscUNBQXVCOztJQUN2QixrQ0FBb0I7O0lBQ3BCLHFDQUF1Qjs7SUFDdkIscUNBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IG5hdmlnYXRlcyB1c2luZyBbcm91dGVyTGlua10gYXR0cmlidXRlIHdoZW4gaW5wdXQgJ3VybCcgaXMgYSByZWxhdGl2ZSB1cmwuIE90aGVyd2lzZSAod2hlbiBpdCdzIGFic29sdXRlKSwgW2hyZWZdIGlzIHVzZWQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWdlbmVyaWMtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9nZW5lcmljLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9nZW5lcmljLWxpbmsuY29tcG9uZW50LnNjc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgR2VuZXJpY0xpbmtDb21wb25lbnQge1xuICBwcml2YXRlIHJlYWRvbmx5IHByb3RvY29sUmVnZXg6IFJlZ0V4cCA9IC9eaHR0cHM/OlxcL1xcLy9pO1xuXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nIHwgYW55W107XG4gIEBJbnB1dCgpIHRhcmdldDogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZTogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gIGdldCByZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0ID09PSAnX2JsYW5rJyA/ICdub29wZW5lcicgOiBudWxsO1xuICB9XG5cbiAgZ2V0IHJvdXRlclVybCgpOiBhbnlbXSB7XG4gICAgaWYgKHR5cGVvZiB0aGlzLnVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBbdGhpcy5nZXRBYnNvbHV0ZVVybCh0aGlzLnVybCldO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy51cmw7XG4gIH1cblxuICBpc0V4dGVybmFsVXJsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy51cmwgPT09ICdzdHJpbmcnICYmIHRoaXMucHJvdG9jb2xSZWdleC50ZXN0KHRoaXMudXJsKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWJzb2x1dGVVcmwodXJsOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgoJy8nKSA/IHRoaXMudXJsIDogJy8nICsgdGhpcy51cmw7XG4gIH1cbn1cbiJdfQ==