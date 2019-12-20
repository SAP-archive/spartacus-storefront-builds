/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, HostBinding, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { JsonLdScriptFactory } from './json-ld-script.factory';
/**
 * Low level directive that adds a json-ld script tag to the component.
 * This code bypasses the strict XSS security, as otherwise we're not able
 * to append a script tag with JS inside.
 */
var JsonLdDirective = /** @class */ (function () {
    function JsonLdDirective(jsonLdScriptFactory, sanitizer) {
        this.jsonLdScriptFactory = jsonLdScriptFactory;
        this.sanitizer = sanitizer;
    }
    Object.defineProperty(JsonLdDirective.prototype, "cxJsonLd", {
        set: /**
         * @param {?} schema
         * @return {?}
         */
        function (schema) {
            this.writeJsonLd(schema);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @private
     * @param {?} schema
     * @return {?}
     */
    JsonLdDirective.prototype.writeJsonLd = /**
     * @private
     * @param {?} schema
     * @return {?}
     */
    function (schema) {
        if (schema && this.jsonLdScriptFactory.isJsonLdRequired()) {
            /** @type {?} */
            var sanitizedSchema = this.jsonLdScriptFactory.sanitize(schema);
            /** @type {?} */
            var html = "<script type=\"application/ld+json\">" + sanitizedSchema + "</script>";
            this.jsonLD = this.sanitizer.bypassSecurityTrustHtml(html);
        }
    };
    JsonLdDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[cxJsonLd]',
                },] }
    ];
    /** @nocollapse */
    JsonLdDirective.ctorParameters = function () { return [
        { type: JsonLdScriptFactory },
        { type: DomSanitizer }
    ]; };
    JsonLdDirective.propDecorators = {
        cxJsonLd: [{ type: Input }],
        jsonLD: [{ type: HostBinding, args: ['innerHTML',] }]
    };
    return JsonLdDirective;
}());
export { JsonLdDirective };
if (false) {
    /** @type {?} */
    JsonLdDirective.prototype.jsonLD;
    /**
     * @type {?}
     * @protected
     */
    JsonLdDirective.prototype.jsonLdScriptFactory;
    /**
     * @type {?}
     * @protected
     */
    JsonLdDirective.prototype.sanitizer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvanNvbi1sZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQU8vRDtJQVVFLHlCQUNZLG1CQUF3QyxFQUN4QyxTQUF1QjtRQUR2Qix3QkFBbUIsR0FBbkIsbUJBQW1CLENBQXFCO1FBQ3hDLGNBQVMsR0FBVCxTQUFTLENBQWM7SUFDaEMsQ0FBQztJQVRKLHNCQUFhLHFDQUFROzs7OztRQUFyQixVQUFzQixNQUF1QjtZQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQUFBOzs7Ozs7SUFTTyxxQ0FBVzs7Ozs7SUFBbkIsVUFBb0IsTUFBVTtRQUM1QixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTs7Z0JBQ25ELGVBQWUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7Z0JBQzNELElBQUksR0FBRywwQ0FBc0MsZUFBZSxjQUFXO1lBQzdFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFlBQVk7aUJBQ3ZCOzs7O2dCQVRRLG1CQUFtQjtnQkFEbkIsWUFBWTs7OzJCQVlsQixLQUFLO3lCQUlMLFdBQVcsU0FBQyxXQUFXOztJQWMxQixzQkFBQztDQUFBLEFBdEJELElBc0JDO1NBbkJZLGVBQWU7OztJQUsxQixpQ0FBMkM7Ozs7O0lBR3pDLDhDQUFrRDs7Ozs7SUFDbEQsb0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEpzb25MZFNjcmlwdEZhY3RvcnkgfSBmcm9tICcuL2pzb24tbGQtc2NyaXB0LmZhY3RvcnknO1xuXG4vKipcbiAqIExvdyBsZXZlbCBkaXJlY3RpdmUgdGhhdCBhZGRzIGEganNvbi1sZCBzY3JpcHQgdGFnIHRvIHRoZSBjb21wb25lbnQuXG4gKiBUaGlzIGNvZGUgYnlwYXNzZXMgdGhlIHN0cmljdCBYU1Mgc2VjdXJpdHksIGFzIG90aGVyd2lzZSB3ZSdyZSBub3QgYWJsZVxuICogdG8gYXBwZW5kIGEgc2NyaXB0IHRhZyB3aXRoIEpTIGluc2lkZS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4SnNvbkxkXScsXG59KVxuZXhwb3J0IGNsYXNzIEpzb25MZERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHNldCBjeEpzb25MZChzY2hlbWE6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMud3JpdGVKc29uTGQoc2NoZW1hKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnaW5uZXJIVE1MJykganNvbkxEOiBTYWZlSHRtbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQganNvbkxkU2NyaXB0RmFjdG9yeTogSnNvbkxkU2NyaXB0RmFjdG9yeSxcbiAgICBwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7fVxuXG4gIHByaXZhdGUgd3JpdGVKc29uTGQoc2NoZW1hOiB7fSkge1xuICAgIGlmIChzY2hlbWEgJiYgdGhpcy5qc29uTGRTY3JpcHRGYWN0b3J5LmlzSnNvbkxkUmVxdWlyZWQoKSkge1xuICAgICAgY29uc3Qgc2FuaXRpemVkU2NoZW1hID0gdGhpcy5qc29uTGRTY3JpcHRGYWN0b3J5LnNhbml0aXplKHNjaGVtYSk7XG4gICAgICBjb25zdCBodG1sID0gYDxzY3JpcHQgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIj4ke3Nhbml0aXplZFNjaGVtYX08L3NjcmlwdD5gO1xuICAgICAgdGhpcy5qc29uTEQgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbChodG1sKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==