import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
import { Params, Router } from '@angular/router';
/**
 * This component navigates using [routerLink] attribute when input 'url' is a relative url. Otherwise (when it's absolute), [href] is used.
 */
let GenericLinkComponent = class GenericLinkComponent {
    constructor(router) {
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
    isExternalUrl() {
        return typeof this.url === 'string' && this.PROTOCOL_REGEX.test(this.url);
    }
    get rel() {
        return this.target === '_blank' ? 'noopener' : null;
    }
    ngOnChanges(changes) {
        if (changes['url']) {
            this.setUrlParts(changes['url'].currentValue);
        }
    }
    /**
     * The part with the path of the local url.
     */
    get routerUrl() {
        return this.routeParts.path;
    }
    /**
     * The part with the query params of the local url.
     */
    get queryParams() {
        return this.routeParts.queryParams;
    }
    /**
     * The part with the hash fragment of the local url.
     */
    get fragment() {
        return this.routeParts.fragment;
    }
    /**
     * Parses the given url and sets the property `urlParts` accordingly.
     */
    setUrlParts(url) {
        if (typeof url === 'string') {
            url = this.getAbsoluteUrl(url); // string links in CMS sometimes don't have the leading slash, so fix it here
            this.routeParts = this.splitUrl(url);
        }
        else {
            this.routeParts = { path: url };
        }
    }
    /**
     * Parses the given string into 3 parts:
     * - string path (wrapped in an array to be compatible with Angular syntax for the `routerLink`)
     * - query params (as an object)
     * - hash fragment (string)
     */
    splitUrl(url = '') {
        const { queryParams, fragment } = this.router.parseUrl(url);
        const [, path] = url.match(this.URL_SPLIT);
        // wrap path in an array, to have the Angular-like path format
        return { path: [path], queryParams, fragment };
    }
    /**
     * Prepends a leading slash to the given URL string, in case it doesn't have it.
     */
    getAbsoluteUrl(url) {
        return url.startsWith('/') ? url : '/' + url;
    }
};
GenericLinkComponent.ctorParameters = () => [
    { type: Router }
];
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
export { GenericLinkComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1saW5rLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvc3RvcmVmcm9udC8iLCJzb3VyY2VzIjpbInNoYXJlZC9jb21wb25lbnRzL2dlbmVyaWMtbGluay9nZW5lcmljLWxpbmsuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFDM0UsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQWNqRDs7R0FFRztBQUtILElBQWEsb0JBQW9CLEdBQWpDLE1BQWEsb0JBQW9CO0lBQy9CLFlBQXNCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBRXBDOztXQUVHO1FBQ2MsbUJBQWMsR0FBVyxlQUFlLENBQUM7UUFFMUQ7Ozs7V0FJRztRQUNjLGNBQVMsR0FBRyxlQUFlLENBQUM7UUFFN0M7Ozs7V0FJRztRQUNLLGVBQVUsR0FBZSxFQUFFLENBQUM7SUFuQkcsQ0FBQztJQTRCeEM7O09BRUc7SUFDSCxhQUFhO1FBQ1gsT0FBTyxPQUFPLElBQUksQ0FBQyxHQUFHLEtBQUssUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1RSxDQUFDO0lBRUQsSUFBSSxHQUFHO1FBQ0wsT0FBTyxJQUFJLENBQUMsTUFBTSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEQsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztTQUMvQztJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILElBQUksU0FBUztRQUNYLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUM7SUFDOUIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztJQUNyQyxDQUFDO0lBRUQ7O09BRUc7SUFDSCxJQUFJLFFBQVE7UUFDVixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDO0lBQ2xDLENBQUM7SUFFRDs7T0FFRztJQUNLLFdBQVcsQ0FBQyxHQUFtQjtRQUNyQyxJQUFJLE9BQU8sR0FBRyxLQUFLLFFBQVEsRUFBRTtZQUMzQixHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLDZFQUE2RTtZQUM3RyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBYSxDQUFDLENBQUM7U0FDaEQ7YUFBTTtZQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDakM7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxRQUFRLENBQUMsTUFBYyxFQUFFO1FBQy9CLE1BQU0sRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDNUQsTUFBTSxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFM0MsOERBQThEO1FBQzlELE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDakQsQ0FBQztJQUVEOztPQUVHO0lBQ0ssY0FBYyxDQUFDLEdBQVc7UUFDaEMsT0FBTyxHQUFHLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDL0MsQ0FBQztDQUNGLENBQUE7O1lBbEcrQixNQUFNOztBQXFCM0I7SUFBUixLQUFLLEVBQUU7aURBQXFCO0FBQ3BCO0lBQVIsS0FBSyxFQUFFO29EQUFnQjtBQUNmO0lBQVIsS0FBSyxFQUFFO21EQUFlO0FBQ2Q7SUFBUixLQUFLLEVBQUU7Z0RBQVk7QUFDWDtJQUFSLEtBQUssRUFBRTttREFBZTtBQUNkO0lBQVIsS0FBSyxFQUFFO21EQUFlO0FBM0JaLG9CQUFvQjtJQUpoQyxTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsaUJBQWlCO1FBQzNCLGszQkFBNEM7S0FDN0MsQ0FBQztHQUNXLG9CQUFvQixDQW1HaEM7U0FuR1ksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQYXJhbXMsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbi8vIHByaXZhdGVcbmludGVyZmFjZSBSb3V0ZVBhcnRzIHtcbiAgLyoqIFBhdGggaW4gdGhlIEFuZ3VsYXItbGlrZSBhcnJheSBmb3JtYXQgKi9cbiAgcGF0aD86IHN0cmluZ1tdO1xuXG4gIC8qKiBRdWVyeSBwYXJhbXMgKi9cbiAgcXVlcnlQYXJhbXM/OiBQYXJhbXM7XG5cbiAgLyoqIEhhc2ggZnJhZ21lbnQgKi9cbiAgZnJhZ21lbnQ/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogVGhpcyBjb21wb25lbnQgbmF2aWdhdGVzIHVzaW5nIFtyb3V0ZXJMaW5rXSBhdHRyaWJ1dGUgd2hlbiBpbnB1dCAndXJsJyBpcyBhIHJlbGF0aXZlIHVybC4gT3RoZXJ3aXNlICh3aGVuIGl0J3MgYWJzb2x1dGUpLCBbaHJlZl0gaXMgdXNlZC5cbiAqL1xuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY3gtZ2VuZXJpYy1saW5rJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2dlbmVyaWMtbGluay5jb21wb25lbnQuaHRtbCcsXG59KVxuZXhwb3J0IGNsYXNzIEdlbmVyaWNMaW5rQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIC8qKlxuICAgKiBQYXR0ZXJuIG1hdGNoaW5nIHN0cmluZyBzdGFydGluZyB3aXRoIGBodHRwOi8vYCBvciBgaHR0cHM6Ly9gLlxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBQUk9UT0NPTF9SRUdFWDogUmVnRXhwID0gL15odHRwcz86XFwvXFwvL2k7XG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gc3BsaXQgdXJsIGludG8gMiBwYXJ0czpcbiAgICogMS4gdGhlIHBhdGhcbiAgICogMi4gcXVlcnkgcGFyYW1zICsgaGFzaCBmcmFnbWVudFxuICAgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBVUkxfU1BMSVQgPSAvKF5bXiM/XSopKC4qKS87XG5cbiAgLyoqXG4gICAqIFBhcnNlZCBwYXJ0cyBvZiB0aGUgQElucHV0IGB1cmxgLCB3aGVuIGl0J3MgYSBsb2NhbCBVUkwuXG4gICAqIEl0IHNob3VsZCBub3QgYmUgdXNlZCB3aGVuIHRoZSBgdXJsYCBpcyBleHRlcm5hbC5cbiAgICogQHNlZSBgdXJsYFxuICAgKi9cbiAgcHJpdmF0ZSByb3V0ZVBhcnRzOiBSb3V0ZVBhcnRzID0ge307XG5cbiAgQElucHV0KCkgdXJsOiBzdHJpbmcgfCBhbnlbXTtcbiAgQElucHV0KCkgdGFyZ2V0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIGNsYXNzOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGlkOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN0eWxlOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSB3aGVuIHRoZSBASW5wdXQgYHVybGAgaXMgYSBzdHJpbmcgc3RhcnRpbmcgd2l0aCBgaHR0cDovL2Agb3IgYGh0dHBzOi8vYC5cbiAgICovXG4gIGlzRXh0ZXJuYWxVcmwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiB0aGlzLnVybCA9PT0gJ3N0cmluZycgJiYgdGhpcy5QUk9UT0NPTF9SRUdFWC50ZXN0KHRoaXMudXJsKTtcbiAgfVxuXG4gIGdldCByZWwoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0ID09PSAnX2JsYW5rJyA/ICdub29wZW5lcicgOiBudWxsO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmIChjaGFuZ2VzWyd1cmwnXSkge1xuICAgICAgdGhpcy5zZXRVcmxQYXJ0cyhjaGFuZ2VzWyd1cmwnXS5jdXJyZW50VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgcGFydCB3aXRoIHRoZSBwYXRoIG9mIHRoZSBsb2NhbCB1cmwuXG4gICAqL1xuICBnZXQgcm91dGVyVXJsKCk6IGFueVtdIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZVBhcnRzLnBhdGg7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHBhcnQgd2l0aCB0aGUgcXVlcnkgcGFyYW1zIG9mIHRoZSBsb2NhbCB1cmwuXG4gICAqL1xuICBnZXQgcXVlcnlQYXJhbXMoKTogUGFyYW1zIHtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZVBhcnRzLnF1ZXJ5UGFyYW1zO1xuICB9XG5cbiAgLyoqXG4gICAqIFRoZSBwYXJ0IHdpdGggdGhlIGhhc2ggZnJhZ21lbnQgb2YgdGhlIGxvY2FsIHVybC5cbiAgICovXG4gIGdldCBmcmFnbWVudCgpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnJvdXRlUGFydHMuZnJhZ21lbnQ7XG4gIH1cblxuICAvKipcbiAgICogUGFyc2VzIHRoZSBnaXZlbiB1cmwgYW5kIHNldHMgdGhlIHByb3BlcnR5IGB1cmxQYXJ0c2AgYWNjb3JkaW5nbHkuXG4gICAqL1xuICBwcml2YXRlIHNldFVybFBhcnRzKHVybDogc3RyaW5nIHwgYW55W10pIHtcbiAgICBpZiAodHlwZW9mIHVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHVybCA9IHRoaXMuZ2V0QWJzb2x1dGVVcmwodXJsKTsgLy8gc3RyaW5nIGxpbmtzIGluIENNUyBzb21ldGltZXMgZG9uJ3QgaGF2ZSB0aGUgbGVhZGluZyBzbGFzaCwgc28gZml4IGl0IGhlcmVcbiAgICAgIHRoaXMucm91dGVQYXJ0cyA9IHRoaXMuc3BsaXRVcmwodXJsIGFzIHN0cmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucm91dGVQYXJ0cyA9IHsgcGF0aDogdXJsIH07XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFBhcnNlcyB0aGUgZ2l2ZW4gc3RyaW5nIGludG8gMyBwYXJ0czpcbiAgICogLSBzdHJpbmcgcGF0aCAod3JhcHBlZCBpbiBhbiBhcnJheSB0byBiZSBjb21wYXRpYmxlIHdpdGggQW5ndWxhciBzeW50YXggZm9yIHRoZSBgcm91dGVyTGlua2ApXG4gICAqIC0gcXVlcnkgcGFyYW1zIChhcyBhbiBvYmplY3QpXG4gICAqIC0gaGFzaCBmcmFnbWVudCAoc3RyaW5nKVxuICAgKi9cbiAgcHJpdmF0ZSBzcGxpdFVybCh1cmw6IHN0cmluZyA9ICcnKTogUm91dGVQYXJ0cyB7XG4gICAgY29uc3QgeyBxdWVyeVBhcmFtcywgZnJhZ21lbnQgfSA9IHRoaXMucm91dGVyLnBhcnNlVXJsKHVybCk7XG4gICAgY29uc3QgWywgcGF0aF0gPSB1cmwubWF0Y2godGhpcy5VUkxfU1BMSVQpO1xuXG4gICAgLy8gd3JhcCBwYXRoIGluIGFuIGFycmF5LCB0byBoYXZlIHRoZSBBbmd1bGFyLWxpa2UgcGF0aCBmb3JtYXRcbiAgICByZXR1cm4geyBwYXRoOiBbcGF0aF0sIHF1ZXJ5UGFyYW1zLCBmcmFnbWVudCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFByZXBlbmRzIGEgbGVhZGluZyBzbGFzaCB0byB0aGUgZ2l2ZW4gVVJMIHN0cmluZywgaW4gY2FzZSBpdCBkb2Vzbid0IGhhdmUgaXQuXG4gICAqL1xuICBwcml2YXRlIGdldEFic29sdXRlVXJsKHVybDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgoJy8nKSA/IHVybCA6ICcvJyArIHVybDtcbiAgfVxufVxuIl19