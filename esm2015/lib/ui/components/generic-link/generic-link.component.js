/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
 */
export class GenericLinkComponent {
    constructor() {
        this.protocolRegex = /^https?:\/\//i;
    }
    /**
     * @return {?}
     */
    get routerUrl() {
        if (typeof this.url === 'string') {
            return [this.getAbsoluteUrl(this.url)];
        }
        return this.url;
    }
    /**
     * @return {?}
     */
    isExternalUrl() {
        return typeof this.url === 'string' && this.protocolRegex.test(this.url);
    }
    /**
     * @private
     * @param {?} url
     * @return {?}
     */
    getAbsoluteUrl(url) {
        return url.startsWith('/') ? this.url : '/' + this.url;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9jb21wb25lbnRzL2dlbmVyaWMtbGluay9nZW5lcmljLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVVqRCxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBTW1CLGtCQUFhLEdBQVcsZUFBZSxDQUFDO0lBdUIzRCxDQUFDOzs7O0lBZEMsSUFBSSxTQUFTO1FBQ1gsSUFBSSxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsT0FBTyxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsR0FBVztRQUNoQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3pELENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsK29CQUE0Qzs7YUFFN0M7OztrQkFJRSxLQUFLO3FCQUNMLEtBQUs7b0JBQ0wsS0FBSztpQkFDTCxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzs7Ozs7OztJQVBOLDZDQUF5RDs7SUFFekQsbUNBQTZCOztJQUM3QixzQ0FBd0I7O0lBQ3hCLHFDQUF1Qjs7SUFDdkIsa0NBQW9COztJQUNwQixxQ0FBdUI7O0lBQ3ZCLHFDQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBuYXZpZ2F0ZXMgdXNpbmcgW3JvdXRlckxpbmtdIGF0dHJpYnV0ZSB3aGVuIGlucHV0ICd1cmwnIGlzIGEgcmVsYXRpdmUgdXJsLiBPdGhlcndpc2UgKHdoZW4gaXQncyBhYnNvbHV0ZSksIFtocmVmXSBpcyB1c2VkLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1nZW5lcmljLWxpbmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdlbmVyaWNMaW5rQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBwcm90b2NvbFJlZ2V4OiBSZWdFeHAgPSAvXmh0dHBzPzpcXC9cXC8vaTtcblxuICBASW5wdXQoKSB1cmw6IHN0cmluZyB8IGFueVtdO1xuICBASW5wdXQoKSB0YXJnZXQ6IHN0cmluZztcbiAgQElucHV0KCkgY2xhc3M6IHN0cmluZztcbiAgQElucHV0KCkgaWQ6IHN0cmluZztcbiAgQElucHV0KCkgc3R5bGU6IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU6IHN0cmluZztcblxuICBnZXQgcm91dGVyVXJsKCk6IGFueVtdIHtcbiAgICBpZiAodHlwZW9mIHRoaXMudXJsID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIFt0aGlzLmdldEFic29sdXRlVXJsKHRoaXMudXJsKV07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnVybDtcbiAgfVxuXG4gIGlzRXh0ZXJuYWxVcmwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnVybCA9PT0gJ3N0cmluZycgJiYgdGhpcy5wcm90b2NvbFJlZ2V4LnRlc3QodGhpcy51cmwpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRBYnNvbHV0ZVVybCh1cmw6IHN0cmluZykge1xuICAgIHJldHVybiB1cmwuc3RhcnRzV2l0aCgnLycpID8gdGhpcy51cmwgOiAnLycgKyB0aGlzLnVybDtcbiAgfVxufVxuIl19