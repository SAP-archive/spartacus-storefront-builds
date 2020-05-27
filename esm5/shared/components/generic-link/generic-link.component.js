import { __decorate, __read } from "tslib";
import { Component, Input } from '@angular/core';
import { Params, Router } from '@angular/router';
/**
 * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
 */
var GenericLinkComponent = /** @class */ (function () {
    function GenericLinkComponent(router) {
        this.router = router;
        /**
         * Pattern matching string starting with `http://` or `https://`.
         */
        this.PROTOCOL_REGEX = /^https?:\/\//i;
        /**
         * Used to split url into 2 parts:
         * 1. the path
         * 2. query params + hash fragment
         */
        this.URL_SPLIT = /(^[^#?]*)(.*)/;
        /**
         * Parsed parts of the @Input `url`, when it's a local URL.
         * It should not be used when the `url` is external.
         * @see `url`
         */
        this.routeParts = {};
    }
    /**
     * Returns true when the @Input `url` is a string starting with `http://` or `https://`.
     */
    GenericLinkComponent.prototype.isExternalUrl = function () {
        return typeof this.url === 'string' && this.PROTOCOL_REGEX.test(this.url);
    };
    Object.defineProperty(GenericLinkComponent.prototype, "rel", {
        get: function () {
            return this.target === '_blank' ? 'noopener' : null;
        },
        enumerable: true,
        configurable: true
    });
    GenericLinkComponent.prototype.ngOnChanges = function (changes) {
        if (changes['url']) {
            this.setUrlParts(changes['url'].currentValue);
        }
    };
    Object.defineProperty(GenericLinkComponent.prototype, "routerUrl", {
        /**
         * The part with the path of the local url.
         */
        get: function () {
            return this.routeParts.path;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericLinkComponent.prototype, "queryParams", {
        /**
         * The part with the query params of the local url.
         */
        get: function () {
            return this.routeParts.queryParams;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GenericLinkComponent.prototype, "fragment", {
        /**
         * The part with the hash fragment of the local url.
         */
        get: function () {
            return this.routeParts.fragment;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Parses the given url and sets the property `urlParts` accordingly.
     */
    GenericLinkComponent.prototype.setUrlParts = function (url) {
        if (typeof url === 'string') {
            url = this.getAbsoluteUrl(url); // string links in CMS sometimes don't have the leading slash, so fix it here
            this.routeParts = this.splitUrl(url);
        }
        else {
            this.routeParts = { path: url };
        }
    };
    /**
     * Parses the given string into 3 parts:
     * - string path (wrapped in an array to be compatible with Angular syntax for the `routerLink`)
     * - query params (as an object)
     * - hash fragment (string)
     */
    GenericLinkComponent.prototype.splitUrl = function (url) {
        if (url === void 0) { url = ''; }
        var _a = this.router.parseUrl(url), queryParams = _a.queryParams, fragment = _a.fragment;
        var _b = __read(url.match(this.URL_SPLIT), 2), path = _b[1];
        // wrap path in an array, to have the Angular-like path format
        return { path: [path], queryParams: queryParams, fragment: fragment };
    };
    /**
     * Prepends a leading slash to the given URL string, in case it doesn't have it.
     */
    GenericLinkComponent.prototype.getAbsoluteUrl = function (url) {
        return url.startsWith('/') ? url : '/' + url;
    };
    GenericLinkComponent.ctorParameters = function () { return [
        { type: Router }
    ]; };
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "url", void 0);
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "target", void 0);
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "class", void 0);
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "id", void 0);
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "style", void 0);
    __decorate([
        Input()
    ], GenericLinkComponent.prototype, "title", void 0);
    GenericLinkComponent = __decorate([
        Component({
            selector: 'cx-generic-link',
            template: "<!-- https://github.com/angular/angular/issues/24567 -->\n\n<ng-container *ngIf=\"isExternalUrl(); else isLocalUrl\">\n  <a\n    role=\"link\"\n    [href]=\"url\"\n    [attr.target]=\"target\"\n    [attr.rel]=\"rel\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-container>\n\n<ng-template #isLocalUrl>\n  <a\n    role=\"link\"\n    [routerLink]=\"routerUrl\"\n    [queryParams]=\"queryParams\"\n    [fragment]=\"fragment\"\n    [attr.target]=\"target\"\n    [attr.class]=\"class\"\n    [attr.id]=\"id\"\n    [attr.style]=\"style\"\n    [attr.title]=\"title\"\n  >\n    <ng-container *ngTemplateOutlet=\"content\"></ng-container>\n  </a>\n</ng-template>\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n"
        })
    ], GenericLinkComponent);
    return GenericLinkComponent;
}());
export { GenericLinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2dlbmVyaWMtbGluay9nZW5lcmljLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWNqRDs7R0FFRztBQUtIO0lBQ0UsOEJBQXNCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXBDOztXQUVHO1FBQ2MsbUJBQWMsR0FBVyxlQUFlLENBQUM7UUFFMUQ7Ozs7V0FJRztRQUNjLGNBQVMsR0FBRyxlQUFlLENBQUM7UUFFN0M7Ozs7V0FJRztRQUNLLGVBQVUsR0FBZSxFQUFFLENBQUM7SUFuQkcsQ0FBQztJQTRCeEM7O09BRUc7SUFDSCw0Q0FBYSxHQUFiO1FBQ0UsT0FBTyxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsc0JBQUkscUNBQUc7YUFBUDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3RELENBQUM7OztPQUFBO0lBRUQsMENBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQ2hDLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQy9DO0lBQ0gsQ0FBQztJQUtELHNCQUFJLDJDQUFTO1FBSGI7O1dBRUc7YUFDSDtZQUNFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7UUFDOUIsQ0FBQzs7O09BQUE7SUFLRCxzQkFBSSw2Q0FBVztRQUhmOztXQUVHO2FBQ0g7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDO1FBQ3JDLENBQUM7OztPQUFBO0lBS0Qsc0JBQUksMENBQVE7UUFIWjs7V0FFRzthQUNIO1lBQ0UsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUNsQyxDQUFDOzs7T0FBQTtJQUVEOztPQUVHO0lBQ0ssMENBQVcsR0FBbkIsVUFBb0IsR0FBbUI7UUFDckMsSUFBSSxPQUFPLEdBQUcsS0FBSyxRQUFRLEVBQUU7WUFDM0IsR0FBRyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyw2RUFBNkU7WUFDN0csSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQWEsQ0FBQyxDQUFDO1NBQ2hEO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsSUFBSSxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ssdUNBQVEsR0FBaEIsVUFBaUIsR0FBZ0I7UUFBaEIsb0JBQUEsRUFBQSxRQUFnQjtRQUN6QixJQUFBLDhCQUFxRCxFQUFuRCw0QkFBVyxFQUFFLHNCQUFzQyxDQUFDO1FBQ3RELElBQUEseUNBQW9DLEVBQWpDLFlBQWlDLENBQUM7UUFFM0MsOERBQThEO1FBQzlELE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLGFBQUEsRUFBRSxRQUFRLFVBQUEsRUFBRSxDQUFDO0lBQ2pELENBQUM7SUFFRDs7T0FFRztJQUNLLDZDQUFjLEdBQXRCLFVBQXVCLEdBQVc7UUFDaEMsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDL0MsQ0FBQzs7Z0JBakc2QixNQUFNOztJQXFCM0I7UUFBUixLQUFLLEVBQUU7cURBQXFCO0lBQ3BCO1FBQVIsS0FBSyxFQUFFO3dEQUFnQjtJQUNmO1FBQVIsS0FBSyxFQUFFO3VEQUFlO0lBQ2Q7UUFBUixLQUFLLEVBQUU7b0RBQVk7SUFDWDtRQUFSLEtBQUssRUFBRTt1REFBZTtJQUNkO1FBQVIsS0FBSyxFQUFFO3VEQUFlO0lBM0JaLG9CQUFvQjtRQUpoQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsaUJBQWlCO1lBQzNCLGszQkFBNEM7U0FDN0MsQ0FBQztPQUNXLG9CQUFvQixDQW1HaEM7SUFBRCwyQkFBQztDQUFBLEFBbkdELElBbUdDO1NBbkdZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG4vLyBwcml2YXRlXG5pbnRlcmZhY2UgUm91dGVQYXJ0cyB7XG4gIC8qKiBQYXRoIGluIHRoZSBBbmd1bGFyLWxpa2UgYXJyYXkgZm9ybWF0ICovXG4gIHBhdGg/OiBzdHJpbmdbXTtcblxuICAvKiogUXVlcnkgcGFyYW1zICovXG4gIHF1ZXJ5UGFyYW1zPzogUGFyYW1zO1xuXG4gIC8qKiBIYXNoIGZyYWdtZW50ICovXG4gIGZyYWdtZW50Pzogc3RyaW5nO1xufVxuXG4vKipcbiAqIFRoaXMgY29tcG9uZW50IG5hdmlnYXRlcyB1c2luZyBbcm91dGVyTGlua10gYXR0cmlidXRlIHdoZW4gaW5wdXQgJ3VybCcgaXMgYSByZWxhdGl2ZSB1cmwuIE90aGVyd2lzZSAod2hlbiBpdCdzIGFic29sdXRlKSwgW2hyZWZdIGlzIHVzZWQuXG4gKi9cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2N4LWdlbmVyaWMtbGluaycsXG4gIHRlbXBsYXRlVXJsOiAnLi9nZW5lcmljLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxufSlcbmV4cG9ydCBjbGFzcyBHZW5lcmljTGlua0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCByb3V0ZXI6IFJvdXRlcikge31cblxuICAvKipcbiAgICogUGF0dGVybiBtYXRjaGluZyBzdHJpbmcgc3RhcnRpbmcgd2l0aCBgaHR0cDovL2Agb3IgYGh0dHBzOi8vYC5cbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgUFJPVE9DT0xfUkVHRVg6IFJlZ0V4cCA9IC9eaHR0cHM/OlxcL1xcLy9pO1xuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHNwbGl0IHVybCBpbnRvIDIgcGFydHM6XG4gICAqIDEuIHRoZSBwYXRoXG4gICAqIDIuIHF1ZXJ5IHBhcmFtcyArIGhhc2ggZnJhZ21lbnRcbiAgICovXG4gIHByaXZhdGUgcmVhZG9ubHkgVVJMX1NQTElUID0gLyheW14jP10qKSguKikvO1xuXG4gIC8qKlxuICAgKiBQYXJzZWQgcGFydHMgb2YgdGhlIEBJbnB1dCBgdXJsYCwgd2hlbiBpdCdzIGEgbG9jYWwgVVJMLlxuICAgKiBJdCBzaG91bGQgbm90IGJlIHVzZWQgd2hlbiB0aGUgYHVybGAgaXMgZXh0ZXJuYWwuXG4gICAqIEBzZWUgYHVybGBcbiAgICovXG4gIHByaXZhdGUgcm91dGVQYXJ0czogUm91dGVQYXJ0cyA9IHt9O1xuXG4gIEBJbnB1dCgpIHVybDogc3RyaW5nIHwgYW55W107XG4gIEBJbnB1dCgpIHRhcmdldDogc3RyaW5nO1xuICBASW5wdXQoKSBjbGFzczogc3RyaW5nO1xuICBASW5wdXQoKSBpZDogc3RyaW5nO1xuICBASW5wdXQoKSBzdHlsZTogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgd2hlbiB0aGUgQElucHV0IGB1cmxgIGlzIGEgc3RyaW5nIHN0YXJ0aW5nIHdpdGggYGh0dHA6Ly9gIG9yIGBodHRwczovL2AuXG4gICAqL1xuICBpc0V4dGVybmFsVXJsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0eXBlb2YgdGhpcy51cmwgPT09ICdzdHJpbmcnICYmIHRoaXMuUFJPVE9DT0xfUkVHRVgudGVzdCh0aGlzLnVybCk7XG4gIH1cblxuICBnZXQgcmVsKCkge1xuICAgIHJldHVybiB0aGlzLnRhcmdldCA9PT0gJ19ibGFuaycgPyAnbm9vcGVuZXInIDogbnVsbDtcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAoY2hhbmdlc1sndXJsJ10pIHtcbiAgICAgIHRoaXMuc2V0VXJsUGFydHMoY2hhbmdlc1sndXJsJ10uY3VycmVudFZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBhcnQgd2l0aCB0aGUgcGF0aCBvZiB0aGUgbG9jYWwgdXJsLlxuICAgKi9cbiAgZ2V0IHJvdXRlclVybCgpOiBhbnlbXSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVQYXJ0cy5wYXRoO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJ0IHdpdGggdGhlIHF1ZXJ5IHBhcmFtcyBvZiB0aGUgbG9jYWwgdXJsLlxuICAgKi9cbiAgZ2V0IHF1ZXJ5UGFyYW1zKCk6IFBhcmFtcyB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVQYXJ0cy5xdWVyeVBhcmFtcztcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcGFydCB3aXRoIHRoZSBoYXNoIGZyYWdtZW50IG9mIHRoZSBsb2NhbCB1cmwuXG4gICAqL1xuICBnZXQgZnJhZ21lbnQoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZVBhcnRzLmZyYWdtZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgZ2l2ZW4gdXJsIGFuZCBzZXRzIHRoZSBwcm9wZXJ0eSBgdXJsUGFydHNgIGFjY29yZGluZ2x5LlxuICAgKi9cbiAgcHJpdmF0ZSBzZXRVcmxQYXJ0cyh1cmw6IHN0cmluZyB8IGFueVtdKSB7XG4gICAgaWYgKHR5cGVvZiB1cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICB1cmwgPSB0aGlzLmdldEFic29sdXRlVXJsKHVybCk7IC8vIHN0cmluZyBsaW5rcyBpbiBDTVMgc29tZXRpbWVzIGRvbid0IGhhdmUgdGhlIGxlYWRpbmcgc2xhc2gsIHNvIGZpeCBpdCBoZXJlXG4gICAgICB0aGlzLnJvdXRlUGFydHMgPSB0aGlzLnNwbGl0VXJsKHVybCBhcyBzdHJpbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJvdXRlUGFydHMgPSB7IHBhdGg6IHVybCB9O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBQYXJzZXMgdGhlIGdpdmVuIHN0cmluZyBpbnRvIDMgcGFydHM6XG4gICAqIC0gc3RyaW5nIHBhdGggKHdyYXBwZWQgaW4gYW4gYXJyYXkgdG8gYmUgY29tcGF0aWJsZSB3aXRoIEFuZ3VsYXIgc3ludGF4IGZvciB0aGUgYHJvdXRlckxpbmtgKVxuICAgKiAtIHF1ZXJ5IHBhcmFtcyAoYXMgYW4gb2JqZWN0KVxuICAgKiAtIGhhc2ggZnJhZ21lbnQgKHN0cmluZylcbiAgICovXG4gIHByaXZhdGUgc3BsaXRVcmwodXJsOiBzdHJpbmcgPSAnJyk6IFJvdXRlUGFydHMge1xuICAgIGNvbnN0IHsgcXVlcnlQYXJhbXMsIGZyYWdtZW50IH0gPSB0aGlzLnJvdXRlci5wYXJzZVVybCh1cmwpO1xuICAgIGNvbnN0IFssIHBhdGhdID0gdXJsLm1hdGNoKHRoaXMuVVJMX1NQTElUKTtcblxuICAgIC8vIHdyYXAgcGF0aCBpbiBhbiBhcnJheSwgdG8gaGF2ZSB0aGUgQW5ndWxhci1saWtlIHBhdGggZm9ybWF0XG4gICAgcmV0dXJuIHsgcGF0aDogW3BhdGhdLCBxdWVyeVBhcmFtcywgZnJhZ21lbnQgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVwZW5kcyBhIGxlYWRpbmcgc2xhc2ggdG8gdGhlIGdpdmVuIFVSTCBzdHJpbmcsIGluIGNhc2UgaXQgZG9lc24ndCBoYXZlIGl0LlxuICAgKi9cbiAgcHJpdmF0ZSBnZXRBYnNvbHV0ZVVybCh1cmw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKCcvJykgPyB1cmwgOiAnLycgKyB1cmw7XG4gIH1cbn1cbiJdfQ==