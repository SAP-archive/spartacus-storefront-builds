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
            const sanitizedSchema = this.jsonLdScriptFactory.sanitize(schema);
            /** @type {?} */
            const html = `<script type="application/ld+json">${sanitizedSchema}</script>`;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoianNvbi1sZC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac3BhcnRhY3VzL3N0b3JlZnJvbnQvIiwic291cmNlcyI6WyJjbXMtc3RydWN0dXJlL3Nlby9zdHJ1Y3R1cmVkLWRhdGEvanNvbi1sZC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RCxPQUFPLEVBQUUsWUFBWSxFQUFZLE1BQU0sMkJBQTJCLENBQUM7QUFDbkUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7Ozs7OztBQVUvRCxNQUFNLE9BQU8sZUFBZTs7Ozs7SUFPMUIsWUFDWSxtQkFBd0MsRUFDeEMsU0FBdUI7UUFEdkIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFxQjtRQUN4QyxjQUFTLEdBQVQsU0FBUyxDQUFjO0lBQ2hDLENBQUM7Ozs7O0lBVEosSUFBYSxRQUFRLENBQUMsTUFBdUI7UUFDM0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMzQixDQUFDOzs7Ozs7SUFTTyxXQUFXLENBQUMsTUFBVTtRQUM1QixJQUFJLE1BQU0sSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLEVBQUUsRUFBRTs7a0JBQ25ELGVBQWUsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzs7a0JBQzNELElBQUksR0FBRyxzQ0FBc0MsZUFBZSxXQUFXO1lBQzdFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUM1RDtJQUNILENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7YUFDdkI7Ozs7WUFUUSxtQkFBbUI7WUFEbkIsWUFBWTs7O3VCQVlsQixLQUFLO3FCQUlMLFdBQVcsU0FBQyxXQUFXOzs7O0lBQXhCLGlDQUEyQzs7Ozs7SUFHekMsOENBQWtEOzs7OztJQUNsRCxvQ0FBaUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEhvc3RCaW5kaW5nLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgSnNvbkxkU2NyaXB0RmFjdG9yeSB9IGZyb20gJy4vanNvbi1sZC1zY3JpcHQuZmFjdG9yeSc7XG5cbi8qKlxuICogTG93IGxldmVsIGRpcmVjdGl2ZSB0aGF0IGFkZHMgYSBqc29uLWxkIHNjcmlwdCB0YWcgdG8gdGhlIGNvbXBvbmVudC5cbiAqIFRoaXMgY29kZSBieXBhc3NlcyB0aGUgc3RyaWN0IFhTUyBzZWN1cml0eSwgYXMgb3RoZXJ3aXNlIHdlJ3JlIG5vdCBhYmxlXG4gKiB0byBhcHBlbmQgYSBzY3JpcHQgdGFnIHdpdGggSlMgaW5zaWRlLlxuICovXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbY3hKc29uTGRdJyxcbn0pXG5leHBvcnQgY2xhc3MgSnNvbkxkRGlyZWN0aXZlIHtcbiAgQElucHV0KCkgc2V0IGN4SnNvbkxkKHNjaGVtYTogc3RyaW5nIHwgbnVtYmVyKSB7XG4gICAgdGhpcy53cml0ZUpzb25MZChzY2hlbWEpO1xuICB9XG5cbiAgQEhvc3RCaW5kaW5nKCdpbm5lckhUTUwnKSBqc29uTEQ6IFNhZmVIdG1sO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByb3RlY3RlZCBqc29uTGRTY3JpcHRGYWN0b3J5OiBKc29uTGRTY3JpcHRGYWN0b3J5LFxuICAgIHByb3RlY3RlZCBzYW5pdGl6ZXI6IERvbVNhbml0aXplclxuICApIHt9XG5cbiAgcHJpdmF0ZSB3cml0ZUpzb25MZChzY2hlbWE6IHt9KSB7XG4gICAgaWYgKHNjaGVtYSAmJiB0aGlzLmpzb25MZFNjcmlwdEZhY3RvcnkuaXNKc29uTGRSZXF1aXJlZCgpKSB7XG4gICAgICBjb25zdCBzYW5pdGl6ZWRTY2hlbWEgPSB0aGlzLmpzb25MZFNjcmlwdEZhY3Rvcnkuc2FuaXRpemUoc2NoZW1hKTtcbiAgICAgIGNvbnN0IGh0bWwgPSBgPHNjcmlwdCB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiPiR7c2FuaXRpemVkU2NoZW1hfTwvc2NyaXB0PmA7XG4gICAgICB0aGlzLmpzb25MRCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKGh0bWwpO1xuICAgIH1cbiAgfVxufVxuIl19