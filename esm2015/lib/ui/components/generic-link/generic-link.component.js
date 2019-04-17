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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbImxpYi91aS9jb21wb25lbnRzL2dlbmVyaWMtbGluay9nZW5lcmljLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQzs7OztBQVVqRCxNQUFNLE9BQU8sb0JBQW9CO0lBTGpDO1FBTW1CLGtCQUFhLEdBQVcsZUFBZSxDQUFDO0lBOEIzRCxDQUFDOzs7O0lBZEMsSUFBSSxTQUFTO1FBQ1gsSUFBSSxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssUUFBUSxFQUFFO1lBQ2hDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3hDO1FBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsT0FBTyxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzRSxDQUFDOzs7Ozs7SUFFTyxjQUFjLENBQUMsR0FBVztRQUNoQyxPQUFPLEdBQUcsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ3pELENBQUM7OztZQW5DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGlCQUFpQjtnQkFDM0IsaXdCQUE0Qzs7YUFFN0M7OztrQkFJRSxLQUFLO3FCQUdMLEtBQUs7b0JBRUwsS0FBSztpQkFFTCxLQUFLO29CQUVMLEtBQUs7b0JBRUwsS0FBSzs7Ozs7OztJQWJOLDZDQUF5RDs7SUFFekQsbUNBQ29COztJQUVwQixzQ0FDZTs7SUFDZixxQ0FDYzs7SUFDZCxrQ0FDVzs7SUFDWCxxQ0FDYzs7SUFDZCxxQ0FDYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBuYXZpZ2F0ZXMgdXNpbmcgW3JvdXRlckxpbmtdIGF0dHJpYnV0ZSB3aGVuIGlucHV0ICd1cmwnIGlzIGEgcmVsYXRpdmUgdXJsLiBPdGhlcndpc2UgKHdoZW4gaXQncyBhYnNvbHV0ZSksIFtocmVmXSBpcyB1c2VkLlxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdjeC1nZW5lcmljLWxpbmsnLFxuICB0ZW1wbGF0ZVVybDogJy4vZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIEdlbmVyaWNMaW5rQ29tcG9uZW50IHtcbiAgcHJpdmF0ZSByZWFkb25seSBwcm90b2NvbFJlZ2V4OiBSZWdFeHAgPSAvXmh0dHBzPzpcXC9cXC8vaTtcblxuICBASW5wdXQoKVxuICB1cmw6IHN0cmluZyB8IGFueVtdO1xuXG4gIEBJbnB1dCgpXG4gIHRhcmdldDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKVxuICBpZDogc3RyaW5nO1xuICBASW5wdXQoKVxuICBzdHlsZTogc3RyaW5nO1xuICBASW5wdXQoKVxuICB0aXRsZTogc3RyaW5nO1xuXG4gIGdldCByb3V0ZXJVcmwoKTogYW55W10ge1xuICAgIGlmICh0eXBlb2YgdGhpcy51cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXR1cm4gW3RoaXMuZ2V0QWJzb2x1dGVVcmwodGhpcy51cmwpXTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudXJsO1xuICB9XG5cbiAgaXNFeHRlcm5hbFVybCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdHlwZW9mIHRoaXMudXJsID09PSAnc3RyaW5nJyAmJiB0aGlzLnByb3RvY29sUmVnZXgudGVzdCh0aGlzLnVybCk7XG4gIH1cblxuICBwcml2YXRlIGdldEFic29sdXRlVXJsKHVybDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKCcvJykgPyB0aGlzLnVybCA6ICcvJyArIHRoaXMudXJsO1xuICB9XG59XG4iXX0=