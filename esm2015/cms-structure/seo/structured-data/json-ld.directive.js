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
export class JsonLdDirective {
    /**
     * @param {?} jsonLdScriptFactory
     * @param {?} sanitizer
     */
    constructor(jsonLdScriptFactory, sanitizer) {
        this.jsonLdScriptFactory = jsonLdScriptFactory;
        this.sanitizer = sanitizer;
    }
    /**
     * @param {?} schema
     * @return {?}
     */
    set cxJsonLd(schema) {
        this.writeJsonLd(schema);
    }
    /**
     * @private
     * @param {?} schema
     * @return {?}
     */
    writeJsonLd(schema) {
        if (schema && this.jsonLdScriptFactory.isJsonLdRequired()) {
            /** @type {?} */
            const html = `<script type="application/ld+json">${JSON.stringify(schema)}</script>`;
            this.jsonLD = this.sanitizer.bypassSecurityTrustHtml(html);
        }
    }
}
JsonLdDirective.decorators = [
    { type: Directive, args: [{
                selector: '[cxJsonLd]',
            },] }
];
/** @nocollapse */
JsonLdDirective.ctorParameters = () => [
    { type: JsonLdScriptFactory },
    { type: DomSanitizer }
];
JsonLdDirective.propDecorators = {
    cxJsonLd: [{ type: Input }],
    jsonLD: [{ type: HostBinding, args: ['innerHTML',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvanNvbi1sZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQVUvRCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFPMUIsWUFDWSxtQkFBd0MsRUFDeEMsU0FBdUI7UUFEdkIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQ2hDLENBQUM7Ozs7O0lBVEosSUFBYSxRQUFRLENBQUMsTUFBdUI7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFTTyxXQUFXLENBQUMsTUFBVTtRQUM1QixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTs7a0JBQ25ELElBQUksR0FBRyxzQ0FBc0MsSUFBSSxDQUFDLFNBQVMsQ0FDL0QsTUFBTSxDQUNQLFdBQVc7WUFDWixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDNUQ7SUFDSCxDQUFDOzs7WUF0QkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxZQUFZO2FBQ3ZCOzs7O1lBVFEsbUJBQW1CO1lBRG5CLFlBQVk7Ozt1QkFZbEIsS0FBSztxQkFJTCxXQUFXLFNBQUMsV0FBVzs7OztJQUF4QixpQ0FBMkM7Ozs7O0lBR3pDLDhDQUFrRDs7Ozs7SUFDbEQsb0NBQWlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBIb3N0QmluZGluZywgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IERvbVNhbml0aXplciwgU2FmZUh0bWwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcbmltcG9ydCB7IEpzb25MZFNjcmlwdEZhY3RvcnkgfSBmcm9tICcuL2pzb24tbGQtc2NyaXB0LmZhY3RvcnknO1xuXG4vKipcbiAqIExvdyBsZXZlbCBkaXJlY3RpdmUgdGhhdCBhZGRzIGEganNvbi1sZCBzY3JpcHQgdGFnIHRvIHRoZSBjb21wb25lbnQuXG4gKiBUaGlzIGNvZGUgYnlwYXNzZXMgdGhlIHN0cmljdCBYU1Mgc2VjdXJpdHksIGFzIG90aGVyd2lzZSB3ZSdyZSBub3QgYWJsZVxuICogdG8gYXBwZW5kIGEgc2NyaXB0IHRhZyB3aXRoIEpTIGluc2lkZS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW2N4SnNvbkxkXScsXG59KVxuZXhwb3J0IGNsYXNzIEpzb25MZERpcmVjdGl2ZSB7XG4gIEBJbnB1dCgpIHNldCBjeEpzb25MZChzY2hlbWE6IHN0cmluZyB8IG51bWJlcikge1xuICAgIHRoaXMud3JpdGVKc29uTGQoc2NoZW1hKTtcbiAgfVxuXG4gIEBIb3N0QmluZGluZygnaW5uZXJIVE1MJykganNvbkxEOiBTYWZlSHRtbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcm90ZWN0ZWQganNvbkxkU2NyaXB0RmFjdG9yeTogSnNvbkxkU2NyaXB0RmFjdG9yeSxcbiAgICBwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXJcbiAgKSB7fVxuXG4gIHByaXZhdGUgd3JpdGVKc29uTGQoc2NoZW1hOiB7fSkge1xuICAgIGlmIChzY2hlbWEgJiYgdGhpcy5qc29uTGRTY3JpcHRGYWN0b3J5LmlzSnNvbkxkUmVxdWlyZWQoKSkge1xuICAgICAgY29uc3QgaHRtbCA9IGA8c2NyaXB0IHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCI+JHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgc2NoZW1hXG4gICAgICApfTwvc2NyaXB0PmA7XG4gICAgICB0aGlzLmpzb25MRCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICAgIH1cbiAgfVxufVxuIl19